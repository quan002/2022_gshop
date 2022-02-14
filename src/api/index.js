import ajax from './ajax'
/*export function reqAdress(){

}*/
/**
* 获取地址信息 ( 根据经纬度串 )
*/
export const reqAddress = geohash => ajax(`/position/${geohash}`)
export const reqFoodTypes = () => ajax('/index_category')
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
//根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})
//获取一次性验证码
export const reqOneCode = (captcha) => ajax(`/${captcha}`)
//用户名密码登陆
export const reqPwdLogin = (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha},'post')
//发送短信验证码
export const  reqSendCode = (phone) => ajax('/sendcode',{phone})
/*
* 手机号验证码登录
*/
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
/**
* 获取用户信息 ( 根据会话 )
*/
export const reqUser = () => ajax('/userinfo')
//用户登出
export const reqLogout = () => ajax('/logout')