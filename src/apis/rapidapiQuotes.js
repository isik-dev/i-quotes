import axios from "axios";

export const quoteAPI = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": process.env.REACT_APP_KEY,
  },
  // headers: {
  //   "x-rapidapi-host": "quotes15.p.rapidapi.com",
  //   "x-rapidapi-key": "615253f600mshbae16fd9c712db3p11a3fdjsna109cd0be6d6",
  // },
});

// ("https://type.fit/api/quotes");
