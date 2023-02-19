import {makeAutoObservable} from "mobx";

export default class deviceStore {
    constructor() {
        this._types = [
            {id:1,name:'Холодильники'},
            {id:2,name:'Смартфоны'},
            {id:3,name:'Компьютеры'},
            {id:4,name:'Телевизоры'},
            {id:5,name:'Ноутбуки'},
            {id:6,name:'Посуда для дома'},
            {id:7,name:'Наушники'},
            {id:8,name:'Игровые приставки'}
        ]
        this._brands = [
            {id:1,name:'Samsung'},
            {id:2,name:'Apple'},
            {id:3,name:'Honor'},
            {id:4,name:'LG'},
            {id:5,name:'Panasonic'},
        ]
        this._devices =[
            {id:1,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:2,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:3,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:4,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:5,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:6,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'},
            {id:7,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types;
    }
    setBrands(brands){
        this._brands = brands;
    }
    setDevices(devices){
        this._devices = devices;
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType;
    }
    get selectedBrand(){
        return this._selectedBrand;
    }
}