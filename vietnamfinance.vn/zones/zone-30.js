document.getElementById("zone-30").innerHTML = '<div class="exp_qc_share" data-id="30" data-sleep="5"><div class="exp_qc_one active"><div class="adv header" id="ads_30" style="margin-top:0px;margin-bottom:0px;"><div class="e" style="margin-top:0px;"><a href="https://ancuongflooring.com/" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/13/Lamsong_Bannerads_082025.jpg" alt="Vietnam Finance" /></a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_30" style="margin-top:0px;margin-bottom:0px;"><div class="e" style="margin-top:0px;"><a href="https://fidt.vn/dang-ky-dien-dan-hoach-dinh-tai-chinh-ca-nhan-2025/" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/07/300x600.png" alt="Vietnam Finance" /></a></div></div></div></div>';
var scripts = document.querySelectorAll('#zone-30 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-30').appendChild(script);
});