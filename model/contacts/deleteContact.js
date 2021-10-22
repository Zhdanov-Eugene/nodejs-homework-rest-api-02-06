const { Contact } = require('../schemas/contactModel')

const deleteContact = (id) => {
  return Contact.findByIdAndRemove({ _id: id })
}

module.exports = deleteContact
