/**
 * Created by Administrator on 2018/3/5 0005.
 */
require('./index.css');
var _fs = require('util/fs.js');

//通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    //置空表单内容
    onLoad : function(){
        var keyword = _fs.getUrlParam('keyword');
        //keyword存在,则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this = this;
        //点击搜索按钮后,进行搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //输入回车键后,进行搜索提交
        $('#search-input').keyup(function(e){
            //下面13默认是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    //搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        //当提交搜索时有keyword,可正常跳转到list页面
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        //而当keyword为空,直接返回首页
        else{
            _fs.goHome();
        }
    }
};

header.init();