let handler = async (m, {conn}) => {
     conn.reply(m.chat, `Bot ini menggunakan script github\n\nhttps://github.com/rizkyrahma/tesON\n\ndon't forget to give star ✨`, m) 
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


