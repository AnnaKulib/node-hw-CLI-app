const contactsOperations = require("./db");

/* 
1. Отримати всі контакти - contactsOperations.getAll
2. Отримати контакт по id - contactsOperations.getById
3. Додати контакт - contactsOperations.add
4. Оновити контакт по id - contactsOperations.updateById
5. Видалити контакт по id - contactsOperations.removeById
*/
// console.log(__dirname);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const contactsList = await contactsOperations.getAll();
      console.log(contactsList);
      break;
    case "getById":
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.add(name, email, phone);
      //   console.log(newContact);
      break;
    case "updateById":
      const updateContact = await contactsOperations.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(updateContact);
      break;
    case "removeById":
      const removeContact = await contactsOperations.removeById(id);
      console.log(removeContact);
      break;

    default:
      console.log("Unknown action");
      break;
  }
};

// invokeAction({action: "getAll"}) тимчасово бо працює

// const id = "10";
// invokeAction({ action: "getById", id }); тимчасово бо працює

// invokeAction({ action: "add", name: "Ann Kulib", email: "ann.kul@mail.com", phone: "(000)-111-2222" });
// invokeAction({ action: "add", name: "Rus Kulib", email: "rus.kul@mail.com", phone: "(000)-111-2222" });

const updateId = "10";
const updateData = {
  name: "Lec Howard",
  email: "Donec.elementum@scelerisquescelerisquedui.net",
  phone: "(748) 206-2688",
};

invokeAction({ action: "updateById", id: updateId, data: updateData }); // data is bot defined

invokeAction({ action: "removeById", id: updateId }); // data is bot defined

// console.log(process.argv);
// const contactsPath = path("contacts.json");

// fs и его методы readFile() и writeFile()

// module.exports
