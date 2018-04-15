/**
 * Created by Administrator on 2018/3/22 0022.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _fs = require('util/fs.js');
var _user = require('service/user-service.js');
//var templateIndex = require('./index.string');

//page逻辑部分
var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        //初始化用户信息
        navSide.init({
            name : 'user-pass-update'
        });
    },
    bindEvent : function(){
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on('click','.btn-submit',function(){
            var userInfo = {
                    password        : $.trim($('#password').val()),
                    passwordNew     : $.trim($('#password-new').val()),
                    passwordConfirm : $.trim($('#password-confirm').val())
                },
                validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                //更改用户密码
                _user.updateUserPassword({
                    passwordOld : userInfo.password,
                    passwordNew  : userInfo.passwordNew
                },function(res,msg){
                    _fs.successTips(msg);
                },function(errMsg){
                    _fs.errorTips(errMsg);
                });
            }
            else{
                _fs.errorTips(validateResult.msg);
            }
        });
    },
    //验证字段信息
    validateForm : function(formData){
        var result = {
            status : false,
            msg : ''
        };
        //验证原密码是否为空
        if(!_fs.validate(formData.password,'require')){
            result.msg = '亲原密码不能为空';
            return result;
        }
        //验证新密码长度
        if(!formData.passwordNew || formData.passwordNew.length < 6){
            result.msg = '亲输入6位及以上的新密码';
            return result;
        } //验证两次输入的密码是否一致
        if(formData.passwordNew !== formData.passwordConfirm){
            result.msg = '亲两次输入的密码不一致';
            return result;
        }
        //验证通过,并返回正确提示
        result.status = true;
        result.msg  = '验证通过';
        return result;
    }

};
$(function(){
    page.init();
});