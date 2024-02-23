import React, { useState } from "react";
import "./App.css";
const Task5 = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const photochangeFunc = () => {
    // console.log(text);
    setImage(`https://source.unsplash.com/random/360*280/?${text}`);
    setText("");
  };
  console.log(image);
  console.log(text);
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <input
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {console.log(text)}
          <button onClick={photochangeFunc}>Get Image</button>
          <div className="imgContainer">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task5;
