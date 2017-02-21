/*! =========================================================
 * appCalculator.js
 *
 * Author: Renzen Florendo
 * Crated by:
 *      Renzen Florendo
 *          - Github:  renzen
 *  Version: 1
 *  Date created : Jan 3 2017
 * ========================================================= */
 
( function() {  



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
var maxGB = 30001;

/* true logic */
var selectValue = 0;
var selectValueVclipStreaming = 0;
var selectValueTVmovie = 0;
/* true logic */


/*True Values*/ 

var realValues = [0, 100, 200, 300];
var labelValues = ['Low','Low', 'Medium', 'High'];

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


$('#offer:contains("undefined")').css({"display": "none"});

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
$(".active .indicatorTip").css({"visibility": "hidden"}); 
  

});

/* reset */

/* click functions */
$(".goto").click( function() {
    $(".hiddenDiv").toggleClass("heightinclude");
    $("#calculatorTotal").addClass("stick");
    $(".data-add h2").addClass("hide");
}); 

$(".specifications").click(function(){
$(".specifications").toggleClass("up down");
});

$(".fa-times").click(function(){
$("#calculatorTotal").removeClass("stick");
$(".data-add h2").removeClass("hide");
});
/* click functions */


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



$(EmailSRA).on('change tap', function(data) {

$("#TVMovieStreaming1SliderVal").text(realValues[data.value.newValue])
$("#EmailsSent").val(realValues[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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

$(EmailSent).on('change tap', function(data) {
$("#WebBrowsing").val(realValues2[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass(); 
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
  
$(SocialsMedia).on('change tap', function(data) {
$("#Socials").val(realValues3[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(VideoClip1).on('change tap', function(data) {
$("#VideoClipSD").val(realValues4[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(VideoClip2).on('change tap', function(data) {
$("#VideoClipHD").val(realValues5[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(TVMovieStreaming1).on('change tap', function(data) {
$("#MovieStreaming").val(realValues6[data.value.newValue]);
Totals(data);
MobileTrick();  
Changeclass();
});

/* TV & Movie Streaming (SD) end */

/* TV & Movie Streaming (HD)  start*/

  var TVMovieStreaming2 = $('#TVMovieStreaming2').slider({
    value : 0,
    max: 3,
    min: 0,
    step: 1,
    tooltip_position:'bottom',
    formatter: function(val) {
    return labelValuesEight[val];
    }
});
  
$(TVMovieStreaming2).on('change tap', function(data) {
$("#MovieStreamingHD").val(realValues8[data.value.newValue]);
Totals(data); 
MobileTrick();  
Changeclass(); 
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
  
$(InstantMsgs).on('change tap', function(data) {
$("#InstantMessages").val(realValues7[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(MusicPodcast).on('change tap', function(data) {
$("#PodcastStreaming").val(realValues9[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(PhotoSharingLR1).on('change tap', function(data) {
$("#PhotoSharingLR").val(realValues10[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(PhotoSharingLR2).on('change tap', function(data) {
$("#PhotoSharingHR").val(realValues11[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(VoiceCalls1).on('change tap', function(data) {
$("#VoiceCalls").val(realValues12[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();
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
  
$(VideoCalls1).on('change tap', function(data) {
$("#VideoCalls").val(realValues13[data.value.newValue]);
Totals(data);
MobileTrick();
Changeclass();

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
/* Video Clip Streaming HD */

/* TV & Movie Streaming (SD) 6 */
var totalMovieSD =  parseInt(MovieStreaming) * MovieSD;
/* TV & Movie Streaming (SD)*/

/* TV & Movie Streaming (SD) 8 */ 
var totalMovieHD =  parseInt(MovieStreamingHD) * selectValueTVmovie;
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
RedMax(data); 
Indicator(data);
}

function Indicator(data) {

if( $("#EmailSent").val() == 0) {
    webtooltip = "Low";
} else if ($("#EmailSent").val() == 8) {

     webtooltip = "Low";
    

} else if ( $("#EmailSent").val() == 16) {

    webtooltip = "Medium";
    

} else if ( $("#EmailSent").val() == 24) {

    webtooltip = "High";
   
}
document.getElementById("webtooltip").innerHTML = webtooltip;

if( $("#EmailSRA").val() == 0) {
    emailtooltip = "Low";

    
} else if ($("#EmailSRA").val() == 1) {

     emailtooltip = "Low";
    

} else if ( $("#EmailSRA").val() == 2) {

    emailtooltip = "Medium";
    

} else if ( $("#EmailSRA").val() == 3) {

    emailtooltip = "High";
   
}
document.getElementById("emailtooltip").innerHTML = emailtooltip;


if( $("#SocialsMedia").val() == 0) {
    socialtooltip = "Low";
} else if ($("#SocialsMedia").val() == 8) {

     socialtooltip = "Low";
    

} else if ( $("#SocialsMedia").val() == 16) {

    socialtooltip = "Medium";
    

} else if ( $("#SocialsMedia").val() == 24) {

    socialtooltip = "High";
   
}
document.getElementById("socialtooltip").innerHTML = socialtooltip;

if( $("#VideoClip2").val() == 0) {
    vcliptooltip = "Low";

    
} else if ($("#VideoClip2").val() == 1) {

     vcliptooltip = "Low";
    

} else if ( $("#VideoClip2").val() == 2) {

    vcliptooltip = "Medium";
    

} else if ( $("#VideoClip2").val() == 3) {

    vcliptooltip = "High";
   
}
document.getElementById("vcliptooltip").innerHTML = vcliptooltip;

if( $("#InstantMsgs").val() == 0) {
    insMsgtooltip = "Low";

    
} else if ($("#InstantMsgs").val() == 4) {

     insMsgtooltip = "Low";
    

} else if ( $("#InstantMsgs").val() == 8) {

    insMsgtooltip = "Medium";
    

} else if ( $("#InstantMsgs").val() == 12) {

    insMsgtooltip = "High";
   
}
document.getElementById("insMsgtooltip").innerHTML = insMsgtooltip;

if( $("#TVMovieStreaming2").val() == 0) {
    mHDtooltip = "Low";

    
} else if ($("#TVMovieStreaming2").val() == 1) {

     mHDtooltip = "Low";
    

} else if ( $("#TVMovieStreaming2").val() == 2) {

    mHDtooltip = "Medium";
    

} else if ( $("#TVMovieStreaming2").val() == 3) {

    mHDtooltip = "High";
   
}
document.getElementById("mHDtooltip").innerHTML = mHDtooltip;

if( $("#MusicPodcast").val() == 0) {
    muspodtooltip = "Low";

    
} else if ($("#MusicPodcast").val() == 4) {

     muspodtooltip = "Low";
    

} else if ( $("#MusicPodcast").val() == 8) {

    muspodtooltip = "Medium";
    

} else if ( $("#MusicPodcast").val() == 12) {

    muspodtooltip = "High";
   
}
document.getElementById("muspodtooltip").innerHTML = muspodtooltip;


if( $("#PhotoSharingLR2").val() == 0) {
    phrtooltip = "Low";

    
} else if ($("#PhotoSharingLR2").val() == 1) {

     phrtooltip = "Low";
    

} else if ( $("#PhotoSharingLR2").val() == 2) {

    phrtooltip = "Medium";
    

} else if ( $("#PhotoSharingLR2").val() == 3) {

    phrtooltip = "High";
   
}
document.getElementById("phrtooltip").innerHTML = phrtooltip;


if( $("#VoiceCalls1").val() == 0) {
    Vcalltooltip = "Low";

    
} else if ($("#VoiceCalls1").val() == 4) {

     Vcalltooltip = "Low";
    

} else if ( $("#VoiceCalls1").val() == 8) {

    Vcalltooltip = "Medium";
    

} else if ( $("#VoiceCalls1").val() == 12) {

    Vcalltooltip = "High";
   
}
document.getElementById("Vcalltooltip").innerHTML = Vcalltooltip;

if( $("#VideoCalls1").val() == 0) {
    victooltip = "Low";

    
} else if ($("#VideoCalls1").val() == 4) {

     victooltip = "Low";
    

} else if ( $("#VideoCalls1").val() == 8) {

    victooltip = "Medium";
    

} else if ( $("#VideoCalls1").val() == 12) {

    victooltip = "High";
   
}
document.getElementById("victooltip").innerHTML = victooltip;



}

function MobileTrick(data) {
/* mobile Trick */
if( $("#TotalAllocation").val() > 0) 
$("#calculatorTotal").addClass("stick"),
 $(".data-add h2").addClass("hide"),
$(".slider-tick-label").css({"visibility": "visible"}); 
else
$("#calculatorTotal").removeClass("stick"),
$(".data-add h2").removeClass("hide"),
$(".slider-tick-label").css({"visibility": "hidden"}); 

/* mobile Trick */
}


function RedMax(data) {
/* Red Alert */

if( $("#TotalAllocation").val() >= maxGB) {
$("#TheSumMB").addClass("redAlertBG");


/*$(".slider-horizontal").addClass('pointerEvents');
$("#smart #dataCalculator .active .slider-horizontal").removeClass('pointerEvents');*/
//$(".active .redALertdis[value='0']").slider('disable');
$("#dataCalculator select").attr('disabled', 'disabled');
$(".Overalert").css({"top": "11%", "opacity": "1", "display": "block"});
$(".slider.slider-vertical .slider-track-low").css({"background": "#cc1818"}); 
$(".slider.slider-vertical .slider-track-high").css({"background": "#cc1818"}); 
$(".slideSmoth .slider-selection.tick-slider-selection").css({"background": "#cc1818", "border-radius": "0px"}); 
$(".slider.slider-vertical .slider-track-high,.slideSmoth .slider-selection.tick-slider-selection").addClass("forIE"); 
} else {

/*$(".slider-horizontal").removeClass('pointerEvents');
$("#smart #dataCalculator .active .slider-horizontal").removeClass('pointerEvents'); */
//$(".redALertdis[value='0']").slider('enable');
$(".redALertdis").slider('enable');
replaceRedAlert(data); 
$(".slider.slider-vertical .slider-track-low").css({"background": "#2dbe60"}); 
$(".slider.slider-vertical .slider-track-high,.slideSmoth .slider-selection.tick-slider-selection").css({"background": "#2dbe60"}).removeClass("forIE"); 

/* Red Alert */
}
}



function Changeclass() {
var inputs = $('#dataCalculator .redALertdis').change(function () {
    inputs.parent().filter('.active').removeClass('active');
    $(this).parent().addClass('active');
});
}

$(function () {
        $("[rel='tooltip']").tooltip();
});




function replaceRedAlert(data){
$("#dataCalculator select").removeAttr('disabled', 'disabled');
$("#dataCalculator .slider.slider-horizontal").removeClass("pointerEvents");
$("#TheSumMB").removeClass("redAlertBG");
$(".Overalert").css({"top": "20%", "opacity": "0", "display": "none"}); 
//$(".redALertdis[value='0']").slider('enable');

}


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var targetPosition = $(".datacalc-pp");
    var Position = targetPosition.offset().top;
    if (scroll > Position) {
        $(".data-holder,#calculatorTotal").removeClass("stick");
        $(".data-add h2").removeClass("hide");
    } else {
    //MobileTrick();
    }
});


}());  