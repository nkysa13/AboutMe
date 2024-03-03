'use strict'

export function CPC(tample){
    const tamplate = document.createElement("template");
    tamplate.innerHTML = tample.trim();

    return tamplate.content.firstElementChild;
}
let o = `<div class=" col-xl-3 col-lg-4 col-sm-12 col-md-6 protiflo-card  ">
<img src="/work.png" alt="">
<div id="information">
  <div class="row">
    <div class="col-6">
      <nav>
        <a href="https://nkysa13.github.io/Blog-preview-card/">Blog preview card</a>
      </nav>
    </div>
    <div class="col-6 tags">
      <div class="row">
        <div class="col-4 tag ">html</div>
        <div class="col-4 tag ">css</div>
        <div class="col-4 tag ">javaScript </div>
        <div class="col-4 tag ">vite</div>
      </div>
    </div>
  </div>
  
  


</div>

</div>`
let Potriflo = document.body.querySelector(".protiflo")
Potriflo.appendChild(CPC(o));
Potriflo.appendChild(CPC(o));
Potriflo.appendChild(CPC(o));
Potriflo.appendChild(CPC(o));