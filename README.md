# Provider Forms Analysis & Integration Tool

This project provides a comprehensive analysis and integration solution for harmonizing three provider information forms (Website, Salesforce, and Pulse) into a unified Salesforce-based system for Endeavor Health.

## Overview

The analysis tool visualizes the relationships between different provider forms and provides a structured approach to combining them into a single, comprehensive system. The project includes:

1. Data visualization of the existing forms
2. Comprehensive analysis of field mappings
3. Interactive form prototype with conditional logic
4. Implementation specifications and examples

## Project Structure

```
providers-analysis/
├── README.md                               # Project documentation
├── package.json                            # Project dependencies
├── tsconfig.json                           # TypeScript configuration
├── setup.js                                # Setup script
├── public/                                 # Public assets
├── src/                                    # Source code
│   ├── App.tsx                             # Main application component
│   ├── index.tsx                           # Application entry point
│   ├── provider-form-analysis.json         # Analysis data for visualization
│   ├── provider-form-visualization.tsx     # Data visualization component
│   ├── react-app-env.d.ts                  # React TypeScript definitions
│   ├── form-visualization/                 # Form prototype and visualization tools
│   │   ├── index.html                      # Interactive form prototype
│   │   ├── styles.css                      # Styling for prototype
│   │   ├── script.js                       # Prototype functionality
│   │   ├── form-data-schema.json           # JSON schema for form data
│   │   └── salesforce-config-example.xml   # Example Salesforce config
│   └── form-implementation/                # Implementation code
│       └── conditional-logic.js            # Form conditional logic implementation
└── comprehensive-analysis/                 # Comprehensive analysis documents
    ├── provider-form-comprehensive-analysis.md   # Complete field inventory
    ├── provider-form-diagram.md                  # Form structure visualization
    ├── specialty-standardization.md              # Specialty list standardization
    ├── internal-external-provider-logic.md       # Provider type conditional logic
    └── comprehensive-form-analysis.md            # Initial analysis
```

## Setup and Usage

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the setup script:**
   ```
   node setup.js
   ```

3. **Start the development server:**
   ```
   npm start
   ```

4. **Access the visualization tools:**
   - Form Analysis Dashboard: http://localhost:3000
   - Interactive Form Prototype: http://localhost:3000/form-visualization

## Form Analysis Features

The provider form analysis includes:

1. **Field Mapping**: Comprehensive mapping between all three forms (Website, Salesforce, Pulse)
2. **Gap Analysis**: Identification of fields missing from each form
3. **Data Type Specifications**: Field types, validation rules, and requirements
4. **Conditional Logic**: Rules for showing/hiding fields based on provider type
5. **Standardization**: Standardized specialty lists, age ranges, and other pickfields

## Interactive Form Prototype

The form prototype demonstrates:

1. **Conditional Field Display**: Fields appear/disappear based on provider type
2. **Validation Rules**: Required fields based on provider status
3. **Section Organization**: Logical grouping of related fields
4. **Field Dependencies**: Fields that depend on values in other fields

## Implementation Resources

The project includes implementation resources for developers:

1. **JSON Schema**: Structured data definition for the form
2. **Salesforce XML**: Example Salesforce object configuration
3. **Conditional Logic Code**: JavaScript implementation of form logic
4. **Mermaid Diagrams**: Visual representations of form flow and field relationships

## Technical Notes

- Built with React and TypeScript
- Uses Mermaid.js for flow diagrams
- JSON Schema for data validation
- Responsive design for all screen sizes

## Next Steps

1. Implement the consolidated form in Salesforce
2. Create data migration scripts for existing provider data
3. Develop the integration between Salesforce and the website
4. Set up automated testing for form validation rules

## License

Copyright © 2023 Endeavor Health 