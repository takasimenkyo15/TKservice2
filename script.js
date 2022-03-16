$(function() {

$('#pagetop').click(function() {
  $("html,body").animate({scrollTop:0},"300");
});

$(function() {
$('#pagetop').hide();
$(window).scroll(function() {
  if($(window).scrollTop() > 0) {
    $('#pagetop').slideDown(600);
  } else {
    $('#pagetop').slideUp(600);
  }
});
});

// $('.menu-icon').click(function() {
//   $('.menu-icon-menu').fadeIn();
//   $('.close-icon').fadeIn();
//   $('.menu-icon').fadeOut();
// });

$('.menu-icon').click(function() {
  $('.menu-icon-menu').slideDown();
  $('.close-icon').fadeIn();
  $('.menu-icon').fadeOut();
});

$('.close-icon').click(function() {
  $('.menu-icon-menu').slideUp();
  $('.close-icon').fadeOut();
  $('.menu-icon').fadeIn();
});



});