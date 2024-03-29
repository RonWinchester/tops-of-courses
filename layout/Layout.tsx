import { ILayout } from "./Layout.props";
import styles from "./Layout.module.css";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContex } from "../context/app.context";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Up } from "../components";

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContex>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(prpos: T): JSX.Element {
    return (
      <AppContextProvider menu={prpos.menu} firstCategory={prpos.firstCategory}>
        <Layout>
          <Component {...prpos} />
        </Layout>
      </AppContextProvider>
    );
  };
};
