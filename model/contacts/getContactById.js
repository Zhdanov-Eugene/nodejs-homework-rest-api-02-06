const { Contact } = require('../../model/schemas/contactsSchemas')

const getContactById = (id) => {
  return Contact.findOne({ _id: id })
}

module.exports = getContactById
