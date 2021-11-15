console.log('Welcome to Docs');

function copyClipBoard(){
  var copyClipboard = document.querySelectorAll('.js-copy-clipboard');
  var toast = document.querySelector('.toast');

  console.log(copyClipboard);

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

function init(){
  copyClipBoard();
};init();
