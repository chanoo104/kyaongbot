function response(room, msg, sender, isGroupChat, replier, ImageDB) {
if (room == "전찬우"){
Api.replyRoom("그냥 잡담방", msg)
if (msg == "!테스트") replier.reply("ㅇㅇ")
}
}