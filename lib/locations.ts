export type OntarioCity = {
  slug: string;
  name: string;
  province: 'Ontario';
  provinceCode: 'ON';

  region: string;

  image: string;

  nearbyCities: string[];

  neighbourhoods?: string[];

  industries?: string[];

  description?: string;
};

const defaultIndustries = [
  'Contractors & Construction',
  'Professional Services',
  'Real Estate',
  'Healthcare',
  'Restaurants & Hospitality',
  'Retail',
  'Home Services',
  'Automotive',
  'Small Businesses',
];

export const ontarioCities: OntarioCity[] = [
  // ============================================================
  // HAMILTON / HALTON / NIAGARA
  // ============================================================

  {
    slug: 'hamilton',
    name: 'Hamilton',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Hamilton and Golden Horseshoe',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/View_to_Hamilton_from_the_Mountain_%286577549603%29.jpg',
    nearbyCities: [
      'Burlington',
      'Brantford',
      'Grimsby',
      'Oakville',
      'St. Catharines',
    ],
    neighbourhoods: [
      'Downtown Hamilton',
      'Stoney Creek',
      'Ancaster',
      'Dundas',
      'Waterdown',
      'Flamborough',
      'Westdale',
      'Binbrook',
      'Mount Hope',
    ],
    industries: defaultIndustries,
    description:
      'Hamilton is one of Ontario’s largest business centres, with a diverse economy spanning construction, healthcare, manufacturing, hospitality, retail, professional services and growing technology companies.',
  },

  {
    slug: 'burlington',
    name: 'Burlington',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Halton Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/02Street_clocks_in_Burlington%2C_Ontario%2C_Canada.JPG',
    nearbyCities: ['Hamilton', 'Oakville', 'Milton', 'Mississauga'],
    neighbourhoods: [
      'Downtown Burlington',
      'Aldershot',
      'Alton Village',
      'The Orchard',
      'Brant Hills',
      'Tyandaga',
    ],
    industries: defaultIndustries,
    description:
      'Burlington has a strong business community positioned between Hamilton and the Greater Toronto Area, serving companies in professional services, retail, construction, healthcare and technology.',
  },

  {
    slug: 'oakville',
    name: 'Oakville',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Halton Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Aerial_view_of_Oakville_2023.jpg',
    nearbyCities: ['Burlington', 'Mississauga', 'Milton', 'Toronto'],
    neighbourhoods: [
      'Downtown Oakville',
      'Bronte',
      'Glen Abbey',
      'River Oaks',
      'Clearview',
      'Joshua Creek',
    ],
    industries: defaultIndustries,
    description:
      'Oakville is a growing Halton Region business market with strong professional services, real estate, retail, healthcare and entrepreneurial communities.',
  },

  {
    slug: 'milton',
    name: 'Milton',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Halton Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Downtown_Milton2.jpg',
    nearbyCities: ['Oakville', 'Burlington', 'Mississauga', 'Guelph'],
    neighbourhoods: [
      'Old Milton',
      'Dempsey',
      'Beaty',
      'Clarke',
      'Scott',
      'Ford',
    ],
    industries: defaultIndustries,
    description:
      'Milton is one of the fastest-growing communities in the Greater Toronto and Hamilton Area, creating opportunities for local businesses, contractors, retailers and professional service providers.',
  },

  {
    slug: 'grimsby',
    name: 'Grimsby',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Welcome_To_Grimsby_Sign.JPG',
    nearbyCities: [
      'Hamilton',
      'St. Catharines',
      'Lincoln',
      'Burlington',
      'Beamsville',
    ],
    industries: defaultIndustries,
    description:
      'Grimsby is a growing Niagara community connecting Hamilton with the Niagara Region and supporting a broad range of local businesses and service companies.',
  },

  {
    slug: 'lincoln',
    name: 'Lincoln',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/King_Street%2C_Beamsville%2C_Ontario.jpg',
    nearbyCities: [
      'Grimsby',
      'St. Catharines',
      'West Lincoln',
      'Niagara-on-the-Lake',
    ],
    neighbourhoods: ['Beamsville', 'Vineland', 'Jordan'],
    industries: defaultIndustries,
    description:
      'Lincoln is a growing Niagara municipality that includes Beamsville, Vineland and Jordan, with businesses spanning tourism, agriculture, hospitality, retail and professional services.',
  },

  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/St._Catharines_Downtown_Centre-ville_de_St._Catharines_%2823904737637%29.jpg',
    nearbyCities: [
      'Niagara Falls',
      'Thorold',
      'Welland',
      'Lincoln',
      'Niagara-on-the-Lake',
    ],
    industries: defaultIndustries,
    description:
      'St. Catharines is Niagara Region’s largest urban centre and supports businesses across professional services, tourism, retail, construction, healthcare and hospitality.',
  },

  {
    slug: 'niagara-falls',
    name: 'Niagara Falls',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Niagara_Falls_Ontario_Canada_aerial_view.jpg',
    nearbyCities: [
      'St. Catharines',
      'Welland',
      'Thorold',
      'Fort Erie',
      'Niagara-on-the-Lake',
    ],
    industries: defaultIndustries,
    description:
      'Niagara Falls is an internationally recognized tourism destination with a large hospitality sector alongside growing retail, service, construction and professional businesses.',
  },

  {
    slug: 'niagara-on-the-lake',
    name: 'Niagara-on-the-Lake',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Niagara_on_the_lake.jpg',
    nearbyCities: [
      'St. Catharines',
      'Niagara Falls',
      'Lincoln',
      'Grimsby',
    ],
    industries: [
      'Hospitality',
      'Tourism',
      'Restaurants',
      'Wineries',
      'Retail',
      'Real Estate',
      'Professional Services',
      'Small Businesses',
    ],
    description:
      'Niagara-on-the-Lake has a strong tourism, hospitality, winery, restaurant and retail economy supported by local professional service businesses.',
  },

  {
    slug: 'welland',
    name: 'Welland',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Welland_Civic_Centre.jpg',
    nearbyCities: [
      'St. Catharines',
      'Niagara Falls',
      'Port Colborne',
      'Thorold',
    ],
    industries: defaultIndustries,
    description:
      'Welland is an important Niagara business centre serving local residents, industrial businesses, contractors, retailers and professional service companies.',
  },

  {
    slug: 'thorold',
    name: 'Thorold',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Downtown_Thorold%2C_Ontario.jpg',
    nearbyCities: [
      'St. Catharines',
      'Welland',
      'Niagara Falls',
      'Port Colborne',
    ],
    industries: defaultIndustries,
    description:
      'Thorold is centrally located within Niagara Region and supports a growing mix of residential development, contractors, local services and small businesses.',
  },

  {
    slug: 'fort-erie',
    name: 'Fort Erie',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Fort_Erie%2C_Ontario_%282013%29.jpg',
    nearbyCities: [
      'Niagara Falls',
      'Port Colborne',
      'Welland',
      'St. Catharines',
    ],
    industries: defaultIndustries,
    description:
      'Fort Erie is a border community within Niagara Region with businesses serving residents, tourism, transportation, retail and professional service markets.',
  },

  {
    slug: 'port-colborne',
    name: 'Port Colborne',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Niagara Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/PortColborneBank.jpg',
    nearbyCities: ['Welland', 'Fort Erie', 'Thorold', 'Niagara Falls'],
    industries: defaultIndustries,
    description:
      'Port Colborne is a Niagara waterfront community supporting local businesses in construction, tourism, retail, transportation and professional services.',
  },

  // ============================================================
  // TORONTO
  // ============================================================

  {
    slug: 'toronto',
    name: 'Toronto',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Greater Toronto Area',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Toronto_Skyline_from_Olympic_Island%2C_June_20_2026_%285-3_cropped%29.jpg',
    nearbyCities: [
      'Mississauga',
      'Vaughan',
      'Markham',
      'Richmond Hill',
      'Pickering',
    ],
    neighbourhoods: [
      'Downtown Toronto',
      'North York',
      'Scarborough',
      'Etobicoke',
      'York',
      'East York',
      'Liberty Village',
      'The Beaches',
    ],
    industries: defaultIndustries,
    description:
      'Toronto is Canada’s largest business market and home to companies across technology, finance, professional services, retail, construction, healthcare, hospitality and ecommerce.',
  },

  // ============================================================
  // PEEL
  // ============================================================

  {
    slug: 'mississauga',
    name: 'Mississauga',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Peel Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Mississauga_Civic_Centre%2C_May_16_2026_%2802%29.jpg',
    nearbyCities: ['Toronto', 'Brampton', 'Oakville', 'Milton'],
    neighbourhoods: [
      'City Centre',
      'Port Credit',
      'Streetsville',
      'Meadowvale',
      'Cooksville',
      'Clarkson',
      'Erin Mills',
    ],
    industries: defaultIndustries,
    description:
      'Mississauga is one of Ontario’s largest business centres and home to companies across logistics, professional services, retail, technology, construction and ecommerce.',
  },

  {
    slug: 'brampton',
    name: 'Brampton',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Peel Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Peel_Art_Gallery%2C_Museum_and_Archives_Building_%28PAMA%29.jpg',
    nearbyCities: [
      'Mississauga',
      'Vaughan',
      'Caledon',
      'Toronto',
      'Georgetown',
    ],
    industries: defaultIndustries,
    description:
      'Brampton is a large and rapidly growing business market with strong transportation, logistics, construction, retail and professional service industries.',
  },

  {
    slug: 'caledon',
    name: 'Caledon',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Peel Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Cheltenham_Badlands%2C_Caledon_Hills%2C_Ontario%2C_Canada._%287097453311%29.jpg',
    nearbyCities: [
      'Brampton',
      'Orangeville',
      'Vaughan',
      'Georgetown',
      'Bolton',
    ],
    neighbourhoods: ['Bolton', 'Caledon East', 'Caledon Village'],
    industries: defaultIndustries,
    description:
      'Caledon serves a growing residential and commercial market north of Brampton with businesses spanning construction, agriculture, home services, retail and professional services.',
  },

  // ============================================================
  // YORK REGION
  // ============================================================

  {
    slug: 'vaughan',
    name: 'Vaughan',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Vaughan_Metropolitan_Centre_Skyline%2C_August_7_2025.jpg',
    nearbyCities: [
      'Toronto',
      'Richmond Hill',
      'Markham',
      'Brampton',
      'King',
    ],
    neighbourhoods: [
      'Woodbridge',
      'Maple',
      'Concord',
      'Kleinburg',
      'Thornhill',
    ],
    industries: defaultIndustries,
    description:
      'Vaughan is one of the GTA’s largest commercial and industrial markets with companies across construction, manufacturing, retail, logistics and professional services.',
  },

  {
    slug: 'markham',
    name: 'Markham',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Markham_Village_Heritage_Conservation_District-_Markham-Ontario-HPC15250-20201017_%282%29.jpg',
    nearbyCities: [
      'Toronto',
      'Richmond Hill',
      'Vaughan',
      'Pickering',
      'Whitchurch-Stouffville',
    ],
    industries: defaultIndustries,
    description:
      'Markham is a major technology and business centre in York Region with a large concentration of professional services, technology companies and growing businesses.',
  },

  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/DowntownRichmondHill3.jpg',
    nearbyCities: [
      'Markham',
      'Vaughan',
      'Aurora',
      'Newmarket',
      'Toronto',
    ],
    industries: defaultIndustries,
    description:
      'Richmond Hill has a diverse business community spanning professional services, healthcare, real estate, retail, technology and home services.',
  },

  {
    slug: 'newmarket',
    name: 'Newmarket',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Old_Town_Hall-460_Botsford_Street-Newmarket-Ontario-HPC6381-20200905.jpg',
    nearbyCities: [
      'Aurora',
      'East Gwillimbury',
      'Richmond Hill',
      'Bradford',
    ],
    industries: defaultIndustries,
    description:
      'Newmarket is a major commercial centre in northern York Region supporting retailers, healthcare providers, professional services and growing local businesses.',
  },

  {
    slug: 'aurora',
    name: 'Aurora',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Aurora_Ontario_-_Canada_-_Downtown_-_Younge_Street_%2851264219344%29.jpg',
    nearbyCities: [
      'Newmarket',
      'Richmond Hill',
      'King',
      'Whitchurch-Stouffville',
    ],
    industries: defaultIndustries,
    description:
      'Aurora supports an established York Region business community with strong professional service, construction, retail and home service sectors.',
  },

  {
    slug: 'whitchurch-stouffville',
    name: 'Whitchurch-Stouffville',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'York Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/MainSteetWhitchurch-Stouffville2.jpg',
    nearbyCities: ['Markham', 'Aurora', 'Newmarket', 'Uxbridge'],
    industries: defaultIndustries,
    description:
      'Whitchurch-Stouffville is a growing York Region community supporting contractors, professional services, retailers and locally owned businesses.',
  },

  // ============================================================
  // DURHAM REGION
  // ============================================================

  {
    slug: 'pickering',
    name: 'Pickering',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Durham Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Nautical_Village_Blossoms.jpg',
    nearbyCities: ['Toronto', 'Ajax', 'Whitby', 'Markham'],
    industries: defaultIndustries,
    description:
      'Pickering is a growing Durham Region business market directly east of Toronto with companies spanning construction, retail, energy and professional services.',
  },

  {
    slug: 'ajax',
    name: 'Ajax',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Durham Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Aerial_Photograph_of_Ajax%2C_Ontario_-_Discover_The_Town_Of_Ajax_%2801m08s%29_%28edited%29.jpg',
    nearbyCities: ['Pickering', 'Whitby', 'Oshawa', 'Toronto'],
    industries: defaultIndustries,
    description:
      'Ajax is a rapidly growing Durham Region community with a diverse base of contractors, retailers, home service companies and professional businesses.',
  },

  {
    slug: 'whitby',
    name: 'Whitby',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Durham Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Downtown_Whitby%2C_Ontario%2C_March_9_2026_%2803%29.jpg',
    nearbyCities: ['Ajax', 'Oshawa', 'Pickering', 'Clarington'],
    industries: defaultIndustries,
    description:
      'Whitby is an important commercial centre within Durham Region supporting professional services, construction, healthcare, retail and local businesses.',
  },

  {
    slug: 'oshawa',
    name: 'Oshawa',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Durham Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Oshawa_ON.JPG',
    nearbyCities: ['Whitby', 'Clarington', 'Ajax', 'Bowmanville'],
    industries: defaultIndustries,
    description:
      'Oshawa is one of eastern GTA’s largest business centres with strong automotive, manufacturing, education, healthcare, construction and service sectors.',
  },

  {
    slug: 'clarington',
    name: 'Clarington',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Durham Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Downtown_Bowmanville%2C_June_22_2025_%2808%29.jpg',
    nearbyCities: ['Oshawa', 'Whitby', 'Port Hope', 'Peterborough'],
    neighbourhoods: ['Bowmanville', 'Courtice', 'Newcastle', 'Orono'],
    industries: defaultIndustries,
    description:
      'Clarington is a growing Durham Region municipality that includes Bowmanville, Courtice, Newcastle and surrounding communities.',
  },

  // ============================================================
  // WATERLOO / WELLINGTON
  // ============================================================

  {
    slug: 'kitchener',
    name: 'Kitchener',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Waterloo Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Kitchener_Skyline_December_2021.jpg',
    nearbyCities: [
      'Waterloo',
      'Cambridge',
      'Guelph',
      'Brantford',
      'Stratford',
    ],
    industries: defaultIndustries,
    description:
      'Kitchener is a major technology and business centre in Southwestern Ontario with companies across technology, manufacturing, professional services and construction.',
  },

  {
    slug: 'waterloo',
    name: 'Waterloo',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Waterloo Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Uptown_Waterloo_Ontario.JPG',
    nearbyCities: ['Kitchener', 'Cambridge', 'Guelph', 'Stratford'],
    industries: defaultIndustries,
    description:
      'Waterloo has a nationally recognized technology and innovation economy alongside established professional services, retail and growing local businesses.',
  },

  {
    slug: 'cambridge',
    name: 'Cambridge',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Waterloo Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Europe-like_Grand_River_scene%2C_Cambridge%2C_Ontario_Cambridge-on-canada-peter-j-restivo-5292017_037.jpg',
    nearbyCities: ['Kitchener', 'Waterloo', 'Guelph', 'Brantford'],
    neighbourhoods: ['Galt', 'Preston', 'Hespeler'],
    industries: defaultIndustries,
    description:
      'Cambridge combines a strong industrial and manufacturing economy with growing construction, retail and professional service sectors.',
  },

  {
    slug: 'guelph',
    name: 'Guelph',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Wellington County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Guelph_Downtown_Aerial.jpg',
    nearbyCities: [
      'Kitchener',
      'Cambridge',
      'Milton',
      'Fergus',
      'Georgetown',
    ],
    industries: defaultIndustries,
    description:
      'Guelph is a major Southwestern Ontario business centre with companies across manufacturing, agriculture, technology, professional services and retail.',
  },

  // ============================================================
  // BRANT / OXFORD / PERTH
  // ============================================================

  {
    slug: 'brantford',
    name: 'Brantford',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Brant County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Brantford_Montage.jpg',
    nearbyCities: [
      'Hamilton',
      'Cambridge',
      'Woodstock',
      'Paris',
      'Kitchener',
    ],
    industries: defaultIndustries,
    description:
      'Brantford is an expanding Southwestern Ontario business centre with a strong manufacturing base and growing construction, logistics and professional service sectors.',
  },

  {
    slug: 'woodstock',
    name: 'Woodstock',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Oxford County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/City_Hall_Woodstock_Ontario_1.jpg',
    nearbyCities: [
      'London',
      'Brantford',
      'Kitchener',
      'Ingersoll',
      'Tillsonburg',
    ],
    industries: defaultIndustries,
    description:
      'Woodstock is a strategically located Southwestern Ontario business market with manufacturing, logistics, agriculture, retail and professional services.',
  },

  {
    slug: 'stratford',
    name: 'Stratford',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Perth County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Downie_Street_at_Ontario_Street%2C_Stratford%2C_Ontario%2C_2025-08-04.jpg',
    nearbyCities: [
      'Kitchener',
      'Waterloo',
      'Woodstock',
      'London',
      'St. Marys',
    ],
    industries: defaultIndustries,
    description:
      'Stratford combines a well-known tourism and arts economy with manufacturing, hospitality, retail and professional services.',
  },

  // ============================================================
  // LONDON / SOUTHWESTERN ONTARIO
  // ============================================================

  {
    slug: 'london',
    name: 'London',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Middlesex County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/London_Ontario_Skyline_2017_%28cropped%29.jpg',
    nearbyCities: [
      'St. Thomas',
      'Woodstock',
      'Strathroy',
      'Sarnia',
      'Ingersoll',
    ],
    industries: defaultIndustries,
    description:
      'London is one of Southwestern Ontario’s largest business centres with major healthcare, education, technology, construction, finance and professional service industries.',
  },

  {
    slug: 'st-thomas',
    name: 'St. Thomas',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Elgin County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/St_Thomas_City_Hall_National_Historic_Site_of_Canada.jpg',
    nearbyCities: ['London', 'Aylmer', 'Tillsonburg', 'Woodstock'],
    industries: defaultIndustries,
    description:
      'St. Thomas is a growing Southwestern Ontario community with expanding manufacturing, construction, retail and professional service industries.',
  },

  {
    slug: 'sarnia',
    name: 'Sarnia',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Lambton County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Sarnia_skyline.JPG',
    nearbyCities: ['London', 'Strathroy', 'Chatham', 'Grand Bend'],
    industries: defaultIndustries,
    description:
      'Sarnia is an important Southwestern Ontario industrial and border economy supporting energy, construction, manufacturing and professional service businesses.',
  },

  {
    slug: 'chatham',
    name: 'Chatham',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Chatham-Kent',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Chatham_ON_1.JPG',
    nearbyCities: ['Windsor', 'Sarnia', 'London', 'Leamington'],
    industries: defaultIndustries,
    description:
      'Chatham is the principal business centre of Chatham-Kent with strong agriculture, manufacturing, construction and professional service sectors.',
  },

  {
    slug: 'windsor',
    name: 'Windsor',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Essex County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Windsor%2C_Ontario_%28aerial_view%29.jpg',
    nearbyCities: [
      'LaSalle',
      'Tecumseh',
      'Amherstburg',
      'Leamington',
      'Kingsville',
    ],
    industries: defaultIndustries,
    description:
      'Windsor is a major Canadian border and manufacturing centre with strong automotive, logistics, construction, hospitality and professional service industries.',
  },

  {
    slug: 'lasalle',
    name: 'LaSalle',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Essex County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Town_of_LaSalle%2C_July_2022.jpg',
    nearbyCities: ['Windsor', 'Amherstburg', 'Tecumseh', 'Essex'],
    industries: defaultIndustries,
    description:
      'LaSalle is a growing Essex County community adjacent to Windsor with an expanding base of contractors, retailers and service businesses.',
  },

  {
    slug: 'tecumseh',
    name: 'Tecumseh',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Essex County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Tecumseh_ON.JPG',
    nearbyCities: ['Windsor', 'Lakeshore', 'Essex', 'LaSalle'],
    industries: defaultIndustries,
    description:
      'Tecumseh is an established Windsor-area community supporting construction, manufacturing, retail and professional service businesses.',
  },

  {
    slug: 'leamington',
    name: 'Leamington',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Essex County',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Giant_Tomato%2C_Leamington%2C_Ontario%2C_2025-06-10_02.jpg',
    nearbyCities: ['Kingsville', 'Essex', 'Windsor', 'Chatham'],
    industries: defaultIndustries,
    description:
      'Leamington has a significant agriculture and greenhouse economy alongside tourism, retail, trades and professional services.',
  },

  // ============================================================
  // SIMCOE / CENTRAL ONTARIO
  // ============================================================

  {
    slug: 'barrie',
    name: 'Barrie',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Barrie_skyline_2025.jpg',
    nearbyCities: [
      'Innisfil',
      'Orillia',
      'Bradford',
      'Collingwood',
      'Newmarket',
    ],
    industries: defaultIndustries,
    description:
      'Barrie is Central Ontario’s largest urban business centre and supports construction, professional services, tourism, retail, healthcare and technology companies.',
  },

  {
    slug: 'innisfil',
    name: 'Innisfil',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Innisfil_ON.JPG',
    nearbyCities: ['Barrie', 'Bradford', 'Newmarket', 'Orillia'],
    industries: defaultIndustries,
    description:
      'Innisfil is a rapidly growing community south of Barrie with increasing demand for contractors, home services, retail and professional businesses.',
  },

  {
    slug: 'bradford-west-gwillimbury',
    name: 'Bradford West Gwillimbury',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Bradford_West_Gwillimbury_ON.JPG',
    nearbyCities: ['Newmarket', 'Innisfil', 'Barrie', 'East Gwillimbury'],
    industries: defaultIndustries,
    description:
      'Bradford West Gwillimbury is a growing Central Ontario municipality with strong residential growth and an expanding local business community.',
  },

  {
    slug: 'orillia',
    name: 'Orillia',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Orillia_ON.JPG',
    nearbyCities: ['Barrie', 'Gravenhurst', 'Bracebridge', 'Midland'],
    industries: defaultIndustries,
    description:
      'Orillia is an important Central Ontario commercial and tourism centre supporting hospitality, construction, retail and professional service businesses.',
  },

  {
    slug: 'collingwood',
    name: 'Collingwood',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe and Georgian Bay',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hurontario_St_at_Ontario_St_in_Downtown_Collingwood_2025.jpg',
    nearbyCities: [
      'Wasaga Beach',
      'Barrie',
      'The Blue Mountains',
      'Owen Sound',
    ],
    industries: defaultIndustries,
    description:
      'Collingwood has a strong tourism, real estate, construction, hospitality and professional services economy serving the Georgian Bay region.',
  },

  {
    slug: 'wasaga-beach',
    name: 'Wasaga Beach',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Wasaga_Beach_One_2024.jpg',
    nearbyCities: ['Collingwood', 'Barrie', 'Stayner', 'Midland'],
    industries: defaultIndustries,
    description:
      'Wasaga Beach is a major Ontario tourism community with growing hospitality, construction, retail, real estate and home service markets.',
  },

  {
    slug: 'midland',
    name: 'Midland',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Simcoe County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Midland%2C_Ontario.jpg',
    nearbyCities: ['Penetanguishene', 'Barrie', 'Orillia', 'Wasaga Beach'],
    industries: defaultIndustries,
    description:
      'Midland is a Georgian Bay commercial and tourism centre supporting hospitality, marine, retail, construction and professional services.',
  },

  // ============================================================
  // MUSKOKA
  // ============================================================

  {
    slug: 'bracebridge',
    name: 'Bracebridge',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Muskoka District',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bracebridge_Falls.jpg',
    nearbyCities: ['Gravenhurst', 'Huntsville', 'Orillia', 'Parry Sound'],
    industries: defaultIndustries,
    description:
      'Bracebridge is a major Muskoka business and tourism centre serving hospitality, construction, cottage services, retail and professional businesses.',
  },

  {
    slug: 'gravenhurst',
    name: 'Gravenhurst',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Muskoka District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Gravenhurst_ON.JPG',
    nearbyCities: ['Bracebridge', 'Orillia', 'Huntsville', 'Barrie'],
    industries: defaultIndustries,
    description:
      'Gravenhurst supports Muskoka’s tourism, cottage, construction, hospitality and locally owned business economy.',
  },

  {
    slug: 'huntsville',
    name: 'Huntsville',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Muskoka District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Huntsville_ON.JPG',
    nearbyCities: [
      'Bracebridge',
      'Gravenhurst',
      'Parry Sound',
      'North Bay',
    ],
    industries: defaultIndustries,
    description:
      'Huntsville is a major Muskoka tourism and commercial centre with strong hospitality, construction, cottage service and retail industries.',
  },

  // ============================================================
  // GREY / BRUCE
  // ============================================================

  {
    slug: 'owen-sound',
    name: 'Owen Sound',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Grey County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/20150705_-_04_-_Owen_Sound%2C_Ont._-_Red_Brick_Downtown_Scenery_-_2nd_Avenue_East_at_10th_Street.jpg',
    nearbyCities: [
      'Collingwood',
      'Meaford',
      'Hanover',
      'South Bruce Peninsula',
    ],
    industries: defaultIndustries,
    description:
      'Owen Sound serves as a regional business centre for Grey and Bruce counties with strong healthcare, construction, retail and professional service sectors.',
  },

  // ============================================================
  // PETERBOROUGH / KAWARTHAS
  // ============================================================

  {
    slug: 'peterborough',
    name: 'Peterborough',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Peterborough County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Peterborough_Aerial_view_2025.jpg',
    nearbyCities: [
      'Kawartha Lakes',
      'Port Hope',
      'Cobourg',
      'Clarington',
    ],
    industries: defaultIndustries,
    description:
      'Peterborough is a major regional business, education and healthcare centre serving Central and Eastern Ontario.',
  },

  {
    slug: 'kawartha-lakes',
    name: 'Kawartha Lakes',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Kawartha Lakes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Kawartha_Lakes_city_hall.JPG',
    nearbyCities: [
      'Peterborough',
      'Orillia',
      'Port Perry',
      'Uxbridge',
    ],
    neighbourhoods: ['Lindsay', 'Fenelon Falls', 'Bobcaygeon'],
    industries: defaultIndustries,
    description:
      'Kawartha Lakes includes Lindsay, Fenelon Falls, Bobcaygeon and surrounding communities with strong tourism, construction, agriculture and service sectors.',
  },

  // ============================================================
  // NORTHUMBERLAND / QUINTE
  // ============================================================

  {
    slug: 'cobourg',
    name: 'Cobourg',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Northumberland County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Victoria_hall_2023.jpg',
    nearbyCities: [
      'Port Hope',
      'Peterborough',
      'Belleville',
      'Clarington',
    ],
    industries: defaultIndustries,
    description:
      'Cobourg is a growing Northumberland County business centre supporting manufacturing, tourism, construction and professional services.',
  },

  {
    slug: 'port-hope',
    name: 'Port Hope',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Northumberland County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Downtown_Port_Hope%2C_May_27_2026_%2801%29.jpg',
    nearbyCities: ['Cobourg', 'Clarington', 'Peterborough', 'Oshawa'],
    industries: defaultIndustries,
    description:
      'Port Hope is an established Northumberland County community with businesses spanning tourism, construction, manufacturing and professional services.',
  },

  {
    slug: 'belleville',
    name: 'Belleville',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Hastings County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Belleville_skyline.JPG',
    nearbyCities: [
      'Quinte West',
      'Prince Edward County',
      'Kingston',
      'Cobourg',
    ],
    industries: defaultIndustries,
    description:
      'Belleville is a major Eastern Ontario commercial centre serving the Bay of Quinte area with manufacturing, logistics, retail and professional services.',
  },

  {
    slug: 'quinte-west',
    name: 'Quinte West',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Hastings County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Quinte_West_view_from_the_Marina.jpg',
    nearbyCities: [
      'Belleville',
      'Prince Edward County',
      'Brighton',
      'Cobourg',
    ],
    neighbourhoods: ['Trenton', 'Frankford'],
    industries: defaultIndustries,
    description:
      'Quinte West includes Trenton and surrounding communities and supports military, manufacturing, tourism, construction and professional service sectors.',
  },

  {
    slug: 'prince-edward-county',
    name: 'Prince Edward County',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Prince Edward County',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Picton%2C_Ontario_-_9_Main_Street.jpg',
    nearbyCities: ['Belleville', 'Quinte West', 'Kingston', 'Brighton'],
    neighbourhoods: ['Picton', 'Wellington', 'Bloomfield'],
    industries: [
      'Tourism',
      'Hospitality',
      'Restaurants',
      'Wineries',
      'Retail',
      'Real Estate',
      'Construction',
      'Professional Services',
    ],
    description:
      'Prince Edward County has a strong tourism, hospitality, winery, restaurant, real estate and locally owned small business economy.',
  },

  // ============================================================
  // KINGSTON / EASTERN ONTARIO
  // ============================================================

  {
    slug: 'kingston',
    name: 'Kingston',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Frontenac County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Kingston%2C_Ontario.jpg',
    nearbyCities: [
      'Belleville',
      'Gananoque',
      'Brockville',
      'Prince Edward County',
    ],
    industries: defaultIndustries,
    description:
      'Kingston is a major Eastern Ontario business, education, healthcare, military and tourism centre with a diverse local economy.',
  },

  {
    slug: 'brockville',
    name: 'Brockville',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Leeds and Grenville',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Brockville%2C_Ontario%2C_Canada_-_panoramio.jpg',
    nearbyCities: ['Kingston', 'Gananoque', 'Smiths Falls', 'Cornwall'],
    industries: defaultIndustries,
    description:
      'Brockville is an Eastern Ontario commercial and industrial centre supporting manufacturing, tourism, healthcare and professional services.',
  },

  {
    slug: 'cornwall',
    name: 'Cornwall',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Stormont, Dundas and Glengarry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Cornwall_ON_1.JPG',
    nearbyCities: ['Ottawa', 'Brockville', 'Hawkesbury'],
    industries: defaultIndustries,
    description:
      'Cornwall is an important Eastern Ontario logistics and manufacturing centre positioned along the Highway 401 corridor.',
  },

  // ============================================================
  // OTTAWA REGION
  // ============================================================

  {
    slug: 'ottawa',
    name: 'Ottawa',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Ottawa Region',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Parliament-Ottawa.jpg',
    nearbyCities: [
      'Clarence-Rockland',
      'Carleton Place',
      'Arnprior',
      'Renfrew',
    ],
    neighbourhoods: [
      'Downtown Ottawa',
      'Kanata',
      'Nepean',
      'Orléans',
      'Barrhaven',
      'Gloucester',
      'Stittsville',
    ],
    industries: defaultIndustries,
    description:
      'Ottawa is Canada’s capital and one of Ontario’s largest technology and professional service markets, with a diverse government, technology, construction and retail economy.',
  },

  {
    slug: 'clarence-rockland',
    name: 'Clarence-Rockland',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Prescott and Russell',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Welcome_to_Clarence-Rockland.png',
    nearbyCities: ['Ottawa', 'Casselman', 'Hawkesbury'],
    industries: defaultIndustries,
    description:
      'Clarence-Rockland is a growing community east of Ottawa supporting contractors, retailers, professional services and local businesses.',
  },

  {
    slug: 'carleton-place',
    name: 'Carleton Place',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Lanark County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Carleton_Place%2C_Ontario_%28cropped%29.jpg',
    nearbyCities: ['Ottawa', 'Arnprior', 'Perth', 'Smiths Falls'],
    industries: defaultIndustries,
    description:
      'Carleton Place is a rapidly growing community west of Ottawa with expanding construction, retail, home service and professional business markets.',
  },

  {
    slug: 'smiths-falls',
    name: 'Smiths Falls',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Lanark County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Smiths_Falls%2C_Ontario.jpg',
    nearbyCities: ['Perth', 'Carleton Place', 'Brockville', 'Ottawa'],
    industries: defaultIndustries,
    description:
      'Smiths Falls is an Eastern Ontario business centre serving local manufacturing, retail, construction and professional service markets.',
  },

  // ============================================================
  // RENFREW / OTTAWA VALLEY
  // ============================================================

  {
    slug: 'arnprior',
    name: 'Arnprior',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Renfrew County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Arnprior_John_Street.JPG',
    nearbyCities: ['Ottawa', 'Renfrew', 'Carleton Place', 'Pembroke'],
    industries: defaultIndustries,
    description:
      'Arnprior is a growing Ottawa Valley community supporting manufacturing, construction, retail and professional services.',
  },

  {
    slug: 'pembroke',
    name: 'Pembroke',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Renfrew County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Pembroke_April2006.JPG',
    nearbyCities: ['Petawawa', 'Renfrew', 'Arnprior', 'Ottawa'],
    industries: defaultIndustries,
    description:
      'Pembroke is a regional Ottawa Valley business centre supporting military, construction, healthcare, retail and professional service sectors.',
  },

  {
    slug: 'petawawa',
    name: 'Petawawa',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Renfrew County',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Emerald_Necklace_Trail%2C_Petawawa_Ontario.JPG',
    nearbyCities: ['Pembroke', 'Renfrew', 'Deep River'],
    industries: defaultIndustries,
    description:
      'Petawawa has a strong military-connected economy alongside contractors, retailers and professional service businesses.',
  },

  // ============================================================
  // NORTHEASTERN ONTARIO
  // ============================================================

  {
    slug: 'north-bay',
    name: 'North Bay',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Nipissing District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ferguson_at_Main_St_West_facing_South_East.jpg',
    nearbyCities: ['Sudbury', 'Huntsville', 'Temiskaming Shores'],
    industries: defaultIndustries,
    description:
      'North Bay is a major Northeastern Ontario business centre supporting transportation, mining services, construction, healthcare and professional businesses.',
  },

  {
    slug: 'greater-sudbury',
    name: 'Greater Sudbury',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Greater Sudbury',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Sudbury_downtown.JPG',
    nearbyCities: [
      'North Bay',
      'Espanola',
      'Manitoulin',
      'Sault Ste. Marie',
    ],
    neighbourhoods: [
      'Sudbury',
      'New Sudbury',
      'Valley East',
      'Chelmsford',
      'Lively',
      'Capreol',
    ],
    industries: defaultIndustries,
    description:
      'Greater Sudbury is Northern Ontario’s largest business centre and a major hub for mining, construction, engineering, healthcare, retail and professional services.',
  },

  {
    slug: 'timmins',
    name: 'Timmins',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Cochrane District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Timmins_-_McIntyre_Headframe.jpg',
    nearbyCities: ['Kapuskasing', 'Kirkland Lake', 'Temiskaming Shores'],
    industries: defaultIndustries,
    description:
      'Timmins is a major Northeastern Ontario mining and commercial centre supporting resource industries, construction and professional services.',
  },

  {
    slug: 'temiskaming-shores',
    name: 'Temiskaming Shores',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Timiskaming District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/New_Liskeard_aerial.JPG',
    nearbyCities: ['North Bay', 'Timmins', 'Kirkland Lake'],
    neighbourhoods: ['New Liskeard', 'Haileybury'],
    industries: defaultIndustries,
    description:
      'Temiskaming Shores serves as a regional business centre for Northeastern Ontario with agriculture, mining services, retail and professional businesses.',
  },

  // ============================================================
  // ALGOMA
  // ============================================================

  {
    slug: 'sault-ste-marie',
    name: 'Sault Ste. Marie',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Algoma District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Sault_Ste._Marie_International_Bridges_2025d.jpg',
    nearbyCities: ['Greater Sudbury', 'Elliot Lake', 'Blind River'],
    industries: defaultIndustries,
    description:
      'Sault Ste. Marie is a major Northern Ontario border and industrial centre with strong manufacturing, tourism, construction and professional service industries.',
  },

  // ============================================================
  // NORTHWESTERN ONTARIO
  // ============================================================

  {
    slug: 'thunder-bay',
    name: 'Thunder Bay',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Thunder Bay District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Thunder_Bay_skyline.JPG',
    nearbyCities: ['Dryden', 'Kenora', 'Fort Frances'],
    industries: defaultIndustries,
    description:
      'Thunder Bay is Northwestern Ontario’s largest business centre and a major hub for transportation, forestry, mining services, healthcare, construction and retail.',
  },

  {
    slug: 'kenora',
    name: 'Kenora',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Kenora District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Kenora_ON_skyline.JPG',
    nearbyCities: ['Dryden', 'Fort Frances', 'Thunder Bay'],
    industries: defaultIndustries,
    description:
      'Kenora is a Northwestern Ontario tourism and regional service centre supporting hospitality, construction, retail and professional businesses.',
  },

  {
    slug: 'dryden',
    name: 'Dryden',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Kenora District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Dryden_Auditorium.JPG',
    nearbyCities: ['Kenora', 'Thunder Bay', 'Fort Frances'],
    industries: defaultIndustries,
    description:
      'Dryden is a Northwestern Ontario regional business centre serving forestry, transportation, construction and professional service sectors.',
  },

  {
    slug: 'fort-frances',
    name: 'Fort Frances',
    province: 'Ontario',
    provinceCode: 'ON',
    region: 'Rainy River District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Fort_Frances_ON_2.JPG',
    nearbyCities: ['Kenora', 'Dryden', 'Thunder Bay'],
    industries: defaultIndustries,
    description:
      'Fort Frances is a Northwestern Ontario border community supporting tourism, forestry, retail, construction and professional services.',
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getCityBySlug(slug: string): OntarioCity | undefined {
  return ontarioCities.find((city) => city.slug === slug);
}

export function getCitiesByRegion(region: string): OntarioCity[] {
  return ontarioCities.filter((city) => city.region === region);
}

export function getCityByName(name: string): OntarioCity | undefined {
  return ontarioCities.find(
    (city) => city.name.toLowerCase() === name.toLowerCase(),
  );
}

export function getAllRegions(): string[] {
  return [...new Set(ontarioCities.map((city) => city.region))].sort();
}

export function getNearbyCityObjects(city: OntarioCity): OntarioCity[] {
  return city.nearbyCities
    .map((name) => getCityByName(name))
    .filter((nearbyCity): nearbyCity is OntarioCity => Boolean(nearbyCity));
}