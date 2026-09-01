import "./App.css"
import cover from "./assets/cover.png"
import song1 from "./assets/music/song-1.mp3"
import { useRef } from "react"

function App() {
  const audioRef = useRef(null)

  function playSong() {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }
  return (
    <main className="page">
      <div className="player">
        <h2 className="song-title">Song Title</h2>
        <img className="cover" src={cover} alt="cover"/>
        <div className="progress">
          <span>0:00</span>
          <input type="range" />
          <span>0:00</span>
        </div>
        <audio className="audio" src={song1} ref={audioRef}></audio>
        <div className="controls">
          <button className="previous">previous</button>
          <button className="play" onClick={playSong}>play</button>
          <button className="next">next</button>
        </div>
      </div>
    </main>
  )
}

export default App