import styles from "../layout/Loading.module.css";
import {ClipLoader} from "react-spinners";
function Loading (){
    return(
        <div className={styles.Loader_container}>
            <ClipLoader size={35} color="#50C878" className={styles.loader}/>
        </div>
    )
} export default Loading;