'use strict';

/**
 * A set of functions called "actions" for `adminemail`
 */

module.exports = {
   async index(ctx, next){
    const body = ctx.request.body
    const sendTo = 'amjadiqbalkhanniazi@gmail.com'
    const username=body.username
   
    //strapi.log.debug(`Trying to send an email to ${sendTo}`)
    try {
      const emailOptions = {
        to: sendTo,
        subject: `A new user named ${username} has be registered at irfanshehzad.org`,
        html: `<h1>A new user has been registered!</h1><p>A new user ${username} has been registerd at irfanshahzad.org</p>`
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  }
};
