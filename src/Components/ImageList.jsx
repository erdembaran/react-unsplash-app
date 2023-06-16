import ImageItem from "./ImageItem";

function ImageList({ imagesData }) {
  return (
    <div className="imageContainer mt-5 ">
      {imagesData &&
        imagesData.map((image, index) => {
          return (
            <div key={index}>
              <ImageItem image={image} />
            </div>
          );
        })}
    </div>
  );
}

export default ImageList;
