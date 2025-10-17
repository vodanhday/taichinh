document.getElementById("zone-37").innerHTML = '<div class="exp_qc_share" data-id="37" data-sleep="5"><div class="exp_qc_one active"><div class="adv header" id="ads_37" style="margin-top:0px;margin-bottom:0px;min-height: 68px;"><div class="e" style="margin-top:0px;"><a href="https://www.seabank.com.vn/ca-nhan/the/the-da-nang/the-da-nang-visa-seasoul-2in1" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/21/b2202862809008ce5181.jpg" alt="Vietnam Finance" /></a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_37" style="margin-top:0px;margin-bottom:0px;min-height: 68px;"><div class="e" style="margin-top:0px;"><a href="https://fidt.vn/dang-ky-dien-dan-hoach-dinh-tai-chinh-ca-nhan-2025/" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/03/27/1920x270erer.png" alt="Vietnam Finance" /></a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_37" style="margin-top:0px;margin-bottom:0px;min-height: 68px;"><div class="e" style="margin-top:0px;"><a href="https://www.ansv.vn/ANSV/" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/09/18/ansv-banner.jpg" alt="Vietnam Finance" /></a></div></div></div></div>';
var scripts = document.querySelectorAll('#zone-37 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-37').appendChild(script);
});