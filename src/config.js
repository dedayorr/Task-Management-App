export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE_URL_PROD
    : process.env.REACT_APP_API_BASE_URL_DEV;
