import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
export default function Navbar() {
  return (
    <div className="text-4xl  content-center text-center bg-green-800 h-[100px]">
      <FontAwesomeIcon icon={faSpotify} />
      Spotify
    </div>
  );
}
