import axios from "axios";

export const quoteAPI = axios.create({
  url: "https://quotes15.p.rapidapi.com/quotes/random",
  headers: {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "615253f600mshbae16fd9c712db3p11a3fdjsna109cd0be6d6",
  },
});
