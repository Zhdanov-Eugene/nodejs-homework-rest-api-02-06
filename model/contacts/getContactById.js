const { Contact } = require('../../midlewares/validation/contactsSchemas')

const getContactById = (id) => {
  return Contact.findOne({ _id: id })
}

module.exports = getContactById
