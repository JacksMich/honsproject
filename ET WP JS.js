var video = document.getElementsByTagName('video')[0];
var tracks = video.textTracks; // returns a TextTrackList
var track = document.getElementById('et metadata').track; //returns TextTrack

track.kind; // "metadata"
track.label; // "ET"
track.language; // "en"

var cues = track.cues;
// var active_cues = track.activeCues; // TextTrackCueList
// var text = active_cues[0].text;
//
// track.activeCues[0].line = 1;
