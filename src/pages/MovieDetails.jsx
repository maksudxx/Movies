import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect , useState} from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";

export function MovieDetails() {

  const { movieId } = useParams(); //este es el parametro que viene de la ruta
  const  [isLoading, setIsLoading] = useState(null); //imagen de load
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    setIsLoading(true) 
    get("/movie/" + movieId).then((data) => {
    setIsLoading(false)
      setMovie(data);
    });
  }, [movieId]);

  if(isLoading){ 
    return <Spinner/>
  }

  if (!movie) {
    return null;
  }

  const IMG = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        src={IMG}
        alt={movie.title}
        className={`${styles.column} ${styles.img}`}
      />
      <div className={`${styles.column} ${styles.movieDetails}`}>
        <p className={styles.title}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          {/* traemos los nombres de los generos que estan dentro de un arreglo usando la funcion map */}
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Genres: </strong>  {movie.genres.map((genre) => genre.name)}
        </p>
      </div>
    </div>
  );
}
