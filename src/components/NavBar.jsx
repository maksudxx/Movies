import {Search} from './Search';
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

export function NavBar(){
   return(
    <nav className={styles.navBar}>
        <Link to="/"><h1 className={styles.title}>Movies APP</h1></Link> 
        <Search/>
    </nav>
   ) 
   
}