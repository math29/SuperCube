$('#container').mouseover(function() {
  $('.rect').removeClass('reset').addClass('one-color');
  $('#container').css('transform', 'rotate(5deg)');
});

$('#container').mouseout(function() {
  $('.rect').removeClass('one-color').addClass('reset');
  $('#container').css('transform', 'rotate(0deg)');
  console.log('bla');
});