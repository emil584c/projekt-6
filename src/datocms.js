import { GraphQLClient } from "graphql-request";
export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer cecc4d90bf2bdecd01725ec1ab0b6f`
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com/', { headers });
  return client.request(query, variables);
}