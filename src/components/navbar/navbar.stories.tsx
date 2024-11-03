// create storybook for navbar component
import { HashRouter } from "react-router-dom";
import { Navbar } from ".";

export default {
  component: Navbar,
  title: "Organisms/Navbar",
};

export const Default = () => {
  return (
    <HashRouter>
      <Navbar />
    </HashRouter>
  );
};
