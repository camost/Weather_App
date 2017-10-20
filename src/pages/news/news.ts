import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
    public info:string[];


  constructor(public navCtrl: NavController,
              public http: Http,
              public loadingCtrl: LoadingController){
this.presentLoadingCustom();
  }
    
    
    
    
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.get_news();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }    
    
    
presentLoadingCustom() {
this.get_news();
  const loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Buscado datos del Server...',
    duration: 3000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');

  });

  loading.present();
}

//http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508154276349&sort=crawled&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Asports


async get_news(){
console.log("haciendo noticias")
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508264700420&sort=published&q=language%3Aspanish%20thread.country%3AAR%20(site_category:sports%20OR%20site_category:weather%20OR%20site_category:world_soccer)&latest=true&size=11')
    .map(res => res.json())
    .subscribe(
      data => {
        this.info = data;
        console.log(this.info);
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );    
    
    
    
    
}      
    
}
