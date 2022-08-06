// var with yargs:
// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers");
// ----------------------------------


const { Command } = require("commander");
const program = new Command();
// program.version("9.4.0")

const contactsOperations = require("./db");

const invokeAction = async({action, id, name, email, phone})=> {
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
          const updateContact = await contactsOperations.updateById(id, name, email, phone);
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
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
// console.log(argv);

invokeAction(argv);

// ---------------------------------
// var with yargs:
// const arr = hideBin(process.argv);

// const {argv} = yargs(arr);

//  or var 2 with slise, not use hideBin
// const {argv} = yargs(process.argv.slice(2));

// invokeAction(argv);
