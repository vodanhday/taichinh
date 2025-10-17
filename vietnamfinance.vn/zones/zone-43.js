document.getElementById("zone-43").innerHTML = '<div class="adv header" id="ads_43" style="margin-top:0px;margin-bottom:0px;"><div class="e" style=""></div></div>';
var scripts = document.querySelectorAll('#zone-43 script');
scripts.forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => {script.setAttribute(attr.name, attr.value);});
    script.textContent = oldScript.textContent;
    
    oldScript.remove();
    document.getElementById('zone-43').appendChild(script);
});