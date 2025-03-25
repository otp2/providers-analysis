# Provider Form Conditional Logic

This document explains in detail all the conditions that determine when specific fields appear or are required in the consolidated provider form.

## Primary Conditional Relationships

### 1. Provider Status → Field Visibility

The **Provider Status** field is the most important decision point in the form. It determines several major groups of fields:

#### If "Internal Endeavor Health Provider" is selected:
- **Show these additional fields**:
  - "Show on Website" checkbox
  - "Employment Type" field
  - Professional Titles field
  - Hospital Affiliation field
  - Awards/Honors field
  - All Education & Training fields (with additional conditions below)
  - Pronouns field
  - Cultural Identity field
  - Mobile Phone field
  - Evaluation Information field
  - Other Considerations field

#### If "External Affiliated Provider" or "External Non-Affiliated Provider" is selected:
- **Hide all internal-only fields** listed above
- Only show the core fields required for all providers

### 2. Provider Status + Show on Website → Media Content

The Website Display fields have a dual condition:

#### If "Internal Endeavor Health Provider" AND "Show on Website" is checked:
- **Show and require these fields**:
  - Headshot upload
  - Bio text area
  - Philosophy of Care text area
  - "My endeavor is to..." statement
  - Show but don't require: Video URL
  - Show but don't require: Personal Interests

#### If "Show on Website" is NOT checked or provider is NOT internal:
- **Hide all Media & Personal Content fields**

### 3. Provider Title + Provider Status → Education Fields

The Education & Training section appears only for internal providers, but has further conditions based on the provider's title:

#### If Title is "Psychiatrist" or "Physician" AND Provider Status is "Internal":
- **Show these fields**:
  - Medical School (required)
  - Medical School Year (required)
  - Residency (required)
  - Residency Year (required)
  - Fellowship (optional)
  - Fellowship Year (optional) 
  - Board Certifications (optional)
- **Hide therapist education fields**

#### If Title is "Therapist" or "Psychologist" AND Provider Status is "Internal":
- **Show these fields**:
  - Therapist Education (required)
  - Education Year (required)
- **Hide medical education fields**

#### If any other Title OR Provider Status is not "Internal":
- **Hide the entire Education & Training section**

### 4. Availability Status → Scheduling Fields

The Availability Status field controls whether additional scheduling information is needed:

#### If Availability Status is "Open" or "Limited":
- **Show and require** the "Soonest Availability" field

#### If Availability Status is "Closed":
- **Hide** the "Soonest Availability" field

## Complete Conditional Flow Diagram

```
Start
│
└─► Select Provider Status
    │
    ├─► If "Internal Endeavor Health Provider"
    │   │
    │   ├─► Show "Employment Type" field (required)
    │   │
    │   ├─► Show "Show on Website" checkbox
    │   │   │
    │   │   └─► If checked
    │   │       │
    │   │       └─► Show Media & Personal Content section (most fields required)
    │   │
    │   ├─► Show internal-only Professional Information fields
    │   │
    │   ├─► Select Provider Title
    │   │   │
    │   │   ├─► If "Psychiatrist" or "Physician"
    │   │   │   │
    │   │   │   └─► Show Medical Education fields
    │   │   │
    │   │   └─► If "Therapist" or "Psychologist"
    │   │       │
    │   │       └─► Show Therapist Education fields
    │   │
    │   └─► Show other internal-only fields
    │
    └─► If "External Affiliated" or "External Non-Affiliated"
        │
        └─► Hide all internal-only fields
```

## Field Dependencies Quick Reference

| If this field... | Has this value... | Then these fields... | Are... |
|------------------|-------------------|----------------------|--------|
| Provider Status | Internal | Employment Type | Shown & Required |
| Provider Status | Internal | Show on Website | Shown |
| Provider Status | Internal | Professional Titles | Shown (Optional) |
| Provider Status | Internal | Hospital Affiliation | Shown (Optional) |
| Provider Status | Internal | Awards/Honors | Shown (Optional) |
| Provider Status | Internal | Mobile Phone | Shown (Optional) |
| Provider Status | Internal | Evaluation Info | Shown (Optional) |
| Provider Status | Internal | Other Considerations | Shown (Optional) |
| Provider Status | Internal + Title condition | Education & Training section | Shown (Requirements vary) |
| Provider Status + Show on Website | Internal + Checked | Media & Personal Content section | Shown (Most Required) |
| Provider Title | Psychiatrist/Physician | Medical Education fields | Shown if Provider is Internal |
| Provider Title | Therapist/Psychologist | Therapist Education fields | Shown if Provider is Internal |
| Availability Status | Open/Limited | Soonest Availability | Shown & Required |

## Field Count by Provider Type

1. **External Providers**: 35 required fields
   - Basic provider identification
   - Core professional information
   - Clinical services
   - Availability & scheduling
   - Contact information

2. **Internal Providers**: 41 required fields
   - All external provider fields (35)
   - Employment Type
   - Education fields (based on title)
   - And access to ~10 optional fields

3. **Internal Website Providers**: 47 required fields
   - All internal provider fields (41)
   - Headshot
   - Bio
   - Philosophy of Care
   - "My endeavor is to..." statement
   - And access to ~3 optional fields

## Implementation Guidelines

1. **Cascade Dependencies**: Implement the form so field visibility rules cascade properly
   - Example: If Provider Status changes, all dependent fields should update immediately

2. **Save Form State**: Allow partial form completion with all conditional logic preserved when returning

3. **Clear Indication**: Clearly indicate when fields appear/disappear due to conditional logic
   - Use animations or highlighting to show changes

4. **Validation**: Only validate visible fields that are required
   - Skip validation for fields that are hidden due to conditional logic

5. **Default Values**: Set sensible defaults for conditional fields
   - Example: "Show on Website" defaults to unchecked

6. **Help Text**: Include explanations of why certain fields appear
   - Example: "These fields are shown because you selected 'Internal Provider'" 