/**
 * Created by Administrator on 2018/1/25 0025.
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _fs = require('util/fs.js');
$(function() {
    //渲染banner的html
    var bannerHtml = _fs.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    //初始化bannner
  var $slider =  $('.banner').unslider({
       dots: true
   });
    //上一张和下一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});


navSide.init({
    name : 'user-center'
});
