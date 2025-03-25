# Specialty and Treatment Modality Standardization

## Overview
This document provides detailed specifications for standardizing specialty categories, specialty options, and treatment modalities across all three provider forms (Website, Salesforce, and Pulse) when integrating them into a unified Salesforce-based system.

## Clinical Specialty Categories

### Standard Categories
The following categories should be used to organize specialties in the user interface:

1. **Mental Health Conditions**
   * Anxiety disorders
   * Mood disorders
   * Trauma-related disorders
   * Personality disorders
   * Psychotic disorders
   * Other psychiatric conditions

2. **Addiction & Recovery**
   * Substance use disorders
   * Behavioral addictions
   * Recovery support

3. **Life Transitions & Stressors**
   * Relationship issues
   * Life changes
   * Grief and loss
   * Identity and personal growth

4. **Demographic-Specific Specialties**
   * Children and adolescents
   * LGBTQ+ issues
   * Cultural and racial identity
   * Gender-specific issues
   * Aging and geriatric issues

5. **Specialized Services**
   * Neuropsychological assessment
   * Psychological testing
   * Medication management
   * Crisis intervention

## Specialty Field Harmonization

| Website Field Name | Salesforce Field Name | Pulse Field Name | New Standardized Field Name |
|-------------------|----------------------|------------------|----------------------------|
| Clinical Focus | Specialty Areas | Specialties | Clinical Specialties |
| Web Specialty | Title | Label | Provider Service Category |
| Treatment Modalities | Treatment Approach | Treatment types | Treatment Modalities |
| Conditions Treated | *Not present* | *Combined with Specialties* | Clinical Conditions |
| *Not present* | *Not present* | Do NOT Refer | Exclusion Criteria |

## Complete Standardized Specialty List

### Provider Service Category (Primary Classification)
*Single-select field to determine provider's primary service category*

* Psychiatry/Medication Management
* Therapy/Counseling
* Neuropsychology/Psychological Testing
* Behavioral Health Integration
* Medication Management Only
* Dual Diagnosis/Co-occurring Treatment

### Clinical Specialties
*Multi-select field for all specialties with clear grouping*

#### Anxiety & Related Disorders
* Anxiety (General)
* Panic Disorder
* OCD
* Social Anxiety
* Phobias
* Generalized Anxiety Disorder (GAD)

#### Mood Disorders
* Depression
* Bipolar Disorders
* Dysthymia/Persistent Depressive Disorder
* Mood Disorders (General)
* Seasonal Affective Disorder

#### Trauma-Related Disorders
* PTSD/Trauma
* Acute Stress Disorder
* Complex Trauma
* Childhood Trauma
* Dissociation
* Sexual Abuse/Sexual Assault (Survivors)
* Domestic Abuse/Violence (Survivors)

#### Personality Disorders
* Personality Disorders (General)
* Borderline Personality
* Narcissistic Personality Disorder
* Avoidant Personality Disorder

#### Neurodevelopmental Disorders
* ADD/ADHD
* Autism Spectrum
* ASD/Intellectual Disorders
* Developmental Delays/Disabilities
* Learning Disorders
* Tic Disorders

#### Addiction & Recovery
* Substance Use (General)
* Addiction (General)
* Addiction: Alcohol
* Addiction: Drug
* Addiction: Food
* Addiction: Internet
* Addiction: Pornography
* Sexual Dysfunction/Addiction
* Gambling
* Other Addictions
* Dual Diagnosis
* DUI Services
* Suboxone/MAT Support

#### Behavioral & Impulse Control Issues
* Aggression/Impulse Control
* Behavioral Issues
* Disruptive/Impulse Control/Conduct Disorders
* Anger Management
* Self Injury
* Refusal

#### Eating & Body-Related Issues
* Eating Disorders
* Binge Eating
* Anorexia
* Bulimia
* Weight Management
* Body Image

#### Health Psychology
* Chronic Illness/Medical Issues
* Chronic Pain
* Health And Behavior Change
* Sleep Issues
* Somatic Disorders

#### Life Transitions & Stressors
* Relationship Issues
* Marital/Couples/Intimate Relationship Issues
* Grief & Loss/Bereavement
* Death & Dying/End of Life
* Parenting
* Adoption
* Infertility
* Divorce/Separation
* Career Transitions
* Stress Management

#### Identity & Personal Growth
* Gender Identity
* Gender Dysphoria
* LGBTQ+
* Cultural/Ethnic/Race Related Issues
* Racial/Ethnic Concerns
* Religious/Faith Based/Spiritual Counseling
* Spirituality

#### Age-Specific Specializations
* School Issues/Truancy
* College/Young Adult Adjustment
* Geriatric
* Perinatal/Postpartum
* Women's Issues
* Men's Issues

#### Other Clinical Specializations
* Psychosis
* Psychotic Disorders
* Schizophrenia
* Neurocognitive Disorders
* Dementia/Neurocognitive
* Military Veterans/First Responders
* First Responders
* Caregiver Support
* Couples Counseling
* Family Therapy

### Treatment Modalities
*Multi-select field for treatment approaches*

#### Cognitive & Behavioral Therapies
* Cognitive Behavioral Therapy (CBT)
* Acceptance and Commitment Therapy (ACT)
* Dialectical Behavior Therapy (DBT)
* Exposure Response Prevention (ERP)
* Cognitive Processing Therapy (CPT)
* Rational Emotive Behavioral Therapy (REBT)
* Mindfulness Based Cognitive Therapy (MCBT)
* Mindfulness Based Stress Reduction (MBSR)

#### Psychodynamic & Insight-Oriented Approaches
* Psychodynamic Therapy
* Psychotherapy (General)
* Person Centered Therapy
* Client Centered
* Gestalt Therapy

#### Trauma-Focused Therapies
* EMDR (Eye Movement Desensitization and Reprocessing)
* Trauma Informed Care
* Somatic Experience

#### Family & Relationship Therapies
* Family Therapy
* Family Systems Therapy
* Couples Therapy
* Gottman Method
* Attachment/Relational Therapy
* Emotion Focused Therapy (EFT)

#### Solution-Focused Approaches
* Solutions Focused Therapy
* Motivational Interviewing
* Strengths Based Therapy
* Narrative Therapy

#### Mind-Body Approaches
* Meditation
* Mind Body Connection
* Yoga
* Bio Feedback
* Neurofeedback
* Hypnotherapy/Hypnosis

#### Expressive Therapies
* Art Therapy
* Play Therapy
* Expressive Therapy

#### Medical & Integrated Treatments
* Psychopharmacology
* Medication Assisted Therapy (MAT)
* Electroconvulsive Therapy (ECT)
* Transcranial Magnetic Stimulation (TMS)

#### Assessment & Testing
* Psychological Testing
* Neuropsychological Testing

#### Other Approaches
* Eclectic
* Critical Incident Debriefing
* Group Therapy
* Internal Family Systems (IFS)
* Emotion Efficacy Therapy (EET)

### Provider Level of Treatment
*Multi-select field for treatment settings/levels offered*

* Outpatient Therapy
* Outpatient Psychiatry
* Intensive Outpatient Program (IOP)
* Partial Hospitalization Program (PHP)
* Inpatient
* Residential
* Detox
* Couple Counseling
* Family Therapy
* Support Groups/Psychoeducation
* Psych Testing
* Neuropsych Testing

### Age Ranges
*Multi-select field with standardized age ranges*

* 0-5 (Children)
* 6-11 (Children)
* 12-17 (Adolescents)
* 18-25 (Young Adults)
* 26-40 (Adults)
* 41-64 (Adults)
* 65+ (Older Adults)

### Service Delivery Mode
*Single-select field for delivery method*

* In-Person Only
* Telehealth Only
* In-Person and Telehealth

## Insurance Panel Standardization
*Multi-select field with standard insurance options*

### Major Insurance Categories
* BCBS (All plans)
* BCBS NS-EEH (IHP, NPA, NCH)
* Medicare
* Medicaid
* Aetna
* Cigna
* United Healthcare/Optum
* Humana
* Tricare
* Self-Pay Only

## UI Implementation Recommendations

1. **Hierarchical Display**
   * Organize specialties by category in the form
   * Use collapsible sections to manage visual complexity
   * Show category headers with count of selected items

2. **Smart Presets**
   * Associate certain specialties with provider types
   * Offer quick-select common groupings
   * Auto-select related specialties when appropriate

3. **Search Functionality**
   * Implement type-ahead search within specialties
   * Allow filtering by category
   * Provide "most common" quick selection

4. **Visual Design**
   * Use consistent iconography for categories
   * Clearly distinguish selected vs. unselected items
   * Implement responsive design for various screen sizes

5. **Related Fields Logic**
   * Link "Do NOT Refer" field to use same options as Specialties
   * When a provider selects certain specialties, suggest related treatment modalities
   * Auto-filter age-specific specialties based on "Ages Seen" selection

## Migration Plan for Existing Data

1. **Mapping Rules**
   * Create explicit mapping tables for each legacy value
   * Handle edge cases and partial matches
   * Document any data loss or transformation decisions

2. **Default Selections**
   * For missing data, establish appropriate defaults based on provider type
   * When uncertain, prefer broader categories
   * Flag mapped data for review by administrators

3. **Quality Assurance**
   * Implement verification process for critical specialties
   * Create reports identifying potentially problematic mappings
   * Establish review process for providers with extensive specialty lists

4. **Special Cases**
   * Legacy "ANY" age selection maps to all standardized age ranges
   * Treat legacy free-text specialty entries as "Other Considerations" if no clear mapping
   * Convert negated specialties (e.g., "Not seeing anxiety") to "Do NOT Refer" listings 