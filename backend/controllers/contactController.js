import Contact from "../models/Contact.js";

// POST: create contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: fetch all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE: remove contact
export const deleteContact = async(req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if(!contact) {
            return res.status(404).json({ message: "Contact not found"});
        }

        await contact.deleteOne();
        res.json({message: "Contact deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};