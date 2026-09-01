import "./App.css"
import cover from "./assets/cover.png"
import song1 from "./assets/music/song-1.mp3"
import song2 from "./assets/music/song-2.mp3"
import { useRef,useState,useEffect } from "react"
import frame from "./assets/frame.png"
import play from "./assets/play.png"
import pause from "./assets/pause.png"
import forwards from "./assets/forwards.png"
import backwards from "./assets/backwards.png"

const listAudio = [
  {
    name: "Song One",
    file: song1
  },
  {
    name: "Song Two",
    file: song2
  }
]

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [indexAudio, setIndexAudio] = useState(0)

  //convert seconds to minutes and seconds
  function getMinutes(t) {
    var min = parseInt(t/60)
    var sec = parseInt(t%60)

    if (sec < 10) {
      sec = "0" + sec
    }
    if (min < 10) {
      min = "0" + min
    }
    return min + ":" + sec
  }
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
  useEffect(() => {
    if (indexAudio > 0) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [indexAudio])
  //next song
  function next() {
    if (indexAudio < listAudio.length - 1) {
      setIndexAudio(indexAudio + 1)
      }
  }
  //previous song
  function previous() {
    if (indexAudio > 0) {
      setIndexAudio(indexAudio - 1)
    }
  }
  
  return (
    <main className="page">
      <div className="player">
        <img className="frame" src={frame} alt="frame" />
        <h2 className="song-title">Song Title</h2>
        <img className="cover" src={cover} alt="cover"/>
        <div className="progress">
          <span>{getMinutes(currentTime)}</span>
          <input type="range" min="0" max={duration} value={currentTime} 
          onChange={(event) => {
          audioRef.current.currentTime = event.target.value
          setCurrentTime(event.target.value)}}/>
          <span>{getMinutes(duration)}</span>        
        </div>
        <audio className="audio" src={listAudio[indexAudio].file} ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onEnded={() => {
          if (indexAudio < listAudio.length - 1) {
            setIndexAudio(indexAudio + 1)
          }
        }}></audio>
        <div className="controls">
          <button className="previous" onClick={previous}>
            <img src={backwards} alt="previous" />
          </button>
          <button className="play" onClick={playSong}>
            <img src={isPlaying ? pause : play} alt={isPlaying ? "pause" : "play"} />
          </button>
          <button className="next" onClick={next} >
            <img src={forwards} alt="next" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default App