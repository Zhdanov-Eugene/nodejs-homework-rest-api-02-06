const { Contact } = require('../../midlewares/validation/contactsSchemas')

const updateStatus = (id, body) => {
  return Contact.findByIdAndUpdate({ _id: id }, body, { new: true })
}

module.exports = updateStatus
