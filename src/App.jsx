import { useState } from "react";
import "./App.css";
import MusicListContainer from "./Components/Containers/MusicListContainer";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} />
      <MusicListContainer />
    </>
  );
}

export default App;
