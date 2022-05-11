import { useState } from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'Pop Thieves (Makie It Feel Good)',
      artist: 'Childish Gambino',
      img_src: './components/music/images/1cg.png',
      src: './components/music/01 Pop Thieves (Make It Feel Good) [feat. Jaden Smith]',
    },
    {
      title: "Ain't It Fun",
      artist: 'Paramore',
      img_src: './components/music/images/2pp.png',
      src: './components/music/02 - Aint It Fun.mp3',
    },
    {
      title: 'Modal Soul',
      artist: 'Nujabes',
      img_src: './components/music/images/3nj.png',
      src: './components/music/03 Modal Soul (feat. Uyama Hiroto).mp3',
    },
    {
      title: 'Them Changes',
      artist: 'Thundercat',
      img_src: './components/music/images/thc.png',
      src: './components/music/04 Thundercat - Them Changes.mp3',
    },
    {
      title: 'Sunflower',
      artist: 'Vampire Weekend',
      img_src: './components/music/images/5vw.png',
      src: './components/music/05 Sunflower (feat. Steve Lacy).mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
