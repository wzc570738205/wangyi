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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/app/components/tab/tab.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'wangyi', pathMatch: 'full' },
    /* {
        path: 'dashboards', component: BasicLayoutComponent,
        children: [
            {path: '', component: DashboardComponent}
        ]
    },
    {
        path: 'setting', component: BasicLayoutComponent,
        loadChildren: 'app/components/features/setting/setting.module#SettingModule'
    }, */
    {
        path: '', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        children: [
            { path: 'wangyi', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
        ]
    },
    { path: 'tab', component: _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"] },
    { path: '**', redirectTo: 'wangyi' }
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'wymusic';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/app/components/tab/tab.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_song_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/song/song.component */ "./src/app/components/song/song.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__["TabComponent"],
                _components_song_song_component__WEBPACK_IMPORTED_MODULE_8__["SongComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                element_angular__WEBPACK_IMPORTED_MODULE_4__["ElModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div el-container direction=\"vertical\" class=\"demo-box\">\n  <div el-header>\n    <app-song></app-song>\n  </div>\n  <div el-main >\n    <div class=\"row\" style=\"    margin: 3px;\">\n      <div style=\"width: 80%;\">\n        <input class=\"form-control\"  placeholder=\"请输入要搜索的歌曲名字\" type=\"text\" [(ngModel)]=\"name\">\n      </div>\n      <div style=\"width: 20%;\">\n        <button class=\"btn btn-success\" style=\"background:#d43c33\" (click)=\"search()\">搜索🔍</button>\n      </div>\n    </div>\n    <el-card class=\"box-card\">\n      <div *ngIf=\"hostList.length == 0\">暂无数据</div>\n      <div *ngFor=\"let item of hostList?.songs;let dx = index\" class=\"text item\">\n        <div (click)='gotoMusic(item.id,item)' class=\"song\">\n          <span>{{dx+1>10?dx:\"0\"+(dx+1)}}</span>&nbsp;&nbsp;&nbsp;{{item.name }}{{item.bMusic?.bitrate}}\n          <div class=\"zz\">\n            <span *ngFor=\"let is of item.ar\"> {{is.name}}</span>\n          </div>\n          <i class=\"fa fa-play-circle-o fa-lg\"></i>\n        </div>\n\n      </div>\n    </el-card>\n\n  </div>\n  <div el-footer class=\"bottom\">\n    <div class=\"buttom-btn\">\n      <div (click)='tab()'> <i class=\"fa fa-music fa-lg\" ></i> 热歌榜</div>\n      <div> <i class=\"fa fa-search fa-lg\" ></i>搜索</div>\n      <div> <i class=\"fa fa-user-o fa-lg\"></i> 我的</div>\n    </div>\n  </div>\n</div>\n<div el-container direction=\"vertical\" class=\"demo-box songd\" *ngIf='show'>\n  <div el-header> <i class=\"fa fa-chevron-circle-left fa-3x\" (click)=\"back()\"></i>\n  </div>\n  <div el-main>\n    <div class=\"m-song-wrap\">\n      <div class=\"m-song-disc\">\n        <div class=\"m-song-turn\">\n          <div class=\"m-song-rollwrap\" style=\"transform: matrix(0.684571, 0.728946, -0.728946, 0.684571, 0, 0);\">\n            <div class=\"m-song-img a-circling\"><img class=\"u-img\" src=\"{{song.al.picUrl}}\"></div>\n          </div>\n          <div class=\"m-song-lgour\" style=\"transform: matrix(0.684571, 0.728946, -0.728946, 0.684571, 0, 0);\">\n            <div class=\"m-song-light \"></div>\n          </div>\n        </div><span class=\"m-song-plybtn\"></span>\n      </div>\n    </div>\n    <div>歌曲名字：{{song.name}}</div>\n    <div>歌曲演唱： <span *ngFor=\"let is of song.ar\"> {{is.name}}</span></div>\n    <div>歌曲id：{{song.id}}</div>\n    <div style=\"word-break: break-word;\" (click)=\"showmp3()\">歌曲Mp3地址(点击弹出复制)： <a href=\"{{src}}\"></a>{{src}}</div>\n    <audio id=\"video\" src=\"{{src}}\" t>\n    </audio>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.topfl {\n  position: relative;\n  width: 142px;\n  height: 25px; }\n.topplh {\n  opacity: 0;\n  color: #d43c33; }\n.topsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 142px;\n  height: 25px; }\n.top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  width: 100%;\n  height: 64px;\n  background-color: #d43c33;\n  box-sizing: border-box; }\n.el-main {\n  padding: 0; }\n.bottom {\n  background-color: #d43c33; }\n.bottom ul {\n    background-color: #d43c33; }\n.bottom .buttom-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100%; }\n.bottom .buttom-btn div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #fff; }\n.bottom .buttom-btn div .fa {\n        padding: 5px; }\n.topimg {\n  width: 100%;\n  height: 150px;\n  background: url(\"https://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee\");\n  background-size: contain; }\n.topimg .titleimg {\n    width: 153px;\n    height: 72px;\n    background: url(https://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…);\n    background-size: 166px 97px;\n    background-position: 157px 72px;\n    margin: 20px;\n    float: left; }\n.topimg .time {\n    width: 100%;\n    color: #fff;\n    font-size: 13px;\n    float: left;\n    padding-left: 35px; }\n.zz {\n  font-size: 14px;\n  color: #9e9e9e; }\n.song {\n  position: relative; }\n.song i {\n    position: absolute;\n    top: 10px;\n    right: 2px;\n    color: #aaa; }\n.songd {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: url(https://p3.music.126.net/BItr8CpEEnPgOJF9WnW5Zg==/109951163532998104.jpg);\n  z-index: 99999;\n  background-size: auto; }\n.songd i {\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3dhbmd6aGljaGFvL21vamluc2hpL3dhbmd5aS93eW11c2ljL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWSxFQUNiO0FBRUQ7RUFDRSxXQUFVO0VBQ1YsZUFBYyxFQUNmO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFDTixhQUFZO0VBQ1osYUFBWSxFQUNiO0FBRUQ7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUdaLGNBQWE7RUFHYiwrQkFBOEI7RUFHOUIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDSSxXQUFVLEVBQ2I7QUFDRDtFQUNFLDBCQUF5QixFQXNCMUI7QUF2QkQ7SUFJSSwwQkFBeUIsRUFDMUI7QUFMSDtJQVFJLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLGFBQVksRUFXYjtBQXRCSDtNQWNNLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsb0JBQW1CO01BQ25CLFlBQVcsRUFJWjtBQXJCTDtRQW1CUSxhQUFZLEVBQ2I7QUFJUDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IseUdBQXdHO0VBQ3hHLHlCQUF3QixFQWlCM0I7QUFyQkQ7SUFNUSxhQUFZO0lBQ1osYUFBWTtJQUNaLDZFQUE2RTtJQUM3RSw0QkFBMkI7SUFDM0IsZ0NBQStCO0lBQy9CLGFBQVk7SUFDWixZQUFXLEVBQ2Q7QUFiTDtJQWVRLFlBQVc7SUFDWCxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsbUJBQWtCLEVBQ3JCO0FBRUw7RUFDSSxnQkFBZTtFQUNmLGVBQWMsRUFDakI7QUFDRDtFQUNJLG1CQUFrQixFQU9yQjtBQVJEO0lBR1EsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsWUFBVyxFQUNkO0FBRUw7RUFDSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLDBGQUF5RjtFQUN6RixlQUFjO0VBQ2Qsc0JBQXFCLEVBSXhCO0FBWEQ7SUFTUSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udG9wZmwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi50b3BwbGgge1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2Q0M2MzMzsgfVxuXG4udG9wc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi50b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0M2MzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uZWwtbWFpbiB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLmJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7IH1cbiAgLmJvdHRvbSB1bCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0M2MzMzsgfVxuICAuYm90dG9tIC5idXR0b20tYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5ib3R0b20gLmJ1dHRvbS1idG4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAuYm90dG9tIC5idXR0b20tYnRuIGRpdiAuZmEge1xuICAgICAgICBwYWRkaW5nOiA1cHg7IH1cblxuLnRvcGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9ob3RfbXVzaWNfYmdfMnguanBnP2YwMWEyNTIzODljMjZiY2YwMTY4MTYyNDJlYWE2YWVlXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cbiAgLnRvcGltZyAudGl0bGVpbWcge1xuICAgIHdpZHRoOiAxNTNweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMubXVzaWMuMTI2Lm5ldC9tL3MvaW1nL2luZGV4X2ljb25fMngucG5nPzUyMDdhMjjigKYpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTY2cHggOTdweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTdweCA3MnB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAudG9waW1nIC50aW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XG5cbi56eiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ZTllOWU7IH1cblxuLnNvbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnNvbmcgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMnB4O1xuICAgIGNvbG9yOiAjYWFhOyB9XG5cbi5zb25nZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wMy5tdXNpYy4xMjYubmV0L0JJdHI4Q3BFRW5QZ09KRjlXblc1Wmc9PS8xMDk5NTExNjM1MzI5OTgxMDQuanBnKTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgfVxuICAuc29uZ2QgaSB7XG4gICAgY29sb3I6ICNmZmY7IH1cbiIsIi50b3BmbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC50b3BwbGgge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY29sb3I6ICNkNDNjMzM7XG4gIH1cbiAgXG4gIC50b3Bzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTQycHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICAudG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLmVsLW1haW57XG4gICAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7XG4gIFxuICAgIHVsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7XG4gICAgfVxuICBcbiAgICAuYnV0dG9tLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgLmZhe1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudG9waW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9ob3RfbXVzaWNfYmdfMnguanBnP2YwMWEyNTIzODljMjZiY2YwMTY4MTYyNDJlYWE2YWVlJyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAudGl0bGVpbWd7XG4gICAgICAgICAgd2lkdGg6IDE1M3B4O1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy5tdXNpYy4xMjYubmV0L20vcy9pbWcvaW5kZXhfaWNvbl8yeC5wbmc/NTIwN2EyOOKApik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjZweCA5N3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1N3B4IDcycHg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnRpbWV7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgIH1cbiAgfVxuICAuenp7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzllOWU5ZTtcbiAgfVxuICAuc29uZ3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGl7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgfVxuICB9XG4gIC5zb25nZHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcDMubXVzaWMuMTI2Lm5ldC9CSXRyOENwRUVuUGdPSkY5V25XNVpnPT0vMTA5OTUxMTYzNTMyOTk4MTA0LmpwZyk7XG4gICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgIGl7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.hostList = [];
        this.getListFlag = true;
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.search = function (name) {
        var _this = this;
        this.httpClient
            .get('https://api.imjad.cn/cloudmusic/?type=search&s=' + this.name)
            .subscribe(function (data) {
            console.log(data);
            _this.hostList = data['result'];
            _this.getListFlag = false;
        });
    };
    SearchComponent.prototype.gotoMusic = function (id, item) {
        var _this = this;
        this.song = item;
        console.log(item);
        this.show = true;
        return this.httpClient
            .get('https://api.imjad.cn/cloudmusic/?type=song&id=' + id)
            .subscribe(function (data) {
            console.log(data);
            _this.src = data['data'][0].url;
            console.log(_this.audio);
            _this.playAudio();
        });
    };
    SearchComponent.prototype.playAudio = function () {
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio();
        this.audio.pause();
        this.audio.src = this.src;
        this.audio.load();
        this.audio.play();
    };
    SearchComponent.prototype.back = function () {
        //this.audio.pause();
        this.show = false;
    };
    SearchComponent.prototype.tab = function () {
        this.router.navigate(['tab']);
    };
    SearchComponent.prototype.showmp3 = function () {
        alert(this.src);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/song/song.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/song/song.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n\n    <h1 class=\"topfl\" data-reactid=\"4\"><span class=\"topplh\" data-reactid=\"5\">网易云音乐</span><svg class=\"topsvg\" viewBox=\"0 0 1238 231\"\n        xmlns=\"http://www.w3.org/2000/svg\" data-reactid=\"6\">\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-reactid=\"7\">\n          <g id=\"logo_white\" fill-rule=\"nonzero\" data-reactid=\"8\">\n            <g id=\"Group\" transform=\"translate(288.000000, 31.000000)\" fill=\"#FFFFFF\" data-reactid=\"9\">\n              <path d=\"M225.14,75.724 L343.119,75.724 C346.655,75.724 349.523,72.856 349.523,69.319 L349.523,13.42 C349.523,9.882 346.656,7.014 343.119,7.014 L225.14,7.014 C221.603,7.014 218.736,9.882 218.736,13.42 L218.736,69.319 C218.736,72.856 221.603,75.724 225.14,75.724 Z M234.881,19.827 L333.513,19.827 L333.513,34.964 L234.881,34.964 L234.881,19.827 Z M234.881,47.775 L333.513,47.775 L333.513,62.913 L234.881,62.913 L234.881,47.775 Z\"\n                id=\"Shape\" data-reactid=\"10\"></path>\n              <path d=\"M348.677,88.266 L226.579,88.266 C224.599,88.266 222.729,89.183 221.516,90.75 L208.741,108.577 L196.048,125.972 C195.265,127.045 196.031,128.553 197.36,128.553 L211.423,128.553 C212.544,128.553 213.595,128.018 214.254,127.115 L232.597,102.015 L258.363,102.015 L212.345,165.325 C211.547,166.423 212.331,167.962 213.688,167.962 L227.589,167.962 C228.747,167.962 229.832,167.409 230.512,166.473 L277.367,102.015 L303.675,102.015 L257.619,165.404 C256.845,166.469 257.606,167.962 258.922,167.962 L273.094,167.962 C274.141,167.962 275.125,167.46 275.742,166.613 L322.678,102.015 L331.29,102.015 L339.073,102.035 L339.073,130.829 L339.073,136.167 L339.073,140.994 C339.073,147.044 334.17,151.948 328.122,151.948 L315.022,151.948 C313.976,151.948 312.994,152.449 312.379,153.295 L303.691,165.252 C302.872,166.38 303.677,167.963 305.072,167.963 L328.118,167.963 C343.009,167.963 355.084,155.888 355.084,140.991 L355.084,94.673 C355.083,91.134 352.215,88.266 348.677,88.266 Z\"\n                id=\"Shape\" data-reactid=\"11\"></path>\n              <path d=\"M556.932,68.036 L394.914,68.036 C393.943,68.036 393.154,68.824 393.154,69.795 L393.154,73.979 C393.154,79.189 397.377,83.413 402.586,83.413 L444.741,83.413 L406.251,156.376 C405.303,158.171 404.96,160.274 405.522,162.226 C406.487,165.585 409.51,167.758 412.83,167.758 L542.212,167.758 C544.007,167.758 545.806,167.245 547.204,166.119 C549.994,163.872 550.789,160.166 549.422,157.09 L528.401,116.593 C528.041,115.781 527.236,115.258 526.348,115.258 L514.01,115.258 C512.385,115.258 511.298,116.93 511.957,118.416 L530.166,152.578 L425.414,152.578 L461.902,83.412 L550.002,83.412 C554.794,83.412 558.68,79.527 558.68,74.734 L558.68,69.781 C558.68,68.818 557.897,68.036 556.932,68.036 Z\"\n                id=\"Shape\" data-reactid=\"12\"></path>\n              <path d=\"M416.142,30.062 L535.956,30.062 C540.884,30.062 544.878,26.067 544.878,21.138 L544.878,16.605 C544.878,15.545 544.018,14.686 542.959,14.686 L409.029,14.686 C407.882,14.686 406.955,15.615 406.955,16.761 L406.955,20.873 C406.955,25.948 411.068,30.062 416.142,30.062 Z\"\n                id=\"Shape\" data-reactid=\"13\"></path>\n              <path d=\"M153.048,8.96 L8.111,8.96 C3.69,8.96 0.106,12.545 0.106,16.967 L0.106,166.423 C0.106,167.436 0.929,168.259 1.941,168.259 L14.282,168.259 C15.295,168.259 16.118,167.436 16.118,166.423 L16.118,24.975 L145.043,24.975 L145.043,37.585 L145.043,141.288 C145.043,147.338 140.14,152.243 134.092,152.243 L125.304,152.243 C124.275,152.243 123.308,152.735 122.704,153.567 L113.62,166.071 C112.959,166.981 113.609,168.258 114.734,168.258 L134.089,168.258 C148.737,168.258 160.668,156.511 161.022,141.946 L161.055,141.946 L161.055,37.586 L161.055,16.967 C161.054,12.545 157.469,8.96 153.048,8.96 Z\"\n                id=\"Shape\" data-reactid=\"14\"></path>\n              <path d=\"M117.341,133.327 L131.453,133.327 C132.661,133.327 133.416,132.024 132.817,130.976 L108.615,88.61 L132.817,46.243 C133.416,45.196 132.661,43.892 131.455,43.892 L117.34,43.892 C116.776,43.892 116.255,44.194 115.976,44.683 L99.759,73.068 L83.542,44.683 C83.263,44.194 82.741,43.892 82.178,43.892 L68.065,43.892 C66.858,43.892 66.102,45.196 66.701,46.243 L90.903,88.609 L66.701,130.976 C66.102,132.024 66.859,133.327 68.065,133.327 L82.178,133.327 C82.741,133.327 83.263,133.025 83.542,132.535 L99.759,104.151 L115.976,132.535 C116.257,133.025 116.777,133.327 117.341,133.327 Z\"\n                id=\"Shape\" data-reactid=\"15\"></path>\n              <path d=\"M70.027,89.258 C70.314,88.795 70.373,88.195 70.066,87.656 L45.482,44.683 C45.203,44.194 44.681,43.892 44.118,43.892 L29.84,43.892 C28.633,43.892 27.877,45.196 28.476,46.243 L52.625,88.459 L28.342,130.977 C27.743,132.025 28.5,133.328 29.706,133.328 L43.984,133.328 C44.549,133.328 45.069,133.026 45.348,132.536 L69.996,89.383 C70.018,89.341 70.009,89.299 70.027,89.258 Z\"\n                id=\"Shape\" data-reactid=\"16\"></path>\n              <path d=\"M751.56,60.348 L705.189,60.348 L722.443,30.062 L732.056,30.062 C737.155,30.062 741.288,25.928 741.288,20.828 L741.288,16.489 C741.288,15.494 740.481,14.686 739.485,14.686 L680.216,14.686 L673.013,2.14 C672.344,0.977 671.105,0.259 669.764,0.259 L657.073,0.259 C655.799,0.259 655.002,1.637 655.638,2.742 L662.501,14.687 L602.295,14.687 C601.244,14.687 600.391,15.539 600.391,16.591 L600.391,20.829 C600.391,25.929 604.525,30.063 609.624,30.063 L619.237,30.063 L636.491,60.349 L590.11,60.349 C588.988,60.349 588.078,61.258 588.078,62.381 L588.078,66.576 C588.078,71.629 592.173,75.725 597.224,75.725 L744.666,75.725 C749.602,75.725 753.602,71.723 753.602,66.787 L753.602,62.39 C753.6,61.262 752.687,60.348 751.56,60.348 Z M687.499,60.348 L654.178,60.348 L636.925,30.062 L704.753,30.062 L687.499,60.348 Z\"\n                id=\"Shape\" data-reactid=\"17\"></path>\n              <path d=\"M726.61,88.266 L704.819,88.266 L615.067,88.266 C610.823,88.266 607.38,91.709 607.38,95.955 L607.38,160.275 C607.38,164.519 610.823,167.963 615.067,167.963 L726.61,167.963 C730.854,167.963 734.297,164.52 734.297,160.275 L734.297,116.813 L734.297,95.955 C734.297,91.709 730.854,88.266 726.61,88.266 Z M718.285,153.743 L623.457,153.743 L623.457,135.224 L718.285,135.224 L718.285,153.743 Z M718.285,116.812 L718.285,121.004 L623.457,121.004 L623.457,102.485 L704.819,102.485 L718.285,102.485 L718.285,116.812 Z\"\n                id=\"Shape\" data-reactid=\"18\"></path>\n              <path d=\"M944.067,79.044 L944.067,74.526 C944.067,73.622 943.335,72.89 942.431,72.89 L877.728,72.89 L877.728,39.705 C877.728,38.696 876.91,37.877 875.9,37.877 L870.891,37.877 C865.824,37.877 861.715,41.986 861.715,47.054 L861.715,72.889 L808.375,72.889 L813.729,32.593 C859.199,30.416 905.533,24.899 924.423,22.479 C929.282,21.856 932.695,17.387 932.014,12.535 L931.322,7.608 C931.204,6.767 930.453,6.176 929.612,6.291 C919.62,7.644 861.416,15.295 806.552,17.521 C802.781,17.674 799.678,20.548 799.231,24.299 L792.092,79.673 C791.836,81.854 792.52,84.039 793.981,85.682 C795.44,87.323 797.531,88.265 799.727,88.265 L861.716,88.265 L861.716,141.002 C861.716,147.054 856.813,151.959 850.762,151.959 L847.96,151.959 C846.829,151.959 845.766,152.502 845.103,153.421 L836.76,164.986 C835.862,166.232 836.752,167.973 838.289,167.973 L850.761,167.973 C865.654,167.973 877.727,155.898 877.727,141.001 L877.727,88.264 L934.845,88.264 C939.939,88.266 944.067,84.138 944.067,79.044 Z\"\n                id=\"Shape\" data-reactid=\"19\"></path>\n              <path d=\"M834.801,102.485 L823.581,102.485 C820.493,102.485 817.625,104.027 815.94,106.616 C808.225,118.468 797.397,139.751 786.721,156.722 C785.802,158.183 786.816,160.076 788.543,160.076 L798.743,160.076 C801.815,160.076 804.729,158.558 806.363,155.955 C818.41,136.748 829.701,115.809 836.143,104.927 C836.786,103.841 836.063,102.485 834.801,102.485 Z\"\n                id=\"Shape\" data-reactid=\"20\"></path>\n              <path d=\"M948.759,156.722 C938.085,139.752 927.257,118.468 919.54,106.616 C917.855,104.027 914.989,102.485 911.899,102.485 L900.678,102.485 C899.417,102.485 898.694,103.84 899.336,104.926 C905.779,115.808 917.069,136.748 929.118,155.954 C930.75,158.557 933.666,160.075 936.738,160.075 L946.937,160.075 C948.665,160.076 949.679,158.183 948.759,156.722 Z\"\n                id=\"Shape\" data-reactid=\"21\"></path>\n            </g>\n            <g id=\"Group\" data-reactid=\"22\">\n              <path d=\"M177.66,0.259 L52.34,0.259 C23.553,0.259 0,23.812 0,52.599 L0,177.919 C0,206.706 23.553,230.259 52.34,230.259 L177.66,230.259 C206.447,230.259 230,206.706 230,177.919 L230,52.599 C230,23.812 206.447,0.259 177.66,0.259 Z\"\n                id=\"Shape\" fill=\"#FFFFFF\" data-reactid=\"23\"></path>\n              <path d=\"M139.287,71.199 C138.652,68.792 137.686,65.115 136.946,62.354 C136.384,60.317 136.125,58.003 136.725,55.942 C136.893,55.363 137.151,54.842 137.436,54.312 C138.675,52.011 140.99,50.423 143.559,49.997 C144.725,49.804 145.923,49.863 147.065,50.164 C148.262,50.48 149.39,51.045 150.376,51.789 C151.408,52.569 152.216,53.577 153.158,54.453 C154.685,55.878 156.732,56.75 158.984,56.75 C163.705,56.75 167.533,52.922 167.533,48.202 C167.533,46.801 167.193,45.481 166.596,44.316 C166.544,44.215 166.49,44.113 166.433,44.012 C166.395,43.946 166.356,43.878 166.316,43.812 C165.36,42.201 163.978,40.802 162.553,39.579 C159.814,37.226 156.58,35.45 153.142,34.355 C151.525,33.839 149.859,33.474 148.173,33.281 C144.462,32.855 140.67,33.243 137.124,34.416 C123.148,39.03 116.445,52.056 120.452,66.839 C120.848,68.318 121.533,70.928 121.894,72.287 C118.903,72.93 115.934,73.809 113.019,74.932 C99.367,80.189 88.532,91.863 84.743,105.4 C83.396,110.215 82.934,115.206 83.373,120.239 C84.32,131.114 90.121,141.245 98.887,147.334 C107.146,153.072 117.025,154.756 126.713,152.085 C133.57,150.191 139.666,146.116 143.878,140.612 C150.543,131.906 152.531,120.463 149.475,108.394 C148.363,104.003 146.963,99.125 145.611,94.405 C145.12,92.7 144.63,90.987 144.149,89.289 C149.945,90.78 155.29,93.6 159.634,97.658 C174.725,111.753 177.634,136.031 166.399,154.135 C156.532,170.037 137.311,180.311 117.433,180.311 C83.913,180.311 56.643,153.042 56.643,119.524 C56.643,116.547 56.874,113.534 57.328,110.576 C57.693,108.19 58.208,105.811 58.856,103.5 C59.496,101.222 60.279,98.956 61.184,96.771 C62.084,94.599 63.119,92.465 64.266,90.418 C65.399,88.39 66.672,86.402 68.043,84.506 C69.399,82.629 70.888,80.806 72.462,79.089 C74.031,77.377 75.718,75.74 77.475,74.218 C79.23,72.699 81.097,71.264 83.021,69.952 C84.952,68.635 86.979,67.422 89.047,66.343 C90.182,65.752 91.332,65.196 92.501,64.68 C93.128,64.402 93.762,64.136 94.399,63.881 C98.785,62.133 100.922,57.161 99.174,52.775 C97.427,48.389 92.456,46.248 88.068,48.003 C87.24,48.333 86.417,48.681 85.578,49.049 C84.074,49.716 82.59,50.429 81.137,51.19 C78.483,52.575 75.881,54.132 73.398,55.823 C70.93,57.505 68.538,59.344 66.287,61.295 C64.037,63.243 61.872,65.344 59.864,67.537 C57.843,69.737 55.937,72.076 54.193,74.483 C52.435,76.914 50.804,79.467 49.35,82.068 C47.878,84.694 46.546,87.438 45.39,90.227 C44.225,93.042 43.217,95.955 42.397,98.886 C41.564,101.854 40.903,104.914 40.432,107.978 C39.845,111.794 39.547,115.68 39.547,119.524 C39.547,162.469 74.487,197.405 117.431,197.405 C143.088,197.405 168.01,183.958 180.921,163.147 C196.629,137.84 192.582,105.043 171.299,85.165 C162.586,77.026 151.244,72.252 139.287,71.199 Z M130.304,130.222 C128.342,132.785 125.447,134.7 122.159,135.609 C116.13,137.267 111.479,135.267 108.641,133.296 C103.994,130.069 100.915,124.63 100.4,118.756 C100.142,115.779 100.41,112.837 101.203,110.008 C103.566,101.568 110.446,94.241 119.161,90.884 C121.501,89.984 123.885,89.301 126.279,88.832 C127.186,92.181 128.184,95.663 129.176,99.121 C130.516,103.787 131.844,108.409 132.902,112.59 C134.138,117.47 134.691,124.491 130.304,130.222 Z\"\n                id=\"Shape\" fill=\"#DD001B\" data-reactid=\"24\"></path>\n            </g>\n          </g>\n        </g>\n      </svg></h1>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/song/song.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/song/song.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.topfl {\n  position: relative;\n  width: 142px;\n  height: 25px; }\n.topplh {\n  opacity: 0;\n  color: #d43c33; }\n.topsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 142px;\n  height: 25px; }\n.top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  width: 100%;\n  height: 64px;\n  background-color: #d43c33;\n  box-sizing: border-box; }\n.el-main {\n  padding: 0; }\n.bottom {\n  background-color: #d43c33; }\n.bottom ul {\n    background-color: #d43c33; }\n.bottom .buttom-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100%; }\n.bottom .buttom-btn div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #fff; }\n.bottom .buttom-btn div .fa {\n        padding: 5px; }\n.topimg {\n  width: 100%;\n  height: 150px;\n  background: url(\"https://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee\");\n  background-size: contain; }\n.topimg .titleimg {\n    width: 153px;\n    height: 72px;\n    background: url(https://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…);\n    background-size: 166px 97px;\n    background-position: 157px 72px;\n    margin: 20px;\n    float: left; }\n.topimg .time {\n    width: 100%;\n    color: #fff;\n    font-size: 13px;\n    float: left;\n    padding-left: 35px; }\n.zz {\n  font-size: 14px;\n  color: #9e9e9e; }\n.song {\n  position: relative; }\n.song i {\n    position: absolute;\n    top: 10px;\n    right: 2px;\n    color: #aaa; }\n.songd {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: #fff;\n  z-index: 99999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb25nL3NvbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2FuZ3poaWNoYW8vbW9qaW5zaGkvd2FuZ3lpL3d5bXVzaWMvc3JjL2FwcC9jb21wb25lbnRzL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVksRUFDYjtBQUVEO0VBQ0UsV0FBVTtFQUNWLGVBQWMsRUFDZjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxPQUFNO0VBQ04sYUFBWTtFQUNaLGFBQVksRUFDYjtBQUVEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLGFBQVk7RUFHWixjQUFhO0VBR2IsK0JBQThCO0VBRzlCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLHVCQUFzQixFQUN2QjtBQUNEO0VBQ0ksV0FBVSxFQUNiO0FBQ0Q7RUFDRSwwQkFBeUIsRUFzQjFCO0FBdkJEO0lBSUksMEJBQXlCLEVBQzFCO0FBTEg7SUFRSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixhQUFZLEVBV2I7QUF0Qkg7TUFjTSxjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLG9CQUFtQjtNQUNuQixZQUFXLEVBSVo7QUFyQkw7UUFtQlEsYUFBWSxFQUNiO0FBSVA7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLHlHQUF3RztFQUN4Ryx5QkFBd0IsRUFpQjNCO0FBckJEO0lBTVEsYUFBWTtJQUNaLGFBQVk7SUFDWiw2RUFBNkU7SUFDN0UsNEJBQTJCO0lBQzNCLGdDQUErQjtJQUMvQixhQUFZO0lBQ1osWUFBVyxFQUNkO0FBYkw7SUFlUSxZQUFXO0lBQ1gsWUFBVztJQUNYLGdCQUFlO0lBQ2YsWUFBVztJQUNYLG1CQUFrQixFQUNyQjtBQUVMO0VBQ0ksZ0JBQWU7RUFDZixlQUFjLEVBQ2pCO0FBQ0Q7RUFDSSxtQkFBa0IsRUFPckI7QUFSRDtJQUdRLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsV0FBVTtJQUNWLFlBQVcsRUFDZDtBQUVMO0VBQ0ksZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29uZy9zb25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRvcGZsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTQycHg7XG4gIGhlaWdodDogMjVweDsgfVxuXG4udG9wcGxoIHtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNkNDNjMzM7IH1cblxuLnRvcHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTQycHg7XG4gIGhlaWdodDogMjVweDsgfVxuXG4udG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmVsLW1haW4ge1xuICBwYWRkaW5nOiAwOyB9XG5cbi5ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzOyB9XG4gIC5ib3R0b20gdWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7IH1cbiAgLmJvdHRvbSAuYnV0dG9tLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAuYm90dG9tIC5idXR0b20tYnRuIGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgLmJvdHRvbSAuYnV0dG9tLWJ0biBkaXYgLmZhIHtcbiAgICAgICAgcGFkZGluZzogNXB4OyB9XG5cbi50b3BpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy5tdXNpYy4xMjYubmV0L20vcy9pbWcvaG90X211c2ljX2JnXzJ4LmpwZz9mMDFhMjUyMzg5YzI2YmNmMDE2ODE2MjQyZWFhNmFlZVwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XG4gIC50b3BpbWcgLnRpdGxlaW1nIHtcbiAgICB3aWR0aDogMTUzcHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9pbmRleF9pY29uXzJ4LnBuZz81MjA3YTI44oCmKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2NnB4IDk3cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTU3cHggNzJweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgLnRvcGltZyAudGltZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMzVweDsgfVxuXG4uenoge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOWU5ZTllOyB9XG5cbi5zb25nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5zb25nIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDJweDtcbiAgICBjb2xvcjogI2FhYTsgfVxuXG4uc29uZ2Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk5OTk7IH1cbiIsIi50b3BmbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC50b3BwbGgge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY29sb3I6ICNkNDNjMzM7XG4gIH1cbiAgXG4gIC50b3Bzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTQycHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICAudG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLmVsLW1haW57XG4gICAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7XG4gIFxuICAgIHVsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7XG4gICAgfVxuICBcbiAgICAuYnV0dG9tLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgLmZhe1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudG9waW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9ob3RfbXVzaWNfYmdfMnguanBnP2YwMWEyNTIzODljMjZiY2YwMTY4MTYyNDJlYWE2YWVlJyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAudGl0bGVpbWd7XG4gICAgICAgICAgd2lkdGg6IDE1M3B4O1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy5tdXNpYy4xMjYubmV0L20vcy9pbWcvaW5kZXhfaWNvbl8yeC5wbmc/NTIwN2EyOOKApik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjZweCA5N3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1N3B4IDcycHg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnRpbWV7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgIH1cbiAgfVxuICAuenp7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzllOWU5ZTtcbiAgfVxuICAuc29uZ3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGl7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgfVxuICB9XG4gIC5zb25nZHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/song/song.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/song/song.component.ts ***!
  \***************************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
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

var SongComponent = /** @class */ (function () {
    function SongComponent() {
    }
    SongComponent.prototype.ngOnInit = function () {
    };
    SongComponent.prototype.ngOnChanges = function () {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.playAudio();
    };
    SongComponent.prototype.playAudio = function () {
        var audio = new Audio();
        audio.src = this.src;
        audio.load();
        audio.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SongComponent.prototype, "src", void 0);
    SongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song',
            template: __webpack_require__(/*! ./song.component.html */ "./src/app/components/song/song.component.html"),
            styles: [__webpack_require__(/*! ./song.component.scss */ "./src/app/components/song/song.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/app/components/tab/tab.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tab/tab.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div el-container direction=\"vertical\" class=\"demo-box\">\n  <div el-header>\n    <app-song></app-song>\n  </div>\n  <div el-main [el-loading]=\"getListFlag\" [text]=\"'拼命加载中'\">\n    <div class=\"topimg\">\n      <div class=\"titleimg\"></div>\n      <div class=\"time\">更新时间：{{timeFormat(hostList?.trackNumberUpdateTime)}}</div>\n    </div>\n    <el-card class=\"box-card\">\n      <div *ngFor=\"let item of hostList?.tracks;let dx = index\" class=\"text item\">\n        <div (click)='gotoMusic(item.id,item)' class=\"song\">\n          <span>{{dx+1>10?dx:\"0\"+(dx+1)}}</span>&nbsp;&nbsp;&nbsp;{{item.name }}{{item.bMusic?.bitrate}}\n          <div class=\"zz\">\n            <span *ngFor=\"let is of item.artists\"> {{is.name}}</span>\n          </div>\n          <i class=\"fa fa-play-circle-o fa-lg\"></i>\n        </div>\n\n      </div>\n    </el-card>\n\n  </div>\n  <div el-footer class=\"bottom\">\n    <div class=\"buttom-btn\">\n      <div> <i class=\"fa fa-music fa-lg\"></i> 热歌榜</div>\n      <div (click)='gosearch()'> <i class=\"fa fa-search fa-lg\" ></i>搜索</div>\n      <div> <i class=\"fa fa-user-o fa-lg\"></i> 我的</div>\n    </div>\n  </div>\n</div>\n<div el-container direction=\"vertical\" class=\"demo-box songd\" *ngIf='show'>\n  <div el-header> <i class=\"fa fa-chevron-circle-left fa-3x\" (click)=\"back()\"></i>\n  </div>\n  <div el-main>\n    <div class=\"m-song-wrap\">\n      <div class=\"m-song-disc\">\n        <div class=\"m-song-turn\">\n          <div class=\"m-song-rollwrap\" style=\"transform: matrix(0.684571, 0.728946, -0.728946, 0.684571, 0, 0);\">\n            <div class=\"m-song-img a-circling\"><img class=\"u-img\" src=\"{{song.album.blurPicUrl}}\"></div>\n          </div>\n          <div class=\"m-song-lgour\" style=\"transform: matrix(0.684571, 0.728946, -0.728946, 0.684571, 0, 0);\">\n            <div class=\"m-song-light \"></div>\n          </div>\n        </div><span class=\"m-song-plybtn\"></span>\n      </div>\n    </div>\n    <div>{{song.name}}</div>\n    <div style=\"word-break: break-word;\" (click)=\"showmp3()\">歌曲Mp3地址(点击弹出复制)： <a href=\"{{src}}\"></a>{{src}}</div>\n    <audio id=\"video\" src=\"{{src}}\" t>\n      </audio>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tab/tab.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tab/tab.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.topfl {\n  position: relative;\n  width: 142px;\n  height: 25px; }\n.topplh {\n  opacity: 0;\n  color: #d43c33; }\n.topsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 142px;\n  height: 25px; }\n.top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  width: 100%;\n  height: 64px;\n  background-color: #d43c33;\n  box-sizing: border-box; }\n.el-main {\n  padding: 0; }\n.bottom {\n  background-color: #d43c33; }\n.bottom ul {\n    background-color: #d43c33; }\n.bottom .buttom-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100%; }\n.bottom .buttom-btn div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #fff; }\n.bottom .buttom-btn div .fa {\n        padding: 5px; }\n.topimg {\n  width: 100%;\n  height: 150px;\n  background: url(\"https://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee\");\n  background-size: contain; }\n.topimg .titleimg {\n    width: 153px;\n    height: 72px;\n    background: url(https://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…);\n    background-size: 166px 97px;\n    background-position: 157px 72px;\n    margin: 20px;\n    float: left; }\n.topimg .time {\n    width: 100%;\n    color: #fff;\n    font-size: 13px;\n    float: left;\n    padding-left: 35px; }\n.zz {\n  font-size: 14px;\n  color: #9e9e9e; }\n.song {\n  position: relative; }\n.song i {\n    position: absolute;\n    top: 10px;\n    right: 2px;\n    color: #aaa; }\n.songd {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: url(https://p3.music.126.net/BItr8CpEEnPgOJF9WnW5Zg==/109951163532998104.jpg);\n  z-index: 99999;\n  background-size: auto; }\n.songd i {\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3dhbmd6aGljaGFvL21vamluc2hpL3dhbmd5aS93eW11c2ljL3NyYy9hcHAvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWSxFQUNiO0FBRUQ7RUFDRSxXQUFVO0VBQ1YsZUFBYyxFQUNmO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFDTixhQUFZO0VBQ1osYUFBWSxFQUNiO0FBRUQ7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUdaLGNBQWE7RUFHYiwrQkFBOEI7RUFHOUIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDSSxXQUFVLEVBQ2I7QUFDRDtFQUNFLDBCQUF5QixFQXNCMUI7QUF2QkQ7SUFJSSwwQkFBeUIsRUFDMUI7QUFMSDtJQVFJLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLGFBQVksRUFXYjtBQXRCSDtNQWNNLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsb0JBQW1CO01BQ25CLFlBQVcsRUFJWjtBQXJCTDtRQW1CUSxhQUFZLEVBQ2I7QUFJUDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IseUdBQXdHO0VBQ3hHLHlCQUF3QixFQWlCM0I7QUFyQkQ7SUFNUSxhQUFZO0lBQ1osYUFBWTtJQUNaLDZFQUE2RTtJQUM3RSw0QkFBMkI7SUFDM0IsZ0NBQStCO0lBQy9CLGFBQVk7SUFDWixZQUFXLEVBQ2Q7QUFiTDtJQWVRLFlBQVc7SUFDWCxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsbUJBQWtCLEVBQ3JCO0FBRUw7RUFDSSxnQkFBZTtFQUNmLGVBQWMsRUFDakI7QUFDRDtFQUNJLG1CQUFrQixFQU9yQjtBQVJEO0lBR1EsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsWUFBVyxFQUNkO0FBRUw7RUFDSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLDBGQUF5RjtFQUN6RixlQUFjO0VBQ2Qsc0JBQXFCLEVBSXhCO0FBWEQ7SUFTUSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udG9wZmwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi50b3BwbGgge1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2Q0M2MzMzsgfVxuXG4udG9wc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi50b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0M2MzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uZWwtbWFpbiB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLmJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDNjMzM7IH1cbiAgLmJvdHRvbSB1bCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0M2MzMzsgfVxuICAuYm90dG9tIC5idXR0b20tYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5ib3R0b20gLmJ1dHRvbS1idG4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAuYm90dG9tIC5idXR0b20tYnRuIGRpdiAuZmEge1xuICAgICAgICBwYWRkaW5nOiA1cHg7IH1cblxuLnRvcGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9ob3RfbXVzaWNfYmdfMnguanBnP2YwMWEyNTIzODljMjZiY2YwMTY4MTYyNDJlYWE2YWVlXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cbiAgLnRvcGltZyAudGl0bGVpbWcge1xuICAgIHdpZHRoOiAxNTNweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMubXVzaWMuMTI2Lm5ldC9tL3MvaW1nL2luZGV4X2ljb25fMngucG5nPzUyMDdhMjjigKYpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTY2cHggOTdweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTdweCA3MnB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAudG9waW1nIC50aW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XG5cbi56eiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ZTllOWU7IH1cblxuLnNvbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnNvbmcgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMnB4O1xuICAgIGNvbG9yOiAjYWFhOyB9XG5cbi5zb25nZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wMy5tdXNpYy4xMjYubmV0L0JJdHI4Q3BFRW5QZ09KRjlXblc1Wmc9PS8xMDk5NTExNjM1MzI5OTgxMDQuanBnKTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgfVxuICAuc29uZ2QgaSB7XG4gICAgY29sb3I6ICNmZmY7IH1cbiIsIi50b3BmbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE0MnB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi50b3BwbGgge1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2Q0M2MzMztcbn1cblxuLnRvcHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTQycHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmVsLW1haW57XG4gICAgcGFkZGluZzogMDtcbn1cbi5ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzO1xuXG4gIHVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzYzMzO1xuICB9XG5cbiAgLmJ1dHRvbS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLmZhe1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4udG9waW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9ob3RfbXVzaWNfYmdfMnguanBnP2YwMWEyNTIzODljMjZiY2YwMTY4MTYyNDJlYWE2YWVlJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIC50aXRsZWltZ3tcbiAgICAgICAgd2lkdGg6IDE1M3B4O1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MzLm11c2ljLjEyNi5uZXQvbS9zL2ltZy9pbmRleF9pY29uXzJ4LnBuZz81MjA3YTI44oCmKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjZweCA5N3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTdweCA3MnB4O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAudGltZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgfVxufVxuLnp6e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzllOWU5ZTtcbn1cbi5zb25ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgfVxufVxuLnNvbmdke1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3AzLm11c2ljLjEyNi5uZXQvQkl0cjhDcEVFblBnT0pGOVduVzVaZz09LzEwOTk1MTE2MzUzMjk5ODEwNC5qcGcpO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICBpe1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/tab/tab.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabComponent = /** @class */ (function () {
    function TabComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.getListFlag = true;
        this.show = false;
    }
    TabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getConfig();
        this.getConfig().subscribe(function (data) {
            _this.hostList = data['result'];
            console.log(_this.hostList);
            _this.getListFlag = false;
        });
    };
    TabComponent.prototype.getConfig = function () {
        // https://api.imjad.cn/cloudmusic/?type=playlist&id=3778678
        return this.httpClient.get("http://music.163.com/api/playlist/detail?id=3778678");
    };
    TabComponent.prototype.timeFormat = function (ms) {
        if (ms) {
            return new Date(ms).toLocaleDateString().slice(0, 25);
            ;
        }
        else {
            return "";
        }
    };
    TabComponent.prototype.gotoMusic = function (id, item) {
        var _this = this;
        this.song = item;
        console.log(item);
        this.show = true;
        return this.httpClient.get("https://api.imjad.cn/cloudmusic/?type=song&id=" + id).subscribe(function (data) {
            console.log(data);
            _this.src = data['data'][0].url;
            console.log(_this.audio);
            _this.playAudio();
        });
    };
    TabComponent.prototype.playAudio = function () {
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio();
        this.audio.pause();
        this.audio.src = this.src;
        this.audio.load();
        this.audio.play();
    };
    TabComponent.prototype.back = function () {
        //this.audio.pause();
        this.show = false;
        this.audio.pause();
    };
    TabComponent.prototype.gosearch = function () {
        this.router.navigate(['wangyi']);
    };
    TabComponent.prototype.showmp3 = function () {
        alert(this.src);
    };
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/components/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/components/tab/tab.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabComponent);
    return TabComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wangzhichao/mojinshi/wangyi/wymusic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map