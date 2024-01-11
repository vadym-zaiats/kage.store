import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles["preloader-container"]}>
      <div className={styles["preloader"]}></div>
    </div>
  );
};
