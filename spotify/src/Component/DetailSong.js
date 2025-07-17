import React, { useContext } from 'react';
import { Songs } from './Songcontext';

export default function DetailSong() {
  const { CurrentSong } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className=" text-green-500 font-bold">Now Playing</h2>
      <h2 className="text-gray-500 text-2xl">{CurrentSong.name}</h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          src={CurrentSong.links.images[0].url}
          alt="avatar"
          className="w-full"
        />
      </div>

      <div className=" flex justify-evenly items-center mt-10">
        <img
          src={CurrentSong.links.images[0].url}
          alt="avatar"
          className="w-[70px] rounded-full"
        />
        <span className="text-xl text-white">{CurrentSong.author}</span>
      </div>
    </div>
  );
}
