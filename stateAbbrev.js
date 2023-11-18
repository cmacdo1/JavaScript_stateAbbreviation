function abbreviateState(address) {
    var stateAbbreviations = {
        'alabama': 'AL',
        'alaska': 'AK',
        'arizona': 'AZ',
        'arkansas': 'AR',
        'california': 'CA',
        'colorado': 'CO',
        'connecticut': 'CT',
        'delaware': 'DE',
        'florida': 'FL',
        'georgia': 'GA',
        'hawaii': 'HI',
        'idaho': 'ID',
        'illinois': 'IL',
        'indiana': 'IN',
        'iowa': 'IA',
        'kansas': 'KS',
        'kentucky': 'KY',
        'louisiana': 'LA',
        'maine': 'ME',
        'maryland': 'MD',
        'massachusetts': 'MA',
        'michigan': 'MI',
        'minnesota': 'MN',
        'mississippi': 'MS',
        'missouri': 'MO',
        'montana': 'MT',
        'nebraska': 'NE',
        'nevada': 'NV',
        'new hampshire': 'NH',
        'new jersey': 'NJ',
        'new mexico': 'NM',
        'new york': 'NY',
        'north carolina': 'NC',
        'north dakota': 'ND',
        'ohio': 'OH',
        'oklahoma': 'OK',
        'oregon': 'OR',
        'pennsylvania': 'PA',
        'rhode island': 'RI',
        'south carolina': 'SC',
        'south dakota': 'SD',
        'tennessee': 'TN',
        'texas': 'TX',
        'utah': 'UT',
        'vermont': 'VT',
        'virginia': 'VA',
        'washington': 'WA',
        'west virginia': 'WV',
        'wisconsin': 'WI',
        'wyoming': 'WY',
        'district of columbia': 'DC',
    };
    
    var lowercaseAddress = address.toLowerCase();
  
    for (var stateName in stateAbbreviations) {
      if (stateAbbreviations.hasOwnProperty(stateName)) {
        var abbreviation = stateAbbreviations[stateName];
        
        if (lowercaseAddress.includes(stateName)) {
          return address.replace(new RegExp(stateName, 'i'), abbreviation);
        }
      }
    }
    return address;
  }
  
  // Example usage
  const inputAddress = "20 West 34th Street, albany, new york 10001";
  const outputAddress = abbreviateState(inputAddress);
  console.log(outputAddress);
  