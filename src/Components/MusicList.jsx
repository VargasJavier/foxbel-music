import Music from "./Music";

const MusicList = ({ musics, isPlay, setPlay }) => {
  console.log(musics);
  return (
    <div className='container container__musics'>
      {musics ? (
        musics.map((music, i) => (
          <Music key={i} music={music} isPlay={isPlay} setPlay={setPlay} />
        ))
      ) : (
        <p>No hay registros</p>
      )}
    </div>
  );
};
export default MusicList;
