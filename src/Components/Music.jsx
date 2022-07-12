import { BiPlay as PlayIcon } from "react-icons/bi";

const Music = ({ music }) => {
  return (
    <article className='music'>
      <div className='music__container-image'>
        <PlayIcon className='music__icon' />
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
