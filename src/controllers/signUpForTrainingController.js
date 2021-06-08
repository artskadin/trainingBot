const SupportMessages = require('../messages/SupportMessages')
const { selectTrainingTypeKeyboard, selectDayKeyboard, selectTimeKeyboard, selectPayMethodKeyboard } = require('../keyboards/keyboards')
const dayList = require('../helpData/dayList')
const timeList = require('../helpData/timeList')
 
class SignUpForTrainingController {
  selectTrainingType(ctx) {
    console.log(ctx.session.user)
    ctx.reply(SupportMessages.selectTrainingType(), {reply_markup: selectTrainingTypeKeyboard()})
  }

  singleTraining(ctx) {
    ctx.reply(SupportMessages.selectDate(), {reply_markup: selectDayKeyboard()})
  }

  async selectDate(ctx) {
    const day = dayList.find(day => day.callback_data === ctx.callbackQuery.data).text
    ctx.session.user.selectedDay = day

    await ctx.editMessageText(SupportMessages.selectTime(), {reply_markup: selectTimeKeyboard()})
  }

  async selectPayMethod(ctx) {
    const selectedTime = timeList.find(time => time.callback_data === ctx.callbackQuery.data).text
    ctx.session.user.selectedTime = selectedTime

    await ctx.reply(SupportMessages.selectPayMethod(), {reply_markup: selectPayMethodKeyboard()})
  }

  payWithCard(ctx) {
    ctx.reply('Вы оплатили')
    // не реализовано
  }

  async successSignUp(ctx) {
    await ctx.reply(SupportMessages.successSignUp(ctx))
  }
}

module.exports = new SignUpForTrainingController()