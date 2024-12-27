document.addEventListener("DOMContentLoaded", function () {
  //スライドショー------------------------------------------------------------------------------------------
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const pagination = document.querySelector(".pagination");
  let currentIndex = 0;
  let interval;

  // 初期化
  function initSlideshow() {
    updateSlide();
    startAutoSlide();

    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === currentIndex) dot.classList.add("active");
      dot.addEventListener("click", () => {
        changeSlide(index);
      });
      pagination.appendChild(dot);
    });
  }

  function changeSlide(index) {
    // 現在のスライドからactiveクラスを削除
    slides[currentIndex].classList.remove("active");
    // 現在のページネーションのドットからactiveクラスを削除
    pagination.children[currentIndex].classList.remove("active");

    // 新しいインデックスを計算 (スライドの数で循環)
    currentIndex = (index + slides.length) % slides.length;

    // 新しいスライドにactiveクラスを追加
    slides[currentIndex].classList.add("active");

    // ページネーションのドットを更新
    updatePagination();
  }

  // ページネーションのドットの更新
  function updatePagination() {
    // すべてのドットからactiveクラスを削除
    pagination
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));

    // 現在のインデックスのドットにactiveクラスを追加
    pagination.children[currentIndex].classList.add("active");
  }

  // 次のスライド
  function nextSlide() {
    changeSlide(currentIndex + 1);
  }

  // 前のスライド
  function prevSlide() {
    changeSlide(currentIndex - 1);
  }

  // 自動スライド開始
  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000); // 5秒ごとに切り替え
  }

  // 自動スライド停止
  function stopAutoSlide() {
    clearInterval(interval);
  }

  // スライド更新
  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
  }

  // イベントリスナー
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const link = slide.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  // 初期化実行
  initSlideshow();
});
