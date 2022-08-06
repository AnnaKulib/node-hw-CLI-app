const { v4 } = require("uuid");

const getListContacts = require("./getListContacts");
const updateContactsList = require("./updateContactsList");

const addContact = async (name, email, phone) => {
  const contactsList = await getListContacts();

  const newData = {
    name,
    email,
    phone,
  };

  const newContact = { id: v4(), ...newData };
  contactsList.push(newContact);
  console.log(contactsList);
  await updateContactsList(contactsList);
  return newContact;
};

module.exports = addContact;
