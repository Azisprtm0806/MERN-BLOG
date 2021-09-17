import React from "react";
import "./upload.scss";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload">
      {img && <img className="preview" src={img} alt="" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
