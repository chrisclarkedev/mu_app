import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Dont want songs to play as soon as app starts

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      // Anytime something changes it will check if audio is playing and will continue playing
    } else {
      audioElement.current.pause();
      // It will just pause the song
    }
  });

  const skipSong = (forwards = true) => {
    // If going forward we pass true, if the opposite backwards we pass false
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        // Create a temp for current song and add 1 to go to next song
        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        // Create temp for current song and minus 1 to go to previous song
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        // Will retrieve previous song index and set it to previous song
        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioElement}
      ></audio>
      <h4>Now Playing</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next Song:</strong> {props.songs[props.nextSongIndex].title} by{' '}
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
}

export default Player;
