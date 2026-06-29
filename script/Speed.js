var nodeName = $environment.params;
var Time = Date.now();

$task.fetch({
    url: "http://speed.cloudflare.com/__down?bytes=15728640",
    opts: {
        policy: nodeName
    }
}).then(resp => {

    var ms = Date.now() - Time;
    var ss = ms / 1000;
    var Mbps = (15728640 * 8 / 1000000 / ss).toFixed(2);

    var color = "#FF3B30";
    if (Mbps >= 500) {
        color = "#00C853";
    } else if (Mbps >= 200) {
        color = "#34C759";
    } else if (Mbps >= 100) {
        color = "#007AFF";
    } else if (Mbps >= 50) {
        color = "#FF9500";
    }

    var html = `
<div style="text-align:center;font-family:-apple-system;line-height:1;"><br>

<span style="font-size:25px;font-weight:600;color:${color};">${Mbps} Mbps</span><br>
<span style="color:#999;">──</span><br>

<span style="font-size:15px;font-weight:500;">节点 ${nodeName}</span>

<div>`;

    $done({
        title: "节点测速",
        htmlMessage: html
    });

}).catch(err => {

    $done({
        title: "测速失败",
        message: `节点「${nodeName}」测速失败☹️`
    });

});
