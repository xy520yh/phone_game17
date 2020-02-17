 
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


$(function () {	
 var bottomHtml = `
 <!-- 弹出框 -->
<div class="video_box">
  <div class="maskbg"></div>
  <div class="content">
    <div class="closed"><img src="images/close2.png" alt=""></div>
    <div class="note">
      <p>Loading...</p>
    </div>
  </div>
</div>`;
	  $('body').append(bottomHtml);
  var bgm = new Audio();
  bgm.src = 'music/BGM.mp3';
 
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

	  //注意：判断显示视频还是图片：url中有youtube就是视频，其他是图片
  //youtube视频连接参考：http://www.youtube.com/embed/QULuUtqpXhI 其中QULuUtqpXhI是视频标识，可以看作id
  $('.special_list').on('click', "a", function (g) {
    g.preventDefault();
    var url = $(this).attr('data-url');
    if (!url) {
      console.log("no content")
      return
    }
    $('.video_box').addClass('active');
    $('.video_box .note').html('<p>Loading...</p>')
    if (url.indexOf('youtube') != -1) {//视频
      var html = ` <iframe width="600" height="400" src="${url}" frameborder="0" allowfullscreen></iframe>`
      $('.video_box .note').html(html)
    } else {//图片
      var html = `<img src="${url}" />`
      $('.video_box .note').html(html)
    }
  });
  $('.video_box .closed').on('click', function () {
    $('.video_box').removeClass('active')
  })

	
	
	
	
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
  //

	
	  //点击pre中的btn
	 $('body').on("click", '.nav', function () {
		$('.pre_box').removeClass('active');
		$('.login_box').toggleClass('active')
	  });
	
	  $('body').on("click", '.login_box .closed', function () {
		$('.login_box').removeClass('active')
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
    $('.pre_box').toggleClass('active');
    
  });
  
$('.link01').click(function(){
     $('.pre_box').toggleClass('active');
        Mainswiper.slideTo(0, 1000, false);
 });
 $('.link04').click(function(){
  $('.pre_box').toggleClass('active');
    
});
 $('.link02').click(function(){
        $('.pre_box').toggleClass('active');
          Mainswiper.slideTo(1, 1000, false);
});
$('.link03').click(function(){
        $('.pre_box').toggleClass('active');
          Mainswiper.slideTo(2, 1000, false);
 });
   //点击pre中的btn
	 $('body').on("click", '.nav', function () {
		
    $('.pre_box').toggleClass('active');
   
	  });
	
	  $('body').on("click", '.pre_btn .closed', function () {
		$('.pre_box').removeClass('active')
	  });
 
    
    // $(document).on("click", function (e) {
    //   var ele = $(e.target).parents('.info_box').length;
    //   var ele2 = $(e.target).parents('.kefu_box').length;
    //   if (e.target.id == "info_icon" || ele2 || ele || $(e.target).hasClass("info_box") || $(e.target).hasClass("kefu_box")) {
  
    //   } else {
    //     $('.info_box').removeClass('active')
    //   }
    // }); 
    


		
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
	

	//var indexb=$('.gallery-top a').index(this);
var aLi=$('.gallery-top a');
//console.log(aLi.length)
for(var i=0;i<aLi.length;i++){
	//console.log(aLi[i])
		aLi[i].index=i;
		aLi[i].onclick=function(){
		//var indexb=$('.gallery-top a').index(this);
		//console.log(indexb)
			//console.log(this.index);
			$('.role_'+((this.index)+1)+'').css('display','block');
			

		}
}

$('.content').find('.closed').click(function(){
		for(var i=0;i<aLi.length;i++){
			$('.role_'+(i+1)+'').css('display','none');
		}

	})

var music_v = ['music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3']
//console.log(music_v.length)

var voiceAudio = new Audio();
$('.role_box').find('#playVoice').click(function(){
	for(var i=0;i<music_v.length;i++){
	  voiceAudio.src = music_v[i];
     voiceAudio.play();
	}

})	
   

   
 
});

function getQueryString(name) {
  var reg = new RegExp("(^|/?|&)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURIComponent(location.href).substr(1).match(reg);
  if (r != null) return r[2];
  return null;
}