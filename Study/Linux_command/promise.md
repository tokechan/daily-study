# 同期処理と非同期処理

## 同期処理
dproでここまでやってきたのは同期処理である。
記述順に処理し、一つの処理が終わるまで次の処理を行わない。


## 非同期処理
コードを記述した順番に処理していくのは同じだが、一つの非同期処理の終了を待たずに次の処理を行うことができる。


## 同期処理の例
```
function sleep() {
  console.log("sleep開始");
  const startTime = new Date(); //　--　1.実行時点の時刻を生成
  while (true) {
    // 2. 1で生成した時間から3000ミリ秒経過しないとwhileを抜け出さない
    if (new Date() - startTime > 3000) {
      console.log("sleep終了");
      return;
    }
  }
}

console.log("処理を開始");
sleep();
console.log("処理を終了");
```

実行結果

```Thu Sep 17 2020 09:51:06 GMT+0900 (日本標準時)```
いわゆる、実行した時間から3秒後にsleep終了と表示された時間のこと。

## 非同期処理の例

この3秒待つ処理を「非同期処理」で書いてみましょう。
非同期処理の代表的なものが、setTimeout()関数による処理です。

```
function sleep() {
  console.log("sleep開始");
  setTimeout(() => {
    console.log("sleep終了");
  }, 3000);
}
```

## callback地獄と呼ばれるコード
コールバック関数を多重のネストにすることをcallback地獄と呼ぶ。  

```
console.log("process start");
setTimeout(function(){
    setTimeout(function(){
        setTimeout(function(){
            setTimeout(function(){
                console.log("process end");
            },1000);
            console.log("4 minutes later");
        },1000);
        console.log("3 minutes later");
    },1000);
    console.log("2 minutes later");
}, 1000);
console.log("1 minutes later");  
```

## Promiseを使った非同期処理の遅延
setTineout()関数のコールバック関するやaddEventListener()関数のコールバック関数など、JaveScriptでは非同期処理のコールバック関数を多重にネストすることがよくある。
そのような処理の中で、callback地獄に陥らないようにするために使用するのがPromiseである。

非同期処理を扱うPromiseは組み込みオブジェクトである。
以下のようにコンストラクタを使って生成する。

```
const promise = new Promise(function(resolve, reject) => {
    // 処理内容　非同期処理
});
``` 
new Promise()の引数には、実行する処理を記載した関数を指定します。
指定された関数には、 resolve と reject という引数が渡されます。引数として渡されますが、この二つはコールバック関数です。
resolve()関数は、非同期処理が成功したときに呼び出されるコールバック関数です。
resolve()で終了したPromiseは、then()メソッドを使って処理を続行することができます。

reject()関数は、非同期処理が失敗したときに呼び出されるコールバック関数です。
reject()で終了したPromiseは、catch()メソッドを使って処理を続行することができます。

### Promiseは関数に組み込める
Promiseは関数に組み込むことができる。

```
function sleep() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 3000);
    });
}
``` 
### Promiseチェーンで処理をつなげる
then()メソッドをつなげて、処理を順番に行うこともできる。

```
function inputNumber(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof(data) == "number") {
        resolve(data + 1);
      } else {
        reject("数字ではありません");
      }
    }, 3000);
  })
}

console.log("処理を開始");
inputNumber(1)
.then(function(data){
  console.log(data);
  return inputNumber(data);
})
.then(function(data){
  console.log(data);
  return inputNumber(data)
})
.then(function(data){
  console.log(data);
})
```

### .複数の非同期処理を並列処理[Promise.all()]

Promise.all()メソッドは、複数の非同期処理を並列して処理し、全ての処理が正常終了した場合にのみthen()メソッドにつなげることができます。

function inputNumber(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof(data) == "number") {
        console.log(data)
        resolve(data);
      } else {
        console.log("数字ではありません")
        reject("失敗しました");
      }
    }, 3000);
  })
}

console.log("処理を開始");

Promise.all([
  inputNumber(2),
  inputNumber(6),
  inputNumber(5),
])
.then(function(){
  console.log("全部成功しました");
})
.catch(function(error) {
  console.log(error);
})
```
ひとつでも失敗するとcatch()メソッドが呼ばれる


(失敗する例)

```
function inputNumber(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof(data) == "number") {
        console.log(data)
        resolve(data);
      } else {
        console.log("数字ではありません")
        reject("失敗しました");
      }
    },3000);
  })
}

console.log("処理を開始");

Promise.all([
  inputNumber(2),
  inputNumber("hello"), //数字以外を引数に渡す
  inputNumber(5),
])
.then(function(){
  console.log("全部成功しました");
})
.catch(function(error) {
  console.log(error);
})


## まとめ
- JavaScriptにはコードを記述順に処理していき、一つの処理が終わるまで次の処理を行わない同期処理と、処理の終了を待たずに次の処理を行う非同期処理がある
- Promiseオブジェクトは非同期処理を実行し、その処理が終了するまで次の処理を遅延できる
- resolve()関数はPromiseを正常終了させるコールバック関数であり、then()メソッドを使って次の処理に繋ぐことができる
- reject()関数はPromiseをエラー終了させるコールバック関数であり、catch()メソッドを使ってエラー処理に繋ぐことができる
