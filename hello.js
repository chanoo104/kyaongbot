 let Ky = JSON.parse(DataBase.getDataBase('memCheck')) || new Object();
 const blank = '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        \n\n\n';

 function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId) {

    function getHash() {
        return java.lang.String(imageDB.getProfileImage()).hashCode();
    }

    Ky.memCheck = getHash();
    Ky.memArray = Ky.memArray || new Array();
    Ky.memOn = Ky.memOn || false;
    Ky.admin = Ky.admin || new Array();

    if (Ky.admin.length == 0 && msg == '!등록') {
        Ky.admin.push(Ky.memCheck);
        replier.reply('등록 성공');
    }

    if (msg == '!중지' && Ky.admin.indexOf(Ky.memCheck) != -1) {
        Ky.memOn = false;
        replier.reply('적용 완료');
    }
    if (msg == '!실행' && Ky.admin.indexOf(Ky.memCheck) != -1) {
        Ky.memOn = true;
        replier.reply('적용 완료');
    }


    if (Ky.memArray.indexOf(Ky.memCheck) == -1) {
        if (Ky.memOn == true) {
            replier.reply('[자동응답]\n' + sender + '님 어서오세요!\n모바일은 좌측상단 메뉴열고\nPC는 채팅창 맨위 방제아래\n하트버튼을 채워주세요!');
        }
        Ky.memArray.push(Ky.memCheck);
    }

    if (msg.split(' ')[0] == '!최근로그') {
        var n = msg.substr(msg.split(' ', 1)[0].length + 1);
        if (!/^[0-9]+$/.test(n) || n.indexOf('0') == 0 || n > 50) {
            replier.reply('50 이하의 자연수를 입력해 주세요.');
        } else {
            n--;
            if (n > Ky.recentLog[room].sender.length - 1) n = Ky.recentLog[room].sender.length - 1;
            var char = ('▼전체보기 클릭▼' + blank);
            for (i = n; i >= 0; i--) {
                char += '\n》';
                char += Ky.recentLog[room].sender[i];
                char += '\n';
                char += Ky.recentLog[room].msg[i];
                char += '\n';
            }
            replier.reply(char);
        }
    }


    Ky.recentLog[room].msg.unshift(msg);
    if (Ky.recentLog[room].msg.length > 50) Ky.recentLog[room].msg.pop;

    Ky.recentLog[room].sender.unshift(sender);
    if (Ky.recentLog[room].sender.length > 50) Ky.recentLog[room].sender.pop;

    DataBase.setDataBase('memCheck', JSON.stringify(Ky));

 }