const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_TOKEN } = process.env

sgMail.setApiKey(SENDGRID_TOKEN)

const sendEmail = async(data) => {
  const email = { ...data, from: 'tolikprofatilov228@gmail.com' }
  try {
    await sgMail.send(email)
    return true
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendEmail
