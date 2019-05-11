function response(room, msg, sender, isGroupChat, replier, ImageDB) {
if (room == "전찬우"){
Api.replyRoom("그냥 잡담방", msg)
if (msg == "!테스트") replier.reply("ㅇㅇ")
		if (msg.split(' ')[0] == "!eval") {
			try {
				replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
			} catch (e) {
				replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
			}
		}
}
}