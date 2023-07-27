const getContacts = (req, res) => {
  res.status(200).json({ message: 'Get All Contacts' });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const createContact = (req, res) => {
  res.status(200).json({ message: 'Crate Contacts' });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact with ${req.params.id} id` });
};

module.exports = {
  getContacts,
  getContact,
  deleteContact,
  createContact,
  updateContact,
  deleteContact,
};
