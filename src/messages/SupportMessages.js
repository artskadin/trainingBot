class SupportMessages {
  greeting() {
    const message = 
      `Здравствуйте, вас приветствует бот, который поможет вам записаться на тренировку.`
    
    return message
  }

  enterName() {
    const message = `Введите ваше имя`

    return message
  }

  enterPhoneNumber() {
    const message = 'Нажмите на кнопку, чтобы отправить ваш номер телефона'

    return message
  }

  enterPhoneError() {
    const message = 'Пожалуйста, нажмите на кнопку, чтобы отправить ваш номер телефона'

    return message
  }

  signUpForTraining() {
    const message = 'Запишитесь на тренировку'

    return message
  }

  selectTrainingType() {
    const message = 'Выберите тип тренировки'

    return message
  }

  selectDate() {
    const message = 'Выберите ближайшую тренировку'

    return message
  }

  selectTime() {
    const message = 'Выберите время'

    return message
  }

  selectPayMethod() {
    const message = 'Пожалуйста, выберите способ оплаты'

    return message
  }

  successSignUp(ctx) {
    const message = 
      `Вы успешно зарегестрированы на тренировку.\n\n` +
      `${ctx.session.user.selectedDay}\n\n  в ${ctx.session.user.selectedTime}\n\n` +
      `Имя: ${ctx.session.user.name}\n\n` +
      `Номер телефона: ${ctx.session.user.phone}`
  }
}

module.exports = new SupportMessages()