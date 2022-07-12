import { useEffect, useState } from "react";
import { getMusics, getValueSearch } from "../../Helpers/getMusics";
import MusicList from "../MusicList";
import Search from "../Search";

const MusicListContainer = () => {
  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search ? getValueSearch(musics, search, setMusics) : getMusics(setMusics);
  }, [search]);

  return (
    <>
      <Search setSearch={setSearch} />
      <MusicList musics={musics} />
    </>
  );
};

export default MusicListContainer;
