"use client"
import React, { useRef, useState } from 'react';

const VideoCardC = ({ videoTitle, videoDescription, videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 shadow-md rounded-lg overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-t-lg"
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Video not supported
        </video>
        <button
          className="absolute bottom-4 left-4 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
          onClick={togglePlayPause}
        >
          {isPlaying ? 'Pauză' : 'Redare'}
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-white">{videoTitle}</h2>
        <p className="text-gray-300">{videoDescription}</p>
      </div>
    </div>
  );
};

export default VideoCardC;

