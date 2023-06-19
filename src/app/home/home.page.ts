import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  starwars: any[] = [];
  currentPage: number = 1;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadStarwars();
    this.apiService.getTestConnection().subscribe((res) => {
      console.log(res);
    });
  }

  async loadStarwars(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.apiService.getStarwarsHeroes(this.currentPage).subscribe({
      next: (res) => {
        loading.dismiss();
        const id = this.currentPage;
        this.starwars.push(...res.results);
        console.log(this.starwars);

        event?.target.complete();
        if (event) {
          event.target.disabled = this.starwars.length === this.currentPage;
        }
      },
      error: (err) => {
        console.log(err);
        loading.dismiss();
      },
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadStarwars(event);
  }
}
