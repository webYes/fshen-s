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
        this.bindEvent();
    },
    onLoad : function(){
        //初始化用户信息
        navSide.init({
            name : 'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    bindEvent : function(){
        var _this = this;
        $(document).on('click','.btn-submit',function(){
            var userInfo = {
                phone : $.trim($('#phone').val()),
                email : $.trim($('#email').val()),
                question : $.trim($('#question').val()),
                answer : $.trim($('#answer').val())
            },
                validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                //更改用户信息
                _user.updateUserInfo(userInfo,function(res,msg){
                    _fs.successTips(msg);
                    window.location.href = './user-center.html';
                },function(errMsg){
                    _fs.errorTips(errMsg);
                });
            }
            else{
                _fs.errorTips(validateResult.msg);
            }
        });
    },
    //加载用户信息
    loadUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _fs.renderHtml(templateIndex,res);
            $('.panel-body').html(userHtml);
        },function(errMsg){
            _fs.errorTips(errMsg);
        });
    },
    //验证字段信息
    validateForm : function(formData){
        var result = {
            status : false,
            msg : ''
        };
        //验证手机号码格式
        if(!_fs.validate(formData.phone,'phone')){
            result.msg = '亲手机号码格式不正确';
            return result;
        }
        //验证邮箱格式
        if(!_fs.validate(formData.email,'email')){
            result.msg = '亲邮箱格式不正确';
            return result;
        }
        //验证密码提示问题是否为空
        if(!_fs.validate(formData.question,'require')){
            result.msg = '亲密码提示问题不能为空';
            return result;
        } //验证密码提示问题答案是否为空
        if(!_fs.validate(formData.answer,'require')){
            result.msg = '亲密码提示问题答案不能为空';
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