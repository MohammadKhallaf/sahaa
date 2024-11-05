import { Link } from "react-router-dom";
import styles from "./side-list.module.scss";

type Props = {
  title: string;
  list: {
    title: string;
    to: string;
  }[];
};

const SideList = ({ title, list }: Props) => {
  return (
    <aside className={styles.container}>
      <h4>{title}</h4>
      <ul>
        {list.map((item) => (
          <li key={item.title}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideList;
