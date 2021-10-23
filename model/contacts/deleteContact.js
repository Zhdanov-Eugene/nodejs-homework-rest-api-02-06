const { Contact } = require('../../midlewares/validation/contactsSchemas')

const deleteContact = (id) => {
  return Contact.findByIdAndRemove({ _id: id })
}

module.exports = deleteContact
