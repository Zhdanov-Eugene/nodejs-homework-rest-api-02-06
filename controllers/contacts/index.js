const getContacts = require('./getContacts')
const getById = require('./getById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateContact = require('./updateContact')
const updateStatus = require('./updateStatus')

module.exports = {
  getContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateStatus
}
