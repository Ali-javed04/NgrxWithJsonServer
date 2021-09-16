import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private metaTagService: Meta) {}
  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Ronak Patel' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-05-17', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ])
  }
}
