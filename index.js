/*WELCOME TO KOMTOL
SC ORI BY : MHANKBARBAR
EDIT BY : DREAM TEAM
JAN HAPUSS TQTO NYA KAWAN
*/

const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os');
const FormData = require('form-data')
const axios = require("axios")
const speed = require('performance-now')
const qrcodes = require("qrcode")
/*const ig = require('insta-fetcher')*/
const qrcode = require("qrcode-terminal")
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const brainly = require('brainly-scraper');
/*const yts = require( 'yt-search')*/
const ms = require('parse-ms')
const crypto = require('crypto')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
/*const { yta, ytv, igdl, upload } = require('./lib/ytdl')*/
/*const { JSDOM } = require('jsdom')*/
/*const { instagram, twitter } = require('video-url-link')*/
/*const downloader = require('./lib/downloader')*/
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require('child_process')
/*const { exec } = require('child_process')*/
const { uploadimg } = require('./lib/uploadimg')
/*const { addbot, addBot } = require('./lib/addbot')*/

//********** DATABASE **********//
/*const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))*/
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const astik = JSON.parse(fs.readFileSync('./src/autos.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//*********** CUSTOMABLE ***********//
prefix = ''
setgrup = "6281226770537-1611127287@g.us"
offline = true
publik = true
waktuafk = '-'
alasanafk = 'Kagak Ada'
f = '```'
namabot = 'Dream bot'
s = '```'
simple = false
harga = 0
matauang = 'IDR'
tete = '│❒'
atas = '╭─ *「             」*'
bawah = '╰──────'
blocked = []
fake = 'DREAM TEAM'
fakeimage = fs.readFileSync(`./media/drm.jpeg`)
numbernye = '0'
public = false
hit_today = []
baterai = {
	battery: "" || "Tidak Di Cas",
	isCharge: "" || false
}

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Markシ︎\n'
            + 'ORG:Owner drm;\n'
            + 'TEL;type=CELL;type=VOICE;waid=0:+0\n'
            + 'END:VCARD'

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const XteamKey = 'c81b3345e477a0c7'        //XTEAM
const ZeksApi = 'apivinz'                  //ZEKS
const LolHuman = 'OpenVcs500k'           //LOLHUMAN
const LolKey = 'OpenVcs500k'                 //LOLHUMAN
const leysapi = 'Beli Sendiri '

//********** WAKTU **********/
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//********** FUNCTION AFK **********//
        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tdrml(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const drm = new WAConnection()
	drm.logger.level = 'warn'
	console.log(banner.string)
	drm.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Qr Nya|Jangan Lupa Subs Dream Bot'))
	})

	fs.existsSync('./dream.json') && drm.loadAuthInfo('./dream.json')
	drm.on('connecting', () => {
		start('2', 'Conecting')
	})
	drm.on('open', () => {
		success('2', 'Terconect')
	})
	await drm.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./dream.json', JSON.stringify(drm.base64EncodedAuthInfo(), null, '\t'))

drm.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        drm.sendMessage(callerId, "Telpon = BLOCK!!\nTq Autoresblock!!", MessageType.text)
        await sleep(3000)
        await drm.blockUser(callerId, "add") // Block user
})

	drm.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})
	
drm.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await drm.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await drm.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `
*WELLCOME TO ${mdata.subject}*\n━━━━━━━━━━━━━━━━━━━━━━━━\n@${num.split('@')[0]} Intro/Kick?\n${tete} Nama :\n${tete} From : \n${tete} Umur :\n${tete} Gender :\n${tete} Pap tt Dulu Ekhh Salah Mksd Gwa Pap Muka \nKalo Udah Intro Jangan Lupa Sedekah Dengan Cara Ketik /donasi\n\n━━━━━ *「 DREAM BOT 」* ━━━━━
`
				let buff = await getBuffer(ppimg)
				drm.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await drm.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Beban Gc Mengurang 1\nSelamat Tinggal @${num.split('@')[0]} Jan Lupa Kalo Balik Lagi Bawa Martabak`
				let buff = await getBuffer(ppimg)
				drm.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await drm.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await drm.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `Wih Gemge Di Promote`
			drm.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await drm.groupMetadata(anu.jid)
			try {
					ppimg = await drm.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
		teks = `Kasian Yeh Broh Lu Di Demote`
	   drm.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
		console.log('Error : %s', color(e, 'red'))
		}
})
// Tebak Gambar
          /*  if (tebakgambar.hasOwnProperty(@${nom.split("@s.whatsapp.net")[0]}) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[@${nom.split("@s.whatsapp.net")[0]}]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[@${nom.split("@s.whatsapp.net")[0]}]
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }*/

	drm.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
})

	
drm.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
      infoMSG.push(JSON.parse(JSON.stringify(mek)))
      fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
       const urutan_pesan = infoMSG.length

       if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    }
        cekafk(afk)
        if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./database/off.json', JSON.stringify(infoMSG, null, 2))
    }
    		global.prefix
    		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
  			global.blocked
  			const content = JSON.stringify(mek.message)
  			const from = mek.key.remoteJid
  			const type = Object.keys(mek.message)[0]
			
    		const apiKey = setting.apiKey 
  			const { text, extendedText, contact, caption, location, liveLocation, image, video,quotedMsgObj, sticker, document, audio, product } = MessageType
  			
     //BY TANAKA (ALL PREFIX)
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
	    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
	    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	    hit_today.push(command)
	    const args = body.trim().split(/ +/).slice(1)
	    const isCmd = body.startsWith(prefix)
	    chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				noregis: 'Kamu Belum Terdaftar Di Database Dream Bot\nSilahkan Ketik /verify',
				rediregist: 'Kamu Sudah Terdaftar Di Database Dream Bot',
				wait: 'Sabar Kak Lagi Di Proses',
				success: 'Succes Om️',
				error: {
					stick: 'Gagal Mengkonversikan Ke Sticker',
					Iv: 'Link Eror'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}
           const totalchat = await drm.chats.all()
			const botNumber = drm.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await drm.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			pushname = drm.contacts[sender] != undefined ? drm.contacts[sender].vname || drm.contacts[sender].notify : undefined
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isUser = user.includes(sender)
		    const isStiker = isGroup ? astik.includes(from) : false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
				const sendImage = (teks) => {
		    drm.sendMessage(from, teks, image, {quoted:freply})
		    }
		    
		    const costum = (pesan, tipe, target, target2) => {
			drm.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
		    const sendPtt = (teks) => {
		    drm.sendMessage(from, audio, mp3, {quoted:troli})
		    }
			
			const reply = (teks) => {
				drm.sendMessage(from, teks, text, {quoted:troli})
			}
			
			const sendMess = (hehe, teks) => {
				drm.sendMessage(hehe, teks, text,{quoted : freply})
			}
			
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		};
		download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    drm.sendMessage(to, media, type, { quoted: freply, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		});
	    }
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? drm.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : drm.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			drm.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/drm.jpeg')}}}
const troli =  {key: { fromMe: false,remoteJid: "6281226770537-1611127287@g.us", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: fakeimage, surface: 200, message: `Nama : ${pushname}\nMenampilkan : ${chats}`, orderTitle: 'Dream Team', sellerJid: '0@s.whatsapp.net'} } } 
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `DREAM BOT\nCommand : ${chats}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/drm.jpeg`)} } }
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"image/webp",
                 "height": "500",
				  "width": "500",
                 "isAnimated": "false",
                 "ptt": "true"
                        }
	                  } 
                     }
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/drm.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//========== AUTO READ ==========//
        drm.chatRead(from, "read")
//========== ANTILINK & ANTI TAG ======//
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                drm.groupRemove(from, [sender])
            }
        }
//========== EVAL ==========//
            if (body.startsWith("> ")){
            if (!mek.key.fromMe) return 
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(args.join(''))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    reply(`${evaled}`)
                } catch (err) {
                    reply(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return reply(`${err}`)
					if (stdout) reply(`${stdout}`)
				})
        }

   //********** FUNCTION OFFLINE **********//
   
   if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJtext)) return

            addafk(mek.key.remoteJtext)
      heheh = ms(Date.now() - waktuafk) 
      drm.sendMessage(mek.key.remoteJid,`*Mohon Maaf drm Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./media/drm.jpeg`)}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "6281314050985@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJtext)) return
                        addafk(mek.key.remoteJtext)
            heheh = ms(Date.now() - waktuafk)
            drm.sendMessage(mek.key.remoteJid,`*Mohon Maaf David Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi David Nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./media/drm.jpeg`)}}}})
      }
        }
            }
          }
        }
      }
    }
      

const hour_now = moment().format('HH')
        var ucapanWaktu = 'Selamat Pagi🌄'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi 🌅'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang 🌞'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Soree ☀️'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Dah Malam Brohh Mending Tidur'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam 🌌'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }

const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}


const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					drm.sendMessage(to, media, sticker,zits)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       drm.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       drm.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = drm.contacts[from] != undefined ? drm.contacts[from].vname || drm.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'drm'; if (!author) author = 'SELF-BOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
          
                  case 'menu':
                  case 'help':
                  if (!isUser) return reply(mess.noregis)
            gambar = fs.readFileSync('./media/drm.jpeg')
                    l = 1
               var nom = mek.participant
           const statuss = public ? 'Public': 'Self'
		if (simple == false) inimenu = `
╭─ 「 *HELLO IAM ${namabot}* 」
│${tete} ${s}Owner : David${s}
│${tete} ${s}Status : ${statuss}${s}
│${tete} ${s}Prefix : 「Multi Prefix」${s}
│${tete} ${s}Merk Hp : Realme${s}
│${tete} ${s}Versi Hp : 5.1${s}
│${tete} ${s}Wa Version : ${drm.user.phone.wa_version}${s}
│${tete} ${s}Total Hit Per Today : ${hit_today.length}${s}
╰──────

╭─ *「  BIODATA ANDA 」*
│${tete} ${s}Nama : ${pushname}${s}
│${tete} ${s}Tag : @${nom.split("@s.whatsapp.net")[0]}${s}
│${tete} ${s}Status : ${mek.key.fromMe ? 'Premium' : 'Gratisan'}${s}
╰──────
╭─ *「 INFO HARI INI 」*
│${tete} ${f}Ucapan : ${ucapanWaktu}${s}
│${tete} ${f}WIB : ${jam}${s}
│${tete} ${f}WIT : ${wit}${s}
│${tete} ${f}WITA : ${wita}${s}
╰──────

╭─ *「 COMMAND 1 」*
│${tete} ${f}${prefix}sticker${f}
│${tete} ${f}${prefix}stickerwm author|nama${f}
│${tete} ${f}${prefix}colong${f}
│${tete} ${f}${prefix}exif author|nama${f}
│${tete} ${f}${prefix}ytmp4${f}
│${tete} ${f}${prefix}ytmp3${f}
│${tete} ${f}${prefix}stickergif${f}
│${tete} ${f}${prefix}take author|nama${f}
│${tete} ${f}${prefix}joox${f}
│${tete} ${f}${prefix}fordward text${f}
│${tete} ${f}${prefix}fordward1 text${f}
│${tete} ${f}${prefix}upswtext${f}
│${tete} ${f}${prefix}upswimg${f}
│${tete} ${f}${prefix}public${f}
│${tete} ${f}${prefix}self${f}
│${tete} ${f}${prefix}readall${f}
│${tete} ${f}${prefix}delthischat${f}
│${tete} ${f}${prefix}upswvideo${f}
│${tete} ${f}${prefix}astick enable/disable${f}
│${tete} ${f}${prefix}join link gc${f}
│${tete} ${f}${prefix}ytplay2${f}
│${tete} ${f}${prefix}ytplay${f}
│${tete} ${f}${prefix}ttp1 text${f}
│${tete} ${f}${prefix}stickerwa${f}
│${tete} ${f}${prefix}off alasan${f}
│${tete} ${f}${prefix}on${f}
│${tete} ${f}${prefix}archive${f}
│${tete} ${f}${prefix}unarchive${f}
│${tete} ${f}${prefix}restart${f}
│${tete} ${f}${prefix}leyscek${f}
│${tete} ${f}${prefix}lolhumcek${f}
│${tete} ${f}${prefix}shutdown${f}
│${tete} ${f}${prefix}buggc${f}
│${tete} ${f}${prefix}ppcouple${f}
│${tete} ${f}${prefix}meme${f}
│${tete} ${f}${prefix}darkjoke${f}
│${tete} ${f}${prefix}asupan${f}
│${tete} ${f}${prefix}igvideo${f}
│${tete} ${f}${prefix}igphoto${f}
│${tete} ${f}${prefix}getpic @tag${f}
│${tete} ${f}${prefix}getbio @tag${f}
╰──────

╭─ *「 COMMAND 2 」*
│${tete} ${f}${prefix}menuconveter${f}
│${tete} ${f}${prefix}gabutmenu${f}
│${tete} ${f}${prefix}menusystem${f}
│${tete} ${f}${prefix}menuelit${f}
│${tete} ${f}${prefix}menutag${f}
│${tete} ${f}${prefix}menugroup${f}
│${tete} ${f}${prefix}menustorage${f}
│${tete} ${f}${prefix}menudownload${f}
│${tete} ${f}${prefix}menuowner${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Akira
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────` 
drm.sendMessage(from, gambar, image,{ quoted: troli, caption: inimenu})
break
//***********CASE MENU**********//
case 'menuconveter':
                  if (!isUser) return reply(mess.noregis)
   menumaker = `╭─ *「 Command Convert 」*
${tete} ${f}${prefix}sticker Reply img${f}
${tete} ${f}${prefix}rsticker Reply img${f}
${tete} ${f}${prefix}stickergif Reply video${f}
${tete} ${f}${prefix}stickerwa Query${f}
${tete} ${f}${prefix}stickerwm Nama|Author${f}
${tete} ${f}${prefix}stickmeme Teks${f}
${tete} ${f}${prefix}nobg Reply img${f}
${tete} ${f}${prefix}textmaker teks atas|teks bawah${f}
${tete} ${f}${prefix}attp Text${f}
${tete} ${f}${prefix}ttp Text${f}
${tete} ${f}${prefix}take Nama|Author${f}
${tete} ${f}${prefix}exif Nama|Author${f}
${tete} ${f}${prefix}colong${f}
${tete} ${f}${prefix}fdeface Url|title|desk${f}
${tete} ${f}${prefix}fake Url|title|desk${f}
${tete} ${f}${prefix}togif Reply stickergif${f}
${tete} ${f}${prefix}tovideo Reply sticker${f}
${tete} ${f}${prefix}toimg Reply sticker${f}
${tete} ${f}${prefix}toimage Reply sticker${f}
╰──────
╭─ *「 THANKS TO 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menumaker, text)
break

case 'menuinfo':
                  if (!isUser) return reply(mess.noregis)
   menusystem = `╭─ *「 Command Info 」*
${tete} ${f}${prefix}status${f}
${tete} ${f}${prefix}self${f}
${tete} ${f}${prefix}public${f}
${tete} ${f}${prefix}runtime${f}
${tete} ${f}${prefix}ping${f}
${tete} ${f}${prefix}term${f}
${tete} ${f}${prefix}blocklist${f}
${tete} ${f}${prefix}run${f}
${tete} ${f}${prefix}chatlist${f}
${tete} ${f}${prefix}join Linkgroup${f}
${tete} ${f}${prefix}getpic @tag${f}
│❒${f}${prefix}getbio @tag${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menusystem, text)
break
case 'gabutmenu':
if (!isUser) return reply(mess.noregis)
gabut = `╭─ *「 Gabut Menu 」*
${tete} ${f}${prefix}cekbapak${s}
${tete} ${f}${prefix}cekganteng${s}
${tete} ${f}${prefix}cekcantik${s}
${tete} ${f}${prefix}cekgay${s}
${tete} ${f}${prefix}ceklesbi${s}
${tete} ${f}${prefix}cekhomo${s}
╰──────
╭─ *「 Big Thanks To 」*
│❒ Allah Swt
│❒ MhankBarBar
│❒ Dream Team
│❒ Dappa Uhuy
│❒ Dika
│❒ Yogi Pw
│❒ Dan All Creator Bot Wa
╰──────
`
case 'menuelit':
case 'menuadvance':
                  if (!isUser) return reply(mess.noregis)
   menuadvance = `╭─ *「 Menu Elit Bot 」*
${tete} ${f}${prefix}bc${f}
${tete} ${f}${prefix}pin${f}
${tete} ${f}${prefix}unpin${f}
${tete} ${f}${prefix}archive${f}
${tete} ${f}${prefix}unarchiveall${f}
${tete} ${f}${prefix}readall${f}
${tete} ${f}${prefix}unreadall${f}
${tete} ${f}${prefix}delthischat${f}
${tete} ${f}${prefix}shutdown${f}
${tete} ${f}${prefix}jadibot${f}
${tete} ${f}${prefix}restart${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menuadvance, text)
break

case 'menutag':
                  if (!isUser) return reply(mess.noregis)
   menutag = `╭─ *「 Menu Tag 」*
${tete} ${f}${prefix}sendkontag nama${f}
${tete} ${f}${prefix}hidetag Text${f}
${tete} ${f}${prefix}stctag Tag Stc${f}
${tete} ${f}${prefix}imgtag Tag Img${f}
${tete} ${f}${prefix}kontak nama|nomor${f}
${tete} ${f}${prefix}kontag nama|nomor${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menutag, text)
break

case 'menugroup':
                  if (!isUser) return reply(mess.noregis)
   menugroup = `╭─ *「 Command Group 」*
${tete} ${f}${prefix}welcome 1/0${f}
${tete} ${f}${prefix}linkgroup${f}
${tete} ${f}${prefix}group tutup/buka${f}
${tete} ${f}${prefix}add 6281xxx${f}
${tete} ${f}${prefix}kick @tag${f}
${tete} ${f}${prefix}promote @tag${f}
${tete} ${f}${prefix}demote @tagadmin${f}
${tete} ${f}${prefix}demoteall${f}
${tete} ${f}${prefix}edotensei @tag${f}
${tete} ${f}${prefix}listadmin${f}
${tete} ${f}${prefix}online${f}
${tete} ${f}${prefix}infoall${f}
${tete} ${f}${prefix}notif${f}
${tete} ${f}${prefix}leave${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menugroup, text)
break

case 'menustorage':
                  if (!isUser) return reply(mess.noregis)
   menustorage = `╭─ *「 Menu Storage 」*
${tete} ${f}${prefix}addstik Optional${f}
${tete} ${f}${prefix}adimg Optional${f}
${tete} ${f}${prefix}addvid Optional${f}
${tete} ${f}${prefix}addvn Optional${f}
${tete} ${f}${prefix}getstik Query${f}
${tete} ${f}${prefix}getimg Query${f}
${tete} ${f}${prefix}getvid Query${f}
${tete} ${f}${prefix}getvn Query${f}
${tete} ${f}${prefix}liststick${f}
${tete} ${f}${prefix}listimg${f}
${tete} ${f}${prefix}listvid${f}
${tete} ${f}${prefix}listvn${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menustorage, text)
break

case 'menudownload':
                  if (!isUser) return reply(mess.noregis)
   menudownload = `╭─ *「 Command Download 」*
${tete} ${f}${prefix}play Query${f}
${tete} ${f}${prefix}play2 Query${f}
${tete} ${f}${prefix}ig Url${f}
${tete} ${f}${prefix}fb Url${f}
${tete} ${f}${prefix}tiktok Url${f}
${tete} ${f}${prefix}tiktoknowm Url${f}
${tete} ${f}${prefix}ytmp3 Url${f}
${tete} ${f}${prefix}ytmp4 Url${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menudownload, text)
break

case 'menuowner':
                  if (!isUser) return reply(mess.noregis)
   menuowner = `
╭─ 「 Owner Command」
${tete} ${f}${prefix}setfake${f}
${tete} ${f}${prefix}setmenu${f}
${tete} ${f}${prefix}setthumb${f}
${tete} ${f}${prefix}setreply${f}
${tete} ${f}${prefix}setmatauang${f}
${tete} ${f}${prefix}setharga${f}
${tete} ${f}${prefix}setbodymenu${f}
${tete} ${f}${prefix}setwelcome${f}
${tete} ${f}${prefix}setleave${f}
${tete} ${f}${prefix}setpromote${f}
${tete} ${f}${prefix}setdemote${f}
╰──────
╭─
${tete} ${f}${prefix}upswtext${f}
${tete} ${f}${prefix}upswimg${f}
${tete} ${f}${prefix}upswvideo${f}
╰──────

╭─ *「 Big Thanks To 」*
${tete} Allah Swt
${tete} MhankBarBar
${tete} Dream Team
${tete} Dappa Uhuy
${tete} Dika
${tete} Yogi Pw
${tete} Dan All Creator Bot Wa
╰──────`
return reply(menuowner, text)
break
			  
			  //********** SELF&PUBLIC **********//
			  case 'self':
			if (!isUser) return reply(mess.noregis)
			  if (!mek.key.fromMe) return reply('Anda Sapa')
			    public = false
			    return reply(  `*「 MODE : SELF 」*`, text)
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('Anda Sapa')
			    public = true
			    return reply(`*「 MODE : PUBLIC 」*`, text)
			    break
			    
			  case 'status':
			if (!isUser) return reply(mess.noregis)
			    const status = public ? 'SELF': 'PUBLIC'
			  const onlinee = offline ? '𝙊𝙁𝙁𝙇𝙄𝙉𝙀' : '𝙊𝙉𝙇𝙄𝙉𝙀'
			    return reply(`*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*Status : ${status}*\n*Status : ${onlinee}*`, text)
			break
			case 'verify':
				case 'daftar':
				if (isUser) return reply(mess.rediregist)
				const seriTod = bikinSerial(20)
				try {
				ppimg = await drm.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://i.ibb.co/DGJJNX8/drm.jpg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				jadiUser(sender, seriTod)
				const kentod = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *VERIFY SUKSES*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
*┆ Nama* : ${pushname}
*┆ Nomor wa.me/${sender.split('@')[0]}*
*┆ Pada* :  ${time}
*┆ Total User* : ${user.lenght}
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                drm.sendMessage(from, buff, MessageType.image, {quoted: freply, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
	case 'triggered':
	if (!isUser) return reply(mess.noregis)
				          var imgbb = require('imgbb-uploader')
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					anu = imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                      ano = await getBuffer(`https://pecundang.herokuapp.com/api/triggeredwebp?url=${anu.display_url}`)
drm.sendMessage(from, ano, sticker, {quoted: freply})
break
			    case 'antilink':
			if (!isUser) return reply(mess.noregis)
			   if (!mek.key.fromMe) return reply(`Perintah Ini Khusus Owner Dan Admin Group`)
		        if (!isGroup) return reply('Hanya Bisa Digunakan Di grup')					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				drm.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.splice(from, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
			    break
				case 'brainly':
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					drm.sendMessage(from, teks, text, {quoted: freply, detectLinks: false})
					console.log(res)
					})
					
					break 
			    case 'on':
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	return reply(`*ANDA SEKARANG ONLINE*`,text)
          	break       
          	
         	case 'off':
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args.join(" ") ? args.join(" ") : 'Tidur'
          	alasanafk = anuu
          	return reply(`*ANDA SEKARANG OFFLINE*\n*DENGAN ALASAN : ${alasanafk}*`,text)
          	break
			    
			    case 'unpin':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                drm.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                drm.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                var chats = await drm.chats.all()
                chats.map( async ({ jid }) => {
                await drm.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await drm.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                var chats = await drm.chats.all()
                chats.map( async ({ jid }) => {
                await drm.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await drm.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
		case 'attp':
		red = args.join(" ")
		shu = await getBuffer(`https://pecundang.herokuapp.com/api/attp?teks=${red}`)
		drm.sendMessage(from, shu, sticker,{ quoted: freply})
		break
		case 'memegen':
if (!isUser) return reply(mess.noregis)
reply(mess.wait)
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(9).split('|')[0]
var tex2 = body.slice(9).split('|')[1]
if (!tex2) return reply('Format salah!')
var imgbb = require('imgbb-uploader')
var ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var owgi = await drm.downloadAndSaveMediaMessage(ted)
drmaa = await imgbb('3ea1465ef91578a90ee81f7d41c59a1f', owgi)
uhyy = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${drmaa.display_url}`)
drm.sendMessage(from, uhyy, image, {quoted: freply})
}
break
		case 'ttp':
		red = args.join(" ")
		join = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng?teks=${red}`)
		drm.sendMessage(from, join, sticker,{ quoted: freply})
		break
//============= CEK MENU =============//
                case 'cekgay':
                if (!isUser) return reply(mess.noregis)
				gayy = args.join(" ")
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: freply })
				break
				case 'cekganteng':
                if (!isUser) return reply(mess.noregis)
				Nye = args.join(" ")
				const hu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const ya = hu[Math.floor(Math.random() * hu.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+Nye+'*\n\nJawaban : '+ ya+'%', text, { quoted: freply })
				break
				 case 'cekcantik':
                if (!isUser) return reply(mess.noregis)
				Hu = args.join(" ")
				const tol =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const lol = tol[Math.floor(Math.random() * tol.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+Hu+'*\n\nJawaban : '+ lol+'%', text, { quoted: freply })
				break
				 case 'ceklesbi':
                if (!isUser) return reply(mess.noregis)
				tod = args.join(" ")
				const lu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const le = gay[Math.floor(Math.random() * lu.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+tod+'*\n\nJawaban : '+ le+'%', text, { quoted: freply })
				break
				case 'cekhomo':
                if (!isUser) return reply(mess.noregis)
				kam = args.join(" ")
				const a =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const su = gay[Math.floor(Math.random() * a.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+kam+'*\n\nJawaban : '+ su+'%', text, { quoted: freply })
				break
				case 'cekbapak':
                if (!isUser) return reply(mess.noregis)
				loe = args.join(" ")
				const ngen =['Emangnya Lu Punya Bapack Brohh ?\nBukanya Lu Yteam\nAwokawok Canda\n#Dream','Jangan /cekbapak Mulu Brohh\nKasian Yang Yteam\n#Canda','Bapak Lu Dah Mati\nAwokawok\nCanda','Bapak Lu Sehat Brohh\nMoga Sehat Selalu Ye\Aminnnn','Bapak Lu Lagi Sakit Kah?\nMoga Cepet Sembuh Yah\nAminnn']
				const tods = gay[Math.floor(Math.random() * ngen.length)]
				drm.sendMessage(from, 'Pertanyaan : *'+loe+'*\n\nJawaban : '+ tods+'%', text, { quoted: freply })
				break
//=================== BATAS ========================//
	case 'joox':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    cuy = `
─────────────────────
◪ 「 *JOOX PLAY* 」
│
└ ❏ Judul: *${get_result.info.song}*
    ❏ Artis: *${get_result.info.singer}*
    ❏ Album: *${get_result.info.album}*
    ❏ Durasi: ${get_result.info.duration}
    ❏ Tipe: *${command}*
─────────────────────`
                    thumbnail = await getBuffer(get_result.image)
                    await drm.sendMessage(from, thumbnail, image, { quoted: freply, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await drm.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.info.song}.mp3`, quoted: freply, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await drm.chats.all()
                for (let _ of anu) {
                drm.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                     case 'ytplay':
			
                if (args.length < 1) return reply(`judul mana broh?\ncontoh : ${prefix + command} Melukis Senja`)
               
                query = args.join(' ')
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolKey}&query=${query}`)
                get_result = get_result.result
                get_info = get_result.info
                ini_txt = `Title : ${get_info.title}\n`
                ini_txt += `Uploader : ${get_info.uploader}\n`
                ini_txt += `Duration : ${get_info.duration}\n`
                ini_txt += `View : ${get_info.view}\n`
                ini_txt += `Like : ${get_info.like}\n`
                ini_txt += `Dislike : ${get_info.dislike}\n`
                ini_txt += `Description :\n ${get_info.description}\n\n\n`
                ini_buffer = await getBuffer(get_info.thumbnail)
                drm.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                get_audio = await getBuffer(get_result.audio[3].link)
                drm.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: freply})
                get_video = await getBuffer(get_result.video[0].link)
                drm.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: freply})
       
                break
                case 'ytplay2':
                
                if (args.length < 1) return reply(`judul mana broh?\ncontoh : ${prefix + command} Melukis Senja`)
               
                query = args.join(' ')
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${LolKey}&query=${query}`)
                get_result = get_result.result
                ini_buffer = await getBuffer(get_result.thumbnail)
                drm.sendMessage(from, ini_buffer, image, { quoted: freply, caption: get_result.title })
                get_audio = await getBuffer(get_result.audio)
                drm.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: freply })
                get_video = await getBuffer(get_result.video)
                drm.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: freply })
                break
               case 'ppcouple':
                               if (!isUser) return reply(mess.noregis)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
				cowo = await getBuffer(anu.result.male)
				drm.sendMessage(from, cowo, image, {quoted: freply})
				cewe = await getBuffer(anu.result.female)
				drm.sendMessage(from, cewe, image, {quoted: freply})
				break
				case 'asupan':
			                  if (!isUser) return reply(mess.noregis)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolKey}`)
                    buffer = await getBuffer(get_result.result)
                    drm.sendMessage(from, buffer, video, { quoted: freply, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${LolKey}`, {method: 'get'})
				drm.sendMessage(from, buffer, image, {quoted: freply})
				break
				case 'darkjoke': 
				                   if (!isUser) return reply(mess.noregis)
				gatauda = body.slice(8)
				
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${LolKey}`, {method: 'get'})
				drm.sendMessage(from, buffer, image, {quoted: freply})
		
				break
				case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
       
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    drm.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            drm.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
			case 'igvideo':
                //[❗] case by Dappaz
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzcf8egt27/?igshid=1hbl53id19nqv`)
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/video?url=${link}&apikey=${leysapi}`)
                buffer = await getBuffer(resultnya.result)
                drm.sendMessage(from, buffer, MessageType.video, {quoted: freply})
                break
                case 'igphoto':
                //[❗] case by DappaGanz
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzQL4cHm4n/?igshid=19n977531z5nz`)
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${link}&apikey=${leysapi}`)
                buffer = await getBuffer(resultnya.result)
                drm.sendMessage(from, buffer, MessageType.image, {quoted: freply})
                
				break
            case 'archive':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                drm.modifyChat(from, ChatModification.archive)
                break
                case '/':
const home = fs.readFileSync('media/astg.mp3')
drm.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
                
            case 'delthischat':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                drm.modifyChat(from, ChatModification.delete)
                break
                
                case 'shutdown':
                if (!mek.key.fromMe) return reply('Anda Sapa')
	        await drm.sendMessage(from, `_Bye..._\n_drm off dulu yaa.._`, text,{quoted : freply})
		await sleep(5000)
               drm.close()
		break
		if (!mek.key.fromMe) return reply('Anda Sapa')
	case 'buggc':
await drm.toggleDisappearingMessages(from)
drm.sendMessage(from, `Yoo`, text)
break
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                drm.groupDemoteAdmin(from, members_id)
                break
               case 'promoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                drm.groupMakeAdmin(from, members_id)
                break
           
			  //********** SETTING BOT **********//
			  case 'setleave':
			    if (!mek.key.fromMe) return reply('Anda Sapa')
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    drm.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					drm.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
			case 'fordward':
	    drm.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
            case 'fordward1':
           drm.sendMessage(from, `${body.slice(11)}`, MessageType.text, {contextInfo: { forwardingScore: 2, isForwarded: true }})
           break
				case 'setpromote':
				  if (!mek.key.fromMe) return reply('Anda Sapa')
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    drm.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					drm.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
			case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return drm.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return drm.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						drm.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						drm.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return drm.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						drm.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						drm.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return drm.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return drm.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					drm.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						drm.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						drm.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						drm.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						drm.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
			case 'y2mate':
                 url = args[0]
                 if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: mek.message_id})
                  server = (args[1] || 'id4').toLowerCase()
                  var { dl_link, thumb, title, filesize, filesizeF} = await yta(url, servers.includes(server) ? server : 'id4')
                  sendImgFromUrl(thumb, `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${dl_link}`)
                  buffer = await getBuffer(dl_link)
                  drm.sendMessage(from, buffer, document, { mimetype: 'audio/mp3', quoted: mek, filename: title })
                 
					break
					case 'setdemote':
					  if (!mek.key.fromMe) return reply('Anda Sapa')
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    drm.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					drm.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setbodymenu':
				  if (!mek.key.fromMe) return reply('Anda Sapa')
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    drm.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					drm.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setwelcome':
					  if (!mek.key.fromMe) return reply('Anda Sapa')
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    drm.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					drm.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					  case 'setharga':
					if(!mek.key.fromMe)return reply('Anda Sapa')
					if (!q) return reply(mess.wrongFormat)
					harga = q
					fakegroup(`Succes Mengganti Harga Fake : ${q}`)
					break
						  case 'setmatauang':
					if(!mek.key.fromMe)return reply('Anda Sapa')
					if (!q) return reply(mess.wrongFormat)
					matauang = q
					fakegroup(`Succes Mengganti Matauang Fake : ${q}`)
					break
			  case 'setreply':
					if(!mek.key.fromMe)return reply('Anda Sapa')
					if (!q) return reply(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break

				case 'setthumb':
				  if (!mek.key.fromMe) return reply('Anda Sapa')
				if (!isQuotedImage) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/drm.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				reply(`\`\`\`Sukses Mengganti Thumbnail\`\`\``,text)
				break
			    /*  case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(@${nom.split("@s.whatsapp.net")[0]})) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await drm.sendMessage(from, ini_buffer, image, { quoted: freply, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                      sleep(30000)
                    })
                    if (tebakgambar.hasOwnProperty(@${nom.split("@s.whatsapp.net")[0]})) {
                    	                        setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[@${nom.split("@s.whatsapp.net")[0]}]
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break*/
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await drm.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await drm.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					drm.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
			    case 'wallpaperhd':
			huluh = args.join(" ")
			shu = await getBuffer(`https://pecundang.herokuapp.com/api/searchwallpaper?q=${huluh}`)
			drm.sendMessage(from, shu, image,{ quoted: freply})
			break
              case 'nulis': // BY MFARELS

            if (args.length < 1) return reply(`Kirim perintah *${prefix}nulis nama|kelas|teks*`)  // BY MFARELS
            inputPath = 'src/kertas/magernulis1.jpg'
            fontPath = 'src/font/212BabyGirl.otf'
  outputPath = 'media/magernulis1.jpg'
  y = args.join` `
  d = new Date
  tgl = d.toLocaleDateString('id-Id')
  teks = y.split('|')
  panjangKalimat = teks[2].replace(/(\S+\s*){1,10}/g, '$&\n')
  tulisan = panjangKalimat.split('\n').slice(0, 33).join('\n')
  console.log(`fontPath : ${fontPath}\ninputPath : ${inputPath}\noutputPath : ${outputPath}\nhari : ${hari}\ntgl : ${tgl}\nnama : ${teks[0]}\nkelas : ${teks[1]}\nteks : ${tulisan}`)
  spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    tulisan,
    '-annotate',
    '+360+120',
     teks[1], 
   '-annotate',
   '+360+100',
    teks[0],
    outputPath
  ])
            .on('error', () => reply('Error Bjeer, keknya scriptnya lagi error'))
            .on('exit', () => {
                sendImgFromUrl(outputPath, '*Sukses Nulis Di Buku1*')
                
            })
					break  // BY MFARELS
           case 'nulis2':
            
                 console.log("writing...")
      teks = args.join` `
      split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
            "src/kertas/magernulis2.jpg",
            "-font",
            "font/IndieFlower.ttf",
            "-size",
            "700x960",
            "-pointsize",
            "18",
            "-interline-spacing",
            "3",
            "-annotate",
            "+170+222",
            fixedHeight,
            "media/magernulis2.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", () =>
         {
            buffer = fs.readFileSync("media/magernulis2.jpg") // can send mp3, mp4, & ogg -- but for mp3 files the mimetype must be set to ogg

            drm.sendMessage(from, buffer, image, {quoted: msg, caption: '*SUKSES NULIS DIBUKU3*'})
            limitAdd(sender)
            console.log("done")
         })
         
					break
        case 'nulis3':
         
            if (args.length < 1) return reply('Kirim perintah *'+'nulis3 [text]*')
            diTulis = args.join` `
            await reply(mess.wait)
            panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
            panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
            spawn('convert', [
                'src/kertas/magernulis1.jpg',
                '-font',
                'src/font/212BabyGirl.otf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris,
                './media/magernulis3.jpg'
            ])
            .on('error', () => reply('Error gan'))
            .on('exit', () => {
                sendImgFromUrl('./media/magernulis3.jpg', 'Nih mhank')
            })
          
					break
				  case 'join':
				    if (!mek.key.fromMe) return reply('Anda Sapa')
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return reply ('pastikan link sudah benar!')
                           var response = await drm.acceptInvite(codeInvite);
                           console.log(response);
                           reply('*Udah masuk gan_*')
                           break
                           
                           
                           case 'bc':
					if (!mek.key.fromMe) return reply('Anda Sapa')
					if (args.length < 1) return reply('.......')
					anu = await drm.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await drm.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							drm.sendMessage(_.jid, bc, image, {caption: `*「 ZBROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'lolhumcek':
                //[❗] case by DappaGanz
                try {
               U = args.join(" ")
                dapuhy = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${U}`)
                i = dapuhy.result
                vikey = `Apikey ${body.slice(11)} valid!\nUsername : ${i.username}\nRequests : ${i.requests}\nToday : ${i.today}\nAccount Type : ${i.account_type}\nExpired : ${i.expired}`
                drm.sendMessage(from, vikey, text, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(`「 ❗ 」Apikey lolhuman ${body.slice(11)} tidak valid!`)
				}
                break
                case 'leyscek':
                //[❗] case by DappaGanz
                try {
                	Gu = args.join(" ")
                dapuhy = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=${Gu}`)
                i = dapuhy.result
                vikey = `Apikey ${body.slice(9)} valid!\nResponse : ${i.response}\nApikey : ${i.apikey}\nHit : ${i.hit}`
                drm.sendMessage(from, vikey, text, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(`「 ❗ 」Apikey leyscoders ${body.slice(9)} tidak valid!`)
				}
                break
					case 'restart':
if (!mek.key.fromMe) return reply('Anda Sapa')
reply('_Restarting BOT_')
exec(`node main`)
setTimeout( () => {
					drm.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					drm.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					drm.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					drm.sendMessage(from, `_Succses Restart BOT_`,text,{quoted: freply }) // ur cods
					},4000) // 1000 = 1s,
break

case 'setfake':
			 if (!mek.key.fromMe) return reply('Cmd Ini Khusus Owner')
			if (args[0] == 'chat') {
				zits = { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "6281226770537-1611127287@g.us", "stanzaId": from, "fromMe": false, "id": "0D5EAADD1166F55012EB42395DE58D61" }, "message": { "productMessage": { "product": { "productImage": { "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc", "mimetype": "image/jpeg", "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=", "fileLength": "19247", "height": 500, "width": 500, "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=", "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=", "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8", "mediaKeyTimestamp": "1613162019", "jpegThumbnail": fakeimage }, "productId": "3958959877488517", "title": fake, "description": "Kepoluah", "currencyCode": "IDR", "priceAmount1000": 100, "retailerId": "Kepolu", "url": "https://youtube.com/c/drm", "productImageCount": 2 }, "businessOwnerJid": numbernye } }, "messageTimestamp": "1613442626", "status": "PENDING" }}
				reply(`*Berhasil ubah Fake reply menjadi Catalog*`, text)
			} else if (args[0] == 'img') {
				 zits = { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 500, "width": 500, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fakeimage, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } }
				reply(`*Berhasil ubah Fake reply menjadi Gambar*`, text)
			} else if (args[0] == 'troli') {
				 zits = {quoted: {key: {remoteJid: "6281226770537-1611127287@g.us", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 10, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'drm', sellerJid: '0@s.whatsapp.net'} } } }
				reply(`*Berhasil ubah Fake reply menjadi Troli*`, text)
			} else if (args[0] == 'toko'){
			  zits = {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./media/drm.jpeg`)}, "title": fake, "description": "drm", "currencyCode": matauang, "priceAmount1000": harga, "retailerId": "Zits", "productImageCount": 1}, "businessOwnerJid": `6281226770537@s.whatsapp.net`}}}}
			reply(`*Berhasil ubah Fake reply menjadi Toko*`, text)
			} else if (args[0] == 'document'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281226770537-1611127287@g.us" } : {}) },
	 message: { "documentMessage": { "title":fake,"h":fake, 'jpegThumbnail': fs.readFileSync('./media/drm.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Fake Documment*', text)
			} else if (args[0] == 'flokasi'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281226770537-1611127287@g.us" } : {}) },
	 message: { "liveLocationMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./media/drm.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Flocation*', text)
			} else if (args[0] == 'video'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281226770537-1611127287@g.us" } : {}) },
	 message: { "videoMessage": { "title":"SELEP BOT","h":fake, 'jpegThumbnail': fs.readFileSync('./media/drm.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Fake Video*', text)
			} else if (args[0] == 'lokasi'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281226770537-1611127287@g.us" } : {}) },
	 message: { "locationMessage": { "title":fake,"h": fake, 'jpegThumbnail': fs.readFileSync('./media/drm.jpeg')}}}}
	 reply('*Berhasil diubah menjadi fake location*', text)
		} else {
 reply(`\`\`\`List Fake :\`\`\`\nimg\ndocument\ntroli\ntoko\nvideo\nflokasi\nlokasi\nchat\n\nCara penggunaan : ${prefix + command} troli`)
				  }
				break
				
				case 'setthumbmenu':
				if (!isQuotedImage) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				imagenye.push(`help`)
				fs.writeFileSync(`./media/help.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				drm.sendMessage(from, `Sukses Mengganti Thumbnail Menu`, MessageType.text, { quoted: freply })
				break

				
				           case 'setmenu':
				if (!isOwner && !mek.key.fromMe) return reply('*Ente owner?*')
		          if (args[0] == 'simple') {
					  simple = true
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else if (args[0] == 'ori') {
					  	  simple = false
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else {
					  reply(`\`\`\`List Pilihan :\`\`\`\nori\nsimple\n\nCara penggunaan ${prefix + command} ori`)
				  }
					break
				
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                  if (!mek.key.fromMe) return reply('*Ente owner?')
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return drm.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄??𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                drm.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
				case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					drm.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'exif':
	        if (!mek.key.fromMe) return reply('Anda Sapa')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	         case 'astick':
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isStiker) return reply('Mode autosticker sudah aktif')
						astik.push(from)
						fs.writeFileSync('./src/autos.json', JSON.stringify(astik))
						reply(`Sukses mengaktifkan mode auto sticker`)
					} else if (args[0] == 'disable') {
					heh = from
                inz = ban.indexOf(heh)
						astik.splice(inz, 1)
						fs.writeFileSync('./src/autos.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode autosticker')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					
					break
				case '':
       if (!isStiker) return  
       if ((isMedia && !mek.message.videoMessage)) {
						hhhh = await drm.downloadAndSaveMediaMessage(mek)
						ran = getRandom('.webp')
						await ffmpeg(`./${hhhh}`)
							.input(hhhh)
							.on('start', function (cmd) {
							})
							.on('error', function (err) {
								//fs.unlinkSync(hhhh)
								reply(mess.error.stick)
							})
							.on('end', function () {
								buff = fs.readFileSync(ran)
								costum(buff, sticker, '0@s.whatsapp.net', monospace('AUTOSTICKER'))
								//fs.unlinkSync(hhhh)
								//fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
				}
					break
	        case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await drm.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    drm.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case 'take':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await drm.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					drm.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await drm.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        drm.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
				case 'tovid':
					reply('Proses Boskuh..')
					 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await drm.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
						drm.sendMessage(from, buff, video, { quoted: freply, caption: fake })
					}
					break
					
					case 'fake':
				var nn = body.slice(6)
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				media = await drm.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				drm.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
				
					case 'fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					ddatae = await imageToBase64(JSON.stringify('./media/drm.jpeg').replace(/\"/gi, ''))

					drm.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case 'nobg':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await drm.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/removebg?apikey=${LolKey}&img=${getUrl}`)
drm.sendMessage(from, buff, image, {quoted: freply})
}
break

 case 'sticknobg':
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await drm.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break
									
case 'stickflip':
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=VevekKuda&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickwasted':
									 var ghs = body.slice(13)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickmeme':
									 var ghs = body.slice(11)
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/_/${ghs}.png?background=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									
									case 'stickmeme2':
									 var ghs = body.slice(12)
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen3?teks=${ghs}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickmeme3':
									 var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply('Format salah!')
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await drm.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									

					case 'textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await drm.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
drm.sendMessage(from, buff, image, {quoted: freply})
}
break
					
				case 'ttp':
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp BOT`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									drm.sendMessage(from, buffer, sticker,{quoted:freply})
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
					
		case 'ttp1':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp drm Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolKey}&text=${body.slice(6)}`)
				drm.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					
                    case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=${x}`)
                        drm.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await drm.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            drm.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case 'swm':
                    case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} drm|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await drm.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            drm.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
		                                      case 'stiker':
                    case 's':
                    case 'sticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await drm.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": "Dream Team",
                                "author": "@David"
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            drm.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
 break
				case 'quotes':
      
        try {
        data = await fetchJson('https://recoders-area.caliph.repl.co/api/randomquote?apikey=FreeApi')
        reply(`_*${data.quote.author}*_\n\n\n_*${data.quote.quotes}_*`)
        } catch {
        reply('Error!')}
  
					break
					case 'toimg':
                                        var b = fs.readFileSync(`./media/drm.jpeg`)
                                        var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        var media = await drm.downloadMediaMessage(encmedia)
                                        if (!isQuotedSticker) return reply('Reply Stikernya su!')
                                        drm.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: freply})
                                        break
                                        
					case 'toimage':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await drm.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						drm.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 

					case 'ping':
					  const statusss = public ? 'PUBLIC': 'SELF'
					  var groups = drm.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = drm.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					  const chatsIds = await drm.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\`
\`\`\` - [ ${drm.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${drm.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${statusss} ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4096 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                return reply(p0, text)
                    break
                    
					case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ 「 *BOT STAT* 」
│
└ ❏
    ❒ *Nama bot : Dream Bot*
    ❒ *Server :* _*Baileys*_
    ❒ *Runtime :*
    ❒   \`\`\`${kyun(uptime)}\`\`\`
    ❒ *Speed :*
    ❒   \`\`\`${latensip.toFixed(4)} Second\`\`\`
    ╰──────`
			             drm.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           
			           case 'term': 
case 'exec':
if (!mek.key.fromMe) return reply('Anda Sapa')
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return drm.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
drm.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  case 'kontak':
const took = body.slice(8)
const nama = took.split("|")[0]
const nomor = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	drm.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
	break
	
	case 'kontag':
const pepek = body.slice(8)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await drm.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	drm.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
	break
	
			     case 'sendkontag':
					var bv = body.slice(12)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await drm.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${drm.user.jid.split('@')[0]}:${drm.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				drm.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1611127287@g.us" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/drm.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await drm.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					drm.sendMessage(from, options, text,{quoted : freply})
					break
					
			           case 'stctag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await drm.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await drm.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        drm.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await drm.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await drm.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        drm.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await drm.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    drm.sendMessage(from, yeh, text, {quoted: freply})
			        break
			       case 'autostick':
			      if (!isGroup) return reply(mess.only.group)
      reply(`
     ketik ${prefix}astick enable = mengaktifkan
     ketik ${prefix}astick disable = menonaktifkan
     `)
					break
        case 'grup':
					case 'gc':
					case 'group':
			  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						drm.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						drm.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
				  var groups = drm.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = drm.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					drm.updatePresence(from, Presence.composing)
					y = ` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\``
					drm.sendMessage(from, y, text, {quoted  : freply})
					break
					
			case 'groupinfo':
case 'ingfogc':
  case 'infogc':
case 'gcingfo':
  case 'gcinfo':
	drm.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await drm.getProfilePicture(from) // leave empty to get your own
	buffer = await getBuffer(ppUrl)
	drm.sendMessage(from, buffer, image, {quoted: freply, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
					
					case 'demote':
			      case 'dm' : 
			        if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						drm.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						drm.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'promote':
				case 'pm':
				  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						drm.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						drm.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':
					  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    break
                    
					case 'add':
					  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						drm.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
			    case 'kick':
			      if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						drm.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						drm.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(drm.chats.get(ido).presences), drm.user.jid]
                drm.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                case 'gwa':
const nye = fs.readFileSync('media/me.mp3')
drm.sendMessage(from, nye, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
                case 'infoall':
                  if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 drm BOT 」* ', members_id, true)
					break
					
					case 'edotensei':
					  case 'edotense':
					    if (!isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						drm.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						drm.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
					  if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await drm.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await drm.sendMessage(from, options, text)
break

      case 'leave': 
        if (!mek.key.fromMe) return reply('Anda Sapa')
				    if (!isGroup) return reply(mess.only.group)
			    	reply(`Akan keluar dari group ${groupMetadata.subject} dalam 3 detik`)
                    await sleep(3000)
                    await drm.groupLeave(from)
                break


				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				drm.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				drm.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				drm.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				drm.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				drm.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				drm.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				drm.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				drm.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				drm.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await drm.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				drm.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				drm.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				drm.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				
				//********** DOWNLOAD **********//

     
				
				case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				drm.sendMessage(from, buffer, image, {quoted: zdarma, caption: infomp3})
				drm.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break 
			case 'ig':
        case 'instagram':
	//		var id = msg.key.id
            if (args.length !== 1) return drm.reply(from, 'Maaf, format pesan salah silahkan periksa menu. [Wrong Format]', msg)
            if (!isUrl(args.join(' ')) && !args.join(' ').includes('instagram.com')) return drm.reply(from, 'Maaf, link yang kamu kirim tidak valid. [Invalid Link]', id)
            await reply(from, `_Scraping Metadata...`, mek)
			t = mek.messageTimestamp.low
            downloader.insta(args.join(' ')).then(async (data) => {
                if (data.type == 'GraphSidecar') {
                    if (data.image.length != 0) {
                        data.image.map((x) => sendImgFromUrl(x, ``))
                            .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(mek.messageTimestamp.low, moment())}`))
                            .catch((err) => console.error(err))
                    }
                    if (data.video.length != 0) {
                        data.video.map(async (x) => {
drm.sendMessage(from, await getBuffer(x.videoUrl), video, {quoted:mek})
})
                            .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                            .catch((err) => console.error(err))
                    }
                } else if (data.type == 'GraphImage') {
                    drm.sendMessage(from, await getBuffer(data.image), image, {quoted:mek})
                        .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                        .catch((err) => console.error(err))
                } else if (data.type == 'GraphVideo') {
					drm.sendMessage(from, await getBuffer(data.video.videoUrl), video, {quoted:mek})
                        .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                        .catch((err) => console.error(err))
                }
            })
                .catch((err) => {
                    console.log(err)
                    if (err === 'Not a video') { return drm.reply(from, 'Error, tidak ada video di link yang kamu kirim. [Invalid Link]', mek) }
                    drm.reply(from, 'Error, user private atau link salah [Private or Invalid Link]', mek)
                })
            break
        case 'ig':
          if (args.length < 1) return reply('*Masukan Url nya?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=apivinz`, {method: 'get'})
					tods = ` Instagram DOWNLOADER

Username : ${anu.owner}
Caption : ${anu.caption}
`
					reply(mess.wait)
					buffer = await getBuffer(anu.result[0].url)
					drm.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: freply, caption : tods})
					break
					
                  case 'fb':
                  if (args.length < 1) return reply('*Masukan Url nya?*')
                   query = args.join(" ")
				  anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
			      wing = ` *F A C E B O O K DOWNLOADER*
					
                  *Judul :* ${anu.result.judul}`
					
					reply(mess.wait)
					buffer = await getBuffer(anu.result.url)
					drm.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					
                   case 'tiktok':
                   if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${query}&APIKEY=${XteamKey}`, {method: 'get'})
					reply(mess.wait)
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${LolKey}&url=${query}`)
					drm.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: freply})
					break
					 
					case 'tiktoknowm':
                    if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolKey}&url=${query}`, {method: 'get'})
				    if (anu.error) return reply(anu.error)
					tt = `「 *TIKTOK NO WM* 」
					
                   *Judul:* ${anu.result.title}
                   *Keywords:* ${anu.result.keywords}
                    *Desc:* ${anu.result.description}`
                    buff = await getBuffer(anu.result.link)
                    drm.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: freply,caption : tt})
					 break
					
				/*case 'ytmp4':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
*[ Wait ]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					drm.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					drm.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case 'ytmp3':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
*[Wait]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					drm.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					drm.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})*/
				
                    case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu2 = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ 々 Judul: *${get_result.title}*
    々 Chanel: *${get_result.uploader}*
    々 Durasi: ${get_result.duration}
    々 Viewers: *${get_result.view}*
     々 Tipe: *${command}*
─────────────────────`
                     ini_buffer = await getBuffer(get_result.thumbnail)
                    drm.sendMessage(from, ini_buffer, image, { quoted: freply, caption: asu2, contextInfo: { forwardingScore: 2, isForwarded: true} })
                    get_audio = await getBuffer(get_result.link[0].link)
                    drm.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
			       case 'ytmp3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ 々 Judul: *${get_result.title}*
    々 Chanel: *${get_result.uploader}*
    々 Durasi: ${get_result.duration}
    々 Viewers: *${get_result.view}*
    々 Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    drm.sendMessage(from, ini_buffer, image, { quoted: freply, caption: asu, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    get_audio = await getBuffer(get_result.link[3].link)
                    drm.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.title}.mp3`, quoted: freply, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                    case 'searchmusic':
				     if (isQuotedAudio){
				     const dlfile = await drm.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				     const bodyForm = new FormData()
			          bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break

//********** UPLOAD **********
case 'upswtext':
  if (!mek.key.fromMe) return reply('*Ente owner?')
					drm.updatePresence(from, Presence.composing)
					drm.sendMessage('status@broadcast', `${q}`, extendedText)
					drm.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
				  if (!mek.key.fromMe) return reply('*Ente owner?')
					drm.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await drm.downloadMediaMessage(swsw)
						drm.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					drm.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
				  if (!mek.key.fromMe) return reply('*Ente owner?')
					drm.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await drm.downloadMediaMessage(swsw)
						drm.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					drm.sendMessage(from, bur, text, { quoted: mek })
					break

//********** AWIKWOK **********//
case 'jadibot':
				sesid = Math.floor(Math.random() * 99999)
                const qrdata =  await qrcodes.toDataURL(sender, { scale: 8 })
   const bufferqr = new Buffer.from(qrdata.replace('data:image/png;base64,', ''), 'base64')
   drm.sendMessage(from, bufferqr, image, {caption: `*Scan QR ini untuk Menjadikan ada BOT!!*\n\nSession id: ${sesid}\nNotifikasi:\nQR ini hanya berlaku selama 20 Detik!!\n\n_NOTE : INI HANYA NUMPANG!_`})
				break
				default:
				       if (budy.includes(`@6285865829368`)) {
                  reply(`*Jangan Tag David, Dia Lagi Comli*`)
                  }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(@${nom.split("@s.whatsapp.net")[0]}))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
