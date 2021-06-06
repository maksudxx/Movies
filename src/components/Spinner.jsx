//este archivo lanza un efecto a la carga de la pagina
import { FaSpinner } from 'react-icons/fa';
import styles from './Spinner.module.css';


export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    )
}
