import { useState, useEffect } from 'react';
//Call function when things change (lifestyle method)
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: 'Pop Thieves (Makie It Feel Good)',
      artist: 'Childish Gambino',
      img_src: './images/1cg.png',
      src: './music/01 Pop Thieves (Make It Feel Good) [feat. Jaden Smith].mp3',
    },
    {
      title: "Ain't It Fun",
      artist: 'Paramore',
      img_src: './images/2pp.png',
      src: './music/02 - Aint It Fun.mp3',
    },
    {
      title: 'Modal Soul',
      artist: 'Nujabes',
      img_src: './images/3nj.png',
      src: './music/03 Modal Soul (feat. Uyama Hiroto).mp3',
    },
    {
      title: 'Them Changes',
      artist: 'Thundercat',
      img_src: './images/4thc.png',
      src: './music/04 Thundercat - Them Changes.mp3',
    },
    {
      title: 'Sunflower',
      artist: 'Vampire Weekend',
      img_src: './images/5vw.png',
      src: './music/05 Sunflower (feat. Steve Lacy).mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  // If song skips to the next song and is more than array we will start at beginning of song list
  // If song doesnt skip to 0 then it will add 1 to the array going to next song
  // Next song will update depending on what currentSongIndex is
  //useEffect function that will be initiated once currentSongIndex is called

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
