
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha3841BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="ET WP CSS.css">
  <script type="text/javascript" src="ET WP JS.js"></script>

  <title>Emotive Track </title>



</head>

<body >

<main>
<header>
  <h1>Emotive Track</h1>
</header>

<div class="container-md">
<p>As the video plays, the emotions appears following the video track. The emotions are attached to the character with their names and are assigned a colour based on the emotion. </p>
<video id="excerptVid" controls >
<source src="/Users/jacksmich/Documents/Honours project/Appendices/excerpt.mp4" type="video/mp4">
<track label="ET" kind="captions" srclang="en" src="/Users/jacksmich/Documents/Honours project/Appendices/emotiveTrack.vtt" id="etcaptions" default>
</video>
</div>

<div class="container-md">
<p>This is the alternative track, which does not include colour. Accessibilty option:</p>
<video controls>
<source src="/Users/jacksmich/Documents/Honours project/Appendices/excerpt.mp4" type="video/mp4">
<track label="ET" kind="captions" srclang="en" src="/Users/jacksmich/Documents/Honours project/Appendices/emotiveTrackacc.vtt" default>
</video>
</div>

</main>



</body>
</html>
