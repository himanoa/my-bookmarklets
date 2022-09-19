import { readdirSync, readFileSync } from 'fs'

const ignoreDirectories = ["internal"]

const targetDirectories = readdirSync("./packages").filter(directory => !ignoreDirectories.includes(directory))

const generateSection = (packageName: string) => {
  const readme = readFileSync(`./packages/${packageName}/README.md`).toString()
  const code = readFileSync(`./packages/${packageName}/dist/index.js`).toString()
  const [title, description] = readme.split("\n").filter(line => line !== "")

  return `${title}

${description}

\`\`\`
${code}
\`\`\`

`
}

const outputMarkdown = `
<!-- ここファイルは自動生成で生成されるファイルです。手で編集しないでください -->

コピペで使えるブックマークレットです。次の手順で導入することができます

1. chrome://bookmarks/ にアクセスしてブックマークマネージャを開く
1. 右上のメニューより 新しいブックマークを追加 を選択する
1. URL として下記の URL (javascript: からすべて) を入力する。名前はわかりやすいもので構わない (例: UUID コピーなど)

${targetDirectories.reduce((acc, value) => {
  return acc + generateSection(value)
}, "")}
`

console.log(outputMarkdown)
