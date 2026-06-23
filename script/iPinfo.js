const nodeName = $environment.params;

$task.fetch({
    url: "http://ip-api.com/json/?lang=zh-CN",
    opts: { policy: nodeName }
}).then(resp => {
    
    const data = JSON.parse(resp.body);
    const html = `
<div style="text-align:center;font-family:-apple-system;line-height:1.2;"><br>

<span style="font-size:18px;font-weight:650;color:#7987F2;">
IP ${data.query}
</span><br>

<span style="color:#AAA;">─</span><br>

<span style="font-size:14px;font-weight:500;">
位置${data.country} ${data.countryCode} ${data.regionName}
</span><br>

<span style="color:#AAA;">─</span><br>

<span style="font-size:14px;font-weight:500;">
运营${data.isp}
</span><br>

<span style="color:#AAA;">─</span><br>

<span style="font-size:14px;font-weight:500;">
策略${nodeName}
</span>

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
