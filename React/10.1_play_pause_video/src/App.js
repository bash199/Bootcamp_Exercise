import React, {useRef} from 'react'
import './App.css';
import Video from './Component/Video'

const  App = () => {
  const vidRef = useRef()
  const handlePlayVid = () => vidRef.current.play();
  const handlePauseVid = () => vidRef.current.pause();
  return (
    <div className="App">
      <header className="App-header">
        <Video pause={handlePauseVid} play={handlePlayVid} getRef={vidRef}/>
      </header>
    </div>
  );
}

export default App;
