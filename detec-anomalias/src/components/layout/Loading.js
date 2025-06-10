import styles from "../layout/Loading.module.css";
import { LoaderCircle } from 'lucide-react'
function Loading (){
    return(
        <>
            <LoaderCircle size={35} color="#50C878" className={styles.spinner} />
        </>
    )
} export default Loading;