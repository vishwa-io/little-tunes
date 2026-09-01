import "./App.css"
import cover from "./assets/cover.png"

function App() {
  return (
    <main className="page">
      <div className="player">
        <h2 className="song-title">Song Title</h2>
        <img className="cover" src={cover} alt="cover"/>
        <div className="controls">
          <button className="previous">previous</button>
          <button className="play">play</button>
          <button className="next">next</button>
        </div>
      </div>
    </main>
  )
}

export default App