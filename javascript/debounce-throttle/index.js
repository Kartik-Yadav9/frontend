let btnIncrement = document.querySelector("#btnIncrement");
let btnPressed = document.querySelector("#btnPressed");
let btnDebounce = document.querySelector("#btnDebounce");
let btnThrottle = document.querySelector("#btnThrottle");

let pressedCount = 0;
let debounceCount = 0;
let throttleCount = 0;

let debounce = _.debounce(() => {
  btnDebounce.innerText = ++debounceCount;
}, 900);

let throttle= _.throttle(()=>{
btnThrottle.innerText= ++throttleCount
}, 3000)



btnIncrement.addEventListener("click", () => {
  btnPressed.innerText = ++pressedCount;
  debounce();
  throttle()
});
