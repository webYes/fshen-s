/**
 * Created by Administrator on 2018/3/28 0028.
 */
var _fs = require('util/fs.js');
var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _fs.request({
            url     : _fs.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _fs.request({
            url     : _fs.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;