// const getListContacts = require("./getListContacts");
// const updateContactsList = require("./updateContactsList");

// const removeContactById = async(id) => {
//     const contactsList = await getListContacts();
//     const idx = contactsList.findIndex(item => item.id === id);
//     if(idx === -1){
//         return null;
//     }
//     const [removeContact] = contactsList.splice(idx, 1);
//     await updateContactsList(contactsList);
//     return removeContact;
    
// }

// module.exports = removeContactById;