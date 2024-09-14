import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ search, setSearch }) {
  const id = useId();
  return (
    <div className={css.wrap}>
      <input
        className={css.input}
        type="text"
        name="search"
        placeholder=""
        id={id}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.trim().toLowerCase());
        }}
      />
      <label className={css.label} htmlFor={id}>
        Find contacts
      </label>
    </div>
  );
}
