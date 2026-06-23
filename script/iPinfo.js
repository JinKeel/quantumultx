const nodeName = $environment.params;

$task.fetch({
    url: "http://ipwho.is/?lang=zh-CN",
    opts: { policy: nodeName }
}).then(resp => {
    const ipwho = JSON.parse(resp.body);

    const html = `
<div style="text-align:center;font-family:-apple-system;line-height:1.5;">

<span style="font-size:19px;font-weight:650;color:#439DF8;">
${ipwho.type} ${ipwho.ip}
</span><br><br>

<span style="font-size:14px;font-weight:500;">
落地 ${ipwho.country} ${ipwho.country_code}
</span><br>

<span style="font-size:14px;font-weight:500;">
运营 ${ipwho.connection.isp}
</span>

</div>`;

    $done({
        title: "查询结果",
        htmlMessage: html
    });

}).catch(() => {

    $done({
        title: "查询超时",
        message: `节点「${nodeName}」连接超时请稍后再试`
    });

});
