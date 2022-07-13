import Music from "./Music";
import SkeletonList from "./SkeletonList";

const MusicList = ({ musics, isPlay, setPlay }) => {
  return (
    <div className='container container__musics'>
      {musics ? (
        musics.map((music, i) => (
          <Music key={i} music={music} isPlay={isPlay} setPlay={setPlay} />
        ))
      ) : (
        <SkeletonList />
      )}
    </div>
  );
};
export default MusicList;
