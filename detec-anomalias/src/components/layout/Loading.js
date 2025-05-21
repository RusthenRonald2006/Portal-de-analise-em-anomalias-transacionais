import loading from "../img/loading.svg"
import styles from "./Loading.module.css"
import ClipLoader from "react-spinners/ClipLoader";

function Loading (){
    return(
        <div className={styles.loader_container}>
            <ClipLoader color="#50C878" loading={true} size={35} className={styles.loader}/>
        </div>
    )
} export default Loading;