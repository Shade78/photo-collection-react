import React from "react";
import { Collection } from "./Collection";
import "./index.scss";

function App() {
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    fetch("https://66c25831f83fffcb587bbc9a.mockapi.io/photo_collections")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      });
  }, []);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {collections.map((obj, index) => {
          return <Collection key={index} name={obj.name} images={obj.photos} />;
        })}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
