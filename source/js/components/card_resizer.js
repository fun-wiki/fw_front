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
  column_max = Math.floor(list_width/260)
  if (column_min<column_max) {
    column_min = column_max
  }
  width = (list_width/column_min)

  $('.card').css('max-width', width);
  $('.card').css('min-width', width);
}