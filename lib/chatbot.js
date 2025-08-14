const { cmd } = require('../command');
const store = require('../data/store');

cmd({
    pattern: 'chatbot ?(.*)',
    desc: 'Enable or disable ChatGPT replies in this chat',
    category: 'ai',
    filename: __filename,
    fromMe: true
}, async (message, match) => {
    const input = match.trim().toLowerCase();

    if (!['on', 'off'].includes(input)) {
        return await message.reply('⚙️ Use `.chatbot on` or `.chatbot off`');
    }

    const chatId = message.jid;
    store.chatbot = store.chatbot || {};
    store.chatbot[chatId] = input === 'on';

    await message.reply(`🤖 ChatGPT replies *${input === 'on' ? 'enabled' : 'disabled'}* in this chat.`);
});
