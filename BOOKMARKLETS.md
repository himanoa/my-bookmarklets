
<!-- ここファイルは自動生成で生成されるファイルです。手で編集しないでください -->

コピペで使えるブックマークレットです。次の手順で導入することができます

1. chrome://bookmarks/ にアクセスしてブックマークマネージャを開く
1. 右上のメニューより 新しいブックマークを追加 を選択する

[## docuemnt-title-override](code)

promptの内容で現在開いているページの名前を変更します

```
javascript:(() => {document.originalTitle = document.title; var title = window.prompt("上書きしたいタイトルを入力してください"); if (title != null && title != '') { document.title = title; }})() 
```



