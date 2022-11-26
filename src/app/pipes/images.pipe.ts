import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {
  transform(
    image: string,
    type: 'users' | 'ingredient' | 'drinks' | 'product' | 'menu'
  ): string {
   
      if (image) {
        const url = `${base_url}/${type}/image/${image}`;
        console.log('🚀 debug url', url)
        return url;
      } else {
        const url =
          'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
        return url;
      }
    
  }
}
