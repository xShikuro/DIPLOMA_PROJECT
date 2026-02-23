import { Telegraf } from 'telegraf'
import 'dotenv/config'
import { setupBot } from './bot.js'

const bot = new Telegraf(process.env.BOT_TOKEN)

setupBot(bot)

bot.launch()
console.log('🤖 Telegram bot is running')
