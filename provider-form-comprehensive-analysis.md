# Comprehensive Provider Form Analysis & Integration Plan

## Executive Summary
This document provides a complete analysis of three provider information forms (Website, Salesforce, and Pulse) and delivers a comprehensive plan for integrating them into a unified Salesforce-based system. It includes detailed field mappings, data type specifications, conditional logic rules, validation requirements, and visualization guidance to ensure no information is lost during consolidation.

## Table of Contents
1. [Complete Field Inventory](#complete-field-inventory)
2. [Salesforce Form Enhancement Requirements](#salesforce-form-enhancement-requirements)
3. [Conditional Logic Rules](#conditional-logic-rules)
4. [Field Standardization Specifications](#field-standardization-specifications)
5. [Form Structure & Layout](#form-structure--layout)
6. [Technical Implementation Guidelines](#technical-implementation-guidelines)
7. [Migration & Data Integration Plan](#migration--data-integration-plan)

## Complete Field Inventory

### 1. Basic Identification
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| First Name | ✓ | ✓ | ✓ | Required | Text | Non-empty | None | N/A | No | Core identification field |
| Last Name | ✓ | ✓ | ✓ | Required | Text | Non-empty | None | N/A | No | Core identification field |
| Provider NPI Number | ✓ | ✓ (Contact ID) | ✗ | Required | Text | 10 digits | None | N/A | No | Standardize to NPI, unique identifier |
| Credentials | ✓ | ✗ | ✓ | Required | Multi-select | N/A | None | ABPP-CN, AGNP, APN, APN-CNP, APP, APRN, ATR, CACGS, CADC, CCM, DNP, DO, FNP-BC, LCPC, LCSW, LPC, LSCW, LSW, MA, MBA, MD, MS, NP-BC, PA, PA-C, PhD, PMHNP, PMHNP-BC, PsyD | No | Professional credentials |
| Account Name | ✗ | ✓ | ✗ | Required | Text | Non-empty | None | N/A | No | Medical group/institution name |
| Salesforce Contact ID | ✗ | ✓ | ✗ | System | Text | Auto-generated | Auto | N/A | No | System field, kept for backward compatibility |

### 2. Professional Information
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Title | ✓ | ✓ | ✗ | Required | Single-select | Non-empty | None | Therapist, Psychologist, Psychiatrist, Physician, Nurse Practitioner, Physician Assistant | No | Professional role |
| License | ✗ | ✓ | ✗ | Required | Text | Format varies by license type | None | N/A | No | State license number |
| Years in Practice | ✓ | ✓ | ✗ | Required | Single-select | N/A | None | Under 5, 5-10, 10-15, 15-20, Over 20 | No | Experience indicator |
| Professional Titles | ✓ | ✗ | ✗ | Optional | Text | N/A | None | N/A | Yes | Additional titles (e.g., Clinical Director) |
| Hospital Affiliation | ✓ | ✗ | ✗ | Optional | Multi-select | N/A | None | Linden Oaks Hospital, Swedish Hospital, Evanston Hospital, Glenbrook Hospital, Skokie Hospital, Northwest Community Hospital | Yes | Hospital affiliations |
| Awards and Honors | ✓ | ✗ | ✗ | Optional | Text Area | N/A | None | N/A | Yes | Recognition and awards |

### 3. Education & Training
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Medical School Education | ✓ | ✗ | ✗ | Conditional | Text | Required if psychiatrist | None | N/A | Yes | Required for psychiatrists/med management |
| Medical School Year | ✓ | ✗ | ✗ | Conditional | Number | 4-digit year, past | None | N/A | Yes | Graduation year for medical providers |
| Education (Therapists) | ✓ | ✗ | ✗ | Conditional | Text | Required if therapist | None | N/A | Yes | School for non-medical providers |
| Education Year | ✓ | ✗ | ✗ | Conditional | Number | 4-digit year, past | None | N/A | Yes | Graduation year for therapists |
| Residency | ✓ | ✗ | ✗ | Conditional | Text | N/A | None | N/A | Yes | For medical providers only |
| Residency Year | ✓ | ✗ | ✗ | Conditional | Number | 4-digit year, past | None | N/A | Yes | Completion year |
| Fellowship | ✓ | ✗ | ✗ | Conditional | Text | N/A | None | N/A | Yes | Optional for medical providers |
| Fellowship Year | ✓ | ✗ | ✗ | Conditional | Number | 4-digit year, past | None | N/A | Yes | Completion year |
| Board Certifications | ✓ | ✗ | ✗ | Conditional | Multi-select | N/A | None | [List of certifications] | Yes | Medical specialties certification |
| Research Focus | ✓ | ✗ | ✗ | Optional | Text Area | N/A | None | N/A | Yes | Academic/research interests |

### 4. Demographic Information
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Gender | ✓ | ✓ | ✓ | Required | Single-select | Non-empty | None | Male, Female, Non-binary, Other, Prefer not to say | No | Standardize options across forms |
| Pronouns | ✓ | ✗ | ✗ | Optional | Multi-select | N/A | None | He/Him/His, She/Her/Hers, They/Them/Theirs, Other | No | Provider's preferred pronouns |
| Cultural Identity | ✗ | ✓ | ✗ | Optional | Multi-select | N/A | None | Asian, White, Black/African American, Hispanic/Latino, Native American, Pacific Islander, Middle Eastern, Other, Prefer not to say | No | Important for matching |
| Languages | ✓ | ✓ | ✗ | Required | Multi-select | At least one | English | Albanian, Arabic, Bengali, Chinese, Croatian, English, French, German, Greek, Gujarati, Hindi, Indonesian, Italian, Japanese, Korean, Lithuanian, Mandarin, Polish, Portuguese, Punjabi, Russian, Serbian, Sign Language, Spanish, Swedish, Tagalog, Ukrainian, Urdu, Vietnamese | No | Comprehensive merged list |

### 5. Clinical Services
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Web Specialty | ✓ | ✓ | ✓ | Required | Single-select | Non-empty | None | Therapy/Counseling, Psychiatry/Medication Management, Neuropsychology/Psychological Testing, Behavioral Health Integration, Counseling | No | Primary service category |
| Ages Seen/Treated | ✓ | ✓ | ✓ | Required | Multi-select | At least one | None | 0-5, 6-11, 12-17, 18-25, 26-40, 41-64, 65+ | No | Standardized age ranges |
| Clinical Focus | ✓ | ✓ | ✓ | Required | Multi-select | At least one | None | General Mental Health, Anxiety/OCD, Eating Disorders, PTSD/Trauma, Addictions/Dual Diagnosis, Neuropsychology/Psychological Testing | No | High-level specialization |
| Specialties | ✓ | ✓ | ✓ | Required | Multi-select | At least one | None | [FULL MERGED LIST FROM ALL FORMS - see detailed specialty list section] | No | Comprehensive conditions list |
| Treatment Modalities | ✓ | ✓ | ✓ | Required | Multi-select | At least one | None | [FULL MERGED LIST FROM ALL FORMS - see detailed modalities list section] | No | Therapeutic approaches |
| Provider Level of Treatment | ✗ | ✓ | ✗ | Required | Multi-select | At least one | None | Couple Counseling, Detox, Inpatient, IOP, Outpatient Psychiatry, Outpatient Therapy, PHP, Psych Testing, Residential, Support Groups/Psychoeducation | No | Treatment intensity/setting |
| Do NOT Refer | ✗ | ✗ | ✓ | Optional | Multi-select | N/A | None | [Same options as Specialties] | No | Exclusion criteria |
| Insurance Panels/Restrictions | ✗ | ✓ | ✓ | Required | Multi-select | At least one | None | BCBS, Aetna, Cigna, United Healthcare, Medicare, Medicaid, Self-Pay Only, [Other insurances] | No | Coverage information |

### 6. Availability & Practice Information
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Evening Hours | ✗ | ✓ | ✗ | Required | Boolean | N/A | False | True/False | No | After 5pm availability |
| Weekend Hours | ✗ | ✓ | ✗ | Required | Boolean | N/A | False | True/False | No | Saturday/Sunday availability |
| Availability Status | ✗ | ✗ | ✓ | Required | Single-select | Non-empty | Closed | Open, Closed, Limited | No | Current status |
| Soonest Availability | ✗ | ✗ | ✓ | Conditional | Text | Required if Open/Limited | None | N/A | No | Next available appointment timeframe |
| Service Delivery Mode | ✗ | ✓ | ✗ | Required | Single-select | Non-empty | Both | In-Person Only, Telehealth Only, In-Person and Telehealth | No | Delivery method |
| Location | ✓ | ✓ | ✓ | Required | Multi-select | At least one | None | [List of Endeavor locations] | No | Practice locations |

### 7. Contact Information
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Phone Number | ✓ | ✓ | ✓ | Required | Phone | Valid format | None | N/A | No | Office contact |
| Mobile Phone | ✗ | ✓ | ✗ | Optional | Phone | Valid format | None | N/A | Yes | For internal contact |
| Fax | ✗ | ✓ | ✗ | Optional | Phone | Valid format | None | N/A | No | Office fax |
| Email Address | ✓ | ✓ | ✗ | Required | Email | Valid format | None | N/A | No | Provider email |
| Mailing Street | ✓ | ✓ | ✗ | Required | Text | Non-empty | None | N/A | No | Street address |
| Mailing City | ✓ | ✓ | ✗ | Required | Text | Non-empty | None | N/A | No | City |
| Mailing State | ✓ | ✓ | ✗ | Required | Text | 2 letters | None | N/A | No | State/province |
| Mailing Zip | ✓ | ✓ | ✗ | Required | Text | Valid format | None | N/A | No | Postal code |
| Mailing Country | ✓ | ✓ | ✗ | Required | Text | Non-empty | USA | N/A | No | Country |
| Building Name | ✓ | ✗ | ✗ | Required | Single-select | N/A | None | [List of Endeavor buildings] | No | Endeavor facility name |

### 8. Media & Personal Content
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Headshot | ✓ | ✗ | ✗ | Conditional | File Upload | Image format, size limit | None | N/A | Yes | Professional photo |
| Video | ✓ | ✗ | ✗ | Optional | URL | Valid URL | None | N/A | Yes | Provider introduction video |
| Bio | ✓ | ✗ | ✗ | Conditional | Text Area | Character limit | None | N/A | Yes | Professional biography |
| Philosophy of Care | ✓ | ✗ | ✗ | Conditional | Text Area | Character limit | None | N/A | Yes | Treatment philosophy |
| My Endeavor Statement | ✓ | ✗ | ✗ | Conditional | Text Area | Character limit | None | N/A | Yes | "My endeavor is to..." statement |
| Personal Interests | ✓ | ✗ | ✗ | Optional | Text Area | Character limit | None | N/A | Yes | Outside interests |

### 9. Administrative & Referral Information
| Field | Website | Salesforce | Pulse | Required? | Field Type | Validation | Default | Options | Internal Only? | Notes |
|-------|:-------:|:----------:|:-----:|:---------:|------------|------------|---------|---------|:--------------:|-------|
| Provider Finder Audit Date | ✗ | ✓ | ✗ | System | Date | Auto-populated | Today | N/A | Yes | Last update timestamp |
| Account Owner | ✗ | ✓ | ✗ | System | Text | Auto-populated | Current User | N/A | Yes | Salesforce admin field |
| Eval Info | ✗ | ✗ | ✓ | Optional | Text Area | N/A | None | N/A | Yes | Evaluation process details |
| Other Considerations | ✗ | ✗ | ✓ | Optional | Text Area | N/A | None | N/A | Yes | Special notes for referrals |

## Detailed Specialty List Standardization

### Combined Comprehensive Specialties List
(Merging all unique options from Website, Salesforce and Pulse forms)

* ADD/ADHD
* Addiction (general)
* Addiction: Alcohol
* Addiction: Drug
* Addiction: Food
* Addiction: Internet
* Addiction: Pornography
* Adoption
* Aggression/Impulse Control
* Anger Management
* Anxiety
* ASD/Intellectual Disorders
* Autism Spectrum
* Behavioral Issues
* Binge Eating
* Bipolar Disorders
* Borderline Personality
* Caregiver Support
* Chronic Illness/Medical Issues
* Chronic Illness/Pain
* Chronic Mental Illness
* Chronic Pain
* Couples Counseling
* Cultural/Ethnic/Race Related Issues
* Death & Dying/End of Life
* Dementia/Neurocognitive
* Depression
* Developmental Delays/Disabilities
* Disruptive/Impulse Control/Conduct Disorders
* Dissociation
* Domestic Abuse/Violence (Survivors)
* Dual Diagnosis
* DUI Services
* Eating Disorders
* Family Therapy
* First Responders
* Gambling
* Gender Dysphoria
* Gender Identity
* Geriatric
* Grief & Loss/Bereavement
* Health And Behavior Change
* Infertility
* LGBTQ+
* Marital/Couples/Intimate Relationship Issues
* Men's Issues
* Mental Health (General)
* Military Veterans/First Responders
* Mood Disorders
* Neurocognitive Disorders
* OCD
* Other Addictions
* Panic
* Parenting
* Perinatal/Postpartum
* Personality Disorders
* Psychosis
* Psychotic Disorders
* PTSD/Trauma
* Racial/Ethnic Concerns
* Refusal
* Relationship Issues
* Religious/Faith Based/Spiritual Counseling
* Schizophrenia
* School Issues/Truancy
* Self Injury
* Sexual Abuse/Sexual Assault (Survivors)
* Sexual Dysfunction/Addiction
* Sleep Issues
* Somatic Disorders
* Spirituality
* Stress Management
* Suboxone
* Substance Use
* Tic Disorders
* Trauma
* Veterans
* Weight Management
* Women's Issues

### Treatment Modalities Comprehensive List

* Acceptance and Commitment Therapy (ACT)
* Art Therapy
* Attachment/Relational Therapy
* Bio Feedback
* Client Centered
* Cognitive Behavioral Therapy (CBT)
* Cognitive Processing Therapy (CPT)
* Couples Therapy
* Critical Incident Debriefing
* Dialectical Behavior Therapy (DBT)
* Eclectic
* Electroconvulsive Therapy (ECT)
* EMDR (Eye Movement Desensitization and Reprocessing)
* Emotion Efficacy Therapy (EET)
* Emotion Focused Therapy (EFT)
* Exposure Response Prevention (ERP)
* Expressive Therapy
* Family Systems Therapy
* Family Therapy
* Gestalt Therapy
* Gottman Method
* Group Therapy
* Hypnotherapy/Hypnosis
* Internal Family Systems (IFS)
* Medication Assisted Therapy (MAT)
* Meditation
* Mind Body Connection
* Mindfulness Based Cognitive Therapy (MCBT)
* Mindfulness Based Stress Reduction (MBSR)
* Motivational Interviewing
* Narrative Therapy
* Neurofeedback
* Neuropsychological Testing
* Person Centered Therapy
* Play Therapy
* Psychodynamic Therapy
* Psychological Testing
* Psychopharmacology
* Psychotherapy (General)
* Rational Emotive Behavioral Therapy (REBT)
* Solutions Focused Therapy
* Somatic Experience
* Strengths Based Therapy
* Transcranial Magnetic Stimulation (TMS)
* Trauma Informed Care
* Yoga

## Conditional Logic Rules

### Provider Type Dependent Fields

#### Internal vs. External Provider Logic
* **Condition**: Is this an internal Endeavor Health provider?
* **If True**: Show all fields including internal-only fields
* **If False**: Hide internal-only fields

#### Provider Specialization Logic
* **Condition**: Provider Title = "Psychiatrist" OR "Physician"
  * **If True**: Show Medical School, Residency, Fellowship, Board Certification fields
  * **If False**: Hide these fields

* **Condition**: Provider Title = "Therapist" OR "Psychologist"
  * **If True**: Show Education (Therapists) field
  * **If False**: Hide this field

* **Condition**: Provider Title = "Psychologist" OR "Neuropsychologist"
  * **If True**: Show Psychological Testing modalities
  * **If False**: Hide these options

* **Condition**: Web Specialty = "Psychiatry/Medication Management"
  * **If True**: Require Medical School, Residency
  * **If False**: These fields optional or hidden based on provider type

#### Media/Personal Content Logic
* **Condition**: Is Internal Provider = True AND Show on Website = True
  * **If Both True**: Require Headshot, Bio, Philosophy of Care, Endeavor Statement
  * **If Either False**: Make these fields optional or hidden

#### Availability Logic
* **Condition**: Availability Status = "Open" OR "Limited"
  * **If True**: Require Soonest Availability field
  * **If False**: Hide Soonest Availability field

## Field Standardization Specifications

### Gender Options Standardization
* **Standard Options**: 
  * Male
  * Female
  * Non-binary
  * Other
  * Prefer not to say
* **Mapping**:
  * Website "Other" → Standard "Other"
  * Salesforce "No Response" → Standard "Prefer not to say"
  * Pulse options map directly

### Age Range Standardization
* **Current Options**:
  * Website: Children, Adolescents, Young Adults, Adults, Older Adults
  * Salesforce: ANY, 0-5, 6-11, 12-17, 18-50, Over 50
  * Pulse: Range format
* **Standardized Options**:
  * 0-5 (Children)
  * 6-11 (Children)
  * 12-17 (Adolescents)
  * 18-25 (Young Adults)
  * 26-40 (Adults)
  * 41-64 (Adults)
  * 65+ (Older Adults)

### Years in Practice Standardization
* **Standardized Options**:
  * Under 5 years
  * 5-10 years
  * 10-15 years
  * 15-20 years
  * Over 20 years

## Form Structure & Layout

### Section Organization
The form should be organized into clearly delineated sections with conditional visibility:

1. **Basic Identification** (Always visible)
   * Core provider identity information

2. **Professional Information** (Always visible)
   * Professional qualifications

3. **Education & Training** (Conditional based on provider type & internal status)
   * Academic and training credentials

4. **Demographic Information** (Always visible)
   * Personal demographic details

5. **Clinical Services** (Always visible)
   * Treatment capabilities and specialties

6. **Availability & Practice** (Always visible)
   * Scheduling and practice details

7. **Contact Information** (Always visible)
   * How to reach the provider

8. **Media & Personal Content** (Internal providers only)
   * Website presentation materials

9. **Administrative & Referral** (Internal/admin only)
   * Management and referral details

### Visualization Guidance

#### Color Coding System
* Essential fields: Blue highlight
* Internal-only fields: Purple highlight
* Conditional fields: Yellow highlight
* Optional fields: No highlight

#### Field Organization
* Group related fields together
* Use progressive disclosure to prevent overwhelming forms
* Use multi-column layout for related fields (e.g., address fields)
* Place conditional fields directly below their controlling fields

## Technical Implementation Guidelines

### Data Type Specifications
* **Text fields**: Variable length with appropriate max character limits
* **Phone fields**: Standardized format with validation
* **Multi-select fields**: Checkboxes for multiple selections
* **Select fields**: Dropdown for single selection
* **Boolean fields**: Toggle or checkbox
* **Date fields**: Calendar picker with validation
* **File upload fields**: Size and format restrictions
* **Text area fields**: Character count with limits

### Required Field Validation
* Visual indicators for required fields
* Inline validation messages
* Form section validation
* Prevent submission with missing required fields

### Data Quality Controls
* Field-level validation rules
* Business logic validation
* Real-time feedback to users
* Duplicate detection
* Field format standardization

## Migration & Data Integration Plan

### Data Migration Approach
1. **Map existing fields** to new structure
2. **Create transformation rules** for standardizing data
3. **Validate data integrity** during migration
4. **Handle missing data** with default values or manual review
5. **Data cleanup requirements** for inconsistent legacy data

### Integration Requirements
1. **Website integration** - API endpoints for public data
2. **Pulse system integration** - Bidirectional data updates
3. **Authentication requirements** for secure data access
4. **Change management tracking** for data updates
5. **Audit trail requirements** for compliance

### Data Governance
1. **Access control** - Role-based permissions
2. **Data ownership** - Clear responsibilities
3. **Update procedures** - Standard operating procedures
4. **Review schedule** - Regular data maintenance
5. **Archiving policy** - Historical data retention 