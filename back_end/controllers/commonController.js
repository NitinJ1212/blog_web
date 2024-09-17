


const { Contactus } = require('../models/ContactusModel')


// CONTACT US API

const newContactus = async (req, res) => {
    console.log("clledddddddddddddddd", req.body)
    try {
        const { name, phone, email, description } = req.body
        if (!phone || !description || !name) {
            res.status(400).send({ msg: "All Field are Mandatory.", status: false });
        }

        const newContact = new Contactus({
            phone: phone,
            name: name,
            description: description,
            email
        });
        console.log("weeeeeeeeeeeeeeeeee")

        const savedContact = await newContact.save();
        if (savedContact) res.status(200).send({ message: "Query created successfully", status: true });
        if (!savedContact) res.status(400).send({ message: "Something Went Wrong", status: false });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    newContactus
}