import styles from "../layout/Loading.module.css";
function Loading (){
    return(
        <div className={styles.Loader_container}>
            <div className={styles.Loader}></div>
        </div>
    )
} export default Loading;