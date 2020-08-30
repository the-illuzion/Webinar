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
