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
    } catch (e) {
        res.json({error: e.message});
    }
});

router.get("./contacts/:id", async (req, res)=> {
    try {
        const {id} = req.params;

        const contactsList = await getListContacts();
        const contact = contactsList.find((contact)=> String(user.id) === id);
        
        res.json(contact);
    } catch (e) {
        res.json({error: e.message});
    }
});

router.post("/contacts", async (req, res)=> {
    try {
        const body = req.body;
        
        const newContact = {id: crypto.randomUUID(), ...body};
        const contactsList = await getListContacts();
        contactsList.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contactsList));

        res.json(newContact);
    } catch (e) {
        res.json({error: e.message});
    }
});

router.put("./contacts/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const body = req.body;

        const contactsList = await getListContacts();

        const index = contactsList.findIndex((contact)=> String(user.id) === id);
        contactsList[index] = {...contactsList[index], ...body};

        await fs.writeFile(contactsPath, JSON.stringify(contactsList));

        res.json(contactsList[index]);
    } catch (e) {
        res.json({error: e.message});
    }
});

router.delete("./contacts/:id", async(req, res)=> {
    try {
        const {id} = req.params;

        const contactsList = await getListContacts();
        const updateContacts = contactsList.filter((contact)=> String(contact.id) !== id);

        await fs.writeFile(contactsPath, JSON.stringify(updateContacts));
        res.json({message: `User with id ${id} has been deleted`});   
    } catch (e) {
        res.json({error: e.message});
    }
});

module.exports = router;