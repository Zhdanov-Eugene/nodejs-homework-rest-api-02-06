const { Contact } = require('../schemas/contactModel')

const getContactsList = () => {
  return Contact.find()
}

module.exports = getContactsList
