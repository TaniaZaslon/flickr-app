import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

import ImageSearch from "./components/image.search.component";
import ImageItem from "./components/image.item.component";
import Preloader from "./components/preloader.component";
import ImageNoFound from "./components/image.no.found.component";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("cats");

  useEffect(() => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    const query = term;
    const perPage = 5;
    const pageMax = 100 / perPage;
    const pageNum = Math.floor(Math.random() * Math.floor(pageMax));

    client.photos
      .search({ query, per_page: perPage, page: pageNum })
      .then((data) => {
        setImages(data.photos);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error: " + err));
  }, [term]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            TZaslon
          </a>
          <ul className="nav justify-content-center w-100">
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h1 className="my-5 text-center">Image gallery</h1>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length == 0 && <ImageNoFound />}

        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <div className="row-gallery">
              {images.map((item, index) => {
                return <ImageItem image={item} key={index} />;
              })}
            </div>
            <div className="text-center mb-5">
              <a href="https://www.pexels.com">Photos provided by Pexels</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
