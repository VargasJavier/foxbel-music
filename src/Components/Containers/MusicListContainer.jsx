import { useEffect, useState } from "react";
import { useGetMusics } from "../../hooks/useGetMusics";
import MusicList from "../MusicList";
import Search from "../Search";

const MusicListContainer = () => {
  const [musics, setMusics] = useState([]);
  const [musicsSearch, setMusicsSearch] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    search
      ? useGetMusics(musics, setMusics, search)
      : useGetMusics(musics, setMusics);
  }, [search]);

  useEffect(() => {}, [isPlay]);

  return (
    <>
      <Search setSearch={setSearch} value={value} setValue={setValue} />
      <MusicList musics={musics} isPlay={isPlay} setPlay={setPlay} />
    </>
  );
};

export default MusicListContainer;
