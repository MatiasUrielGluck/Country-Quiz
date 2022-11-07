import { useEffect, useState } from "react";
import countriesApi from "../api/countriesApi";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const res = await countriesApi.get("/all?fields=name,capital,flags");
    const data = await res.data;
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
  };
};
