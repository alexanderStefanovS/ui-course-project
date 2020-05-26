import {Component, OnInit, ViewChild} from '@angular/core';
import {PlaceModel} from '../../models/place-model';
import {DataLoaderService} from '../../services/data-loader.service';
import {FoodModel} from '../../models/food-model';
import {AddEventComponent} from '../../dialogs/add-event/add-event.component';
import {EventModel} from '../../models/event-model';
import {ReservationModel} from '../../models/reservation-model';

@Component({
  selector: 'app-managers-view-panel',
  templateUrl: './managers-view-panel.component.html',
  styleUrls: ['./managers-view-panel.component.css']
})
export class ManagersViewPanelComponent implements OnInit {

  public CHANGES_SAVED = 'Промените са запазени';
  public EVENT_ADDED = 'Събитието е записано';
  public EVENT_REMOVED = 'Събитието е премахнато';
  public RESERVATION_ACCEPTED = 'Резервацията е одобрена';
  public RESERVATION_DECLINED = 'Резервацията е отхвърлена';

  @ViewChild('addEvent', { static: false }) public addEvent: AddEventComponent;
  public place: PlaceModel;
  public reservations: ReservationModel[];
  public isVisibleToast = false;
  public toastMessage: string;

  constructor(private dataLoader: DataLoaderService) { }

  ngOnInit(): void {
    this.getPlace();
    this.loadReservations();
  }

  getPlace() {
    this.dataLoader.getPlaces().subscribe(
      (data: PlaceModel[]) => {
        this.place = data[3];
      });
  }

  loadReservations() {
    this.dataLoader.getReservations().subscribe(
      (data: ReservationModel[]) => {
        this.reservations = data;
      }
    );
  }

  removeFood(name: string) {
    this.place.menu.foods = this.place.menu.foods.filter(food => food.name !== name);
    this.isVisibleToast = true;
    this.toastMessage = this.CHANGES_SAVED;
  }

  removeDrink(name: string) {
    this.place.menu.drinks = this.place.menu.drinks.filter(drink => drink.name !== name);
    this.isVisibleToast = true;
    this.toastMessage = this.CHANGES_SAVED;
  }

  addFood(name: string, price: string) {
    this.place.menu.foods.push(new FoodModel(name, price));
    this.isVisibleToast = true;
    this.toastMessage = this.CHANGES_SAVED;
  }

  addDrink(name: string, price: string) {
    this.place.menu.drinks.push(new FoodModel(name, price));
    this.isVisibleToast = true;
    this.toastMessage = this.CHANGES_SAVED;
  }

  removeEvent(name: string) {
    this.place.events = this.place.events.filter(event => event.name !== name);
    this.isVisibleToast = true;
    this.toastMessage = this.EVENT_REMOVED;
  }

  openAddEventModal() {
    this.addEvent.open();
  }

  saveEvent(event: EventModel) {
    this.place.events.push(event);
    this.addEvent.close();
    this.isVisibleToast = true;
    this.toastMessage = this.EVENT_ADDED;
  }

  acceptReservation(phone: string) {
    this.reservations = this.reservations.filter(reservation => reservation.phone !== phone);
    this.isVisibleToast = true;
    this.toastMessage = this.RESERVATION_ACCEPTED;
  }

  declineReservation(phone: string) {
    this.reservations = this.reservations.filter(reservation => reservation.phone !== phone);
    this.isVisibleToast = true;
    this.toastMessage = this.RESERVATION_DECLINED;
  }

  saveChanges() {
    this.isVisibleToast = true;
    this.toastMessage = this.CHANGES_SAVED;
  }
}
