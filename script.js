window.onscroll = function() {myFunction()};
var inleft = document.querySelector(".inleft")
var inright = document.querySelector(".inright")

console.log(window)
function myFunction() {
  if (document.documentElement.scrollTop > 1000) {
inleft.classList.add("slideinleft")
inright.classList.add("slideinright")
  }
  if(document.documentElement.scrollTop<600){
    inleft.classList.remove("slideinleft")
    inright.classList.remove("slideinright")
  }
}