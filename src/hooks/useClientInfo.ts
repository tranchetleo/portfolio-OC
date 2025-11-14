import { siteConfig } from "@/config/site.config";

export interface CustomSection {
  title: string;
  content: string;
}

export interface ClientInfo {
  companyName: string;
  companySiret: string;
  companyLegalForm?: string;
  companyAddress: string;
  companyPostalCode: string;
  companyCity: string;
  companyCountry?: string;
  companyEmail?: string;
  companyPhone?: string;
  directorName?: string;
  hostName?: string;
  hostAddress?: string;
  hostPhone?: string;
  customSections?: CustomSection[];
}

export function useClientInfo(): ClientInfo {
  return siteConfig.legalInfos;
}