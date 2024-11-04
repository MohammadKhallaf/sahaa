import { EROUTES } from "@app/constants";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import styles from "./search-input.module.scss";

const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const debouncedUpdate = useCallback(
    debounce((value: string) => {
      if (value && value.length >= 3) searchParams.set("query", value);
      else searchParams.delete("query");

      setSearchParams(searchParams);
    }, 500),
    [searchParams, setSearchParams]
  );

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);

      if (newValue.length >= 3 && !pathname.includes("search")) {
        navigate(EROUTES.SEARCH, { replace: true });
      }

      debouncedUpdate(newValue);
    },
    [debouncedUpdate, navigate, pathname]
  );

  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) setValue(queryParam);
  }, [searchParams]);

  useEffect(() => {
    if (!pathname.includes("search")) {
      setValue("");
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("query");
      setSearchParams(newSearchParams);
    }

    if (searchInputRef.current && pathname.includes("search")) {
      searchInputRef.current.focus();
    }
  }, [pathname, searchParams, setSearchParams]);

  useEffect(() => {
    return () => {
      debouncedUpdate.cancel();
    };
  }, [debouncedUpdate]);

  return (
    <div className={styles.container}>
      <div className={styles["input-container"]}>
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search keyword"
          value={value}
          onChange={onValueChange}
        />
        <MdOutlineSearch className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchInput;
