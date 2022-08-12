// var WaveSurfer = require("wavesurfer.js");
// import WaveSurfer from "wavesurfer.js";

$(document).ready(function(){
  $('.fade').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  });
});

// audioPlayer = function() {

//   var wavesurfer = WaveSurfer.create({
//     container: '#waveform'
//   });

//   wavesurfer.load('../audio/Beyond the Reporting.mp3');

//   wavesurfer.getDuration('../audio/Beyond the Reporting.mp3');

//   wavesurfer.on('ready', function () {
//     wavesurfer.play('../audio/Beyond the Reporting.mp3');
//   });

// }
// audioPlayer();


