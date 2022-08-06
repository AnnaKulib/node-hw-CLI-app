const getListContacts = require("./getListContacts");
const updateContactsList = require("./updateContactsList");

const updateContactById = async(id, name, email, phone) => {
    const contactsList = await getListContacts();
    
    const updateData = {
        name,
        email,
        phone,
      };

    const idx = contactsList.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    contactsList[idx] = {id, ...updateData};
    await updateContactsList(contactsList);
    return contactsList[idx];
}

module.exports = updateContactById;