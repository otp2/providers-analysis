/**
 * Provider Form Conditional Logic Implementation
 * 
 * This module implements the conditional logic for showing/hiding fields
 * based on provider status, provider type, and other dependencies.
 */

// Enum-like constants for provider status
const PROVIDER_STATUS = {
    INTERNAL: 'internal',
    EXTERNAL_AFFILIATED: 'external-affiliated',
    EXTERNAL_NON_AFFILIATED: 'external-non-affiliated'
};

// Enum-like constants for provider titles
const PROVIDER_TITLE = {
    PSYCHIATRIST: 'psychiatrist',
    PSYCHOLOGIST: 'psychologist',
    THERAPIST: 'therapist',
    PHYSICIAN: 'physician',
    NURSE_PRACTITIONER: 'nurse-practitioner',
    PHYSICIAN_ASSISTANT: 'physician-assistant'
};

/**
 * FieldVisibilityManager handles the conditional logic for field visibility
 */
class FieldVisibilityManager {
    constructor() {
        this.formData = {
            providerStatus: null,
            showOnWebsite: false,
            title: null,
            availabilityStatus: null
        };
        
        // Fields grouped by their conditional visibility rules
        this.internalOnlyFields = [
            'professionalTitles',
            'hospitalAffiliation',
            'awardsHonors',
            'medicalSchool',
            'medicalSchoolYear',
            'therapistEducation',
            'educationYear',
            'residency',
            'residencyYear',
            'fellowship',
            'fellowshipYear',
            'boardCertifications',
            'researchFocus',
            'pronouns',
            'culturalIdentity',
            'mobilePhone',
            'headshot',
            'video',
            'bio',
            'philosophyOfCare',
            'endeavorStatement',
            'personalInterests',
            'evalInfo',
            'otherConsiderations'
        ];
        
        this.medicalProviderFields = [
            'medicalSchool',
            'medicalSchoolYear',
            'residency',
            'residencyYear',
            'fellowship',
            'fellowshipYear',
            'boardCertifications'
        ];
        
        this.therapistProviderFields = [
            'therapistEducation',
            'educationYear'
        ];
        
        this.websiteRequiredFields = [
            'headshot',
            'bio',
            'philosophyOfCare',
            'endeavorStatement'
        ];
        
        this.availabilityDependentFields = [
            'soonestAvailability'
        ];
        
        // Track field requirements
        this.requiredFields = new Set([
            'firstName',
            'lastName',
            'npi',
            'credentials',
            'accountName',
            'title',
            'license',
            'yearsInPractice',
            'gender',
            'languages',
            'webSpecialty',
            'agesSeen',
            'clinicalFocus',
            'specialties',
            'treatmentModalities',
            'providerLevelTreatment',
            'insurancePanels',
            'eveningHours',
            'weekendHours',
            'availabilityStatus',
            'serviceDeliveryMode',
            'location',
            'phoneNumber',
            'emailAddress',
            'mailingStreet',
            'mailingCity',
            'mailingState',
            'mailingZip',
            'mailingCountry',
            'buildingName'
        ]);
    }
    
    /**
     * Update form data and recalculate field visibility and requirements
     * @param {string} fieldName - The name of the field being updated
     * @param {any} value - The new value of the field
     * @returns {Object} Updated visibility and requirement states
     */
    updateField(fieldName, value) {
        // Update form data
        this.formData[fieldName] = value;
        
        // Recalculate visibility and requirements
        const result = this.calculateFieldStates();
        
        // If certain key fields changed, we might need to trigger additional logic
        if (['providerStatus', 'title', 'showOnWebsite', 'availabilityStatus'].includes(fieldName)) {
            result.recalculateAll = true;
        }
        
        return result;
    }
    
    /**
     * Calculate the visibility and requirement state for all fields
     * @returns {Object} Field states with visibility and requirements
     */
    calculateFieldStates() {
        const fieldStates = {};
        
        // Process internal-only fields
        this.internalOnlyFields.forEach(fieldName => {
            fieldStates[fieldName] = {
                visible: this.formData.providerStatus === PROVIDER_STATUS.INTERNAL,
                required: this.requiredFields.has(fieldName)
            };
        });
        
        // Process medical provider fields
        const isMedicalProvider = 
            this.formData.title === PROVIDER_TITLE.PSYCHIATRIST || 
            this.formData.title === PROVIDER_TITLE.PHYSICIAN;
        
        this.medicalProviderFields.forEach(fieldName => {
            fieldStates[fieldName] = {
                visible: this.formData.providerStatus === PROVIDER_STATUS.INTERNAL && isMedicalProvider,
                required: (fieldName === 'medicalSchool' || fieldName === 'residency') && 
                          this.formData.providerStatus === PROVIDER_STATUS.INTERNAL && 
                          isMedicalProvider
            };
        });
        
        // Process therapist provider fields
        const isTherapistProvider = 
            this.formData.title === PROVIDER_TITLE.THERAPIST || 
            this.formData.title === PROVIDER_TITLE.PSYCHOLOGIST;
        
        this.therapistProviderFields.forEach(fieldName => {
            fieldStates[fieldName] = {
                visible: this.formData.providerStatus === PROVIDER_STATUS.INTERNAL && isTherapistProvider,
                required: fieldName === 'therapistEducation' && 
                          this.formData.providerStatus === PROVIDER_STATUS.INTERNAL && 
                          isTherapistProvider
            };
        });
        
        // Process website display fields
        const showOnWebsite = 
            this.formData.providerStatus === PROVIDER_STATUS.INTERNAL && 
            this.formData.showOnWebsite;
        
        this.websiteRequiredFields.forEach(fieldName => {
            if (fieldStates[fieldName]) {
                fieldStates[fieldName].required = showOnWebsite;
            }
        });
        
        // Process availability-dependent fields
        const availabilityOpen = 
            this.formData.availabilityStatus === 'open' || 
            this.formData.availabilityStatus === 'limited';
        
        this.availabilityDependentFields.forEach(fieldName => {
            fieldStates[fieldName] = {
                visible: availabilityOpen,
                required: availabilityOpen
            };
        });
        
        return { fieldStates };
    }
    
    /**
     * Check if the form is valid based on current field values and requirements
     * @param {Object} formValues - Current values of all form fields
     * @returns {Object} Validation result with isValid flag and error messages
     */
    validateForm(formValues) {
        const fieldStates = this.calculateFieldStates().fieldStates;
        const errors = {};
        let isValid = true;
        
        // Check each field for validity
        Object.keys(fieldStates).forEach(fieldName => {
            const state = fieldStates[fieldName];
            if (state.visible && state.required && !formValues[fieldName]) {
                errors[fieldName] = `${fieldName} is required`;
                isValid = false;
            }
        });
        
        // Also check standard required fields
        this.requiredFields.forEach(fieldName => {
            if (!formValues[fieldName]) {
                errors[fieldName] = `${fieldName} is required`;
                isValid = false;
            }
        });
        
        return { isValid, errors };
    }
    
    /**
     * Reset the form state to defaults
     */
    resetForm() {
        this.formData = {
            providerStatus: null,
            showOnWebsite: false,
            title: null,
            availabilityStatus: null
        };
        
        return this.calculateFieldStates();
    }
}

/**
 * Specialized class for handling the conditional logic in the Education section
 */
class EducationLogicManager {
    constructor(fieldVisibilityManager) {
        this.fieldVisibilityManager = fieldVisibilityManager;
    }
    
    /**
     * Determine which Education fields should be displayed based on provider type
     * @param {string} providerStatus - The provider's status (internal/external)
     * @param {string} providerTitle - The provider's professional title
     * @returns {Object} Visibility state for education fields
     */
    getEducationFieldVisibility(providerStatus, providerTitle) {
        const isInternal = providerStatus === PROVIDER_STATUS.INTERNAL;
        const isMedicalProvider = 
            providerTitle === PROVIDER_TITLE.PSYCHIATRIST || 
            providerTitle === PROVIDER_TITLE.PHYSICIAN;
        const isTherapistProvider = 
            providerTitle === PROVIDER_TITLE.THERAPIST || 
            providerTitle === PROVIDER_TITLE.PSYCHOLOGIST;
        
        return {
            // Show entire education section only for internal providers
            sectionVisible: isInternal,
            
            // Medical provider fields
            medicalFields: {
                visible: isInternal && isMedicalProvider,
                required: {
                    medicalSchool: isInternal && isMedicalProvider,
                    residency: isInternal && isMedicalProvider,
                    fellowship: false, // Optional even for medical providers
                    boardCertifications: false // Optional
                }
            },
            
            // Therapist provider fields
            therapistFields: {
                visible: isInternal && isTherapistProvider,
                required: {
                    therapistEducation: isInternal && isTherapistProvider,
                    educationYear: isInternal && isTherapistProvider
                }
            },
            
            // Fields for all provider types
            commonFields: {
                visible: isInternal,
                required: false // Research focus is optional for all
            }
        };
    }
}

/**
 * Manages the display of clinical specialties based on provider type and specialty area
 */
class SpecialtyManager {
    constructor() {
        // Map of provider titles to recommended specialty categories
        this.titleToSpecialtyMap = {
            [PROVIDER_TITLE.PSYCHIATRIST]: [
                'anxiety-disorders',
                'mood-disorders',
                'psychotic-disorders'
            ],
            [PROVIDER_TITLE.PSYCHOLOGIST]: [
                'anxiety-disorders',
                'mood-disorders',
                'assessment',
                'neuropsychology'
            ],
            [PROVIDER_TITLE.THERAPIST]: [
                'anxiety-disorders',
                'mood-disorders',
                'trauma',
                'relationship-issues'
            ]
        };
        
        // Map of web specialties to recommended treatment modalities
        this.specialtyToModalityMap = {
            'psychiatry-medication': [
                'psychopharmacology',
                'medication-assisted-therapy'
            ],
            'therapy-counseling': [
                'cognitive-behavioral-therapy',
                'psychotherapy-general',
                'dialectical-behavior-therapy'
            ],
            'neuropsychology-testing': [
                'psychological-testing',
                'neuropsychological-testing'
            ]
        };
    }
    
    /**
     * Get recommended specialties based on provider title
     * @param {string} providerTitle - The provider's title
     * @returns {Array} Array of recommended specialty categories
     */
    getRecommendedSpecialties(providerTitle) {
        return this.titleToSpecialtyMap[providerTitle] || [];
    }
    
    /**
     * Get recommended treatment modalities based on web specialty
     * @param {string} webSpecialty - The selected web specialty
     * @returns {Array} Array of recommended treatment modalities
     */
    getRecommendedModalities(webSpecialty) {
        return this.specialtyToModalityMap[webSpecialty] || [];
    }
    
    /**
     * Filter specialty options based on provider type and web specialty
     * @param {string} providerTitle - The provider's title
     * @param {string} webSpecialty - The selected web specialty
     * @param {Array} allSpecialties - Complete list of all possible specialties
     * @returns {Object} Categorized and prioritized specialty options
     */
    filterSpecialtyOptions(providerTitle, webSpecialty, allSpecialties) {
        const recommendedCategories = this.getRecommendedSpecialties(providerTitle);
        
        // Group specialties by category and mark recommended ones
        const result = {
            recommended: [],
            other: [],
            all: allSpecialties
        };
        
        allSpecialties.forEach(specialty => {
            const category = specialty.category || 'uncategorized';
            if (recommendedCategories.includes(category)) {
                result.recommended.push(specialty);
            } else {
                result.other.push(specialty);
            }
        });
        
        return result;
    }
}

// Export the managers for use in other modules
export { 
    FieldVisibilityManager, 
    EducationLogicManager, 
    SpecialtyManager,
    PROVIDER_STATUS,
    PROVIDER_TITLE
}; 