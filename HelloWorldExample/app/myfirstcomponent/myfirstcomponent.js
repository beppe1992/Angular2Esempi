"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyFistComponent = (function () {
    function MyFistComponent() {
        this.messaggioBenvenuto = 'Benvenuto';
        this.utente = {
            matricola: '',
            nome: '',
            cognome: ''
        };
    }
    MyFistComponent = __decorate([
        core_1.Component({
            selector: 'my-first-component',
            template: "\n      <input [(ngModel)]=\"utente.matricola\" placeholder=\"matricola\">\n      <input [(ngModel)]=\"utente.nome\" placeholder=\"nome\">\n      <input [(ngModel)]=\"utente.cognome\" placeholder=\"cognome\">\n      <br><br>\n      {{messaggioBenvenuto}} {{utente.matricola}} - <b>{{utente.nome}} {{utente.cognome}}</b>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyFistComponent);
    return MyFistComponent;
}());
exports.MyFistComponent = MyFistComponent;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=myfirstcomponent.js.map