import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwide Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;