// Copyright (C) 2015 Leslie Zhai <xiang.zhai@i-soft.com.cn>

.pragma library
var v2 = false;
var uin = "";
var sid = "";
var skey = "";
var ticket = "";
var deviceId = "";
var loginUserName = "";
var initSyncKey;
var syncKey;
var initContactList;
var wxView;
var chatView;

function monitorNewMsg() 
{
    if (typeof(wxView) != 'undefined')
        wxView.doNewMsg();

    if (typeof(chatView) != 'undefined')
        chatView.doNewMsg();
}