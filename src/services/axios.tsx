import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `https://aparecidaprev.go.gov.br/wp-json/wp/v2`,
});
