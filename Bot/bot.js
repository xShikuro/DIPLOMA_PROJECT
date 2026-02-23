import { Markup } from 'telegraf'

export const setupBot = (bot) => {
  bot.start((ctx) => {
    ctx.reply(
      "Hi there! 🎉 I'm the AI assistant for the Axios platform.\n" +
      "Choose an option below 👇",
      Markup.keyboard([
        ['📝 Register', '❓ How to use'],
        ['📄 About platform', 'ℹ️ FAQ'],
        ['🌐 Visit platform', '🆘 Support']
      ])
        .resize()
        .persistent()
    )
  })

  // ===== BASIC INFO =====
  bot.hears('❓ How to use', (ctx) => {
    ctx.reply(
      "Axios allows you to explore features, manage your account, and get AI-powered support."
    )
  })

  bot.hears('📄 About platform', (ctx) => {
    ctx.reply(
      "Axios is a modern web platform built with React and AI integration for smart assistance."
    )
  })

  bot.hears('ℹ️ FAQ', (ctx) => {
    ctx.reply(
      "FAQ:\n" +
      "• How to register\n" +
      "• How to log in\n" +
      "• How to get support\n\n" +
      "More features are coming soon 🚀"
    )
  })

  bot.hears('🌐 Visit platform', (ctx) => {
    ctx.reply(
      "You can visit the platform here:\nhttps://axios-platform.example",
    )
  })

  // ===== REGISTRATION FLOW (STUB) =====
  bot.hears('📝 Register', (ctx) => {
    ctx.reply(
      "To complete registration, please share your phone number 📱",
      Markup.keyboard([
        [Markup.button.contactRequest('📱 Send phone number')],
        ['⬅️ Back to menu']
      ])
        .resize()
        .oneTime()
    )
  })

  bot.on('contact', (ctx) => {
    ctx.reply(
      "✅ Thank you for registering!\n" +
      "Your phone number has been received.\n\n" +
      "Our team will contact you if needed 😊",
      Markup.keyboard([
        ['📝 Register', '❓ How to use'],
        ['📄 About platform', 'ℹ️ FAQ'],
        ['🌐 Visit platform', '🆘 Support']
      ])
        .resize()
        .persistent()
    )
  })

  bot.hears('⬅️ Back to menu', (ctx) => {
    ctx.reply(
      "Main menu 👇",
      Markup.keyboard([
        ['📝 Register', '❓ How to use'],
        ['📄 About platform', 'ℹ️ FAQ'],
        ['🌐 Visit platform', '🆘 Support']
      ])
        .resize()
        .persistent()
    )
  })

  // ===== SUPPORT =====
  bot.hears('🆘 Support', (ctx) => {
    ctx.reply(
      "Please describe your issue.\n" +
      "I'm here to help you 24/7 🤖"
    )
  })

  // ===== FALLBACK =====
  bot.on('text', (ctx) => {
    ctx.reply(
      "I'm here 😊 Use the menu below or ask a question."
    )
  })
}
