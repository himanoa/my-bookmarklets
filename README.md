## Bookmarklets

### これなに？

Bookmarkletの開発と配布を担うリポジトリです。

### ブックマーク利用者向け

See. [BOOKMARKLETS](./BOOKMARKLETS.md)

### 開発者向け

#### 環境構築

次のアプリケーションをインストールしてください

- nodejs
- mdmg
  - macOSの人は `brew install -s himanoa/tap/mdmg` で入ります

#### Q. ブックマークレットを追加したいんだけど？

次の手順でブックマークレットを追加することができます

1. `mdmg generate bookmarklet ${ブックマークレットの名前}` を実行する
1. `packages/${ブックマークレットの名前}/README.md` のFIXMEの部分にブックマークレットの説明を書く
1. `packages/${ブックマークレットの名前}/src/index.ts` が生成されているので、好きに実装を書く
1. `yarn build` を実行する
1. `packages/${ブックマークレットの名前}/dist/index.js` が生成されているので、この内容を全部コピーしてブックマークに登録して動作確認する。
1. 完成したら `yarn build:index` を実行してコミットしてpush!
  1. 任意。忘れてもmasterに変更があったら自動でindexの更新PRを作ってくれるようにしてある
