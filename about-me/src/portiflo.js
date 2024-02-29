export function CPC(tample){
    const tamplate = document.createElement("template");
    tamplate.innerHTML = tample.trim();

    return tamplate.content.firstElementChild;
}
