/*! =========================================================
 * appCalculator.js
 *
 * Maintainer:
 * Crated by:
 *      Renzen Florendo
 *          - Twitter: @florendo_renz
 *          - Github:  renzen
 *  Version: 1
 *  Date created : Jan 3 2017
 * ========================================================= */
 
var AppdataCalulator = function () {



/*True Values*/ 
var webBrowse = 240;
var emailValue = 0.1;
var social = 120;
var VclipSD = 480;
var VclipHD = 3500;
var MovieSD = 1000;
var MovieHD = 3000;
var InstantMsg = 1;
var MusPod = 150;
var PhotoShLR = 2;
var PhotoShHR = 5;
var VoiceCall = 225;
var VideoCall = 480;
var maxValue = 30000;

/* true logic */
var selectValue = 0;
var selectValueVclipStreaming = 0;
var selectValueTVmovie = 0;
/* true logic */

//var webchart = totalBrowse;




/*True Values*/ 

/* Emails sent/received w/o attachments start*/
//var realValues = [0, 10, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
//var labelValues = ['Low','Low', 'Low', 'Low', 'Low', 'Low','Low', 'Medium', 'Medium', 'Medium', 'Medium', 'Medium', 'High', 'High', 'High', 'High', 'high' ];

var realValues = [0, 100, 200, 300];
var labelValues = ['Low','Low', 'Medium', 'high'];

/* Emails sent/received w/o attachments start*/ 

/* Web Browsing start */
var realValues2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var labelValuesTwo = ['Low','Low', 'Low', 'Low', 'Low', 'Low','Low', 'Low', 'Low', 'Medium', 'Medium','Medium', 'Medium', 'Medium', 'Medium', 'Medium','Medium', 'High', 'High', 'High', 'High','High', 'High', 'High', 'High'];
/* Web Browsing start */

/* Socials */
var realValues3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var labelValuesThree = ['Low','Low', 'Low', 'Low', 'Low', 'Low','Low', 'Low', 'Low', 'Medium', 'Medium','Medium', 'Medium', 'Medium', 'Medium', 'Medium','Medium', 'High', 'High', 'High', 'High','High', 'High', 'High', 'High'];
/* Socials */

/* VideoClipSD */
var realValues4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var labelValuesFour = ['Low','Low', 'Low', 'Medium', 'Medium', 'Medium','High', 'High', 'High'];
/* VideoClipSD */

/*VideoClipHD */
var realValues5 = [0, 4, 4, 8];
var labelValuesFive = ['Low','Low', 'Medium', 'High'];

//var realValues5 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//var labelValuesFive = ['Low','Low', 'Low', 'Medium', 'Medium', 'Medium','High', 'High', 'High'];
/*VideoClipHD */

/* MovieStreaming */
var realValues6 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var labelValuesSix = ['Low','Low', 'Low', 'Medium', 'Medium', 'Medium','High', 'High', 'High'];
/* MovieStreaming */

/* InstantMessages */
var realValues7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var labelValuesSeven = ['Low','Low', 'Low', 'Low', 'Low', 'Medium','Medium', 'Medium', 'Medium', 'High', 'High','High', 'High'];
/* InstantMessages */

/*MovieStreamingHD */
var realValues8 = [0, 4, 4, 8];
var labelValuesEight =['Low', 'Low', 'Medium', 'High'];

//var realValues8 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//var labelValuesEight =['Low','Low', 'Low', 'Medium', 'Medium', 'Medium','High', 'High', 'High'];

/*MovieStreamingHD */

/* PodcastStreaming*/
var realValues9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var labelValuesNine = ['Low','Low', 'Low', 'Low', 'Low', 'Medium','Medium', 'Medium', 'Medium', 'High', 'High','High', 'High'];
/* PodcastStreaming*/

/*PhotoSharingLR*/
var realValues10 = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 260, 480];
var labelValuesTen = ['Low','Low', 'Low', 'Low', 'Low', 'Low','Low', 'Low', 'Low', 'Medium', 'Medium','Medium', 'Medium', 'Medium', 'Medium', 'Medium','Medium', 'High', 'High', 'High', 'High','High', 'High', 'High', 'High'];
/*PhotoSharingLR*/

/* PhotoSharingHR */
//var realValues11 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
//var labelValuesEleven = ['Low','Low', 'Low', 'Medium', 'Medium', 'Medium','Medium', 'Medium', 'Medium', 'Medium', 'Medium','High', 'High', 'High', 'High', 'High','High', 'High', 'High', 'High', 'High'];

var realValues11 = [0, 10, 100, 200];
var labelValuesEleven = ['Low','Low', 'Medium', 'High'];

/* PhotoSharingHR */

/*VoiceCalls */
var realValues12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var labelValuesTwelve = ['Low','Low', 'Low', 'Low', 'Low', 'Medium','Medium', 'Medium', 'Medium', 'High', 'High','High', 'High'];
/*VoiceCalls */

/*VideoCalls */
var realValues13 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var labelValuesThirteen = ['Low','Low', 'Low', 'Low', 'Low', 'Medium','Medium', 'Medium', 'Medium', 'High', 'High','High', 'High'];
/*VideoCalls */



$(document).ready(function(data){

$('#graph').attr('data-percent','500');
$('#offer:contains("undefined")').css({"display": "none"});

/*$("#VclipHD1080").hide();
  $("#PhotoHRen").hide();
  $("#MovieSDzen").hide();*/

/* 
  var val1 = 120;
  var val2 = 80;
  var val3 = 70;
  var val4 = 50;
  var val5 = 40;
  var val6 = 60;
  var val7 = 80;
  
  $("#doughnutChart").drawDoughnutChart([
    { title: "Web Browsing",         value : val1,  color: "#2C3E50" },
    { title: "Emails sent & received", value:  val2,   color: "#FC4349" },
    { title: "Social",      value:  val3,   color: "#6DBCDB" },
    { title: "Video Clip streaming",        value : val4,   color: "#F7E248" },
    { title: "Instant message",        value : val5,   color: "#D7DADB" },
    { title: "Tv $ Movie Streaming",        value : val6,   color: "#FFF" },
    { title: "Music & Podcast streaming",        value : val7,   color: "#009cde" },
    { title: "Photo sharing",        value : val7,   color: "#b40406" },
    { title: "Voice Call",        value : val7,   color: "#febf55" },
    { title: "Video Call",        value : val7,   color: "#959595" }
  ]);
 Chart */

//$('#dataCalculatorWrap').height($(window).height());



/*Slide it start*/  
var minSliderValue = $("#TotalGigaSlide,#TotalGigaSlide2").data("slider-min");
var maxSliderValue = $("#TotalGigaSlide,#TotalGigaSlide2").data("slider-max");

var sliderchange =  $("#TotalGigaSlide").slider({
value : 0,
ticks: [0, 5000, 10000, 15000, 20000,25000, 30000],
ticks_labels: ['0 GB', '5 GB', '10 GB', '15 GB', '20 GB',  '25 GB', '30 GB'],
tooltip: 'always',

/*ticks_snap_bounds: 30*/
formatter: function(value) {
return '' +  value + ' MB';
}
});

var sliderchange2 =  $("#TotalGigaSlide2").slider({
value : 0,
ticks: [0, 5000, 10000, 15000, 20000,25000, 30000],
ticks_labels: ['0 GB', '5 GB', '10 GB', '15 GB', '20 GB',  '25 GB', '30 GB', ''],
tooltip: 'always',
reversed : true,
tooltip_position:'left',
data_slider_orientation: 'vertical',
/*ticks_snap_bounds: 30*/
formatter: function(value) {
return '' + value + ' MB';
}
});

$('#TotalGigaSlide,#TotalGigaSlide2').on('slide', function(slider){
$("#TotalAllocation").val(slider.value);
});

var testing = $("#TotalAllocation").on("keyup", function() {
var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
this.value = val > maxSliderValue ? maxSliderValue : val;
$('#TotalGigaSlide,#TotalGigaSlide2').slider('setValue', val);

/*$('#graph').slider('setValue', val);
$("#graph").attr("width","500");*/



//$('#graph span').data('testing');



//data-percent="0"
});
/*Slide it end*/


/* reset */
$("#reset").click(function(e) {
var val = 0;
var minvalue = $("#EmailSRA,#EmailSent,#SocialsMedia,#VideoClip1,#VideoClip2,#TVMovieStreaming1,#InstantMsgs,#TVMovieStreaming2,#MusicPodcast,#PhotoSharingLR1,#PhotoSharingLR2,#VoiceCalls1,#VideoCalls1").data('slider').minvalue; //store slider min value
$("#EmailSRA,#EmailSent,#SocialsMedia,#VideoClip1,#VideoClip2,#TVMovieStreaming1,#InstantMsgs,#TVMovieStreaming2,#MusicPodcast,#PhotoSharingLR1,#PhotoSharingLR2,#VoiceCalls1,#VideoCalls1").slider('setValue', minvalue); //set value of slider
$("#TheSumMB,#webBrowse,#emailValue,#social,#VclipSD,#VclipHD,#MovieSD,#InstantMsg,#MovieHD,#MusPod,#PhotoShLR,#PhotoShHR,#VoiceCall,#VideoCall").text(0 + " MB");

$("#TotalAllocation,#TotalGigaSlide").val(0);
$("#dataCalculator input,#totalBrowse,webBrowse,span").val(0);
$('#TotalGigaSlide').slider('setValue', val); 
$('#TotalGigaSlide2').slider('setValue', val); 

$("#dataCalculator select").removeAttr('disabled', 'disabled');
$("#dataCalculator .slider.slider-horizontal").removeClass("pointerEvents");
$("#TheSumMB").removeClass("redAlertBG");
$(".Overalert").css({"top": "20%", "opacity": "0"});
$(".redALertdis[value='0']").slider('enable');
$(".Overalert").css({"top": "20%", "opacity": "0", "display": "none"}); 



//other logic
});

/*$("#reset").on("click", function() {
var val = 0;
$('#TotalGigaSlide').slider('setValue', val);

});*/

/* reset */


$(".goto").click( function() {
    $(".hiddenDiv").toggleClass("heightinclude");
    $("#calculatorTotal").addClass("stick");
    $(".data-add h3,.data-add p").addClass("hide");
    
} ); 

$(".specifications").click(function(){
$(".specifications").toggleClass("up down");
});


$(".fa-times").click(function(){
$("#calculatorTotal").removeClass("stick");
$(".data-add h3,.data-add p").removeClass("hide");
});



/* Emails sent/received w/o attachments start*/

var EmailSRA = $('#EmailSRA').slider({
value : 0,
max: 3,
min: 0,
step: 1,
tooltip_position:'bottom',
formatter: function(val) {
return labelValues[val];
}
});

$(EmailSRA).change(function(data) {
$("#TVMovieStreaming1SliderVal").text(realValues[data.value.newValue])
$("#EmailsSent").val(realValues[data.value.newValue]);
Totals(data);
MobileTrick();
});

/* Emails sent/received w/o attachments end */



/* Web Browsing start */

var EmailSent = $('#EmailSent').slider({
value : 0,
max: 24,
min: 0,
step: 8,
tooltip_position:'bottom',

  formatter: function(val) {
  return labelValuesTwo[val];
}
});

$(EmailSent).change(function(data) {
$("#WebBrowsing").val(realValues2[data.value.newValue]);
Totals(data);
MobileTrick();
});

/* Web Browsing end*/


/* Social start*/

var SocialsMedia = $('#SocialsMedia').slider({
value : 0,
max: 24,
min: 0,
step: 8,
tooltip_position:'bottom',
    
    formatter: function(val) {
      return labelValuesThree[val];
    }
});
  
$(SocialsMedia).change(function(data) {
$("#Socials").val(realValues3[data.value.newValue]);
Totals(data);
MobileTrick();
});

/* Social end */ 

/* Video Clip Streaming (720p) SD Start  */

  var VideoClip1 = $('#VideoClip1').slider({
    value : 0,
    max: 8,
    min: 0,
    step: 1,
    tooltip_position:'bottom',

    formatter: function(val) {
      return labelValuesFour[val];
    }
});
  
$(VideoClip1).change(function(data) {
$("#VideoClipSD").val(realValues4[data.value.newValue]);
Totals(data);
MobileTrick();
});



/* Video Clip Streaming (720p) SD  end */


/* Video Clip Streaming (1080p) HD Start */

 var VideoClip2 = $('#VideoClip2').slider({
    value : 0,
    max: 3,
    min: 0,
    step: 1,
    tooltip_position:'bottom',
   
    formatter: function(val) {
      return labelValuesFive[val];
    }
});
  
$(VideoClip2).change(function(data) {
$("#VideoClipHD").val(realValues5[data.value.newValue]);
Totals(data);
MobileTrick();
});


/* Video Clip Streaming (1080p) end */

/* TV & Movie Streaming (SD)  start*/

  var TVMovieStreaming1 = $('#TVMovieStreaming1').slider({
    value : 0,
    max: 8,
    min: 0,
    step: 1,
    tooltip_position:'bottom',
   
    formatter: function(val) {
    return labelValuesSix[val];
    }
});
  
$(TVMovieStreaming1).change(function(data) {
$("#MovieStreaming").val(realValues6[data.value.newValue]);
Totals(data);
MobileTrick();  
});

/* TV & Movie Streaming (SD) end */

/* TV & Movie Streaming (HD)  start*/

  var TVMovieStreaming2 = $('#TVMovieStreaming2').slider({
    value : 0,
    max: 3,
    min: 0,
    step: 1,
    /*ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ticks_labels: ['0 HR', '1 HR', '2 HR', '3 HR', '4 HR', '5 HR', '6 HR', '7 HR', '8 HR'], */
    tooltip_position:'bottom',
   
    formatter: function(val) {
    return labelValuesEight[val];
    }
});
  
$(TVMovieStreaming2).change(function(data) {
$("#MovieStreamingHD").val(realValues8[data.value.newValue]);
Totals(data); 
MobileTrick();   
});


/* TV & Movie Streaming (HD) end */


/* Instant Message Start */
  
    var InstantMsgs = $('#InstantMsgs').slider({
    value : 0,
    max: 12,
    min: 0,
    step: 4,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesSeven[val];
    }
});
  
$(InstantMsgs).change(function(data) {
$("#InstantMessages").val(realValues7[data.value.newValue]);
Totals(data);
MobileTrick();
});
/* Instant Message End */


/* Music Podcast Start */
  
    var MusicPodcast = $('#MusicPodcast').slider({
    value : 0,
    max: 12,
    min: 0,
    step: 4,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesNine[val];
    }
});
  
$(MusicPodcast).change(function(data) {
$("#PodcastStreaming").val(realValues9[data.value.newValue]);
Totals(data);
MobileTrick();
});
/* Music Podcast End */

/* Photo Sharing  LR Start */
  
    var PhotoSharingLR1 = $('#PhotoSharingLR1').slider({
    value : 0,
    max: 24,
    min: 0,
    step: 1,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesTen[val];
    }
});
  
$(PhotoSharingLR1).change(function(data) {
$("#PhotoSharingLR").val(realValues10[data.value.newValue]);
Totals(data);
MobileTrick();
});
/* Photo Sharing LR End */


/* Photo Sharing  HR Start */
  
    var PhotoSharingLR2 = $('#PhotoSharingLR2').slider({
    value : 0,
    max: 3,
    min: 0,
    step: 1,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesEleven[val];
    }
});
  
$(PhotoSharingLR2).change(function(data) {
$("#PhotoSharingHR").val(realValues11[data.value.newValue]);
Totals(data);
MobileTrick();
});
/* Photo Sharing HR End */


/* Voice Call Start */
  
    var VoiceCalls1 = $('#VoiceCalls1').slider({
    value : 0,
    max: 12,
    min: 0,
    step: 4,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesTwelve[val];
    }
});
  
$(VoiceCalls1).change(function(data) {
$("#VoiceCalls").val(realValues12[data.value.newValue]);
Totals(data);
MobileTrick();
});
/* Voice Call End */

/* Video Call Start */
  
    var VideoCalls1 = $('#VideoCalls1').slider({
    value : 0,
    max: 12,
    min: 0,
    step: 4,
    tooltip_position:'bottom',
  
    formatter: function(val) {
    return labelValuesThirteen[val];
    }
});
  
$(VideoCalls1).change(function(data) {
$("#VideoCalls").val(realValues13[data.value.newValue]);
Totals(data);
MobileTrick();

}); 

/* Video Call End */




})


function Totals(data) { 



var EmailsSent =  $("#EmailsSent").val();
var WebBrowsing =  $("#WebBrowsing").val();
var Socials =  $("#Socials").val();
var VideoClipSD =  $("#VideoClipSD").val();
var VideoClipHD =  $("#VideoClipHD").val();
var MovieStreaming =  $("#MovieStreaming").val();
var InstantMessages =  $("#InstantMessages").val();
var MovieStreamingHD =  $("#MovieStreamingHD").val();
var PodcastStreaming =  $("#PodcastStreaming").val();
var PhotoSharingLR =  $("#PhotoSharingLR").val();
var PhotoSharingHR =  $("#PhotoSharingHR").val();
var VoiceCalls =  $("#VoiceCalls").val();
var VideoCalls =  $("#VideoCalls").val();



if( $("#PhotoSharingLR2").val() == 1) { 
selectValue = PhotoShLR; 
} 
else { 
selectValue = PhotoShHR; 
} 


if ($("#TVMovieStreaming2").val() == 1) {

selectValueTVmovie = MovieSD;
}
else {
selectValueTVmovie =  MovieHD;  
}


if ($("#VideoClip2").val() == 1) {
selectValueVclipStreaming = VclipSD;
}
else {
selectValueVclipStreaming =  VclipHD;  
}


/* web browsing 1*/

var totalBrowse =  parseInt(WebBrowsing) * webBrowse;
/* web browsing */

/* Emails  2*/

var totalEmail =  parseInt(EmailsSent) * emailValue;
/*  Emails */

/* Social 3 */

var totalSocial =  parseInt(Socials) * social;
/* Social */

/* Video Clip Streaming SD 4 */

var totalVclipSD =  parseInt(VideoClipSD) * VclipSD ;
/* Video Clip Streaming SD */

/* Video Clip Streaming HD 5 */

var totalVclipHD =  parseInt(VideoClipHD) * selectValueVclipStreaming ;

// var totalVclipHD =  parseInt(VideoClipHD) * VclipHD ;
/* Video Clip Streaming HD */

/* TV & Movie Streaming (SD) 6 */

var totalMovieSD =  parseInt(MovieStreaming) * MovieSD;
/* TV & Movie Streaming (SD)*/

/* TV & Movie Streaming (SD) 8 */ 

var totalMovieHD =  parseInt(MovieStreamingHD) * selectValueTVmovie;

//var totalMovieHD =  parseInt(MovieStreamingHD) * MovieHD;
/* TV & Movie Streaming (SD)*/

/* Instant Message 7 */

var totalInstantMsg =  parseInt(InstantMessages) * InstantMsg;
/* Instant Message */

/* Music Podcast 9 */

var totalMusPod =  parseInt(PodcastStreaming) * MusPod;
/* Music Podcast */

/* Photo Sharing LR 10 */

var totalPhotoShLR =  parseInt(PhotoSharingLR) * PhotoShLR;
/* Photo Sharing LR */

/* Photo Sharing HR 11 */

var totalPhotoShHR =  parseInt(PhotoSharingHR) * selectValue;
//var totalPhotoShHR =  parseInt(PhotoSharingHR) * PhotoShHR;

/* Photo Sharing HR */

/* Voice Call 12 */

var totalVoiceCall =  parseInt(VoiceCalls) * VoiceCall;
/* Voice Call 12 */

/* Video Call 13 */

var totalVideoCall =  parseInt(VideoCalls) * VideoCall;
/* Video Call 13 */



var totalData = parseInt(totalBrowse) + parseInt(totalEmail) + parseInt(totalSocial) + parseInt(totalVclipSD) + parseInt(totalVclipHD) + parseInt(totalMovieSD) + parseInt(totalInstantMsg) + parseInt(totalMovieHD) + parseInt(totalMusPod) + parseInt(totalPhotoShLR) + parseInt(totalPhotoShHR) + parseInt(totalVoiceCall) + parseInt(totalVideoCall); 

//var totalData = parseInt(totalBrowse) + parseInt(totalEmail) + parseInt(totalSocial) + parseInt(totalVclipSD) + parseInt(totalVclipHD) + parseInt(totalMovieSD) + parseInt(totalInstantMsg) + parseInt(totalMovieHD) + parseInt(totalMusPod) + parseInt(totalPhotoShLR) + parseInt(totalPhotoShHR) + parseInt(totalVoiceCall) + parseInt(totalVideoCall); 


//$("#TVMovieStreaming1SliderVal2").text(total);

//console.log(Totals(150).format('0.0a'));

var theTotal =totalData * 0.001;
var TotalGB = theTotal.toFixed(2);

$("#TheSumMB").text(TotalGB + '' +' GB');
$("#TotalAllocation").val(totalData);


/* web browsing 1 */
$("#webBrowse").text(totalBrowse + '' + ' MB');
/* web browsing */ 

/* Emails 2 */
$("#emailValue").text(totalEmail + '' + ' MB');  
/* Emails */

/* Social 3 */
$("#social").text(totalSocial + '' + ' MB');  
/* Social */

/* Video Clip Streaming SD 4 */
$("#VclipSD").text(totalVclipSD + '' + ' MB');  
/* Video Clip Streaming SD */

/* Video Clip Streaming HD 5 */
$("#VclipHD").text(totalVclipHD + '' + ' MB');  
/* Video Clip Streaming HD */
 
/* TV & Movie Streaming (SD) 6*/
$("#MovieSD").text(totalMovieSD + '' + ' MB');  
/* TV & Movie Streaming (SD)*/

/* TV & Movie Streaming (SD) 7*/
$("#MovieHD").text(totalMovieHD + '' + ' MB');  
/* TV & Movie Streaming (SD)*/

/* Instant Message 8 */
$("#InstantMsg").text(totalInstantMsg + '' + ' MB');  
/* Instant Message */

/* Music Podcast  9 */
$("#MusPod").text(totalMusPod + '' + ' MB');  
/* Music Podcast */

/* Photo Sharing LR 10 */
$("#PhotoShLR").text(totalPhotoShLR + '' + ' MB');  
/* Photo Sharing LR */

/* Photo Sharing HR 11 */
$("#PhotoShHR").text(totalPhotoShHR + '' + ' MB');  
/* Photo Sharing HR */

/* Voice Call 12 */
$("#VoiceCall").text(totalVoiceCall + '' + ' MB');  
/* Voice Call */


/* Video Call 13 */
$("#VideoCall").text(totalVideoCall + '' + ' MB');  
/* Video Call */

$("#TotalAllocation").trigger("keyup");
/*changeVideoStreaming(data);
changeMovieStreaming(data);
changePhotoSharing(data);
*/
RedAlert(data); 




}


/*
function changeVideoStreaming(data){
/*change value Video Streaming*/
/*
$("#changeSDHD").change(function(data){
Totals(data);
replaceRedAlert(data);


if($('#changeSDHD').val() == 'VclipSD720') {
$("#VclipSD720").show();
$("#VclipHD1080").hide();

var minvalue = $("#VideoClip1,#VideoClip2").data('slider').minvalue; //store slider min value
$("#VideoClip1,#VideoClip2").slider('setValue', minvalue); //set value of slider
$("#VclipSD,#VclipHD").text(0 + " MB");
$("#VideoClipSD").val(0);
$("#VideoClipHD").val(0);

var val2 = totalData - parseInt(VideoClipHD);
$('#TotalGigaSlide').slider(val2);



} else {

$("#VclipSD720").hide();
$("#VclipHD1080").show();

var minvalue = $("#VideoClip1,#VideoClip2").data('slider').minvalue; //store slider min value
$("#VideoClip1,#VideoClip2").slider('setValue', minvalue); //set value of slider
$("#VclipSD,#VclipHD").text(0 + " MB");
$("#VideoClipSD").val(0);
$("#VideoClipHD").val(0);

var val3 = totalData - parseInt(VideoClipSD);
$('#TotalGigaSlide').slider(val3);
}



}); 
/*change value Video Streaming*/
/*} */

/*
function changeMovieStreaming(data){
/*change value Movie Streaming */
/*
$("#movieSDHD").change(function(data){
Totals(data);
replaceRedAlert(data);
$("#TotalAllocation").trigger("keyup");   
if($('#movieSDHD').val() == 'movieSD') {
$("#MovieSDren").show();
$("#MovieSDzen").hide();

var minvalue = $("#TVMovieStreaming1,#TVMovieStreaming2").data('slider').minvalue; //store slider min value
$("#TVMovieStreaming1,#TVMovieStreaming2").slider('setValue', minvalue); //set value of slider
$("#MovieSD,#MovieHD").text(0 + " MB");
$("#MovieStreaming").val(0);
$("#MovieStreamingHD").val(0);

var val3 = totalData - parseInt(MovieStreaming);
$('#TotalGigaSlide').slider(val3);



} else {


$("#MovieSDren").hide();
$("#MovieSDzen").show();
var minvalue = $("#TVMovieStreaming1,#TVMovieStreaming2").data('slider').minvalue; //store slider min value
$("#TVMovieStreaming1,#TVMovieStreaming2").slider('setValue', minvalue); //set value of slider
$("#MovieSD,#MovieHD").text(0 + " MB");
$("#MovieStreaming").val(0);
$("#MovieStreamingHD").val(0);

var val4 = totalData - parseInt(MovieStreamingHD);
$('#TotalGigaSlide').slider(val4);


}
}); */
/*change value Movie Streaming */
/*}*/

/*
function changePhotoSharing(data){
/*change value Photo Sharing */
/*
$("#photoHRLR").change(function(){
Totals(data);
replaceRedAlert(data);
if($('#photoHRLR').val() == 'photoLR') {
$("#PhotoLRen").show();
$("#PhotoHRen").hide();

var minvalue = $("#PhotoSharingLR1,#PhotoSharingLR2").data('slider').minvalue; //store slider min value
$("#PhotoSharingLR1,#PhotoSharingLR2").slider('setValue', minvalue); //set value of slider
$("#PhotoShLR,#PhotoShHR").text(0 + " MB");
$("#PhotoSharingLR").val(0);
$("#PhotoSharingHR").val(0);

} else {

$("#PhotoLRen").hide();
$("#PhotoHRen").show();
var minvalue = $("#PhotoSharingLR1,#PhotoSharingLR2").data('slider').minvalue; //store slider min value
$("#PhotoSharingLR1,#PhotoSharingLR2").slider('setValue', minvalue); //set value of slider
$("#PhotoShLR,#PhotoShHR").text(0 + " MB");
$("#PhotoSharingLR").val(0);
$("#PhotoSharingHR").val(0);


}
}); 
/*change value Photo Sharing */
/*}
*/
 

function MobileTrick(data) {
/* mobile Trick */
if( $("#TotalAllocation").val() > 0) 
$("#calculatorTotal").addClass("stick"),
 $(".data-add h3,.data-add p").addClass("hide"),
$(".slider-tick-label").css({"visibility": "visible"}); 
else
$("#calculatorTotal").removeClass("stick"),
$(".data-add h3").removeClass("hide"),
$(".slider-tick-label").css({"visibility": "hidden"}); 

/* mobile Trick */
}


function RedAlert(data) {
/* Red Alert */


//var maxValue = 15000 * 0.001;
//var MaxValueAlert = maxValue.toFixed(2);

if( $("#TotalAllocation").val() > maxValue) {
$("#TheSumMB").addClass("redAlertBG");

//alert($(".redALertdis[value='0']").id);
//$(".redALertdis[value='0']").find().addClass("pointerEvents");
//$(".redALertdis[value='0']").addClass("pointerEvents");
//$(".redALertdis[value='0']").slider({ id: "pointerEvents"});
//$(".redALertdis[value='0']"),$(this).('redALertdis').closest('.slider-horizontal')).addClass('pointerEvents');

$(".redALertdis[value='0']").slider('disable');
$("#dataCalculator select").attr('disabled', 'disabled');
$(".Overalert").css({"top": "11%", "opacity": "1", "display": "block"});
$(".slider.slider-vertical .slider-track-low").css({"background": "#cc1818"}); 
$(".slider.slider-vertical .slider-track-high").css({"background": "#cc1818"}); 

}
else {
$(".redALertdis[value='0']").slider('enable');
replaceRedAlert(data); 
$(".slider.slider-vertical .slider-track-low").css({"background": "#2dbe60"}); 
$(".slider.slider-vertical .slider-track-high").css({"background": "#2dbe60"}); 
/* Red Alert */
}
}

function replaceRedAlert(data){
$("#dataCalculator select").removeAttr('disabled', 'disabled');
$("#dataCalculator .slider.slider-horizontal").removeClass("pointerEvents");
$("#TheSumMB").removeClass("redAlertBG");
$(".Overalert").css({"top": "20%", "opacity": "0", "display": "none"}); 
//$(".redALertdis[value='0']").slider('enable');

}

 /* offer
function recommendeOffer(data){

var offer;



if( $("#TotalAllocation").val() <= 5000) {
    offer = "<a href='http://smart.com.ph/Pages/mydata' class='green'> See offers not greater than 5 GB</a>";
    $("#offer").addClass('displayOffer');
    $("#offer").css({"top": "75%", "opacity": "1", "display": "block", "transition": "all 0.5s ease"}); 
    
} else if ($("#TotalAllocation").val() <= 10000) {

     offer = "<a href='http://smart.com.ph/Pages/mydata' class='blue'> See offers not greater than 10 GB</a>";
     $("#offer").css({"top": "75%", "opacity": "1", "display": "block"});

    } else if ( $("#TotalAllocation").val() <= 15000) {

    offer = "<a href='http://smart.com.ph/Pages/mydata' class='magenta'> See offers not greater than 15 GB</a>";
    $("#offer").css({"top": "75%", "opacity": "1", "display": "block"});

} else if ( $("#TotalAllocation").val() <= 20000) {

    offer = "<a href='http://smart.com.ph/Pages/mydata' class='gray'> See offers not greater than 20 GB</a>";
    $("#offer").css({"top": "75%", "opacity": "1", "display": "block"});

} else if ( $("#TotalAllocation").val() <= 25000) {
    offer = "<a href='http://smart.com.ph/Pages/mydata' class='medblue'> See offers not greater than 25 GB</a>";
    $("#offer").css({"top": "75%", "opacity": "1", "display": "block"});

} else if ( $("#TotalAllocation").val() <= 30000) {
    offer = "<a href='http://smart.com.ph/Pages/mydata' class='gray'> See offers not greater than 30 GB</a>";
    $("#offer").css({"top": "75%", "opacity": "1", "display": "block"});
} else if ( $("#TotalAllocation").val() = 0 ) {
    offer = "No offer yet";
    $("#offer").css({"top": "75%", "opacity": "1", "display": "none"});
}
document.getElementById("offer").innerHTML = offer;
}

 offer */


/*$(window).scroll(function () {
var scroll = $(window).scrollTop();
if ($(window).scrollTop() + $(window).height() > $(document).height() - 1850) {
$(".data-holder").removeClass("stick")
} else {
MobileTrick();
}
});*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var targetPosition = $(".datacalc-pp");
    var Position = targetPosition.offset().top;
    if (scroll > Position) {
        $(".data-holder,#calculatorTotal").removeClass("stick");
        $(".data-add h3").removeClass("hide");
    } else {

        //MobileTrick();
    }
});



var DataEvents = function () {
        
        Totals();
        MobileTrick();
        RedAlert();
        replaceRedAlert();
       /* changePhotoSharing();
        changeMovieStreaming();
        changeVideoStreaming();*/
}

 return {
        DataEvents: DataEvents
        } 



}();

