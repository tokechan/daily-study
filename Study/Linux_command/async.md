# Async Function 構文
ECMAScript2017では、非同期処理を行う関数を定義するAsync Functionという構文が新しく登場しました。通常の関数とは異なり、必ずPromiseオブジェクトを返却する関数であり、Promiseを使用した記述方法だと読みづらくなる部分を読みやすくできる構文です。

## 構文
関数宣言文の場合
```
async function 関数名(引数){
    // 処理内容
}
```
関数リテラルの場合  
```
const 関数名 = async function(引数){
    // 処理内容
}
```
アロー関数式の場合
```
const 関数名 = async (引数) => {
    // 処理内容
}
``` 
## まとめ

- asyncを使って定義するAsync Functionは非同期処理を行う関数を定義し、Promiseオブジェクトを返却する。
- awaitはAsync Functionの中でのみ使用でき、Promiseオブジェクトを後ろに記述することで、そのPromise処理の結果を待って次の処理を実行できる。
