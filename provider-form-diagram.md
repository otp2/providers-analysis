# Provider Form Structure Visualization

```
┌───────────────────────────────────────────────────────────────┐
│                 PROVIDER INFORMATION FORM                      │
└───────────────────────────────────────────────────────────────┘
                              │
           ┌─────────────────┼─────────────────┐
           ▼                  ▼                 ▼
┌──────────────────┐ ┌─────────────────┐ ┌────────────────┐
│  INTERNAL        │ │  EXTERNAL       │ │  SYSTEM        │
│  PROVIDER        │ │  PROVIDER       │ │  FIELDS        │
└──────────────────┘ └─────────────────┘ └────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 1️⃣ Basic Identification (Always Visible)                      │
├───────────────────────────────────────────────────────────────┤
│ ● First Name [R]                                              │
│ ● Last Name [R]                                               │
│ ● Provider NPI Number [R]                                     │
│ ● Credentials [R] [Multi-select]                              │
│ ● Account Name [R]                                            │
│ ● Salesforce Contact ID [System]                              │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 2️⃣ Professional Information (Always Visible)                  │
├───────────────────────────────────────────────────────────────┤
│ ● Title [R] [Single-select]                                   │
│ ● License [R]                                                 │
│ ● Years in Practice [R] [Single-select]                       │
│ ● Professional Titles [O] [Internal]                          │
│ ● Hospital Affiliation [O] [Multi-select] [Internal]          │
│ ● Awards and Honors [O] [Internal]                            │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 3️⃣ Education & Training (Internal Only)                       │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│         ┌───────────┐                  ┌───────────┐          │
│         │ IF Title= │                  │ IF Title= │          │
│         │Psychiatrist│◄───────┐ ┌───────►Therapist │          │
│         │ Physician │        │ │       │Psychologist│         │
│         └───────────┘        │ │       └───────────┘          │
│              │               │ │            │                 │
│              ▼               │ │            ▼                 │
│ ┌─────────────────────┐     │ │    ┌─────────────────┐       │
│ │● Medical School [R] │     │ │    │● Education [R]  │       │
│ │● Medical School Year│     │ │    │● Education Year │       │
│ │● Residency [R]      │     │ │    └─────────────────┘       │
│ │● Residency Year     │     │ │                              │
│ │● Fellowship [O]     │     │ │                              │
│ │● Fellowship Year    │     │ │                              │
│ │● Board Certifications│    │ │                              │
│ └─────────────────────┘     │ │                              │
│                             │ │                              │
│ ┌─────────────────────┐     │ │                              │
│ │● Research Focus [O] │◄────┘ └────────────────────────────► │
│ └─────────────────────┘                                       │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 4️⃣ Demographic Information (Always Visible)                   │
├───────────────────────────────────────────────────────────────┤
│ ● Gender [R] [Single-select]                                  │
│ ● Pronouns [O] [Multi-select]                                 │
│ ● Cultural Identity [O] [Multi-select]                        │
│ ● Languages [R] [Multi-select]                                │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 5️⃣ Clinical Services (Always Visible)                         │
├───────────────────────────────────────────────────────────────┤
│ ● Web Specialty [R] [Single-select]                           │
│                                                               │
│   ┌───────────────┐       ┌───────────────┐                   │
│   │IF Web Specialty│       │IF Provider=   │                   │
│   │= Psych/Med    │       │Psychologist   │                   │
│   └───────────────┘       └───────────────┘                   │
│          │                        │                           │
│          ▼                        ▼                           │
│  ┌─────────────────┐     ┌─────────────────┐                  │
│  │Show med-specific│     │Show testing     │                  │
│  │treatment options│     │modalities       │                  │
│  └─────────────────┘     └─────────────────┘                  │
│                                                               │
│ ● Ages Seen/Treated [R] [Multi-select]                        │
│ ● Clinical Focus [R] [Multi-select]                           │
│ ● Specialties [R] [Multi-select]                              │
│ ● Treatment Modalities [R] [Multi-select]                     │
│ ● Provider Level of Treatment [R] [Multi-select]              │
│ ● Do NOT Refer [O] [Multi-select]                             │
│ ● Insurance Panels/Restrictions [R] [Multi-select]            │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 6️⃣ Availability & Practice (Always Visible)                   │
├───────────────────────────────────────────────────────────────┤
│ ● Evening Hours [R] [Boolean]                                 │
│ ● Weekend Hours [R] [Boolean]                                 │
│ ● Availability Status [R] [Single-select]                     │
│                                                               │
│   ┌───────────────┐                                           │
│   │IF Status=Open │                                           │
│   │or Limited     │                                           │
│   └───────────────┘                                           │
│          │                                                    │
│          ▼                                                    │
│  ┌─────────────────┐                                          │
│  │● Soonest        │                                          │
│  │  Availability[R]│                                          │
│  └─────────────────┘                                          │
│                                                               │
│ ● Service Delivery Mode [R] [Single-select]                   │
│ ● Location [R] [Multi-select]                                 │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 7️⃣ Contact Information (Always Visible)                       │
├───────────────────────────────────────────────────────────────┤
│ ● Phone Number [R] [Phone]                                    │
│ ● Mobile Phone [O] [Phone] [Internal]                         │
│ ● Fax [O] [Phone]                                             │
│ ● Email Address [R] [Email]                                   │
│ ● Mailing Street [R]                                          │
│ ● Mailing City [R]                                            │
│ ● Mailing State [R]                                           │
│ ● Mailing Zip [R]                                             │
│ ● Mailing Country [R]                                         │
│ ● Building Name [R] [Single-select]                           │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 8️⃣ Media & Personal Content (Internal Only)                   │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   ┌───────────────────┐                                       │
│   │IF Internal=True AND│                                       │
│   │Show on Website=True│                                       │
│   └───────────────────┘                                       │
│            │                                                  │
│            ▼                                                  │
│  ┌─────────────────────┐                                      │
│  │● Headshot [R] [File]│                                      │
│  │● Bio [R] [Text Area]│                                      │
│  │● Philosophy of Care │                                      │
│  │  [R] [Text Area]    │                                      │
│  │● My Endeavor        │                                      │
│  │  Statement [R]      │                                      │
│  └─────────────────────┘                                      │
│                                                               │
│ ● Video [O] [URL]                                             │
│ ● Personal Interests [O] [Text Area]                          │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 9️⃣ Administrative & Referral (Internal/Admin Only)            │
├───────────────────────────────────────────────────────────────┤
│ ● Provider Finder Audit Date [System] [Date]                  │
│ ● Account Owner [System]                                      │
│ ● Eval Info [O] [Text Area]                                   │
│ ● Other Considerations [O] [Text Area]                        │
└───────────────────────────────────────────────────────────────┘

LEGEND:
[R] - Required Field
[O] - Optional Field
[System] - System-generated Field
[Internal] - Internal Providers Only
[Multi-select] - Multiple options can be selected
[Single-select] - Only one option can be selected
```

## Conditional Logic Map

```
PROVIDER TYPE BRANCH
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ PSYCHIATRIST │     │  THERAPIST  │     │OTHER PROVIDER│
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Medical     │     │ Therapist   │     │ Basic       │
│ Education   │     │ Education   │     │ Fields Only │
│ Fields      │     │ Fields      │     │             │
└─────────────┘     └─────────────┘     └─────────────┘

PROVIDER STATUS BRANCH
┌─────────────┐     ┌─────────────┐
│  INTERNAL   │     │  EXTERNAL   │
└─────────────┘     └─────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│ Full Profile│     │ Basic       │
│ + Media     │     │ Professional│
│ + Website   │     │ Information │
└─────────────┘     └─────────────┘

WEBSITE VISIBILITY BRANCH
┌─────────────┐     ┌─────────────┐
│  SHOW ON    │     │ HIDE FROM   │
│  WEBSITE    │     │  WEBSITE    │
└─────────────┘     └─────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│ Required    │     │ Optional    │
│ Media Fields│     │ Media Fields│
└─────────────┘     └─────────────┘

AVAILABILITY BRANCH
┌─────────────┐     ┌─────────────┐
│OPEN/LIMITED │     │   CLOSED    │
└─────────────┘     └─────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│ Show        │     │ Hide        │
│ Soonest     │     │ Soonest     │
│ Availability│     │ Availability│
└─────────────┘     └─────────────┘
```

## Form Flow Sequence

1. User selects Provider Type and Internal/External status
2. System shows/hides conditional sections based on selections 
3. Basic Identification section always appears first
4. Sections appear in numerical order (1-9)
5. Within each section, required fields appear first
6. Conditional fields appear when their parent field conditions are met
7. System validates required fields before allowing submission
8. Validation errors appear inline next to fields
9. On successful validation, form data is saved to Salesforce 