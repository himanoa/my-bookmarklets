
<!-- ここファイルは自動生成で生成されるファイルです。手で編集しないでください -->

コピペで使えるブックマークレットです。次の手順で導入することができます

1. chrome://bookmarks/ にアクセスしてブックマークマネージャを開く
1. 右上のメニューより 新しいブックマークを追加 を選択する

[## docuemnt-title-override](javascript:(() => {document.originalTitle = document.title; var title = window.prompt("上書きしたいタイトルを入力してください"); if (title != null && title != '') { document.title = title; }})() )

promptの内容で現在開いているページの名前を変更します

```
javascript:(() => {document.originalTitle = document.title; var title = window.prompt("上書きしたいタイトルを入力してください"); if (title != null && title != '') { document.title = title; }})() 
```

[## site-search](javascript:(() => {var makeQueryLink = function (siteUrl) { return "https://www.google.com/search?q=site:".concat(siteUrl); }; location.href = makeQueryLink(new URL(location.href).hostname);})() )

現在開いているサイトのhostnameを使って Google検索でsite:検索します

```
javascript:(() => {var makeQueryLink = function (siteUrl) { return "https://www.google.com/search?q=site:".concat(siteUrl); }; location.href = makeQueryLink(new URL(location.href).hostname);})() 
```



