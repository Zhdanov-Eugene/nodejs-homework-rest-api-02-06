const { Contact } = require('../../midlewares/validation/contactsSchemas')

const addNewContact = (body) => {
  return Contact.create(body)
}

module.exports = addNewContact
