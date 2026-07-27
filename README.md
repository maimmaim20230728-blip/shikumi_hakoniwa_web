# 仕組みの箱庭 / Shikumi no Hakoniwa (web公開用)

坂・ドミノ・シーソー・扇風機を置いて、玉をゴールへ届ける連鎖反応の箱庭。
本物の2D物理で動きます。完全オフライン・匿名・端末内のみ・広告なし・12言語。

- この repo は **Vercel 公開 + Farcaster Mini App 用(public)**
- 開発の正本は private の `shikumi_hakoniwa` (Play/Capacitor側)。変更はまず本体側で行い、共通ファイル(matter.min.js / manifest.json / sw.js / privacy.html / icons)をこちらへ手動同期する
- 🔴 **index.html だけは同期しない**。こちらの index.html には fc:miniapp / fc:frame メタと esm.sh の SDK 読み込みがあり、Play側(www)には絶対に入れない(審査対策)。本体側で index.html を変えたら、こちらへは差分を手で移す
- sw.js の CACHE 名は web 側専用(`shikumi-web-*`)。更新のたびに必ず上げる

## ドメイン・Farcaster

- 想定ドメイン: https://shikumi-hakoniwa-web.vercel.app/ を仮置き。Vercelのプロジェクト名確定後、index.html と `.well-known/farcaster.json` のURLを一括置換
- `.well-known/farcaster.json` の **accountAssociation は payload / signature が空(未署名)**。Vercel公開後にヒロさんが Farcaster Manifest ツールで実ドメインに対して署名して追記(既存アプリと同手順・fid 3339315)

## 開発

```
node serve.js       … http://localhost:3103
node serve.js 3103  … ポート指定
```

## ライセンス・クレジット

介護と支援の相談どころ「そよぎ」 https://soyogi.hp.peraichi.com/top
物理エンジンに Matter.js (MIT) を同梱しています。
