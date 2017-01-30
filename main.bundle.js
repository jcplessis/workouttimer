webpackJsonp([0,3],{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/home.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunWorkoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunWorkoutComponent = (function () {
    function RunWorkoutComponent(route, workoutService) {
        this.route = route;
        this.workoutService = workoutService;
        this.exercises = [];
        this.nbRepetitions = 0;
        this.currentExercise = 0;
    }
    RunWorkoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var workoutId = parseInt(this.route.snapshot.params["workoutId"]);
        this.workoutModel = this.workoutService.get(workoutId);
        this.workoutModel.exercises.forEach(function (exercise) {
            return _this.exercises.push({
                name: exercise.name,
                duration: exercise.duration,
                durationLeft: exercise.duration,
            });
        });
        this.nbRepetitions = this.workoutModel.nbRepetitions;
    };
    RunWorkoutComponent.prototype.start = function () {
        var _this = this;
        console.log("STAAAAART");
        this.begin = Date.now();
        this.sub = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(200).take(1000)
            .subscribe(function (step) {
            console.log(step);
            var exercise = _this.exercises[_this.currentExercise];
            exercise.durationLeft -= 0.2;
            if (exercise.durationLeft <= 0) {
                exercise.durationLeft = 0;
                _this.currentExercise++;
                if (_this.currentExercise >= _this.exercises.length) {
                    _this.nbRepetitions--;
                    _this.currentExercise = 0;
                    if (_this.nbRepetitions == 0) {
                        _this.end = Date.now();
                        _this.sub.unsubscribe();
                        var tot = _this.end - _this.begin;
                        console.log("total time : " + tot);
                    }
                    else {
                        _this.exercises.forEach(function (exercise) { return exercise.durationLeft = exercise.duration; });
                    }
                }
            }
        });
    };
    RunWorkoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-run-workout',
            templateUrl: './run-workout.component.html',
            styleUrls: ['./run-workout.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__["a" /* WorkoutService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__["a" /* WorkoutService */]) === 'function' && _b) || Object])
    ], RunWorkoutComponent);
    return RunWorkoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-workout.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sevices_workout_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutComponent = (function () {
    function WorkoutComponent(route, workoutService) {
        this.route = route;
        this.workoutService = workoutService;
    }
    WorkoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var workoutId = parseInt(_this.route.snapshot.params["workoutId"]);
            _this.workoutModel = _this.workoutService.get(workoutId);
        });
    };
    WorkoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-workout',
            templateUrl: './workout.component.html',
            styleUrls: ['./workout.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sevices_workout_service__["a" /* WorkoutService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__sevices_workout_service__["a" /* WorkoutService */]) === 'function' && _b) || Object])
    ], WorkoutComponent);
    return WorkoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/workout.component.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/ng_for.ngfactory.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/ng_if.ngfactory.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http_src_http_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_src_backends_browser_xhr__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http_src_base_response_options__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http_src_backends_xhr_backend__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_base_request_options__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http_src_interfaces__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http_src_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_icon_icon_registry__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__icon_css_ngstyle__ = __webpack_require__(556);
/* unused harmony export MdIconModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdIcon; });
/* unused harmony export MdIconNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdIcon0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




















var MdIconModuleInjector = (function (_super) {
    __extends(MdIconModuleInjector, _super);
    function MdIconModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdIconModuleInjector.prototype, "_BrowserXhr_3", {
        get: function () {
            if ((this.__BrowserXhr_3 == null)) {
                (this.__BrowserXhr_3 = new __WEBPACK_IMPORTED_MODULE_4__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_ResponseOptions_4", {
        get: function () {
            if ((this.__ResponseOptions_4 == null)) {
                (this.__ResponseOptions_4 = new __WEBPACK_IMPORTED_MODULE_5__angular_http_src_base_response_options__["a" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_XSRFStrategy_5", {
        get: function () {
            if ((this.__XSRFStrategy_5 == null)) {
                (this.__XSRFStrategy_5 = __WEBPACK_IMPORTED_MODULE_2__angular_http_src_http_module__["a" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_XHRBackend_6", {
        get: function () {
            if ((this.__XHRBackend_6 == null)) {
                (this.__XHRBackend_6 = new __WEBPACK_IMPORTED_MODULE_6__angular_http_src_backends_xhr_backend__["a" /* XHRBackend */](this._BrowserXhr_3, this._ResponseOptions_4, this._XSRFStrategy_5));
            }
            return this.__XHRBackend_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_RequestOptions_7", {
        get: function () {
            if ((this.__RequestOptions_7 == null)) {
                (this.__RequestOptions_7 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_base_request_options__["a" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_Http_8", {
        get: function () {
            if ((this.__Http_8 == null)) {
                (this.__Http_8 = __WEBPACK_IMPORTED_MODULE_2__angular_http_src_http_module__["b" /* httpFactory */](this._XHRBackend_6, this._RequestOptions_7));
            }
            return this.__Http_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdIconModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_9", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_9 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_9 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_9;
        },
        enumerable: true,
        configurable: true
    });
    MdIconModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_http_src_http_module__["c" /* HttpModule */]();
        this._DefaultStyleCompatibilityModeModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdIconModule_2 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["a" /* MdIconModule */]();
        return this._MdIconModule_2;
    };
    MdIconModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_http_src_http_module__["c" /* HttpModule */])) {
            return this._HttpModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["a" /* MdIconModule */])) {
            return this._MdIconModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http_src_base_response_options__["b" /* ResponseOptions */])) {
            return this._ResponseOptions_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_http_src_interfaces__["a" /* XSRFStrategy */])) {
            return this._XSRFStrategy_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_http_src_backends_xhr_backend__["a" /* XHRBackend */])) {
            return this._XHRBackend_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_base_request_options__["b" /* RequestOptions */])) {
            return this._RequestOptions_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_http_src_http__["a" /* Http */])) {
            return this._Http_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_9;
        }
        return notFoundResult;
    };
    MdIconModuleInjector.prototype.destroyInternal = function () {
    };
    return MdIconModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdIconModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdIconModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["a" /* MdIconModule */]);
var Wrapper_MdIcon = (function () {
    function Wrapper_MdIcon(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["b" /* MdIcon */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdIcon.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdIcon.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdIcon.prototype.check_svgIcon = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.svgIcon = currValue;
            this._changes['svgIcon'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.check_fontSet = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fontSet = currValue;
            this._changes['fontSet'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.check_fontIcon = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.fontIcon = currValue;
            this._changes['fontIcon'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.check_alt = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.alt = currValue;
            this._changes['alt'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.check_hostAriaLabel = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.hostAriaLabel = currValue;
            this._changes['hostAriaLabel'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._changes['color'] = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_5, currValue);
            this._expr_5 = currValue;
        }
    };
    Wrapper_MdIcon.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_MdIcon.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdIcon.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdIcon.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdIcon;
}());
var renderType_MdIcon_Host = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdIcon_Host0 = (function (_super) {
    __extends(View_MdIcon_Host0, _super);
    function View_MdIcon_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdIcon_Host0, renderType_MdIcon_Host, __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdIcon_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-icon', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'img'), rootSelector, null);
        this.compView_0 = new View_MdIcon0(this.viewUtils, this, 0, this._el_0);
        this._MdIcon_0_3 = new Wrapper_MdIcon(new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this.compView_0.create(this._MdIcon_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdIcon_0_3.context);
    };
    View_MdIcon_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["b" /* MdIcon */]) && (0 === requestNodeIndex))) {
            return this._MdIcon_0_3.context;
        }
        return notFoundResult;
    };
    View_MdIcon_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdIcon_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            this._MdIcon_0_3.context.ngAfterViewChecked();
        }
    };
    View_MdIcon_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdIcon_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdIcon_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_MdIcon_Host0;
}(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view__["a" /* AppView */]));
var MdIconNgFactory = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-icon, mat-icon', View_MdIcon_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_icon_icon__["b" /* MdIcon */]);
var styles_MdIcon = [__WEBPACK_IMPORTED_MODULE_19__icon_css_ngstyle__["a" /* styles */]];
var renderType_MdIcon = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdIcon, {});
var View_MdIcon0 = (function (_super) {
    __extends(View_MdIcon0, _super);
    function View_MdIcon0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdIcon0, renderType_MdIcon, __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdIcon0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this.projectNodes(parentRenderNode, 0);
        this.init(null, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    return View_MdIcon0;
}(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/icon.ngfactory.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_exercise_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__model_exercise_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExerciseComponent = (function () {
    function ExerciseComponent() {
    }
    ExerciseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__["ExerciseModel"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__["ExerciseModel"]) === 'function' && _a) || Object)
    ], ExerciseComponent.prototype, "exerciseModel", void 0);
    ExerciseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-exercise',
            templateUrl: './exercise.component.html',
            styleUrls: ['./exercise.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ExerciseComponent);
    return ExerciseComponent;
    var _a;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/exercise.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(workoutService, router) {
        this.workoutService = workoutService;
        this.router = router;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* EventEmitter */]();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.workouts = this.workoutService.list();
    };
    NavBarComponent.prototype.totalTime = function (workout) {
        return workout.exercises.map(function (exercise) { return exercise.duration; }).reduce(function (a, b) { return a + b; });
    };
    NavBarComponent.prototype.goToWorkout = function (id) {
        this.router.navigate(['workout', id]);
        this.clicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* EventEmitter */]) === 'function' && _a) || Object)
    ], NavBarComponent.prototype, "clicked", void 0);
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__["a" /* WorkoutService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__sevices_workout_service__["a" /* WorkoutService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/nav-bar.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_exercise_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__model_exercise_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunExerciseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RunExerciseComponent = (function () {
    function RunExerciseComponent() {
    }
    RunExerciseComponent.prototype.ngOnInit = function () {
    };
    RunExerciseComponent.prototype.progress = function (exercise) {
        return 100 * (exercise.duration - exercise.durationLeft) / exercise.duration;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__["RunningExerciseModel"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_exercise_model__["RunningExerciseModel"]) === 'function' && _a) || Object)
    ], RunExerciseComponent.prototype, "exerciseModel", void 0);
    RunExerciseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-run-exercise',
            templateUrl: './run-exercise.component.html',
            styleUrls: ['./run-exercise.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RunExerciseComponent);
    return RunExerciseComponent;
    var _a;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-exercise.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_css_ngstyle__ = __webpack_require__(551);
/* unused harmony export MdCardModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdCard; });
/* unused harmony export Wrapper_MdCardHeader */
/* unused harmony export Wrapper_MdCardTitleGroup */
/* unused harmony export Wrapper_MdCardContent */
/* unused harmony export Wrapper_MdCardTitle */
/* unused harmony export Wrapper_MdCardSubtitle */
/* unused harmony export Wrapper_MdCardActions */
/* unused harmony export Wrapper_MdCardFooter */
/* unused harmony export MdCardNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdCard0; });
/* unused harmony export MdCardHeaderNgFactory */
/* unused harmony export View_MdCardHeader0 */
/* unused harmony export MdCardTitleGroupNgFactory */
/* unused harmony export View_MdCardTitleGroup0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};










var MdCardModuleInjector = (function (_super) {
    __extends(MdCardModuleInjector, _super);
    function MdCardModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdCardModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_2", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_2 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_2 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_2;
        },
        enumerable: true,
        configurable: true
    });
    MdCardModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdCardModule_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["a" /* MdCardModule */]();
        return this._MdCardModule_1;
    };
    MdCardModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["a" /* MdCardModule */])) {
            return this._MdCardModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_2;
        }
        return notFoundResult;
    };
    MdCardModuleInjector.prototype.destroyInternal = function () {
    };
    return MdCardModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdCardModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdCardModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["a" /* MdCardModule */]);
var Wrapper_MdCard = (function () {
    function Wrapper_MdCard() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["b" /* MdCard */]();
    }
    Wrapper_MdCard.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCard.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCard.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCard.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCard.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCard.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCard;
}());
var Wrapper_MdCardHeader = (function () {
    function Wrapper_MdCardHeader() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["c" /* MdCardHeader */]();
    }
    Wrapper_MdCardHeader.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardHeader.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardHeader.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardHeader.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardHeader.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardHeader.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardHeader;
}());
var Wrapper_MdCardTitleGroup = (function () {
    function Wrapper_MdCardTitleGroup() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["d" /* MdCardTitleGroup */]();
    }
    Wrapper_MdCardTitleGroup.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardTitleGroup.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardTitleGroup.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardTitleGroup.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardTitleGroup.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardTitleGroup.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardTitleGroup;
}());
var Wrapper_MdCardContent = (function () {
    function Wrapper_MdCardContent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["e" /* MdCardContent */]();
    }
    Wrapper_MdCardContent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardContent.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardContent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardContent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardContent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardContent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardContent;
}());
var Wrapper_MdCardTitle = (function () {
    function Wrapper_MdCardTitle() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["f" /* MdCardTitle */]();
    }
    Wrapper_MdCardTitle.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardTitle.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardTitle.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardTitle.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardTitle.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardTitle.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardTitle;
}());
var Wrapper_MdCardSubtitle = (function () {
    function Wrapper_MdCardSubtitle() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["g" /* MdCardSubtitle */]();
    }
    Wrapper_MdCardSubtitle.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardSubtitle.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardSubtitle.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardSubtitle.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardSubtitle.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardSubtitle.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardSubtitle;
}());
var Wrapper_MdCardActions = (function () {
    function Wrapper_MdCardActions() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["h" /* MdCardActions */]();
    }
    Wrapper_MdCardActions.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardActions.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardActions.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardActions.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardActions.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardActions.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardActions;
}());
var Wrapper_MdCardFooter = (function () {
    function Wrapper_MdCardFooter() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["i" /* MdCardFooter */]();
    }
    Wrapper_MdCardFooter.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdCardFooter.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdCardFooter.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdCardFooter.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdCardFooter.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdCardFooter.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdCardFooter;
}());
var renderType_MdCard_Host = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdCard_Host0 = (function (_super) {
    __extends(View_MdCard_Host0, _super);
    function View_MdCard_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCard_Host0, renderType_MdCard_Host, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdCard_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-card', __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_MdCard0(this.viewUtils, this, 0, this._el_0);
        this._MdCard_0_3 = new Wrapper_MdCard();
        this.compView_0.create(this._MdCard_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdCard_0_3.context);
    };
    View_MdCard_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["b" /* MdCard */]) && (0 === requestNodeIndex))) {
            return this._MdCard_0_3.context;
        }
        return notFoundResult;
    };
    View_MdCard_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdCard_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdCard_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdCard_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdCard_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_MdCard_Host0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
var MdCardNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-card, mat-card', View_MdCard_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["b" /* MdCard */]);
var styles_MdCard = [__WEBPACK_IMPORTED_MODULE_9__card_css_ngstyle__["a" /* styles */]];
var renderType_MdCard = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdCard, {});
var View_MdCard0 = (function (_super) {
    __extends(View_MdCard0, _super);
    function View_MdCard0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCard0, renderType_MdCard, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdCard0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this.projectNodes(parentRenderNode, 0);
        this.init(null, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    return View_MdCard0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdCardHeader_Host = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdCardHeader_Host0 = (function (_super) {
    __extends(View_MdCardHeader_Host0, _super);
    function View_MdCardHeader_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCardHeader_Host0, renderType_MdCardHeader_Host, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdCardHeader_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-card-header', __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_MdCardHeader0(this.viewUtils, this, 0, this._el_0);
        this._MdCardHeader_0_3 = new Wrapper_MdCardHeader();
        this.compView_0.create(this._MdCardHeader_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdCardHeader_0_3.context);
    };
    View_MdCardHeader_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["c" /* MdCardHeader */]) && (0 === requestNodeIndex))) {
            return this._MdCardHeader_0_3.context;
        }
        return notFoundResult;
    };
    View_MdCardHeader_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdCardHeader_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdCardHeader_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdCardHeader_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdCardHeader_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) { }
    };
    return View_MdCardHeader_Host0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
var MdCardHeaderNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-card-header, mat-card-header', View_MdCardHeader_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["c" /* MdCardHeader */]);
var styles_MdCardHeader = [];
var renderType_MdCardHeader = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 3, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdCardHeader, {});
var View_MdCardHeader0 = (function (_super) {
    __extends(View_MdCardHeader0, _super);
    function View_MdCardHeader0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCardHeader0, renderType_MdCardHeader, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdCardHeader0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this.projectNodes(parentRenderNode, 0);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-card-header-text'), null);
        this.projectNodes(this._el_0, 1);
        this.projectNodes(parentRenderNode, 2);
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    return View_MdCardHeader0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdCardTitleGroup_Host = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdCardTitleGroup_Host0 = (function (_super) {
    __extends(View_MdCardTitleGroup_Host0, _super);
    function View_MdCardTitleGroup_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCardTitleGroup_Host0, renderType_MdCardTitleGroup_Host, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdCardTitleGroup_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-card-title-group', __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_MdCardTitleGroup0(this.viewUtils, this, 0, this._el_0);
        this._MdCardTitleGroup_0_3 = new Wrapper_MdCardTitleGroup();
        this.compView_0.create(this._MdCardTitleGroup_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdCardTitleGroup_0_3.context);
    };
    View_MdCardTitleGroup_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["d" /* MdCardTitleGroup */]) && (0 === requestNodeIndex))) {
            return this._MdCardTitleGroup_0_3.context;
        }
        return notFoundResult;
    };
    View_MdCardTitleGroup_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdCardTitleGroup_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdCardTitleGroup_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdCardTitleGroup_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdCardTitleGroup_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) { }
    };
    return View_MdCardTitleGroup_Host0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
var MdCardTitleGroupNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-card-title-group, mat-card-title-group', View_MdCardTitleGroup_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card_card__["d" /* MdCardTitleGroup */]);
var styles_MdCardTitleGroup = [];
var renderType_MdCardTitleGroup = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 3, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdCardTitleGroup, {});
var View_MdCardTitleGroup0 = (function (_super) {
    __extends(View_MdCardTitleGroup0, _super);
    function View_MdCardTitleGroup0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdCardTitleGroup0, renderType_MdCardTitleGroup, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdCardTitleGroup0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.projectNodes(this._el_0, 0);
        this.projectNodes(parentRenderNode, 1);
        this.projectNodes(parentRenderNode, 2);
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    return View_MdCardTitleGroup0;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/card.ngfactory.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_core_a11y_focus_trap__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_core_a11y_interactivity_checker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_src_directives_ng_if_ngfactory__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_FocusTrap; });
/* unused harmony export FocusTrapNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_FocusTrap0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
















var Wrapper_FocusTrap = (function () {
    function Wrapper_FocusTrap(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_material_core_a11y_focus_trap__["a" /* FocusTrap */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_FocusTrap.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FocusTrap.prototype.ngOnDestroy = function () {
    };
    Wrapper_FocusTrap.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_FocusTrap.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_FocusTrap.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FocusTrap.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FocusTrap.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FocusTrap;
}());
var renderType_FocusTrap_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_FocusTrap_Host0 = (function (_super) {
    __extends(View_FocusTrap_Host0, _super);
    function View_FocusTrap_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FocusTrap_Host0, renderType_FocusTrap_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_FocusTrap_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'cdk-focus-trap', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_FocusTrap0(this.viewUtils, this, 0, this._el_0);
        this._FocusTrap_0_3 = new Wrapper_FocusTrap(this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_material_core_a11y_interactivity_checker__["a" /* InteractivityChecker */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this.compView_0.create(this._FocusTrap_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._FocusTrap_0_3.context);
    };
    View_FocusTrap_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__angular_material_core_a11y_focus_trap__["a" /* FocusTrap */]) && (0 === requestNodeIndex))) {
            return this._FocusTrap_0_3.context;
        }
        return notFoundResult;
    };
    View_FocusTrap_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FocusTrap_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FocusTrap_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FocusTrap_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FocusTrap_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_FocusTrap_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var FocusTrapNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('cdk-focus-trap, focus-trap', View_FocusTrap_Host0, __WEBPACK_IMPORTED_MODULE_0__angular_material_core_a11y_focus_trap__["a" /* FocusTrap */]);
var styles_FocusTrap = [];
var View_FocusTrap1 = (function (_super) {
    __extends(View_FocusTrap1, _super);
    function View_FocusTrap1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_FocusTrap1, renderType_FocusTrap, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_FocusTrap1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'tabindex', '0'), null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'focus', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_FocusTrap1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FocusTrap1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'focus')) {
            var pd_sub_0 = (this.parentView.context.focusLastTabbableElement() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_FocusTrap1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_FocusTrap2 = (function (_super) {
    __extends(View_FocusTrap2, _super);
    function View_FocusTrap2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_FocusTrap2, renderType_FocusTrap, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_FocusTrap2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'tabindex', '0'), null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'focus', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_FocusTrap2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FocusTrap2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'focus')) {
            var pd_sub_0 = (this.parentView.context.focusFirstTabbableElement() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_FocusTrap2;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_FocusTrap = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_FocusTrap, {});
var View_FocusTrap0 = (function (_super) {
    __extends(View_FocusTrap0, _super);
    function View_FocusTrap0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FocusTrap0, renderType_FocusTrap, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_FocusTrap0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_trappedContent_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 0, this._anchor_0);
        this._NgIf_0_6 = new __WEBPACK_IMPORTED_MODULE_12__common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_0.vcRef, this._TemplateRef_0_5);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'cdk-focus-trap-content'), null);
        this.projectNodes(this._el_1, 0);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_12__common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._viewQuery_trappedContent_0.reset([new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_1)]);
        this.context.trappedContent = this._viewQuery_trappedContent_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._el_1,
            this._anchor_2
        ]), null);
        return null;
    };
    View_FocusTrap0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_FocusTrap0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = !this.context.disabled;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_2_0_0 = !this.context.disabled;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_FocusTrap0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
    };
    View_FocusTrap0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_FocusTrap1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 2)) {
            return new View_FocusTrap2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_FocusTrap0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/focus-trap.ngfactory.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* unused harmony export PortalModuleNgFactory */
/* unused harmony export Wrapper_TemplatePortalDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_PortalHostDirective; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var PortalModuleInjector = (function (_super) {
    __extends(PortalModuleInjector, _super);
    function PortalModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    PortalModuleInjector.prototype.createInternal = function () {
        this._PortalModule_0 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__["a" /* PortalModule */]();
        return this._PortalModule_0;
    };
    PortalModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__["a" /* PortalModule */])) {
            return this._PortalModule_0;
        }
        return notFoundResult;
    };
    PortalModuleInjector.prototype.destroyInternal = function () {
    };
    return PortalModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var PortalModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](PortalModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__["a" /* PortalModule */]);
var Wrapper_TemplatePortalDirective = (function () {
    function Wrapper_TemplatePortalDirective(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__["b" /* TemplatePortalDirective */](p0, p1);
    }
    Wrapper_TemplatePortalDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TemplatePortalDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_TemplatePortalDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_TemplatePortalDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TemplatePortalDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TemplatePortalDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TemplatePortalDirective;
}());
var Wrapper_PortalHostDirective = (function () {
    function Wrapper_PortalHostDirective(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_portal_portal_directives__["c" /* PortalHostDirective */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_PortalHostDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PortalHostDirective.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_PortalHostDirective.prototype.check_portal = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.portal = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PortalHostDirective.prototype.check__deprecatedPortal = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context._deprecatedPortal = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_PortalHostDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PortalHostDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PortalHostDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PortalHostDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PortalHostDirective;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/portal-directives.ngfactory.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'wt works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'wt-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/exercise.model.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 446;


/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(67);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/main.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component_css_shim_ngstyle__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav_sidenav__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_sidenav_sidenav_ngfactory__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_nav_bar_nav_bar_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_bar_nav_bar_component_ngfactory__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar_toolbar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_toolbar_toolbar_ngfactory__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_button_button__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_material_button_button_ngfactory__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_icon_icon__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_material_icon_icon_ngfactory__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_core_rtl_dir__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router_src_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_router_src_router_outlet_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_icon_icon_registry__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_router_src_directives_router_outlet__ = __webpack_require__(179);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





























var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_7__app_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'md-sidenav-layout', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'md-sidenav-container', 'fullscreen', ''), null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_sidenav_sidenav_ngfactory__["a" /* View_MdSidenavContainer0 */](this.viewUtils, this, 0, this._el_0);
        this._MdSidenavContainer_0_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_sidenav_sidenav_ngfactory__["b" /* Wrapper_MdSidenavContainer */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_material_core_rtl_dir__["b" /* Dir */], this.parentIndex, null), new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this._query_MdSidenav_0_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_1 = this.renderer.createText(null, '\n\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-sidenav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'app-sidenav', 'tabIndex', '-1'), null);
        this.compView_2 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_sidenav_sidenav_ngfactory__["c" /* View_MdSidenav0 */](this.viewUtils, this, 2, this._el_2);
        this._MdSidenav_2_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_sidenav_sidenav_ngfactory__["d" /* Wrapper_MdSidenav */](new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'wt-nav-bar', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_4 = new __WEBPACK_IMPORTED_MODULE_12__nav_bar_nav_bar_component_ngfactory__["a" /* View_NavBarComponent0 */](this.viewUtils, this, 4, this._el_4);
        this._NavBarComponent_4_3 = new __WEBPACK_IMPORTED_MODULE_12__nav_bar_nav_bar_component_ngfactory__["b" /* Wrapper_NavBarComponent */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_23__app_sevices_workout_service__["a" /* WorkoutService */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_24__angular_router_src_router__["a" /* Router */], this.parentIndex));
        this.compView_4.create(this._NavBarComponent_4_3.context);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this.compView_2.create(this._MdSidenav_2_3.context);
        this._text_6 = this.renderer.createText(null, '\n\n  ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-toolbar', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'color', 'primary'), null);
        this.compView_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_toolbar_toolbar_ngfactory__["a" /* View_MdToolbar0 */](this.viewUtils, this, 7, this._el_7);
        this._MdToolbar_7_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_toolbar_toolbar_ngfactory__["b" /* Wrapper_MdToolbar */](new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-icon-button'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'i', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'material-icons app-toolbar-menu'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'menu', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_14 = this.renderer.createText(null, '\n\n\n  Workout timer\n  ', null);
        this.compView_7.create(this._MdToolbar_7_3.context);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-content'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'router-outlet', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._vc_18 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__["a" /* ViewContainer */](18, 16, this, this._el_18);
        this._RouterOutlet_18_5 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__["a" /* Wrapper_RouterOutlet */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_25__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */], this.parentIndex), this._vc_18.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), null);
        this._text_19 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_20 = this.renderer.createText(null, '\n\n', null);
        this.compView_0.create(this._MdSidenavContainer_0_3.context);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-action'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n  ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_22, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-fab', ''), null);
        this.compView_24 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_material_button_button_ngfactory__["a" /* View_MdButton0 */](this.viewUtils, this, 24, this._el_24);
        this._MdButton_24_3 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_material_button_button_ngfactory__["b" /* Wrapper_MdButton */](new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_24), this.renderer);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-icon', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'img'), null);
        this.compView_25 = new __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_material_icon_icon_ngfactory__["a" /* View_MdIcon0 */](this.viewUtils, this, 25, this._el_25);
        this._MdIcon_25_3 = new __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_material_icon_icon_ngfactory__["b" /* Wrapper_MdIcon */](new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_25), this.renderer, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_27__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this._text_26 = this.renderer.createText(null, 'add circle', null);
        this.compView_25.create(this._MdIcon_25_3.context);
        this.compView_24.create(this._MdButton_24_3.context);
        this._text_27 = this.renderer.createText(this._el_22, '\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'transitionend', null, 'keydown', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_4, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'clicked', null), this.eventHandler(this.handleEvent_4));
        this._NavBarComponent_4_3.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_9, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_9));
        var disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_24, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'mousedown', null, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_24));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_11__app_nav_bar_nav_bar_component__["a" /* NavBarComponent */]) && (4 === requestNodeIndex))) {
            return this._NavBarComponent_4_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav_sidenav__["b" /* MdSidenav */]) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._MdSidenav_2_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar_toolbar__["b" /* MdToolbar */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._MdToolbar_7_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */]) && (18 === requestNodeIndex))) {
            return this._RouterOutlet_18_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav_sidenav__["c" /* MdSidenavContainer */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._MdSidenavContainer_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_material_icon_icon__["b" /* MdIcon */]) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._MdIcon_25_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_material_button_button__["b" /* MdButton */]) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._MdButton_24_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdSidenavContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (this._MdSidenav_2_3.ngDoCheck(this, this._el_2, throwOnChange)) {
            this.compView_2.markAsCheckOnce();
        }
        this._NavBarComponent_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_7_0_0 = 'primary';
        this._MdToolbar_7_3.check_color(currVal_7_0_0, throwOnChange, false);
        if (this._MdToolbar_7_3.ngDoCheck(this, this._el_7, throwOnChange)) {
            this.compView_7.markAsCheckOnce();
        }
        this._RouterOutlet_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        if (this._MdButton_24_3.ngDoCheck(this, this._el_24, throwOnChange)) {
            this.compView_24.markAsCheckOnce();
        }
        if (this._MdIcon_25_3.ngDoCheck(this, this._el_25, throwOnChange)) {
            this.compView_25.markAsCheckOnce();
        }
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_MdSidenav_0_0.dirty) {
                this._query_MdSidenav_0_0.reset([this._MdSidenav_2_3.context]);
                this._MdSidenavContainer_0_3.context._sidenavs = this._query_MdSidenav_0_0;
                this._query_MdSidenav_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdSidenav_2_3.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdSidenavContainer_0_3.context.ngAfterContentInit();
            }
        }
        this._MdSidenav_2_3.checkHost(this, this.compView_2, this._el_2, throwOnChange);
        this._MdButton_24_3.checkHost(this, this.compView_24, this._el_24, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_4.internalDetectChanges(throwOnChange);
        this.compView_7.internalDetectChanges(throwOnChange);
        this.compView_24.internalDetectChanges(throwOnChange);
        this.compView_25.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            this._MdIcon_25_3.context.ngAfterViewChecked();
        }
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_18.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_2.destroy();
        this.compView_4.destroy();
        this.compView_7.destroy();
        this.compView_24.destroy();
        this.compView_25.destroy();
        this._NavBarComponent_4_3.ngOnDestroy();
        this._MdSidenav_2_3.ngOnDestroy();
        this._RouterOutlet_18_5.ngOnDestroy();
        this._MdSidenavContainer_0_3.ngOnDestroy();
    };
    View_AppComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._el_2, ctx);
        }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) {
            cb(this._text_1, ctx);
            cb(this._text_6, ctx);
            cb(this._el_7, ctx);
            cb(this._text_15, ctx);
            cb(this._el_16, ctx);
            cb(this._text_20, ctx);
        }
        if (((nodeIndex == 2) && (ngContentIndex == 0))) {
            cb(this._text_3, ctx);
            cb(this._el_4, ctx);
            cb(this._text_5, ctx);
        }
        if (((nodeIndex == 7) && (ngContentIndex == 0))) {
            cb(this._text_8, ctx);
            cb(this._el_9, ctx);
            cb(this._text_14, ctx);
        }
        if (((nodeIndex == 7) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 24) && (ngContentIndex == 0))) {
            cb(this._el_25, ctx);
        }
        if (((nodeIndex == 25) && (ngContentIndex == 0))) {
            cb(this._text_26, ctx);
        }
    };
    View_AppComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.compView_2.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdSidenav_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'clicked')) {
            var pd_sub_0 = (this._MdSidenav_2_3.context.close() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AppComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._MdSidenav_2_3.context.toggle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AppComponent0.prototype.handleEvent_24 = function (eventName, $event) {
        this.compView_24.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdButton_24_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.component.ngfactory.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_core_ripple_ripple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button_button__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_card_card__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_chips_chip_list__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox_checkbox__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_core_line_line__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_grid_list_grid_list__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_core_platform_index__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_input_input__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_list_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_bar_progress_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner_progress_spinner__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_core_overlay_overlay_directives__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_select_index__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_core_a11y_index__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav_sidenav__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_core_observe_content_observe_content__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_tabs_tab_group__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_toolbar_toolbar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_core_projection_projection__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_core_rtl_dir__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_button_toggle_button_toggle__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_dialog_index__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_icon_icon__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_menu_menu__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_radio_radio__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_slider_slider__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_material_slide_toggle_slide_toggle__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_material_snack_bar_snack_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_material_tooltip_tooltip__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_material_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_common_src_localization__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_core_src_application_init__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_core_src_testability_testability__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_core_src_application_ref__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_core_src_linker_compiler__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_material_core_gestures_gesture_config__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_core_src_animation_animation_queue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_platform_browser_src_browser_title__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_http_src_backends_browser_xhr__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_http_src_base_response_options__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_http_src_backends_xhr_backend__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_http_src_base_request_options__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_material_core_overlay_position_viewport_ruler__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_material_core_platform_platform__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_material_core_overlay_position_overlay_position_builder__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_material_core_overlay_overlay_container__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__angular_material_core_overlay_overlay__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__angular_material_core_overlay_scroll_scroll_dispatcher__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__angular_material_core_a11y_interactivity_checker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__angular_material_core_a11y_live_announcer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__angular_material_core_coordination_unique_selection_dispatcher__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__angular_material_dialog_dialog__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__angular_material_icon_icon_registry__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__angular_router_src_url_tree__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__angular_router_src_router_outlet_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__angular_core_src_linker_system_js_ng_module_factory_loader__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__app_sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__gendir_node_modules_angular_material_dialog_dialog_container_ngfactory__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__gendir_node_modules_angular_material_snack_bar_snack_bar_container_ngfactory__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__gendir_node_modules_angular_material_snack_bar_simple_snack_bar_ngfactory__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__gendir_node_modules_angular_material_tooltip_tooltip_ngfactory__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__home_home_component_ngfactory__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__workout_workout_component_ngfactory__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__run_workout_run_workout_component_ngfactory__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__app_component_ngfactory__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__angular_core_src_i18n_tokens__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__angular_core_src_application_tokens__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__angular_common_src_location_platform_location__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__angular_common_src_location_location_strategy__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__app_home_home_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__app_workout_workout_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__app_run_workout_run_workout_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__angular_router_src_url_handling_strategy__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__angular_router_src_route_reuse_strategy__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__angular_router_src_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__angular_core_src_console__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__angular_core_src_error_handler__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__angular_core_src_render_api__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__angular_core_src_security__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__angular_http_src_interfaces__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__angular_http_src_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__angular_core_src_linker_ng_module_factory_loader__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__angular_router_src_router_config_loader__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__angular_router_src_router_state__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

















































































































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_77__gendir_node_modules_angular_material_dialog_dialog_container_ngfactory__["a" /* MdDialogContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_78__gendir_node_modules_angular_material_snack_bar_snack_bar_container_ngfactory__["a" /* MdSnackBarContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_79__gendir_node_modules_angular_material_snack_bar_simple_snack_bar_ngfactory__["a" /* SimpleSnackBarNgFactory */],
            __WEBPACK_IMPORTED_MODULE_80__gendir_node_modules_angular_material_tooltip_tooltip_ngfactory__["a" /* TooltipComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_81__home_home_component_ngfactory__["a" /* HomeComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_82__workout_workout_component_ngfactory__["a" /* WorkoutComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_83__run_workout_run_workout_component_ngfactory__["a" /* RunWorkoutComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_84__app_component_ngfactory__["a" /* AppComponentNgFactory */]
        ], [__WEBPACK_IMPORTED_MODULE_84__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_42", {
        get: function () {
            if ((this.__LOCALE_ID_42 == null)) {
                (this.__LOCALE_ID_42 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* _localeFactory */](this.parent.get(__WEBPACK_IMPORTED_MODULE_85__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_43", {
        get: function () {
            if ((this.__NgLocalization_43 == null)) {
                (this.__NgLocalization_43 = new __WEBPACK_IMPORTED_MODULE_42__angular_common_src_localization__["a" /* NgLocaleLocalization */](this._LOCALE_ID_42));
            }
            return this.__NgLocalization_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_48", {
        get: function () {
            if ((this.__ApplicationRef_48 == null)) {
                (this.__ApplicationRef_48 = this._ApplicationRef__47);
            }
            return this.__ApplicationRef_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_49", {
        get: function () {
            if ((this.__Compiler_49 == null)) {
                (this.__Compiler_49 = new __WEBPACK_IMPORTED_MODULE_46__angular_core_src_linker_compiler__["a" /* Compiler */]());
            }
            return this.__Compiler_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_50", {
        get: function () {
            if ((this.__APP_ID_50 == null)) {
                (this.__APP_ID_50 = __WEBPACK_IMPORTED_MODULE_86__angular_core_src_application_tokens__["a" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_51", {
        get: function () {
            if ((this.__DOCUMENT_51 == null)) {
                (this.__DOCUMENT_51 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["a" /* _document */]());
            }
            return this.__DOCUMENT_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_52", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_52 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_52 = new __WEBPACK_IMPORTED_MODULE_47__angular_material_core_gestures_gesture_config__["a" /* GestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_53", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_53 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_53 = [
                    new __WEBPACK_IMPORTED_MODULE_87__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_88__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_89__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_52)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_54", {
        get: function () {
            if ((this.__EventManager_54 == null)) {
                (this.__EventManager_54 = new __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_53, this.parent.get(__WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_55", {
        get: function () {
            if ((this.__DomSharedStylesHost_55 == null)) {
                (this.__DomSharedStylesHost_55 = new __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_51));
            }
            return this.__DomSharedStylesHost_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_56", {
        get: function () {
            if ((this.__AnimationDriver_56 == null)) {
                (this.__AnimationDriver_56 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["b" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_57", {
        get: function () {
            if ((this.__DomRootRenderer_57 == null)) {
                (this.__DomRootRenderer_57 = new __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer_ */](this._DOCUMENT_51, this._EventManager_54, this._DomSharedStylesHost_55, this._AnimationDriver_56, this._APP_ID_50));
            }
            return this.__DomRootRenderer_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_58", {
        get: function () {
            if ((this.__NgProbeToken_58 == null)) {
                (this.__NgProbeToken_58 = [__WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["a" /* routerNgProbeToken */]()]);
            }
            return this.__NgProbeToken_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_59", {
        get: function () {
            if ((this.__RootRenderer_59 == null)) {
                (this.__RootRenderer_59 = __WEBPACK_IMPORTED_MODULE_91__angular_platform_browser_src_dom_debug_ng_probe__["a" /* _createConditionalRootRenderer */](this._DomRootRenderer_57, this.parent.get(__WEBPACK_IMPORTED_MODULE_91__angular_platform_browser_src_dom_debug_ng_probe__["b" /* NgProbeToken */], null), this._NgProbeToken_58));
            }
            return this.__RootRenderer_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_60", {
        get: function () {
            if ((this.__DomSanitizer_60 == null)) {
                (this.__DomSanitizer_60 = new __WEBPACK_IMPORTED_MODULE_51__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_61", {
        get: function () {
            if ((this.__Sanitizer_61 == null)) {
                (this.__Sanitizer_61 = this._DomSanitizer_60);
            }
            return this.__Sanitizer_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_62", {
        get: function () {
            if ((this.__AnimationQueue_62 == null)) {
                (this.__AnimationQueue_62 = new __WEBPACK_IMPORTED_MODULE_52__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_63", {
        get: function () {
            if ((this.__ViewUtils_63 == null)) {
                (this.__ViewUtils_63 = new __WEBPACK_IMPORTED_MODULE_53__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_59, this._Sanitizer_61, this._AnimationQueue_62));
            }
            return this.__ViewUtils_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_64", {
        get: function () {
            if ((this.__IterableDiffers_64 == null)) {
                (this.__IterableDiffers_64 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_65", {
        get: function () {
            if ((this.__KeyValueDiffers_65 == null)) {
                (this.__KeyValueDiffers_65 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_66", {
        get: function () {
            if ((this.__SharedStylesHost_66 == null)) {
                (this.__SharedStylesHost_66 = this._DomSharedStylesHost_55);
            }
            return this.__SharedStylesHost_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_67", {
        get: function () {
            if ((this.__Title_67 == null)) {
                (this.__Title_67 = new __WEBPACK_IMPORTED_MODULE_54__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_68", {
        get: function () {
            if ((this.__RadioControlRegistry_68 == null)) {
                (this.__RadioControlRegistry_68 = new __WEBPACK_IMPORTED_MODULE_55__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_69", {
        get: function () {
            if ((this.__BrowserXhr_69 == null)) {
                (this.__BrowserXhr_69 = new __WEBPACK_IMPORTED_MODULE_56__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_70", {
        get: function () {
            if ((this.__ResponseOptions_70 == null)) {
                (this.__ResponseOptions_70 = new __WEBPACK_IMPORTED_MODULE_57__angular_http_src_base_response_options__["a" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_71", {
        get: function () {
            if ((this.__XSRFStrategy_71 == null)) {
                (this.__XSRFStrategy_71 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_71;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_72", {
        get: function () {
            if ((this.__XHRBackend_72 == null)) {
                (this.__XHRBackend_72 = new __WEBPACK_IMPORTED_MODULE_58__angular_http_src_backends_xhr_backend__["a" /* XHRBackend */](this._BrowserXhr_69, this._ResponseOptions_70, this._XSRFStrategy_71));
            }
            return this.__XHRBackend_72;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_73", {
        get: function () {
            if ((this.__RequestOptions_73 == null)) {
                (this.__RequestOptions_73 = new __WEBPACK_IMPORTED_MODULE_59__angular_http_src_base_request_options__["a" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_73;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_74", {
        get: function () {
            if ((this.__Http_74 == null)) {
                (this.__Http_74 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* httpFactory */](this._XHRBackend_72, this._RequestOptions_73));
            }
            return this.__Http_74;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_75", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_75 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_75 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_75;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewportRuler_76", {
        get: function () {
            if ((this.__ViewportRuler_76 == null)) {
                (this.__ViewportRuler_76 = new __WEBPACK_IMPORTED_MODULE_60__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */]());
            }
            return this.__ViewportRuler_76;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Platform_77", {
        get: function () {
            if ((this.__Platform_77 == null)) {
                (this.__Platform_77 = new __WEBPACK_IMPORTED_MODULE_61__angular_material_core_platform_platform__["a" /* Platform */]());
            }
            return this.__Platform_77;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OverlayPositionBuilder_78", {
        get: function () {
            if ((this.__OverlayPositionBuilder_78 == null)) {
                (this.__OverlayPositionBuilder_78 = new __WEBPACK_IMPORTED_MODULE_62__angular_material_core_overlay_position_overlay_position_builder__["a" /* OverlayPositionBuilder */](this._ViewportRuler_76));
            }
            return this.__OverlayPositionBuilder_78;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OverlayContainer_79", {
        get: function () {
            if ((this.__OverlayContainer_79 == null)) {
                (this.__OverlayContainer_79 = new __WEBPACK_IMPORTED_MODULE_63__angular_material_core_overlay_overlay_container__["a" /* OverlayContainer */]());
            }
            return this.__OverlayContainer_79;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Overlay_80", {
        get: function () {
            if ((this.__Overlay_80 == null)) {
                (this.__Overlay_80 = new __WEBPACK_IMPORTED_MODULE_64__angular_material_core_overlay_overlay__["a" /* Overlay */](this._OverlayContainer_79, this, this._OverlayPositionBuilder_78, this._ApplicationRef_48, this, this.parent.get(__WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__Overlay_80;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ScrollDispatcher_81", {
        get: function () {
            if ((this.__ScrollDispatcher_81 == null)) {
                (this.__ScrollDispatcher_81 = new __WEBPACK_IMPORTED_MODULE_65__angular_material_core_overlay_scroll_scroll_dispatcher__["a" /* ScrollDispatcher */]());
            }
            return this.__ScrollDispatcher_81;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InteractivityChecker_82", {
        get: function () {
            if ((this.__InteractivityChecker_82 == null)) {
                (this.__InteractivityChecker_82 = new __WEBPACK_IMPORTED_MODULE_66__angular_material_core_a11y_interactivity_checker__["a" /* InteractivityChecker */](this._Platform_77));
            }
            return this.__InteractivityChecker_82;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomProjection_83", {
        get: function () {
            if ((this.__DomProjection_83 == null)) {
                (this.__DomProjection_83 = new __WEBPACK_IMPORTED_MODULE_29__angular_material_core_projection_projection__["a" /* DomProjection */]());
            }
            return this.__DomProjection_83;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LiveAnnouncer_84", {
        get: function () {
            if ((this.__LiveAnnouncer_84 == null)) {
                (this.__LiveAnnouncer_84 = new __WEBPACK_IMPORTED_MODULE_67__angular_material_core_a11y_live_announcer__["a" /* LiveAnnouncer */](this.parent.get(__WEBPACK_IMPORTED_MODULE_67__angular_material_core_a11y_live_announcer__["b" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */], null)));
            }
            return this.__LiveAnnouncer_84;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UniqueSelectionDispatcher_85", {
        get: function () {
            if ((this.__UniqueSelectionDispatcher_85 == null)) {
                (this.__UniqueSelectionDispatcher_85 = new __WEBPACK_IMPORTED_MODULE_68__angular_material_core_coordination_unique_selection_dispatcher__["a" /* UniqueSelectionDispatcher */]());
            }
            return this.__UniqueSelectionDispatcher_85;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdDialog_86", {
        get: function () {
            if ((this.__MdDialog_86 == null)) {
                (this.__MdDialog_86 = new __WEBPACK_IMPORTED_MODULE_69__angular_material_dialog_dialog__["a" /* MdDialog */](this._Overlay_80, this));
            }
            return this.__MdDialog_86;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdIconRegistry_87", {
        get: function () {
            if ((this.__MdIconRegistry_87 == null)) {
                (this.__MdIconRegistry_87 = new __WEBPACK_IMPORTED_MODULE_70__angular_material_icon_icon_registry__["a" /* MdIconRegistry */](this._Http_74, this._DomSanitizer_60));
            }
            return this.__MdIconRegistry_87;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdSnackBar_88", {
        get: function () {
            if ((this.__MdSnackBar_88 == null)) {
                (this.__MdSnackBar_88 = new __WEBPACK_IMPORTED_MODULE_38__angular_material_snack_bar_snack_bar__["a" /* MdSnackBar */](this._Overlay_80, this._LiveAnnouncer_84));
            }
            return this.__MdSnackBar_88;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_89", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_89 == null)) {
                (this.__ROUTER_CONFIGURATION_89 = {});
            }
            return this.__ROUTER_CONFIGURATION_89;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_90", {
        get: function () {
            if ((this.__LocationStrategy_90 == null)) {
                (this.__LocationStrategy_90 = __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["b" /* provideLocationStrategy */](this.parent.get(__WEBPACK_IMPORTED_MODULE_92__angular_common_src_location_platform_location__["a" /* PlatformLocation */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_93__angular_common_src_location_location_strategy__["a" /* APP_BASE_HREF */], null), this._ROUTER_CONFIGURATION_89));
            }
            return this.__LocationStrategy_90;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_91", {
        get: function () {
            if ((this.__Location_91 == null)) {
                (this.__Location_91 = new __WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location__["a" /* Location */](this._LocationStrategy_90));
            }
            return this.__Location_91;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_92", {
        get: function () {
            if ((this.__UrlSerializer_92 == null)) {
                (this.__UrlSerializer_92 = new __WEBPACK_IMPORTED_MODULE_72__angular_router_src_url_tree__["a" /* DefaultUrlSerializer */]());
            }
            return this.__UrlSerializer_92;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_93", {
        get: function () {
            if ((this.__RouterOutletMap_93 == null)) {
                (this.__RouterOutletMap_93 = new __WEBPACK_IMPORTED_MODULE_73__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */]());
            }
            return this.__RouterOutletMap_93;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_94", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_94 == null)) {
                (this.__NgModuleFactoryLoader_94 = new __WEBPACK_IMPORTED_MODULE_74__angular_core_src_linker_system_js_ng_module_factory_loader__["a" /* SystemJsNgModuleLoader */](this._Compiler_49, this.parent.get(__WEBPACK_IMPORTED_MODULE_74__angular_core_src_linker_system_js_ng_module_factory_loader__["b" /* SystemJsNgModuleLoaderConfig */], null)));
            }
            return this.__NgModuleFactoryLoader_94;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_95", {
        get: function () {
            if ((this.__ROUTES_95 == null)) {
                (this.__ROUTES_95 = [[
                        {
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_94__app_home_home_component__["a" /* HomeComponent */]
                        },
                        {
                            path: 'workout',
                            children: [
                                {
                                    path: ':workoutId',
                                    component: __WEBPACK_IMPORTED_MODULE_95__app_workout_workout_component__["a" /* WorkoutComponent */]
                                },
                                {
                                    path: ':workoutId/run',
                                    component: __WEBPACK_IMPORTED_MODULE_96__app_run_workout_run_workout_component__["a" /* RunWorkoutComponent */]
                                }
                            ]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_95;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_96", {
        get: function () {
            if ((this.__Router_96 == null)) {
                (this.__Router_96 = __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["c" /* setupRouter */](this._ApplicationRef_48, this._UrlSerializer_92, this._RouterOutletMap_93, this._Location_91, this, this._NgModuleFactoryLoader_94, this._Compiler_49, this._ROUTES_95, this._ROUTER_CONFIGURATION_89, this.parent.get(__WEBPACK_IMPORTED_MODULE_97__angular_router_src_url_handling_strategy__["a" /* UrlHandlingStrategy */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_98__angular_router_src_route_reuse_strategy__["a" /* RouteReuseStrategy */], null)));
            }
            return this.__Router_96;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_97", {
        get: function () {
            if ((this.__ActivatedRoute_97 == null)) {
                (this.__ActivatedRoute_97 = __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["d" /* rootRoute */](this._Router_96));
            }
            return this.__ActivatedRoute_97;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_101", {
        get: function () {
            if ((this.__PreloadAllModules_101 == null)) {
                (this.__PreloadAllModules_101 = new __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["a" /* PreloadAllModules */]());
            }
            return this.__PreloadAllModules_101;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_102", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_102 == null)) {
                (this.__ROUTER_INITIALIZER_102 = __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["e" /* initialRouterNavigation */](this._Router_96, this._ApplicationRef_48, this._RouterPreloader_100, this._ROUTER_CONFIGURATION_89));
            }
            return this.__ROUTER_INITIALIZER_102;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_103", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_103 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_103 = [this._ROUTER_INITIALIZER_102]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_103;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_WorkoutService_104", {
        get: function () {
            if ((this.__WorkoutService_104 == null)) {
                (this.__WorkoutService_104 = new __WEBPACK_IMPORTED_MODULE_76__app_sevices_workout_service__["a" /* WorkoutService */]());
            }
            return this.__WorkoutService_104;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["a" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* HttpModule */]();
        this._DefaultStyleCompatibilityModeModule_6 = new __WEBPACK_IMPORTED_MODULE_8__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdRippleModule_7 = new __WEBPACK_IMPORTED_MODULE_9__angular_material_core_ripple_ripple__["a" /* MdRippleModule */]();
        this._MdButtonModule_8 = new __WEBPACK_IMPORTED_MODULE_10__angular_material_button_button__["a" /* MdButtonModule */]();
        this._MdCardModule_9 = new __WEBPACK_IMPORTED_MODULE_11__angular_material_card_card__["a" /* MdCardModule */]();
        this._MdChipsModule_10 = new __WEBPACK_IMPORTED_MODULE_12__angular_material_chips_chip_list__["a" /* MdChipsModule */]();
        this._MdCheckboxModule_11 = new __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox_checkbox__["a" /* MdCheckboxModule */]();
        this._MdLineModule_12 = new __WEBPACK_IMPORTED_MODULE_14__angular_material_core_line_line__["a" /* MdLineModule */]();
        this._MdGridListModule_13 = new __WEBPACK_IMPORTED_MODULE_15__angular_material_grid_list_grid_list__["a" /* MdGridListModule */]();
        this._PlatformModule_14 = new __WEBPACK_IMPORTED_MODULE_16__angular_material_core_platform_index__["a" /* PlatformModule */]();
        this._MdInputModule_15 = new __WEBPACK_IMPORTED_MODULE_17__angular_material_input_input__["a" /* MdInputModule */]();
        this._MdListModule_16 = new __WEBPACK_IMPORTED_MODULE_18__angular_material_list_list__["a" /* MdListModule */]();
        this._MdProgressBarModule_17 = new __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_bar_progress_bar__["a" /* MdProgressBarModule */]();
        this._MdProgressSpinnerModule_18 = new __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner_progress_spinner__["a" /* MdProgressSpinnerModule */]();
        this._PortalModule_19 = new __WEBPACK_IMPORTED_MODULE_21__angular_material_core_portal_portal_directives__["a" /* PortalModule */]();
        this._OverlayModule_20 = new __WEBPACK_IMPORTED_MODULE_22__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */]();
        this._MdSelectModule_21 = new __WEBPACK_IMPORTED_MODULE_23__angular_material_select_index__["a" /* MdSelectModule */]();
        this._A11yModule_22 = new __WEBPACK_IMPORTED_MODULE_24__angular_material_core_a11y_index__["a" /* A11yModule */]();
        this._MdSidenavModule_23 = new __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav_sidenav__["a" /* MdSidenavModule */]();
        this._ObserveContentModule_24 = new __WEBPACK_IMPORTED_MODULE_26__angular_material_core_observe_content_observe_content__["a" /* ObserveContentModule */]();
        this._MdTabsModule_25 = new __WEBPACK_IMPORTED_MODULE_27__angular_material_tabs_tab_group__["a" /* MdTabsModule */]();
        this._MdToolbarModule_26 = new __WEBPACK_IMPORTED_MODULE_28__angular_material_toolbar_toolbar__["a" /* MdToolbarModule */]();
        this._ProjectionModule_27 = new __WEBPACK_IMPORTED_MODULE_29__angular_material_core_projection_projection__["b" /* ProjectionModule */]();
        this._RtlModule_28 = new __WEBPACK_IMPORTED_MODULE_30__angular_material_core_rtl_dir__["a" /* RtlModule */]();
        this._MdButtonToggleModule_29 = new __WEBPACK_IMPORTED_MODULE_31__angular_material_button_toggle_button_toggle__["a" /* MdButtonToggleModule */]();
        this._MdDialogModule_30 = new __WEBPACK_IMPORTED_MODULE_32__angular_material_dialog_index__["a" /* MdDialogModule */]();
        this._MdIconModule_31 = new __WEBPACK_IMPORTED_MODULE_33__angular_material_icon_icon__["a" /* MdIconModule */]();
        this._MdMenuModule_32 = new __WEBPACK_IMPORTED_MODULE_34__angular_material_menu_menu__["a" /* MdMenuModule */]();
        this._MdRadioModule_33 = new __WEBPACK_IMPORTED_MODULE_35__angular_material_radio_radio__["a" /* MdRadioModule */]();
        this._MdSliderModule_34 = new __WEBPACK_IMPORTED_MODULE_36__angular_material_slider_slider__["a" /* MdSliderModule */]();
        this._MdSlideToggleModule_35 = new __WEBPACK_IMPORTED_MODULE_37__angular_material_slide_toggle_slide_toggle__["a" /* MdSlideToggleModule */]();
        this._MdSnackBarModule_36 = new __WEBPACK_IMPORTED_MODULE_38__angular_material_snack_bar_snack_bar__["b" /* MdSnackBarModule */]();
        this._MdTooltipModule_37 = new __WEBPACK_IMPORTED_MODULE_39__angular_material_tooltip_tooltip__["a" /* MdTooltipModule */]();
        this._MaterialRootModule_38 = new __WEBPACK_IMPORTED_MODULE_40__angular_material_module__["a" /* MaterialRootModule */]();
        this._ROUTER_FORROOT_GUARD_39 = __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["f" /* provideForRootGuard */](this.parent.get(__WEBPACK_IMPORTED_MODULE_99__angular_router_src_router__["a" /* Router */], null));
        this._RouterModule_40 = new __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["g" /* RouterModule */](this._ROUTER_FORROOT_GUARD_39);
        this._AppModule_41 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_44 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* errorHandler */]();
        this._ApplicationInitStatus_45 = new __WEBPACK_IMPORTED_MODULE_43__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_43__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_46 = new __WEBPACK_IMPORTED_MODULE_44__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__47 = new __WEBPACK_IMPORTED_MODULE_45__angular_core_src_application_ref__["a" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_90__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_100__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_44, this, this._ApplicationInitStatus_45, this.parent.get(__WEBPACK_IMPORTED_MODULE_44__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_46);
        this._NoPreloading_98 = new __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["b" /* NoPreloading */]();
        this._PreloadingStrategy_99 = this._NoPreloading_98;
        this._RouterPreloader_100 = new __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["c" /* RouterPreloader */](this._Router_96, this._NgModuleFactoryLoader_94, this._Compiler_49, this, this._PreloadingStrategy_99);
        return this._AppModule_41;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["a" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_material_core_ripple_ripple__["a" /* MdRippleModule */])) {
            return this._MdRippleModule_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material_button_button__["a" /* MdButtonModule */])) {
            return this._MdButtonModule_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_material_card_card__["a" /* MdCardModule */])) {
            return this._MdCardModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_material_chips_chip_list__["a" /* MdChipsModule */])) {
            return this._MdChipsModule_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox_checkbox__["a" /* MdCheckboxModule */])) {
            return this._MdCheckboxModule_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_material_core_line_line__["a" /* MdLineModule */])) {
            return this._MdLineModule_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_material_grid_list_grid_list__["a" /* MdGridListModule */])) {
            return this._MdGridListModule_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_material_core_platform_index__["a" /* PlatformModule */])) {
            return this._PlatformModule_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_material_input_input__["a" /* MdInputModule */])) {
            return this._MdInputModule_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_material_list_list__["a" /* MdListModule */])) {
            return this._MdListModule_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_bar_progress_bar__["a" /* MdProgressBarModule */])) {
            return this._MdProgressBarModule_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner_progress_spinner__["a" /* MdProgressSpinnerModule */])) {
            return this._MdProgressSpinnerModule_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_material_core_portal_portal_directives__["a" /* PortalModule */])) {
            return this._PortalModule_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */])) {
            return this._OverlayModule_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_material_select_index__["a" /* MdSelectModule */])) {
            return this._MdSelectModule_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_material_core_a11y_index__["a" /* A11yModule */])) {
            return this._A11yModule_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav_sidenav__["a" /* MdSidenavModule */])) {
            return this._MdSidenavModule_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_26__angular_material_core_observe_content_observe_content__["a" /* ObserveContentModule */])) {
            return this._ObserveContentModule_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__angular_material_tabs_tab_group__["a" /* MdTabsModule */])) {
            return this._MdTabsModule_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__angular_material_toolbar_toolbar__["a" /* MdToolbarModule */])) {
            return this._MdToolbarModule_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_29__angular_material_core_projection_projection__["b" /* ProjectionModule */])) {
            return this._ProjectionModule_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__angular_material_core_rtl_dir__["a" /* RtlModule */])) {
            return this._RtlModule_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_31__angular_material_button_toggle_button_toggle__["a" /* MdButtonToggleModule */])) {
            return this._MdButtonToggleModule_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_material_dialog_index__["a" /* MdDialogModule */])) {
            return this._MdDialogModule_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_33__angular_material_icon_icon__["a" /* MdIconModule */])) {
            return this._MdIconModule_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__angular_material_menu_menu__["a" /* MdMenuModule */])) {
            return this._MdMenuModule_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_35__angular_material_radio_radio__["a" /* MdRadioModule */])) {
            return this._MdRadioModule_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_material_slider_slider__["a" /* MdSliderModule */])) {
            return this._MdSliderModule_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_37__angular_material_slide_toggle_slide_toggle__["a" /* MdSlideToggleModule */])) {
            return this._MdSlideToggleModule_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_material_snack_bar_snack_bar__["b" /* MdSnackBarModule */])) {
            return this._MdSnackBarModule_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_material_tooltip_tooltip__["a" /* MdTooltipModule */])) {
            return this._MdTooltipModule_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_40__angular_material_module__["a" /* MaterialRootModule */])) {
            return this._MaterialRootModule_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["h" /* ROUTER_FORROOT_GUARD */])) {
            return this._ROUTER_FORROOT_GUARD_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["g" /* RouterModule */])) {
            return this._RouterModule_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_85__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_42__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_101__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_43__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_44__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_45__angular_core_src_application_ref__["a" /* ApplicationRef_ */])) {
            return this._ApplicationRef__47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_45__angular_core_src_application_ref__["b" /* ApplicationRef */])) {
            return this._ApplicationRef_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_core_src_linker_compiler__["a" /* Compiler */])) {
            return this._Compiler_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_86__angular_core_src_application_tokens__["b" /* APP_ID */])) {
            return this._APP_ID_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_102__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_89__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_event_manager__["b" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_103__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_56;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer */])) {
            return this._DomRootRenderer_57;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_45__angular_core_src_application_ref__["c" /* NgProbeToken */])) {
            return this._NgProbeToken_58;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_104__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_59;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_51__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizer */])) {
            return this._DomSanitizer_60;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_105__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_61;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_52__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_62;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_53__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_63;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_106__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_64;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_107__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_65;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_49__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_66;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_54__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_67;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_55__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_68;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_56__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_69;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_57__angular_http_src_base_response_options__["b" /* ResponseOptions */])) {
            return this._ResponseOptions_70;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_108__angular_http_src_interfaces__["a" /* XSRFStrategy */])) {
            return this._XSRFStrategy_71;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_58__angular_http_src_backends_xhr_backend__["a" /* XHRBackend */])) {
            return this._XHRBackend_72;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_59__angular_http_src_base_request_options__["b" /* RequestOptions */])) {
            return this._RequestOptions_73;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_109__angular_http_src_http__["a" /* Http */])) {
            return this._Http_74;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_75;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_60__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */])) {
            return this._ViewportRuler_76;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_61__angular_material_core_platform_platform__["a" /* Platform */])) {
            return this._Platform_77;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_62__angular_material_core_overlay_position_overlay_position_builder__["a" /* OverlayPositionBuilder */])) {
            return this._OverlayPositionBuilder_78;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_63__angular_material_core_overlay_overlay_container__["a" /* OverlayContainer */])) {
            return this._OverlayContainer_79;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_64__angular_material_core_overlay_overlay__["a" /* Overlay */])) {
            return this._Overlay_80;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_65__angular_material_core_overlay_scroll_scroll_dispatcher__["a" /* ScrollDispatcher */])) {
            return this._ScrollDispatcher_81;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_66__angular_material_core_a11y_interactivity_checker__["a" /* InteractivityChecker */])) {
            return this._InteractivityChecker_82;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_29__angular_material_core_projection_projection__["a" /* DomProjection */])) {
            return this._DomProjection_83;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_67__angular_material_core_a11y_live_announcer__["a" /* LiveAnnouncer */])) {
            return this._LiveAnnouncer_84;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_68__angular_material_core_coordination_unique_selection_dispatcher__["a" /* UniqueSelectionDispatcher */])) {
            return this._UniqueSelectionDispatcher_85;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_69__angular_material_dialog_dialog__["a" /* MdDialog */])) {
            return this._MdDialog_86;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_70__angular_material_icon_icon_registry__["a" /* MdIconRegistry */])) {
            return this._MdIconRegistry_87;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_material_snack_bar_snack_bar__["a" /* MdSnackBar */])) {
            return this._MdSnackBar_88;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["i" /* ROUTER_CONFIGURATION */])) {
            return this._ROUTER_CONFIGURATION_89;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_93__angular_common_src_location_location_strategy__["b" /* LocationStrategy */])) {
            return this._LocationStrategy_90;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location__["a" /* Location */])) {
            return this._Location_91;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_72__angular_router_src_url_tree__["b" /* UrlSerializer */])) {
            return this._UrlSerializer_92;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_73__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */])) {
            return this._RouterOutletMap_93;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_110__angular_core_src_linker_ng_module_factory_loader__["a" /* NgModuleFactoryLoader */])) {
            return this._NgModuleFactoryLoader_94;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_111__angular_router_src_router_config_loader__["a" /* ROUTES */])) {
            return this._ROUTES_95;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_99__angular_router_src_router__["a" /* Router */])) {
            return this._Router_96;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_112__angular_router_src_router_state__["a" /* ActivatedRoute */])) {
            return this._ActivatedRoute_97;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["b" /* NoPreloading */])) {
            return this._NoPreloading_98;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["d" /* PreloadingStrategy */])) {
            return this._PreloadingStrategy_99;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["c" /* RouterPreloader */])) {
            return this._RouterPreloader_100;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_75__angular_router_src_router_preloader__["a" /* PreloadAllModules */])) {
            return this._PreloadAllModules_101;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_module__["j" /* ROUTER_INITIALIZER */])) {
            return this._ROUTER_INITIALIZER_102;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_86__angular_core_src_application_tokens__["c" /* APP_BOOTSTRAP_LISTENER */])) {
            return this._APP_BOOTSTRAP_LISTENER_103;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_76__app_sevices_workout_service__["a" /* WorkoutService */])) {
            return this._WorkoutService_104;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__47.ngOnDestroy();
        this._RouterPreloader_100.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.module.ngfactory.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.right[_ngcontent-%COMP%] {\n  float:right;\n}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/exercise.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_exercise_exercise_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exercise_component_css_shim_ngstyle__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_card_card__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_src_pipes_number_pipe__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_i18n_tokens__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_ExerciseComponent; });
/* unused harmony export ExerciseComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_ExerciseComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













var Wrapper_ExerciseComponent = (function () {
    function Wrapper_ExerciseComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_exercise_exercise_component__["a" /* ExerciseComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_ExerciseComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ExerciseComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ExerciseComponent.prototype.check_exerciseModel = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.exerciseModel = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ExerciseComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ExerciseComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ExerciseComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ExerciseComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ExerciseComponent;
}());
var renderType_ExerciseComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_ExerciseComponent_Host0 = (function (_super) {
    __extends(View_ExerciseComponent_Host0, _super);
    function View_ExerciseComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ExerciseComponent_Host0, renderType_ExerciseComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_ExerciseComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-exercise', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_ExerciseComponent0(this.viewUtils, this, 0, this._el_0);
        this._ExerciseComponent_0_3 = new Wrapper_ExerciseComponent();
        this.compView_0.create(this._ExerciseComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._ExerciseComponent_0_3.context);
    };
    View_ExerciseComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_exercise_exercise_component__["a" /* ExerciseComponent */]) && (0 === requestNodeIndex))) {
            return this._ExerciseComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ExerciseComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ExerciseComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ExerciseComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ExerciseComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExerciseComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var ExerciseComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-exercise', View_ExerciseComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_exercise_exercise_component__["a" /* ExerciseComponent */]);
var styles_ExerciseComponent = [__WEBPACK_IMPORTED_MODULE_8__exercise_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_ExerciseComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_ExerciseComponent, {});
var View_ExerciseComponent0 = (function (_super) {
    __extends(View_ExerciseComponent0, _super);
    function View_ExerciseComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ExerciseComponent0, renderType_ExerciseComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_ExerciseComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'md-card', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__["a" /* View_MdCard0 */](this.viewUtils, this, 0, this._el_0);
        this._MdCard_0_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__["b" /* Wrapper_MdCard */]();
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n  ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'right'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n', null);
        this.compView_0.create(this._MdCard_0_3.context);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._pipe_number_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_common_src_pipes_number_pipe__["a" /* DecimalPipe */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], this.parentIndex));
        this._pipe_number_0_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["pureProxy1"](this._pipe_number_0.transform.bind(this._pipe_number_0));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_ExerciseComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_9__angular_material_card_card__["b" /* MdCard */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MdCard_0_3.context;
        }
        return notFoundResult;
    };
    View_ExerciseComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        if (this._MdCard_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        var currVal_11 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.exerciseModel.name, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_3, currVal_11);
            this._expr_11 = currVal_11;
        }
        valUnwrapper.reset();
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["castByValue"](this._pipe_number_0_0, this._pipe_number_0.transform)(this.context.exerciseModel.duration)), ' sec');
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_12, currVal_12))) {
            this.renderer.setText(this._text_6, currVal_12);
            this._expr_12 = currVal_12;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ExerciseComponent0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ExerciseComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._text_1, ctx);
            cb(this._el_2, ctx);
            cb(this._text_4, ctx);
            cb(this._el_5, ctx);
            cb(this._text_7, ctx);
        }
    };
    return View_ExerciseComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/exercise.component.ngfactory.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/home.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component_css_shim_ngstyle__ = __webpack_require__(538);
/* unused harmony export Wrapper_HomeComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentNgFactory; });
/* unused harmony export View_HomeComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var Wrapper_HomeComponent = (function () {
    function Wrapper_HomeComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__["a" /* HomeComponent */]();
    }
    Wrapper_HomeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HomeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HomeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_HomeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HomeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HomeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HomeComponent;
}());
var renderType_HomeComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_HomeComponent_Host0 = (function (_super) {
    __extends(View_HomeComponent_Host0, _super);
    function View_HomeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent_Host0, renderType_HomeComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-home', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_HomeComponent0(this.viewUtils, this, 0, this._el_0);
        this._HomeComponent_0_3 = new Wrapper_HomeComponent();
        this.compView_0.create(this._HomeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._HomeComponent_0_3.context);
    };
    View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__["a" /* HomeComponent */]) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_HomeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HomeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HomeComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var HomeComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-home', View_HomeComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__["a" /* HomeComponent */]);
var styles_HomeComponent = [__WEBPACK_IMPORTED_MODULE_7__home_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_HomeComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_HomeComponent, {});
var View_HomeComponent0 = (function (_super) {
    __extends(View_HomeComponent0, _super);
    function View_HomeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent0, renderType_HomeComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  home works!\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    return View_HomeComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/home.component.ngfactory.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkoutService = (function () {
    function WorkoutService() {
    }
    WorkoutService.prototype.list = function () {
        return [{
                id: 1,
                name: "HIIT 1",
                nbRepetitions: 3,
                exercises: [{
                        name: 'Test exercise',
                        duration: 10
                    },
                    {
                        name: 'Repos !',
                        duration: 10
                    }]
            },
            {
                id: 2,
                name: "WORK2",
                nbRepetitions: 3,
                exercises: [{
                        name: 'Test exercise',
                        duration: 10
                    },
                    {
                        name: 'Repos !',
                        duration: 10
                    }]
            }
        ];
    };
    WorkoutService.prototype.get = function (workoutId) {
        return this.list().filter(function (workout) { return workout.id === workoutId; })[0];
    };
    WorkoutService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], WorkoutService);
    return WorkoutService;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/workout.service.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['p[_ngcontent-%COMP%] {\n  color: darkgrey;\n}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/nav-bar.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_nav_bar_nav_bar_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_component_css_shim_ngstyle__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_list_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_material_core_line_line_ngfactory__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_core_line_line__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_for__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_NavBarComponent; });
/* unused harmony export NavBarComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_NavBarComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






















var Wrapper_NavBarComponent = (function () {
    function Wrapper_NavBarComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_nav_bar_nav_bar_component__["a" /* NavBarComponent */](p0, p1);
    }
    Wrapper_NavBarComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavBarComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NavBarComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NavBarComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavBarComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavBarComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.clicked.subscribe(_eventHandler.bind(view, 'clicked')));
        }
    };
    return Wrapper_NavBarComponent;
}());
var renderType_NavBarComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_NavBarComponent_Host0 = (function (_super) {
    __extends(View_NavBarComponent_Host0, _super);
    function View_NavBarComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavBarComponent_Host0, renderType_NavBarComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NavBarComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-nav-bar', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_NavBarComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavBarComponent_0_3 = new Wrapper_NavBarComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__app_sevices_workout_service__["a" /* WorkoutService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router__["a" /* Router */], this.parentIndex));
        this.compView_0.create(this._NavBarComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._NavBarComponent_0_3.context);
    };
    View_NavBarComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_nav_bar_nav_bar_component__["a" /* NavBarComponent */]) && (0 === requestNodeIndex))) {
            return this._NavBarComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavBarComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavBarComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._NavBarComponent_0_3.ngOnDestroy();
    };
    View_NavBarComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavBarComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var NavBarComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-nav-bar', View_NavBarComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_nav_bar_nav_bar_component__["a" /* NavBarComponent */]);
var styles_NavBarComponent = [__WEBPACK_IMPORTED_MODULE_9__nav_bar_component_css_shim_ngstyle__["a" /* styles */]];
var View_NavBarComponent1 = (function (_super) {
    __extends(View_NavBarComponent1, _super);
    function View_NavBarComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_NavBarComponent1, renderType_NavBarComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_18 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_19 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_20 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_NavBarComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-list-item', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'listitem'), null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["a" /* View_MdListItem0 */](this.viewUtils, this, 0, this._el_0);
        this._MdListItem_0_3 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["b" /* Wrapper_MdListItem */](this.renderer, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0));
        this._query_MdLine_0_0 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._query_MdListAvatar_0_1 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'h3', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-line', ''), null);
        this._MdLine_2_3 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_material_core_line_line_ngfactory__["a" /* Wrapper_MdLine */]();
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-line', ''), null);
        this._MdLine_5_3 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_material_core_line_line_ngfactory__["a" /* Wrapper_MdLine */]();
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-line', ''), null);
        this._MdLine_8_3 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_material_core_line_line_ngfactory__["a" /* Wrapper_MdLine */]();
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this.compView_0.create(this._MdListItem_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'click', null, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_0));
        this._query_MdListAvatar_0_1.reset([]);
        this._MdListItem_0_3.context._hasAvatar = this._query_MdListAvatar_0_1.first;
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), [disposable_0]);
        return null;
    };
    View_NavBarComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_material_core_line_line__["b" /* MdLine */]) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._MdLine_2_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_material_core_line_line__["b" /* MdLine */]) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._MdLine_5_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_material_core_line_line__["b" /* MdLine */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._MdLine_8_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_10__angular_material_list_list__["b" /* MdListItem */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._MdListItem_0_3.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdListItem_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdLine_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._MdLine_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._MdLine_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        if (!throwOnChange) {
            if (this._query_MdLine_0_0.dirty) {
                this._query_MdLine_0_0.reset([
                    this._MdLine_2_3.context,
                    this._MdLine_5_3.context,
                    this._MdLine_8_3.context
                ]);
                this._MdListItem_0_3.context._lines = this._query_MdLine_0_0;
                this._query_MdLine_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdListItem_0_3.context.ngAfterContentInit();
            }
        }
        var currVal_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.name, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_3, currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.exercises.length, ' exercises ');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_6, currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '(', this.parentView.context.totalTime(this.context.$implicit), ' seconds) ');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_9, currVal_20);
            this._expr_20 = currVal_20;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavBarComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NavBarComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_NavBarComponent1.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) {
            cb(this._el_2, ctx);
            cb(this._el_5, ctx);
            cb(this._el_8, ctx);
        }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) {
            cb(this._text_1, ctx);
            cb(this._text_4, ctx);
            cb(this._text_7, ctx);
            cb(this._text_10, ctx);
        }
    };
    View_NavBarComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdListItem_0_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.goToWorkout(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NavBarComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_NavBarComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_NavBarComponent, {});
var View_NavBarComponent0 = (function (_super) {
    __extends(View_NavBarComponent0, _super);
    function View_NavBarComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavBarComponent0, renderType_NavBarComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NavBarComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'md-list', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'list'), null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["c" /* View_MdList0 */](this.viewUtils, this, 0, this._el_0);
        this._MdList_0_3 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["d" /* Wrapper_MdList */]();
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-list-item', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'listitem'), null);
        this.compView_2 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["a" /* View_MdListItem0 */](this.viewUtils, this, 2, this._el_2);
        this._MdListItem_2_3 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_material_list_list_ngfactory__["b" /* Wrapper_MdListItem */](this.renderer, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_2));
        this._query_MdLine_2_0 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._query_MdListAvatar_2_1 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_4 = this.renderer.createText(this._el_3, 'Workouts', null);
        this.compView_2.create(this._MdListItem_2_3.context);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(null, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgFor_6_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_7 = this.renderer.createText(null, '\n\n', null);
        this.compView_0.create(this._MdList_0_3.context);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this._query_MdListAvatar_2_1.reset([]);
        this._MdListItem_2_3.context._hasAvatar = this._query_MdListAvatar_2_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    };
    View_NavBarComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_10__angular_material_list_list__["b" /* MdListItem */]) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._MdListItem_2_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_10__angular_material_list_list__["c" /* MdList */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MdList_0_3.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdList_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdListItem_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_6_0_0 = this.context.workouts;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_MdLine_2_0.dirty) {
                this._query_MdLine_2_0.reset([]);
                this._MdListItem_2_3.context._lines = this._query_MdLine_2_0;
                this._query_MdLine_2_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdListItem_2_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_NavBarComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_2.destroy();
    };
    View_NavBarComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._text_1, ctx);
            cb(this._el_2, ctx);
            cb(this._text_5, ctx);
            cb(this._vc_6.nativeElement, ctx);
            this._vc_6.visitNestedViewRootNodes(cb, ctx);
            cb(this._text_7, ctx);
        }
        if (((nodeIndex == 2) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 2) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 2) && (ngContentIndex == 2))) {
            cb(this._el_3, ctx);
        }
    };
    View_NavBarComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_NavBarComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_NavBarComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.compView_2.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdListItem_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_NavBarComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/nav-bar.component.ngfactory.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-card[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.right[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 1.5em;\n  width: 1.5em;\n  padding: 0 0.5em;\n}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-exercise.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_run_exercise_run_exercise_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__run_exercise_component_css_shim_ngstyle__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_card_card__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner_progress_spinner__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_progress_spinner_progress_spinner_ngfactory__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_src_pipes_number_pipe__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_i18n_tokens__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_RunExerciseComponent; });
/* unused harmony export RunExerciseComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_RunExerciseComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

















var Wrapper_RunExerciseComponent = (function () {
    function Wrapper_RunExerciseComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_run_exercise_run_exercise_component__["a" /* RunExerciseComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_RunExerciseComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RunExerciseComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_RunExerciseComponent.prototype.check_exerciseModel = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.exerciseModel = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RunExerciseComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_RunExerciseComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RunExerciseComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RunExerciseComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RunExerciseComponent;
}());
var renderType_RunExerciseComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_RunExerciseComponent_Host0 = (function (_super) {
    __extends(View_RunExerciseComponent_Host0, _super);
    function View_RunExerciseComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RunExerciseComponent_Host0, renderType_RunExerciseComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_RunExerciseComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-run-exercise', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_RunExerciseComponent0(this.viewUtils, this, 0, this._el_0);
        this._RunExerciseComponent_0_3 = new Wrapper_RunExerciseComponent();
        this.compView_0.create(this._RunExerciseComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._RunExerciseComponent_0_3.context);
    };
    View_RunExerciseComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_run_exercise_run_exercise_component__["a" /* RunExerciseComponent */]) && (0 === requestNodeIndex))) {
            return this._RunExerciseComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_RunExerciseComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RunExerciseComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_RunExerciseComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RunExerciseComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RunExerciseComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var RunExerciseComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-run-exercise', View_RunExerciseComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_run_exercise_run_exercise_component__["a" /* RunExerciseComponent */]);
var styles_RunExerciseComponent = [__WEBPACK_IMPORTED_MODULE_8__run_exercise_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_RunExerciseComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_RunExerciseComponent, {});
var View_RunExerciseComponent0 = (function (_super) {
    __extends(View_RunExerciseComponent0, _super);
    function View_RunExerciseComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RunExerciseComponent0, renderType_RunExerciseComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_RunExerciseComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'md-card', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__["a" /* View_MdCard0 */](this.viewUtils, this, 0, this._el_0);
        this._MdCard_0_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_material_card_card_ngfactory__["b" /* Wrapper_MdCard */]();
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'md-progress-circle', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'circle', 'mode', 'determinate', 'role', 'progressbar'), null);
        this.compView_2 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_progress_spinner_progress_spinner_ngfactory__["a" /* View_MdProgressSpinner0 */](this.viewUtils, this, 2, this._el_2);
        this._MdProgressSpinner_2_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_progress_spinner_progress_spinner_ngfactory__["b" /* Wrapper_MdProgressSpinner */](this.compView_2.ref, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_2));
        this.compView_2.create(this._MdProgressSpinner_2_3.context);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'right'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(null, '\n', null);
        this.compView_0.create(this._MdCard_0_3.context);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._pipe_number_0 = new __WEBPACK_IMPORTED_MODULE_13__angular_common_src_pipes_number_pipe__["a" /* DecimalPipe */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], this.parentIndex));
        this._pipe_number_0_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["pureProxy1"](this._pipe_number_0.transform.bind(this._pipe_number_0));
        this._pipe_number_0_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["pureProxy1"](this._pipe_number_0.transform.bind(this._pipe_number_0));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    };
    View_RunExerciseComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner_progress_spinner__["b" /* MdProgressSpinner */]) && (2 === requestNodeIndex))) {
            return this._MdProgressSpinner_2_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_9__angular_material_card_card__["b" /* MdCard */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MdCard_0_3.context;
        }
        return notFoundResult;
    };
    View_RunExerciseComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        if (this._MdCard_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        var currVal_2_0_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.progress(this.context.exerciseModel), '');
        this._MdProgressSpinner_2_3.check_value(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = 'determinate';
        this._MdProgressSpinner_2_3.check_mode(currVal_2_0_1, throwOnChange, false);
        if (this._MdProgressSpinner_2_3.ngDoCheck(this, this._el_2, throwOnChange)) {
            this.compView_2.markAsCheckOnce();
        }
        this._MdProgressSpinner_2_3.checkHost(this, this.compView_2, this._el_2, throwOnChange);
        var currVal_14 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.exerciseModel.name, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_4, currVal_14);
            this._expr_14 = currVal_14;
        }
        valUnwrapper.reset();
        var currVal_15 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](2, '', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["castByValue"](this._pipe_number_0_0, this._pipe_number_0.transform)(this.context.exerciseModel.durationLeft)), '/', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["castByValue"](this._pipe_number_0_1, this._pipe_number_0.transform)(this.context.exerciseModel.duration)), ' sec');
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_15, currVal_15))) {
            this.renderer.setText(this._text_7, currVal_15);
            this._expr_15 = currVal_15;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_RunExerciseComponent0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this.compView_2.destroy();
        this._MdProgressSpinner_2_3.ngOnDestroy();
    };
    View_RunExerciseComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._text_1, ctx);
            cb(this._el_2, ctx);
            cb(this._el_3, ctx);
            cb(this._text_5, ctx);
            cb(this._el_6, ctx);
            cb(this._text_8, ctx);
        }
    };
    return View_RunExerciseComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-exercise.component.ngfactory.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-workout.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_run_workout_run_workout_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router_src_router_state__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__run_workout_component_css_shim_ngstyle__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_run_exercise_run_exercise_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__run_exercise_run_exercise_component_ngfactory__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_icon_icon_registry__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_for__ = __webpack_require__(106);
/* unused harmony export Wrapper_RunWorkoutComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunWorkoutComponentNgFactory; });
/* unused harmony export View_RunWorkoutComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






















var Wrapper_RunWorkoutComponent = (function () {
    function Wrapper_RunWorkoutComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_run_workout_run_workout_component__["a" /* RunWorkoutComponent */](p0, p1);
    }
    Wrapper_RunWorkoutComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RunWorkoutComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_RunWorkoutComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_RunWorkoutComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RunWorkoutComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RunWorkoutComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RunWorkoutComponent;
}());
var renderType_RunWorkoutComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_RunWorkoutComponent_Host0 = (function (_super) {
    __extends(View_RunWorkoutComponent_Host0, _super);
    function View_RunWorkoutComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RunWorkoutComponent_Host0, renderType_RunWorkoutComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_RunWorkoutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-run-workout', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_RunWorkoutComponent0(this.viewUtils, this, 0, this._el_0);
        this._RunWorkoutComponent_0_3 = new Wrapper_RunWorkoutComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router_state__["a" /* ActivatedRoute */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_sevices_workout_service__["a" /* WorkoutService */], this.parentIndex));
        this.compView_0.create(this._RunWorkoutComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._RunWorkoutComponent_0_3.context);
    };
    View_RunWorkoutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_run_workout_run_workout_component__["a" /* RunWorkoutComponent */]) && (0 === requestNodeIndex))) {
            return this._RunWorkoutComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_RunWorkoutComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RunWorkoutComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_RunWorkoutComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RunWorkoutComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RunWorkoutComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var RunWorkoutComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-run-workout', View_RunWorkoutComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_run_workout_run_workout_component__["a" /* RunWorkoutComponent */]);
var styles_RunWorkoutComponent = [__WEBPACK_IMPORTED_MODULE_9__run_workout_component_css_shim_ngstyle__["a" /* styles */]];
var View_RunWorkoutComponent1 = (function (_super) {
    __extends(View_RunWorkoutComponent1, _super);
    function View_RunWorkoutComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_RunWorkoutComponent1, renderType_RunWorkoutComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_RunWorkoutComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'wt-run-exercise', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_11__run_exercise_run_exercise_component_ngfactory__["a" /* View_RunExerciseComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._RunExerciseComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_11__run_exercise_run_exercise_component_ngfactory__["b" /* Wrapper_RunExerciseComponent */]();
        this.compView_0.create(this._RunExerciseComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_RunWorkoutComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_10__app_run_exercise_run_exercise_component__["a" /* RunExerciseComponent */]) && (0 === requestNodeIndex))) {
            return this._RunExerciseComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_RunWorkoutComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._RunExerciseComponent_0_3.check_exerciseModel(currVal_0_0_0, throwOnChange, false);
        this._RunExerciseComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_RunWorkoutComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RunWorkoutComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RunWorkoutComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_RunWorkoutComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_RunWorkoutComponent, {});
var View_RunWorkoutComponent0 = (function (_super) {
    __extends(View_RunWorkoutComponent0, _super);
    function View_RunWorkoutComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RunWorkoutComponent0, renderType_RunWorkoutComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_33 = __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_34 = __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_RunWorkoutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'right'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-icon-button'), null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'md-icon', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'large', 'role', 'img'), null);
        this.compView_11 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["a" /* View_MdIcon0 */](this.viewUtils, this, 11, this._el_11);
        this._MdIcon_11_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["b" /* Wrapper_MdIcon */](new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_11), this.renderer, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this._text_12 = this.renderer.createText(null, 'play_circle_outline', null);
        this.compView_11.create(this._MdIcon_11_3.context);
        this._text_13 = this.renderer.createText(this._el_8, '\n  ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card-container'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n  ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'h3', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'md-icon', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'img'), null);
        this.compView_19 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["a" /* View_MdIcon0 */](this.viewUtils, this, 19, this._el_19);
        this._MdIcon_19_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["b" /* Wrapper_MdIcon */](new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_19), this.renderer, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this._text_20 = this.renderer.createText(null, 'replay', null);
        this.compView_19.create(this._MdIcon_19_3.context);
        this._text_21 = this.renderer.createText(this._el_18, '', null);
        this._text_22 = this.renderer.createText(this._el_16, '\n  ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_23 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](23, 16, this, this._anchor_23);
        this._TemplateRef_23_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 23, this._anchor_23);
        this._NgFor_23_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_23.vcRef, this._TemplateRef_23_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_24 = this.renderer.createText(this._el_16, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_11, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_11));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25
        ]), [disposable_0]);
        return null;
    };
    View_RunWorkoutComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__["b" /* MdIcon */]) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._MdIcon_11_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__["b" /* MdIcon */]) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._MdIcon_19_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6.context;
        }
        return notFoundResult;
    };
    View_RunWorkoutComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdIcon_11_3.ngDoCheck(this, this._el_11, throwOnChange)) {
            this.compView_11.markAsCheckOnce();
        }
        if (this._MdIcon_19_3.ngDoCheck(this, this._el_19, throwOnChange)) {
            this.compView_19.markAsCheckOnce();
        }
        var currVal_23_0_0 = this.context.exercises;
        this._NgFor_23_6.check_ngForOf(currVal_23_0_0, throwOnChange, false);
        this._NgFor_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        var currVal_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.workoutModel.name, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setText(this._text_5, currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, ' ', this.context.nbRepetitions, ' sets left');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_21, currVal_34);
            this._expr_34 = currVal_34;
        }
        this.compView_11.internalDetectChanges(throwOnChange);
        this.compView_19.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            this._MdIcon_11_3.context.ngAfterViewChecked();
            this._MdIcon_19_3.context.ngAfterViewChecked();
        }
    };
    View_RunWorkoutComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this.compView_11.destroy();
        this.compView_19.destroy();
    };
    View_RunWorkoutComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 11) && (ngContentIndex == 0))) {
            cb(this._text_12, ctx);
        }
        if (((nodeIndex == 19) && (ngContentIndex == 0))) {
            cb(this._text_20, ctx);
        }
    };
    View_RunWorkoutComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_RunWorkoutComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_RunWorkoutComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.start() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_RunWorkoutComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/run-workout.component.ngfactory.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.large[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n\nh2[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n  padding-right: 2em;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n\n.card-container[_ngcontent-%COMP%]   md-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.12em;\n}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/workout.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_workout_workout_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router_src_router_state__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workout_component_css_shim_ngstyle__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_exercise_exercise_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exercise_exercise_component_ngfactory__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_icon_icon_registry__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_router_src_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router_src_directives_router_link__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__ = __webpack_require__(106);
/* unused harmony export Wrapper_WorkoutComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutComponentNgFactory; });
/* unused harmony export View_WorkoutComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

























var Wrapper_WorkoutComponent = (function () {
    function Wrapper_WorkoutComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_workout_workout_component__["a" /* WorkoutComponent */](p0, p1);
    }
    Wrapper_WorkoutComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_WorkoutComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_WorkoutComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_WorkoutComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_WorkoutComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_WorkoutComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_WorkoutComponent;
}());
var renderType_WorkoutComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_WorkoutComponent_Host0 = (function (_super) {
    __extends(View_WorkoutComponent_Host0, _super);
    function View_WorkoutComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WorkoutComponent_Host0, renderType_WorkoutComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_WorkoutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'wt-workout', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_WorkoutComponent0(this.viewUtils, this, 0, this._el_0);
        this._WorkoutComponent_0_3 = new Wrapper_WorkoutComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router_state__["a" /* ActivatedRoute */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_sevices_workout_service__["a" /* WorkoutService */], this.parentIndex));
        this.compView_0.create(this._WorkoutComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._WorkoutComponent_0_3.context);
    };
    View_WorkoutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_workout_workout_component__["a" /* WorkoutComponent */]) && (0 === requestNodeIndex))) {
            return this._WorkoutComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_WorkoutComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._WorkoutComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_WorkoutComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_WorkoutComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_WorkoutComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var WorkoutComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('wt-workout', View_WorkoutComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_workout_workout_component__["a" /* WorkoutComponent */]);
var styles_WorkoutComponent = [__WEBPACK_IMPORTED_MODULE_9__workout_component_css_shim_ngstyle__["a" /* styles */]];
var View_WorkoutComponent1 = (function (_super) {
    __extends(View_WorkoutComponent1, _super);
    function View_WorkoutComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_WorkoutComponent1, renderType_WorkoutComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_WorkoutComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'wt-exercise', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_11__exercise_exercise_component_ngfactory__["a" /* View_ExerciseComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._ExerciseComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_11__exercise_exercise_component_ngfactory__["b" /* Wrapper_ExerciseComponent */]();
        this.compView_0.create(this._ExerciseComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_WorkoutComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_10__app_exercise_exercise_component__["a" /* ExerciseComponent */]) && (0 === requestNodeIndex))) {
            return this._ExerciseComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_WorkoutComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._ExerciseComponent_0_3.check_exerciseModel(currVal_0_0_0, throwOnChange, false);
        this._ExerciseComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_WorkoutComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_WorkoutComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_WorkoutComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_WorkoutComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_WorkoutComponent, {});
var View_WorkoutComponent0 = (function (_super) {
    __extends(View_WorkoutComponent0, _super);
    function View_WorkoutComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WorkoutComponent0, renderType_WorkoutComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_34 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_35 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_WorkoutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'right'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-icon-button'), null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'md-icon', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'large', 'role', 'img', 'routerLink', 'run'), null);
        this.compView_11 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["a" /* View_MdIcon0 */](this.viewUtils, this, 11, this._el_11);
        this._MdIcon_11_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["b" /* Wrapper_MdIcon */](new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_11), this.renderer, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this._RouterLink_11_4 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLink */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_20__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router_state__["a" /* ActivatedRoute */], this.parentIndex));
        this._text_12 = this.renderer.createText(null, 'play_circle_outline', null);
        this.compView_11.create(this._MdIcon_11_3.context);
        this._text_13 = this.renderer.createText(this._el_8, '\n  ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card-container'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n  ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'h3', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'md-icon', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'img'), null);
        this.compView_19 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["a" /* View_MdIcon0 */](this.viewUtils, this, 19, this._el_19);
        this._MdIcon_19_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_material_icon_icon_ngfactory__["b" /* Wrapper_MdIcon */](new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_19), this.renderer, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_material_icon_icon_registry__["a" /* MdIconRegistry */], this.parentIndex));
        this._text_20 = this.renderer.createText(null, 'replay', null);
        this.compView_19.create(this._MdIcon_19_3.context);
        this._text_21 = this.renderer.createText(this._el_18, '', null);
        this._text_22 = this.renderer.createText(this._el_16, '\n  ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_23 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](23, 16, this, this._anchor_23);
        this._TemplateRef_23_5 = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 23, this._anchor_23);
        this._NgFor_23_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_23.vcRef, this._TemplateRef_23_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_22__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_24 = this.renderer.createText(this._el_16, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_11, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_11));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25
        ]), [disposable_0]);
        return null;
    };
    View_WorkoutComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__["b" /* MdIcon */]) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._MdIcon_11_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_router_src_directives_router_link__["a" /* RouterLink */]) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLink_11_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_material_icon_icon__["b" /* MdIcon */]) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._MdIcon_19_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6.context;
        }
        return notFoundResult;
    };
    View_WorkoutComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdIcon_11_3.ngDoCheck(this, this._el_11, throwOnChange)) {
            this.compView_11.markAsCheckOnce();
        }
        var currVal_11_1_0 = 'run';
        this._RouterLink_11_4.check_routerLink(currVal_11_1_0, throwOnChange, false);
        this._RouterLink_11_4.ngDoCheck(this, this._el_11, throwOnChange);
        if (this._MdIcon_19_3.ngDoCheck(this, this._el_19, throwOnChange)) {
            this.compView_19.markAsCheckOnce();
        }
        var currVal_23_0_0 = this.context.workoutModel.exercises;
        this._NgFor_23_6.check_ngForOf(currVal_23_0_0, throwOnChange, false);
        this._NgFor_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        var currVal_34 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.workoutModel.name, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_5, currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, ' ', this.context.workoutModel.nbRepetitions, ' sets');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setText(this._text_21, currVal_35);
            this._expr_35 = currVal_35;
        }
        this.compView_11.internalDetectChanges(throwOnChange);
        this.compView_19.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            this._MdIcon_11_3.context.ngAfterViewChecked();
            this._MdIcon_19_3.context.ngAfterViewChecked();
        }
    };
    View_WorkoutComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this.compView_11.destroy();
        this.compView_19.destroy();
    };
    View_WorkoutComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 11) && (ngContentIndex == 0))) {
            cb(this._text_12, ctx);
        }
        if (((nodeIndex == 19) && (ngContentIndex == 0))) {
            cb(this._text_20, ctx);
        }
    };
    View_WorkoutComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_WorkoutComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_WorkoutComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_11_4.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_WorkoutComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/workout.component.ngfactory.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_style__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgStyle; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgStyle = (function () {
    function Wrapper_NgStyle(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_style__["a" /* NgStyle */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgStyle.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgStyle.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgStyle.prototype.check_ngStyle = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngStyle = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgStyle.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgStyle.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgStyle.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgStyle.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgStyle;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/ng_style.ngfactory.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.md-button-focus[md-button] .md-button-focus-overlay,.md-button-focus[md-fab] .md-button-focus-overlay,.md-button-focus[md-icon-button] .md-button-focus-overlay,.md-button-focus[md-mini-fab] .md-button-focus-overlay,.md-button-focus[md-raised-button] .md-button-focus-overlay,[md-button]:hover .md-button-focus-overlay,[md-icon-button]:hover .md-button-focus-overlay{opacity:1}[md-icon-button],[md-mini-fab]{width:40px;height:40px}[md-button],[md-fab],[md-icon-button],[md-mini-fab],[md-raised-button]{box-sizing:border-box;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border:none;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;font-size:14px;font-family:Roboto,"Helvetica Neue",sans-serif;font-weight:500;color:currentColor;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled][md-button],[disabled][md-fab],[disabled][md-icon-button],[disabled][md-mini-fab],[disabled][md-raised-button]{cursor:default}[md-fab],[md-mini-fab],[md-raised-button]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}[md-fab],[md-mini-fab]{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);-ms-flex-negative:0;flex-shrink:0;padding:0;min-width:0;border-radius:50%}[md-fab]:active,[md-mini-fab]:active,[md-raised-button]:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled][md-fab],[disabled][md-mini-fab],[disabled][md-raised-button]{box-shadow:none}[md-button][disabled]:hover .md-button-focus-overlay,[md-button][disabled]:hover.md-accent,[md-button][disabled]:hover.md-primary,[md-button][disabled]:hover.md-warn,[md-icon-button][disabled]:hover .md-button-focus-overlay,[md-icon-button][disabled]:hover.md-accent,[md-icon-button][disabled]:hover.md-primary,[md-icon-button][disabled]:hover.md-warn{background-color:transparent}[md-fab]{width:56px;height:56px}[md-fab]:active,[md-mini-fab]:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}[md-fab] i,[md-fab] md-icon{padding:16px 0;line-height:24px}[md-mini-fab] i,[md-mini-fab] md-icon{padding:8px 0;line-height:24px}[md-icon-button]{padding:0;min-width:0;-ms-flex-negative:0;flex-shrink:0;line-height:40px;border-radius:50%}[md-icon-button] i,[md-icon-button] md-icon{line-height:24px}[md-button] .md-button-wrapper>*,[md-icon-button] .md-button-wrapper>*,[md-raised-button] .md-button-wrapper>*{vertical-align:middle}.md-button-focus-overlay,.md-button-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.md-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;pointer-events:none;opacity:0}.md-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.md-button-focus-overlay{background-color:rgba(255,255,255,.5)}[md-button],[md-fab],[md-icon-button],[md-mini-fab],[md-raised-button]{outline:solid 1px}}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/button.css.ngstyle.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core_ripple_ripple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_src_localization__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_i18n_tokens__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__button_css_ngstyle__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_ripple_ripple_ngfactory__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_core_overlay_position_viewport_ruler__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_src_directives_ng_if_ngfactory__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_src_directives_ng_if__ = __webpack_require__(107);
/* unused harmony export MdButtonModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdButton; });
/* unused harmony export Wrapper_MdAnchor */
/* unused harmony export MdButtonNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdButton0; });
/* unused harmony export MdAnchorNgFactory */
/* unused harmony export View_MdAnchor0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};























var MdButtonModuleInjector = (function (_super) {
    __extends(MdButtonModuleInjector, _super);
    function MdButtonModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdButtonModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new __WEBPACK_IMPORTED_MODULE_5__angular_common_src_localization__["a" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_6__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_5", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_5 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_5 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_5;
        },
        enumerable: true,
        configurable: true
    });
    MdButtonModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._DefaultStyleCompatibilityModeModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdRippleModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_material_core_ripple_ripple__["a" /* MdRippleModule */]();
        this._MdButtonModule_3 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["a" /* MdButtonModule */]();
        return this._MdButtonModule_3;
    };
    MdButtonModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_ripple_ripple__["a" /* MdRippleModule */])) {
            return this._MdRippleModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["a" /* MdButtonModule */])) {
            return this._MdButtonModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_5;
        }
        return notFoundResult;
    };
    MdButtonModuleInjector.prototype.destroyInternal = function () {
    };
    return MdButtonModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdButtonModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdButtonModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["a" /* MdButtonModule */]);
var Wrapper_MdButton = (function () {
    function Wrapper_MdButton(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["b" /* MdButton */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdButton.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdButton.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdButton.prototype.check_disableRipple = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.disableRipple = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdButton.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdButton.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdButton.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdButton.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_3 = this.context.disabled;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementProperty(el, 'disabled', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context._isKeyboardFocused;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'md-button-focus', currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    Wrapper_MdButton.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'mousedown')) {
            var pd_sub_0 = (this.context._setMousedown() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'focus')) {
            var pd_sub_1 = (this.context._setKeyboardFocus() !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_2 = (this.context._removeKeyboardFocus() !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    Wrapper_MdButton.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdButton;
}());
var Wrapper_MdAnchor = (function () {
    function Wrapper_MdAnchor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["c" /* MdAnchor */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdAnchor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdAnchor.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdAnchor.prototype.check_disableRipple = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.disableRipple = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdAnchor.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdAnchor.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdAnchor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdAnchor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_3 = this.context.disabled;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementAttribute(el, 'disabled', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context._isAriaDisabled;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementAttribute(el, 'aria-disabled', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context._isKeyboardFocused;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'md-button-focus', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.tabIndex;
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementProperty(el, 'tabIndex', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_MdAnchor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'mousedown')) {
            var pd_sub_0 = (this.context._setMousedown() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'focus')) {
            var pd_sub_1 = (this.context._setKeyboardFocus() !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_2 = (this.context._removeKeyboardFocus() !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'click')) {
            var pd_sub_3 = (this.context._haltDisabledEvents($event) !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    Wrapper_MdAnchor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdAnchor;
}());
var renderType_MdButton_Host = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdButton_Host0 = (function (_super) {
    __extends(View_MdButton_Host0, _super);
    function View_MdButton_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdButton_Host0, renderType_MdButton_Host, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdButton_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'button', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-button', ''), rootSelector, null);
        this.compView_0 = new View_MdButton0(this.viewUtils, this, 0, this._el_0);
        this._MdButton_0_3 = new Wrapper_MdButton(new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this.compView_0.create(this._MdButton_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray8"](6, 'mousedown', null, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdButton_0_3.context);
    };
    View_MdButton_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["b" /* MdButton */]) && (0 === requestNodeIndex))) {
            return this._MdButton_0_3.context;
        }
        return notFoundResult;
    };
    View_MdButton_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdButton_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this._MdButton_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdButton_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdButton_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdButton_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    View_MdButton_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdButton_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdButton_Host0;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
var MdButtonNgFactory = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('button[md-button], button[md-raised-button], button[md-icon-button], button[md-fab], button[md-mini-fab]', View_MdButton_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["b" /* MdButton */]);
var styles_MdButton = [__WEBPACK_IMPORTED_MODULE_15__button_css_ngstyle__["a" /* styles */]];
var View_MdButton1 = (function (_super) {
    __extends(View_MdButton1, _super);
    function View_MdButton1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_MdButton1, renderType_MdButton, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_MdButton1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'md-button-ripple', 'md-ripple', '', 'mdRippleBackgroundColor', 'rgba(0, 0, 0, 0)'), null);
        this._MdRipple_0_3 = new __WEBPACK_IMPORTED_MODULE_16__core_ripple_ripple_ngfactory__["a" /* Wrapper_MdRipple */](new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */], this.parentIndex));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_MdButton1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_ripple_ripple__["b" /* MdRipple */]) && (0 === requestNodeIndex))) {
            return this._MdRipple_0_3.context;
        }
        return notFoundResult;
    };
    View_MdButton1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context._getHostElement();
        this._MdRipple_0_3.check_trigger(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = (this.parentView.context._isRoundButton() ? 'rgba(255, 255, 255, 0.2)' : '');
        this._MdRipple_0_3.check_color(currVal_0_0_1, throwOnChange, false);
        var currVal_0_0_2 = 'rgba(0, 0, 0, 0)';
        this._MdRipple_0_3.check_backgroundColor(currVal_0_0_2, throwOnChange, false);
        this._MdRipple_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_2 = this.parentView.context._isRoundButton();
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'md-button-ripple-round', currVal_2);
            this._expr_2 = currVal_2;
        }
        this._MdRipple_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_MdButton1.prototype.destroyInternal = function () {
        this._MdRipple_0_3.ngOnDestroy();
    };
    View_MdButton1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdButton1;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdButton = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdButton, {});
var View_MdButton0 = (function (_super) {
    __extends(View_MdButton0, _super);
    function View_MdButton0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdButton0, renderType_MdButton, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdButton0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'span', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-button-wrapper'), null);
        this.projectNodes(this._el_0, 0);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 1, this._anchor_1);
        this._NgIf_1_6 = new __WEBPACK_IMPORTED_MODULE_20__common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_1.vcRef, this._TemplateRef_1_5);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-button-focus-overlay'), null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'touchstart', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._anchor_1,
            this._el_2
        ]), [disposable_0]);
        return null;
    };
    View_MdButton0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        return notFoundResult;
    };
    View_MdButton0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = !this.context._isRippleDisabled();
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
    };
    View_MdButton0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
    };
    View_MdButton0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_MdButton1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    View_MdButton0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'touchstart')) {
            var pd_sub_0 = ($event.preventDefault() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_MdButton0;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdAnchor_Host = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdAnchor_Host0 = (function (_super) {
    __extends(View_MdAnchor_Host0, _super);
    function View_MdAnchor_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdAnchor_Host0, renderType_MdAnchor_Host, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdAnchor_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'a', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'md-button', ''), rootSelector, null);
        this.compView_0 = new View_MdAnchor0(this.viewUtils, this, 0, this._el_0);
        this._MdAnchor_0_3 = new Wrapper_MdAnchor(new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this.compView_0.create(this._MdAnchor_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray8"](8, 'mousedown', null, 'focus', null, 'blur', null, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdAnchor_0_3.context);
    };
    View_MdAnchor_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["c" /* MdAnchor */]) && (0 === requestNodeIndex))) {
            return this._MdAnchor_0_3.context;
        }
        return notFoundResult;
    };
    View_MdAnchor_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdAnchor_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdAnchor_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdAnchor_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdAnchor_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdAnchor_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    View_MdAnchor_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdAnchor_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdAnchor_Host0;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
var MdAnchorNgFactory = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab]', View_MdAnchor_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_button_button__["c" /* MdAnchor */]);
var styles_MdAnchor = [__WEBPACK_IMPORTED_MODULE_15__button_css_ngstyle__["a" /* styles */]];
var View_MdAnchor1 = (function (_super) {
    __extends(View_MdAnchor1, _super);
    function View_MdAnchor1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_MdAnchor1, renderType_MdAnchor, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_MdAnchor1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'md-button-ripple', 'md-ripple', '', 'mdRippleBackgroundColor', 'rgba(0, 0, 0, 0)'), null);
        this._MdRipple_0_3 = new __WEBPACK_IMPORTED_MODULE_16__core_ripple_ripple_ngfactory__["a" /* Wrapper_MdRipple */](new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */], this.parentIndex));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_MdAnchor1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_ripple_ripple__["b" /* MdRipple */]) && (0 === requestNodeIndex))) {
            return this._MdRipple_0_3.context;
        }
        return notFoundResult;
    };
    View_MdAnchor1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context._getHostElement();
        this._MdRipple_0_3.check_trigger(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = (this.parentView.context._isRoundButton() ? 'rgba(255, 255, 255, 0.2)' : '');
        this._MdRipple_0_3.check_color(currVal_0_0_1, throwOnChange, false);
        var currVal_0_0_2 = 'rgba(0, 0, 0, 0)';
        this._MdRipple_0_3.check_backgroundColor(currVal_0_0_2, throwOnChange, false);
        this._MdRipple_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_2 = this.parentView.context._isRoundButton();
        if (__WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'md-button-ripple-round', currVal_2);
            this._expr_2 = currVal_2;
        }
        this._MdRipple_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_MdAnchor1.prototype.destroyInternal = function () {
        this._MdRipple_0_3.ngOnDestroy();
    };
    View_MdAnchor1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdAnchor1;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdAnchor = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdAnchor, {});
var View_MdAnchor0 = (function (_super) {
    __extends(View_MdAnchor0, _super);
    function View_MdAnchor0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdAnchor0, renderType_MdAnchor, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdAnchor0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'span', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-button-wrapper'), null);
        this.projectNodes(this._el_0, 0);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 1, this._anchor_1);
        this._NgIf_1_6 = new __WEBPACK_IMPORTED_MODULE_20__common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_1.vcRef, this._TemplateRef_1_5);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-button-focus-overlay'), null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_utils__["InlineArray2"](2, 'touchstart', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._anchor_1,
            this._el_2
        ]), [disposable_0]);
        return null;
    };
    View_MdAnchor0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        return notFoundResult;
    };
    View_MdAnchor0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = !this.context._isRippleDisabled();
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
    };
    View_MdAnchor0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
    };
    View_MdAnchor0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_MdAnchor1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    View_MdAnchor0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'touchstart')) {
            var pd_sub_0 = ($event.preventDefault() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_MdAnchor0;
}(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/button.ngfactory.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);will-change:box-shadow;display:block;position:relative;padding:24px;border-radius:2px;font-family:Roboto,"Helvetica Neue",sans-serif}@media screen and (-ms-high-contrast:active){md-card{outline:solid 1px}}.md-card-flat{box-shadow:none}md-card-actions,md-card-content,md-card-subtitle,md-card-title{display:block;margin-bottom:16px}md-card-title{font-size:24px;font-weight:400}md-card-content,md-card-header md-card-title,md-card-subtitle{font-size:14px}md-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}md-card-actions[align=end]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}[md-card-image]{width:calc(100% + 48px);margin:0 -24px 16px}[md-card-xl-image]{width:240px;height:240px;margin:-8px}md-card-footer{position:absolute;width:100%;min-height:5px;bottom:0;left:0}md-card-actions [md-button],md-card-actions [md-raised-button]{margin:0 4px}md-card-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:40px;margin:-8px 0 16px}.md-card-header-text{height:40px;margin:0 8px}[md-card-avatar]{height:40px;width:40px;border-radius:50%}[md-card-lg-image],[md-card-md-image],[md-card-sm-image]{margin:-8px 0}md-card-title-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 -8px}[md-card-sm-image]{width:80px;height:80px}[md-card-md-image]{width:112px;height:112px}[md-card-lg-image]{width:152px;height:152px}@media (max-width:600px){md-card{padding:24px 16px}[md-card-image]{width:calc(100% + 32px);margin:16px -16px}md-card-title-group{margin:0}[md-card-xl-image]{margin-left:0;margin-right:0}md-card-header{margin:-8px 0 0}}md-card-content>:first-child,md-card>:first-child{margin-top:0}md-card-content>:last-child,md-card>:last-child{margin-bottom:0}[md-card-image]:first-child{margin-top:-24px}md-card>md-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}md-card-actions [md-button]:first-child,md-card-actions [md-raised-button]:first-child{margin-left:0;margin-right:0}md-card-subtitle:not(:first-child),md-card-title:not(:first-child){margin-top:-4px}md-card-header md-card-subtitle:not(:first-child),md-card>[md-card-xl-image]:first-child{margin-top:-8px}md-card>[md-card-xl-image]:last-child{margin-bottom:-8px}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/card.css.ngstyle.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_core_line_line__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* unused harmony export MdLineModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_MdLine; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var MdLineModuleInjector = (function (_super) {
    __extends(MdLineModuleInjector, _super);
    function MdLineModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdLineModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_2", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_2 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_2 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_2;
        },
        enumerable: true,
        configurable: true
    });
    MdLineModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdLineModule_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_line_line__["a" /* MdLineModule */]();
        return this._MdLineModule_1;
    };
    MdLineModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_core_line_line__["a" /* MdLineModule */])) {
            return this._MdLineModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_2;
        }
        return notFoundResult;
    };
    MdLineModuleInjector.prototype.destroyInternal = function () {
    };
    return MdLineModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdLineModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdLineModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_core_line_line__["a" /* MdLineModule */]);
var Wrapper_MdLine = (function () {
    function Wrapper_MdLine() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_line_line__["b" /* MdLine */]();
    }
    Wrapper_MdLine.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdLine.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdLine.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdLine.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdLine.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdLine.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdLine;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/line.ngfactory.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_core_ripple_ripple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* unused harmony export MdRippleModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_MdRipple; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var MdRippleModuleInjector = (function (_super) {
    __extends(MdRippleModuleInjector, _super);
    function MdRippleModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdRippleModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_2", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_2 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_2 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_2;
        },
        enumerable: true,
        configurable: true
    });
    MdRippleModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdRippleModule_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_ripple_ripple__["a" /* MdRippleModule */]();
        return this._MdRippleModule_1;
    };
    MdRippleModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_core_ripple_ripple__["a" /* MdRippleModule */])) {
            return this._MdRippleModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_2;
        }
        return notFoundResult;
    };
    MdRippleModuleInjector.prototype.destroyInternal = function () {
    };
    return MdRippleModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdRippleModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdRippleModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_core_ripple_ripple__["a" /* MdRippleModule */]);
var Wrapper_MdRipple = (function () {
    function Wrapper_MdRipple(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_core_ripple_ripple__["b" /* MdRipple */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_10 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_11 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_12 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_13 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_14 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_15 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_16 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_17 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_18 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_19 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdRipple.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdRipple.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdRipple.prototype.check_trigger = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.trigger = currValue;
            this._changes['trigger'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__triggerDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context._triggerDeprecated = currValue;
            this._changes['_triggerDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_centered = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.centered = currValue;
            this._changes['centered'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__centeredDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context._centeredDeprecated = currValue;
            this._changes['_centeredDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._changes['disabled'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__disabledDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context._disabledDeprecated = currValue;
            this._changes['_disabledDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_5, currValue);
            this._expr_5 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_maxRadius = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.maxRadius = currValue;
            this._changes['maxRadius'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_6, currValue);
            this._expr_6 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__maxRadiusDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context._maxRadiusDeprecated = currValue;
            this._changes['_maxRadiusDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_7, currValue);
            this._expr_7 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_speedFactor = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currValue))) {
            this._changed = true;
            this.context.speedFactor = currValue;
            this._changes['speedFactor'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_8, currValue);
            this._expr_8 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__speedFactorDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currValue))) {
            this._changed = true;
            this.context._speedFactorDeprecated = currValue;
            this._changes['_speedFactorDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_9, currValue);
            this._expr_9 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_10, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._changes['color'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_10, currValue);
            this._expr_10 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__colorDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_11, currValue))) {
            this._changed = true;
            this.context._colorDeprecated = currValue;
            this._changes['_colorDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_11, currValue);
            this._expr_11 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_backgroundColor = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_12, currValue))) {
            this._changed = true;
            this.context.backgroundColor = currValue;
            this._changes['backgroundColor'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_12, currValue);
            this._expr_12 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__backgroundColorDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_13, currValue))) {
            this._changed = true;
            this.context._backgroundColorDeprecated = currValue;
            this._changes['_backgroundColorDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_13, currValue);
            this._expr_13 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_focused = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_14, currValue))) {
            this._changed = true;
            this.context.focused = currValue;
            this._changes['focused'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_14, currValue);
            this._expr_14 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__focusedDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_15, currValue))) {
            this._changed = true;
            this.context._focusedDeprecated = currValue;
            this._changes['_focusedDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_15, currValue);
            this._expr_15 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check_unbounded = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_16, currValue))) {
            this._changed = true;
            this.context.unbounded = currValue;
            this._changes['unbounded'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_16, currValue);
            this._expr_16 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.check__unboundedDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_17, currValue))) {
            this._changed = true;
            this.context._unboundedDeprecated = currValue;
            this._changes['_unboundedDeprecated'] = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_17, currValue);
            this._expr_17 = currValue;
        }
    };
    Wrapper_MdRipple.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_MdRipple.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_18 = this.context.focused;
        if (__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_18, currVal_18)) {
            view.renderer.setElementClass(el, 'md-ripple-focused', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this.context.unbounded;
        if (__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_19, currVal_19)) {
            view.renderer.setElementClass(el, 'md-ripple-unbounded', currVal_19);
            this._expr_19 = currVal_19;
        }
    };
    Wrapper_MdRipple.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdRipple.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdRipple;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/ripple.ngfactory.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog_dialog_container__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_css_ngstyle__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_core_a11y_focus_trap__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_a11y_focus_trap_ngfactory__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_portal_portal_directives_ngfactory__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_core_a11y_interactivity_checker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* unused harmony export Wrapper_MdDialogContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdDialogContainerNgFactory; });
/* unused harmony export View_MdDialogContainer0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



















var Wrapper_MdDialogContainer = (function () {
    function Wrapper_MdDialogContainer(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog_dialog_container__["a" /* MdDialogContainer */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdDialogContainer.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdDialogContainer.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdDialogContainer.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdDialogContainer.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = ((this.context.dialogConfig == null) ? null : this.context.dialogConfig.role);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementAttribute(el, 'role', ((currVal_0 == null) ? null : currVal_0.toString()));
            this._expr_0 = currVal_0;
        }
    };
    Wrapper_MdDialogContainer.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'keydown.escape')) {
            var pd_sub_0 = (this.context.handleEscapeKey() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_MdDialogContainer.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdDialogContainer;
}());
var renderType_MdDialogContainer_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdDialogContainer_Host0 = (function (_super) {
    __extends(View_MdDialogContainer_Host0, _super);
    function View_MdDialogContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdDialogContainer_Host0, renderType_MdDialogContainer_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdDialogContainer_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-dialog-container', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-dialog-container'), rootSelector, null);
        this.compView_0 = new View_MdDialogContainer0(this.viewUtils, this, 0, this._el_0);
        this._MdDialogContainer_0_3 = new Wrapper_MdDialogContainer(this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this.compView_0.create(this._MdDialogContainer_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'keydown.escape', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdDialogContainer_0_3.context);
    };
    View_MdDialogContainer_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog_dialog_container__["a" /* MdDialogContainer */]) && (0 === requestNodeIndex))) {
            return this._MdDialogContainer_0_3.context;
        }
        return notFoundResult;
    };
    View_MdDialogContainer_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdDialogContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdDialogContainer_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdDialogContainer_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdDialogContainer_0_3.ngOnDestroy();
    };
    View_MdDialogContainer_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdDialogContainer_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdDialogContainer_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdDialogContainer_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var MdDialogContainerNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-dialog-container, mat-dialog-container', View_MdDialogContainer_Host0, __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog_dialog_container__["a" /* MdDialogContainer */]);
var styles_MdDialogContainer = [__WEBPACK_IMPORTED_MODULE_9__dialog_css_ngstyle__["a" /* styles */]];
var View_MdDialogContainer1 = (function (_super) {
    __extends(View_MdDialogContainer1, _super);
    function View_MdDialogContainer1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_MdDialogContainer1, renderType_MdDialogContainer, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_MdDialogContainer1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    View_MdDialogContainer1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdDialogContainer1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdDialogContainer = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdDialogContainer, {});
var View_MdDialogContainer0 = (function (_super) {
    __extends(View_MdDialogContainer0, _super);
    function View_MdDialogContainer0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdDialogContainer0, renderType_MdDialogContainer, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdDialogContainer0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_PortalHostDirective_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_FocusTrap_1 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'cdk-focus-trap', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_13__core_a11y_focus_trap_ngfactory__["a" /* View_FocusTrap0 */](this.viewUtils, this, 0, this._el_0);
        this._FocusTrap_0_3 = new __WEBPACK_IMPORTED_MODULE_13__core_a11y_focus_trap_ngfactory__["b" /* Wrapper_FocusTrap */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_material_core_a11y_interactivity_checker__["a" /* InteractivityChecker */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._vc_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](1, 0, this, this._anchor_1);
        this._TemplateRef_1_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 1, this._anchor_1);
        this._PortalHostDirective_1_6 = new __WEBPACK_IMPORTED_MODULE_14__core_portal_portal_directives_ngfactory__["a" /* Wrapper_PortalHostDirective */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), this._vc_1.vcRef);
        this.compView_0.create(this._FocusTrap_0_3.context);
        this._viewQuery_PortalHostDirective_0.reset([this._PortalHostDirective_1_6.context]);
        this.context._portalHost = this._viewQuery_PortalHostDirective_0.first;
        this._viewQuery_FocusTrap_1.reset([this._FocusTrap_0_3.context]);
        this.context._focusTrap = this._viewQuery_FocusTrap_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._anchor_1
        ]), null);
        return null;
    };
    View_MdDialogContainer0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_material_core_portal_portal_directives__["c" /* PortalHostDirective */]) && (1 === requestNodeIndex))) {
            return this._PortalHostDirective_1_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_material_core_a11y_focus_trap__["a" /* FocusTrap */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._FocusTrap_0_3.context;
        }
        return notFoundResult;
    };
    View_MdDialogContainer0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FocusTrap_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_1_0_0 = '';
        this._PortalHostDirective_1_6.check_portal(currVal_1_0_0, throwOnChange, false);
        this._PortalHostDirective_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdDialogContainer0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this.compView_0.destroy();
        this._PortalHostDirective_1_6.ngOnDestroy();
    };
    View_MdDialogContainer0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._vc_1.nativeElement, ctx);
            this._vc_1.visitNestedViewRootNodes(cb, ctx);
        }
    };
    View_MdDialogContainer0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_MdDialogContainer1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    return View_MdDialogContainer0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/dialog-container.ngfactory.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:block;padding:24px;border-radius:2px;box-sizing:border-box;overflow:auto;max-width:80vw;width:100%;height:100%}@media screen and (-ms-high-contrast:active){md-dialog-container{outline:solid 1px}}[mat-dialog-content],[md-dialog-content],mat-dialog-content,md-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto}[mat-dialog-title],[md-dialog-title]{font-size:20px;font-weight:700;margin:0 0 20px;display:block}[mat-dialog-actions],[md-dialog-actions],mat-dialog-actions,md-dialog-actions{padding:12px 0;display:block}[mat-dialog-actions]:last-child,[md-dialog-actions]:last-child,mat-dialog-actions:last-child,md-dialog-actions:last-child{margin-bottom:-24px}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/dialog.css.ngstyle.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/icon.css.ngstyle.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-list,md-nav-list{padding-top:8px;display:block}md-list [md-subheader],md-nav-list [md-subheader]{display:block;box-sizing:border-box;height:48px;padding:16px;margin:0;font-size:14px;font-weight:500}md-list [md-subheader]:first-child,md-nav-list [md-subheader]:first-child{margin-top:-8px}md-list a[md-list-item],md-list md-list-item,md-nav-list a[md-list-item],md-nav-list md-list-item{display:block}md-list a[md-list-item] .md-list-item,md-list md-list-item .md-list-item,md-nav-list a[md-list-item] .md-list-item,md-nav-list md-list-item .md-list-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Roboto,"Helvetica Neue",sans-serif;box-sizing:border-box;font-size:16px;height:48px;padding:0 16px}md-list a[md-list-item].md-list-avatar .md-list-item,md-list md-list-item.md-list-avatar .md-list-item,md-nav-list a[md-list-item].md-list-avatar .md-list-item,md-nav-list md-list-item.md-list-avatar .md-list-item{height:56px}md-list a[md-list-item].md-2-line .md-list-item,md-list md-list-item.md-2-line .md-list-item,md-nav-list a[md-list-item].md-2-line .md-list-item,md-nav-list md-list-item.md-2-line .md-list-item{height:72px}md-list a[md-list-item].md-3-line .md-list-item,md-list md-list-item.md-3-line .md-list-item,md-nav-list a[md-list-item].md-3-line .md-list-item,md-nav-list md-list-item.md-3-line .md-list-item{height:88px}md-list a[md-list-item].md-multi-line .md-list-item,md-list md-list-item.md-multi-line .md-list-item,md-nav-list a[md-list-item].md-multi-line .md-list-item,md-nav-list md-list-item.md-multi-line .md-list-item{height:100%;padding:8px 16px}md-list a[md-list-item] .md-list-text,md-list md-list-item .md-list-text,md-nav-list a[md-list-item] .md-list-text,md-nav-list md-list-item .md-list-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0 16px}md-list a[md-list-item] .md-list-text>*,md-list md-list-item .md-list-text>*,md-nav-list a[md-list-item] .md-list-text>*,md-nav-list md-list-item .md-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}md-list a[md-list-item] .md-list-text:empty,md-list md-list-item .md-list-text:empty,md-nav-list a[md-list-item] .md-list-text:empty,md-nav-list md-list-item .md-list-text:empty{display:none}md-list a[md-list-item] .md-list-text:first-child,md-list md-list-item .md-list-text:first-child,md-nav-list a[md-list-item] .md-list-text:first-child,md-nav-list md-list-item .md-list-text:first-child{padding:0}md-list a[md-list-item] [md-list-avatar],md-list md-list-item [md-list-avatar],md-nav-list a[md-list-item] [md-list-avatar],md-nav-list md-list-item [md-list-avatar]{-ms-flex-negative:0;flex-shrink:0;width:40px;height:40px;border-radius:50%}md-list a[md-list-item] [md-list-icon],md-list md-list-item [md-list-icon],md-nav-list a[md-list-item] [md-list-icon],md-nav-list md-list-item [md-list-icon]{width:24px;height:24px;border-radius:50%;padding:4px}md-list a[md-list-item] [md-line],md-list md-list-item [md-line],md-nav-list a[md-list-item] [md-line],md-nav-list md-list-item [md-line]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}md-list a[md-list-item] [md-line]:nth-child(n+2),md-list md-list-item [md-line]:nth-child(n+2),md-nav-list a[md-list-item] [md-line]:nth-child(n+2),md-nav-list md-list-item [md-line]:nth-child(n+2){font-size:14px}md-list[dense],md-nav-list[dense]{padding-top:4px;display:block}md-list[dense] [md-subheader],md-nav-list[dense] [md-subheader]{display:block;box-sizing:border-box;height:40px;padding:16px;margin:0;font-size:13px;font-weight:500}md-list[dense] [md-subheader]:first-child,md-nav-list[dense] [md-subheader]:first-child{margin-top:-4px}md-list[dense] a[md-list-item],md-list[dense] md-list-item,md-nav-list[dense] a[md-list-item],md-nav-list[dense] md-list-item{display:block}md-list[dense] a[md-list-item] .md-list-item,md-list[dense] md-list-item .md-list-item,md-nav-list[dense] a[md-list-item] .md-list-item,md-nav-list[dense] md-list-item .md-list-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Roboto,"Helvetica Neue",sans-serif;box-sizing:border-box;font-size:13px;height:40px;padding:0 16px}md-list[dense] a[md-list-item].md-list-avatar .md-list-item,md-list[dense] md-list-item.md-list-avatar .md-list-item,md-nav-list[dense] a[md-list-item].md-list-avatar .md-list-item,md-nav-list[dense] md-list-item.md-list-avatar .md-list-item{height:48px}md-list[dense] a[md-list-item].md-2-line .md-list-item,md-list[dense] md-list-item.md-2-line .md-list-item,md-nav-list[dense] a[md-list-item].md-2-line .md-list-item,md-nav-list[dense] md-list-item.md-2-line .md-list-item{height:60px}md-list[dense] a[md-list-item].md-3-line .md-list-item,md-list[dense] md-list-item.md-3-line .md-list-item,md-nav-list[dense] a[md-list-item].md-3-line .md-list-item,md-nav-list[dense] md-list-item.md-3-line .md-list-item{height:76px}md-list[dense] a[md-list-item].md-multi-line .md-list-item,md-list[dense] md-list-item.md-multi-line .md-list-item,md-nav-list[dense] a[md-list-item].md-multi-line .md-list-item,md-nav-list[dense] md-list-item.md-multi-line .md-list-item{height:100%;padding:8px 16px}md-list[dense] a[md-list-item] .md-list-text,md-list[dense] md-list-item .md-list-text,md-nav-list[dense] a[md-list-item] .md-list-text,md-nav-list[dense] md-list-item .md-list-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0 16px}md-list[dense] a[md-list-item] .md-list-text>*,md-list[dense] md-list-item .md-list-text>*,md-nav-list[dense] a[md-list-item] .md-list-text>*,md-nav-list[dense] md-list-item .md-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}md-list[dense] a[md-list-item] .md-list-text:empty,md-list[dense] md-list-item .md-list-text:empty,md-nav-list[dense] a[md-list-item] .md-list-text:empty,md-nav-list[dense] md-list-item .md-list-text:empty{display:none}md-list[dense] a[md-list-item] .md-list-text:first-child,md-list[dense] md-list-item .md-list-text:first-child,md-nav-list[dense] a[md-list-item] .md-list-text:first-child,md-nav-list[dense] md-list-item .md-list-text:first-child{padding:0}md-list[dense] a[md-list-item] [md-list-avatar],md-list[dense] md-list-item [md-list-avatar],md-nav-list[dense] a[md-list-item] [md-list-avatar],md-nav-list[dense] md-list-item [md-list-avatar]{-ms-flex-negative:0;flex-shrink:0;width:40px;height:40px;border-radius:50%}md-list[dense] a[md-list-item] [md-list-icon],md-list[dense] md-list-item [md-list-icon],md-nav-list[dense] a[md-list-item] [md-list-icon],md-nav-list[dense] md-list-item [md-list-icon]{width:24px;height:24px;border-radius:50%;padding:4px}md-list[dense] a[md-list-item] [md-line],md-list[dense] md-list-item [md-line],md-nav-list[dense] a[md-list-item] [md-line],md-nav-list[dense] md-list-item [md-line]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}md-list[dense] a[md-list-item] [md-line]:nth-child(n+2),md-list[dense] md-list-item [md-line]:nth-child(n+2),md-nav-list[dense] a[md-list-item] [md-line]:nth-child(n+2),md-nav-list[dense] md-list-item [md-line]:nth-child(n+2){font-size:13px}md-divider{display:block;border-top-style:solid;border-top-width:1px;margin:0}md-nav-list a{text-decoration:none;color:inherit}md-nav-list .md-list-item{cursor:pointer}md-nav-list .md-list-item.md-list-item-focus,md-nav-list .md-list-item:hover{outline:0}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/list.css.ngstyle.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core_line_line__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_css_ngstyle__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* unused harmony export MdListModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Wrapper_MdList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdListItem; });
/* unused harmony export Wrapper_MdListDivider */
/* unused harmony export Wrapper_MdListAvatar */
/* unused harmony export MdListNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return View_MdList0; });
/* unused harmony export MdListItemNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdListItem0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};














var MdListModuleInjector = (function (_super) {
    __extends(MdListModuleInjector, _super);
    function MdListModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdListModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_3", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_3 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_3 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_3;
        },
        enumerable: true,
        configurable: true
    });
    MdListModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdLineModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material_core_line_line__["a" /* MdLineModule */]();
        this._MdListModule_2 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["a" /* MdListModule */]();
        return this._MdListModule_2;
    };
    MdListModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_line_line__["a" /* MdLineModule */])) {
            return this._MdLineModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["a" /* MdListModule */])) {
            return this._MdListModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_3;
        }
        return notFoundResult;
    };
    MdListModuleInjector.prototype.destroyInternal = function () {
    };
    return MdListModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdListModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdListModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["a" /* MdListModule */]);
var Wrapper_MdList = (function () {
    function Wrapper_MdList() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["c" /* MdList */]();
    }
    Wrapper_MdList.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdList.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdList.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdList.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdList.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdList.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdList;
}());
var Wrapper_MdListItem = (function () {
    function Wrapper_MdListItem(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["b" /* MdListItem */](p0, p1);
    }
    Wrapper_MdListItem.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdListItem.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdListItem.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdListItem.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdListItem.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'focus')) {
            var pd_sub_0 = (this.context._handleFocus() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context._handleBlur() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_MdListItem.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdListItem;
}());
var Wrapper_MdListDivider = (function () {
    function Wrapper_MdListDivider() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["d" /* MdListDivider */]();
    }
    Wrapper_MdListDivider.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdListDivider.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdListDivider.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdListDivider.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdListDivider.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdListDivider.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdListDivider;
}());
var Wrapper_MdListAvatar = (function () {
    function Wrapper_MdListAvatar() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["e" /* MdListAvatar */]();
    }
    Wrapper_MdListAvatar.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdListAvatar.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdListAvatar.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdListAvatar.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdListAvatar.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdListAvatar.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdListAvatar;
}());
var renderType_MdList_Host = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdList_Host0 = (function (_super) {
    __extends(View_MdList_Host0, _super);
    function View_MdList_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdList_Host0, renderType_MdList_Host, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdList_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-list', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'list'), rootSelector, null);
        this.compView_0 = new View_MdList0(this.viewUtils, this, 0, this._el_0);
        this._MdList_0_3 = new Wrapper_MdList();
        this.compView_0.create(this._MdList_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdList_0_3.context);
    };
    View_MdList_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["c" /* MdList */]) && (0 === requestNodeIndex))) {
            return this._MdList_0_3.context;
        }
        return notFoundResult;
    };
    View_MdList_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdList_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdList_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdList_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdList_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_MdList_Host0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var MdListNgFactory = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-list, mat-list, md-nav-list, mat-nav-list', View_MdList_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["c" /* MdList */]);
var styles_MdList = [__WEBPACK_IMPORTED_MODULE_10__list_css_ngstyle__["a" /* styles */]];
var renderType_MdList = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdList, {});
var View_MdList0 = (function (_super) {
    __extends(View_MdList0, _super);
    function View_MdList0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdList0, renderType_MdList, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdList0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this.projectNodes(parentRenderNode, 0);
        this.init(null, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    return View_MdList0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdListItem_Host = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdListItem_Host0 = (function (_super) {
    __extends(View_MdListItem_Host0, _super);
    function View_MdListItem_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdListItem_Host0, renderType_MdListItem_Host, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdListItem_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-list-item', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'listitem'), rootSelector, null);
        this.compView_0 = new View_MdListItem0(this.viewUtils, this, 0, this._el_0);
        this._MdListItem_0_3 = new Wrapper_MdListItem(this.renderer, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0));
        this._query_MdLine_0_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._query_MdListAvatar_0_1 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this.compView_0.create(this._MdListItem_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray4"](4, 'focus', null, 'blur', null), this.eventHandler(this.handleEvent_0));
        this._query_MdListAvatar_0_1.reset([]);
        this._MdListItem_0_3.context._hasAvatar = this._query_MdListAvatar_0_1.first;
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdListItem_0_3.context);
    };
    View_MdListItem_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["b" /* MdListItem */]) && (0 === requestNodeIndex))) {
            return this._MdListItem_0_3.context;
        }
        return notFoundResult;
    };
    View_MdListItem_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdListItem_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if (this._query_MdLine_0_0.dirty) {
                this._query_MdLine_0_0.reset([]);
                this._MdListItem_0_3.context._lines = this._query_MdLine_0_0;
                this._query_MdLine_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdListItem_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdListItem_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdListItem_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdListItem_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) { }
    };
    View_MdListItem_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdListItem_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdListItem_Host0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var MdListItemNgFactory = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-list-item, mat-list-item, a[md-list-item], a[mat-list-item]', View_MdListItem_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_list_list__["b" /* MdListItem */]);
var styles_MdListItem = [];
var renderType_MdListItem = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 3, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdListItem, {});
var View_MdListItem0 = (function (_super) {
    __extends(View_MdListItem0, _super);
    function View_MdListItem0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdListItem0, renderType_MdListItem, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_MdListItem0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-list-item'), null);
        this.projectNodes(this._el_0, 0);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-list-text'), null);
        this.projectNodes(this._el_1, 1);
        this.projectNodes(this._el_0, 2);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_MdListItem0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context._hasFocus;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'md-list-item-focus', currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    return View_MdListItem0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/list.ngfactory.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['[_nghost-%COMP%]{display:block;height:100px;width:100px;overflow:hidden}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}[_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:transparent;stroke-width:10px}[mode=indeterminate][_nghost-%COMP%]   svg[_ngcontent-%COMP%]{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:md-progress-spinner-sporadic-rotate,md-progress-spinner-linear-rotate;animation-name:md-progress-spinner-sporadic-rotate,md-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transition:none;transition:none}@-webkit-keyframes md-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes md-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes md-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes md-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/progress-spinner.css.shim.ngstyle.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_spinner_css_shim_ngstyle__ = __webpack_require__(559);
/* unused harmony export MdProgressSpinnerModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdProgressSpinner; });
/* unused harmony export Wrapper_MdSpinner */
/* unused harmony export MdProgressSpinnerNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdProgressSpinner0; });
/* unused harmony export MdSpinnerNgFactory */
/* unused harmony export View_MdSpinner0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













var MdProgressSpinnerModuleInjector = (function (_super) {
    __extends(MdProgressSpinnerModuleInjector, _super);
    function MdProgressSpinnerModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdProgressSpinnerModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_2", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_2 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_2 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_2;
        },
        enumerable: true,
        configurable: true
    });
    MdProgressSpinnerModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdProgressSpinnerModule_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["a" /* MdProgressSpinnerModule */]();
        return this._MdProgressSpinnerModule_1;
    };
    MdProgressSpinnerModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["a" /* MdProgressSpinnerModule */])) {
            return this._MdProgressSpinnerModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_2;
        }
        return notFoundResult;
    };
    MdProgressSpinnerModuleInjector.prototype.destroyInternal = function () {
    };
    return MdProgressSpinnerModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdProgressSpinnerModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdProgressSpinnerModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["a" /* MdProgressSpinnerModule */]);
var Wrapper_MdProgressSpinner = (function () {
    function Wrapper_MdProgressSpinner(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["b" /* MdProgressSpinner */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdProgressSpinner.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdProgressSpinner.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdProgressSpinner.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdProgressSpinner.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdProgressSpinner.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdProgressSpinner.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdProgressSpinner.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_3 = this.context._ariaValueMin;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementAttribute(el, 'aria-valuemin', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context._ariaValueMax;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementAttribute(el, 'aria-valuemax', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        var currVal_5 = (this.context.color == 'primary');
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'md-primary', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = (this.context.color == 'accent');
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'md-accent', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = (this.context.color == 'warn');
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currVal_7)) {
            view.renderer.setElementClass(el, 'md-warn', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this.context.value;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementAttribute(el, 'aria-valuenow', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context.mode;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currVal_9)) {
            view.renderer.setElementAttribute(el, 'mode', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
    };
    Wrapper_MdProgressSpinner.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdProgressSpinner.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdProgressSpinner;
}());
var Wrapper_MdSpinner = (function () {
    function Wrapper_MdSpinner(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["c" /* MdSpinner */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdSpinner.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdSpinner.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdSpinner.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdSpinner.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdSpinner.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdSpinner.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdSpinner.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_3 = this.context.value;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementAttribute(el, 'aria-valuenow', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.mode;
        if (__WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementAttribute(el, 'mode', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
    };
    Wrapper_MdSpinner.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdSpinner.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdSpinner;
}());
var renderType_MdProgressSpinner_Host = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdProgressSpinner_Host0 = (function (_super) {
    __extends(View_MdProgressSpinner_Host0, _super);
    function View_MdProgressSpinner_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdProgressSpinner_Host0, renderType_MdProgressSpinner_Host, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdProgressSpinner_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-progress-spinner', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'progressbar'), rootSelector, null);
        this.compView_0 = new View_MdProgressSpinner0(this.viewUtils, this, 0, this._el_0);
        this._MdProgressSpinner_0_3 = new Wrapper_MdProgressSpinner(this.compView_0.ref, this.injectorGet(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0));
        this.compView_0.create(this._MdProgressSpinner_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdProgressSpinner_0_3.context);
    };
    View_MdProgressSpinner_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["b" /* MdProgressSpinner */]) && (0 === requestNodeIndex))) {
            return this._MdProgressSpinner_0_3.context;
        }
        return notFoundResult;
    };
    View_MdProgressSpinner_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdProgressSpinner_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this._MdProgressSpinner_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdProgressSpinner_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdProgressSpinner_0_3.ngOnDestroy();
    };
    View_MdProgressSpinner_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdProgressSpinner_Host0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var MdProgressSpinnerNgFactory = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-progress-spinner, mat-progress-spinner, md-progress-circle, mat-progress-circle', View_MdProgressSpinner_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["b" /* MdProgressSpinner */]);
var styles_MdProgressSpinner = [__WEBPACK_IMPORTED_MODULE_12__progress_spinner_css_shim_ngstyle__["a" /* styles */]];
var renderType_MdProgressSpinner = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_MdProgressSpinner, {});
var View_MdProgressSpinner0 = (function (_super) {
    __extends(View_MdProgressSpinner0, _super);
    function View_MdProgressSpinner0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdProgressSpinner0, renderType_MdProgressSpinner, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdProgressSpinner0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray4"](4, 'preserveAspectRatio', 'xMidYMid meet', 'viewBox', '0 0 100 100'), null);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:path', __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    return View_MdProgressSpinner0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdSpinner_Host = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdSpinner_Host0 = (function (_super) {
    __extends(View_MdSpinner_Host0, _super);
    function View_MdSpinner_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSpinner_Host0, renderType_MdSpinner_Host, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSpinner_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-spinner', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray4"](4, 'mode', 'indeterminate', 'role', 'progressbar'), rootSelector, null);
        this.compView_0 = new View_MdSpinner0(this.viewUtils, this, 0, this._el_0);
        this._MdSpinner_0_3 = new Wrapper_MdSpinner(this.compView_0.ref, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.injectorGet(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this.compView_0.create(this._MdSpinner_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdSpinner_0_3.context);
    };
    View_MdSpinner_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["c" /* MdSpinner */]) && (0 === requestNodeIndex))) {
            return this._MdSpinner_0_3.context;
        }
        return notFoundResult;
    };
    View_MdSpinner_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdSpinner_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdSpinner_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdSpinner_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdSpinner_0_3.ngOnDestroy();
    };
    View_MdSpinner_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdSpinner_Host0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var MdSpinnerNgFactory = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-spinner, mat-spinner', View_MdSpinner_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_progress_spinner_progress_spinner__["c" /* MdSpinner */]);
var styles_MdSpinner = [__WEBPACK_IMPORTED_MODULE_12__progress_spinner_css_shim_ngstyle__["a" /* styles */]];
var renderType_MdSpinner = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_MdSpinner, {});
var View_MdSpinner0 = (function (_super) {
    __extends(View_MdSpinner0, _super);
    function View_MdSpinner0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSpinner0, renderType_MdSpinner, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSpinner0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray4"](4, 'preserveAspectRatio', 'xMidYMid meet', 'viewBox', '0 0 100 100'), null);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:path', __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    return View_MdSpinner0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/progress-spinner.ngfactory.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.md-sidenav-content,md-sidenav{-webkit-transition:-webkit-transform .4s cubic-bezier(.25,.8,.25,1);transition:-webkit-transform .4s cubic-bezier(.25,.8,.25,1);transition:transform .4s cubic-bezier(.25,.8,.25,1);transition:transform .4s cubic-bezier(.25,.8,.25,1), -webkit-transform .4s cubic-bezier(.25,.8,.25,1)}.md-sidenav-backdrop.md-sidenav-shown{-webkit-transition:background-color .4s cubic-bezier(.25,.8,.25,1);transition:background-color .4s cubic-bezier(.25,.8,.25,1)}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/sidenav-transitions.css.ngstyle.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.md-sidenav-container,.md-sidenav-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);display:block}.md-sidenav-container{position:relative;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow:hidden}.md-sidenav-backdrop,.md-sidenav-container[fullscreen]{position:absolute;top:0;bottom:0;right:0;left:0}.md-sidenav-container[fullscreen].md-sidenav-opened{overflow:hidden}.md-sidenav-backdrop{display:block;z-index:2;visibility:hidden}.md-sidenav-backdrop.md-sidenav-shown{visibility:visible}@media screen and (-ms-high-contrast:active){.md-sidenav-backdrop{opacity:.5}}.md-sidenav-content{position:relative;height:100%;overflow:auto}md-sidenav,md-sidenav.md-sidenav-closing{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}md-sidenav{display:block;position:absolute;top:0;bottom:0;z-index:3;min-width:5%;outline:0}md-sidenav.md-sidenav-closed{visibility:hidden}md-sidenav.md-sidenav-opened,md-sidenav.md-sidenav-opening{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav.md-sidenav-opening{visibility:visible}md-sidenav.md-sidenav-end,md-sidenav.md-sidenav-end.md-sidenav-closing{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}md-sidenav.md-sidenav-side{z-index:1}md-sidenav.md-sidenav-end{right:0}md-sidenav.md-sidenav-end.md-sidenav-closed{visibility:hidden}md-sidenav.md-sidenav-end.md-sidenav-opened,md-sidenav.md-sidenav-end.md-sidenav-opening{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav.md-sidenav-end.md-sidenav-opening{visibility:visible}[dir=rtl] md-sidenav,[dir=rtl] md-sidenav.md-sidenav-closing{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}[dir=rtl] md-sidenav.md-sidenav-closed{visibility:hidden}[dir=rtl] md-sidenav.md-sidenav-opened,[dir=rtl] md-sidenav.md-sidenav-opening{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}[dir=rtl] md-sidenav.md-sidenav-opening{visibility:visible}[dir=rtl] md-sidenav.md-sidenav-end{left:0;right:auto;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}[dir=rtl] md-sidenav.md-sidenav-end.md-sidenav-closed{visibility:hidden}[dir=rtl] md-sidenav.md-sidenav-end.md-sidenav-closing{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}[dir=rtl] md-sidenav.md-sidenav-end.md-sidenav-opened,[dir=rtl] md-sidenav.md-sidenav-end.md-sidenav-opening{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}[dir=rtl] md-sidenav.md-sidenav-end.md-sidenav-opening{visibility:visible}.md-sidenav-focus-trap{height:100%}.md-sidenav-focus-trap>.cdk-focus-trap-content{box-sizing:border-box;height:100%;overflow-y:auto;-webkit-transform:translateZ(0);transform:translateZ(0)}.md-sidenav-invalid{display:none}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/sidenav.css.ngstyle.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core_platform_index__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_core_a11y_index__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core_overlay_overlay_directives__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_i18n_tokens__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_core_rtl_dir__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sidenav_css_ngstyle__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sidenav_transitions_css_ngstyle__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_src_directives_ng_style_ngfactory__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_style__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_core_a11y_focus_trap__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__core_a11y_focus_trap_ngfactory__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_core_a11y_interactivity_checker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* unused harmony export MdSidenavModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdSidenavContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Wrapper_MdSidenav; });
/* unused harmony export MdSidenavContainerNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdSidenavContainer0; });
/* unused harmony export MdSidenavNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return View_MdSidenav0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





























var MdSidenavModuleInjector = (function (_super) {
    __extends(MdSidenavModuleInjector, _super);
    function MdSidenavModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdSidenavModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["a" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenavModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_8", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_8 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_8 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_8;
        },
        enumerable: true,
        configurable: true
    });
    MdSidenavModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._DefaultStyleCompatibilityModeModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._PlatformModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_material_core_platform_index__["a" /* PlatformModule */]();
        this._A11yModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_material_core_a11y_index__["a" /* A11yModule */]();
        this._PortalModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_material_core_portal_portal_directives__["a" /* PortalModule */]();
        this._OverlayModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */]();
        this._MdSidenavModule_6 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["a" /* MdSidenavModule */]();
        return this._MdSidenavModule_6;
    };
    MdSidenavModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_platform_index__["a" /* PlatformModule */])) {
            return this._PlatformModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_material_core_a11y_index__["a" /* A11yModule */])) {
            return this._A11yModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_material_core_portal_portal_directives__["a" /* PortalModule */])) {
            return this._PortalModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */])) {
            return this._OverlayModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["a" /* MdSidenavModule */])) {
            return this._MdSidenavModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_8;
        }
        return notFoundResult;
    };
    MdSidenavModuleInjector.prototype.destroyInternal = function () {
    };
    return MdSidenavModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdSidenavModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdSidenavModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["a" /* MdSidenavModule */]);
var Wrapper_MdSidenavContainer = (function () {
    function Wrapper_MdSidenavContainer(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["c" /* MdSidenavContainer */](p0, p1, p2);
    }
    Wrapper_MdSidenavContainer.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdSidenavContainer.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_MdSidenavContainer.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdSidenavContainer.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdSidenavContainer.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdSidenavContainer.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onBackdropClicked.subscribe(_eventHandler.bind(view, 'backdrop-clicked')));
        }
    };
    return Wrapper_MdSidenavContainer;
}());
var Wrapper_MdSidenav = (function () {
    function Wrapper_MdSidenav(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["b" /* MdSidenav */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_10 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_11 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_12 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdSidenav.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdSidenav.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
        (this.subscription3 && this.subscription3.unsubscribe());
        (this.subscription4 && this.subscription4.unsubscribe());
    };
    Wrapper_MdSidenav.prototype.check_align = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.align = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdSidenav.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdSidenav.prototype.check_opened = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.opened = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdSidenav.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdSidenav.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_3 = null;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementAttribute(el, 'align', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context._isClosed;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'md-sidenav-closed', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context._isClosing;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'md-sidenav-closing', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context._isEnd;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'md-sidenav-end', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this.context._isOpened;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currVal_7)) {
            view.renderer.setElementClass(el, 'md-sidenav-opened', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this.context._isOpening;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementClass(el, 'md-sidenav-opening', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context._modeOver;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currVal_9)) {
            view.renderer.setElementClass(el, 'md-sidenav-over', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this.context._modePush;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_10, currVal_10)) {
            view.renderer.setElementClass(el, 'md-sidenav-push', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this.context._modeSide;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_11, currVal_11)) {
            view.renderer.setElementClass(el, 'md-sidenav-side', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = !this.context.valid;
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_12, currVal_12)) {
            view.renderer.setElementClass(el, 'md-sidenav-invalid', currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    Wrapper_MdSidenav.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'transitionend')) {
            var pd_sub_0 = (this.context._onTransitionEnd($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keydown')) {
            var pd_sub_1 = (this.context.handleKeydown($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_MdSidenav.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2, emit3, emit4) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onOpenStart.subscribe(_eventHandler.bind(view, 'open-start')));
        }
        if (emit1) {
            (this.subscription1 = this.context.onOpen.subscribe(_eventHandler.bind(view, 'open')));
        }
        if (emit2) {
            (this.subscription2 = this.context.onCloseStart.subscribe(_eventHandler.bind(view, 'close-start')));
        }
        if (emit3) {
            (this.subscription3 = this.context.onClose.subscribe(_eventHandler.bind(view, 'close')));
        }
        if (emit4) {
            (this.subscription4 = this.context.onAlignChanged.subscribe(_eventHandler.bind(view, 'align-changed')));
        }
    };
    return Wrapper_MdSidenav;
}());
var renderType_MdSidenavContainer_Host = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdSidenavContainer_Host0 = (function (_super) {
    __extends(View_MdSidenavContainer_Host0, _super);
    function View_MdSidenavContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSidenavContainer_Host0, renderType_MdSidenavContainer_Host, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSidenavContainer_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-sidenav-container', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-sidenav-container'), rootSelector, null);
        this.compView_0 = new View_MdSidenavContainer0(this.viewUtils, this, 0, this._el_0);
        this._MdSidenavContainer_0_3 = new Wrapper_MdSidenavContainer(this.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_material_core_rtl_dir__["b" /* Dir */], this.parentIndex, null), new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this._query_MdSidenav_0_0 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this.compView_0.create(this._MdSidenavContainer_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdSidenavContainer_0_3.context);
    };
    View_MdSidenavContainer_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["c" /* MdSidenavContainer */]) && (0 === requestNodeIndex))) {
            return this._MdSidenavContainer_0_3.context;
        }
        return notFoundResult;
    };
    View_MdSidenavContainer_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdSidenavContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if (this._query_MdSidenav_0_0.dirty) {
                this._query_MdSidenav_0_0.reset([]);
                this._MdSidenavContainer_0_3.context._sidenavs = this._query_MdSidenav_0_0;
                this._query_MdSidenav_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._MdSidenavContainer_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdSidenavContainer_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdSidenavContainer_0_3.ngOnDestroy();
    };
    View_MdSidenavContainer_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdSidenavContainer_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
    };
    return View_MdSidenavContainer_Host0;
}(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view__["a" /* AppView */]));
var MdSidenavContainerNgFactory = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-sidenav-container, mat-sidenav-container, md-sidenav-layout, mat-sidenav-layout', View_MdSidenavContainer_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["c" /* MdSidenavContainer */]);
var styles_MdSidenavContainer = [
    __WEBPACK_IMPORTED_MODULE_20__sidenav_css_ngstyle__["a" /* styles */],
    __WEBPACK_IMPORTED_MODULE_21__sidenav_transitions_css_ngstyle__["a" /* styles */]
];
var renderType_MdSidenavContainer = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 2, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdSidenavContainer, {});
var View_MdSidenavContainer0 = (function (_super) {
    __extends(View_MdSidenavContainer0, _super);
    function View_MdSidenavContainer0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSidenavContainer0, renderType_MdSidenavContainer, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_MdSidenavContainer0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-sidenav-backdrop'), null);
        this.projectNodes(parentRenderNode, 0);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-sidenav-content'), null);
        this._NgStyle_1_3 = new __WEBPACK_IMPORTED_MODULE_22__common_src_directives_ng_style_ngfactory__["a" /* Wrapper_NgStyle */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_23__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_1), this.renderer);
        this.projectNodes(this._el_1, 1);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_MdSidenavContainer0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_style__["a" /* NgStyle */]) && (1 === requestNodeIndex))) {
            return this._NgStyle_1_3.context;
        }
        return notFoundResult;
    };
    View_MdSidenavContainer0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.context._getStyles();
        this._NgStyle_1_3.check_ngStyle(currVal_1_0_0, throwOnChange, false);
        this._NgStyle_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_3 = this.context._isShowingBackdrop();
        if (__WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_0, 'md-sidenav-shown', currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_MdSidenavContainer0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context._onBackdropClicked() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_MdSidenavContainer0;
}(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdSidenav_Host = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdSidenav_Host0 = (function (_super) {
    __extends(View_MdSidenav_Host0, _super);
    function View_MdSidenav_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSidenav_Host0, renderType_MdSidenav_Host, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSidenav_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-sidenav', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'tabIndex', '-1'), rootSelector, null);
        this.compView_0 = new View_MdSidenav0(this.viewUtils, this, 0, this._el_0);
        this._MdSidenav_0_3 = new Wrapper_MdSidenav(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this.compView_0.create(this._MdSidenav_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray4"](4, 'transitionend', null, 'keydown', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdSidenav_0_3.context);
    };
    View_MdSidenav_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["b" /* MdSidenav */]) && (0 === requestNodeIndex))) {
            return this._MdSidenav_0_3.context;
        }
        return notFoundResult;
    };
    View_MdSidenav_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdSidenav_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._MdSidenav_0_3.context.ngAfterContentInit();
            }
        }
        this._MdSidenav_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdSidenav_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdSidenav_0_3.ngOnDestroy();
    };
    View_MdSidenav_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdSidenav_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    View_MdSidenav_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdSidenav_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdSidenav_Host0;
}(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view__["a" /* AppView */]));
var MdSidenavNgFactory = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-sidenav, mat-sidenav', View_MdSidenav_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav_sidenav__["b" /* MdSidenav */]);
var styles_MdSidenav = [];
var renderType_MdSidenav = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 1, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdSidenav, {});
var View_MdSidenav0 = (function (_super) {
    __extends(View_MdSidenav0, _super);
    function View_MdSidenav0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSidenav0, renderType_MdSidenav, __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdSidenav0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_FocusTrap_0 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._el_0 = __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'cdk-focus-trap', new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-sidenav-focus-trap'), null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_26__core_a11y_focus_trap_ngfactory__["a" /* View_FocusTrap0 */](this.viewUtils, this, 0, this._el_0);
        this._FocusTrap_0_3 = new __WEBPACK_IMPORTED_MODULE_26__core_a11y_focus_trap_ngfactory__["b" /* Wrapper_FocusTrap */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_27__angular_material_core_a11y_interactivity_checker__["a" /* InteractivityChecker */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_28__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this.compView_0.create(this._FocusTrap_0_3.context);
        this._viewQuery_FocusTrap_0.reset([this._FocusTrap_0_3.context]);
        this.context._focusTrap = this._viewQuery_FocusTrap_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_MdSidenav0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_material_core_a11y_focus_trap__["a" /* FocusTrap */]) && (0 === requestNodeIndex))) {
            return this._FocusTrap_0_3.context;
        }
        return notFoundResult;
    };
    View_MdSidenav0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.isFocusTrapDisabled;
        this._FocusTrap_0_3.check_disabled(currVal_0_0_0, throwOnChange, false);
        this._FocusTrap_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdSidenav0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdSidenav0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            this.visitProjectedNodes(0, cb, ctx);
        }
    };
    return View_MdSidenav0;
}(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/sidenav.ngfactory.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-simple-snackbar[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.md-simple-snackbar-message[_ngcontent-%COMP%]{box-sizing:border-box;border:none;color:#fff;font-family:Roboto,\'Helvetica Neue\',sans-serif;font-size:14px;line-height:20px;outline:0;text-decoration:none;word-break:break-all}.md-simple-snackbar-action[_ngcontent-%COMP%]{box-sizing:border-box;color:#fff;float:right;font-weight:600;line-height:20px;margin:-5px 0 0 48px;min-width:initial;padding:5px;text-transform:uppercase}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/simple-snack-bar.css.shim.ngstyle.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_simple_snack_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__simple_snack_bar_css_shim_ngstyle__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_src_directives_ng_if_ngfactory__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__ = __webpack_require__(107);
/* unused harmony export Wrapper_SimpleSnackBar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleSnackBarNgFactory; });
/* unused harmony export View_SimpleSnackBar0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













var Wrapper_SimpleSnackBar = (function () {
    function Wrapper_SimpleSnackBar() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_simple_snack_bar__["a" /* SimpleSnackBar */]();
    }
    Wrapper_SimpleSnackBar.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SimpleSnackBar.prototype.ngOnDestroy = function () {
    };
    Wrapper_SimpleSnackBar.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SimpleSnackBar.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SimpleSnackBar.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SimpleSnackBar.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SimpleSnackBar;
}());
var renderType_SimpleSnackBar_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_SimpleSnackBar_Host0 = (function (_super) {
    __extends(View_SimpleSnackBar_Host0, _super);
    function View_SimpleSnackBar_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SimpleSnackBar_Host0, renderType_SimpleSnackBar_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_SimpleSnackBar_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'simple-snack-bar', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_SimpleSnackBar0(this.viewUtils, this, 0, this._el_0);
        this._SimpleSnackBar_0_3 = new Wrapper_SimpleSnackBar();
        this.compView_0.create(this._SimpleSnackBar_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._SimpleSnackBar_0_3.context);
    };
    View_SimpleSnackBar_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_simple_snack_bar__["a" /* SimpleSnackBar */]) && (0 === requestNodeIndex))) {
            return this._SimpleSnackBar_0_3.context;
        }
        return notFoundResult;
    };
    View_SimpleSnackBar_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SimpleSnackBar_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SimpleSnackBar_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SimpleSnackBar_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SimpleSnackBar_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var SimpleSnackBarNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('simple-snack-bar', View_SimpleSnackBar_Host0, __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_simple_snack_bar__["a" /* SimpleSnackBar */]);
var styles_SimpleSnackBar = [__WEBPACK_IMPORTED_MODULE_7__simple_snack_bar_css_shim_ngstyle__["a" /* styles */]];
var View_SimpleSnackBar1 = (function (_super) {
    __extends(View_SimpleSnackBar1, _super);
    function View_SimpleSnackBar1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SimpleSnackBar1, renderType_SimpleSnackBar, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_SimpleSnackBar1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'md-simple-snackbar-action', 'md-button', ''), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_SimpleSnackBar1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.action, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_SimpleSnackBar1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SimpleSnackBar1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.dismiss() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SimpleSnackBar1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_SimpleSnackBar = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_SimpleSnackBar, {});
var View_SimpleSnackBar0 = (function (_super) {
    __extends(View_SimpleSnackBar0, _super);
    function View_SimpleSnackBar0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SimpleSnackBar0, renderType_SimpleSnackBar, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_SimpleSnackBar0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-simple-snackbar-message'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, ' ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_3 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__["a" /* ViewContainer */](3, null, this, this._anchor_3);
        this._TemplateRef_3_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 3, this._anchor_3);
        this._NgIf_3_6 = new __WEBPACK_IMPORTED_MODULE_10__common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_3.vcRef, this._TemplateRef_3_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._anchor_3
        ]), null);
        return null;
    };
    View_SimpleSnackBar0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        return notFoundResult;
    };
    View_SimpleSnackBar0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.hasAction;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        var currVal_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.message, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_1, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_SimpleSnackBar0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
    };
    View_SimpleSnackBar0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_SimpleSnackBar1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_SimpleSnackBar0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/simple-snack-bar.ngfactory.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['[_nghost-%COMP%]{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background:#323232;border-radius:2px;box-sizing:content-box;display:block;height:20px;max-width:568px;min-width:288px;overflow:hidden;padding:14px 24px;-webkit-transform:translateY(100%);transform:translateY(100%)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border:1px solid}}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/snack-bar-container.css.shim.ngstyle.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_snack_bar_container__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_zone_ng_zone__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__snack_bar_container_css_shim_ngstyle__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_transition__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_sequence_player__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_keyframe__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_player__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_portal_portal_directives_ngfactory__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* unused harmony export Wrapper_MdSnackBarContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdSnackBarContainerNgFactory; });
/* unused harmony export View_MdSnackBarContainer0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






















var Wrapper_MdSnackBarContainer = (function () {
    function Wrapper_MdSnackBarContainer(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_snack_bar_container__["a" /* MdSnackBarContainer */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdSnackBarContainer.prototype.ngOnDetach = function (view, componentView, el) {
        var animationTransition_state = componentView.componentType.animations['state'](view, el, this._expr_0, 'void');
        animationTransition_state.onDone((this._eventHandler || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["noop"]).bind(view, '@state.done'));
    };
    Wrapper_MdSnackBarContainer.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdSnackBarContainer.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdSnackBarContainer.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.animationState;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            var animationTransition_state = componentView.componentType.animations['state'](view, el, ((this._expr_0 == __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */]) ? 'void' : this._expr_0), ((currVal_0 == __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */]) ? 'void' : currVal_0));
            animationTransition_state.onDone((this._eventHandler || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["noop"]).bind(view, '@state.done'));
            this._expr_0 = currVal_0;
        }
    };
    Wrapper_MdSnackBarContainer.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == '@state.done')) {
            var pd_sub_0 = (this.context.onAnimationEnd($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_MdSnackBarContainer.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdSnackBarContainer;
}());
var renderType_MdSnackBarContainer_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdSnackBarContainer_Host0 = (function (_super) {
    __extends(View_MdSnackBarContainer_Host0, _super);
    function View_MdSnackBarContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSnackBarContainer_Host0, renderType_MdSnackBarContainer_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSnackBarContainer_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'snack-bar-container', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'role', 'alert'), rootSelector, null);
        this.compView_0 = new View_MdSnackBarContainer0(this.viewUtils, this, 0, this._el_0);
        this._MdSnackBarContainer_0_3 = new Wrapper_MdSnackBarContainer(this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_zone_ng_zone__["a" /* NgZone */], this.parentIndex));
        this.compView_0.create(this._MdSnackBarContainer_0_3.context);
        this._MdSnackBarContainer_0_3.subscribe(this, this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdSnackBarContainer_0_3.context);
    };
    View_MdSnackBarContainer_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_snack_bar_container__["a" /* MdSnackBarContainer */]) && (0 === requestNodeIndex))) {
            return this._MdSnackBarContainer_0_3.context;
        }
        return notFoundResult;
    };
    View_MdSnackBarContainer_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdSnackBarContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._MdSnackBarContainer_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdSnackBarContainer_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MdSnackBarContainer_0_3.ngOnDestroy();
    };
    View_MdSnackBarContainer_Host0.prototype.detachInternal = function () {
        this._MdSnackBarContainer_0_3.ngOnDetach(this, this.compView_0, this._el_0);
    };
    View_MdSnackBarContainer_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdSnackBarContainer_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._MdSnackBarContainer_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_MdSnackBarContainer_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var MdSnackBarContainerNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('snack-bar-container', View_MdSnackBarContainer_Host0, __WEBPACK_IMPORTED_MODULE_0__angular_material_snack_bar_snack_bar_container__["a" /* MdSnackBarContainer */]);
var styles_MdSnackBarContainer = [__WEBPACK_IMPORTED_MODULE_9__snack_bar_container_css_shim_ngstyle__["a" /* styles */]];
var MdSnackBarContainer_state_states = {
    'initial': { 'transform': 'translateY(100%)' },
    'visible': { 'transform': 'translateY(0%)' },
    'complete': { 'transform': 'translateY(100%)' },
    '*': {},
    'void': {}
};
function MdSnackBarContainer_state_factory(view, element, currentState, nextState) {
    var previousPlayers = view.animationContext.getAnimationPlayers(element, ((nextState == 'void') ? null : 'state'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = MdSnackBarContainer_state_states['*'];
    var startStateStyles = MdSnackBarContainer_state_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = MdSnackBarContainer_state_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    if (((player == null) && ((currentState == 'visible') && (nextState == 'complete')))) {
        player = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 195, 0, 'cubic-bezier(0.0,0.0,0.2,1)', previousPlayers)]);
        totalTime = 195;
    }
    if (((player == null) && (((currentState == 'initial') && (nextState == 'visible')) || ((currentState == 'void') && (nextState == 'visible'))))) {
        player = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 225, 0, 'cubic-bezier(0.4,0.0,1,1)', previousPlayers)]);
        totalTime = 225;
    }
    if ((player == null)) {
        (player = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_player__["a" /* NoOpAnimationPlayer */]());
    }
    player.onDone(function () {
        player.destroy();
        __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["a" /* prepareFinalAnimationStyles */](startStateStyles, endStateStyles));
    });
    new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */](previousPlayers).destroy();
    __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_style_util__["d" /* clearStyles */](startStateStyles));
    view.animationContext.queueAnimation(element, 'state', player);
    return new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_transition__["a" /* AnimationTransition */](player, currentState, nextState, totalTime);
}
var View_MdSnackBarContainer1 = (function (_super) {
    __extends(View_MdSnackBarContainer1, _super);
    function View_MdSnackBarContainer1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_MdSnackBarContainer1, renderType_MdSnackBarContainer, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_MdSnackBarContainer1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    View_MdSnackBarContainer1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MdSnackBarContainer1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_MdSnackBarContainer = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_MdSnackBarContainer, { 'state': MdSnackBarContainer_state_factory });
var View_MdSnackBarContainer0 = (function (_super) {
    __extends(View_MdSnackBarContainer0, _super);
    function View_MdSnackBarContainer0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdSnackBarContainer0, renderType_MdSnackBarContainer, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdSnackBarContainer0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_PortalHostDirective_0 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 0, this._anchor_0);
        this._PortalHostDirective_0_6 = new __WEBPACK_IMPORTED_MODULE_18__core_portal_portal_directives_ngfactory__["a" /* Wrapper_PortalHostDirective */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), this._vc_0.vcRef);
        this._viewQuery_PortalHostDirective_0.reset([this._PortalHostDirective_0_6.context]);
        this.context._portalHost = this._viewQuery_PortalHostDirective_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_MdSnackBarContainer0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_material_core_portal_portal_directives__["c" /* PortalHostDirective */]) && (0 === requestNodeIndex))) {
            return this._PortalHostDirective_0_6.context;
        }
        return notFoundResult;
    };
    View_MdSnackBarContainer0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = '';
        this._PortalHostDirective_0_6.check_portal(currVal_0_0_0, throwOnChange, false);
        this._PortalHostDirective_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_MdSnackBarContainer0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._PortalHostDirective_0_6.ngOnDestroy();
    };
    View_MdSnackBarContainer0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_MdSnackBarContainer1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_MdSnackBarContainer0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/snack-bar-container.ngfactory.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['md-toolbar,md-toolbar md-toolbar-row{display:-webkit-box;display:-ms-flexbox;display:flex;box-sizing:border-box;width:100%}md-toolbar{font-size:20px;font-weight:400;font-family:Roboto,"Helvetica Neue",sans-serif;padding:0 16px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:64px}md-toolbar md-toolbar-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}md-toolbar-row{height:64px}@media (max-width:600px) and (orientation:portrait){md-toolbar{min-height:56px}md-toolbar-row{height:56px}}@media (max-width:960px) and (orientation:landscape){md-toolbar{min-height:48px}md-toolbar-row{height:48px}}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/toolbar.css.ngstyle.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_element_ref__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbar_css_ngstyle__ = __webpack_require__(568);
/* unused harmony export MdToolbarModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_MdToolbar; });
/* unused harmony export Wrapper_MdToolbarRow */
/* unused harmony export MdToolbarNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_MdToolbar0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};












var MdToolbarModuleInjector = (function (_super) {
    __extends(MdToolbarModuleInjector, _super);
    function MdToolbarModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MdToolbarModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_2", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_2 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_2 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_2;
        },
        enumerable: true,
        configurable: true
    });
    MdToolbarModuleInjector.prototype.createInternal = function () {
        this._DefaultStyleCompatibilityModeModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdToolbarModule_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["a" /* MdToolbarModule */]();
        return this._MdToolbarModule_1;
    };
    MdToolbarModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["a" /* MdToolbarModule */])) {
            return this._MdToolbarModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_2;
        }
        return notFoundResult;
    };
    MdToolbarModuleInjector.prototype.destroyInternal = function () {
    };
    return MdToolbarModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdToolbarModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdToolbarModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["a" /* MdToolbarModule */]);
var Wrapper_MdToolbar = (function () {
    function Wrapper_MdToolbar(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["b" /* MdToolbar */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdToolbar.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdToolbar.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdToolbar.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdToolbar.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdToolbar.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdToolbar.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdToolbar.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdToolbar;
}());
var Wrapper_MdToolbarRow = (function () {
    function Wrapper_MdToolbarRow() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["c" /* MdToolbarRow */]();
    }
    Wrapper_MdToolbarRow.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdToolbarRow.prototype.ngOnDestroy = function () {
    };
    Wrapper_MdToolbarRow.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdToolbarRow.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdToolbarRow.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MdToolbarRow.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdToolbarRow;
}());
var renderType_MdToolbar_Host = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_MdToolbar_Host0 = (function (_super) {
    __extends(View_MdToolbar_Host0, _super);
    function View_MdToolbar_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdToolbar_Host0, renderType_MdToolbar_Host, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_MdToolbar_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-toolbar', __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_MdToolbar0(this.viewUtils, this, 0, this._el_0);
        this._MdToolbar_0_3 = new Wrapper_MdToolbar(new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this.compView_0.create(this._MdToolbar_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._MdToolbar_0_3.context);
    };
    View_MdToolbar_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["b" /* MdToolbar */]) && (0 === requestNodeIndex))) {
            return this._MdToolbar_0_3.context;
        }
        return notFoundResult;
    };
    View_MdToolbar_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._MdToolbar_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MdToolbar_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_MdToolbar_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_MdToolbar_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
    };
    return View_MdToolbar_Host0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
var MdToolbarNgFactory = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-toolbar, mat-toolbar', View_MdToolbar_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["b" /* MdToolbar */]);
var styles_MdToolbar = [__WEBPACK_IMPORTED_MODULE_11__toolbar_css_ngstyle__["a" /* styles */]];
var renderType_MdToolbar = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 2, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, styles_MdToolbar, {});
var View_MdToolbar0 = (function (_super) {
    __extends(View_MdToolbar0, _super);
    function View_MdToolbar0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_MdToolbar0, renderType_MdToolbar, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckOnce);
    }
    View_MdToolbar0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-toolbar-layout'), null);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'md-toolbar-row', __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._MdToolbarRow_1_3 = new Wrapper_MdToolbarRow();
        this.projectNodes(this._el_1, 0);
        this.projectNodes(this._el_0, 1);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_MdToolbar0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar_toolbar__["c" /* MdToolbarRow */]) && (1 === requestNodeIndex))) {
            return this._MdToolbarRow_1_3.context;
        }
        return notFoundResult;
    };
    View_MdToolbar0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MdToolbarRow_1_3.ngDoCheck(this, this._el_1, throwOnChange);
    };
    return View_MdToolbar0;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/toolbar.ngfactory.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['[_nghost-%COMP%]{pointer-events:none}.md-tooltip[_ngcontent-%COMP%]{color:#fff;padding:0 8px;border-radius:2px;font-family:Roboto,"Helvetica Neue",sans-serif;font-size:10px;margin:14px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.md-tooltip[_ngcontent-%COMP%]{outline:solid 1px}}'];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/tooltip.css.shim.ngstyle.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_portal_portal_directives__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core_overlay_overlay_directives__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core_compatibility_default_mode__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_metadata_view__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_component_factory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_core_rtl_dir__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tooltip_css_shim_ngstyle__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_transition__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_sequence_player__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_keyframe__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_animation_animation_player__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_security__ = __webpack_require__(113);
/* unused harmony export MdTooltipModuleNgFactory */
/* unused harmony export Wrapper_MdTooltip */
/* unused harmony export Wrapper_TooltipComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponentNgFactory; });
/* unused harmony export View_TooltipComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





















var MdTooltipModuleInjector = (function (_super) {
    __extends(MdTooltipModuleInjector, _super);
    function MdTooltipModuleInjector(parent) {
        _super.call(this, parent, [TooltipComponentNgFactory], []);
    }
    Object.defineProperty(MdTooltipModuleInjector.prototype, "_MATERIAL_COMPATIBILITY_MODE_4", {
        get: function () {
            if ((this.__MATERIAL_COMPATIBILITY_MODE_4 == null)) {
                (this.__MATERIAL_COMPATIBILITY_MODE_4 = false);
            }
            return this.__MATERIAL_COMPATIBILITY_MODE_4;
        },
        enumerable: true,
        configurable: true
    });
    MdTooltipModuleInjector.prototype.createInternal = function () {
        this._PortalModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_material_core_portal_portal_directives__["a" /* PortalModule */]();
        this._OverlayModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */]();
        this._DefaultStyleCompatibilityModeModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */]();
        this._MdTooltipModule_3 = new __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["a" /* MdTooltipModule */]();
        return this._MdTooltipModule_3;
    };
    MdTooltipModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_material_core_portal_portal_directives__["a" /* PortalModule */])) {
            return this._PortalModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_material_core_overlay_overlay_directives__["a" /* OverlayModule */])) {
            return this._OverlayModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_compatibility_default_mode__["a" /* DefaultStyleCompatibilityModeModule */])) {
            return this._DefaultStyleCompatibilityModeModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["a" /* MdTooltipModule */])) {
            return this._MdTooltipModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material_core_compatibility_default_mode__["b" /* MATERIAL_COMPATIBILITY_MODE */])) {
            return this._MATERIAL_COMPATIBILITY_MODE_4;
        }
        return notFoundResult;
    };
    MdTooltipModuleInjector.prototype.destroyInternal = function () {
    };
    return MdTooltipModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var MdTooltipModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](MdTooltipModuleInjector, __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["a" /* MdTooltipModule */]);
var Wrapper_MdTooltip = (function () {
    function Wrapper_MdTooltip(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["b" /* MdTooltip */](p0, p1, p2, p3, p4);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_MdTooltip.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MdTooltip.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_MdTooltip.prototype.check_position = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.position = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.check__positionDeprecated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context._positionDeprecated = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.check_showDelay = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.showDelay = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.check_hideDelay = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.hideDelay = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.check_message = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.message = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.check__deprecatedMessage = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context._deprecatedMessage = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_MdTooltip.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MdTooltip.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MdTooltip.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'longpress')) {
            var pd_sub_0 = (this.context.show() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'touchend')) {
            var pd_sub_1 = (this.context.hide(1500) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'mouseenter')) {
            var pd_sub_2 = (this.context.show() !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'mouseleave')) {
            var pd_sub_3 = (this.context.hide() !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    Wrapper_MdTooltip.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MdTooltip;
}());
var Wrapper_TooltipComponent = (function () {
    function Wrapper_TooltipComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["c" /* TooltipComponent */](p0);
    }
    Wrapper_TooltipComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TooltipComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_TooltipComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_TooltipComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TooltipComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'body:click')) {
            var pd_sub_0 = (this.context._handleBodyInteraction() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_TooltipComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TooltipComponent;
}());
var renderType_TooltipComponent_Host = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_TooltipComponent_Host0 = (function (_super) {
    __extends(View_TooltipComponent_Host0, _super);
    function View_TooltipComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TooltipComponent_Host0, renderType_TooltipComponent_Host, __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_TooltipComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'md-tooltip-component', __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_TooltipComponent0(this.viewUtils, this, 0, this._el_0);
        this._TooltipComponent_0_3 = new Wrapper_TooltipComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_material_core_rtl_dir__["b" /* Dir */], this.parentIndex, null));
        this.compView_0.create(this._TooltipComponent_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', 'body'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._TooltipComponent_0_3.context);
    };
    View_TooltipComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["c" /* TooltipComponent */]) && (0 === requestNodeIndex))) {
            return this._TooltipComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TooltipComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TooltipComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TooltipComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TooltipComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TooltipComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._TooltipComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_TooltipComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view__["a" /* AppView */]));
var TooltipComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('md-tooltip-component, mat-tooltip-component', View_TooltipComponent_Host0, __WEBPACK_IMPORTED_MODULE_1__angular_material_tooltip_tooltip__["c" /* TooltipComponent */]);
var styles_TooltipComponent = [__WEBPACK_IMPORTED_MODULE_13__tooltip_css_shim_ngstyle__["a" /* styles */]];
var TooltipComponent_state_states = {
    'void': { 'transform': 'scale(0)' },
    'initial': { 'transform': 'scale(0)' },
    'visible': { 'transform': 'scale(1)' },
    'hidden': { 'transform': 'scale(0)' },
    '*': {}
};
function TooltipComponent_state_factory(view, element, currentState, nextState) {
    var previousPlayers = view.animationContext.getAnimationPlayers(element, ((nextState == 'void') ? null : 'state'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = TooltipComponent_state_states['*'];
    var startStateStyles = TooltipComponent_state_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = TooltipComponent_state_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    if (((player == null) && (true && (nextState == 'visible')))) {
        player = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 150, 0, 'cubic-bezier(0.0, 0.0, 0.2, 1)', previousPlayers)]);
        totalTime = 150;
    }
    if (((player == null) && (true && (nextState == 'hidden')))) {
        player = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 150, 0, 'cubic-bezier(0.4, 0.0, 1, 1)', previousPlayers)]);
        totalTime = 150;
    }
    if ((player == null)) {
        (player = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_animation_animation_player__["a" /* NoOpAnimationPlayer */]());
    }
    player.onDone(function () {
        player.destroy();
        __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["a" /* prepareFinalAnimationStyles */](startStateStyles, endStateStyles));
    });
    new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */](previousPlayers).destroy();
    __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_style_util__["d" /* clearStyles */](startStateStyles));
    view.animationContext.queueAnimation(element, 'state', player);
    return new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_transition__["a" /* AnimationTransition */](player, currentState, nextState, totalTime);
}
var renderType_TooltipComponent = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_8__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_TooltipComponent, { 'state': TooltipComponent_state_factory });
var View_TooltipComponent0 = (function (_super) {
    __extends(View_TooltipComponent0, _super);
    function View_TooltipComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TooltipComponent0, renderType_TooltipComponent, __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_TooltipComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'md-tooltip'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_TooltipComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = this.context._visibility;
        if (__WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            var animationTransition_state = this.componentType.animations['state'](this, this._el_0, ((this._expr_3 == __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */]) ? 'void' : this._expr_3), ((currVal_3 == __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */]) ? 'void' : currVal_3));
            animationTransition_state.onDone(this.handleEvent_0.bind(this).bind(this, '@state.done'));
            this._expr_3 = currVal_3;
        }
        var currVal_2 = this.context._transformOrigin;
        if (__WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementStyle(this._el_0, 'transform-origin', ((this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_20__angular_core_src_security__["b" /* SecurityContext */].STYLE, currVal_2) == null) ? null : this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_20__angular_core_src_security__["b" /* SecurityContext */].STYLE, currVal_2).toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.message, '');
        if (__WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TooltipComponent0.prototype.detachInternal = function () {
        var animationTransition_state = this.componentType.animations['state'](this, this._el_0, this._expr_3, 'void');
        animationTransition_state.onDone(this.handleEvent_0.bind(this).bind(this, '@state.done'));
    };
    View_TooltipComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == '@state.done')) {
            var pd_sub_0 = (this.context._afterVisibilityAnimation($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TooltipComponent0;
}(__WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/tooltip.ngfactory.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_RouterLink; });
/* unused harmony export Wrapper_RouterLinkWithHref */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */




var Wrapper_RouterLink = (function () {
    function Wrapper_RouterLink(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["a" /* RouterLink */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_RouterLink.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLink.prototype.ngOnDestroy = function () {
    };
    Wrapper_RouterLink.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterLink.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterLink.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLink.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLink;
}());
var Wrapper_RouterLinkWithHref = (function () {
    function Wrapper_RouterLinkWithHref(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_RouterLinkWithHref.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLinkWithHref.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_RouterLinkWithHref.prototype.check_target = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.target = currValue;
            this._changes['target'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._changes['queryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._changes['fragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._changes['preserveQueryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._changes['preserveFragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._changes['skipLocationChange'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_5, currValue);
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._changes['replaceUrl'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_6, currValue);
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._changes['routerLink'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_7, currValue);
            this._expr_7 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_RouterLinkWithHref.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_8 = this.context.target;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementAttribute(el, 'target', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context.href;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currVal_9)) {
            view.renderer.setElementProperty(el, 'href', view.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_9));
            this._expr_9 = currVal_9;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLinkWithHref.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLinkWithHref;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/router_link.ngfactory.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_RouterOutlet; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_RouterOutlet = (function () {
    function Wrapper_RouterOutlet(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */](p0, p1, p2, p3);
    }
    Wrapper_RouterOutlet.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterOutlet.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_RouterOutlet.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterOutlet.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterOutlet.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RouterOutlet.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.activateEvents.subscribe(_eventHandler.bind(view, 'activate')));
        }
        if (emit1) {
            (this.subscription1 = this.context.deactivateEvents.subscribe(_eventHandler.bind(view, 'deactivate')));
        }
    };
    return Wrapper_RouterOutlet;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/router_outlet.ngfactory.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exercise_exercise_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_workout_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sevices_workout_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__run_workout_run_workout_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__run_exercise_run_exercise_component__ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__exercise_exercise_component__["a" /* ExerciseComponent */],
                __WEBPACK_IMPORTED_MODULE_6__workout_workout_component__["a" /* WorkoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__run_workout_run_workout_component__["a" /* RunWorkoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__run_exercise_run_exercise_component__["a" /* RunExerciseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* ROUTES */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__sevices_workout_service__["a" /* WorkoutService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__workout_workout_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__run_workout_run_workout_component__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'workout',
        children: [
            { path: ':workoutId', component: __WEBPACK_IMPORTED_MODULE_0__workout_workout_component__["a" /* WorkoutComponent */] },
            { path: ':workoutId/run', component: __WEBPACK_IMPORTED_MODULE_2__run_workout_run_workout_component__["a" /* RunWorkoutComponent */] },
        ]
    }
];
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/app.routes.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/environment.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/jcplessis/workspace/workouttimer/src/polyfills.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(447);


/***/ })

},[772]);
//# sourceMappingURL=main.bundle.map