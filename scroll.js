$(document).ready(function(){
  $('#repo').click(function(){
    window.scrollTo(0,0);
  })
})

$(document).ready(function(){
  $('#github').click(function(){
    window.scrollTo(0,540);
  })
})

$(document).ready(function(){
  $('#server').click(function(){
    window.scrollTo(0,1780);
  })
})

$(document).ready(function(){
  $('#client').click(function(){
    window.scrollTo(0,3370);
  })
})


$(document).ready(function(){
  $('#testing').click(function(){
    window.scrollTo();
  })
})

$(document).ready(function(){
  $('#styling').click(function(){
    window.scrollTo();
  })
})

$(document).ready(function(){
  $('#hostgin').click(function(){
    window.scrollTo();
  })
})

$(document).ready(function(){
  $('.step').click(function(){
    $('.step').removeClass('active')
     $(this).addClass('active');
  })
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 539) {
      $('.step').removeClass('active');
      $('#repo').addClass('active');
    } else if ($(this).scrollTop() > 540 && $(this).scrollTop() < 1779) {
      $('.step').removeClass('active')
      $('#github').addClass('active');
    } else if ($(this).scrollTop() > 1780 && $(this).scrollTop() < 3369) {
      $('.step').removeClass('active')
      $('#server').addClass('active');
    } else if ($(this).scrollTop() > 3370 && $(this).scrollTop() < 6950) {
      $('.step').removeClass('active')
      $('#client').addClass('active');
    }
});
