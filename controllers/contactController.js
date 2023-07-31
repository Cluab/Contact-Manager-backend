const getContacts = async (req, res) => {
  res.status(200).json({ message: 'Get All Contacts' });
};

const getContact = async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const createContact = async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('all fields are mandatory');
  }
  res.status(201).json({ message: 'Crate Contacts' });
};

const updateContact = async (req, res) => {
  res.status(201).json({ message: `update contact for ${req.params.id}` });
};

const deleteContact = async (req, res) => {
  res.status(201).json({ message: `delete contact with ${req.params.id} id` });
};

module.exports = {
  getContacts,
  getContact,
  deleteContact,
  createContact,
  updateContact,
  deleteContact,
};
