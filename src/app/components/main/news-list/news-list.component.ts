import { Component } from '@angular/core';
import pages from "../../../../assets/json/main-pages.json"
import { News } from 'src/app/models/news.model';
import posts from "../../../../assets/json/posts.json";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {

  page: any;
  header_text: String = "";
  news: News[] = [];
  filteredNews: News[] = [];
  categories: String[] = [];

  ngOnInit() {
        this.page = new Map(Object.entries(pages.pages));
        this.header_text = this.page.get("News").header;
        this.news = posts.news
        this.categories = this.page.get("News").categories;
        this.filteredNews = this.news;
  }

  filterList(category: String) {
    this.filteredNews = [];

    if(category === "All News") {
      this.filteredNews = this.news;
    } else {
      for(let item of this.news) {
        if(category === item.category) {
          this.filteredNews.push(item);
        }
      }
    }
  }
}
