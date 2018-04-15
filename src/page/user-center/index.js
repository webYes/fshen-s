/**
 * Created by Administrator on 2018/3/22 0022.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _fs = require('util/fs.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

//page逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        //初始化用户信息
        navSide.init({
            name : 'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    loadUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _fs.renderHtml(templateIndex,res);
            $('.panel-body').html(userHtml);
        },function(errMsg){
            _fs.errorTips(errMsg);
        });
    }

};
$(function(){
    page.init();
});