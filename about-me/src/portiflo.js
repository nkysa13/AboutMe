'use strict'

import a from "./object.js";

function CPC(tample){
    const tamplate = document.createElement("template");
    tamplate.innerHTML = tample.trim();

    return tamplate.content.firstElementChild;
}
function tagsCreate(...tags){
    let TagRow = CPC(`<div class="row"></div>`)
    for (let i=0;i<tags.length;i++){
         
        TagRow.appendChild(CPC(`<div class="col-4 tag ">${tags[i]}</div>`));
        
    }
    return TagRow;
}
function CreateCard(obj ){
    let card = CPC(`<div class=" col protiflo-card  "></div>`)
    card.appendChild(CPC(`<img src=${obj.urlImage} alt="">`))
    
    let informationCard = CPC(`<div class="information"><div class="row"></div></div>`)

    informationCard.appendChild(CPC(`<div class=" col-6"><nav><a href=${obj.links}>${obj.name}</a></nav></div>`));
    
    let tagsL = CPC(`<div class="col-6 tags"></div>`);
    tagsL.appendChild(tagsCreate(...obj.tags));
    informationCard.appendChild(tagsL);
    card.appendChild(informationCard)
    
    return card
}

let Potriflo = document.body.querySelector(".protiflo")


// for(let i=0 ;i<a.length;i++){
//    Potriflo.appendChild(CreateCard(a[i]))
// }

 function cardCreateLisr(mainObject,listCard){
    for(let i=0 ;i<listCard.length;i++){
    mainObject.appendChild(CreateCard(listCard[i]))
    }
 }
cardCreateLisr(Potriflo,a);

