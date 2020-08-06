import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((vid) => {
    return (
      <VideoItem
        key={vid.id.videoId}
        videoObj={vid}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;
