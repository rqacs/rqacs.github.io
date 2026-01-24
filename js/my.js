//responsive nav
$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width(); if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());

  // Contact Form Logic
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#subject').val();

    const mailtoLink = `mailto:rqacs.inc@gmail.com?subject=Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  });
});
// Smooth Scrolling
$('.cf a').on('click', function (event) {
  if (this.hash !== '') {
    const hash = this.hash;
    const target = $(hash);

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  }
});