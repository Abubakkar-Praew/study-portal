export type Embassy = {
  country: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
};

export const embassies: Embassy[] = [
  {
    country: "USA",
    city: "Islamabad",
    name: "U.S. Embassy Islamabad",
    phone: "+92 51 201 4000",
    email: "acsislamabad@state.gov",
    address: "Diplomatic Enclave, Ramna 5, Islamabad",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
  },
  {
    country: "UK",
    city: "Islamabad",
    name: "British High Commission Islamabad",
    phone: "+92 51 201 2000",
    email: "consular.islamabad@fcdo.gov.uk",
    address: "Diplomatic Enclave, Islamabad",
    hours: "Mon–Fri: 9:00 AM – 5:00 PM",
  },
  {
    country: "UAE",
    city: "Islamabad",
    name: "Embassy of UAE Islamabad",
    phone: "+92 51 209 0200",
    email: "islamabad@mofa.gov.ae",
    address: "House 49, Street 2, Diplomatic Enclave",
    hours: "Mon–Fri: 9:00 AM – 3:00 PM",
  },
];
