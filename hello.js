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

    if (Ky.admin.length == 0 && msg == '!���') {
        Ky.admin.push(Ky.memCheck);
        replier.reply('��� ����');
    }

    if (msg == '!����' && Ky.admin.indexOf(Ky.memCheck) != -1) {
        Ky.memOn = false;
        replier.reply('���� �Ϸ�');
    }
    if (msg == '!����' && Ky.admin.indexOf(Ky.memCheck) != -1) {
        Ky.memOn = true;
        replier.reply('���� �Ϸ�');
    }


    if (Ky.memArray.indexOf(Ky.memCheck) == -1) {
        if (Ky.memOn == true) {
            replier.reply('[�ڵ�����]\n' + sender + '�� �������!\n������� ������� �޴�����\nPC�� ä��â ���� �����Ʒ�\n��Ʈ��ư�� ä���ּ���!');
        }
        Ky.memArray.push(Ky.memCheck);
    }

    if (msg.split(' ')[0] == '!�ֱٷα�') {
        var n = msg.substr(msg.split(' ', 1)[0].length + 1);
        if (!/^[0-9]+$/.test(n) || n.indexOf('0') == 0 || n > 50) {
            replier.reply('50 ������ �ڿ����� �Է��� �ּ���.');
        } else {
            n--;
            if (n > Ky.recentLog[room].sender.length - 1) n = Ky.recentLog[room].sender.length - 1;
            var char = ('����ü���� Ŭ����' + blank);
            for (i = n; i >= 0; i--) {
                char += '\n��';
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