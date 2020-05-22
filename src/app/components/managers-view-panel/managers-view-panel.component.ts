import { Component, OnInit } from '@angular/core';
import {PlaceModel} from '../../models/place-model';
import {DataLoaderService} from '../../services/data-loader.service';
import {FoodModel} from '../../models/food-model';

@Component({
  selector: 'app-managers-view-panel',
  templateUrl: './managers-view-panel.component.html',
  styleUrls: ['./managers-view-panel.component.css']
})
export class ManagersViewPanelComponent implements OnInit {

  public place: PlaceModel;

  constructor(private dataLoader: DataLoaderService) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace() {
    this.dataLoader.getPlaces().subscribe(
      (data: PlaceModel[]) => {
        this.place = data[3];
      });
  }

  removeFood(name: string) {
    this.place.menu.foods = this.place.menu.foods.filter(food => food.name !== name);
  }

  removeDrink(name: string) {
    this.place.menu.drinks = this.place.menu.drinks.filter(drink => drink.name !== name);
  }

  addFood(name, price) {
    this.place.menu.foods.push(new FoodModel(name, price));
  }

  addDrink(name, price) {
    this.place.menu.drinks.push(new FoodModel(name, price));
  }
}
