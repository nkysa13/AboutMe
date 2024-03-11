'use strict'
import a from "./object.js";
let b=a
export function CPC(tample){
    const tamplate = document.createElement("template");
    tamplate.innerHTML = tample.trim();

    return tamplate.content.firstElementChild;
}
let o = `<div class=" col-xl-3 col-lg-4 col-sm-12 col-md-6 protiflo-card  ">
<img src=${b.urlImage} alt="">
<div id="information">
  <div class="row">
    <div class="col-sm-6 col-12">
      <nav>
        <a href=${b.links}>${b.name}</a>
      </nav>
    </div>
    <div class="col-6 tags">
      <div class="row tagsplace">
      
      </div>
    </div>
  </div>
  
  


</div>

</div>`
let Potriflo = document.body.querySelector(".protiflo")

Potriflo.appendChild(CPC(o));
