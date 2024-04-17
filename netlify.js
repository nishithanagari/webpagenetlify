//   if (formId && submitBtnVariant) 
//   {
//     if(window?.hsFormButtons) {
//       window.hsFormButtons[formId] = `button-${submitBtnVariant}`
//     } else 
//     {
//       window.hsFormButtons = {
//         [formId]: `button-${submitBtnVariant}`,
//       }
//     }
  
//   }


function platform(){
    let platformside=document.getElementById("platformside")
    console.log(platformside);
    let res=platformside.classList.toggle("true")
    if(res){
        platformside.style.display="block"
    }
    else{
        platformside.style.display="none"
    }
}
function solution(){
    let platformside2=document.getElementById("platformside2")
    console.log(platformside2);
    let res1=platformside2.classList.toggle("true")
    if(res1){
        platformside2.style.display="block"
    }
    else{
        platformside2.style.display="none"
    }
}

function startbuilding(){
    let platformside3=document.getElementById("platformside3")
    console.log(platformside3);
    let res2=platformside3.classList.toggle("true")
    if(res2){
        platformside3.style.display="block"
    }
    else{
        platformside3.style.display="none"
    }
}