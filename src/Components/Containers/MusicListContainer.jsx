import { useEffect, useState } from "react";
import { getMusics, getValueSearch } from "../../Helpers/getMusics";
import MusicList from "../MusicList";
import Search from "../Search";

const MusicListContainer = () => {
  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState("");
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    search ? getValueSearch(musics, search, setMusics) : getMusics(setMusics);
  }, [search]);

  useEffect(() => {}, [isPlay]);

  return (
    <>
      <Search setSearch={setSearch} />
      <MusicList musics={musics} isPlay={isPlay} setPlay={setPlay} />
    </>
  );
};

export default MusicListContainer;
