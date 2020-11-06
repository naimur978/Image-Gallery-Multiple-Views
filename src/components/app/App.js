import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImages } from "../../actions/images_action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ListIcon from "../../assets/list.png";
import gridIcon from "../../assets/grid.png";
import Loader from "../../assets/loader.gif";

import "./App.css";
import Modal from "../modal/Modal";

class App extends Component {
  state = {
    grid: JSON.parse(localStorage.getItem("grid")),
    open: false,
    selected: {},
  };

  componentDidMount() {
    this.props.getImages();
  }
  showList() {
    this.setState({ grid: false });
    localStorage.setItem("grid", false);
  }
  showGrid() {
    this.setState({ grid: true });
    localStorage.setItem("grid", true);
  }
  openImage = (object) => {
    this.setState({ open: true, selected: object });
    document.querySelector("body").style.overflow = "hidden";
  };
  handleClose = (open) => {
    this.setState({ open });
    document.querySelector("body").style.overflow = "visible";
  };
  handleNext = () => {
    const { selected } = this.state;
    const len = this.props.images.length - 1;
    if (selected.index < len) {
      let prev = this.props.images.find(
        (image, id) => id === selected.index + 1
      );
      this.setState({ selected: { index: selected.index + 1, image: prev } });
    }
  };
  handlePrev = () => {
    const { selected } = this.state;
    if (selected.index !== 0) {
      let prev = this.props.images.find(
        (image, id) => id === selected.index - 1
      );
      this.setState({ selected: { index: selected.index - 1, image: prev } });
    }
  };

  render() {
    const { images } = this.props;
    const { grid, open, selected } = this.state;
    return (
      <div className="gallary">
        <div className="gallary-header">
          <h3 className="gallary-text">Gallary</h3>
          <div className="format">
            <img onClick={this.showList.bind(this)} src={ListIcon} alt="list" />
            <img onClick={this.showGrid.bind(this)} src={gridIcon} alt="grid" />
          </div>
        </div>
        <div className="gallary-row">
          {images.map((image, index) => (
            <div key={index} className={grid ? "gallary-card" : "gallary-list"}>
              <LazyLoadImage
                alt={image}
                effect="blur"
                wrapperClassName="gallary-image"
                placeholderSrc={Loader}
                src={image}
              />
              <div className="wrapper">
                <div
                  className="open-text"
                  onClick={this.openImage.bind(this, { image, index })}
                >
                  View
                </div>
              </div>
            </div>
          ))}
          <Modal
            open={open}
            setState={this.handleClose}
            images={images}
            selected={selected}
            openImage={this.openImage}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array.isRequired,
  getImages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  images: state.images.images,
});
export default connect(mapStateToProps, { getImages })(App);
