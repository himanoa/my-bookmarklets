(document as any).originalTitle = document.title

const title = window.prompt("上書きしたいタイトルを入力してください")

if(title != null && title != '') {
  document.title = title
}
