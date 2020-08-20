import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ImageGallery(props) {
  console.log(props.imageList);
  return (
    <div>sfdf</div>
    /* <div className="row text-center">
  <div className="col-lg-3 col-md-4 col-xs-6">
    <a href="#" className="d-block mb-4 h-100">
      <img
        className="img-fluid"
        src="https://www.w3schools.com/w3images/wedding.jpg"
        alt=""
      />
    </a>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <a href="#" className="d-block mb-4 h-100">
      <img
        className="img-fluid"
        src="https://www.w3schools.com/w3images/paris.jpg"
        alt=""
      />
    </a>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <a href="#" className="d-block mb-4 h-100">
      <img
        className="img-fluid"
        src="https://www.w3schools.com/w3images/falls2.jpg"
        alt=""
      />
    </a>
  </div>
  <div className="col-lg-3 col-md-4 col-xs-6">
    <a href="#" className="d-block mb-4 h-100">
      <img
        className="img-fluid"
        src="https://www.w3schools.com/w3images/rocks.jpg"
        alt=""
      />
    </a>
  </div>
</div>; */
  );
}

class ImageGalleryWithSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handlerSubmitForm = this.handlerSubmitForm.bind(this);

    this.state = {
      imageList: [],
      currentTag: "",
      flickrKey: "4fe272e9de883828ec38690914d1ca24",
    };
  }
  handlerSubmitForm(e) {
    if (e.target.value) {
      this.setState({
        currentTag: e.target.value,
      });
    }
  }

  componentDidMount = () => {
    const size = "url_l";
    const perPage = 10;
    const pageMax = 4000 / perPage;
    const pageNum = Math.floor(Math.random() * Math.floor(pageMax));
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.state.flickrKey}&tags=${this.state.currentTag}&extras=${size}&per_page=${perPage}&page=${pageNum}&format=json&nojsoncallback=1`;

    axios
      .get(url)
      .then((res) => {
        if (res.data.photos.photo.length > 0) {
          this.setState({
            imageList: res.data.photos.photo,
          });
        }
      })
      .catch((err) => console.log("Error: " + err));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmitForm}>
          <Form.Control type="text" placeholder="Enter any key word" />
        </Form>
        <ImageGallery imageList={this.state.imageList} />
      </div>
    );
  }
}

export default ImageGalleryWithSearch;
