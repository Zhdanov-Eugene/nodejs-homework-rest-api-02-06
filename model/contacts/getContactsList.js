const { Contact } = require('../../midlewares/validation/contactsSchemas')

const getContactsList = () => {
  return Contact.find()
}

module.exports = getContactsList
