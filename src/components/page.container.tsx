import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

type Props = PropsWithChildren<{
  title?: string;
}>;

const PageContainer: React.FC<Props> = ({ title = "Sahaa", children }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `Sahaa | ${title}` : `Sahaa`}</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageContainer;
