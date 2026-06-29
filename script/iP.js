/*
geo_location_checker = http://ip-api.com/json/?lang=zh-CN,https://github.com/JinKeel/quantumultx/raw/refs/heads/main/script/iP.js
*/

var obj = JSON.parse($response.body);

var ip = obj.query || "-";
var country = obj.country || "-";
var regionName = obj.regionName || "-";

var text = country+" "+regionName+" IP:"+ip;
var desc = country+" "+regionName+" IP地址:"+ip;

$done({
    ip: text,
    subtitle: text,
    description: desc
});
