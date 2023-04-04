import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      cityName : "Adana",
      img : "https://img.memurlar.net/galeri/7652/958928c1-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Adana Kebabı"
    },
    {
      cityName : "Adıyaman",
      img : "https://img.memurlar.net/galeri/7652/9d8928c1-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Nemrut Dağı"
    },
    {
      cityName : "Afyonkarahisar",
      img : "https://img.memurlar.net/galeri/7652/a0e025c9-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Afyon Lokumu"
    },
    {
      cityName : "Ağrı",
      img : "https://img.memurlar.net/galeri/7652/a81be6cf-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Ağrı Dağı"
    },
    {
      cityName : "Amasya",
      img : "https://img.memurlar.net/galeri/7652/625db9dc-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Amasya Elması"
    },
    {
      cityName : "Ankara",
      img : "https://img.memurlar.net/galeri/7652/735db9dc-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Anıtkabir"
    },
    {
      cityName : "Antalya",
      img : "https://img.memurlar.net/galeri/7652/30a781f0-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Düden Şelalesi"
    },
    {
      cityName : "Artvin",
      img : "https://img.memurlar.net/galeri/7652/bffb38fd-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kafkasör Şenlikleri"
    },
    {
      cityName : "Aydın",
      img : "https://img.memurlar.net/galeri/7652/c7fb38fd-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "İncir"
    },
    {
      cityName : "Balıkesir",
      img : "https://img.memurlar.net/galeri/7652/6f84c904-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Höşmerim Tatlısı"
    },
    {
      cityName : "Bilecik",
      img : "https://img.memurlar.net/galeri/7652/d3cf2512-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Şeyh Edebali ve Ertuğrul Gazi Türbeleri"
    },
    {
      cityName : "Bingöl",
      img : "https://img.memurlar.net/galeri/7652/0fdbba18-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Yüzen Ada"
    },
    {
      cityName : "Bitlis",
      img : "https://img.memurlar.net/galeri/7652/19dbba18-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Beş Minare"
    },
    {
      cityName : "Bolu",
      img : "https://img.memurlar.net/galeri/7652/f22ec51e-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Abant Gölü"
    },
    {
      cityName : "Burdur",
      img : "https://img.memurlar.net/galeri/7652/f82ec51e-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "İnsuyu Mağarası"
    },
    {
      cityName : "Bursa",
      img : "https://img.memurlar.net/galeri/7652/b3500c26-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "İskender Kebabı"
    },
    {
      cityName : "Çanakkale",
      img : "https://img.memurlar.net/galeri/7652/b8500c26-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Gelibolu Şehitliği"
    },
    {
      cityName : "Çankırı",
      img : "https://img.memurlar.net/galeri/7652/54c9d42c-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Taşmescit"
    },
    {
      cityName : "Çorum",
      img : "https://img.memurlar.net/galeri/7652/57c9d42c-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Çorum Leblebisi"
    },
    {
      cityName : "Denizli",
      img : "https://img.memurlar.net/galeri/7652/09699d33-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Denizli Horozu"
    },
    {
      cityName : "Diyarbakır",
      img : "https://img.memurlar.net/galeri/7652/0d699d33-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Diyarbakır Karpuzu"
    },
    {
      cityName : "Edirne",
      img : "https://img.memurlar.net/galeri/7652/e3590040-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Selimiye Camii"
    },
    {
      cityName : "Elazığ",
      img : "https://img.memurlar.net/galeri/7652/ed590040-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Çaydaçıra Halkoyunu"
    },
    {
      cityName : "Erzincan",
      img : "https://img.memurlar.net/galeri/7652/61795c46-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Tulum Peyniri"
    },
    {
      cityName : "Erzurum",
      img : "https://img.memurlar.net/galeri/7652/68795c46-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Cağ Kebabı"
    },
    {
      cityName : "Eskişehir",
      img : "https://img.memurlar.net/galeri/7652/abfa4d4f-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Lületaşı"
    },
    {
      cityName : "Gaziantep",
      img : "https://img.memurlar.net/galeri/7652/b5fa4d4f-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Baklava"
    },
    {
      cityName : "Giresun",
      img : "https://img.memurlar.net/galeri/7652/151b5e55-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Fındık"
    },
    {
      cityName : "Gümüşhane",
      img : "https://img.memurlar.net/galeri/7652/1a1b5e55-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Pestil,Köme"
    },
    {
      cityName : "Hakkari",
      img : "https://img.memurlar.net/galeri/7652/d820bd5b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Ters Lale"
    },
    {
      cityName : "Hatay",
      img : "https://img.memurlar.net/galeri/7652/e320bd5b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Künefe"
    },
    {
      cityName : "Isparta",
      img : "https://img.memurlar.net/galeri/7652/5c17d168-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Gül"
    },
    {
      cityName : "Mersin",
      img : "https://img.memurlar.net/galeri/7652/c304e3ae-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Tantuni"
    },
    {
      cityName : "İstanbul",
      img : "https://img.memurlar.net/galeri/7652/6617d168-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "İstanbul Boğazı"
    },
    {
      cityName : "İzmir",
      img : "https://img.memurlar.net/galeri/7652/406ed06e-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kordon"
    },
    {
      cityName : "Kars",
      img : "https://img.memurlar.net/galeri/7652/c4f90d7b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kars Kazı"
    },
    {
      cityName : "Kastamonu",
      img : "https://img.memurlar.net/galeri/7652/2d498d87-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Taşköprü Sarımsağı"
    },
    {
      cityName : "Kayseri",
      img : "https://img.memurlar.net/galeri/7652/34498d87-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kayseri Pastırması"
    },
    {
      cityName : "Kırklareli",
      img : "https://img.memurlar.net/galeri/7652/44cf688e-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Dupnisa Mağarası"
    },
    {
      cityName : "Kırşehir",
      img : "https://img.memurlar.net/galeri/7652/bc18d594-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Ahi Evran Heykeli"
    },
    {
      cityName : "Kocaeli",
      img : "https://img.memurlar.net/galeri/7652/412be29a-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Pişmaniye"
    },
    {
      cityName : "Konya",
      img : "https://img.memurlar.net/galeri/7652/472be29a-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Mevlana Türbesi"
    },
    {
      cityName : "Kütahya",
      img : "https://img.memurlar.net/galeri/7652/6dffbda1-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kütahya Çinisi"
    },
    {
      cityName : "Malatya",
      img : "https://img.memurlar.net/galeri/7652/72ffbda1-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kayısı"
    },
    {
      cityName : "Manisa",
      img : "https://img.memurlar.net/galeri/7652/f29447a8-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Mesir Macunu"
    },
    {
      cityName : "Kahramanmaraş",
      img : "https://img.memurlar.net/galeri/7652/bc97ee74-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Maraş Dondurması"
    },
    {
      cityName : "Mardin",
      img : "https://img.memurlar.net/galeri/7652/009547a8-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kaburga Dolması"
    },
    {
      cityName : "Muğla",
      img : "https://img.memurlar.net/galeri/7652/ca04e3ae-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Bodrum ve Turistik Yerler"
    },
    {
      cityName : "Muş",
      img : "https://img.memurlar.net/galeri/7652/0221feb4-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Malazgirt Ovası"
    },
    {
      cityName : "Nevşehir",
      img : "https://img.memurlar.net/galeri/7652/0821feb4-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Peri Bacaları"
    },
    {
      cityName : "Niğde",
      img : "https://img.memurlar.net/galeri/7652/c15bc5bb-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Aladağlar"
    },
    {
      cityName : "Ordu",
      img : "https://img.memurlar.net/galeri/7652/c55bc5bb-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Fındık"
    },
    {
      cityName : "Rize",
      img : "https://img.memurlar.net/galeri/7652/882930c3-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Çay"
    },
    {
      cityName : "Sakarya",
      img : "https://img.memurlar.net/galeri/7652/1e022ac9-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Islama Köfte"
    },
    {
      cityName : "Samsun",
      img : "https://img.memurlar.net/galeri/7652/4c8d2ccf-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Atatürk Anıtı"
    },
    {
      cityName : "Siirt",
      img : "https://img.memurlar.net/galeri/7652/528d2ccf-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Büryan Kebabı"
    },
    {
      cityName : "Sinop",
      img : "https://img.memurlar.net/galeri/7652/8de0a6d5-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Tarihi Sinop Cezaevi",
    },
    {
      cityName : "Sivas",
      img : "https://img.memurlar.net/galeri/7652/92e0a6d5-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kangal Köpeği"
    },
    {
      cityName : "Tekirdağ",
      img : "https://img.memurlar.net/galeri/7652/6496b9e2-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Tekirdağ Köftesi"
    },
    {
      cityName : "Tokat",
      img : "https://img.memurlar.net/galeri/7652/6b96b9e2-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Asma Yaprağı"
    },
    {
      cityName : "Trabzon",
      img : "https://img.memurlar.net/galeri/7652/f10bbde8-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Trabzon Ekmeği"
    },
    {
      cityName : "Tunceli",
      img : "https://img.memurlar.net/galeri/7652/fdeecdee-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Munzur Vadisi"
    },
    {
      cityName : "Şanlıurfa",
      img : "https://img.memurlar.net/galeri/7652/ec8cb1dc-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Çiğ Köfte"
    },
    {
      cityName : "Uşak",
      img : "https://img.memurlar.net/galeri/7652/06efcdee-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Uşak Battaniyesi"
    },
    {
      cityName : "Van",
      img : "https://img.memurlar.net/galeri/7652/63bc17f5-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Van Kedisi"
    },
    {
      cityName : "Yozgat",
      img : "https://img.memurlar.net/galeri/7652/d38492fb-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Testi Kebabı"
    },
    {
      cityName : "Zonguldak",
      img : "https://img.memurlar.net/galeri/7652/9e9c8f02-3384-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kömür Madenleri"
    },
    {
      cityName : "Aksaray",
      img : "https://img.memurlar.net/galeri/7652/17db66d6-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Ihlara Vadisi"
    },
    {
      cityName : "Bayburt",
      img : "https://img.memurlar.net/galeri/7652/c7cf2512-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Sırakayalar Şelalesi"
    },
    {
      cityName : "Karaman",
      img : "https://img.memurlar.net/galeri/7652/bcf90d7b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Karaman Koyunu"
    },
    {
      cityName : "Kırıkkale",
      img : "https://img.memurlar.net/galeri/7652/3ccf688e-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Silah Fabrikası"
    },
    {
      cityName : "Batman",
      img : "https://img.memurlar.net/galeri/7652/3cc80a0b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Hasankeyf(Sular Altında)"
    },
    {
      cityName : "Şırnak",
      img : "https://img.memurlar.net/galeri/7652/f68cb1dc-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Mem-u Zin Türbesi"
    },
    {
      cityName : "Bartın",
      img : "https://img.memurlar.net/galeri/7652/37c80a0b-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Amasra Kalesi"
    },
    {
      cityName : "Ardahan",
      img : "https://img.memurlar.net/galeri/7652/b2879df6-3184-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kaşar Peynir"
    },
    {
      cityName : "Iğdır",
      img : "https://img.memurlar.net/galeri/7652/907ce961-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kayısı"
    },
    {
      cityName : "Yalova",
      img : "https://img.memurlar.net/galeri/7652/cd8492fb-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Termal Kaplıcaları"
    },
    {
      cityName : "Karabük",
      img : "https://img.memurlar.net/galeri/7652/c397ee74-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Safranbolu Evleri"
    },
    {
      cityName : "Kilis",
      img : "https://img.memurlar.net/galeri/7652/c118d594-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Kilis Yorganları"
    },
    {
      cityName : "Osmaniye",
      img : "https://img.memurlar.net/galeri/7652/832930c3-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Yer Fıstığı"
    },
    {
      cityName : "Düzce",
      img : "https://img.memurlar.net/galeri/7652/4b41bd39-3284-e411-bfc7-14feb5cc13c9.jpg?width=800",
      desc : "Saklıkent ve Aktaş Şelaleleri"
    }
  ]
  PageIndex(index : number)
  {
    return Math.abs(this.currentPage - index) < 5;
  }
}
