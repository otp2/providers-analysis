# Provider Forms Comprehensive Analysis

## Form Integration Analysis

### 1. Basic Identification
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| First Name | ✓ | ✓ | ✓ | ✓ | Core field |
| Last Name | ✓ | ✓ | ✓ | ✓ | Core field |
| Provider NPI Number | ✓ | ✓ (as Contact ID) | ✗ | ✓ | Standardize to NPI |
| Credentials | ✓ | ✗ | ✓ | ✓ | Add to Salesforce with comprehensive list |
| Account Name | ✗ | ✓ | ✗ | ✓ | For medical group/institution |

### 2. Professional Information
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Title | ✓ | ✓ | ✗ | ✓ | Professional title |
| License | ✗ | ✓ | ✗ | ✓ | Required for verification |
| Years in Practice | ✓ | ✓ | ✗ | ✓ | Standardize ranges |
| Professional Titles | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Hospital Affiliation | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Awards and Honors | ✓ | ✗ | ✗ | Optional | Consider adding |

### 3. Education & Training (Internal Providers Only)
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Medical School | ✓ | ✗ | ✗ | ✓ | For psychiatrists only |
| Education (Therapists) | ✓ | ✗ | ✗ | ✓ | For therapists/psychologists |
| Residency | ✓ | ✗ | ✗ | ✓ | For medical providers |
| Fellowship | ✓ | ✗ | ✗ | ✓ | If applicable |
| Board Certifications | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Research Focus | ✓ | ✗ | ✗ | Optional | For academic providers |

### 4. Demographic Information
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Gender | ✓ | ✓ | ✓ | ✓ | Standardize options |
| Pronouns | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Cultural Identity | ✗ | ✓ | ✗ | ✓ | Important for matching |
| Languages | ✓ | ✓ | ✗ | ✓ | Comprehensive list |

### 5. Clinical Services
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Web Specialty | ✓ | ✓ | ✓ | ✓ | Merge all specialty lists |
| Ages Seen/Treated | ✓ | ✓ | ✓ | ✓ | Standardize age brackets |
| Clinical Focus | ✓ | ✓ | ✓ | ✓ | Comprehensive conditions list |
| Treatment Modalities | ✓ | ✓ | ✓ | ✓ | Merge all approaches |
| Provider Level of Treatment | ✗ | ✓ | ✗ | ✓ | Important for referrals |
| Do NOT Refer | ✗ | ✗ | ✓ | ✓ | Add to Salesforce |
| Insurance Panels/Restrictions | ✗ | ✓ | ✓ | ✓ | Critical for referrals |

### 6. Availability & Practice Information
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Evening Hours | ✗ | ✓ | ✗ | ✓ | Important for scheduling |
| Weekend Hours | ✗ | ✓ | ✗ | ✓ | Important for scheduling |
| Availability Status | ✗ | ✗ | ✓ | ✓ | Add to Salesforce |
| Soonest Availability | ✗ | ✗ | ✓ | ✓ | Add to Salesforce |
| Service Delivery Mode | ✗ | ✓ | ✗ | ✓ | In-person/Telehealth |

### 7. Contact Information
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Phone Number | ✓ | ✓ | ✓ | ✓ | Core contact |
| Mobile Phone | ✗ | ✓ | ✗ | ✓ | For internal use |
| Fax | ✗ | ✓ | ✗ | ✓ | If applicable |
| Email Address | ✓ | ✓ | ✗ | ✓ | Core contact |
| Office/Mailing Address | ✓ | ✓ | ✗ | ✓ | Complete address fields |
| Building Name | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |

### 8. Media & Personal Content (Internal Providers Only)
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Headshot | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Video | ✓ | ✗ | ✗ | Optional | Consider adding |
| Bio | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Philosophy of Care | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| My Endeavor Statement | ✓ | ✗ | ✗ | ✓ | Add to Salesforce |
| Personal Interests | ✓ | ✗ | ✗ | Optional | Consider adding |

### 9. Administrative
| Field | Website | Salesforce | Pulse | Required in Final Form | Notes |
|-------|---------|------------|-------|----------------------|--------|
| Provider Finder Audit Date | ✗ | ✓ | ✗ | ✓ | For tracking |
| Account Owner | ✗ | ✓ | ✗ | ✓ | Internal management |
| Eval Info | ✗ | ✗ | ✓ | ✓ | Add to Salesforce |
| Other Considerations | ✗ | ✗ | ✓ | ✓ | Add to Salesforce |

## Required Changes for Salesforce Form

### New Fields to Add
1. **Professional Information**
   - Comprehensive credentials list
   - Professional titles
   - Hospital affiliations
   - Awards and honors (optional)

2. **Education & Training** (Internal Providers)
   - Medical school education
   - Education for therapists
   - Residency information
   - Fellowship details
   - Board certifications
   - Research focus (optional)

3. **Demographic Information**
   - Pronouns field

4. **Clinical Services**
   - "Do NOT Refer" specialties list
   - Expanded treatment modalities list

5. **Availability**
   - Availability status field
   - Soonest availability field

6. **Location**
   - Building name field

7. **Media & Personal** (Internal Providers)
   - Headshot upload
   - Video link (optional)
   - Bio text field
   - Philosophy of Care
   - My Endeavor Statement
   - Personal Interests (optional)

8. **Clinical Information**
   - Eval Info field
   - Other Considerations field

### Fields to Standardize
1. **Identifiers**
   - Standardize Contact ID to NPI number format

2. **Clinical Information**
   - Merge and standardize specialty lists from all forms
   - Standardize age brackets
   - Combine all treatment modalities
   - Standardize insurance panel information

3. **Demographics**
   - Standardize gender options
   - Standardize cultural identity options
   - Consolidate language options

### Conditional Fields
Some fields should only be required for internal providers:
- Education & Training section
- Media & Personal Content section
- Certain professional credentials
- Hospital affiliations

## Recommendations
1. Implement field dependencies based on provider type
2. Create separate sections for internal vs. external providers
3. Add validation rules for required fields
4. Implement auto-save functionality
5. Add field-level help text
6. Create a streamlined data entry process
7. Implement version control for provider information
8. Add audit trail functionality
9. Create approval workflows for updates
10. Implement data quality checks 