import { useEffect, useState } from "react";
import logo from "../../logo-shein.png";
import Navigation from "../Navigation";
import axios from "axios";

export default function Home() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    async function getTabs() {
      const authAxios = axios.create({
        baseUrl: "https://unofficial-shein.p.rapidapi.com",
        params: {
          language: "en",
          country: "US",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "4f421d9cc0mshe2a09c0a3ed87adp18e0e2jsn37547b21ff0f",
          "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
        },
      });
      try {
        const response = await authAxios.get(
          "https://unofficial-shein.p.rapidapi.com/navigations/get-tabs"
        );
        const result = response.data;
        console.log(response.data);
        setTabs(response.data);
        return result;
      } catch (err) {
        console.log(err);
      }
    }

    getTabs();
  }, []);

  return (
    <>
      <Navigation />
      <ul>
        {tabs?.info?.tabs?.map((tab) => (
          <li>{tab?.name}</li>
        ))}
      </ul>
    </>
  );
}
