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
    evaluation: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  addData(): void{
    const tmpBookToObject: Book ={
      name: this.tmpBook.name,
      detail: this.tmpBook.detail,
      evaluation: this.tmpBook.evaluation
    }
    this.bookList.push(tmpBookToObject)
    console.log("msg")
  }

}
