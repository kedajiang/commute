

var offset = $(".gold-car").offset();

$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $(".gold-car").css("left", st + offset.left);
});
