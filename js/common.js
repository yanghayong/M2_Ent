$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.gotop').fadeIn()
    } else {
      $('.gotop').fadeOut()
    }
  })

  $('.gotop').click(function () {
    $('html').animate({ scrollTop: 0 }, 300)
  })

  $('.hamburger').on('click', function () {
    $('.menu').addClass('on')
  })

  $('.close').on('click', function () {
    $('.menu').removeClass('on')
  })
})
