/**
 * Created by Administrator on 2018/4/15 0015.
 */
var _fs = require('util/fs.js');
var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _fs.request({
            url     : _fs.getServerUrl('/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _fs.request({
            url     : _fs.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _payment;