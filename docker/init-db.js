// Indices for "Pro" performance
db.locations.createIndex({ parent: 1 });
db.locations.createIndex({ slug: 1 }, { unique: true });
db.locations.createIndex({ type: 1 });

const locations = [
  // --- COUNTRIES ---
  { _id: "AU", name: "Australia", type: "country", slug: "australia", parent: null },
  { _id: "CA", name: "Canada", type: "country", slug: "canada", parent: null },
  { _id: "NZ", name: "New Zealand", type: "country", slug: "new-zealand", parent: null },
  { _id: "GB", name: "United Kingdom", type: "country", slug: "united-kingdom", parent: null },
  { _id: "US", name: "United States", type: "country", slug: "united-states", parent: null },

  // --- UNITED STATES (50 States + DC) ---
  { name: "Alabama", code: "AL", type: "state", parent: "US", slug: "us-al" },
  { name: "Alaska", code: "AK", type: "state", parent: "US", slug: "us-ak" },
  { name: "Arizona", code: "AZ", type: "state", parent: "US", slug: "us-az" },
  { name: "Arkansas", code: "AR", type: "state", parent: "US", slug: "us-ar" },
  { name: "California", code: "CA", type: "state", parent: "US", slug: "us-ca" },
  { name: "Colorado", code: "CO", type: "state", parent: "US", slug: "us-co" },
  { name: "Connecticut", code: "CT", type: "state", parent: "US", slug: "us-ct" },
  { name: "Delaware", code: "DE", type: "state", parent: "US", slug: "us-de" },
  { name: "District of Columbia", code: "DC", type: "state", parent: "US", slug: "us-dc" },
  { name: "Florida", code: "FL", type: "state", parent: "US", slug: "us-fl" },
  { name: "Georgia", code: "GA", type: "state", parent: "US", slug: "us-ga" },
  { name: "Hawaii", code: "HI", type: "state", parent: "US", slug: "us-hi" },
  { name: "Idaho", code: "ID", type: "state", parent: "US", slug: "us-id" },
  { name: "Illinois", code: "IL", type: "state", parent: "US", slug: "us-il" },
  { name: "Indiana", code: "IN", type: "state", parent: "US", slug: "us-in" },
  { name: "Iowa", code: "IA", type: "state", parent: "US", slug: "us-ia" },
  { name: "Kansas", code: "KS", type: "state", parent: "US", slug: "us-ks" },
  { name: "Kentucky", code: "KY", type: "state", parent: "US", slug: "us-ky" },
  { name: "Louisiana", code: "LA", type: "state", parent: "US", slug: "us-la" },
  { name: "Maine", code: "ME", type: "state", parent: "US", slug: "us-me" },
  { name: "Maryland", code: "MD", type: "state", parent: "US", slug: "us-md" },
  { name: "Massachusetts", code: "MA", type: "state", parent: "US", slug: "us-ma" },
  { name: "Michigan", code: "MI", type: "state", parent: "US", slug: "us-mi" },
  { name: "Minnesota", code: "MN", type: "state", parent: "US", slug: "us-mn" },
  { name: "Mississippi", code: "MS", type: "state", parent: "US", slug: "us-ms" },
  { name: "Missouri", code: "MO", type: "state", parent: "US", slug: "us-mo" },
  { name: "Montana", code: "MT", type: "state", parent: "US", slug: "us-mt" },
  { name: "Nebraska", code: "NE", type: "state", parent: "US", slug: "us-ne" },
  { name: "Nevada", code: "NV", type: "state", parent: "US", slug: "us-nv" },
  { name: "New Hampshire", code: "NH", type: "state", parent: "US", slug: "us-nh" },
  { name: "New Jersey", code: "NJ", type: "state", parent: "US", slug: "us-nj" },
  { name: "New Mexico", code: "NM", type: "state", parent: "US", slug: "us-nm" },
  { name: "New York", code: "NY", type: "state", parent: "US", slug: "us-ny" },
  { name: "North Carolina", code: "NC", type: "state", parent: "US", slug: "us-nc" },
  { name: "North Dakota", code: "ND", type: "state", parent: "US", slug: "us-nd" },
  { name: "Ohio", code: "OH", type: "state", parent: "US", slug: "us-oh" },
  { name: "Oklahoma", code: "OK", type: "state", parent: "US", slug: "us-ok" },
  { name: "Oregon", code: "OR", type: "state", parent: "US", slug: "us-or" },
  { name: "Pennsylvania", code: "PA", type: "state", parent: "US", slug: "us-pa" },
  { name: "Rhode Island", code: "RI", type: "state", parent: "US", slug: "us-ri" },
  { name: "South Carolina", code: "SC", type: "state", parent: "US", slug: "us-sc" },
  { name: "South Dakota", code: "SD", type: "state", parent: "US", slug: "us-sd" },
  { name: "Tennessee", code: "TN", type: "state", parent: "US", slug: "us-tn" },
  { name: "Texas", code: "TX", type: "state", parent: "US", slug: "us-tx" },
  { name: "Utah", code: "UT", type: "state", parent: "US", slug: "us-ut" },
  { name: "Vermont", code: "VT", type: "state", parent: "US", slug: "us-vt" },
  { name: "Virginia", code: "VA", type: "state", parent: "US", slug: "us-va" },
  { name: "Washington", code: "WA", type: "state", parent: "US", slug: "us-wa" },
  { name: "West Virginia", code: "WV", type: "state", parent: "US", slug: "us-wv" },
  { name: "Wisconsin", code: "WI", type: "state", parent: "US", slug: "us-wi" },
  { name: "Wyoming", code: "WY", type: "state", parent: "US", slug: "us-wy" },

  // --- CANADA (Provinces & Territories) ---
  { name: "Alberta", code: "AB", type: "province", parent: "CA", slug: "ca-ab" },
  { name: "British Columbia", code: "BC", type: "province", parent: "CA", slug: "ca-bc" },
  { name: "Manitoba", code: "MB", type: "province", parent: "CA", slug: "ca-mb" },
  { name: "New Brunswick", code: "NB", type: "province", parent: "CA", slug: "ca-nb" },
  { name: "Newfoundland and Labrador", code: "NL", type: "province", parent: "CA", slug: "ca-nl" },
  { name: "Nova Scotia", code: "NS", type: "province", parent: "CA", slug: "ca-ns" },
  { name: "Ontario", code: "ON", type: "province", parent: "CA", slug: "ca-on" },
  { name: "Prince Edward Island", code: "PE", type: "province", parent: "CA", slug: "ca-pe" },
  { name: "Quebec", code: "QC", type: "province", parent: "CA", slug: "ca-qc" },
  { name: "Saskatchewan", code: "SK", type: "province", parent: "CA", slug: "ca-sk" },
  { name: "Northwest Territories", code: "NT", type: "territory", parent: "CA", slug: "ca-nt" },
  { name: "Nunavut", code: "NU", type: "territory", parent: "CA", slug: "ca-nu" },
  { name: "Yukon", code: "YT", type: "territory", parent: "CA", slug: "ca-yt" },

  // --- AUSTRALIA (States & Territories) ---
  { name: "New South Wales", code: "NSW", type: "state", parent: "AU", slug: "au-nsw" },
  { name: "Victoria", code: "VIC", type: "state", parent: "AU", slug: "au-vic" },
  { name: "Queensland", code: "QLD", type: "state", parent: "AU", slug: "au-qld" },
  { name: "Western Australia", code: "WA", type: "state", parent: "AU", slug: "au-wa" },
  { name: "South Australia", code: "SA", type: "state", parent: "AU", slug: "au-sa" },
  { name: "Tasmania", code: "TAS", type: "state", parent: "AU", slug: "au-tas" },
  { name: "Northern Territory", code: "NT", type: "territory", parent: "AU", slug: "au-nt" },
  { name: "Australian Capital Territory", code: "ACT", type: "territory", parent: "AU", slug: "au-act" },

  // --- UNITED KINGDOM (Countries) ---
  { name: "England", code: "ENG", type: "country_part", parent: "GB", slug: "gb-eng" },
  { name: "Scotland", code: "SCT", type: "country_part", parent: "GB", slug: "gb-sct" },
  { name: "Wales", code: "WLS", type: "country_part", parent: "GB", slug: "gb-wls" },
  { name: "Northern Ireland", code: "NIR", type: "country_part", parent: "GB", slug: "gb-nir" },

  // --- NEW ZEALAND (Main Regions) ---
  { name: "Auckland", code: "AUK", type: "region", parent: "NZ", slug: "nz-auk" },
  { name: "Wellington", code: "WGN", type: "region", parent: "NZ", slug: "nz-wgn" },
  { name: "Canterbury", code: "CAN", type: "region", parent: "NZ", slug: "nz-can" },
  { name: "Otago", code: "OTA", type: "region", parent: "NZ", slug: "nz-ota" },
  { name: "Waikato", code: "WKO", type: "region", parent: "NZ", slug: "nz-wko" }
];

db.locations.insertMany(locations);