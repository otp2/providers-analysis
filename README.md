# Provider Forms Analysis Visualization

A visualization tool for comparing three provider information forms in use at Endeavor Health.

## Overview

This project provides a visualization of the comparative analysis between:
- Endeavor Health Website Form
- Provider Search Form Based on Salesforce
- Pulse Based Form

The visualization highlights field overlap, unique fields, and recommendations for form consolidation.

## Data Structure

The data for the visualization is stored in two main files:
- `src/provider-form-analysis.json`: Contains the structured data for the analysis
- `src/provider-form-visualization.tsx`: React component to render the interactive visualization

## Features

The visualization includes three main tabs:
1. **Overview**: Summary of all forms and high-level statistics
2. **Fields**: Detailed breakdown of fields by category
3. **Gaps**: Analysis of missing information across the forms

## Setup

1. Run the setup script to ensure proper file structure:
```
node setup.js
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Build for production:
```
npm run build
```

## Project Structure

```
├── public/
│   └── index.html             # Main HTML file
├── src/
│   ├── App.tsx                # Main App component
│   ├── index.tsx              # Entry point
│   ├── provider-form-analysis.json  # Form analysis data
│   ├── provider-form-visualization.tsx  # Visualization component
│   └── react-app-env.d.ts     # TypeScript declaration file
├── package.json               # Dependencies and scripts
├── README.md                  # This file
├── setup.js                   # Setup script
└── tsconfig.json              # TypeScript configuration
```

## Requirements

- Node.js 14+
- npm or yarn

## Technology Stack

- React
- TypeScript
- CSS-in-JS (inline styles) 