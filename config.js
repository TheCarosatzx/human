
const fs = require('fs')
const chalk = require('chalk')

//_________ PREMIUM USER__________//
global.premium = ["37122219115","6287743875928","+6288298842243","6285326132383","6282225514936","601169396944","6285880004057","6285794800599","6285738639969","6285839382414","6285839382414","14033332013"]
//__________________________________//
global.thumb = fs.readFileSync('./src/menu.jpg')
global.owner = ["37122219115","6287743875928","6285839382414"]
global.nameowner = "The Carosatzx",
global.nomorowner = "37122219115",
global.emojistick = "🤡",
global.namebot = "𝐂 𝐙 𝐗  𝐁𝐎𝐓",
global.cpowner = "© The Carosatzx",
global.emoji = "▸ ",
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    owner: 'You are not the owner of the bot',
    premium: 'You are not the premium user',
    wait: 'tunggu',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
