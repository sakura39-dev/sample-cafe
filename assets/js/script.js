// topに戻るボタンの動き　↓
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { // 500pxスクロールしたら
    backToTop.classList.add('is-show');
  } else {
    backToTop.classList.remove('is-show');
  }
});
// topに戻るボタンの動き　↑

// ふわっと表示させるアニメーション ↓
const options = {
  root: null, // ブラウザの画面を基準にする
  rootMargin: "0px 0px -200px 0px", // ★下から200pxの位置に判定ラインを引き上げる
  threshold: 0 // 判定ラインを越えたら実行
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, options);

// 対象の要素をすべて監視
const targets = document.querySelectorAll('.fade-in');
targets.forEach(target => observer.observe(target));
// ふわっと表示させるアニメーション ↑

// sliderアニメーション ↓
const swiperElement = document.querySelector('.swiper');

// 要素が存在する場合のみ初期化を実行
if (swiperElement) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    autoplay: { // 自動再生
      delay: 3000, // 3秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });
}
// sliderアニメーション ↑
