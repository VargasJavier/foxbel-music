const Music = ({ music }) => {
  return (
    <article className='music'>
      <div className='music__container-image'>
        <img
          className='music__image'
          src={music.album.cover}
          alt='Song thumbnail'
        />
      </div>
      <h2 className='music__title'>{music.title}</h2>
      <p className='music__parraph'>{music.artist.name}</p>
    </article>
  );
};
export default Music;
