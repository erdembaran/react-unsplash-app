import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchInput from "./Components/SearchInput";
import ImageList from "./Components/ImageList";
import getData from "./Components/Api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const searchValue = async (term) => {
    const dataImage = await getData(term);
    setImages(dataImage);
  };

  return (
    <div className="App">
      <SearchInput searchValue={searchValue} />
      <ImageList imagesData={images} />
    </div>
  );
}

export default App;
