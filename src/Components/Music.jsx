import { BiPlay as PlayIcon } from "react-icons/bi";
import { IoMdPause as PauseIcon } from "react-icons/io";
import { isPlayOrPause } from "../Helpers/getMusics";

const Music = ({ music, isPlay, setPlay }) => {
  return (
    <article className='music'>
      <div className='music__container-image'>
        {music.isPlay && isPlay ? (
          <>
            <PauseIcon
              className='music__icon music__icon-pause'
              onClick={(e) => {
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
              isPlayOrPause(e, music);
              setPlay(true);
            }}
          />
        )}
        <img
          className='music__image'
          src={music.album.cover_medium}
          alt='Song thumbnail'
        />
      </div>
      <h2 className='music__title'>{music.title}</h2>
      <p className='music__parraph'>{music.artist.name}</p>
    </article>
  );
};
export default Music;
