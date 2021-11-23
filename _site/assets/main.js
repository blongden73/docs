console.log('Welcome to Docs');

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function copyClipBoard(){
  var copyClipboard = document.querySelectorAll('.js-copy-clipboard');
  var toast = document.querySelector('.toast');

  if(copyClipboard){
    copyClipboard.forEach((item, i) => {
      item.addEventListener('click', function(){
          var sectionLink = this.dataset.uri;
          var pageurl = window.location.origin;
          var copyLink = pageurl + sectionLink;
          console.log(copyLink);
          navigator.clipboard.writeText(copyLink);
          toast.classList.add('copied');
          setTimeout(function(){
            toast.classList.remove('copied');
          }, 2000)
      })
    });
  }
}

function inviewIcons() {
  var guideIcons = document.querySelectorAll('.js-guide-icons');
  var guideIconsCheck = document.querySelector('.js-guide-icons');
  if(guideIconsCheck){
    document.addEventListener('scroll', function(){
      guideIcons.forEach((item, i) => {
        if(elementInViewport(item)){
          item.classList.add('inview');
        }else {
          item.classList.remove('inview');
        }
      });
    });
  }
}

function menuPosition(){
  var menu = document.querySelector('.guides__container .section__menu')
  var menuTracker = document.querySelector('.section__menu-anchor')
  if(menuTracker) {
    document.addEventListener('scroll', function(){
      var position = menuTracker.getBoundingClientRect();
      if(position.top <= 72 ) {
        menu.classList.add('position-fixed');
      }else {
        menu.classList.remove('position-fixed');
      }
    });
  }
}


function menuHover(){
  var menuItem = document.querySelector('.submenu--item');
  var subMenu = document.querySelector('.header__nav-sub');
  if(menuItem){
    menuItem.addEventListener('mouseenter', function(){
      this.classList.add('hovered');
      subMenu.classList.add('hovered');
    });
    menuItem.addEventListener('mouseleave', function(){
      setTimeout(function(){
        menuItem.classList.remove('hovered');
        subMenu.classList.remove('hovered');
      }, 1000)
    });
  }
}

function mobileNav(){
  var veggieBurger = document.querySelector('.veggie--burger');
  var mobileNav = document.querySelector('.mobile--nav');

  veggieBurger.addEventListener('click', function(){
    this.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
}

function onwardJourneyTracking(){
  var onwards = document.querySelector('.onward__journeys-wrapper');
  var sectionMenu = document.querySelector('.section__menu');
  if(onwards) {
    document.addEventListener('scroll', function(){
      if(elementInViewport(onwards)) {
        sectionMenu.classList.add('hide');
      }else {
        sectionMenu.classList.remove('hide');
      }
    });
  }
}

function init(){
  copyClipBoard();
  inviewIcons();
  menuPosition();
  menuHover();
  mobileNav();
  onwardJourneyTracking();
  hljs.highlightAll();
};init();
