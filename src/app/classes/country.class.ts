export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Flags;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface Flags {
  png: string;
  svg: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2019': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Spa;
  ces: Spa;
  cym: Spa;
  deu: Spa;
  est: Spa;
  fin: Spa;
  fra: Spa;
  hrv: Spa;
  hun: Spa;
  ita: Spa;
  jpn: Spa;
  kor: Spa;
  nld: Spa;
  per: Spa;
  pol: Spa;
  por: Spa;
  rus: Spa;
  slk: Spa;
  spa: Spa;
  swe: Spa;
  urd: Spa;
  zho: Spa;
}

interface Languages {
  spa: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  UYU: UYU;
}

interface UYU {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  spa: Spa;
}

interface Spa {
  official: string;
  common: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}
