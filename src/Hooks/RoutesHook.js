import { useState } from "react";
import axios from "axios";

const UseRoutes = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const baseURL = `https://api.giphy.com/v1/gifs/`;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [searchItem, setSearchItem] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [show, setShow] = useState(false);

  const getGifsData = async () => {
    setError(false);
    setLoading(true);
    try {
      await axios
        .get(`${baseURL}trending?api_key=${API_KEY}&rating=g`)
        .then((res) => {
          setGifs(res.data.data);
          setSearchItem();
          setLoading(false);
        });
    } catch (err) {
      setShow(true);
      setErrorStatus(`${err.response.status} error`);
      setError(true);
      setLoading(false);
    }
  };

  const searchGifs = async (searchItem) => {
    if (searchItem !== undefined && searchItem.giphyName !== "") {
      setError(false);
      setLoading(true);
      setErrorStatus(null);
      try {
        await axios
          .get(
            `${baseURL}search?api_key=${API_KEY}&q=${searchItem.giphyName ? searchItem.giphyName : searchItem}&rating=g&lang=en`
          )
          .then((res) => {
            setGifs(res.data.data);
            setLoading(false);
          });
      } catch (err) {
        setError(true);
        setShow(true);
        setErrorStatus(`${err.response.status} error`);
        setLoading(false);
      }
    } else {
      setShow(true);
      setError(true);
      setErrorStatus("Please enter a search value");
      setLoading(false);
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
    error,
    errorStatus,
    show,
    setShow,
  };
};

export default UseRoutes;
