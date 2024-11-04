import SearchInput from "@components/search-input";
import { Outlet } from "react-router-dom";

const SearchLayout = () => {
  return (
    <>
      <SearchInput />
      <Outlet />
    </>
  );
};

export default SearchLayout;
