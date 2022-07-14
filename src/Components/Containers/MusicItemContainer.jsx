import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMusic } from "../../hooks/useGetMusics";
import MusicItem from "../MusicItem";

const MusicItemContainer = () => {
  const [item, setItem] = useState({});
  //Lógica para recibir el ID
  const { musicId } = useParams();
  console.log(musicId);

  useEffect(() => {
    useGetMusic(musicId, setItem);
  }, [musicId]);

  return <MusicItem item={item} />;
};
export default MusicItemContainer;
