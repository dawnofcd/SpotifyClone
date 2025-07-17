import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Songs } from './Songcontext';
export default function Playing() {
  const { CurrentSong, HandleSetSong } = useContext(Songs);
  const HandelNext = () => {
    HandleSetSong(CurrentSong.id + 1);
  };

  const HandelPre = () => {
    HandleSetSong(CurrentSong.id - 1);
  };
  return (
    <AudioPlayer
      className="player-Song"
      src={CurrentSong?.url || ''}
      layout="stacked"
      showJumpControls={false}
      showSkipControls={true}
      onClickNext={HandelNext}
      onClickPrevious={HandelPre}
    />
  );
}
