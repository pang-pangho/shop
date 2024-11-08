import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
