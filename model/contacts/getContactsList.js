const { Contact } = require('../../model/schemas/contactsSchemas')

const getContactsList = () => {
  return Contact.find()
}

module.exports = getContactsList
