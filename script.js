function male() {
    document.querySelector(".wemen").style.visibility = "hidden";
    document.getElementById("area-1").style.visibility="hidden";
    document.getElementById("area-2").style.visibility="hidden";
    document.getElementById("area-3").style.visibility="hidden";
    document.getElementById("area-4").style.visibility="hidden";
    document.getElementById("area-5").style.visibility="hidden";
    document.querySelector(".men").style.visibility = "visible";
    document.querySelector("#text1").style.visibility = "visible";
    document.querySelector("#text2").style.visibility = "visible";
    document.querySelector("#text3").style.visibility = "visible";
    document.querySelector("#text4").style.visibility = "visible";

   
  }

function female(){
    document.querySelector(".wemen").style.visibility = "visible";
    document.getElementById("area-1").style.visibility="visible";
    document.getElementById("area-2").style.visibility="visible";
    document.getElementById("area-3").style.visibility="visible";
    document.getElementById("area-4").style.visibility="visible";
    document.getElementById("area-5").style.visibility="visible";
    document.querySelector(".men").style.visibility = "hidden";
    document.querySelector("#text1").style.visibility = "hidden";
    document.querySelector("#text2").style.visibility = "hidden";
    document.querySelector("#text3").style.visibility = "hidden";
    document.querySelector("#text4").style.visibility = "hidden";

}

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
