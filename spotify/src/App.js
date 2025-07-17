import { useEffect, useState } from 'react';
import './App.css';
import DetailSong from './Component/DetailSong';
import ListSong from './Component/ListSong';
import Navbar from './Component/Navbar';
import Playing from './Component/Playing';
import { Songs } from './Component/Songcontext';
import DataSongs from './data/songs.json';
function App() {
  const [CurrentSong, setCurrentSong] = useState(DataSongs[0]);
  const HandleSetSong = (idsong) => {
    let song = DataSongs.find((song) => song.id === idsong);
    if (!song) {
      setCurrentSong(DataSongs[0]);
      return;
    }
    setCurrentSong(song);
  };

  return (
    <Songs.Provider value={{ DataSongs, HandleSetSong, CurrentSong }}>
      <div className="App">
        <Navbar />
        <div className="grid grid-cols-3 bg-black h-screen-navbar-player">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </div>
    </Songs.Provider>
  );
}

export default App;
