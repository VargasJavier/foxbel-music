const baseURL = "https://deezerdevs-deezer.p.rapidapi.com";
const artists = ["bizarrap", "PZK", "bad%20bunny"];

// Obtenemos los datos y los mezclamos
export const getMusics = (setMusics) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0a45f52dbmsh11a35f1b242f729p12b701jsnf5544020b84c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  artists.forEach((artist) => {
    fetch(`${baseURL}/search?q=${artist}`, options)
      .then((response) => response.json())
      .then((response) => {
        const data = response.data.map((e) => {
          return { ...e, isPlay: false };
        });
        setMusics((prev) => {
          const array = [...prev, ...data];
          return sortArray(array);
        });
      })
      .catch((err) => console.error(err));
  });
};
// Función para mezclar
function sortArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// Obtenemos el valor del input y filtra según su valor
export const getValueSearch = (musics, search, setMusics) => {
  const musicsFilters = musics.filter((m) => {
    return (
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.album.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  setMusics(musicsFilters);
};
// Saber si la canción está en play o pause
export const isPlayOrPause = (e, music) => {
  music.isPlay = !music.isPlay;
};
