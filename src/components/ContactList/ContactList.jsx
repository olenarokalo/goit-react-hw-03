import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((data) => (
        <Contact key={data.id} data={data} onDelete={onDelete} />
      ))}
    </ul>
  );
}
