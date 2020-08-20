import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ImageGalleryWithSearch from "./components/image.gallery.with.search.component";
import "./App.css";

class App extends React.Component {
  render() {
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
          <h1 className="my-4 text-center">Flickr image gallery</h1>
          <ImageGalleryWithSearch />
        </div>
      </div>
    );
  }
}

export default App;
