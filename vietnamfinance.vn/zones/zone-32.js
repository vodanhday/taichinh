document.getElementById("zone-32").innerHTML = '<div class="adv header" id="ads_32" style="margin-top:0px;margin-bottom:0px;"><div class="e" style="margin-top:0px;"><ins class="adsbygoogle"       style="display:block"       data-ad-client="ca-pub-7221756020139234"       data-ad-slot="2596791796"       data-ad-format="auto"       data-full-width-responsive="true"></ins>  <script>       (adsbygoogle = window.adsbygoogle || []).push({});  </script>  </div></div>';
var scripts = document.querySelectorAll('#zone-32 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-32').appendChild(script);
});