HighLight Text to Amazon Search
============
テキストを選択し、右クリックを押してからアイコンを選択すると、Amazonで検索することができます。

●コード　　

以下のようなURLにアクセスしています。　　　　

`var url = "http://www.amazon.co.jp/s/ref=nb_sb_noss?field-keywords="+ encodeURIComponent(info.selectionText);`  

ダウンロードの仕方
----
    $ git clone https://github.com/naoyashiga/HighLight_Text_to_Amazon_Search.git

インストールの仕方
----
1.アドレスバーに以下のURLを入れてください  
`chrome://chrome/extensions/`  
2.右上のディベロッパーモードというチェックボックスにチェックを入れてください  

3.「パッケージ化されていない拡張機能を読み込む」というボタンを押して、解凍したフォルダを選択してください  

![ScreenShot](https://raw.github.com/naoyashiga/Chrome_Extensions/master/Google_Calendar_From_Rikunavi/screenshots/install.png)