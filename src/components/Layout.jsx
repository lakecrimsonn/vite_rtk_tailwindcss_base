import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from "../styles";
const Layout = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
      </div>
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
