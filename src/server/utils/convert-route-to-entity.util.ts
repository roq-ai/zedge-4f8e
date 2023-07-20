const mapping: Record<string, string> = {
  businesses: 'business',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
