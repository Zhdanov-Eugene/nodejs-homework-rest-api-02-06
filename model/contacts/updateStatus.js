const { Contact } = require('../schemas/contactModel')

const updateStatus = (id, body) => {
  return Contact.findByIdAndUpdate({ _id: id }, body, { new: true })
}

module.exports = updateStatus
