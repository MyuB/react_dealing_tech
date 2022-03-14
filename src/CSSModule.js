import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      this block is <span className="something">css module</span>
    </div>
  );
};

export default CSSModule;
