import { useState } from "react";
import { Link } from "react-router-dom";
import { BiPlay as PlayIcon } from "react-icons/bi";
import { IoMdPause as PauseIcon } from "react-icons/io";
import { BsFillArrowLeftCircleFill as BackIcon } from "react-icons/bs";
import { FaRegHeart as LikeIcon } from "react-icons/fa";
import { IoRepeatOutline as RepeatIcon } from "react-icons/io5";

const MusicItem = ({ item }) => {
  const [isPlay, setIsPlay] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const { title, preview } = item;
  return (
    <>
      {item.album ? (
        <section className='wrapper'>
          <section className='wrapper__top wrapper__flex'>
            <Link to='/'>
              <BackIcon className='icon' />
            </Link>
            <span className='wrapper_msg'>Now playing</span>
            <span></span>
          </section>
          <section className='wrapper__images'>
            <img className='wrapper__image' src={item.album.cover_medium} />
          </section>
          <section className='wrapper__details'>
            <h2 className='wrapper__title'>{title}</h2>
            <p className='wrapper__name'>{item.artist.name}</p>
          </section>
          <section className='wrapper__progress'>
            <section className='wrapper__bar'>
              <span className='wrapper__bar-span'></span>
            </section>
            <section className='wrapper__timer wrapper__flex'>
              <span className='wrapper__current'>0:00</span>
              <span className='wrapper__current'>0:30</span>
            </section>
          </section>
          <section className='wrapper__controls wrapper__flex'>
            {isLike ? (
              <LikeCompleteIcon className='wrapper__like wrapper_icon' />
            ) : (
              <LikeIcon className='wrapper__like wrapper_icon' />
            )}
            {isPlay ? (
              <div className='wrapper__container-icon'>
                <PlayIcon className='wrapper__play-pause wrapper_icon' />
                <audio
                  src={preview}
                  className='wrapper__audio hidden'
                  autoPlay
                  controls
                ></audio>
              </div>
            ) : (
              <div className='wrapper__container-icon'>
                <PauseIcon className='wrapper__play-pause wrapper_icon' />
              </div>
            )}
            <RepeatIcon className='wrapper__repeat wrapper_icon' />
          </section>
        </section>
      ) : (
        <>
          <p>No se encontró</p>
        </>
      )}
    </>
  );
};
export default MusicItem;
