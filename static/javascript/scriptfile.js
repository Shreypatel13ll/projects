const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

button1.addEventListener('click', function(){updateButton(button1)});
button2.addEventListener('click', function(){updateButton(button2)});
button3.addEventListener('click', function(){updateButton(button3)});
button4.addEventListener('click', function(){updateButton(button4)});
button5.addEventListener('click', function(){updateButton(button5)});
button6.addEventListener('click', function(){updateButton(button6)});
button7.addEventListener('click', function(){updateButton(button7)});
button8.addEventListener('click', function(){updateButton(button8)});
button9.addEventListener('click', function(){updateButton(button9)});
function updateButton(button) {
  if (button.value === 'Play') {
    button.value = 'Pause';
    var check = true;
  } else {
    button.value = 'Play';
    var check = false;
  }

  if (check == true){
    if (button != button1){
    button1.value = 'Play';}
    if (button != button2){
      button2.value = 'Play';}
    if (button != button3){
      button3.value = 'Play';}
    if (button != button4){
      button4.value = 'Play';}
    if (button != button5){
      button5.value = 'Play';}
    if (button != button6){
      button6.value = 'Play';}
    if (button != button7){
      button7.value = 'Play';}
    if (button != button8){
      button8.value = 'Play';}
    if (button != button9){
      button9.value = 'Play';}
  }
}

function onYouTubeIframeAPIReady(){
  var e=document.getElementById("1"),t=document.getElementById("button1");
  t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("demo").innerHTML = "":document.getElementById("demo").innerHTML = "";
  t.setAttribute(a)};
  document.getElementById("demo").innerHTML = a;
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
