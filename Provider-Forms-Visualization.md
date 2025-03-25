# Provider Forms Visualization

This document provides a complete visualization of all fields across the three existing provider forms and shows what will be included in the final consolidated Salesforce form.

## Form Field Comparison

| Field Name | Website Form | Salesforce Form | Pulse Form | Final Form | Required For | Notes |
|------------|--------------|-----------------|------------|------------|--------------|-------|
| **PROVIDER STATUS SECTION** |
| Provider Status | ❌ | ❌ | ❌ | ✅ | All | New field: "Internal", "External Affiliated", "External Non-Affiliated" |
| Show on Website | ❌ | ❌ | ❌ | ✅ | Internal | New checkbox field |
| Employment Type | ❌ | ❌ | ❌ | ✅ | Internal | New field with employment relationship options |
| **BASIC IDENTIFICATION** |
| First Name | ✅ | ✅ | ✅ | ✅ | All | |
| Last Name | ✅ | ✅ | ✅ | ✅ | All | |
| Provider NPI Number | ✅ | ❌ | ❌ | ✅ | All | Adding to Salesforce |
| Credentials | ✅ | ❌ | ✅ | ✅ | All | Multi-select, needs standardization |
| Account Name | ❌ | ✅ | ❌ | ✅ | All | Practice or group name |
| Salesforce Contact ID | ❌ | ✅ | ❌ | ✅ | All | System field, auto-populated |
| **PROFESSIONAL INFORMATION** |
| Title | ✅ (Web Specialty) | ✅ | ✅ (Label) | ✅ | All | Standardize options across forms |
| License | ❌ | ✅ | ❌ | ✅ | All | State license number |
| Years in Practice | ✅ | ✅ | ❌ | ✅ | All | Standard ranges needed |
| Professional Titles | ✅ | ❌ | ❌ | ✅ | Internal | Additional titles/roles |
| Hospital Affiliation | ✅ | ❌ | ❌ | ✅ | Internal | Multi-select of affiliated hospitals |
| Awards/Honors | ✅ | ❌ | ❌ | ✅ | Internal | Recognition and achievements |
| **EDUCATION & TRAINING** |
| Medical School | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | |
| Medical School Year | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | |
| Therapist Education | ✅ | ❌ | ❌ | ✅ | Internal Therapists/Psychologists | |
| Education Year | ✅ | ❌ | ❌ | ✅ | Internal Therapists/Psychologists | |
| Residency | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | |
| Residency Year | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | |
| Fellowship | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | Optional |
| Fellowship Year | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | Optional |
| Board Certifications | ✅ | ❌ | ❌ | ✅ | Internal Psychiatrists/Physicians | Optional |
| Research Focus | ✅ | ❌ | ❌ | ✅ | Internal | Optional |
| **DEMOGRAPHIC INFORMATION** |
| Gender | ✅ | ✅ | ✅ | ✅ | All | Standardize options |
| Pronouns | ✅ | ❌ | ❌ | ✅ | Internal | Multi-select |
| Cultural Identity | ❌ | ✅ | ❌ | ✅ | Internal | Optional |
| Languages | ✅ | ✅ | ❌ | ✅ | All | Multi-select |
| **CLINICAL SERVICES** |
| Web Specialty | ✅ | ❌ | ✅ (Label) | ✅ | All | Primary service category |
| Ages Seen/Treated | ✅ | ✅ | ✅ | ✅ | All | Standardize age ranges |
| Clinical Focus | ✅ | ❌ | ❌ | ✅ | All | High-level categories |
| Specialties | ✅ | ✅ | ✅ | ✅ | All | Standardize across forms |
| Treatment Modalities | ✅ | ✅ (Approach) | ✅ (Types) | ✅ | All | Standardize terminology |
| Provider Level Treatment | ❌ | ✅ | ❌ | ✅ | All | Service levels offered |
| Do NOT Refer | ❌ | ❌ | ✅ | ✅ | All | Important addition from Pulse |
| Insurance Panels | ❌ | ✅ | ✅ (Restrictions) | ✅ | All | Standardize format |
| **AVAILABILITY & PRACTICE** |
| Evening Hours | ❌ | ✅ | ❌ | ✅ | All | Checkbox |
| Weekend Hours | ❌ | ✅ | ❌ | ✅ | All | Checkbox |
| Availability Status | ❌ | ❌ | ✅ | ✅ | All | Open/Limited/Closed |
| Soonest Availability | ❌ | ❌ | ✅ | ✅ | If status is Open/Limited | Wait time for appointment |
| Service Delivery Mode | ❌ | ✅ | ❌ | ✅ | All | In-person/Telehealth/Both |
| Location | ✅ | ❌ | ✅ | ✅ | All | Standardize format |
| **CONTACT INFORMATION** |
| Phone Number | ✅ | ✅ | ✅ | ✅ | All | Office contact |
| Mobile Phone | ❌ | ✅ | ❌ | ✅ | Internal | Optional |
| Fax | ❌ | ✅ | ❌ | ✅ | All | Optional |
| Email Address | ✅ | ✅ | ❌ | ✅ | All | |
| Mailing Street | ✅ (Office) | ✅ | ❌ | ✅ | All | |
| Mailing City | ✅ (Office) | ✅ | ❌ | ✅ | All | |
| Mailing State | ✅ (Office) | ✅ | ❌ | ✅ | All | |
| Mailing Zip | ✅ (Office) | ✅ | ❌ | ✅ | All | |
| Mailing Country | ❌ | ✅ | ❌ | ✅ | All | Defaults to USA |
| Building Name | ✅ | ❌ | ❌ | ✅ | All | Endeavor building name |
| **MEDIA & PERSONAL CONTENT** |
| Headshot | ✅ | ❌ | ❌ | ✅ | Internal on website | Photo upload |
| Video | ✅ | ❌ | ❌ | ✅ | Internal on website | URL field, optional |
| Bio | ✅ | ❌ | ❌ | ✅ | Internal on website | Long text |
| Philosophy of Care | ✅ | ❌ | ❌ | ✅ | Internal on website | Long text |
| "My endeavor is to..." | ✅ | ❌ | ❌ | ✅ | Internal on website | Statement field |
| Personal Interests | ✅ | ❌ | ❌ | ✅ | Internal on website | Text field |
| **ADMINISTRATIVE & REFERRAL** |
| Provider Finder Audit Date | ❌ | ✅ | ❌ | ✅ | All | System timestamp |
| Account Owner | ❌ | ✅ | ❌ | ✅ | All | System field |
| Eval Info | ❌ | ❌ | ✅ | ✅ | Internal | Evaluation details |
| Other Considerations | ❌ | ❌ | ✅ | ✅ | Internal | Additional notes |

## Visual Field Distribution by Form

```
╔════════════════════════╗
║ FINAL CONSOLIDATED FORM ║
╠════════════════════════╣
║                        ║
║  ┌──────────────────┐  ║
║  │   WEBSITE FORM   │  ║
║  │  (36 Fields)     │  ║
║  └──────────────────┘  ║
║          ▲             ║
║          │             ║
║  ┌───────┼──────────┐  ║
║  │       │          │  ║
║  │  ┌────┴─────┐    │  ║
║  │  │  PULSE   │    │  ║
║  │  │  FORM    │    │  ║
║  │  │ (16      │    │  ║
║  │  │ Fields)  │    │  ║
║  │  └────┬─────┘    │  ║
║  │       │          │  ║
║  │  SALESFORCE FORM │  ║
║  │  (29 Fields)     │  ║
║  └───────┬──────────┘  ║
║          ▼             ║
║   NEW FIELDS ADDED     ║
║   (7 Fields)           ║
║                        ║
╚════════════════════════╝
```

## Field Count Summary

- Total fields in final consolidated form: **73**
- Website form contribution: **36 fields**
- Salesforce form contribution: **29 fields**
- Pulse form contribution: **16 fields**
- New fields added: **7 fields**

## Conditional Display by Provider Type

### Fields for ALL Providers (35 required fields)
- Provider Status
- Basic identification (First Name, Last Name, NPI, etc.)
- Professional information (Title, License, Years in Practice)
- Core demographic information (Gender, Languages)
- Clinical services (Web Specialty, Ages Seen, Specialties, etc.)
- Availability & practice details
- Contact information

### ADDITIONAL Fields for INTERNAL Providers (+6 required fields)
- Show on Website
- Employment Type
- Professional Titles (optional)
- Hospital Affiliation (optional)
- Education & Training section
- Pronouns (optional)
- Cultural Identity (optional)
- Eval Info
- Other Considerations

### ADDITIONAL Fields for INTERNAL Providers on Website (+6 required fields)
- Headshot
- Bio
- Philosophy of Care
- "My endeavor is to..." statement
- Video (optional)
- Personal Interests (optional)

## Field Standardization Needed

### Provider Status Options (New Field)
- Internal Endeavor Health Provider
- External Affiliated Provider
- External Non-Affiliated Provider

### Specialties (Major Discrepancies Between Forms)
- Pulse: 45 options
- Salesforce: 60+ options
- Website: ~40 options
- **Recommendation**: Create a standardized list with categories

### Treatment Modalities (Different Terms in Each Form)
- Pulse: "Treatment types"
- Salesforce: "Treatment Approach" 
- Website: "Treatment Modalities"
- **Recommendation**: Use "Treatment Modalities" as the field name with standardized options

### Ages Seen (Different Ranges)
- Pulse: General "Ages Treated" range
- Salesforce: "ANY, 0 to 5, 6 to 11, 12 to 17, 18 to 50, Over 50"
- Website: "Children, Adolescents, Young Adults, Adults, Older Adults"
- **Recommendation**: Use numeric ranges: "0-5, 6-11, 12-17, 18-25, 26-40, 41-64, 65+" 