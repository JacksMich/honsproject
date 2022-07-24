/*
https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent 
- this website was used in obtaining knowledge of code used in this file and examples were used to help create code.
*/


var eTrack = document.getElementById('etcap'); //the html <track> element is assigned to the eTrack variable.
var textTrack = eTrack.track; //this textTrack variable stores a reference to track, '.track' allows fields of the webvtt file track content to be accessed.

eTrack.addEventListener('cuechange', cueChange, false);

function cueChange(){
  var cues = textTrack.activeCues;
  if (cues.length > 0){
    document.getElementById("tIns").innerHTML = cues[0].text; //this gets the ID of the paragraph from the website and changes the text to the cues in the webvtt file. https://player.support.brightcove.com/general/implementing-cue-points-programmatically.html
  }
}
