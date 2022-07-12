import { useEffect, useState } from "react";
import { getMusics } from "../../Helpers/getMusics";
import MusicList from "../MusicList";

const MusicListContainer = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics(setMusics);
  }, []);

  return <MusicList musics={musics} />;
};

export default MusicListContainer;
