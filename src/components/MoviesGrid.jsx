import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard.jsx';
import styles from './MoviesGrid.module.css';
import { get } from '../utils/httpClient.js';
import { Spinner } from './Spinner.jsx';
import { useQuery } from '../hooks/useQuery.js';

export function MoviesGrid(){

    const [movies, setMovies] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); //sirve para la animacion de load en las cards
    const query = useQuery();
    const search = query.get('search')

     useEffect(()=>{
         setIsLoading(true);
         const searchUrl= search ? '/search/movie?query=' +search : '/discover/movie'
         get(searchUrl).then((data) =>{
            setMovies(data.results)
            setIsLoading(false)
        })
    },[search]);

    if(isLoading){
        return <Spinner/>
    }
   
    return (
        //traemos las movies del json y las renderizamos en un li usando la funcion map
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=>(
               <MovieCard key={movie.id} movie={movie}/>   //le agregamos una key para identificar a cada card y mandamos como props el json de movies
            ))}
        </ul>
    )
}