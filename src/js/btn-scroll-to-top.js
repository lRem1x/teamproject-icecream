const btnScrollToTop = document.querySelector('.btn-scroll-to-top');
const docHeader = document.querySelector('header');

window.onscroll = function () {
  scrollFunction();
};

btnScrollToTop.onclick = e => {
  docHeader.scrollIntoView({ behavior: 'smooth' });
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.classList.remove('btn-hidden');
  } else {
    btnScrollToTop.classList.add('btn-hidden');
  }
}
