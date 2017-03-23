$('document').ready(function() {
  var $box = $('.box');
  var $reset = $('#reset');
  var color = 'white';
  var allColors = 'red blue green yellow white';

  $box.on('click', function() {
    $(this).addClass(color);
  });
  $box.on('dblclick', function() {
    $(this).removeClass(allColors);
  });
  $reset.on('click', function() {
    $box.removeClass(allColors);
  });
  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });



});
