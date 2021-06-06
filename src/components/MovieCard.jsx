import styles from "./MovieCard.module.css";
import {Link} from "react-router-dom";

export function MovieCard({ movie }) {
  const IMG = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={'/movies/' + movie.id}>
      <img
        src={IMG}
        alt={movie.title}
        className={styles.movieImg}
        width={230}
        height={345}
      />
      </Link>
      <div>{movie.title}</div>
    </li>
  );
}
