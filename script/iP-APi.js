var nodeName = $environment.params;

$task.fetch({
    url: "http://ip-api.com/json/?lang=zh-CN",
    opts: { policy: nodeName }
}).then(resp => {

    var data = JSON.parse(resp.body);

    var html = `
<div style="text-align:center;font-family:-apple-system;line-height:1;"><br>

<span style="font-size:18.5px;font-weight:650;color:#6E71F2;">IP ${data.query}</span><br>
<span style="color:#AAA;">─</span><br>

<span style="font-size:15px;font-weight:500;">位置${data.country}</span><br>
<span style="color:#AAA;">─</span><br>

<span style="font-size:15px;font-weight:500;">${data.regionName}</span><br>
<span style="color:#AAA;">─</span><br>

<span style="font-size:15px;font-weight:500;">${data.as.split(' ')[0]}</span><br>
<span style="color:#AAA;">─</span><br>

<span style="font-size:15px;font-weight:500;">${data.isp}</span><br>
<span style="color:#AAA;">─</span><br>

<span style="font-size:15px;font-weight:500;">策略${nodeName}</span>
</div>`;

    $done({
        title: "查询结果",
        htmlMessage: html
    });

}).catch(err => {

    $done({
        title: "查询超时",
        message: `节点「${nodeName}」连接超时请稍后再试`
    });

});
