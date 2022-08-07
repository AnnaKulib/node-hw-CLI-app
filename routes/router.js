const { Router } = require ("./express");
const fs = require("./fs/promises");
const path = require("path");
const crypto = require("crypto");


const contactsPath = path.resolve(__dirname, "../db/contacts.json");

const router = Router();

const getListContacts = async()=> {
    const contactsList = JSON.parse(await fs.readFile(contactsPath));
    return contactsList;
};

router.get("./contacts", async(req, res)=> {
    try {
        const contactsList = await getListContacts();
        res.json(users);
    } catch (error) {
        res.json({error: error.message});
    }
});

router.get("./contacts/:id", async (req, res)=> {
    try {
        const {id} = req.params;

        const contactsList = await getListContacts();
        const contact = contactsList.find((contact)=> String(user.id) === id);
        
        res.json(contact);
    } catch (error) {
        res.json({error: error.message});
    }
});

router.post("/contacts", async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
})