// Provider Form Visualization JavaScript

// Initialize Mermaid diagrams
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        }
    });
    
    // Form sections navigation
    setupFormNavigation();
    
    // Set up conditional logic for form fields
    setupConditionalLogic();
    
    // Initialize tabs
    setupTabs();
    
    // Initialize field inventory table
    initializeFieldInventory();
});

// Set up form navigation (Previous/Next buttons)
function setupFormNavigation() {
    const formSections = document.querySelectorAll('.form-section');
    const prevButton = document.getElementById('prev-section');
    const nextButton = document.getElementById('next-section');
    const submitButton = document.getElementById('submit-form');
    
    let currentSectionIndex = 0;
    
    // Initial state
    updateFormNavigation();
    
    prevButton.addEventListener('click', function() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            updateFormNavigation();
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentSectionIndex < formSections.length - 2) { // -2 because the last section is form controls
            currentSectionIndex++;
            updateFormNavigation();
        }
    });
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This is a prototype. In the real application, this would submit the form data to Salesforce.');
    });
    
    function updateFormNavigation() {
        formSections.forEach((section, index) => {
            if (index === currentSectionIndex || index === formSections.length - 1) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        
        // Update button states
        prevButton.disabled = currentSectionIndex === 0;
        nextButton.disabled = currentSectionIndex === formSections.length - 2;
        submitButton.style.display = currentSectionIndex === formSections.length - 2 ? 'block' : 'none';
    }
}

// Set up conditional display logic
function setupConditionalLogic() {
    const providerStatusSelect = document.getElementById('provider-status');
    const titleSelect = document.getElementById('title');
    const showOnWebsiteCheckbox = document.getElementById('show-on-website');
    
    // Fields that are only shown for internal providers
    const internalOnlyFields = document.querySelectorAll('.provider-internal-only');
    
    // Fields that are only shown for medical providers (psychiatrists, physicians)
    const medicalProviderFields = document.querySelectorAll('.medical-provider-only');
    
    // Fields that are only shown for therapist providers
    const therapistProviderFields = document.querySelectorAll('.therapist-provider-only');
    
    // Provider Status Change Logic
    providerStatusSelect.addEventListener('change', function() {
        const isInternal = this.value === 'internal';
        
        internalOnlyFields.forEach(field => {
            field.classList.toggle('hidden', !isInternal);
        });
        
        // Reset nested conditional fields
        updateMedicalFields();
        updateTherapistFields();
    });
    
    // Provider Title Change Logic
    titleSelect.addEventListener('change', function() {
        updateMedicalFields();
        updateTherapistFields();
    });
    
    function updateMedicalFields() {
        const isMedicalProvider = titleSelect.value === 'psychiatrist' || titleSelect.value === 'physician';
        const isInternal = providerStatusSelect.value === 'internal';
        
        medicalProviderFields.forEach(field => {
            field.classList.toggle('hidden', !(isInternal && isMedicalProvider));
        });
    }
    
    function updateTherapistFields() {
        const isTherapistProvider = titleSelect.value === 'therapist' || titleSelect.value === 'psychologist';
        const isInternal = providerStatusSelect.value === 'internal';
        
        therapistProviderFields.forEach(field => {
            field.classList.toggle('hidden', !(isInternal && isTherapistProvider));
        });
    }
    
    // Website Display Logic
    showOnWebsiteCheckbox.addEventListener('change', function() {
        const websiteFields = document.querySelectorAll('.website-display-field');
        const requireWebsiteFields = this.checked;
        
        websiteFields.forEach(field => {
            const inputElement = field.querySelector('input, select, textarea');
            if (inputElement) {
                inputElement.required = requireWebsiteFields;
            }
        });
    });
}

// Set up tabs functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to current button and pane
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Initialize the field inventory table
function initializeFieldInventory() {
    const fieldTable = document.getElementById('field-inventory-table').querySelector('tbody');
    const fieldFilter = document.getElementById('field-filter');
    
    // Field data
    const fields = [
        {
            name: "First Name",
            section: "Basic Identification",
            type: "Text",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Last Name",
            section: "Basic Identification",
            type: "Text",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Provider NPI Number",
            section: "Basic Identification",
            type: "Text (10 digits)",
            website: true,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "Credentials",
            section: "Basic Identification",
            type: "Multi-select",
            website: true,
            salesforce: false,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Account Name",
            section: "Basic Identification",
            type: "Text",
            website: false,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "Title",
            section: "Professional Information",
            type: "Single-select",
            website: true,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "License",
            section: "Professional Information",
            type: "Text",
            website: false,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "Years in Practice",
            section: "Professional Information",
            type: "Single-select",
            website: true,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "Professional Titles",
            section: "Professional Information",
            type: "Text",
            website: true,
            salesforce: false,
            pulse: false,
            required: false,
            internalOnly: true
        },
        {
            name: "Hospital Affiliation",
            section: "Professional Information",
            type: "Multi-select",
            website: true,
            salesforce: false,
            pulse: false,
            required: false,
            internalOnly: true
        },
        {
            name: "Medical School Education",
            section: "Education & Training",
            type: "Text",
            website: true,
            salesforce: false,
            pulse: false,
            required: true,
            internalOnly: true,
            conditional: "Psychiatrist/Physician"
        },
        {
            name: "Education (Therapists)",
            section: "Education & Training",
            type: "Text",
            website: true,
            salesforce: false,
            pulse: false,
            required: true,
            internalOnly: true,
            conditional: "Therapist/Psychologist"
        },
        {
            name: "Gender",
            section: "Demographic Information",
            type: "Single-select",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Pronouns",
            section: "Demographic Information",
            type: "Multi-select",
            website: true,
            salesforce: false,
            pulse: false,
            required: false,
            internalOnly: false
        },
        {
            name: "Languages",
            section: "Demographic Information",
            type: "Multi-select",
            website: true,
            salesforce: true,
            pulse: false,
            required: true,
            internalOnly: false
        },
        {
            name: "Web Specialty",
            section: "Clinical Services",
            type: "Single-select",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Ages Seen/Treated",
            section: "Clinical Services",
            type: "Multi-select",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Specialties",
            section: "Clinical Services",
            type: "Multi-select",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Treatment Modalities",
            section: "Clinical Services",
            type: "Multi-select",
            website: true,
            salesforce: true,
            pulse: true,
            required: true,
            internalOnly: false
        },
        {
            name: "Do NOT Refer",
            section: "Clinical Services",
            type: "Multi-select",
            website: false,
            salesforce: false,
            pulse: true,
            required: false,
            internalOnly: false
        },
        {
            name: "Headshot",
            section: "Media & Personal Content",
            type: "File Upload",
            website: true,
            salesforce: false,
            pulse: false,
            required: true,
            internalOnly: true,
            conditional: "Website Display"
        },
        {
            name: "Bio",
            section: "Media & Personal Content",
            type: "Text Area",
            website: true,
            salesforce: false,
            pulse: false,
            required: true,
            internalOnly: true,
            conditional: "Website Display"
        },
        {
            name: "Philosophy of Care",
            section: "Media & Personal Content",
            type: "Text Area",
            website: true,
            salesforce: false,
            pulse: false,
            required: true,
            internalOnly: true,
            conditional: "Website Display"
        }
        // Add more fields as needed
    ];
    
    // Initial population
    populateFieldTable(fields);
    
    // Filter handling
    fieldFilter.addEventListener('change', function() {
        const filterValue = this.value;
        let filteredFields = fields;
        
        if (filterValue === 'required') {
            filteredFields = fields.filter(field => field.required);
        } else if (filterValue === 'internal') {
            filteredFields = fields.filter(field => field.internalOnly);
        } else if (filterValue === 'website') {
            filteredFields = fields.filter(field => field.website);
        } else if (filterValue === 'conditional') {
            filteredFields = fields.filter(field => field.conditional);
        }
        
        populateFieldTable(filteredFields);
    });
    
    function populateFieldTable(fieldsToShow) {
        // Clear existing rows
        fieldTable.innerHTML = '';
        
        // Add new rows
        fieldsToShow.forEach(field => {
            const row = document.createElement('tr');
            
            // Add row class if needed
            if (field.internalOnly) {
                row.classList.add('provider-internal-only');
            }
            
            row.innerHTML = `
                <td>${field.name}</td>
                <td>${field.section}</td>
                <td>${field.type}</td>
                <td>${field.website ? '✓' : '✗'}</td>
                <td>${field.salesforce ? '✓' : '✗'}</td>
                <td>${field.pulse ? '✓' : '✗'}</td>
                <td>${field.required ? '✓' : '✗'}</td>
                <td>${field.internalOnly ? '✓' : '✗'}</td>
            `;
            
            fieldTable.appendChild(row);
        });
    }
} 