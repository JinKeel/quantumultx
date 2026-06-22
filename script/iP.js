var obj = JSON.parse($response.body);

var ip = obj.ip || "-";
var country = obj.country || "-";
var subtitle = country + " IP:" + ip;

$done({
    title: "",
    subtitle: subtitle,
    ip: subtitle,
    description: subtitle
});
