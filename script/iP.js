var obj = JSON.parse($response.body);

var ip = obj.query || "-";
var country = obj.country || "-";
var regionName = obj.regionName || "-";

var subtitle = country + " " + regionName + " IP:" + ip;

$done({
    title: "",
    subtitle: subtitle,
    ip: subtitle,
    description: subtitle
});
