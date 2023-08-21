import { Component, OnInit } from '@angular/core';
import pages from "../../../../assets/json/main-pages.json";
import posts from "../../../../assets/json/posts.json";
import { Post } from 'src/app/models/post.model';
import { News } from 'src/app/models/news.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  page: any;
  headerText: string = "Default Text";
  content: string = "Default Content"
  news: News[] = [];
  postsList: Post[] = [];
  logs: any;
  tab: number = 1;
  
  ngOnInit(): void {
    this.page = new Map(Object.entries(pages.pages));
    console.log(this.page);
    this.headerText = this.page.get("Main").header;
    this.content = this.page.get("Main").content;
    this.news = posts.news;
    this.postsList = posts.posts
    this.logs = posts.logs
    console.log("LOGS", this.logs)
  }

  changeTab(tab: number) {
    this.tab = tab;
  }

}
