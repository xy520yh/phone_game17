function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};



$(function(){

	 //点击任意位置，关闭info弹出框
  $(document).on("click", function (e) {
    var ele = $(e.target).parents('.info_box').length;
    var ele2 = $(e.target).parents('.kefu_box').length;
    if (e.target.id == "info_icon" || ele2 || ele || $(e.target).hasClass("info_box") || $(e.target).hasClass("kefu_box")) {

    } else {
      $('.info_box').removeClass('active')
    }
  });
  //点击右上角菜单
  $('body').on("click", "#menu", function () {
    $(this).parent('.nav').toggleClass('active')
  });
  //点击音乐按钮
  $('body').on("click", '#bgm_icon', function () {
    if (bgm.paused) {
      $(this).addClass('ing')
      bgm.play();
    } else {
      $(this).removeClass('ing')
      bgm.pause();
    }

  });

  //点击twitter
  $('body').on("click", '#twitter_icon', function () {
    $('.twitter_box').toggleClass('active')
  });
  $('body').on("click", '.twitter_box .closed', function () {
    $('.twitter_box').removeClass('active')
  });
  $('body').on("click", '.twitter_box #twitter_btn', function () {
    $('.twitter_box').removeClass('active')
    var url = 'https://twitter.com/intent/follow?screen_name=iryu_cone&tw_p=followbutton';
    window.open(url, "_blank")
  });
  //点击info
  $('body').on("click", '#info_icon', function () {
    $('.info_box').toggleClass('active')
  });
  
    //点击pre
  $('body').on("click", '#xf', function () {
    $('.pre_box').toggleClass('active')
  });
  
	
	   //daohang
	 $('body').on("click", '.nav', function () {
		
		$('.nav_box').toggleClass('active')
	  });
	
	  $('body').on("click", '.nav_btn .closed', function () {
		$('.nav_box').removeClass('active')
	  });
  
  
   //点击pre中的btn
	 $('body').on("click", '.pre_login', function () {
		$('.pre_box').removeClass('active');
		$('.login_box').toggleClass('active')
	  });
	
	  $('body').on("click", '.login_box .closed', function () {
		$('.login_box').removeClass('active')
	  });
	  
		
	$('.text').focus(function(){
		if($(this).val()=='メールアドレスを入力してください'){
		
			$(this).val("");
			$(this).css('color','#000');
		}
	})
	
	$('.text').blur(function(){
		if($(this).val()==''){
			$(this).val('メールアドレスを入力してください');
			$(this).css('color','#9f9f9f');
		}
	})

  //点击客服
  $('body').on("click", '.kefu_icon', function () {
    $('.kefu_box').addClass('active')
  });
  $('body').on("click", '.kefu_box .closed', function () {
    $('.kefu_box').removeClass('active')
  });
  //导航栏底部跟随
 
});
