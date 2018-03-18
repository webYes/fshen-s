/**
 * Created by Administrator on 2018/3/7 0007.
 */
require('./index.css');
require('page/common/nav-simple/index.js');
require('util/fs.js');
$(function(){
    var type = _fs.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success').show();
});