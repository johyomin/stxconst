$(document).ready(function(){
  // 안내창 기능
  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function(){
    modalWrap.stop().fadeOut(100);
    $('html').css('overflow', 'auto');
  });

  let modalMain = $('.modal-main');
  modalMain.click(function(event){
    event.stopPropagation();
  });
  modalWrap.click(function(){
    modalWrap.stop().fadeOut(100);
    $('html').css('overflow', 'auto');
  });

});

$(document).ready(function () {
  let header = $('.header');
  let gnb = $('.gnb');
  let gnbMaxHeight = gnb.outerHeight();
  let gnbMinHeight = header.outerHeight();
  header.css('height', gnbMinHeight);
  gnb.mouseenter(function () {
    header.css('height', gnbMaxHeight);
  });
  gnb.mouseleave(function () {
    header.css('height', gnbMinHeight);
  });

  // 주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');
  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function () {
      $(this).find('>a').removeClass('depth1-focus');
    });
  });

  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  let partY = $('.part').offset().top;
  visualBt.click(function () {
    $('html').stop().animate({
      scrollTop: partY 
    }, 500);
  });

  // part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    tgX = -1 * tgX;
    $(this).css('background-position-x', tgX);
  });

});

window.onload = function () {
}