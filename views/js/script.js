var colors = ['#de302f','#f28001','#14f2a0'];

$(function() {
  var i=0;
  setInterval(function () {
    i =(i+1) % colors.length;
    $('body').css({
      'transition': '0.3s ease-in-out',
      "background-color": colors[i]
    });
  }, 4000);

});
