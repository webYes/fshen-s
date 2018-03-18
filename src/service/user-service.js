/**
 * Created by Administrator on 2018/3/4 0004.
 */
var _fs = require('util/fs.js');
var _user = {
    //检查登录状态
    checkLogin : function(resolve,reject){
        _fs.request({
            url : _fs.getServerUrl('/user/get_user_info.do'),
            method : 'POST',
            success : resolve,
            error : reject
        });
    },
    //登录退出
    logout : function(resolve,reject){
        _fs.request({
            url : _fs.getServerUrl('/user/logout.do'),
            method : 'POST',
            success : resolve,
            error : reject
        });
    }
}
module.exports = _user;