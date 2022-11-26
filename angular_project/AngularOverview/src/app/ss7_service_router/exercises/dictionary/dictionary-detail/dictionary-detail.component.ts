import {Component, OnInit} from '@angular/core';
import {IWord} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  translatedWord: IWord;
  index: number;

  constructor(private _dictionaryService: DictionaryService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getMeanWord();

  }

  private getMeanWord() {
    this.index = this._activatedRoute.snapshot.params['index'];
    this.translatedWord = this._dictionaryService.getMeanWordByIndex(this.index);
  }
}
