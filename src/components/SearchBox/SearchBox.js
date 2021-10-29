import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import { MagnifyingGlass } from "phosphor-react";
import styles from "./Searchbox.module.css";

const SearchBox = () => {
  const { searchGifs, searchItem, setSearchItem } = UseRoutes();

  const onChange = (e) => {
    setSearchItem({ ...setSearchItem, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <InputGroup className='mb-3'>
        <FormControl
          name='giphyName'
          type='text'
          placeholder='Giphy Name'
          aria-label='Giphy name'
          onChange={(e) => onChange(e)}
        />
        <Button
          className={styles.button}
          variant='flat'
          onClick={() => searchGifs(searchItem)}
        >
          <MagnifyingGlass size={20} />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
