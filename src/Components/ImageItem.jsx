function ImageItem({ image }) {
  return (
    <div className="imageItem">
      <img
        className="img-thumbnail"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
