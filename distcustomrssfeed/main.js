(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_customrssback_customrssback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customrssback/customrssback.component */ "./src/app/components/customrssback/customrssback.component.ts");
/* harmony import */ var _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mainback/mainback.component */ "./src/app/components/mainback/mainback.component.ts");
/* harmony import */ var _components_customrssfront_customrssfront_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customrssfront/customrssfront.component */ "./src/app/components/customrssfront/customrssfront.component.ts");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/getdata.service */ "./src/app/services/getdata.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_deletedata_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/deletedata.service */ "./src/app/services/deletedata.service.ts");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _components_twitterfeed_mymedia_twitterfeed_mymedia_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/twitterfeed-mymedia/twitterfeed-mymedia.component */ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.ts");
/* harmony import */ var _components_templatersswithimages_templatersswithimages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/templatersswithimages/templatersswithimages.component */ "./src/app/components/templatersswithimages/templatersswithimages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    //, canActivate:[AuthGuard]
    { path: 'bemain', component: _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_5__["MainbackComponent"],
        children: [
            //  { path: 'login', component: LoginComponent},
            { path: 'customrssback', component: _components_customrssback_customrssback_component__WEBPACK_IMPORTED_MODULE_4__["CustomrssbackComponent"] },
            { path: '**', redirectTo: 'customrssback' }
        ]
    },
    { path: 'twitterfeedmymedia', component: _components_twitterfeed_mymedia_twitterfeed_mymedia_component__WEBPACK_IMPORTED_MODULE_16__["TwitterfeedMymediaComponent"] },
    { path: 'customrssfront', component: _components_customrssfront_customrssfront_component__WEBPACK_IMPORTED_MODULE_6__["CustomrssfrontComponent"] },
    { path: 'templatersswithimage', component: _components_templatersswithimages_templatersswithimages_component__WEBPACK_IMPORTED_MODULE_17__["TemplatersswithimagesComponent"] },
    { path: '**', redirectTo: 'bemain' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_customrssback_customrssback_component__WEBPACK_IMPORTED_MODULE_4__["CustomrssbackComponent"],
                _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_5__["MainbackComponent"],
                _components_customrssfront_customrssfront_component__WEBPACK_IMPORTED_MODULE_6__["CustomrssfrontComponent"],
                _components_twitterfeed_mymedia_twitterfeed_mymedia_component__WEBPACK_IMPORTED_MODULE_16__["TwitterfeedMymediaComponent"],
                _components_templatersswithimages_templatersswithimages_component__WEBPACK_IMPORTED_MODULE_17__["TemplatersswithimagesComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"]
            ],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services_getdata_service__WEBPACK_IMPORTED_MODULE_12__["GetdataService"],
                _services_deletedata_service__WEBPACK_IMPORTED_MODULE_14__["DeletedataService"],
                _services_adddata_service__WEBPACK_IMPORTED_MODULE_15__["AdddataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/customrssback/customrssback.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/customrssback/customrssback.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullwidth{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/components/customrssback/customrssback.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/customrssback/customrssback.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <mat-card>\n      <form id = \"formNewFeed\" name =\"formNewFeed\" #feedData = \"ngForm\" >\n          <!-- <input type = \"text\" name =\"title\" id=\"title\" placeholder=\"Enter Title\" ngModel required><br> -->\n          <input type = \"text\" name =\"description\" id=\"description\" placeholder=\"Enter description\" ngModel required><br>\n          <br><br>\n          <label>Image file (max: 10mb)</label><br>\n          <input type = \"file\" data-max-size=\"10048\" id=\"image\" name=\"image\" ngModel required><br><br><br>\n          <label>Background file (max: 10mb)</label><br>\n          <input type = \"file\" data-max-size=\"10048\" id=\"background\" name=\"image\" ngModel required><br><br><br>\n          \n          \n          <input type=\"button\" class=\"btn fullwidth green darken-1\" (click)=\"addFeed();feedData.reset()\" value=\"Add Feed\">\n           <!-- <input type = \"text\" name =\"attendants\" id=\"attendants\" placeholder=\"Enter attendant name\" ngModel><br> -->\n        </form>\n        \n  </mat-card>\n\n  <br><br>\n  \n  <mat-card>\n      <label>All Feeds</label>\n      <table class=\" responsive-table striped\">\n          <thead>\n            <tr>\n                <th>Title</th>\n                <th>Description</th>\n                <th>Image</th>\n                <!-- <th>Edit Event</th> -->\n                <th>Delete</th>\n            </tr>\n          </thead>\n  \n          <tbody>\n            <tr *ngFor=\"let item of feed_data\">\n              <!-- <td>{{item.title}}</td> -->\n              <td>{{item.description}}</td>\n               <td><img src='/uploads/{{item.image_path}}' height='42' width='62'></td>\n               <td><img src='/uploads/{{item.background_path}}' height='42' width='62'></td>\n               <!-- <td> <a routerLink='/admin/editevents/{{item._id}}' class=\"waves-effect waves-light blue darken-3 btn\"><i  class=\"material-icons\">edit</i></a></td> -->\n              <td> <a (click)=\"deleteFeed(item._id)\" class=\"waves-effect waves-light red darken-3 btn\"><i  class=\"material-icons\">delete</i></a></td>\n  \n       \n            </tr>\n          </tbody>\n  </table>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/components/customrssback/customrssback.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/customrssback/customrssback.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomrssbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomrssbackComponent", function() { return CustomrssbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
/* harmony import */ var _services_deletedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deletedata.service */ "./src/app/services/deletedata.service.ts");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomrssbackComponent = /** @class */ (function () {
    function CustomrssbackComponent(snackBar, authService, route, getdataService, deletedataService, adddataService, http, elem) {
        var _this = this;
        this.snackBar = snackBar;
        this.authService = authService;
        this.route = route;
        this.getdataService = getdataService;
        this.deletedataService = deletedataService;
        this.adddataService = adddataService;
        this.http = http;
        this.elem = elem;
        this.deleteFeed = function (deletedFeedID) {
            var _this = this;
            if (confirm('Are you sure you want to delete feed?')) {
                this.submitted = true;
                this.deletedataService.deleteFeed(deletedFeedID).subscribe(function (res) {
                    ////////refresh category /////////////
                    _this.refreshEverything();
                    //////////end refresh category.////////
                    _this.submitted = false;
                });
            }
        };
        this.refreshEverything = function () {
            _this.getdataService.getFeeds().subscribe(function (data) {
                console.log(data);
                _this.feed_data = data;
            }, function (err) {
                ////console.log(err);
                return false;
            });
        };
    }
    CustomrssbackComponent.prototype.ngOnInit = function () {
        this.submitted = true;
        this.refreshEverything();
    };
    CustomrssbackComponent.prototype.addFeed = function () {
        var _this = this;
        this.submitted = true;
        var files = this.elem.nativeElement.querySelector('#image').files;
        var files_background = this.elem.nativeElement.querySelector('#background').files;
        //let title = this.elem.nativeElement.querySelector('#title').value;
        var description = this.elem.nativeElement.querySelector('#description').value;
        var formData = new FormData();
        console.log(files);
        var file = files[0];
        var file_background = files_background[0];
        //console.log(title, description)
        // formData.append('title',title);
        formData.append('description', description);
        console.log(file.name);
        formData.append('image', file, file.name);
        formData.append('image', file_background, file_background.name);
        formData.append('using_default_logo', 'false');
        if (file.size < 10096865) {
            this.adddataService.addFeed(formData).subscribe(function (res) {
                _this.refreshEverything();
                _this.snackBar.open('Feed Uploaded Successfully', 'OK', {
                    duration: 3000
                });
                _this.submitted = false;
            });
        }
        else {
            //  $(window).scrollTop(0);
            this.submitted = false;
            this.snackBar.open('File max size exceeded (10 mb)', 'OK', {
                duration: 3000
            });
        }
    };
    CustomrssbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customrssback',
            template: __webpack_require__(/*! ./customrssback.component.html */ "./src/app/components/customrssback/customrssback.component.html"),
            styles: [__webpack_require__(/*! ./customrssback.component.css */ "./src/app/components/customrssback/customrssback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_getdata_service__WEBPACK_IMPORTED_MODULE_2__["GetdataService"], _services_deletedata_service__WEBPACK_IMPORTED_MODULE_3__["DeletedataService"], _services_adddata_service__WEBPACK_IMPORTED_MODULE_4__["AdddataService"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CustomrssbackComponent);
    return CustomrssbackComponent;
}());



/***/ }),

/***/ "./src/app/components/customrssfront/customrssfront.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/customrssfront/customrssfront.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positioning_title{\r\n    color:rgb(211, 211, 211);\r\n    font-size: 3.3em;\r\n    margin-left:15px;\r\n    margin-top:10px;\r\n    max-width: 1273px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.positioning_description{\r\n    color:white;\r\n    font-size: 2.5em;\r\n    margin-left:15px;\r\n    margin-top:10px;\r\n    max-width: 1273px;\r\n}\r\n\r\n.background_opaque{\r\n    position: fixed;\r\n    \r\n    width: 1273px;\r\n    height:845px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n}"

/***/ }),

/***/ "./src/app/components/customrssfront/customrssfront.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/customrssfront/customrssfront.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/uploads/{{this.feed_data[0].image_path}}\" height=\"845\" width=\"1273\" style=\"position:fixed; z-index: -10;\">\n\n<div class=\"background_opaque\">\n    <div class=\"positioning_title\">{{this.feed_data[0].title}}</div>\n    <div class=\"positioning_description\">{{this.feed_data[0].description}}</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/customrssfront/customrssfront.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/customrssfront/customrssfront.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomrssfrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomrssfrontComponent", function() { return CustomrssfrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomrssfrontComponent = /** @class */ (function () {
    function CustomrssfrontComponent(getdataService) {
        var _this = this;
        this.getdataService = getdataService;
        this.feed_data = [];
        this.counter = 0;
        setInterval(function () {
            _this.refreshData();
        }, 7000);
    }
    CustomrssfrontComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    CustomrssfrontComponent.prototype.refreshData = function () {
        var _this = this;
        this.getdataService.getFeeds().subscribe(function (data) {
            console.log(data);
            _this.feed_data = data;
            if (_this.counter < data.length) {
                console.log(_this.counter);
                _this.feed_data[0] = data[_this.counter];
                _this.counter++;
            }
            else {
                _this.counter = 0;
            }
        }, function (err) {
            ////console.log(err);
            return false;
        });
    };
    CustomrssfrontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customrssfront',
            template: __webpack_require__(/*! ./customrssfront.component.html */ "./src/app/components/customrssfront/customrssfront.component.html"),
            styles: [__webpack_require__(/*! ./customrssfront.component.css */ "./src/app/components/customrssfront/customrssfront.component.css")]
        }),
        __metadata("design:paramtypes", [_services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], CustomrssfrontComponent);
    return CustomrssfrontComponent;
}());



/***/ }),

/***/ "./src/app/components/mainback/mainback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mainback/mainback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n      <span>Custom RSS Feed</span>\n  </mat-toolbar-row>\n\n</mat-toolbar>\n<br>\n<div class=\"container\"><router-outlet></router-outlet></div>"

/***/ }),

/***/ "./src/app/components/mainback/mainback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.ts ***!
  \***********************************************************/
/*! exports provided: MainbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainbackComponent", function() { return MainbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainbackComponent = /** @class */ (function () {
    function MainbackComponent() {
    }
    MainbackComponent.prototype.ngOnInit = function () {
    };
    MainbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainback',
            template: __webpack_require__(/*! ./mainback.component.html */ "./src/app/components/mainback/mainback.component.html"),
            styles: [__webpack_require__(/*! ./mainback.component.css */ "./src/app/components/mainback/mainback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainbackComponent);
    return MainbackComponent;
}());



/***/ }),

/***/ "./src/app/components/templatersswithimages/templatersswithimages.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/templatersswithimages/templatersswithimages.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positioning_title{\r\n    color:rgb(211, 211, 211);\r\n    font-size: 3.3em;\r\n    margin-left:15px;\r\n    margin-top:10px;\r\n    max-width: 1273px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.positioning_description{\r\n    color: white;\r\n    font-size: 3.5em;\r\n    margin-left: 15px;\r\n    margin-top: 200px;\r\n    max-width: 850px;\r\n}\r\n\r\n.rotate { /* IE 9 */\r\n    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */\r\n    transform: rotate(90deg);\r\n    margin-top: 88px;\r\n  }\r\n\r\n.background_opaque{\r\n    position: fixed;\r\n    margin-top:-20px;\r\n    width: 1273px;\r\n    height:845px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.rotate90 {\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/templatersswithimages/templatersswithimages.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/templatersswithimages/templatersswithimages.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/uploads/{{this.feed_data[0].background_path}}\" height=\"845\" width=\"1273\" style=\"position:fixed; z-index: -10;\">\n\n\n<div style=\"max-width:316px; max-height:450px;\nposition: fixed;\nmargin-left: 902px;\nmargin-top: 198px;\nz-index: 10;\"><img id=\"image\" src=\"/uploads/{{this.feed_data[0].image_path}}\"  style=\"max-height:100%; max-width:100%;\"></div>\n\n<div class=\"background_opaque\">\n\n    <div class=\"positioning_description\">{{this.feed_data[0].description}}</div>\n</div>\n\n<!-- 316 450 -->"

/***/ }),

/***/ "./src/app/components/templatersswithimages/templatersswithimages.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/templatersswithimages/templatersswithimages.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TemplatersswithimagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatersswithimagesComponent", function() { return TemplatersswithimagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplatersswithimagesComponent = /** @class */ (function () {
    function TemplatersswithimagesComponent(getdataService) {
        var _this = this;
        this.getdataService = getdataService;
        this.feed_data = [];
        this.counter = 0;
        setInterval(function () {
            _this.refreshData();
        }, 7000);
    }
    TemplatersswithimagesComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    TemplatersswithimagesComponent.prototype.refreshData = function () {
        var _this = this;
        this.getdataService.getFeeds().subscribe(function (data) {
            console.log(data);
            _this.feed_data = data;
            if (_this.counter < data.length) {
                console.log(_this.counter);
                _this.feed_data[0] = data[_this.counter];
                _this.counter++;
            }
            else {
                _this.counter = 0;
            }
        }, function (err) {
            ////console.log(err);
            return false;
        });
    };
    TemplatersswithimagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-templatersswithimages',
            template: __webpack_require__(/*! ./templatersswithimages.component.html */ "./src/app/components/templatersswithimages/templatersswithimages.component.html"),
            styles: [__webpack_require__(/*! ./templatersswithimages.component.css */ "./src/app/components/templatersswithimages/templatersswithimages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], TemplatersswithimagesComponent);
    return TemplatersswithimagesComponent;
}());



/***/ }),

/***/ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positioning_title{\r\n    color:rgb(211, 211, 211);\r\n    font-size: 1.3em;\r\n    margin-left:15px;\r\n    margin-top:10px;\r\n    max-width: 615px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.positioning_description{\r\n    color:white;\r\n    font-size: 1.5em;\r\n    margin-left:15px;\r\n    margin-top:10px;\r\n    max-width: 615px;\r\n}\r\n\r\n.background_opaque{\r\n    position: fixed;\r\n    margin-top: 458px;\r\n    width: 647px;\r\n    height:168px;\r\n    background: linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,1));\r\n}"

/***/ }),

/***/ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{this.current_tweet_image}}\" height=\"627\" width=\"647\" style=\"position:fixed; z-index: -10;\">\n\n<div class=\"background_opaque\">\n    <div class=\"positioning_title\">{{this.current_tweet.user.name}}</div>\n    <div class=\"positioning_description\">{{this.current_tweet.full_text}}</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TwitterfeedMymediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterfeedMymediaComponent", function() { return TwitterfeedMymediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterfeedMymediaComponent = /** @class */ (function () {
    function TwitterfeedMymediaComponent(getdataService) {
        var _this = this;
        this.getdataService = getdataService;
        this.tweets_data = [];
        this.counter = 0;
        setInterval(function () {
            _this.change_data();
        }, 7000);
    }
    TwitterfeedMymediaComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    TwitterfeedMymediaComponent.prototype.initData = function () {
        var _this = this;
        this.getdataService.getTweets().subscribe(function (data) {
            console.log(data);
            _this.tweets_data = data;
            _this.change_data();
        }, function (err) {
            ////console.log(err);
            return false;
        });
    };
    TwitterfeedMymediaComponent.prototype.change_data = function () {
        this.current_tweet = this.tweets_data[this.counter];
        this.counter++;
        if (this.counter < this.tweets_data.length) {
            // console.log(this.counter)
        }
        else {
            this.counter = 0;
        }
        this.current_tweet.full_text = this.current_tweet.full_text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        console.log(this.current_tweet);
        if (typeof (this.current_tweet.entities.media) == "undefined") {
            // console.log("no media")
            // this.current_tweet_image = this.current_tweet.user.profile_image_url ;c
            // console.log(this.getRandomArbitrary(1,7))
            this.current_tweet_image = "assets/rfimages/" + this.getRandomArbitrary(1, 7) + ".jpg";
        }
        else {
            this.current_tweet_image = this.current_tweet.entities.media[0].media_url;
        }
    };
    TwitterfeedMymediaComponent.prototype.getRandomArbitrary = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    TwitterfeedMymediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitterfeed-mymedia',
            template: __webpack_require__(/*! ./twitterfeed-mymedia.component.html */ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.html"),
            styles: [__webpack_require__(/*! ./twitterfeed-mymedia.component.css */ "./src/app/components/twitterfeed-mymedia/twitterfeed-mymedia.component.css")]
        }),
        __metadata("design:paramtypes", [_services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], TwitterfeedMymediaComponent);
    return TwitterfeedMymediaComponent;
}());



/***/ }),

/***/ "./src/app/services/adddata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/adddata.service.ts ***!
  \*********************************************/
/*! exports provided: AdddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataService", function() { return AdddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdddataService = /** @class */ (function () {
    function AdddataService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    AdddataService.prototype.addFeed = function (formdata) {
        var _url = "/additems/add_feed";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'some error on server occured');
    };
    AdddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AdddataService);
    return AdddataService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.updatedUserPassword = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/users/update_user', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.isAdmin = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.RetrieveloadToken = function () {
        var token = localStorage.getItem('id_token');
        return token;
    };
    AuthenticationService.prototype.RetrieveAccount = function () {
        var user = localStorage.getItem('user');
        return user;
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/deletedata.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/deletedata.service.ts ***!
  \************************************************/
/*! exports provided: DeletedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletedataService", function() { return DeletedataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeletedataService = /** @class */ (function () {
    function DeletedataService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    DeletedataService.prototype.deleteFeed = function (id) {
        return this.http.delete("/deletes/delete_feed/" + id)
            .map(function (res) { return res.json(); });
    };
    DeletedataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], DeletedataService);
    return DeletedataService;
}());



/***/ }),

/***/ "./src/app/services/getdata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/getdata.service.ts ***!
  \*********************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetdataService = /** @class */ (function () {
    // authToken:any;
    // headers= new Headers();
    function GetdataService(http, authService) {
        // this.authService.RetrieveloadToken();
        this.http = http;
        this.authService = authService;
        // this.headers.append('Authorization', this.authService.RetrieveloadToken());
    }
    GetdataService.prototype.getFeeds = function () {
        return this.http.get('/fetchs/fetch_feeds')
            .map(function (res) { return res.json(); });
    };
    GetdataService.prototype.getTweets = function () {
        return this.http.get('/twitter/read_tweets')
            .map(function (res) { return res.json(); });
    };
    GetdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], GetdataService);
    return GetdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\custom_rss_feed_angular\customrssfeedsrc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map