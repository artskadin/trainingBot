const { Scenes } = require('telegraf')
const SignUpForTrainingController = require('../controllers/signUpForTrainingController')
const { SIGN_UP_FOR_TRAINING } = require('./scenesList')
const SupportMessages = require('../messages/SupportMessages')
const dayList = require('../helpData/dayList')

const signUpForTrainingScene = new Scenes.BaseScene(SIGN_UP_FOR_TRAINING)

signUpForTrainingScene.enter(ctx => SignUpForTrainingController.selectTrainingType(ctx))
signUpForTrainingScene.hears('Одна тренировка', ctx => SignUpForTrainingController.singleTraining(ctx))
signUpForTrainingScene.action(/^select_day_/, ctx => SignUpForTrainingController.selectDate(ctx))
signUpForTrainingScene.action(/^select_time_/, ctx => SignUpForTrainingController.selectPayMethod(ctx))
signUpForTrainingScene.action('pay_with_card', ctx => SignUpForTrainingController.payWithCard(ctx))

module.exports = signUpForTrainingScene 