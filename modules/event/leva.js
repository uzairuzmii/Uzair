module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "uzairrajput",//Mod by Uzair Rajput 
  description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "leaveGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Karachi").format("HH");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "ʀᴀɴ ᴀᴡᴀʏ ʜɪᴍꜱᴇʟꜰ😐👈" : "ᴛʜᴇ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴛᴏʀ ꜰɪʀᴇᴅ ᴀɴɢʀɪʟʏ.😑👈।😑👈";
  const path = join(__dirname, "cache", "leaveGif");
  const pathGif = join(path, `${threadID}.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "ꜱᴜᴋᴀʀ ʜᴀɪ ᴇᴋ ᴛʜᴀʀᴋɪ ᴋᴀᴍ ʜᴏɢʏᴀ ɪꜱ ɢʀᴏᴜᴘ ᴄ😑👈\nɴᴀᴍᴇ👉 {name}\nʀᴇɢɪᴏɴ👉 {type} \n ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ᴠᴀʟᴜᴀʙʟᴇ ᴛɪᴍᴇ ᴡɪᴛʜ ᴜꜱ {name} ꜱᴇᴇ ʏᴏᴜ ꜱᴏᴏɴ😊💔\n\n[❤️‍🔥] ʙʏᴇ ʙʏᴇ ʙᴇ ʜᴀᴘᴘʏ ᴀʟᴡᴀʏꜱ. {session} || {time} \n▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱ \n credit:-𝑴𝑻𝑿 💚✨ \n " : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩").replace(/\{time}/g, time);  

  const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

  if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
 }