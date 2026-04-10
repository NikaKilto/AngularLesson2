import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngLesson2');

  // ptagContext: string = 'Ptag from appts';
  // imageUrl: string =
  //   'https://images.unsplash.com/photo-1775740865980-9cdb0b0c71f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // inputText: string = '';
  // getRandText(): string {
  //   let rand = Math.round(Math.random() * 100);
  //   return `Random Number Is ${rand}`;
  // }
  // changeImgUrlOnBtnClick(event: Event): void {
  //   console.log(event);
  //   console.log(event.target);
  //   let btn: HTMLButtonElement = event.target as HTMLButtonElement;
  //   btn.classList.remove('btn-primary');
  //   btn.classList.add('btn-dark');
  //   this.imageUrl =
  //     'https://plus.unsplash.com/premium_photo-1775671957198-33d25ba82e75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  // }

  // onInpValChangeBtnClick(): void {
  //   this.inputText = 'default value for input';
  // }
}
