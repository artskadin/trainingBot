const { Scenes } = require('telegraf')
const LoginController = require('../controllers/loginController')
const { LOGIN_WIZARD_SCENE, SIGN_UP_FOR_TRAINING } = require('./scenesList')
const SupportMessages = require('../messages/SupportMessages')
const { sendContactKeyboard, signUpForTrainingKeyboard } = require('../keyboards/keyboards')

const loginScene = new Scenes.WizardScene(
  LOGIN_WIZARD_SCENE,
  (ctx) => {
    ctx.session.user = {}

    ctx.reply(SupportMessages.greeting())
    ctx.reply(SupportMessages.enterName())

    return ctx.wizard.next()
  },
  async (ctx) => {
    const userName = ctx.message.text
    ctx.session.user.name = userName

    await ctx.reply(SupportMessages.enterPhoneNumber(), {reply_markup: sendContactKeyboard()})
    
    return ctx.wizard.next()
  },
  async (ctx) => {
    if (ctx.message?.contact?.phone_number === undefined) {
      ctx.reply(SupportMessages.enterPhoneError())
      return
    } 
    
    const phoneNumber = ctx.message.contact.phone_number
    ctx.session.user.phone = phoneNumber

    await ctx.reply(SupportMessages.signUpForTraining(), {reply_markup: signUpForTrainingKeyboard()})

    return ctx.wizard.next()
  },
  (ctx) => {
    return ctx.scene.enter(SIGN_UP_FOR_TRAINING)
  }
)

module.exports = loginScene