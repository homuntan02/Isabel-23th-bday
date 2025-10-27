export default function StartScreen({ onStart }) {
    return (
      <div className="start-screen">
        <h1>Welcome to Our Little World 💖</h1>
        <button onClick={onStart}>Enter</button>
      </div>
    );
  }
  