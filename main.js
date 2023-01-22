 var SpeechRecognition = window.webkitSpeechRecognition;
 recog = new SpeechRecognition;


 function beguon() {
     document.getElementById("otxt").innerHTML = "";
     recog.start();
 }

 recog.onresult = function run(event) {
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("otxt").innerHTML = content;
     if (content == "it is about Drive") {
         spek();
     }
 };

 function spek() {
     synth = window.speechSynthesis;
     txb = "Taking your selfie in 5 Seconds";
     ut = new SpeechSynthesisUtterance(txb);
     synth.speak(ut);
     Webcam.attach(camera);

     setTimeout(function() {
         imagie = "selfie1";
         Snapshot();
         Saver1();
         txb = "Taking Your Selfie in Another 5 Seconds";
         ut = new SpeechSynthesisUtterance(txb);
         synth.speak(ut);

     }, 5000)
     setTimeout(function() {
         imagie = "selfie2";
         Snapshot();
         Saver2();
         txb = "Taking Your Selfie in 5 More Seconds Let This Be The Best One";
         ut = new SpeechSynthesisUtterance(txb);
         synth.speak(ut);

     }, 10000)
     setTimeout(function() {
         imagie = "selfie3";
         Snapshot();
         Saver3();

     }, 15000)
 }

 Webcam.set({
     width: 250,
     height: 250,
     image_format: "png",
     png_quality: 90
 });

 function Saver1() {
     fin = document.getElementById("swaganchor");
     lasid = document.getElementById("image1").src;
     fin.href = lasid;
     fin.click();
 }

 function Saver2() {
     fin = document.getElementById("swaganchor");
     lasid = document.getElementById("image2").src;
     fin.href = lasid;
     fin.click();
 }

 function Saver3() {
     fin = document.getElementById("swaganchor");
     lasid = document.getElementById("image3").src;
     fin.href = lasid;
     fin.click();
 }

 function Snapshot() {

     console.log(imagie);

     Webcam.snap(function(data_uri) {
         if (imagie == "selfie1") {
             document.getElementById("edc1").innerHTML = "<img src=" + data_uri + " id='selfie1' />";
         }
         if (imagie == "selfie2") {
             document.getElementById("edc2").innerHTML = "<img src=" + data_uri + " id='selfie2' />";
         }
         if (imagie == "selfie3") {
             document.getElementById("edc3").innerHTML = "<img src=" + data_uri + " id='selfie3' />";
         }


     });
 }


 camera = document.getElementById("Webcam_Status")