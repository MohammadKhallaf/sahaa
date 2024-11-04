import styles from "./search-input.module.scss";

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search keyword"
        className={styles.container}
      />
    </div>
  );
};

export default SearchInput;
