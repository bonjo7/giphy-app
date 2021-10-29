import Header from "./components/Header/Header";
import List from "./components/List/GifList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='wrapper'>
        <List />
      </div>
    </div>
  );
}

export default App;
