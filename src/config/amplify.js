const {
  VOTERO_AWS_REGION,
  VOTERO_CONGITO_USER_POOL_ID,
  VOTERO_CONGITO_USER_POOL_WEB_CLIENT_ID,
  VOTERO_GRAPHQL_ENDPOINT
} = import.meta.env

const Auth = {
  region: VOTERO_AWS_REGION,
  userPoolId: VOTERO_CONGITO_USER_POOL_ID,
  userPoolWebClientId: VOTERO_CONGITO_USER_POOL_WEB_CLIENT_ID
}

const API = {
  graphql_endpoint: VOTERO_GRAPHQL_ENDPOINT,
  graphql_endpoint_iam_region: VOTERO_AWS_REGION
}

const amplifyConfig = {
  Auth,
  API
}

export default amplifyConfig
