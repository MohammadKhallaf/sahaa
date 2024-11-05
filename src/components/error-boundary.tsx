import styles from "./error-boundary.module.scss";
import { useNavigate, useRouteError } from "react-router-dom";
import cn from "clsx";

interface ErrorBoundaryProps {
  isRoot?: boolean;
}

const ErrorBoundary = ({ isRoot }: ErrorBoundaryProps) => {
  const error = useRouteError() as { status: number };
  const navigate = useNavigate();

  let errorText: JSX.Element;

  switch (error.status) {
    case 404:
      errorText = (
        <>
          <span className={styles["status-code"]}>404</span>
          <span className={styles.message}>This page doesn't exist!</span>
        </>
      );
      break;

    case 401:
      errorText = (
        <div className={styles.message}>You aren't authorized to see this</div>
      );
      break;

    case 503:
      errorText = (
        <div className={styles.message}>Looks like our API is down</div>
      );
      break;

    default:
      errorText = (
        <>
          <span className={styles.warning}>⚠️</span>
          <span className={styles.message}>Something went wrong</span>
        </>
      );
  }

  return (
    <div
      className={cn(
        styles.container,
        isRoot ? styles["full-screen"] : styles["full-content"]
      )}
    >
      <div className={styles["error-content"]}>{errorText}</div>
      <div className={styles["button-group"]}>
        <button
          className={styles["button-contained"]}
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <button
          className={styles["button-outlined"]}
          onClick={() => navigate("/")}
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
