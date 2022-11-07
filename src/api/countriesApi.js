import axios from "axios";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3",
});

export default countriesApi;
