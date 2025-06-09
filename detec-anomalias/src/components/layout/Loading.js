import styles from "../layout/Loading.module.css";
function Loading (){
    return(
        <div className={styles.Loading_container}>
            <div className={styles.loader}></div>
        </div>
    )
} export default Loading;