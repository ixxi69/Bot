/**
   * Create By ixxi🍏.
   * Contact Me on wa.me/51959719359
   * Follow https://github.com/ixxi69
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['51959719359','2347069516058','51959719359','51959719359']
global.premium = ['51959719359']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.sessionName = 'ixxi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🍏'
global.mess = {
    success: '✓ Success',
    admin: 'solo admistrador!',
    botAdmin: 'debo ser administrador primero!',
    owner: 'solo Owner Bot',
    group: '¡Característica utilizada solo para grupos!',
    private: 'Funciones utilizadas solo para chat privado',
    bot: 'Funciones especiales del usuario del número de bot',
    wait: 'Loading...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.mp4')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
