document.getElementById("zone-26").innerHTML = '<div class="exp_qc_share" data-id="26" data-sleep="5"><div class="exp_qc_one active"><div class="adv header" id="ads_26" style="margin-top:0px;margin-bottom:0px;min-height: 250px;"><div class="e" style="margin-top:0px;"><a href="https://docs.google.com/forms/d/e/1FAIpQLScj1DXdgQo7HbESGUKThQjd11EXHHiDELU2SDVPmtVKXI2rug/viewform" target="_blank" rel="nofollow">                              <img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/10/17/1760669050-CAFE TALK 300x250.jpg" alt="Vietnam Finance" />                            </a></div></div></div><div class="exp_qc_one"><div class="adv header" id="ads_26" style="margin-top:0px;margin-bottom:0px;min-height: 250px;"><div class="e" style="margin-top:0px;"><a href="https://sungroup.com.vn/en" target="_blank" rel="nofollow"><img loading="lazy" src="https://i.ex-cdn.com/vietnamfinance.vn/files/qc/2025/08/04/view.png" alt="Vietnam Finance" /></a></div></div></div></div>';
var scripts = document.querySelectorAll('#zone-26 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-26').appendChild(script);
});