import React from 'react';

function Player() {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Now Playing</h4>
      {/* DETAILS */}
      {/* CONTROLS */}
      <p>
        <strong>Next Song:</strong> Reptilia by The Strokes
      </p>
    </div>
  );
}

export default Player;
