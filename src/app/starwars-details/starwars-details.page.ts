import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starwars-details',
  templateUrl: './starwars-details.page.html',
  styleUrls: ['./starwars-details.page.scss'],
})
export class StarwarsDetailsPage implements OnInit {
  starwars: any = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['name'];
    this.apiService.getStarwarsDetails(id).subscribe((res: any) => {
      this.starwars = res.results;
      console.log(this.starwars);
    });
  }

  openHomepage(url: any) {
    window.open(url, '_blank');
  }
}
