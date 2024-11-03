import { Navbar } from "@components/navbar";
import { Outlet } from "react-router-dom";
import styles from "./root.module.scss";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
