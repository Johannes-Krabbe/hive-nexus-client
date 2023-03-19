import styles from "./loading-spinner.module.scss";

// TODO: fix all loading spinner instances
export const LoadingSpinner = () => {
  return (
    <div className={styles.Loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
