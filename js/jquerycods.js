(function($){
  $(window).on("load",function(){
    $(".jquery-scroll").mCustomScrollbar({
      theme:"rounded-dark"
  });
  });
})(jQuery);
var $layer = $(".jquery-scroll");
$layer.bind('touchstart', function (ev) {
    var $this = $(this);
    var layer = $layer.get(0);

    if ($this.scrollTop() === 0) $this.scrollTop(1);
    var scrollTop = layer.scrollTop;
    var scrollHeight = layer.scrollHeight;
    var offsetHeight = layer.offsetHeight;
    var contentHeight = scrollHeight - offsetHeight;
    if (contentHeight == scrollTop) $this.scrollTop(scrollTop-1);
});
