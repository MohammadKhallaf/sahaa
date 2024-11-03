import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

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
