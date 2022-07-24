var eTrack = document.getElementById('etcap');
var textTrack = eTrack.track;

eTrack.addEventListener('cuechange', cueChange, false);

function cueChange(){
  var cues = textTrack.activeCues;
  if (cues.length > 0){
    document.getElementById("tIns").innerHTML = cues[0].text;
  }
}
