const {  Markup } = require('telegraf')

const sendContactKeyboard = () => {
  return Markup.keyboard([
    [{text: 'Отправить номер телефона', request_contact: true}]
  ]).oneTime(true).resize(true).reply_markup
}

const signUpForTrainingKeyboard = () => {
  return Markup.keyboard([
    ['Записаться на тренировку']
  ]).oneTime(true).resize(true).reply_markup
}

const selectTrainingTypeKeyboard = () => {
  return Markup.keyboard([
    ['Одна тренировка'], 
    ['Пакет тренировок']
  ]).oneTime(true).resize(true).reply_markup
}

const selectDayKeyboard = () => {
  return Markup.inlineKeyboard([
    [{text: 'Вторник (07:00, 08:00)', callback_data: 'select_day_2'}],
    [{text: 'Четверг (07:00, 08:00)', callback_data: 'select_day_4'}],
    [{text: 'Суббота (07:00, 08:00)', callback_data: 'select_day_6'}]
  ]).reply_markup
}

const selectTimeKeyboard = () => {
  return Markup.inlineKeyboard([
    [
      {text: '07:00', callback_data: 'select_time_0700'},
      {text: '08:00', callback_data: 'select_time_0800'}
    ]
  ]).reply_markup
}

const selectPayMethodKeyboard = () => {
  return Markup.inlineKeyboard([
    [{text: 'Оплатить с помощью карты', callback_data: 'pay_with_card'}],
    [{text: 'Использовать купленный пакет', callback_data: 'pay_with'}]
  ]).reply_markup
}

module.exports = {
  sendContactKeyboard,
  signUpForTrainingKeyboard,
  selectTrainingTypeKeyboard,
  selectDayKeyboard,
  selectTimeKeyboard,
  selectPayMethodKeyboard
}