const { Contact } = require('../schemas/contactModel')

const addNewContact = (body) => {
  return Contact.create(body)
}

module.exports = addNewContact
