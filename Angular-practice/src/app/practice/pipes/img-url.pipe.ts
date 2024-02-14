import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(img: string, defaulturl: string): unknown {
    if (img)
      return img;
    else
      return defaulturl;
  }

}
