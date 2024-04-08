export const getQueryParams = (link: any) => {
  const queryParams = new URLSearchParams();
  Object.entries(link).forEach(([key, value]) => {
    queryParams.append(key, JSON.stringify(value));
  });
  const queryString = queryParams.toString();
  return queryString;
};
