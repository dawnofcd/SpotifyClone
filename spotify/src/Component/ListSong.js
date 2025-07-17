import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from 'react';
import { Songs } from './Songcontext';
import { useEffect } from 'react';

export default function ListSong() {
  const { DataSongs, HandleSetSong, CurrentSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const HandlePlay = (idSong) => {
    setIdSong(idSong);
    HandleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(CurrentSong.id);
  }, [CurrentSong]);
  return (
    <div className="col-span-2 overflow-y-scroll  ">
      <table className="table-auto text-xl text-white w-full">
        <thead>
          <tr className=" text-left">
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>
              <FontAwesomeIcon icon={faMarkdown} />
            </th>
          </tr>
        </thead>
        <tbody className="bg-black">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`hover:bg-slate-500 ${
                idSong === song.id && 'text-gray-500'
              }`}
              onClick={() => HandlePlay(song.id)}
            >
              <td>{index + 1}</td>
              <td>{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={song.url}>
                  {' '}
                  <FontAwesomeIcon icon={faMarkdown} />{' '}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
