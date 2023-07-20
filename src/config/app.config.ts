interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Content Creator'],
  customerRoles: [],
  tenantRoles: ['Content Creator'],
  tenantName: 'Business',
  applicationName: 'ZEDGE',
  addOns: [],
};
