import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./page.module.scss";

type Props = PropsWithChildren<{
  title?: string;
  className?: string;
  header?: React.ReactNode;
}>;

const PageContainer: React.FC<Props> = ({
  title,
  header,
  children,
  className,
}) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{title ? `Sahaa | ${title}` : `Sahaa`}</title>
      </Helmet>
      {header && <header className={styles.header}>{header}</header>}
      <main className={className}>{children}</main>
    </div>
  );
};

export default PageContainer;
