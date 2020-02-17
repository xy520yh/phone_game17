(function (doc, win) {
  var doc = doc.documentElement;
  doc.addEventListener('DOMContentLoaded', Resize, false);
  // 当DOM加载后执行
  win.addEventListener('resize', Resize, false);
  if (doc.clientWidth) {
    Resize();
  } else {
    setTimeout(Resize, 100)
  }
  // 当屏幕发生变化时执行
  function Resize() {
    doc.style.fontSize = doc.clientWidth / 19.2 + 'px';
  }
})(document, window)
$(function () {
  var bottomHtml = ` <div class="fixed_bottom bt valign">
  <img src="../images/twitter.png" id="twitter_icon">
  <div class="line"></div> <a href="#" target="_blank"><img src="../images/youtube.png" alt=""></a>
  <div class="line"></div> <a href="#" target="_blank"><img src="../images/line.png" alt=""></a>
  <div class="line"></div>
  <img src="../images/info.png" id="info_icon"><img src="../images/music.png" id="bgm_icon">
</div>
<div class="info_box valign-top">
  <img src="../images/icon.png" class="icon">
  <div class="text1">
    <p>タイトル　イリュージョンコネクト</p>
    <p>ジャンル　夢と現実を繋ぐタクティカルRP</p>
    <p>価　　格　基本プレイ無料</p>
    <p>対応端末　Android/iOS</p>
  </div>
  <div class="text2">
    <p><a href="policy.html">プライバシーポリシー</a></p>
    <p class="kefu_icon hand">お問い合わせ</p>
    <p>運営会社</p>
  </div>
  <div class="copy">©Efun Company Limited</div>
</div>
<div class="kefu_box">
  <div class="title bb valign-between">
    <p></p>
    <div class="closed"><img src="../images/close.png" alt=""></div>
  </div>
  <div class="note">
    <p>お問い合わせする内容をご記入の上、<br>下記のメールアドレスまでご連絡ください。</p>
    <p class="pb">サポート：<a href="mailto:illusion@efunjp.com" target="_blank">illusion@efunjp.com</a></p>
  </div>
</div>
<div class="twitter_box">
  <div class="title valign-between">
    <p></p>
    <div class="closed"><img src="../images/close.png" alt=""></div>
  </div>
  <div>
    <div class="title">Twitter <span>@iryu_cone</span></div>
    <textarea name="" id="twitter_text" cols="30" rows="10"></textarea>
  </div>
  <div class="valign-between">
    <p></p><button class="follow" id='twitter_btn'>follow</button>
  </div>
</div>  <!-- 弹出框 -->
<div class="video_box">
  <div class="maskbg"></div>
  <div class="content">
    <div class="closed"><img src="../images/close2.png" alt=""></div>
    <div class="note">
      <p>Loading...</p>
    </div>
  </div>
</div>`;
  var menuHtml = ` <div class="nav active">
  <div class="menu" id="menu"><i></i><i></i><i></i><i></i> <i></i><i></i></div>
  <div class="menulist line_follow">
    <a href="index.html" class="index line_item">TOP</a>
    <a href="news.html" class="news line_item">NEWS</a>
    <a href="world.html" class="world line_item">WORLD</a>
    <a href="system.html" class="system line_item">SYSTEM</a>
    <a href="special.html" class="special line_item">SPECIAL</a>
    <div class="line"></div>
  </div>
</div>`;
  var bgma = new Audio();
  bgma.src = '../music/BGM.mp3';

  $('body').append(bottomHtml);
  $('.fixed_right').prepend(menuHtml);
  //判断导航条哪个加横线
  setTimeout(() => {
    var parent = $('.menulist');
    var index = -1;
    if (window.location.pathname.indexOf('news') != -1) {
      index = 1;
    } else if (window.location.pathname.indexOf('index') != -1) {
      index = 0;
    } else if (window.location.pathname.indexOf('world') != -1) {
      index = 2;
    } else if (window.location.pathname.indexOf('system') != -1) {
      index = 3;
    } else if (window.location.pathname.indexOf('special') != -1) {
      index = 4;
    }
    followPosition(index, parent)
  }, 100)

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
    if (bgma.paused) {
      $(this).addClass('ing')
      bgma.play();
    } else {
      $(this).removeClass('ing')
      bgma.pause();
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
  //点击客服
  $('body').on("click", '.kefu_icon', function () {
    $('.kefu_box').addClass('active')
  });
  $('body').on("click", '.kefu_box .closed', function () {
    $('.kefu_box').removeClass('active')
  });
  //导航栏底部跟随
  $('.line_follow .line_item').hover(function () {
    var index = $(this).index();
    var parent = $(this).parents('.line_follow');
    console.log(1)
    followPosition(index, parent)
  }, function () { });



  //注意：判断显示视频还是图片：url中有youtube就是视频，其他是图片
  //youtube视频连接参考：http://www.youtube.com/embed/QULuUtqpXhI 其中QULuUtqpXhI是视频标识，可以看作id
  $('.special_list,.snews2').on('click', "a", function (g) {
    g.preventDefault();
    var url = $(this).attr('data-url');
    if (!url) {
      concole.log("no content")
      return
    }
    $('.video_box').addClass('active');
    $('.video_box .note').html('<p>Loading...</p>')
    if (url.indexOf('youtube') != -1) {//视频
      var html = ` <iframe width="680" height="480" src="${url}" frameborder="0" allowfullscreen></iframe>`
      $('.video_box .note').html(html)
    } else {//图片
      var html = `<img src="${url}" />`
      $('.video_box .note').html(html)
    }
  });
  $('.video_box .closed').on('click', function () {
    $('.video_box').removeClass('active')
  })



});
function followPosition(index, parent) {
  var ele = parent.find('.line');
  var _this = parent.find('.line_item').eq(index);
  var _w = _this.width();
  var _l = _this[0].offsetLeft;
  ele.css({ 'width': _w, 'left': _l })
}
function getQueryString(name) {
  var reg = new RegExp("(^|/?|&)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURIComponent(location.href).substr(1).match(reg);
  if (r != null) return r[2];
  return null;
}