import { useState } from "react";
import axios from "axios";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&rating=g`;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [searchItem, setSearchItem] = useState(false);

  const getGifsData = async () => {
    setLoading(true);
    try {
      await axios.get(`${baseURL}`).then((res) => {
        setGifs(res.data.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error getting gifs - ", error);
    }
  };

  const searchGifs = async (searchItem) => {
    setLoading(true);
    try {
      await axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchItem}&limit=25&offset=0&rating=g&lang=en`
        )
        .then((res) => {
          setGifs(res.data.data);
          console.log(gifs);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error getting gifs - ", error);
    }
  };

  return {
    loading,
    setLoading,
    gifs,
    getGifsData,
    searchGifs,
    searchItem,
    setSearchItem,
  };
};

export default UseRoutes;
