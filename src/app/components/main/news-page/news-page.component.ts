import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import posts from "../../../../assets/json/posts.json";
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  id: any;
  news: News[] = [];
  newsItem!: News;

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.news = posts.news;
    for(let item of this.news) {
      if(item.id == this.id) {
        this.newsItem = item;
      }
    }
  }
}
