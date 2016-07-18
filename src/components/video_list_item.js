import React from 'react';

// the curly braces in the arguments array, has a property 'video' grab it and declare a new variable called 'video'
const VideoListItem = ({video}) => {
  // const video = props.video;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;