//responsive nav
$(function () {
  const menu = $('nav ul');

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

  $('.tab-content, #services, .content-img, .section-footer, .service-card').addClass('reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  $('.reveal').each(function () {
    revealObserver.observe(this);
  });

  // Contact Form Logic
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#subject').val().trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email and message before submitting.');
      return;
    }

    const mailtoLink = `mailto:info@rqacs.com?subject=Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;

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