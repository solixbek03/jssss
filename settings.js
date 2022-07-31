var elForm = document.querySelector(".form1");
var elInput1 = elForm.querySelector(".input1");
var elInput2 = elForm.querySelector(".input2");

var elP = document.querySelector(".text");

var costDubai =2000;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (isNaN(elInput2.value)) {
    elP.textContent = `${elInput1.value} Son kiriting`
  } 
  else if (elInput2.value < costDubai) {
    elP.textContent = `${elInput1.value} Pulingiz yetmadi`
  }
  else if(elInput2.value >= costDubai){
    elP.textContent = `${elInput1.value} pullingiz yetdi iltimos ragistratsiyadan oting`
  }
})

