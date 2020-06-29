import "./VideoItem.css";
import React from "react";

const VideoItem = ({ videoObj, onVideoSelect }) => {
  const imgUrl = videoObj.snippet.thumbnails.medium.url;
  const title = videoObj.snippet.title;
  return (
    <div onClick={() => onVideoSelect(videoObj)} className="video-item item">
      <img className="ui image" src={imgUrl} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
