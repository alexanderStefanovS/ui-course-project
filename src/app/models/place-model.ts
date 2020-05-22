import {MenuModel} from './menu-model';
import {EventModel} from './event-model';

export class PlaceModel {

  public name: string;
  public type: string;
  public description: string;
  public address: string;
  public menu: MenuModel;
  public events: EventModel[];

}
