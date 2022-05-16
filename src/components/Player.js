import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props) {
  const audioElement = useRef(null);
  const [playing, setPlaying] = useState(false);
  //Dont want songs to play as soon as app starts

  useEffect(() => {
    if (playing) {
      audioElement.current.play();
      //Anytime something changes it will check if audio is playing and will continue playing
    } else {
      audioElement.current.pause();
      // It will just pause the song
    }
  });

  const skipSong = (forwards = true) => {};

  return (
    <div className="c-player">
      <audio ref={audioElement}></audio>
      <h4>Now Playing</h4>
      <PlayerDetails song={props.song} />
      <PlayerControls />
      <p>
        <strong>Next Song:</strong> {props.nextSong.title} by{' '}
        {props.nextSong.artist}
      </p>
    </div>
  );
}

export default Player;
