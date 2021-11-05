const { Contact } = require('../../model/schemas/contactsSchemas')

const updateContact = (id, body) => {
  return Contact.findByIdAndUpdate({ _id: id }, body, { new: true })
}

module.exports = updateContact
