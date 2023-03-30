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
        case "km":
          return value * 0.001;
        case "cm":
          return value * 100;
        case "mm":
          return value * 1000;
        case "mil":
          return value * 0.000621371192;
        case "ft":
          return value * 3.28;
        default:
          throw new Error("Böyle bir değer yok");
      }
    }
    else{
      throw new Error("Negatif değer girilemez");
    }
  }

}
