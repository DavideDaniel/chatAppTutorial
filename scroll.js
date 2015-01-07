$(document).ready(function(){
  $('#repo').click(function(){
    window.scrollTo(0,0);
  })
})

$(document).ready(function(){
  $('#github').click(function(){
    window.scrollTo(0,1141);
  })
})

$(document).ready(function(){
  $('#server').click(function(){
    window.scrollTo(0,2561);
  })
})

$(document).ready(function(){
  $('#client').click(function(){
    window.scrollTo(0,4026);
  })
})


$(document).ready(function(){
  $('#testing').click(function(){
    window.scrollTo(0,7441);
  })
})

$(document).ready(function(){
  $('#styling').click(function(){
    window.scrollTo(0,8541);
  })
})

$(document).ready(function(){
  $('#hosting').click(function(){
    window.scrollTo(0,12086);
  })
})

$(document).ready(function(){
  $('.step').click(function(){
    $('.step').removeClass('active')
     $(this).addClass('active');
  })
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 1140) {
      $('.step').removeClass('active');
      $('#repo').addClass('active');
    } else if ($(this).scrollTop() > 1141 && $(this).scrollTop() < 2560) {
      $('.step').removeClass('active');
      $('#github').addClass('active');
    } else if ($(this).scrollTop() > 2561 && $(this).scrollTop() < 4025) {
      $('.step').removeClass('active');
      $('#server').addClass('active');
    } else if ($(this).scrollTop() > 4026 && $(this).scrollTop() < 7440) {
      $('.step').removeClass('active');
      $('#client').addClass('active');
    } else if ($(this).scrollTop() > 7441 && $(this).scrollTop() < 8540) {
      $('.step').removeClass('active');
      $('#testing').addClass('active');
    } else if ($(this).scrollTop() > 8541 && $(this).scrollTop() < 12085) {
      $('.step').removeClass('active');
      $('#styling').addClass('active');
    } else if ($(this).scrollTop() > 12086) {
      $('.step').removeClass('active');
      $('#hosting').addClass('active');
    }
});
