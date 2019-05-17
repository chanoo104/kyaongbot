const admin = ["불여우", "꠵rgb"]
const UPDATE = {};
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
function getHtml(text) {
    var content = new java.io.ByteArrayOutputStream();
    android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(text)).getEntity().writeTo(content);
    content.close();
    var str = String(content.toString());
    return str;
}
UPDATE.saveData = function (msg, code) { //파일에 내용을 저장하는 함수
    try {
        var file = new java.io.File(sdcard + '/katalkbot/' + code);
        var fos = new java.io.FileOutputStream(file);
        var str = new java.lang.String(msg);
        fos.write(str.getBytes());
        fos.close();
    } catch (e) {
        Log.debug(e + ' At:' + e.lineNumber);
    }
};

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    if (msg.split(' ')[0] == '.' && sender.indexOf('rgb') != -1) {
        try {
            replier.reply(eval(msg.substr(msg.split(' ', 1)[0].length + 1)));
        } catch (e) {
            replier.reply('eval 실행 중 오류 발생!\nlineNumber: ' + e.lineNumber + '\nmessage : ' + e.message)
        }
    }
    if (admin.indexOf(sender) != -1) {
        if (msg == "!봇상태") {
            Sclist = [];
            for (var i = 0; i < Api.getScriptNames().length; i++) {
                if (Api.isOn(Api.getScriptNames()[i]) == true) lv = "✔"
                else lv = "✘"
                if (Api.isCompiled(Api.getScriptNames()[i]) == true) rv = "✔"
                else rv = "✘"
                Sclist.push(Api.getScriptNames()[i] + "\n작동 여부 : " + lv + "\n리로드 여부 : " + rv)
            }
            replier.reply(Sclist.join("\n================\n"))
        }
        if (msg.indexOf("!리로드 ") == 0) {
            if (Api.reload(msg.split(" ")[1]) == true) replier.reply(msg.split(" ")[1] + "가 성공적으로 리로드 되었습니다.")
            else replier.reply(msg.split(" ")[1] + "를 리로드 하지 못했습니다.")
        }
        if (msg.indexOf("!온 ") == 0) {
            if (Api.on(msg.split(" ")[1]) == true) replier.reply(msg.split(" ")[1] + "가 성공적으로 켰습니다.")
            else replier.reply(msg.split(" ")[1] + "를 켜지 못했습니다.")
        }
        if (msg.indexOf("!오프 ") == 0) {
            if (Api.off(msg.split(" ")[1]) == true) replier.reply(msg.split(" ")[1] + "가 성공적으로 껏습니다.")
            else replier.reply(msg.split(" ")[1] + "를 끄지 못했습니다.")
        }
        try {
            if (msg.indexOf("!업데이트 ") == 0) {
                UPDATE.saveData(getHtml('https://raw.githubusercontent.com/chanoo104/kyaongbot/master/' + msg.split(" ")[1]), msg.split(" ")[1])
                replier.reply("업데이트 완료!\n[업데이트 코멘트]\n" + getHtml("https://github.com/chanoo104/kyaongbot/commit/master").split('<p class="commit-title">')[1].split("</p>")[0].trim());
                Api.reload(msg.split(" ")[1])
                Api.gc
            }
        } catch (e) {
            replier.reply("업데이트 실패.")
        }
    }
}
