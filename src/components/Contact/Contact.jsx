import css from "./Contact.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Contact({ data: { name, number, id }, onDelete }) {
  console.log(id);
  return (
    <li className={css.item}>
      <ul>
        <li className={css.itemContact}>
          <FaUserCircle />
          <p>{name}</p>
        </li>
        <li className={css.itemContact}>
          <MdOutlinePhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
