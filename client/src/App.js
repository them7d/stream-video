import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videoId, setVideoId] = useState(null);
  function playVideo(e, videoId) {
    e.preventDefault();
    setVideoId(videoId);
  }
  return (
    <div className="App">
      {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>}<br />
      <button onClick={(e) => { playVideo(e, 'video-1') }} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        play video 1
      </button>
      <button onClick={(e) => { playVideo(e, 'video-2') }} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        play video 2
      </button>
      <button onClick={(e) => { playVideo(e, 'video-3') }} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        play video 3
      </button>
    </div>
  );
}

export default App;
