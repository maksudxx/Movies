import styles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {

  const query = useQuery();
  const search = query.get('search');
  const [searchText, setSearchText] = useState(""); //añadimos este estado para controlar todo lo que ingresamos en elinput text
  const history = useHistory(); //el objeto history cambia el elemento de la ruta

  //este use efect limpiaa el input text cuando estamos en la /
  useEffect(() => {
      setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchText){
        history.push("/?search=" + searchText);
    }else{
        alert("Ingrese una pelicula")
    }
    
  };



  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FcSearch size={20} />
        </button>
      </div>
    </form>
  );
}
