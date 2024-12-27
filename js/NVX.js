const sections = [
  {
    id: "nvx",
    title: "NVXの配線方法",
    steps: [
      {
        title: "GND(グランド)",
        explanation: "GNDとPo4をくっつける(ジャンパー線みたいなやつ)",
        // image: "No" は記述しない
      },
      {
        title: "リファレンス(A1,A2)",
        explanation: "A1,A2に線をつける(A1,A2を基準として、電位を測る)",
        // image: "No" は記述しない
      },
      {
        title: "測定部位",
        explanation: "C3,C4など、測定する部位に線をつける",
        // image: "No" は記述しない
      },
      {
        title: "測定時の注意",
        explanation: "※Po4を額につける<br>Po3はトリガーなしなら必要なし",
        // image: "No" は記述しない
      },
    ],
  },
  {
    id: "neorec",
    title: "NeoRecの設定方法",
    steps: [
      {
        title: "インストール",
        explanation:
          "研究室のPCには入ってます。自分のPCに入れたい場合<br>http://www.east-medic.jp/support/software_download/",
        url: "http://www.east-medic.jp/support/software_download/", // URLを埋め込む
        image: "img/NeoRec/process0.png", // 画像が必要な場合
      },
      {
        title: "起動方法",
        explanation: "研究室のPCか自分のPCでショートカットをクリック",
        image: "img/NeoRec/process1.png", // 画像が必要な場合
      },
      {
        title: "メニューの説明",
        explanation:
          "赤枠 基本設定: ファイルの設定やサンプリング周波数、脳波計測部位の設定<br>青枠 抵抗の確認: 電極を付けたところの抵抗値が分かる<br>緑枠 再生: 脳波が再生？される。右側の◎のボタンが録画開始",
        image: "img/NeoRec/process2.png",
      },
      {
        title: "基本設定 -ファイル設定-",
        explanation:
          "オススメはプロファイルは1人1つ作ること。<br>※他の人にせっかく設定したチャンネル、周波数など消されることが無くなります<br>保存先も自分のファイルを作って、指定する<br>※他の人に間違ってデータが消される事が無くなります<br>サンプリング周波数は500Hzにしましょう<br>※Excelで開けなくなって、解析不可能になる可能性があります",
        image: "img/NeoRec/process3.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process4.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process5.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process6.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process7.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process8.png",
      },
      {
        title: "メニューの説明",
        explanation: "C3,C4など、測定する部位に線をつける",
        image: "img/NeoRec/process9.png",
      },
    ],
  },
];

// コンテンツ生成
const content = document.getElementById("explanation-js");
sections.forEach((section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.innerHTML = `
          <h1 id="${section.id}" class="title">${section.title}</h1>
        `;

  section.steps.forEach((step, index) => {
    const stepDiv = document.createElement("div");
    stepDiv.innerHTML = `
            <p class="nvx-title">
              <span class="title-number">${index + 1}.</span> ${step.title}
            </p>
            <p class="nvx-explanation">
              ${step.explanation}
              ${
                step.url
                  ? `<br><a href="${step.url}" target="_blank">詳細はこちら</a>` // URLがあればリンクを表示
                  : ""
              }
            </p>
            ${
              step.image
                ? `<div class="explanation-picture-box"><img class="explanation-picture" src="${
                    step.image
                  }" alt="Step ${index + 1}"></div>`
                : ""
            }
          `;
    sectionDiv.appendChild(stepDiv);
  });

  content.appendChild(sectionDiv);
});
