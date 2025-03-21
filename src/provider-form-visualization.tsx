import * as React from 'react';
import { useState } from 'react';

// Define types for the data structure
interface Field {
  fieldName: string;
  inWebsite: boolean;
  inSalesforce: boolean;
  inPulse: boolean;
  notes: string;
}

interface Category {
  category: string;
  fields: Field[];
}

interface Form {
  name: string;
  shortName: string;
  purpose: string;
  sections: number | string;
  totalFields: number;
  color: string;
}

interface Gap {
  form: string;
  missingFields: string[];
}

interface FieldTypeAnalysis {
  textFields: number;
  selectFields: number;
  multiselectFields: number;
  dateFields: number;
  fileUploadFields: number;
  numericFields: number;
  binaryFields: number;
}

interface VisualizationData {
  title: string;
  description: string;
  forms: Form[];
  fieldCategories: Category[];
  fieldTypeAnalysis: FieldTypeAnalysis;
  gaps: Gap[];
  recommendations: string[];
}

// Counts return type
interface FieldCounts {
  allForms: number;
  onlyWebsite: number;
  onlySalesforce: number;
  onlyPulse: number;
  websiteSalesforce: number;
  websitePulse: number;
  salesforcePulse: number;
  total: number;
}

const ProviderFormVisualization = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Colors
  const colors = {
    website: '#4285F4', // Google Blue
    salesforce: '#00A1E0', // Salesforce Blue
    pulse: '#6A4C93', // Purple
    shared: '#34A853', // Google Green
    missing: '#FBBC05', // Google Yellow
    background: '#f8f9fa',
    border: '#dadce0',
    text: '#202124',
    lightText: '#5f6368'
  };
  
  // Data for visualization
  const data: VisualizationData = {
    title: "Endeavor Health Provider Forms Analysis",
    description: "Comparative analysis of three provider information forms in use at Endeavor Health",
    forms: [
      {
        name: "Endeavor Health Website Form",
        shortName: "Website",
        purpose: "Public-facing provider profiles",
        sections: 5,
        totalFields: 23,
        color: colors.website
      },
      {
        name: "Provider Search Form Based on Salesforce",
        shortName: "Salesforce",
        purpose: "Provider database and search functionality",
        sections: "Not explicitly sectioned",
        totalFields: 29,
        color: colors.salesforce
      },
      {
        name: "Pulse Based Form",
        shortName: "Pulse",
        purpose: "Internal referral system",
        sections: "Not explicitly sectioned",
        totalFields: 16,
        color: colors.pulse
      }
    ],
    fieldCategories: [
      {
        category: "Basic Identification",
        fields: [
          {
            fieldName: "Provider NPI Number",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Salesforce uses Contact ID instead of NPI"
          },
          {
            fieldName: "First Name",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "Present in all forms"
          },
          {
            fieldName: "Last Name",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "Present in all forms"
          },
          {
            fieldName: "Account Name",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Medical group/institution name, only in Salesforce"
          }
        ]
      },
      {
        category: "Professional Information",
        fields: [
          {
            fieldName: "Credentials",
            inWebsite: true,
            inSalesforce: false,
            inPulse: true,
            notes: "Website has extensive credential list; Pulse has simpler list; Salesforce uses Title instead"
          },
          {
            fieldName: "Professional Title",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Called 'Title' in Salesforce"
          },
          {
            fieldName: "License",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Years of Experience",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Called 'Years in Practice' in Salesforce"
          },
          {
            fieldName: "Hospital Affiliation",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Awards and Honors",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          }
        ]
      },
      {
        category: "Demographic Information",
        fields: [
          {
            fieldName: "Gender",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "All forms have this, but with different options"
          },
          {
            fieldName: "Pronouns",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Cultural Identity",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Languages",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Both Website and Salesforce have comprehensive language lists"
          }
        ]
      },
      {
        category: "Education & Training",
        fields: [
          {
            fieldName: "Medical School Education",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Education (for Therapists)",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Residency",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Fellowship",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Board Certifications",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Research Focus",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          }
        ]
      },
      {
        category: "Clinical Services",
        fields: [
          {
            fieldName: "Web Specialty/Label",
            inWebsite: true,
            inSalesforce: false,
            inPulse: true,
            notes: "Website: 'Web Specialty', Pulse: 'Label'"
          },
          {
            fieldName: "Ages Seen/Treated",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "All forms have this, but with different age brackets and formats"
          },
          {
            fieldName: "Clinical Focus/Specialties",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "All have this, but with different terminology and options"
          },
          {
            fieldName: "Treatment Modalities/Approach",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "All have this with varying levels of detail"
          },
          {
            fieldName: "Provider Level of Treatment",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "In-Person/Telehealth",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Do NOT Refer",
            inWebsite: false,
            inSalesforce: false,
            inPulse: true,
            notes: "Unique to Pulse form"
          },
          {
            fieldName: "Insurance Panels/Restrictions",
            inWebsite: false,
            inSalesforce: true,
            inPulse: true,
            notes: "Present in both Salesforce and Pulse"
          }
        ]
      },
      {
        category: "Availability & Practice Information",
        fields: [
          {
            fieldName: "Availability",
            inWebsite: false,
            inSalesforce: false,
            inPulse: true,
            notes: "Only in Pulse"
          },
          {
            fieldName: "Soonest Availability",
            inWebsite: false,
            inSalesforce: false,
            inPulse: true,
            notes: "Only in Pulse"
          },
          {
            fieldName: "Evening Hours",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Weekend Hours",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Location",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "Different formats across forms"
          }
        ]
      },
      {
        category: "Contact Information",
        fields: [
          {
            fieldName: "Phone Number",
            inWebsite: true,
            inSalesforce: true,
            inPulse: true,
            notes: "Present in all forms"
          },
          {
            fieldName: "Mobile Phone",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Fax",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Email Address",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Present in Website and Salesforce"
          },
          {
            fieldName: "Office/Mailing Address",
            inWebsite: true,
            inSalesforce: true,
            inPulse: false,
            notes: "Present in Website and Salesforce with different formats"
          }
        ]
      },
      {
        category: "Media & Personal Content",
        fields: [
          {
            fieldName: "Headshot",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Video",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Bio",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Philosophy of Care",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "My Endeavor Statement",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          },
          {
            fieldName: "Personal Interests",
            inWebsite: true,
            inSalesforce: false,
            inPulse: false,
            notes: "Only in Website form"
          }
        ]
      },
      {
        category: "Referral & Evaluation Information",
        fields: [
          {
            fieldName: "Eval Info",
            inWebsite: false,
            inSalesforce: false,
            inPulse: true,
            notes: "Only in Pulse"
          },
          {
            fieldName: "Other Considerations",
            inWebsite: false,
            inSalesforce: false,
            inPulse: true,
            notes: "Only in Pulse"
          }
        ]
      },
      {
        category: "Administrative",
        fields: [
          {
            fieldName: "Provider Finder Audit Date",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Only in Salesforce"
          },
          {
            fieldName: "Account Owner",
            inWebsite: false,
            inSalesforce: true,
            inPulse: false,
            notes: "Hidden field in Salesforce"
          }
        ]
      }
    ],
    fieldTypeAnalysis: {
      textFields: 32,
      selectFields: 20,
      multiselectFields: 12,
      dateFields: 3,
      fileUploadFields: 2,
      numericFields: 5,
      binaryFields: 2
    },
    gaps: [
      {
        form: "Website",
        missingFields: [
          "Insurance information",
          "Cultural identity",
          "Availability information",
          "Service delivery mode (telehealth/in-person)"
        ]
      },
      {
        form: "Salesforce",
        missingFields: [
          "Rich media (headshot, video)",
          "Biographical information",
          "Educational background",
          "Philosophy of care",
          "Personal interests",
          "Do NOT Refer criteria"
        ]
      },
      {
        form: "Pulse",
        missingFields: [
          "Detailed contact information",
          "Educational background",
          "Biographical information",
          "Provider identification numbers",
          "Media content",
          "Languages spoken"
        ]
      }
    ],
    recommendations: [
      "Standardize field naming conventions across all forms",
      "Align age brackets and specialty lists for consistent referrals",
      "Merge unique strengths from each form into a consolidated system",
      "Add missing critical fields to appropriate forms",
      "Create a tiered data model with core fields required for all purposes",
      "Implement conditional fields based on provider type/role"
    ]
  };

  // Get counts for different form combinations
  const getCounts = (): FieldCounts => {
    let allForms = 0;
    let onlyWebsite = 0;
    let onlySalesforce = 0;
    let onlyPulse = 0;
    let websiteSalesforce = 0;
    let websitePulse = 0;
    let salesforcePulse = 0;
    
    // Loop through all categories and fields to count occurrences
    data.fieldCategories.forEach(category => {
      category.fields.forEach(field => {
        if (field.inWebsite && field.inSalesforce && field.inPulse) {
          allForms++;
        } else if (field.inWebsite && !field.inSalesforce && !field.inPulse) {
          onlyWebsite++;
        } else if (!field.inWebsite && field.inSalesforce && !field.inPulse) {
          onlySalesforce++;
        } else if (!field.inWebsite && !field.inSalesforce && field.inPulse) {
          onlyPulse++;
        } else if (field.inWebsite && field.inSalesforce && !field.inPulse) {
          websiteSalesforce++;
        } else if (field.inWebsite && !field.inSalesforce && field.inPulse) {
          websitePulse++;
        } else if (!field.inWebsite && field.inSalesforce && field.inPulse) {
          salesforcePulse++;
        }
      });
    });
    
    return {
      allForms,
      onlyWebsite,
      onlySalesforce,
      onlyPulse,
      websiteSalesforce,
      websitePulse,
      salesforcePulse,
      total: allForms + onlyWebsite + onlySalesforce + onlyPulse + websiteSalesforce + websitePulse + salesforcePulse
    };
  };
  
  // Field count data for visualization
  const counts = getCounts();
  
  // Helper function to get color based on which forms include a field
  const getFieldColor = (field: Field) => {
    if (field.inWebsite && field.inSalesforce && field.inPulse) {
      return colors.shared;
    } else if (field.inWebsite && !field.inSalesforce && !field.inPulse) {
      return colors.website;
    } else if (!field.inWebsite && field.inSalesforce && !field.inPulse) {
      return colors.salesforce;
    } else if (!field.inWebsite && !field.inSalesforce && field.inPulse) {
      return colors.pulse;
    } else {
      // Mixed presence (in 2 of 3 forms)
      return colors.shared;
    }
  };
  
  // Render category section
  const renderCategory = (category: Category) => {
    return (
      <div 
        key={category.category}
        className="category-section"
        style={{
          margin: '20px 0',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: colors.background,
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        <h3 
          style={{ 
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
        >
          <span>{category.category}</span>
          <span style={{ fontSize: '12px', color: colors.lightText }}>
            {category.fields.length} fields
          </span>
        </h3>
        
        {activeCategory === category.category && (
          <div className="fields-list">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Field Name</th>
                  <th style={{ textAlign: 'center', padding: '8px' }}>Website</th>
                  <th style={{ textAlign: 'center', padding: '8px' }}>Salesforce</th>
                  <th style={{ textAlign: 'center', padding: '8px' }}>Pulse</th>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {category.fields.map((field, idx) => (
                  <tr 
                    key={idx}
                    style={{ 
                      borderBottom: `1px solid ${colors.border}`, 
                      backgroundColor: idx % 2 === 0 ? colors.background : 'white'
                    }}
                  >
                    <td style={{ 
                      padding: '8px', 
                      fontWeight: 500,
                      borderLeft: `4px solid ${getFieldColor(field)}` 
                    }}>
                      {field.fieldName}
                    </td>
                    <td style={{ textAlign: 'center', padding: '8px' }}>
                      {field.inWebsite ? '✓' : ''}
                    </td>
                    <td style={{ textAlign: 'center', padding: '8px' }}>
                      {field.inSalesforce ? '✓' : ''}
                    </td>
                    <td style={{ textAlign: 'center', padding: '8px' }}>
                      {field.inPulse ? '✓' : ''}
                    </td>
                    <td style={{ padding: '8px', fontSize: '14px', color: colors.lightText }}>
                      {field.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  // Overview tab content
  const renderOverview = () => {
    return (
      <div className="overview-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        
        <div className="forms-summary" style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '20px'
        }}>
          {data.forms.map(form => (
            <div key={form.shortName} style={{ 
              width: '30%', 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              borderTop: `4px solid ${form.color}`
            }}>
              <h3>{form.name}</h3>
              <p><strong>Purpose:</strong> {form.purpose}</p>
              <p><strong>Sections:</strong> {form.sections}</p>
              <p><strong>Total Fields:</strong> {form.totalFields}</p>
            </div>
          ))}
        </div>
        
        <div className="data-stats" style={{ marginTop: '30px' }}>
          <h3>Field Distribution</h3>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '15px'
          }}>
            <div style={{ 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              width: 'calc(25% - 10px)'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{counts.allForms}</div>
              <div>Fields in all forms</div>
            </div>
            <div style={{ 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${colors.website}`,
              width: 'calc(25% - 10px)'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{counts.onlyWebsite}</div>
              <div>Only in Website</div>
            </div>
            <div style={{ 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${colors.salesforce}`,
              width: 'calc(25% - 10px)'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{counts.onlySalesforce}</div>
              <div>Only in Salesforce</div>
            </div>
            <div style={{ 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${colors.pulse}`,
              width: 'calc(25% - 10px)'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{counts.onlyPulse}</div>
              <div>Only in Pulse</div>
            </div>
          </div>
        </div>
        
        <div className="field-types" style={{ marginTop: '30px' }}>
          <h3>Field Type Analysis</h3>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '15px'
          }}>
            {Object.entries(data.fieldTypeAnalysis).map(([type, count]) => (
              <div key={type} style={{ 
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                width: 'calc(25% - 10px)'
              }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</div>
                <div>{type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="recommendations" style={{ marginTop: '30px' }}>
          <h3>Recommendations</h3>
          <ul style={{ 
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            listStylePosition: 'inside'
          }}>
            {data.recommendations.map((rec, idx) => (
              <li key={idx} style={{ padding: '5px 0' }}>{rec}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  // Fields tab content
  const renderFields = () => {
    return (
      <div className="fields-content">
        <h2>Field Analysis by Category</h2>
        <p>Click on a category to expand and see field details.</p>
        
        {data.fieldCategories.map(category => renderCategory(category))}
      </div>
    );
  };
  
  // Gaps tab content
  const renderGaps = () => {
    return (
      <div className="gaps-content">
        <h2>Identified Gaps in Forms</h2>
        <p>Analysis of missing information across the three forms.</p>
        
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '20px'
        }}>
          {data.gaps.map(gap => (
            <div 
              key={gap.form}
              style={{ 
                width: 'calc(33.33% - 14px)', 
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                borderTop: `4px solid ${
                  gap.form === 'Website' ? colors.website : 
                  gap.form === 'Salesforce' ? colors.salesforce : colors.pulse
                }`
              }}
            >
              <h3>Missing in {gap.form}</h3>
              <ul style={{ paddingLeft: '20px' }}>
                {gap.missingFields.map((field, idx) => (
                  <li key={idx} style={{ padding: '5px 0' }}>{field}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="provider-form-visualization" style={{ 
      fontFamily: 'Arial, sans-serif',
      color: colors.text,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Navigation tabs */}
      <div className="tabs" style={{ 
        display: 'flex',
        borderBottom: `1px solid ${colors.border}`,
        marginBottom: '20px'
      }}>
        {['overview', 'fields', 'gaps'].map(tab => (
          <div 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            style={{ 
              padding: '10px 20px',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? `3px solid ${colors.website}` : 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
      
      {/* Content based on active tab */}
      <div className="content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'fields' && renderFields()}
        {activeTab === 'gaps' && renderGaps()}
      </div>
    </div>
  );
};

export default ProviderFormVisualization; 