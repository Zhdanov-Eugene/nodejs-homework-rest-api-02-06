const getContactsList = require('./getContactsList')
const getContactById = require('./getContactById')
const deleteContact = require('./deleteContact')
const addNewContact = require('./addnewContact')
const updateContact = require('./updateContact')
const updateStatus = require('./updateStatus')

module.exports = {
  getContactsList,
  getContactById,
  deleteContact,
  addNewContact,
  updateContact,
  updateStatus
}
