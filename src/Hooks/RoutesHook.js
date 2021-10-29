import { useState } from "react";
import axios from "axios";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/`;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [searchItem, setSearchItem] = useState(false);
  const [error, setError] = useState(null);

  const getGifsData = async () => {
    setError(false)
    setLoading(true);
    try {
      await axios
        .get(`${baseURL}trending?api_key=${API_KEY}&rating=g`)
        .then((res) => {
          setGifs(res.data.data);
          setSearchItem();
          setLoading(false);
        });
    } catch (error) {
      console.log("Error getting gifs - ", error);
    }
  };

  const searchGifs = async (searchItem) => {
    if (searchItem !== undefined) {
      setError(false)
      setLoading(true);
      try {
        await axios
          .get(
            `${baseURL}search?api_key=${API_KEY}&q=${searchItem.giphyName}&rating=g&lang=en`
          )
          .then((res) => {
            setGifs(res.data.data);
            setLoading(false);
          });
      } catch (error) {
        console.log("Error getting gifs - ", error);
      }
    }else{
      setError(true)
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
    error
  };
};

export default UseRoutes;
