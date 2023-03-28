import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type : string): unknown {
    if(value >= 0)
    {
      switch(type)
      {
        case "TL":
          return value * 19.1;
        case "EUR":
          return value * 0.93;
        case "RUB":
          return value * 76.54;
        case "GBP":
          return value * 0.82;
        case "YEN":
          return value * 131;
        case "AUD":
          return value *1.5;
        default:
          throw new Error("Böyle bir değer yok");
      }
    }
    else{
      throw new Error("Negatif değer girilemez");
    }
  }

}
