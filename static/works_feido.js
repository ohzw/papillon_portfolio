document.addEventListener('DOMContentLoaded', function(){
    $(window).on({
      "scroll":function(e){
        var startY= document.querySelector(".css-fade5").getBoundingClientRect().top, //表示させたい対象
            windowHeight = window.innerHeight, // ブラウザの高さ
            offset = windowHeight/3*2; //オフセット 画面の2/3
        // 表示
        if(startY<offset){
          document.querySelector(".css-fade5").classList.add('css-fade5--in');
        // ブラウザの外になったら消す
        }else if(startY>windowHeight){
          document.querySelector(".css-fade5").classList.remove('css-fade5--in');
        }
      }
    })
  });