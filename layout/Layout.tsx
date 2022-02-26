import { ILayout } from "./Layout.props";
import styles from "./Layout.module.css";
import { Footer, Header, Sidebar } from "../components";
import { FunctionComponent } from "react";

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(prpos: T): JSX.Element {
    return (
      <Layout>
        <Component {...prpos} />
      </Layout>
    );
  };
};
