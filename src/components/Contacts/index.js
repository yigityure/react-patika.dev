import { useState, useEffect } from "react";

import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Yiğit",
      phone_number: "123456",
    },
    {
      fullname: "Mehmet",
      phone_number: "325345",
    },
    {
      fullname: "Ahmet",
      phone_number: "979658",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
