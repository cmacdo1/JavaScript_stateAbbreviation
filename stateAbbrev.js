function abbreviateState(address) {
    const stateAbbreviations = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY',
        'District of Columbia': 'DC',
      };      
  
    // Iterate over state abbreviations
    for (const stateName in stateAbbreviations) {
      if (stateAbbreviations.hasOwnProperty(stateName)) {
        const abbreviation = stateAbbreviations[stateName];
        
        // Check if the state name is present in the address
        if (address.includes(stateName)) {
          // Replace state name with abbreviation
          return address.replace(stateName, abbreviation);
        }
      }
    }
  
    // If no state name is found or it doesn't have an abbreviation, return the original address
    return address;
  }
  
  // Example usage
  const inputAddress = "1234 South Price Road. Tempe, District of Columbia 85281";
  const outputAddress = abbreviateState(inputAddress);
  console.log(outputAddress);
  