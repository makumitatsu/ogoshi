document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const underline = document.querySelector(".underline");
  const dropdowns = document.querySelectorAll(".dropdown-item");

  let hideTimeout; // 遅延時間を管理する変数
  let currentDropdown = null; // 現在表示中のドロップダウンを保持

  // アンダーラインの位置を更新する関数
  const setUnderline = (tab) => {
    const rect = tab.getBoundingClientRect();
    underline.style.left = `${tab.offsetLeft}px`;
    underline.style.width = `${tab.offsetWidth}px`;
  };

  // 初期アンダーラインの位置を設定
  setUnderline(tabs[0]);

  // タブにホバーしたときのアンダーライン移動
  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => setUnderline(tab));
  });

  // タブごとのドロップダウン表示管理
  const showDropdown = (dropdown) => {
    if (dropdown && dropdown !== currentDropdown) {
      if (currentDropdown) {
        hideDropdown(currentDropdown); // 他のドロップダウンが表示されていれば非表示にする
      }
      dropdown.style.display = "block"; // ドロップダウンを表示
      currentDropdown = dropdown; // 現在表示中のドロップダウンを更新
    }
  };

  const hideDropdown = (dropdown) => {
    if (dropdown) {
      dropdown.style.display = "none"; // ドロップダウンを非表示
      if (currentDropdown === dropdown) {
        currentDropdown = null; // 表示中のドロップダウンをリセット
      }
    }
  };

  // タブごとのイベント処理
  tabs.forEach((tab) => {
    const tabName = tab.getAttribute("data-tab"); // タブの名前を取得
    const relatedDropdown = document.querySelector(`.${tabName}-dropdown`); // 対応するドロップダウンを取得

    //ボタンを押すとhtml遷移
    tab.addEventListener("click", () => {
      console.log("what");
      const link = tab.getAttribute("data-link");
      if (link) window.location.href = link;
    });

    // ドロップダウンが存在しない場合は処理をスキップ
    if (!relatedDropdown) {
      console.log(`No dropdown found for tab: ${tabName}`);
      return;
    }

    tab.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout); // 遅延をキャンセル
      showDropdown(relatedDropdown); // 対応するドロップダウンを表示
    });

    tab.addEventListener("mouseleave", () => {
      // タブからカーソルが離れたときに遅延時間を設定
      hideTimeout = setTimeout(() => hideDropdown(relatedDropdown), 200); // 200ms後にドロップダウンを隠す
    });

    // ドロップダウンに触れている間は非表示にしないように処理
    relatedDropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout); // 遅延をキャンセル
    });

    relatedDropdown.addEventListener("mouseleave", () => {
      // ドロップダウンからカーソルが離れたときに遅延時間を設定
      hideTimeout = setTimeout(() => hideDropdown(relatedDropdown), 200); // 200ms後にドロップダウンを隠す
    });
  });

  dropdowns.forEach((dropdown) => {
    //ボタンを押すとhtml遷移
    dropdown.addEventListener("click", () => {
      const link = dropdown.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });
});
