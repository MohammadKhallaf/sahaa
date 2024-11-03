import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

type Props = PropsWithChildren<{
  title?: string;
  header?: React.ReactNode;
  className?: string;
}>;

const PageContainer: React.FC<Props> = ({
  title,
  header,
  className,
  children,
}) => {
  return (
    <div>
      <Helmet>
        <title>{title ? `Sahaa | ${title}` : `Sahaa`}</title>
      </Helmet>
      {header && <header>{header}</header>}
      <main className={className}>{children}</main>
    </div>
  );
};

export default PageContainer;
