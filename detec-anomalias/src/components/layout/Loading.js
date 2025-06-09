import styles from "../layout/Loading.module.css";
import {ClipLoader} from "react-spinners";
function Loading (){
    return(
        <>
            <ClipLoader size={35} color="#50C878" className={styles.loader}/>
        </>
    )
} export default Loading;