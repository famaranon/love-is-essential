import { Injectable } from '@angular/core';
import mergeImages from 'merge-images';
import {MatSnackBar} from '@angular/material/snack-bar';


const IMAGE_SIZE = 500;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private snackBar: MatSnackBar) { }

  public getImageData(file: Blob, variant: string): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const data = this.createCanvas(img);
        this.mergeImage(data, variant);
      };
      img.onerror = () => this.snackBar.open('An error has occurred', 'dismiss', {panelClass: 'error-notification', duration: 10000});
    };
  }

  private createCanvas(image): string {
    const elem = document.createElement('canvas');
    elem.width = IMAGE_SIZE;
    elem.height = IMAGE_SIZE;
    const ctx = elem.getContext('2d');
    this.drawImageProp(ctx, image, 0, 0, IMAGE_SIZE, IMAGE_SIZE, 0, 0);
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, IMAGE_SIZE, IMAGE_SIZE);
    return ctx.canvas.toDataURL();
  }

  private drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY): void {
    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }
    // default offset is center
    offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
    offsetY = typeof offsetY === 'number' ? offsetY : 0.5;
    // keep bounds [0.0, 1.0]
    if (offsetX < 0) { offsetX = 0; }
    if (offsetY < 0) { offsetY = 0; }
    if (offsetX > 1) { offsetX = 1; }
    if (offsetY > 1) { offsetY = 1; }
    const iw = img.width;
    const ih = img.height;
    const r = Math.min(w / iw, h / ih);
    let nw = iw * r;
    let nh = ih * r;
    let cx = 1;
    let cy = 1;
    let cw = 1;
    let ch = 1;
    let ar = 1;
    // decide which gap to fill
    if (nw < w) { ar = w / nw; }
    if (Math.abs(ar - 1) < 1e-14 && nh < h) { ar = h / nh; }  // updated
    nw *= ar;
    nh *= ar;
    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;
    // make sure source rectangle is valid
    if (cx < 0) { cx = 0; }
    if (cy < 0) { cy = 0; }
    if (cw > iw) { cw = iw; }
    if (ch > ih) { ch = ih; }
    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }

  private mergeImage(image, variant): void {
    let logo = '../../../assets/logo-big-white.png';
    if (variant === 'tourism') { logo = '../../../assets/logo-tourism-big-white.png'; }
    mergeImages([
      { src: image},
      { src: logo, x: 10, y: 10 },
    ])
    .then(b64 => {
      this.downloadImage(b64);
    })
    .catch(() => this.snackBar.open('An error has occurred', 'dismiss', {panelClass: 'error-notification', duration: 10000}));
  }

  private convertBase64ToBlobData(base64Data: string, contentType: string = 'image/png', sliceSize = 500): Blob {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  private downloadImage(base64): void {
    const blobData = this.convertBase64ToBlobData(base64.split(',')[1]);
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blobData, 'picture');
    } else {
      const blob = new Blob([blobData], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'picture.png';
      link.click();
    }
  }
}
