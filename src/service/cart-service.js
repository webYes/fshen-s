/**
 * Created by Administrator on 2018/3/4 0004.
 */
var _fs = require('util/fs.js');
var _cart = {
    //获取购物车数量
    getCartCount : function(resolve,reject){
        _fs.request({
            url : _fs.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error : reject
        });
    }
}
module.exports = _cart;