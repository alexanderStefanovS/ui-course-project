
export class EventModel {
  public name: string;
  public date: string;

  public constructor(name: string = '', date: string = '') {
    this.name = name;
    this.date = date;
  }
}
