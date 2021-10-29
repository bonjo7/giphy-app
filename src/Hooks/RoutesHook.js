import { useState } from "react";
import axios from "axios";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=27&rating=g`;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const getGifsData = async () => {
    setLoading(true);
    try {
      await axios.get(`${baseURL}/education`).then((res) => {
        setGifs(res.data.data);
        console.log("gif ", res.data.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error getting data - ", error);
    }
  };

  return {
    loading,
    setLoading,
    gifs,
    getGifsData,
  };
};

export default UseRoutes;
