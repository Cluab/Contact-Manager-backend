const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Get All Contacts' });
});

router.route('/:id').get((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

router.route('/').post((req, res) => {
  res.status(200).json({ message: 'Crate Contacts' });
});

router.route('/:id').put((req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

router.route('/:id').delete((req, res) => {
  res.status(200).json({ message: `delete contact with ${req.params.id} id` });
});

module.exports = router;
