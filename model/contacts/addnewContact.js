const { Contact } = require('../../model/schemas/contactsSchemas')

const addNewContact = (body) => {
  return Contact.create(body)
}

module.exports = addNewContact
