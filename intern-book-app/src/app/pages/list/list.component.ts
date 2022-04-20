import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookList: Book[] = [
    {
      name: "アンドロイドは電気羊の夢を見るか？",
      detail: "第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ",
      evaluation: 90
    },
    {
      name: "任天堂の元社長、岩田聡さんのことばをまとめた本",
      detail: "任天堂の元社長、岩田聡さんのことばをまとめた本",
      evaluation: 90
    },
    {
      name: "リーダブルコード",
      detail: "bible for programmer",
      evaluation: 100
    },
  ];

  //bookListにデータを追加すれば良いと考える＞入力されたデータを一時的に保持する変数をさくせい＞ボタンが押された時にaddDataを実行してbookListにデータを突っ込めばいいと思った。
  tmpBook: Book = {
    name: '',
    detail: '',
    evaluation: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addBook(): void{
    //各ボックスが空欄ではないか
    if(this.tmpBook.name != '' && this.tmpBook.detail != '' && this.tmpBook.evaluation != ''){
      //数値であるか
      if(typeof(this.tmpBook.evaluation) === "number"){
        //0~100の範囲内か
        if(this.tmpBook.evaluation < 100 && this.tmpBook.evaluation >= 0){
          this.bookList.push(
            {
              name: this.tmpBook.name,
              detail: this.tmpBook.detail,
              evaluation: this.tmpBook.evaluation
            }
          )
        }else{
          alert("0以上100以下の数値にしてください")
        }
      }else{
        alert("数字を入力してください")
      }
    }else{
      alert("全てのデータを入力してください")
    }

  }

}
