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
      $(this).css({"border-color":"#aaa"}); 
    },
    function() { }
  );
    
  $('.source-type').hover(
    function() { },
    function() {
      $('.sources', this).eq(0).slideUp("fast");
      $('.more', this).css({"border-color":"#fff"}); 
    });
  
  $('#search').keydown(function (e) {
    if (e.keyCode == 13) {
      $(this).submit();
    }
  });
  
  bindSource('#books','melvyl');
  bindSource('#melvyl','melvyl');
  bindSource('#catalog','catalog');
  bindSource('#other','dlc');
  bindSource('#dlc','dlc');
  bindSource('#scholar','scholar');
  
  $('#ucladb').click(function() {
    alert("Not implemented yet.")
    return false;
  });
});