$(document).ready(function() {
  card_resize();
});

window.addEventListener('resize', function() {
  card_resize();
});


function card_resize() {
  list_width = ($('.card_list').width());
  max_width = 530;
  column_min = Math.floor(list_width/max_width)+1;
  width = (list_width/column_min)
  $('.card').css('max-width', width);
}