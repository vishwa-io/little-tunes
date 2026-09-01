import "./App.css"
import cover from "./assets/cover.png"
import song1 from "./assets/music/song-1.mp3"
import { useRef,useState } from "react"

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

//play and pause song
  function playSong() {
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
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
          <button className="play" onClick={playSong}>
            {isPlaying ? "pause" : "play"}
          </button>
          <button className="next">next</button>
        </div>
      </div>
    </main>
  )
}

export default App