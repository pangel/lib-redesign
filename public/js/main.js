$(document).ready(function() {
  
  
  function bindSource(selector,source) {
    $(selector).click(function() {
      $('#source').val(source);
      $('#search').submit();
    });
  }

  $('.more').hover(
    function() {
      $(this).parent().next().slideDown("fast");
      $(this).css({"border-color":"#aaa", "color":"white", "background":"#888"}); 
    },
    function() { }
  );
    
  $('.source-type').hover(
    function() { },
    function() {
      $('.sources', this).eq(0).slideUp("fast");
      $('.more', this).css({"border-color":"#fff", "color":"#000099", "background":"#fff"}); 
    });

  bindSource('#books','melvyl');
  bindSource('#melvyl','melvyl');
  bindSource('#catalog','catalog');

});