import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from '../../services/data-loader.service';
import {PlaceModel} from '../../models/place-model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-view-panel',
  templateUrl: './users-view-panel.component.html',
  styleUrls: ['./users-view-panel.component.css']
})
export class UsersViewPanelComponent implements OnInit {

  public time;
  public date: NgbDate;
  public isFoodCollapsed = true;
  public isVisibleToast = false;
  public isDrinkCollapsed = true;
  public selectedPlace: PlaceModel;
  public places: PlaceModel[];
  public selectedTypes: string[] = [];
  public selectedPlaces: PlaceModel[];
  public types = [
    {
      value: 'rest',
      name: 'Ресторант',
      isChecked: true
    },
    {
      value: 'disco',
      name: 'Дискотека',
      isChecked: true
    },
    {
      value: 'cafe',
      name: 'Кафене',
      isChecked: true
    }
  ];

  constructor(private dataLoader: DataLoaderService) {
    const today = new Date();
    this.date = new NgbDate(today.getFullYear(), today.getMonth(), today.getDate());
    this.time = today.getHours() + ':' + today.getMinutes() + ':00';
  }

  ngOnInit(): void {
    this.loadPlacesData();
    this.addTypes();
  }

  loadPlacesData() {
    this.dataLoader.getPlaces().subscribe(
      (data: PlaceModel[]) => {
        this.places = data;
        this.selectedPlaces = this.places;
        this.selectedPlace = this.selectedPlaces[0];
      });
  }

  addTypes() {
    this.types.forEach(
      type => {
        this.selectedTypes.push(type.value);
      });
  }

  onSelectPlace(place) {
    this.selectedPlace = place;
  }

  onTypeChecked(value, index) {
    this.types[index].isChecked = !this.types[index].isChecked;
    if (this.types[index].isChecked) {
      this.selectedTypes.push(value);
    } else {
      this.selectedTypes = this.selectedTypes.filter(type => type !== value);
    }
    this.filerPlacesByType();
  }

  filerPlacesByType() {
    this.selectedPlaces = this.places.filter(
      (place) => {
        if (this.selectedTypes.includes(place.type)) {
          return place;
        }
    });
    this.selectedPlace = this.selectedPlaces[0];
  }

  onSearchPlace(searchValue: string) {
    if (searchValue.trim().length < 1) {
      this.filerPlacesByType();
      return;
    }
    this.selectedPlaces = this.selectedPlaces.filter((place: PlaceModel) => {
      return (place.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    });
    this.selectedPlace = this.selectedPlaces[0];
  }

  reserve() {
    this.isVisibleToast = true;
  }
}
