window.onload = function(){
  $(".back-top").click(function(){
    if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 300);//动画效果
        return false;
    }
    $('body').animate({ scrollTop: 0 }, 300);
    return false;
});

  
     
}