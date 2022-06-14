import React from "react";
import { useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
//import {'BsPauseFill', 'BsFillPlayFill'} from "react-icons"
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const vidref = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidref}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
