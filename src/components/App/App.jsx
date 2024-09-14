import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import initionalContacts from "../../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedConts = localStorage.getItem("seved-contacts");
    if (!savedConts) return initionalContacts;
    return JSON.parse(savedConts);
  });

  useEffect(() => {
    localStorage.setItem("seved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search)
  );

  const addContact = (values) => {
    values.id = nanoid();
    setContacts((prevContacts) => {
      return [...prevContacts, values];
    });
  };

  const onDelete = (contactId) => {
    setContacts(() => {
      return contacts.filter(({ id }) => id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox serach={search} setSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
