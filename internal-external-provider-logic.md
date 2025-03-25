# Internal vs External Provider Logic Specification

## Overview

This document specifies the conditional logic for differentiating between internal Endeavor Health providers and external providers in the unified Salesforce form. It details which fields should be shown or hidden based on provider status, provides decision trees for the form's behavior, and outlines implementation recommendations.

## Provider Status Determination

### Primary Provider Status Field

**Field Name:** Provider Status  
**Type:** Single-select dropdown  
**Options:**
- Internal Endeavor Health Provider
- External Affiliated Provider
- External Non-Affiliated Provider

### Additional Provider Classification Fields

**Field Name:** Show on Endeavor Website  
**Type:** Boolean/Checkbox  
**Default:** Checked for Internal providers, unchecked for External providers  
**Visibility:** Only visible when Provider Status = "Internal Endeavor Health Provider"

**Field Name:** Provider Employment Type  
**Type:** Single-select dropdown  
**Options:**
- Full-time Employee
- Part-time Employee
- Contractor
- Affiliated Independent Practice
- Medical Staff
**Visibility:** Only visible when Provider Status = "Internal Endeavor Health Provider"

## Conditional Field Logic

### Fields Always Visible (All Provider Types)

1. **Basic Identification Section**
   - First Name
   - Last Name
   - Provider NPI Number
   - Credentials
   - Account Name

2. **Professional Information Section**
   - Title
   - License
   - Years in Practice

3. **Demographic Information Section**
   - Gender
   - Languages

4. **Clinical Services Section**
   - Web Specialty
   - Ages Seen/Treated
   - Clinical Focus
   - Specialties
   - Treatment Modalities
   - Provider Level of Treatment
   - Insurance Panels/Restrictions

5. **Availability & Practice Section**
   - Evening Hours
   - Weekend Hours
   - Availability Status
   - Service Delivery Mode
   - Location

6. **Contact Information Section**
   - Phone Number
   - Fax
   - Email Address
   - Mailing Address Fields
   - Building Name

### Fields Only for Internal Providers

1. **Professional Information Section**
   - Professional Titles
   - Hospital Affiliation
   - Awards and Honors

2. **Education & Training Section** (entire section)
   - Medical School Education
   - Medical School Year
   - Education (Therapists)
   - Education Year
   - Residency
   - Residency Year
   - Fellowship
   - Fellowship Year
   - Board Certifications
   - Research Focus

3. **Demographic Information Section**
   - Pronouns
   - Cultural Identity

4. **Contact Information Section**
   - Mobile Phone

5. **Media & Personal Content Section** (entire section)
   - Headshot
   - Video
   - Bio
   - Philosophy of Care
   - My Endeavor Statement
   - Personal Interests

6. **Administrative & Referral Section**
   - Eval Info
   - Other Considerations

### Fields Only for Internal Providers Displayed on Website

When both conditions are true:
- Provider Status = "Internal Endeavor Health Provider"
- Show on Endeavor Website = Checked

The following fields become **required** (otherwise optional):

1. **Media & Personal Content Section**
   - Headshot
   - Bio
   - Philosophy of Care
   - My Endeavor Statement

## Decision Trees

### Main Provider Type Decision Tree

```
START
  │
  ├─ Is Provider Status = "Internal Endeavor Health Provider"?
  │   │
  │   ├─ YES ──► Show All Standard Fields
  │   │          Show All Internal-Only Fields
  │   │          │
  │   │          ├─ Is "Show on Endeavor Website" = TRUE?
  │   │          │   │
  │   │          │   ├─ YES ──► Mark Website Display Fields as Required
  │   │          │   │
  │   │          │   └─ NO ───► Mark Website Display Fields as Optional
  │   │
  │   └─ NO ───► Show Only Standard Fields
  │              Hide All Internal-Only Fields
  │
END
```

### Education & Training Decision Tree

```
START
  │
  ├─ Is Provider Status = "Internal Endeavor Health Provider"?
  │   │
  │   ├─ YES ──► Show Education & Training Section
  │   │          │
  │   │          ├─ Is Title = "Psychiatrist" OR "Physician"?
  │   │          │   │
  │   │          │   ├─ YES ──► Show & Require Medical School Fields
  │   │          │   │          Show & Require Residency Fields
  │   │          │   │          Show Fellowship Fields (optional)
  │   │          │   │          Show Board Certifications
  │   │          │   │
  │   │          │   └─ NO ───► Hide Medical-specific Education Fields
  │   │          │
  │   │          ├─ Is Title = "Therapist" OR "Psychologist"?
  │   │          │   │
  │   │          │   ├─ YES ──► Show & Require Education (Therapists) Fields
  │   │          │   │
  │   │          │   └─ NO ───► Hide Therapist-specific Education Fields
  │   │
  │   └─ NO ───► Hide Education & Training Section
  │
END
```

## Implementation Guidelines

### Initial Form Load Behavior

1. When creating a new provider record:
   - Provider Status field should be the first field to complete
   - Form sections should dynamically appear/disappear based on selection
   - Default to internal provider fields hidden until status is selected

2. When editing an existing provider record:
   - Load appropriate fields based on stored Provider Status
   - If Provider Status is changed during editing, dynamically update visible fields
   - Prompt user about potential data loss when switching from Internal to External

### Validation Rules

1. **Required Fields by Provider Type**
   - Internal providers have more required fields than external providers
   - System should validate required fields based on provider type before saving

2. **Website Display Validation**
   - If "Show on Endeavor Website" is checked, validate all required website display fields
   - If validation fails, highlight missing fields and prevent form submission

3. **Provider Type Change Validation**
   - When changing from Internal to External, warn about data in internal-only fields
   - Provide option to cancel or proceed with change (data will be preserved but hidden)

4. **Education Field Validation**
   - For psychiatrists/physicians: require medical school and residency information
   - For therapists/psychologists: require therapist education information

### UI Recommendations

1. **Visual Indicators**
   - Use clear section headers to indicate internal-only sections
   - Add visual indicator (e.g., badge or icon) next to internal-only fields
   - Include help text explaining field visibility rules

2. **Progressive Disclosure**
   - Implement collapsible sections to reduce form complexity
   - Auto-expand relevant sections based on provider type
   - Provide "View All Fields" option for administrators

3. **Permission Settings**
   - Create permission sets for different user roles (admin vs. standard user)
   - Restrict ability to change Provider Status to administrators
   - Allow standard users to edit fields appropriate to their provider type

## Data Considerations

### Data Storage

1. All fields should be stored in the Salesforce provider object, regardless of visibility
2. Hidden fields retain their values even when not displayed
3. Provider Status field changes should be tracked in audit history
4. System should maintain timestamp of last provider type change

### Data Migration

1. For existing providers, set Provider Status based on current data source:
   - Website form providers → Internal Endeavor Health Provider
   - Salesforce-only providers (without website data) → External Provider
   - Pulse-only providers → External Provider
   
2. For providers with partial data:
   - If missing critical internal provider fields → Flag for review
   - If website display fields incomplete → Set "Show on Website" to False
   - If education fields incomplete → Flag for provider type verification

## Reporting & Analytics

1. Create reports to track:
   - Count of internal vs. external providers
   - Completeness of profiles by provider type
   - Website-displayed providers with incomplete information
   - Recent changes to provider status

2. Dashboard elements:
   - Provider type distribution
   - Website visibility metrics
   - Field completeness by section 