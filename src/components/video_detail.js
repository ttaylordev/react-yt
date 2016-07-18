import React from 'react';

const VideoDetail = (props) => {
  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;
  
  return (
    <div className="video-detail col-md-8">
      <div className="enmbad-responsive embad-responsive-16by9">
        <iframe className="embad-responsive-item"></iframe>
      </div>
      <div className="details"> 
        <div>{video.snippet.title}</div>
        <div>{video.snipet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;