document.getElementById("zone-24").innerHTML = '<div class="exp_qc_share" data-id="24" data-sleep="5"><div class="exp_qc_one active"><div class="adv header" id="ads_24" style="margin-top:0px;margin-bottom:0px;min-height: 275px;"><div class="e" style="margin-top:0px;"><a href="https://byvn.net/BhuM" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/10/03/1920x270 (1).png" alt="Vietnam Finance" /></a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_24" style="margin-top:0px;margin-bottom:0px;min-height: 275px;"><div class="e" style="margin-top:0px;"><a href="https://www.seabank.com.vn/ca-nhan/the/the-da-nang/the-da-nang-visa-seasoul-2in1" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/21/b2202862809008ce5181.jpg" alt="Vietnam Finance" /></a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_24" style="margin-top:0px;margin-bottom:0px;min-height: 275px;"><div class="e" style="margin-top:0px;"><a href="https://dpm.vn/" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/08/PVFCCo_1920x270.jpg" alt="Vietnam Finance" /></a></div></div></div></div>';
var scripts = document.querySelectorAll('#zone-24 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-24').appendChild(script);
});