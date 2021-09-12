import axios from "axios";

const URL = "http://localhost:8000";
export const getNews = (page, size = 5) => {
  try {
    return axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("Error while calling API");
  }
};
