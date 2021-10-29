import React, { useEffect, useRef } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import GifList from "../List/GifList";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import styles from "./Searchbox.module.css";

const SearchBox = () => {
  const ref = useRef();
  const {
    loading,
    searchGifs,
    searchItem,
    setSearchItem,
    gifs,
    getGifsData,
    error,
  } = UseRoutes();

  const onChange = (e) => {
    setSearchItem({ ...setSearchItem, [e.target.name]: e.target.value });
  };

  const clearSearch = () => {
    ref.current.value = "";
    setSearchItem(false);
    getGifsData();
  };

  useEffect(() => {
    getGifsData();
  }, []);

  return (
    <>
      <Container>
        <div style={{ marginTop: "15px" }}>
          <InputGroup className='mb-3'>
            <FormControl
              className={error ? styles.error : ""}
              name='giphyName'
              type='text'
              placeholder='Giphy Name'
              aria-label='Giphy name'
              ref={ref}
              onChange={(e) => onChange(e)}
            />
            {searchItem ? (
              <Button
                className={styles.clearSearch}
                variant='flat'
                onClick={() => clearSearch()}
              >
                <XCircle size={20} />
              </Button>
            ) : (
              ""
            )}

            <Button
              className={styles.button}
              variant='flat'
              onClick={() => searchGifs(searchItem)}
            >
              <MagnifyingGlass size={20} />
            </Button>
          </InputGroup>
        </div>
      </Container>
      <GifList loading={loading} gifs={gifs} getGifsData={getGifsData} />
    </>
  );
};

export default SearchBox;
