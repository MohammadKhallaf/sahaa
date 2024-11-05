import { Navbar } from "@components/navbar";
import { Outlet } from "react-router-dom";
import styles from "./root.module.scss";
import { NetworkStatus } from "@components/network-status/network-status";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <NetworkStatus />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
