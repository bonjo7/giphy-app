import Header from "./components/Header/Header";
import Search from "./components/SearchBox/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='wrapper'>
        <Search />
      </div>
    </div>
  );
}

export default App;
