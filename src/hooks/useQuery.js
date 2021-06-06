import {useLocation} from 'react-router' 
 
 //hook personalizado

 export function useQuery(){
    return new URLSearchParams(useLocation().search)
}