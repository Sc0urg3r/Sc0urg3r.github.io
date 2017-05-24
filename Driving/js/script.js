/*
  Armand Raynor

  <video contorls id="myVideos">
  </video>
*/

var videoSource = new Array();
var i = 0;

videoSource[0] = 'videos/Driving.mp4';
videoSource[1] = 'videos/Walking.mp4';

var videoCount = videoSource.length;
var myVideos = document.getElementById("myVideos")

myVideos.setAttribute("src", videoSource[0]);

myVideos.addEventListener("ended", endedHandler, false);

function playVideo(videoNum) {
    myVideos.setAttribute("src", videoSource[videoNum]);
    myVideos.load();
    myVideos.play();
}

function endedHandler() {
    i++;
    if (i == videoCount - 1) {
      i = 0;
    }
    playVideo(i);
}