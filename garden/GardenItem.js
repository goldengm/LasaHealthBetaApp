import React from 'react';
// import {Images, theme, styles} from '../constants';

export class GardenItem {
  constructor(itemType, action, name, assets, rarity, price) {
    this.itemType = itemType; //  [flower, deco, garden, dye, badge, weed]
    this.action = action; //  [plant, dye, decoGeneral, decoSpecific]
    this.name = name;
    this.assets = assets; //  {staticImage: "", [state0IM: , state1IM: ....]}
    this.rarity = rarity; //  [0.0, 1.0]
    this.price = price;
  }
  getItemType = () => this.itemType;
  getAction = () => this.action;
  getName = () => this.name;
  getAssets = () => this.assets;
  getRarity = () => this.rarity;
  getPrice = () => this.price;
}

export class PlacedGardenItem extends GardenItem {
  constructor(
    itemType,
    action,
    name,
    assets,
    rarity,
    price,
    datePlaced,
    health,
    happiness,
    location,
    age,
  ) {
    super(itemType, action, name, assets, rarity, price);
    this.datePlaced = datePlaced;
    this.health = health;
    this.happiness = happiness;
    this.location = location;
    this.age = age;
  }
  getDatePlaced = () => this.datePlaced;
  getHealth = () => this.health;
  getHappiness = () => this.happiness;
  getAge = () => this.age;
  getCurrentAnimation = () => {
    //  FIXMETUNA:  add new logic here
    return this.assets['staticImage'];
  };

  setDatePlaced = newDatePlaced => (this.datePlaced = newDatePlaced);
  setHealth = newHealth => (this.health = newHealth);
  setHappiness = newHappiness => (this.happiness = newHappiness);
  setLocation = newLocation => (this.location = newLocation);
  setAge = newAge => (this.age = newAge);
}
