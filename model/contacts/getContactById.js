const { Contact } = require('../schemas/contactModel')

const getContactById = (id) => {
  return Contact.findOne({ _id: id })
}

module.exports = getContactById
