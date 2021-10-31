const { Contact } = require('../../model/schemas/contactsSchemas')

const deleteContact = (id) => {
  return Contact.findByIdAndRemove({ _id: id })
}

module.exports = deleteContact
