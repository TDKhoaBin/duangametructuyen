let usernameRef = document.getElementById("username");
let phoneRef = document.getElementById("phone");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 4em;
        top: 7em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
       height: 4em;
        top: 7em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};
//Khi click vao phone number 
phoneRef.addEventListener("focus",()=>{
    eyeL.style.cssText = `
    left: 1em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 1em;
    top: 1.12em;
  `;
  normalHandStyle();
})
//Khi click vao uername
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.62em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.62em;
  `;
  normalHandStyle();
});
//Khi click vao password
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
        height: 7.56em;
        top: 2.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 7.56em;
    top: 2.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});
//Khi click ra ngoai
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef && clickedElem != phoneRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});