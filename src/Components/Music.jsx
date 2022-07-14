import { Link } from "react-router-dom";
import { BiPlay as PlayIcon } from "react-icons/bi";
import { IoMdPause as PauseIcon } from "react-icons/io";
import { isPlayOrPause } from "../helpers/getMusics";

const Music = ({ music, isPlay, setPlay }) => {
  return (
    <Link to={`/music/${music.id}`} className='music'>
      <div className='music__container-image'>
        {music.isPlay && isPlay ? (
          <>
            <PauseIcon
              className='music__icon music__icon-pause'
              onClick={(e) => {
                e.stopPropagation();
                isPlayOrPause(e, music);
                setPlay(false);
              }}
            />
            <audio src={music.preview} className='hidden' autoPlay></audio>
          </>
        ) : (
          <PlayIcon
            className='music__icon'
            onClick={(e) => {
              e.stopPropagation();
              isPlayOrPause(e, music);
              setPlay(true);
            }}
          />
        )}
        <picture>
          <source media='(max-width:720px)' srcSet={music.album.cover_medium} />
          <img
            className='music__image'
            src={music.album.cover_big}
            alt='Song thumbnail'
          />
        </picture>
      </div>
      <h2 className='music__title'>{music.title}</h2>
      <p className='music__parraph'>{music.artist.name}</p>
    </Link>
  );
};
export default Music;
