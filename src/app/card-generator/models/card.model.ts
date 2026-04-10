export class CardModel {
  public imageUrl!: string;
  public title!: string;
  public description!: string;
  public link!: string;

  constructor(url: string = '', title: string = '', desc: string = '', link: string = '') {
    this.imageUrl = url;
    this.title = title;
    this.description = desc;
    this.link = link;
  }
}
