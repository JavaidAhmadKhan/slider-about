import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { LazyImageProvider } from "./LazyImage/LazyImageContext";
import LazyImage from "./LazyImage/LazyImage";
import "./index.css";

const images = [
  "/img/img1.jpg",
  "/img/img2.jpg",
  "/img/img3.jpg",
  "/img/img4.jpg",
  "/img/img5.jpg",
  "/img/img6.jpg",
  "/img/img4.jpg"
];

const App = () => (
  <LazyImageProvider>
    <Carousel>
      {images.map((image, i) => (
        <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
      ))}
    </Carousel>
  </LazyImageProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
