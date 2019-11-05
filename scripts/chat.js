$(document).ready(function () {

  $('.chat__contacts-box .chat__header').on('click', function (e) {
    const contactsPosition = $('.chat__contacts-box').css('bottom');
    if (contactsPosition === '0px') {
      $('.chat__contacts-box').animate({
        bottom: '-260px'
      });
    } else {
      $('.chat__contacts-box').animate({
        bottom: '0px'
      }, 350);
    }
  });

  $('.chat__conversation-box .chat__header').on('click', function (e) {
    const conversationPosition = $('.chat__conversation-box').css('bottom');
    if (conversationPosition === '0px') {
      $('.chat__conversation-box').animate({
        bottom: '-260px'
      });
    } else {
      $('.chat__conversation-box').animate({
        bottom: '0px'
      }, 350);
    }
  });

  $('.chat__contacts-box .chat-exit').on('click', function (e) {
    $('.chat__container').slideToggle();
  });

  $('.chat__conversation-box .chat-exit').on('click', function (e) {
    $('.chat__conversation-box').css('visibility', 'hidden');
  });

  $('.chat__contacts-box .contact__item').on('click', function (e) {
    $('.chat__conversation-box').css('visibility', 'visible');
  });

  $('#chat-icon').on('click', function (e) {
    $('.chat__container').slideToggle();
  });
});