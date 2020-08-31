$(document).ready(function(){


if ($(window).width() < 900) {





}



else {
  $(".sp_bt").click(function(){
    $('.content').addClass("hid");
    $('#speaker_prof').removeClass("hid");
});

$(".poll_bt").click(function(){
  
  $('.content').addClass("hid");
  $('#poll').removeClass("hid");
  $("#q1").show();
});

$(".chat_bt").click(function(){
  $('.content').addClass("hid");
  $('#chat').removeClass("hid");
});

$(".faq_bt").click(function(){
  $('.content').addClass("hid");
  $('#QA').removeClass("hid");
});

$('.closebtn').click(function(){
 $('.content').addClass("hid");
 });

}


});


$(document).ready(function () {
  $("#q2").hide();
  $("#q3").hide();
  $("#qpoll").hide();
    $("#q1 input").click(function () {
        $("#q1").hide();
        $("#q2").show(300);
    });
    $("#q2 input").click(function () {
        $("#q2").hide();
        $("#q3").show(300);
    });
    $("#q3 input").click(function () {
        $("#q3").hide();
        $('#qpoll').show();

    });
    $("#qpoll #finishpoll").click(function () {
        $("#qpoll").hide();
        $('.content').addClass('hid');
    });

    $("#qpoll #retakepoll").click(function () {
        $("#qpoll").hide();
        $('#q1').show();
    });

});
