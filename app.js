// const { Command } = require("commander");
// const program = new Command();

// const contactsOperations = require("./contactsOperations");

// const invokeAction = async({action, id, name, email, phone})=> {
//     switch (action) {
//         case "getListContacts":
//           const contactsList = await contactsOperations.getListContacts();
//           console.log(contactsList);
//           break;
//         case "getContactById":
//           const contact = await contactsOperations.getContactById(id);
//           if (!contact) {
//             throw new Error(`Product with id=${id} not found`);
//           }
//           console.log(contact);
//           break;
//         case "addContact":
//           const newContact = await contactsOperations.addContact(name, email, phone);
//           console.log(newContact);
//           break;
//         case "updateContactById":
//           const updateContact = await contactsOperations.updateContactById(id, name, email, phone);
//           if (!updateContact) {
//             throw new Error(`Product with id=${id} not found`);
//           }
//           console.log(updateContact);
//           break;
//         case "removeContactById":
//           const removeContact = await contactsOperations.removeContactById(id);
//           console.log(removeContact);
//           break;
    
//         default:
//           console.log("Unknown action");
//           break;
//       }
// }

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// invokeAction(argv);
