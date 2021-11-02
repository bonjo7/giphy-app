import React, { useEffect, useRef } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import Toast from "../Toast/Toast";
import GifList from "../List/GifList";
import Topics from "../Topics/Topics";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import styles from "./Searchbox.module.css";

const SearchBox = () => {
  const ref = useRef();
  const {
    loading,
    searchGifs,
    searchItem,
    setSearchItem,
    getGifsData,
    error,
    show,
    setShow,
    errorStatus,
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
        {error && (
          <Toast
            error={error}
            errorStatus={errorStatus}
            show={show}
            setShow={setShow}
          />
        )}
        <div style={{ marginTop: "15px" }}>
          <InputGroup className='mb-3'>
            <FormControl
              className={
                error && errorStatus === "Please enter a search value"
                  ? styles.error
                  : ""
              }
              name='giphyName'
              type='text'
              placeholder='Giphy Name'
              aria-label='Giphy name'
              ref={ref}
              onChange={(e) => onChange(e)}
              onKeyDown={(e) =>
                e.key === "Enter" ? searchGifs(searchItem) : ""
              }
            />
            {searchItem ? (
              <Button
                aria-label='search-gif-button'
                id='clearSearch'
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
              aria-label='close-search-button'
              id='searchButton'
              className={styles.button}
              variant='flat'
              onClick={() => searchGifs(searchItem)}
            >
              <MagnifyingGlass size={20} />
            </Button>
          </InputGroup>
        </div>
      </Container>
      <Container>
        <Topics searchGifs={searchGifs} />
      </Container>
      <GifList loading={loading} getGifsData={getGifsData} />
    </>
  );
};

export default SearchBox;
