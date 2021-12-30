/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Glide$1);


/***/ }),

/***/ "./ux-ui/components/organisms/googleMap/GoogleMap.organism.js":
/*!********************************************************************!*\
  !*** ./ux-ui/components/organisms/googleMap/GoogleMap.organism.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _GoogleMapUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleMapUtils */ "./ux-ui/components/organisms/googleMap/GoogleMapUtils.js");




var GMap = /*#__PURE__*/function () {
  function GMap() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GMap);

    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GMap, [{
    key: "setupDomReferences",
    value: function setupDomReferences() {
      this.acfMap = document.querySelector('.acf-map');
      this.markers = this.acfMap.querySelectorAll('.marker');
    }
    /**
     * 1. add markers
     * 2. center map
     */

  }, {
    key: "newMap",
    value: function newMap(el) {
      var _this = this;

      this.args = {
        zoom: 16,
        center: {
          lat: 0,
          lng: 0
        }
      };
      this.map = new window.google.maps.Map(el, this.args);
      this.map.markers = [];
      this.markers.forEach(function (x) {
        /* 1 */
        (0,_GoogleMapUtils__WEBPACK_IMPORTED_MODULE_2__.addMarker)(x, _this.map);
      });
      (0,_GoogleMapUtils__WEBPACK_IMPORTED_MODULE_2__.centerMap)(this.map);
      /* 2 */
    }
  }, {
    key: "init",
    value: function init() {
      this.setupDomReferences();
      this.newMap(this.acfMap);
    }
  }]);

  return GMap;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GMap);

/***/ }),

/***/ "./ux-ui/components/organisms/googleMap/GoogleMapUtils.js":
/*!****************************************************************!*\
  !*** ./ux-ui/components/organisms/googleMap/GoogleMapUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMarker": () => (/* binding */ addMarker),
/* harmony export */   "centerMap": () => (/* binding */ centerMap)
/* harmony export */ });
/**
 * 1. if marker contains HTML, add it to an infoWindow
 * 2. create info window
 * 3. show info window when marker is clicked
 */
function addMarker(marker, map) {
  var latlng = new window.google.maps.LatLng(marker.getAttribute("data-lat"), marker.getAttribute("data-lng"));
  var markerPin = new window.google.maps.Marker({
    position: latlng,
    map: map
  });
  map.markers.push(markerPin);

  if (marker.innerHTML) {
    /* 1 */
    console.log(marker.innerHTML);
    var infoWindow = new window.google.maps.InfoWindow({
      /* 2 */
      content: marker.innerHTML
    });
    window.google.maps.event.addListener(markerPin, "click", function () {
      /* 3 */
      infoWindow.open(map, markerPin);
    });
  }
}
/**
 * 1. loop through all markers and create bounds
 * 2. only 1 marker?
 * 3. set center of map
 * 4. fit to bounds
 */

function centerMap(map) {
  var bounds = new window.google.maps.LatLngBounds();
  map.markers.forEach(function (marker) {
    /* 1 */
    var latlng = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());
    bounds.extend(latlng);
  });

  if (map.markers.length === 1) {
    /* 2 */
    map.setCenter(bounds.getCenter());
    /* 3 */

    map.setZoom(16);
  } else {
    map.fitBounds(bounds);
    /* 4 */
  }
}

/***/ }),

/***/ "./ux-ui/components/organisms/heroSlider/heroSlider.organism.js":
/*!**********************************************************************!*\
  !*** ./ux-ui/components/organisms/heroSlider/heroSlider.organism.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");




var HeroSlider = /*#__PURE__*/function () {
  function HeroSlider(el, pageParams, templateParams) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeroSlider);

    this.el = el;
    this.pageParams = pageParams;
    this.templateParams = templateParams;
    this.init();
    console.log('heroslider');
  }
  /**
   * 1. count how many slides there are
   * 2. Generate the HTML for the navigation dots
   * 3. Add the dots HTML to the DOM
   * 4. Actually initialize the glide / slider script
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeroSlider, [{
    key: "setupGlide",
    value: function setupGlide() {
      if (!this.heroSlier) {
        this.dotCount = this.slides.length;
        /* 1 */

        this.dotHTML = '';
        /* 2 */

        for (var i = 0; i < this.dotCount; i += 1) {
          this.dotHTML += "<button class='slider__bullet glide__bullet' data-glide-dir='=".concat(i, "'></button>");
        }

        this.glideBullets.insertAdjacentHTML('beforeend', this.dotHTML);
        /* 3 */

        /* 4 */

        this.glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.hero-slider', {
          type: 'carousel',
          perView: 1,
          autoplay: 3000
        });
        this.glide.mount();
      }
    }
  }, {
    key: "setupDOMReferences",
    value: function setupDOMReferences() {
      this.heroSlier = !document.querySelector('.hero-slider');
      this.slides = this.el.querySelectorAll('.hero-slider__slide');
      this.glideBullets = this.el.querySelector('.glide__bullets');
    }
  }, {
    key: "init",
    value: function init() {
      this.setupDOMReferences();
      this.setupGlide();
    }
  }]);

  return HeroSlider;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSlider);

/***/ }),

/***/ "./ux-ui/components/organisms/mobileMenu/mobileMenu.organism.js":
/*!**********************************************************************!*\
  !*** ./ux-ui/components/organisms/mobileMenu/mobileMenu.organism.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileMenu);

    this.menu = document.querySelector('.site-header__menu');
    this.openButton = document.querySelector('.site-header__menu-trigger');
    this.events();
    console.log('mobile menu js loaded');
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.openButton.addEventListener('click', function () {
        return _this.openMenu();
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.openButton.classList.toggle('fa-bars');
      this.openButton.classList.toggle('fa-window-close');
      this.menu.classList.toggle('site-header__menu--active');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./ux-ui/components/organisms/search/htmlTemplates.js":
/*!************************************************************!*\
  !*** ./ux-ui/components/organisms/search/htmlTemplates.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spinnerLoader": () => (/* binding */ spinnerLoader),
/* harmony export */   "searchResults": () => (/* binding */ searchResults),
/* harmony export */   "error": () => (/* binding */ error)
/* harmony export */ });
var spinnerLoader = function spinnerLoader() {
  return "<div class=\"spinner-loader\"></div>";
};

var resultList = function resultList(items) {
  return "\n    <ul class=\"link-list min-list\">\n      ".concat(items.map(function (item) {
    return resultItem(item);
  }).join(''), "\n    </ul>");
};

var resultItem = function resultItem(item) {
  return "\n    <li>\n      <a href=\"".concat(item.link, "\">\n        ").concat(item.title.rendered, "\n      </a>\n    </li>\n  ");
};

var noResult = function noResult() {
  return "\n    <p>No general information matches that search</p>\n  ";
};

var searchResults = function searchResults(json) {
  return "\n    <h2 class=\"search-overlay__section-title\">General Information</h2>\n      ".concat(json.length ? resultList(json) : noResult(), "\n    ");
};
var error = function error() {
  return "<p>Unexpected error, please try again</p>";
};

/***/ }),

/***/ "./ux-ui/components/organisms/search/search.organism.js":
/*!**************************************************************!*\
  !*** ./ux-ui/components/organisms/search/search.organism.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _searchUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchUtils */ "./ux-ui/components/organisms/search/searchUtils.js");
/* harmony import */ var _htmlTemplates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlTemplates */ "./ux-ui/components/organisms/search/htmlTemplates.js");








var Search = /*#__PURE__*/function () {
  function Search(el) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Search);

    this.el = el;
    this.isOverlayOpen = false;
    this.typingTimer = '';
    this.isSpinnerVisible = false;
    this.previousValue = '';
    this.universityData = window.globalThis.universityData;
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Search, [{
    key: "setupDOMReferences",
    value: function setupDOMReferences() {
      this.searchOverlay = document.querySelector('.search-overlay');
      this.openSearchTriggers = document.querySelectorAll('.js-search-trigger');
      this.closeButton = document.querySelector('.search-overlay__close');
      this.searchTerm = document.querySelector('.search-term');
      this.searchResultsContainer = document.querySelector('#search-overlay__results');
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;

      this.openSearchTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
          return _this.openOverlay(e);
        });
      });
      this.closeButton.addEventListener('click', function (e) {
        return _this.closeOverlay(e);
      });
      document.addEventListener('keydown', function (e) {
        return _this.keyPressDispatcher(e);
      });
      this.searchTerm.addEventListener('keyup', function (e) {
        _this.typingLogic(e);
      });
    }
  }, {
    key: "openOverlay",
    value: function openOverlay() {
      this.searchOverlay.classList.add('search-overlay--active');
      this.isOverlayOpen = true;
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay() {
      this.searchOverlay.classList.remove('search-overlay--active');
      this.isOverlayOpen = false;
    }
  }, {
    key: "keyPressDispatcher",
    value: function keyPressDispatcher(e) {
      if (e.keyCode === 83 && !this.isOverlayOpen && !(document.querySelectorAll('input:focus').length > 0) && !(document.querySelectorAll('textarea:focus').length > 0)) {
        this.openOverlay();
      } else if (e.keyCode === 27 && this.isOverlayOpen) {
        this.closeOverlay();
      }
    }
  }, {
    key: "typingLogic",
    value: function typingLogic(e) {
      var _this2 = this;

      this.event = e;

      if (this.searchTerm.value !== this.previousValue) {
        clearTimeout(this.typingTimer);

        if (this.searchTerm.value) {
          if (!this.isSpinnerVisible) {
            this.searchResultsContainer.innerHTML = (0,_htmlTemplates__WEBPACK_IMPORTED_MODULE_6__.spinnerLoader)();
            this.isSpinnerVisible = true;
          }

          this.typingTimer = setTimeout( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this2.getResults().then(function (results) {
                      _this2.searchResultsContainer.innerHTML = (0,_htmlTemplates__WEBPACK_IMPORTED_MODULE_6__.searchResults)(results);
                    }, function () {
                      _this2.searchResultsContainer.innerHTML = (0,_htmlTemplates__WEBPACK_IMPORTED_MODULE_6__.error)();
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })), 1500);
        } else {
          this.searchResultsContainer.innerHTML = '';
          this.isSpinnerVisible = false;
        }
      }

      this.previousValue = this.searchTerm.value;
    }
  }, {
    key: "getResults",
    value: function () {
      var _getResults = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var postsJSON, pagesJSON;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_searchUtils__WEBPACK_IMPORTED_MODULE_5__.getJSON)("".concat(this.universityData.rootUrl, "/wp-json/asdwp/v2/posts"), {
                  search: this.searchTerm.value
                });

              case 2:
                postsJSON = _context2.sent;
                _context2.next = 5;
                return (0,_searchUtils__WEBPACK_IMPORTED_MODULE_5__.getJSON)("".concat(this.universityData.rootUrl, "/wp-json/wp/v2/pages"), {
                  search: this.searchTerm.value
                });

              case 5:
                pagesJSON = _context2.sent;
                this.isSpinnerVisible = false;
                return _context2.abrupt("return", [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(postsJSON), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pagesJSON)));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getResults() {
        return _getResults.apply(this, arguments);
      }

      return getResults;
    }()
  }, {
    key: "init",
    value: function init() {
      this.setupDOMReferences();
      this.setupEventListeners();
    }
  }]);

  return Search;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./ux-ui/components/organisms/search/searchUtils.js":
/*!**********************************************************!*\
  !*** ./ux-ui/components/organisms/search/searchUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJSON": () => (/* binding */ getJSON)
/* harmony export */ });
/**
 * 
 * @param {*} url 
 * @param {*} qsParams 
 * @returns 
 */
function getJSON(url, qsParams) {
  var buildQueryString = function buildQueryString(params) {
    return Object.entries(params).map(function (d) {
      return "".concat(d[0], "=").concat(d[1]);
    }).join('&');
  };

  var qs = qsParams ? "?".concat(buildQueryString(qsParams)) : '';
  return fetch("".concat(url).concat(qs)).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}

/***/ }),

/***/ "./ux-ui/components/templates/generic/generic.template.js":
/*!****************************************************************!*\
  !*** ./ux-ui/components/templates/generic/generic.template.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenericTemplate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _organisms_mobileMenu_mobileMenu_organism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/mobileMenu/mobileMenu.organism */ "./ux-ui/components/organisms/mobileMenu/mobileMenu.organism.js");
/* harmony import */ var _organisms_heroSlider_heroSlider_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/heroSlider/heroSlider.organism */ "./ux-ui/components/organisms/heroSlider/heroSlider.organism.js");
/* harmony import */ var _organisms_googleMap_GoogleMap_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../organisms/googleMap/GoogleMap.organism */ "./ux-ui/components/organisms/googleMap/GoogleMap.organism.js");
/* harmony import */ var _organisms_search_search_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../organisms/search/search.organism */ "./ux-ui/components/organisms/search/search.organism.js");







var GenericTemplate = /*#__PURE__*/function () {
  function GenericTemplate(pageParams) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GenericTemplate);

    this.pageParams = pageParams;
    this.templateParams = {
      templateName: 'generic'
    };
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GenericTemplate, [{
    key: "setupOrganisms",
    value: function setupOrganisms() {
      var _this = this;

      document.querySelectorAll('[data-js-component="mobile-menu"').forEach(function (el) {
        _this.MOBILE_MENU = new _organisms_mobileMenu_mobileMenu_organism__WEBPACK_IMPORTED_MODULE_2__["default"](el, _this.pageParams, _this.templateParams);
      });
      document.querySelectorAll('[data-js-component="hero-slider"]').forEach(function (el) {
        _this.HERO_SLIDER = new _organisms_heroSlider_heroSlider_organism__WEBPACK_IMPORTED_MODULE_3__["default"](el, _this.pageParams, _this.templateParams);
      });
      document.querySelectorAll('[data-js-component="google-map"]').forEach(function () {
        _this.GOOGLE_MAP = new _organisms_googleMap_GoogleMap_organism__WEBPACK_IMPORTED_MODULE_4__["default"]();
      });
      document.querySelectorAll('[data-js-component="search"]').forEach(function (el) {
        _this.SEARCH = new _organisms_search_search_organism__WEBPACK_IMPORTED_MODULE_5__["default"](el, _this.pageParams, _this.templatePar);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setupOrganisms();
    }
  }]);

  return GenericTemplate;
}();



/***/ }),

/***/ "./ux-ui/components/pages/single/single.page.scss":
/*!********************************************************!*\
  !*** ./ux-ui/components/pages/single/single.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************!*\
  !*** ./ux-ui/components/pages/single/single.page.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _single_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.page.scss */ "./ux-ui/components/pages/single/single.page.scss");
/* harmony import */ var _templates_generic_generic_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/generic/generic.template */ "./ux-ui/components/templates/generic/generic.template.js");





var SinglePage = /*#__PURE__*/function () {
  function SinglePage(page) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SinglePage);

    this.pageParams = {
      pageNode: page,
      pageTitle: page.dataset.jsPage
    };
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SinglePage, [{
    key: "setupTemplate",
    value: function setupTemplate() {
      this.GENERIC_TEMPLATE = new _templates_generic_generic_template__WEBPACK_IMPORTED_MODULE_3__["default"](this.pageParams);
    }
  }, {
    key: "init",
    value: function init() {
      this.setupTemplate();
    }
  }]);

  return SinglePage;
}();

document.querySelectorAll('[data-js-page="single-page"]').forEach(function (page) {
  return new SinglePage(page);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9zaW5nbGUuc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUFJLENBQUNHLE9BQUwsQ0FBYUM7QUFGUixLQUFsQjtBQUtBLFNBQUs5SSxJQUFMO0FBQ0Q7Ozs7V0FFRCx5QkFBZ0I7QUFDZCxXQUFLK0ksZ0JBQUwsR0FBd0IsSUFBSWQsMkVBQUosQ0FBb0IsS0FBS2pGLFVBQXpCLENBQXhCO0FBQ0Q7OztXQUVELGdCQUFPO0FBQ0wsV0FBS2dHLGFBQUw7QUFDRDs7Ozs7O0FBR0g5SSxRQUFRLENBQUNHLGdCQUFULENBQTBCLDhCQUExQixFQUEwRFksT0FBMUQsQ0FBa0UsVUFBQ3lILElBQUQ7QUFBQSxTQUFVLElBQUlELFVBQUosQ0FBZUMsSUFBZixDQUFWO0FBQUEsQ0FBbEUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGdsaWRlanMvZ2xpZGUvZGlzdC9nbGlkZS5lc20uanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vdXgtdWkvY29tcG9uZW50cy9vcmdhbmlzbXMvZ29vZ2xlTWFwL0dvb2dsZU1hcC5vcmdhbmlzbS5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi91eC11aS9jb21wb25lbnRzL29yZ2FuaXNtcy9nb29nbGVNYXAvR29vZ2xlTWFwVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vdXgtdWkvY29tcG9uZW50cy9vcmdhbmlzbXMvaGVyb1NsaWRlci9oZXJvU2xpZGVyLm9yZ2FuaXNtLmpzIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL3V4LXVpL2NvbXBvbmVudHMvb3JnYW5pc21zL21vYmlsZU1lbnUvbW9iaWxlTWVudS5vcmdhbmlzbS5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi91eC11aS9jb21wb25lbnRzL29yZ2FuaXNtcy9zZWFyY2gvaHRtbFRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi91eC11aS9jb21wb25lbnRzL29yZ2FuaXNtcy9zZWFyY2gvc2VhcmNoLm9yZ2FuaXNtLmpzIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL3V4LXVpL2NvbXBvbmVudHMvb3JnYW5pc21zL3NlYXJjaC9zZWFyY2hVdGlscy5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi91eC11aS9jb21wb25lbnRzL3RlbXBsYXRlcy9nZW5lcmljL2dlbmVyaWMudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vdXgtdWkvY29tcG9uZW50cy9wYWdlcy9zaW5nbGUvc2luZ2xlLnBhZ2Uuc2Nzcz81NTAyIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly91bml2ZXJzaXR5LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VuaXZlcnNpdHktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW5pdmVyc2l0eS13ZWJzaXRlLy4vdXgtdWkvY29tcG9uZW50cy9wYWdlcy9zaW5nbGUvc2luZ2xlLnBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qIVxuICogR2xpZGUuanMgdjMuNC4xXG4gKiAoYykgMjAxMy0yMDE5IErEmWRyemVqIENoYcWCdWJlayA8amVkcnplai5jaGFsdWJla0BnbWFpbC5jb20+IChodHRwOi8vamVkcnplamNoYWx1YmVrLmNvbS8pXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxudmFyIGRlZmF1bHRzID0ge1xuICAvKipcbiAgICogVHlwZSBvZiB0aGUgbW92ZW1lbnQuXG4gICAqXG4gICAqIEF2YWlsYWJsZSB0eXBlczpcbiAgICogYHNsaWRlcmAgLSBSZXdpbmRzIHNsaWRlciB0byB0aGUgc3RhcnQvZW5kIHdoZW4gaXQgcmVhY2hlcyB0aGUgZmlyc3Qgb3IgbGFzdCBzbGlkZS5cbiAgICogYGNhcm91c2VsYCAtIENoYW5nZXMgc2xpZGVzIHdpdGhvdXQgc3RhcnRpbmcgb3ZlciB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB0eXBlOiAnc2xpZGVyJyxcblxuICAvKipcbiAgICogU3RhcnQgYXQgc3BlY2lmaWMgc2xpZGUgbnVtYmVyIGRlZmluZWQgd2l0aCB6ZXJvLWJhc2VkIGluZGV4LlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgc3RhcnRBdDogMCxcblxuICAvKipcbiAgICogQSBudW1iZXIgb2Ygc2xpZGVzIHZpc2libGUgb24gdGhlIHNpbmdsZSB2aWV3cG9ydC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHBlclZpZXc6IDEsXG5cbiAgLyoqXG4gICAqIEZvY3VzIGN1cnJlbnRseSBhY3RpdmUgc2xpZGUgYXQgYSBzcGVjaWZpZWQgcG9zaXRpb24gaW4gdGhlIHRyYWNrLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiBgY2VudGVyYCAtIEN1cnJlbnQgc2xpZGUgd2lsbCBiZSBhbHdheXMgZm9jdXNlZCBhdCB0aGUgY2VudGVyIG9mIGEgdHJhY2suXG4gICAqIGAwLDEsMiwzLi4uYCAtIEN1cnJlbnQgc2xpZGUgd2lsbCBiZSBmb2N1c2VkIG9uIHRoZSBzcGVjaWZpZWQgemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ3xOdW1iZXJ9XG4gICAqL1xuICBmb2N1c0F0OiAwLFxuXG4gIC8qKlxuICAgKiBBIHNpemUgb2YgdGhlIGdhcCBhZGRlZCBiZXR3ZWVuIHNsaWRlcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdhcDogMTAsXG5cbiAgLyoqXG4gICAqIENoYW5nZSBzbGlkZXMgYWZ0ZXIgYSBzcGVjaWZpZWQgaW50ZXJ2YWwuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhdXRvcGxheS5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgYXV0b3BsYXk6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTdG9wIGF1dG9wbGF5IG9uIG1vdXNlb3ZlciBldmVudC5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBob3ZlcnBhdXNlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBBbGxvdyBmb3IgY2hhbmdpbmcgc2xpZGVzIHdpdGggbGVmdCBhbmQgcmlnaHQga2V5Ym9hcmQgYXJyb3dzLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGtleWJvYXJkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTdG9wIHJ1bm5pbmcgYHBlclZpZXdgIG51bWJlciBvZiBzbGlkZXMgZnJvbSB0aGUgZW5kLiBVc2UgdGhpc1xuICAgKiBvcHRpb24gaWYgeW91IGRvbid0IHdhbnQgdG8gaGF2ZSBhbiBlbXB0eSBzcGFjZSBhZnRlclxuICAgKiBhIHNsaWRlci4gV29ya3Mgb25seSB3aXRoIGBzbGlkZXJgIHR5cGUgYW5kIGFcbiAgICogbm9uLWNlbnRlcmVkIGBmb2N1c0F0YCBzZXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGJvdW5kOiBmYWxzZSxcblxuICAvKipcbiAgICogTWluaW1hbCBzd2lwZSBkaXN0YW5jZSBuZWVkZWQgdG8gY2hhbmdlIHRoZSBzbGlkZS4gVXNlIGBmYWxzZWAgZm9yIHR1cm5pbmcgb2ZmIGEgc3dpcGluZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgc3dpcGVUaHJlc2hvbGQ6IDgwLFxuXG4gIC8qKlxuICAgKiBNaW5pbWFsIG1vdXNlIGRyYWcgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfEJvb2xlYW59XG4gICAqL1xuICBkcmFnVGhyZXNob2xkOiAxMjAsXG5cbiAgLyoqXG4gICAqIEEgbWF4aW11bSBudW1iZXIgb2Ygc2xpZGVzIHRvIHdoaWNoIG1vdmVtZW50IHdpbGwgYmUgbWFkZSBvbiBzd2lwaW5nIG9yIGRyYWdnaW5nLiBVc2UgYGZhbHNlYCBmb3IgdW5saW1pdGVkLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfEJvb2xlYW59XG4gICAqL1xuICBwZXJUb3VjaDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1vdmluZyBkaXN0YW5jZSByYXRpbyBvZiB0aGUgc2xpZGVzIG9uIGEgc3dpcGluZyBhbmQgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaFJhdGlvOiAwLjUsXG5cbiAgLyoqXG4gICAqIEFuZ2xlIHJlcXVpcmVkIHRvIGFjdGl2YXRlIHNsaWRlcyBtb3Zpbmcgb24gc3dpcGluZyBvciBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRvdWNoQW5nbGU6IDQ1LFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA0MDAsXG5cbiAgLyoqXG4gICAqIEFsbG93cyBsb29waW5nIHRoZSBgc2xpZGVyYCB0eXBlLiBTbGlkZXIgd2lsbCByZXdpbmQgdG8gdGhlIGZpcnN0L2xhc3Qgc2xpZGUgd2hlbiBpdCdzIGF0IHRoZSBzdGFydC9lbmQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgcmV3aW5kOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgcmV3aW5kaW5nIGFuaW1hdGlvbiBvZiB0aGUgYHNsaWRlcmAgdHlwZSBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICByZXdpbmREdXJhdGlvbjogODAwLFxuXG4gIC8qKlxuICAgKiBFYXNpbmcgZnVuY3Rpb24gZm9yIHRoZSBhbmltYXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBhbmltYXRpb25UaW1pbmdGdW5jOiAnY3ViaWMtYmV6aWVyKC4xNjUsIC44NDAsIC40NDAsIDEpJyxcblxuICAvKipcbiAgICogVGhyb3R0bGUgY29zdGx5IGV2ZW50cyBhdCBtb3N0IG9uY2UgcGVyIGV2ZXJ5IHdhaXQgbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdGhyb3R0bGU6IDEwLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlyZWN0aW9uIG1vZGUuXG4gICAqXG4gICAqIEF2YWlsYWJsZSBpbnB1dHM6XG4gICAqIC0gJ2x0cicgLSBsZWZ0IHRvIHJpZ2h0IG1vdmVtZW50LFxuICAgKiAtICdydGwnIC0gcmlnaHQgdG8gbGVmdCBtb3ZlbWVudC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGRpcmVjdGlvbjogJ2x0cicsXG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSB2YWx1ZSBvZiB0aGUgbmV4dCBhbmQgcHJldmlvdXMgdmlld3BvcnRzIHdoaWNoXG4gICAqIGhhdmUgdG8gcGVlayBpbiB0aGUgY3VycmVudCB2aWV3LiBBY2NlcHRzIG51bWJlciBhbmRcbiAgICogcGl4ZWxzIGFzIGEgc3RyaW5nLiBMZWZ0IGFuZCByaWdodCBwZWVraW5nIGNhbiBiZVxuICAgKiBzZXQgdXAgc2VwYXJhdGVseSB3aXRoIGEgZGlyZWN0aW9ucyBvYmplY3QuXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiBgMTAwYCAtIFBlZWsgMTAwcHggb24gdGhlIGJvdGggc2lkZXMuXG4gICAqIHsgYmVmb3JlOiAxMDAsIGFmdGVyOiA1MCB9YCAtIFBlZWsgMTAwcHggb24gdGhlIGxlZnQgc2lkZSBhbmQgNTBweCBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxTdHJpbmd8T2JqZWN0fVxuICAgKi9cbiAgcGVlazogMCxcblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBvcHRpb25zIGFwcGxpZWQgYXQgc3BlY2lmaWVkIG1lZGlhIGJyZWFrcG9pbnRzLlxuICAgKiBGb3IgZXhhbXBsZTogZGlzcGxheSB0d28gc2xpZGVzIHBlciB2aWV3IHVuZGVyIDgwMHB4LlxuICAgKiBge1xuICAgKiAgICc4MDBweCc6IHtcbiAgICogICAgIHBlclZpZXc6IDJcbiAgICogICB9XG4gICAqIH1gXG4gICAqL1xuICBicmVha3BvaW50czoge30sXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgaW50ZXJuYWxseSB1c2VkIEhUTUwgY2xhc3Nlcy5cbiAgICpcbiAgICogQHRvZG8gUmVmYWN0b3IgYHNsaWRlcmAgYW5kIGBjYXJvdXNlbGAgcHJvcGVydGllcyB0byBzaW5nbGUgYHR5cGU6IHsgc2xpZGVyOiAnJywgY2Fyb3VzZWw6ICcnIH1gIG9iamVjdFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY2xhc3Nlczoge1xuICAgIGRpcmVjdGlvbjoge1xuICAgICAgbHRyOiAnZ2xpZGUtLWx0cicsXG4gICAgICBydGw6ICdnbGlkZS0tcnRsJ1xuICAgIH0sXG4gICAgc2xpZGVyOiAnZ2xpZGUtLXNsaWRlcicsXG4gICAgY2Fyb3VzZWw6ICdnbGlkZS0tY2Fyb3VzZWwnLFxuICAgIHN3aXBlYWJsZTogJ2dsaWRlLS1zd2lwZWFibGUnLFxuICAgIGRyYWdnaW5nOiAnZ2xpZGUtLWRyYWdnaW5nJyxcbiAgICBjbG9uZVNsaWRlOiAnZ2xpZGVfX3NsaWRlLS1jbG9uZScsXG4gICAgYWN0aXZlTmF2OiAnZ2xpZGVfX2J1bGxldC0tYWN0aXZlJyxcbiAgICBhY3RpdmVTbGlkZTogJ2dsaWRlX19zbGlkZS0tYWN0aXZlJyxcbiAgICBkaXNhYmxlZEFycm93OiAnZ2xpZGVfX2Fycm93LS1kaXNhYmxlZCdcbiAgfVxufTtcblxuLyoqXG4gKiBPdXRwdXRzIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgYm93c2VyIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBtc2dcbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIGNvbnNvbGUuZXJyb3IoXCJbR2xpZGUgd2Fybl06IFwiICsgbXNnKTtcbn1cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBpbnRlZ2VyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9JbnQodmFsdWUpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB2YWx1ZSBlbnRlcmVkIGFzIG51bWJlclxuICogb3Igc3RyaW5nIHRvIGZsYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAgeyp9ICAgdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cbiAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISF2YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGluaXRpYWxpemVzIHNwZWNpZmllZCBjb2xsZWN0aW9uIG9mIGV4dGVuc2lvbnMuXG4gKiBFYWNoIGV4dGVuc2lvbiByZWNlaXZlcyBhY2Nlc3MgdG8gaW5zdGFuY2Ugb2YgZ2xpZGUgYW5kIHJlc3Qgb2YgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZ2xpZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbW91bnQoZ2xpZGUsIGV4dGVuc2lvbnMsIGV2ZW50cykge1xuICB2YXIgY29tcG9uZW50cyA9IHt9O1xuXG4gIGZvciAodmFyIG5hbWUgaW4gZXh0ZW5zaW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGV4dGVuc2lvbnNbbmFtZV0pKSB7XG4gICAgICBjb21wb25lbnRzW25hbWVdID0gZXh0ZW5zaW9uc1tuYW1lXShnbGlkZSwgY29tcG9uZW50cywgZXZlbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybignRXh0ZW5zaW9uIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9uYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjb21wb25lbnRzW19uYW1lXS5tb3VudCkpIHtcbiAgICAgIGNvbXBvbmVudHNbX25hbWVdLm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogRGVmaW5lcyBnZXR0ZXIgYW5kIHNldHRlciBwcm9wZXJ0eSBvbiB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iaiAgICAgICAgIE9iamVjdCB3aGVyZSBwcm9wZXJ0eSBoYXMgdG8gYmUgZGVmaW5lZC5cbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcCAgICAgICAgTmFtZSBvZiB0aGUgZGVmaW5lZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSAge09iamVjdH0gZGVmaW5pdGlvbiAgR2V0IGFuZCBzZXQgZGVmaW5pdGlvbnMgZm9yIHRoZSBwcm9wZXJ0eS5cbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGRlZmluZShvYmosIHByb3AsIGRlZmluaXRpb24pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVmaW5pdGlvbik7XG59XG5cbi8qKlxuICogU29ydHMgYXBoYWJldGljYWxseSBvYmplY3Qga2V5cy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzb3J0S2V5cyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAociwgaykge1xuICAgIHJba10gPSBvYmpba107XG5cbiAgICByZXR1cm4gcltrXSwgcjtcbiAgfSwge30pO1xufVxuXG4vKipcbiAqIE1lcmdlcyBwYXNzZWQgc2V0dGluZ3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSAge09iamVjdH0gc2V0dGluZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBzZXR0aW5ncykge1xuICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cywgc2V0dGluZ3MpO1xuXG4gIC8vIGBPYmplY3QuYXNzaWduYCBkbyBub3QgZGVlcGx5IG1lcmdlIG9iamVjdHMsIHNvIHdlXG4gIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkgZm9yIGV2ZXJ5IG5lc3RlZCBvYmplY3RcbiAgLy8gaW4gb3B0aW9ucy4gQWx0aG91Z2ggaXQgZG9lcyBub3QgbG9vayBzbWFydCxcbiAgLy8gaXQncyBzbWFsbGVyIGFuZCBmYXN0ZXIgdGhhbiBzb21lIGZhbmN5XG4gIC8vIG1lcmdpbmcgZGVlcC1tZXJnZSBhbGdvcml0aG0gc2NyaXB0LlxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2NsYXNzZXMnKSkge1xuICAgIG9wdGlvbnMuY2xhc3NlcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cy5jbGFzc2VzLCBzZXR0aW5ncy5jbGFzc2VzKTtcblxuICAgIGlmIChzZXR0aW5ncy5jbGFzc2VzLmhhc093blByb3BlcnR5KCdkaXJlY3Rpb24nKSkge1xuICAgICAgb3B0aW9ucy5jbGFzc2VzLmRpcmVjdGlvbiA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cy5jbGFzc2VzLmRpcmVjdGlvbiwgc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnYnJlYWtwb2ludHMnKSkge1xuICAgIG9wdGlvbnMuYnJlYWtwb2ludHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuYnJlYWtwb2ludHMsIHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG52YXIgRXZlbnRzQnVzID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgRXZlbnRCdXMgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0J1cygpIHtcbiAgICB2YXIgZXZlbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCdXMpO1xuXG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5ob3AgPSBldmVudHMuaGFzT3duUHJvcGVydHk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBsaXN0ZW5lciB0byB0aGUgc3BlY2lmZWQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoRXZlbnRzQnVzLCBbe1xuICAgIGtleTogJ29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmIChpc0FycmF5KGV2ZW50KSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5vbihldmVudFtpXSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBldmVudCdzIG9iamVjdCBpZiBub3QgeWV0IGNyZWF0ZWRcbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGhhbmRsZXIgdG8gcXVldWVcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGhhbmRsZXIpIC0gMTtcblxuICAgICAgLy8gUHJvdmlkZSBoYW5kbGUgYmFjayBmb3IgcmVtb3ZhbCBvZiBldmVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50XVtpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdD19IGNvbnRleHRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW1pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIGlmIChpc0FycmF5KGV2ZW50KSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KGV2ZW50W2ldLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgZG9lc24ndCBleGlzdCwgb3IgdGhlcmUncyBubyBoYW5kbGVycyBpbiBxdWV1ZSwganVzdCBsZWF2ZVxuICAgICAgaWYgKCF0aGlzLmhvcC5jYWxsKHRoaXMuZXZlbnRzLCBldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDeWNsZSB0aHJvdWdoIGV2ZW50cyBxdWV1ZSwgZmlyZSFcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0oY29udGV4dCB8fCB7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0J1cztcbn0oKTtcblxudmFyIEdsaWRlID0gZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDb25zdHJ1Y3QgZ2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHNlbGVjdG9yXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICovXG4gIGZ1bmN0aW9uIEdsaWRlKHNlbGVjdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEdsaWRlKTtcblxuICAgIHRoaXMuX2MgPSB7fTtcbiAgICB0aGlzLl90ID0gW107XG4gICAgdGhpcy5fZSA9IG5ldyBFdmVudHNCdXMoKTtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgdGhpcy5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuc2V0dGluZ3Muc3RhcnRBdDtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGdsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgQ29sbGVjdGlvbiBvZiBleHRlbnNpb25zIHRvIGluaXRpYWxpemUuXHJcbiAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhHbGlkZSwgW3tcbiAgICBrZXk6ICdtb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50JCQxKCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICB0aGlzLl9lLmVtaXQoJ21vdW50LmJlZm9yZScpO1xuXG4gICAgICBpZiAoaXNPYmplY3QoZXh0ZW5zaW9ucykpIHtcbiAgICAgICAgdGhpcy5fYyA9IG1vdW50KHRoaXMsIGV4dGVuc2lvbnMsIHRoaXMuX2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBhIG9iamVjdCBvbiBgbW91bnQoKWAnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5hZnRlcicpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbGxlY3RzIGFuIGluc3RhbmNlIGB0cmFuc2xhdGVgIHRyYW5zZm9ybWVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gdHJhbnNmb3JtZXJzIENvbGxlY3Rpb24gb2YgdHJhbnNmb3JtZXJzLlxyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdtdXRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdXRhdGUoKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgICAgaWYgKGlzQXJyYXkodHJhbnNmb3JtZXJzKSkge1xuICAgICAgICB0aGlzLl90ID0gdHJhbnNmb3JtZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBhIGFycmF5IG9uIGBtdXRhdGUoKWAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGdsaWRlIHdpdGggc3BlY2lmaWVkIHNldHRpbmdzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyh0aGlzLnNldHRpbmdzLCBzZXR0aW5ncyk7XG5cbiAgICAgIGlmIChzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnc3RhcnRBdCcpKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBzZXR0aW5ncy5zdGFydEF0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lLmVtaXQoJ3VwZGF0ZScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENoYW5nZSBzbGlkZSB3aXRoIHNwZWNpZmllZCBwYXR0ZXJuLiBBIHBhdHRlcm4gbXVzdCBiZSBpbiB0aGUgc3BlY2lhbCBmb3JtYXQ6XHJcbiAgICAgKiBgPmAgLSBNb3ZlIG9uZSBmb3J3YXJkXHJcbiAgICAgKiBgPGAgLSBNb3ZlIG9uZSBiYWNrd2FyZFxyXG4gICAgICogYD17aX1gIC0gR28gdG8ge2l9IHplcm8tYmFzZWQgc2xpZGUgKGVxLiAnPTEnLCB3aWxsIGdvIHRvIHNlY29uZCBzbGlkZSlcclxuICAgICAqIGA+PmAgLSBSZXdpbmRzIHRvIGVuZCAobGFzdCBzbGlkZSlcclxuICAgICAqIGA8PGAgLSBSZXdpbmRzIHRvIHN0YXJ0IChmaXJzdCBzbGlkZSlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ28nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnbyhwYXR0ZXJuKSB7XG4gICAgICB0aGlzLl9jLlJ1bi5tYWtlKHBhdHRlcm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIE1vdmUgdHJhY2sgYnkgc3BlY2lmaWVkIGRpc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXN0YW5jZVxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmUoZGlzdGFuY2UpIHtcbiAgICAgIHRoaXMuX2MuVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gICAgICB0aGlzLl9jLk1vdmUubWFrZShkaXN0YW5jZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSBpbnN0YW5jZSBhbmQgcmV2ZXJ0IGFsbCBjaGFuZ2VzIGRvbmUgYnkgdGhpcy5fYy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgnZGVzdHJveScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGluc3RhbmNlIGF1dG9wbGF5aW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxOdW1iZXJ9IGludGVydmFsIFJ1biBhdXRvcGxheWluZyB3aXRoIHBhc3NlZCBpbnRlcnZhbCByZWdhcmRsZXNzIG9mIGBhdXRvcGxheWAgc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIGludGVydmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b3BsYXkgPSBpbnRlcnZhbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCdwbGF5Jyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU3RvcCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwYXVzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5fZS5lbWl0KCdwYXVzZScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgZ2xpZGUgaW50byBhIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyBnbGlkZSBpbnRvIGEgYWN0aXZlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQWRkcyBjdXV0b20gZXZlbnQgbGlzdGVuZXIgd2l0aCBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRcclxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICB0aGlzLl9lLm9uKGV2ZW50LCBoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgZ2xpZGUgaXMgYSBwcmVjaXNlZCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc1R5cGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1R5cGUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZSA9PT0gbmFtZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGNvcmUgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0dGluZ3MnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvXHJcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKG8pIHtcbiAgICAgIGlmIChpc09iamVjdChvKSkge1xuICAgICAgICB0aGlzLl9vID0gbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ09wdGlvbnMgbXVzdCBiZSBhbiBgb2JqZWN0YCBpbnN0YW5jZS4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgY3VycmVudCBpbmRleCBvZiB0aGUgc2xpZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbmRleCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgY3VycmVudCBpbmRleCBhIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoaSkge1xuICAgICAgdGhpcy5faSA9IHRvSW50KGkpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0eXBlIG5hbWUgb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndHlwZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy50eXBlO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgaWRsZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZDtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoc3RhdHVzKSB7XG4gICAgICB0aGlzLl9kID0gISFzdGF0dXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBHbGlkZTtcbn0oKTtcblxuZnVuY3Rpb24gUnVuIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBSdW4gPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYXV0b3J1bm5pbmcgb2YgdGhlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLl9vID0gZmFsc2U7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgZ2xpZGVzIHJ1bm5pbmcgYmFzZWQgb24gdGhlIHBhc3NlZCBtb3Zpbmcgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vdmVcbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiBtYWtlKG1vdmUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgR2xpZGUuZGlzYWJsZSgpO1xuXG4gICAgICAgIHRoaXMubW92ZSA9IG1vdmU7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5iZWZvcmUnLCB0aGlzLm1vdmUpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bicsIHRoaXMubW92ZSk7XG5cbiAgICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuaXNTdGFydCgpKSB7XG4gICAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLnN0YXJ0JywgX3RoaXMubW92ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmlzRW5kKCkpIHtcbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgX3RoaXMubW92ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCc8JykgfHwgX3RoaXMuaXNPZmZzZXQoJz4nKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5vZmZzZXQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLmFmdGVyJywgX3RoaXMubW92ZSk7XG5cbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cblxuICAgICAgdmFyIGNvdW50YWJsZVN0ZXBzID0gaXNOdW1iZXIodG9JbnQoc3RlcHMpKSAmJiB0b0ludChzdGVwcykgIT09IDA7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChzdGVwcyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgaWYgKCEoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiAhR2xpZGUuc2V0dGluZ3MucmV3aW5kKSkge1xuICAgICAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggKz0gTWF0aC5taW4obGVuZ3RoIC0gR2xpZGUuaW5kZXgsIC10b0ludChzdGVwcykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpZiAoc3RlcHMgPT09ICc8Jykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIGlmICghKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgIUdsaWRlLnNldHRpbmdzLnJld2luZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggLT0gTWF0aC5taW4oR2xpZGUuaW5kZXgsIHRvSW50KHN0ZXBzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEdsaWRlLmluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgIEdsaWRlLmluZGV4ID0gc3RlcHM7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB3YXJuKCdJbnZhbGlkIGRpcmVjdGlvbiBwYXR0ZXJuIFsnICsgZGlyZWN0aW9uICsgc3RlcHMgKyAnXSBoYXMgYmVlbiB1c2VkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3Qgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzU3RhcnQ6IGZ1bmN0aW9uIGlzU3RhcnQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPT09IDA7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNFbmQ6IGZ1bmN0aW9uIGlzRW5kKCkge1xuICAgICAgcmV0dXJuIEdsaWRlLmluZGV4ID09PSB0aGlzLmxlbmd0aDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG1ha2luZyBhIG9mZnNldCBydW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc09mZnNldDogZnVuY3Rpb24gaXNPZmZzZXQoZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbyAmJiB0aGlzLm1vdmUuZGlyZWN0aW9uID09PSBkaXJlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShSdW4sICdtb3ZlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIG1vdmUgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIG1vdmUgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHN0ZXAgPSB2YWx1ZS5zdWJzdHIoMSk7XG5cbiAgICAgIHRoaXMuX20gPSB7XG4gICAgICAgIGRpcmVjdGlvbjogdmFsdWUuc3Vic3RyKDAsIDEpLFxuICAgICAgICBzdGVwczogc3RlcCA/IHRvSW50KHN0ZXApID8gdG9JbnQoc3RlcCkgOiBzdGVwIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShSdW4sICdsZW5ndGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgcnVubmluZyBkaXN0YW5jZSBiYXNlZFxuICAgICAqIG9uIHplcm8taW5kZXhpbmcgbnVtYmVyIG9mIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGxlbmd0aCA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXMubGVuZ3RoO1xuXG4gICAgICAvLyBJZiB0aGUgYGJvdW5kYCBvcHRpb24gaXMgYWNpdHZlLCBhIG1heGltdW0gcnVubmluZyBkaXN0YW5jZSBzaG91bGQgYmVcbiAgICAgIC8vIHJlZHVjZWQgYnkgYHBlclZpZXdgIGFuZCBgZm9jdXNBdGAgc2V0dGluZ3MuIFJ1bm5pbmcgZGlzdGFuY2VcbiAgICAgIC8vIHNob3VsZCBlbmQgYmVmb3JlIGNyZWF0aW5nIGFuIGVtcHR5IHNwYWNlIGFmdGVyIGluc3RhbmNlLlxuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBzZXR0aW5ncy5mb2N1c0F0ICE9PSAnY2VudGVyJyAmJiBzZXR0aW5ncy5ib3VuZCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIC0gMSAtICh0b0ludChzZXR0aW5ncy5wZXJWaWV3KSAtIDEpICsgdG9JbnQoc2V0dGluZ3MuZm9jdXNBdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsZW5ndGggLSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFJ1biwgJ29mZnNldCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHN0YXR1cyBvZiB0aGUgb2Zmc2V0dGluZyBmbGFnLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJ1bjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmVudCB0aW1lLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWRcbiAqIGF0IG1vc3Qgb25jZSBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0ID0gdm9pZCAwLFxuICAgICAgY29udGV4dCA9IHZvaWQgMCxcbiAgICAgIGFyZ3MgPSB2b2lkIDAsXG4gICAgICByZXN1bHQgPSB2b2lkIDA7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbiB0aHJvdHRsZWQoKSB7XG4gICAgdmFyIGF0ID0gbm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IGF0O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKGF0IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IGF0O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHByZXZpb3VzID0gMDtcbiAgICB0aW1lb3V0ID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG5cbnZhciBNQVJHSU5fVFlQRSA9IHtcbiAgbHRyOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgcnRsOiBbJ21hcmdpblJpZ2h0JywgJ21hcmdpbkxlZnQnXVxufTtcblxuZnVuY3Rpb24gR2FwcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgR2FwcyA9IHtcbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGdhcHMgYmV0d2VlbiBzbGlkZXMuIEZpcnN0IGFuZCBsYXN0XG4gICAgICogc2xpZGVzIGRvIG5vdCByZWNlaXZlIGl0J3MgZWRnZSBtYXJnaW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gc2xpZGVzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhcHBseTogZnVuY3Rpb24gYXBwbHkoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IENvbXBvbmVudHMuRGlyZWN0aW9uLnZhbHVlO1xuXG4gICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVswXV0gPSB0aGlzLnZhbHVlIC8gMiArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVswXV0gPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpICE9PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMV1dID0gdGhpcy52YWx1ZSAvIDIgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMV1dID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGdhcHMgZnJvbSB0aGUgc2xpZGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gc2xpZGVzXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShzbGlkZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHN0eWxlID0gc2xpZGVzW2ldLnN0eWxlO1xuXG4gICAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgc3R5bGUubWFyZ2luUmlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEdhcHMsICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBnYXAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRvSW50KEdsaWRlLnNldHRpbmdzLmdhcCk7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoR2FwcywgJ2dyb3cnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhZGRpdGlvbmFsIGRpbWVudGlvbnMgdmFsdWUgY2F1c2VkIGJ5IGdhcHMuXG4gICAgICogVXNlZCB0byBpbmNyZWFzZSB3aWR0aCBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEdhcHMudmFsdWUgKiAoQ29tcG9uZW50cy5TaXplcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShHYXBzLCAncmVkdWN0b3InLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyByZWR1Y3Rpb24gdmFsdWUgY2F1c2VkIGJ5IGdhcHMuXG4gICAgICogVXNlZCB0byBzdWJ0cmFjdCB3aWR0aCBvZiB0aGUgc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwZXJWaWV3ID0gR2xpZGUuc2V0dGluZ3MucGVyVmlldztcblxuICAgICAgcmV0dXJuIEdhcHMudmFsdWUgKiAocGVyVmlldyAtIDEpIC8gcGVyVmlldztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdhcHM6XG4gICAqIC0gYWZ0ZXIgYnVpbGRpbmcsIHNvIHNsaWRlcyAoaW5jbHVkaW5nIGNsb25lcykgd2lsbCByZWNlaXZlIHByb3BlciBtYXJnaW5zXG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSwgdG8gcmVjYWxjdWxhdGUgZ2FwcyB3aXRoIG5ldyBvcHRpb25zXG4gICAqL1xuICBFdmVudHMub24oWydidWlsZC5hZnRlcicsICd1cGRhdGUnXSwgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgIEdhcHMuYXBwbHkoQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuY2hpbGRyZW4pO1xuICB9LCAzMCkpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZ2FwczpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgR2Fwcy5yZW1vdmUoQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuY2hpbGRyZW4pO1xuICB9KTtcblxuICByZXR1cm4gR2Fwcztcbn1cblxuLyoqXG4gKiBGaW5kcyBzaWJsaW5ncyBub2RlcyBvZiB0aGUgcGFzc2VkIG5vZGUuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNpYmxpbmdzKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgdmFyIG4gPSBub2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcbiAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuXG4gICAgZm9yICg7IG47IG4gPSBuLm5leHRTaWJsaW5nKSB7XG4gICAgICBpZiAobi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBub2RlKSB7XG4gICAgICAgIG1hdGNoZWQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlZDtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgcGFzc2VkIG5vZGUgZXhpc3QgYW5kIGlzIGEgdmFsaWQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBleGlzdChub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIFRSQUNLX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsPVwidHJhY2tcIl0nO1xuXG5mdW5jdGlvbiBIdG1sIChHbGlkZSwgQ29tcG9uZW50cykge1xuICB2YXIgSHRtbCA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cCBzbGlkZXIgSFRNTCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7R2xpZGV9IGdsaWRlXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5yb290ID0gR2xpZGUuc2VsZWN0b3I7XG4gICAgICB0aGlzLnRyYWNrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoVFJBQ0tfU0VMRUNUT1IpO1xuICAgICAgdGhpcy5zbGlkZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLndyYXBwZXIuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgICAgcmV0dXJuICFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5jbG9uZVNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoSHRtbCwgJ3Jvb3QnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC5fcjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG5vZGUgb2YgdGhlIGdsaWRlIG1haW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChyKSB7XG4gICAgICBpZiAoaXNTdHJpbmcocikpIHtcbiAgICAgICAgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocik7XG4gICAgICB9XG5cbiAgICAgIGlmIChleGlzdChyKSkge1xuICAgICAgICBIdG1sLl9yID0gcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1Jvb3QgZWxlbWVudCBtdXN0IGJlIGEgZXhpc3RpbmcgSHRtbCBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoSHRtbCwgJ3RyYWNrJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgZ2xpZGUgdHJhY2sgd2l0aCBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC5fdDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgIGlmIChleGlzdCh0KSkge1xuICAgICAgICBIdG1sLl90ID0gdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ0NvdWxkIG5vdCBmaW5kIHRyYWNrIGVsZW1lbnQuIFBsZWFzZSB1c2UgJyArIFRSQUNLX1NFTEVDVE9SICsgJyBhdHRyaWJ1dGUuJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoSHRtbCwgJ3dyYXBwZXInLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBub2RlIG9mIHRoZSBzbGlkZXMgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBIdG1sLnRyYWNrLmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEh0bWw7XG59XG5cbmZ1bmN0aW9uIFBlZWsgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIFBlZWsgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGhvdyBtdWNoIHRvIHBlZWsgYmFzZWQgb24gc2V0dGluZ3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBHbGlkZS5zZXR0aW5ncy5wZWVrO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoUGVlaywgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHBlZWsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfE9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBQZWVrLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIHBlZWsuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IHZhbHVlXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZS5iZWZvcmUgPSB0b0ludCh2YWx1ZS5iZWZvcmUpO1xuICAgICAgICB2YWx1ZS5hZnRlciA9IHRvSW50KHZhbHVlLmFmdGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBQZWVrLl92ID0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoUGVlaywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IFBlZWsudmFsdWU7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmJlZm9yZSAvIHBlclZpZXcgKyB2YWx1ZS5hZnRlciAvIHBlclZpZXc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZSAqIDIgLyBwZXJWaWV3O1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlIHBlZWtpbmcgc2l6ZXMgb246XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gdXBkYXRlIHRvIHByb3BlciBwZXJjZW50c1xuICAgKi9cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgUGVlay5tb3VudCgpO1xuICB9KTtcblxuICByZXR1cm4gUGVlaztcbn1cblxuZnVuY3Rpb24gTW92ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgTW92ZSA9IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIG1vdmUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IDA7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBhIG1vdmVtZW50IHZhbHVlIGJhc2VkIG9uIHBhc3NlZCBvZmZzZXQgYW5kIGN1cnJlbnRseSBhY3RpdmUgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24gbWFrZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG5cbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgICBFdmVudHMuZW1pdCgnbW92ZScsIHtcbiAgICAgICAgbW92ZW1lbnQ6IHRoaXMudmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgnbW92ZS5hZnRlcicsIHtcbiAgICAgICAgICBtb3ZlbWVudDogX3RoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKE1vdmUsICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTW92ZS5fbztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIG9mZnNldCB2YWx1ZSB1c2VkIHRvIG1vZGlmeSBjdXJyZW50IHRyYW5zbGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgTW92ZS5fbyA9ICFpc1VuZGVmaW5lZCh2YWx1ZSkgPyB0b0ludCh2YWx1ZSkgOiAwO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKE1vdmUsICd0cmFuc2xhdGUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhIHJhdyBtb3ZlbWVudCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKiBHbGlkZS5pbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShNb3ZlLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBhY3R1YWwgbW92ZW1lbnQgdmFsdWUgY29ycmVjdGVkIGJ5IG9mZnNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHZhciB0cmFuc2xhdGUgPSB0aGlzLnRyYW5zbGF0ZTtcblxuICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlICsgb2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gb2Zmc2V0O1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIE1ha2UgbW92ZW1lbnQgdG8gcHJvcGVyIHNsaWRlIG9uOlxuICAgKiAtIGJlZm9yZSBidWlsZCwgc28gZ2xpZGUgd2lsbCBzdGFydCBhdCBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSBvbiBlYWNoIHN0YW5kYXJkIHJ1biB0byBtb3ZlIHRvIG5ld2x5IGNhbGN1bGF0ZWQgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICdydW4nXSwgZnVuY3Rpb24gKCkge1xuICAgIE1vdmUubWFrZSgpO1xuICB9KTtcblxuICByZXR1cm4gTW92ZTtcbn1cblxuZnVuY3Rpb24gU2l6ZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIFNpemVzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnRpb25zIG9mIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBTbGlkZXM6IGZ1bmN0aW9uIHNldHVwU2xpZGVzKCkge1xuICAgICAgdmFyIHdpZHRoID0gdGhpcy5zbGlkZVdpZHRoICsgJ3B4JztcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW50aW9ucyBvZiBzbGlkZXMgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBXcmFwcGVyOiBmdW5jdGlvbiBzZXR1cFdyYXBwZXIoZGltZW50aW9uKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud3JhcHBlclNpemUgKyAncHgnO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYXBwbGllZCBzdHlsZXMgZnJvbSBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgc2xpZGVzID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlcztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9XG5cbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gJyc7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShTaXplcywgJ2xlbmd0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvdW50IG51bWJlciBvZiB0aGUgc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudHMuSHRtbC5zbGlkZXMubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFNpemVzLCAnd2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgZ2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnJvb3Qub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICd3cmFwcGVyU2l6ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHNpemUgb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLnNsaWRlV2lkdGggKiBTaXplcy5sZW5ndGggKyBDb21wb25lbnRzLkdhcHMuZ3JvdyArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3c7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICdzbGlkZVdpZHRoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgd2lkdGggdmFsdWUgb2YgdGhlIHNpbmdsZSBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBTaXplcy53aWR0aCAvIEdsaWRlLnNldHRpbmdzLnBlclZpZXcgLSBDb21wb25lbnRzLlBlZWsucmVkdWN0b3IgLSBDb21wb25lbnRzLkdhcHMucmVkdWN0b3I7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nLCBzbyBvdGhlciBkaW1lbnRpb25zIChlLmcuIHRyYW5zbGF0ZSkgd2lsbCBiZSBjYWxjdWxhdGVkIHByb3BlcnRseVxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHJlY2FsY3VsYXRlIHNpbGRlcyBkaW1lbnNpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSwgdG8gY2FsY3VsYXRlIGRpbWVuc2lvbnMgYmFzZWQgb24gbmV3IG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICdyZXNpemUnLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBTaXplcy5zZXR1cFNsaWRlcygpO1xuICAgIFNpemVzLnNldHVwV3JhcHBlcigpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNhbGN1bGF0ZWQgZ2xpZGUncyBkaW1lbnNpb25zOlxuICAgKiAtIG9uIGRlc3RvdGluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnJlbW92ZSgpO1xuICB9KTtcblxuICByZXR1cm4gU2l6ZXM7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBCdWlsZCA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0IGdsaWRlIGJ1aWxkaW5nLiBBZGRzIGNsYXNzZXMsIHNldHNcbiAgICAgKiBkaW1lbnNpb25zIGFuZCBzZXR1cHMgaW5pdGlhbCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgRXZlbnRzLmVtaXQoJ2J1aWxkLmJlZm9yZScpO1xuXG4gICAgICB0aGlzLnR5cGVDbGFzcygpO1xuICAgICAgdGhpcy5hY3RpdmVDbGFzcygpO1xuXG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYWZ0ZXInKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGB0eXBlYCBjbGFzcyB0byB0aGUgZ2xpZGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdHlwZUNsYXNzOiBmdW5jdGlvbiB0eXBlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKEdsaWRlLnNldHRpbmdzLmNsYXNzZXNbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgYWN0aXZlIGNsYXNzIHRvIGN1cnJlbnQgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFjdGl2ZUNsYXNzOiBmdW5jdGlvbiBhY3RpdmVDbGFzcygpIHtcbiAgICAgIHZhciBjbGFzc2VzID0gR2xpZGUuc2V0dGluZ3MuY2xhc3NlcztcbiAgICAgIHZhciBzbGlkZSA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXNbR2xpZGUuaW5kZXhdO1xuXG4gICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmFjdGl2ZVNsaWRlKTtcblxuICAgICAgICBzaWJsaW5ncyhzbGlkZSkuZm9yRWFjaChmdW5jdGlvbiAoc2libGluZykge1xuICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLmFjdGl2ZVNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBIVE1MIGNsYXNzZXMgYXBwbGllZCBhdCBidWlsZGluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgICAgIHZhciBjbGFzc2VzID0gR2xpZGUuc2V0dGluZ3MuY2xhc3NlcztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW0dsaWRlLnNldHRpbmdzLnR5cGVdKTtcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLmFjdGl2ZVNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXIgYnVpbGRpbmcgY2xhc3NlczpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGluZyB0byByZW1vdmUgY2xhc3NlcyBiZWZvcmUgcmVtb3VudGluZyBjb21wb25lbnRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5yZW1vdmVDbGFzc2VzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiByZXNpemluZyBvZiB0aGUgd2luZG93IHRvIGNhbGN1bGF0ZSBuZXcgZGltZW50aW9uc1xuICAgKiAtIG9uIHVwZGF0aW5nIHNldHRpbmdzIHZpYSBBUElcbiAgICovXG4gIEV2ZW50cy5vbihbJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTd2FwIGFjdGl2ZSBjbGFzcyBvZiBjdXJyZW50IHNsaWRlOlxuICAgKiAtIGFmdGVyIGVhY2ggbW92ZSB0byB0aGUgbmV3IGluZGV4XG4gICAqL1xuICBFdmVudHMub24oJ21vdmUuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQuYWN0aXZlQ2xhc3MoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEJ1aWxkO1xufVxuXG5mdW5jdGlvbiBDbG9uZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIENsb25lcyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGF0dGVybiBtYXAgYW5kIGNvbGxlY3Qgc2xpZGVzIHRvIGJlIGNsb25lZC5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENvbGxlY3QgY2xvbmVzIHdpdGggcGF0dGVybi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY29sbGVjdDogZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICAgIHZhciBpdGVtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgICB2YXIgc2xpZGVzID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlcztcbiAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICBwZXJWaWV3ID0gX0dsaWRlJHNldHRpbmdzLnBlclZpZXcsXG4gICAgICAgICAgY2xhc3NlcyA9IF9HbGlkZSRzZXR0aW5ncy5jbGFzc2VzO1xuXG5cbiAgICAgIHZhciBwZWVrSW5jcmVtZW50ZXIgPSArISFHbGlkZS5zZXR0aW5ncy5wZWVrO1xuICAgICAgdmFyIHBhcnQgPSBwZXJWaWV3ICsgcGVla0luY3JlbWVudGVyO1xuICAgICAgdmFyIHN0YXJ0ID0gc2xpZGVzLnNsaWNlKDAsIHBhcnQpO1xuICAgICAgdmFyIGVuZCA9IHNsaWRlcy5zbGljZSgtcGFydCk7XG5cbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihwZXJWaWV3IC8gc2xpZGVzLmxlbmd0aCkpOyByKyspIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjbG9uZSA9IHN0YXJ0W2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5jbG9uZVNsaWRlKTtcblxuICAgICAgICAgIGl0ZW1zLnB1c2goY2xvbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGVuZC5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgX2Nsb25lID0gZW5kW19pXS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgICBfY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmNsb25lU2xpZGUpO1xuXG4gICAgICAgICAgaXRlbXMudW5zaGlmdChfY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY2xvbmVkIHNsaWRlcyB3aXRoIGdlbmVyYXRlZCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICB2YXIgX0NvbXBvbmVudHMkSHRtbCA9IENvbXBvbmVudHMuSHRtbCxcbiAgICAgICAgICB3cmFwcGVyID0gX0NvbXBvbmVudHMkSHRtbC53cmFwcGVyLFxuICAgICAgICAgIHNsaWRlcyA9IF9Db21wb25lbnRzJEh0bWwuc2xpZGVzO1xuXG5cbiAgICAgIHZhciBoYWxmID0gTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKTtcbiAgICAgIHZhciBwcmVwZW5kID0gaXRlbXMuc2xpY2UoMCwgaGFsZikucmV2ZXJzZSgpO1xuICAgICAgdmFyIGFwcGVuZCA9IGl0ZW1zLnNsaWNlKGhhbGYsIGl0ZW1zLmxlbmd0aCk7XG4gICAgICB2YXIgd2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyAncHgnO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFwcGVuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFwcGVuZFtpXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHByZXBlbmQubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShwcmVwZW5kW19pMl0sIHNsaWRlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGl0ZW1zLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgaXRlbXNbX2kzXS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW50aW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50c0JpbmRlciBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0JpbmRlcigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCaW5kZXIpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAgICogQHBhcmFtICB7RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR9IGVsXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvZmYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnRzLCBlbCkge1xuICAgICAgdmFyIGNhcHR1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICBpZiAoaXNTdHJpbmcoZXZlbnRzKSkge1xuICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIHRoaXMubGlzdGVuZXJzW2V2ZW50c1tpXV0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29sbGVjdGVkIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgcmV6c2l6ZWAgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdy5cbiAgICAgKiBJdCdzIGEgY29zdGx5IGV2ZW50LCBzbyB3ZSBhcmUgZGVib3VuY2luZyBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgICAgIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZ2FwIHZhbHVlIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MuZGlyZWN0aW9uO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGRpcmVjdGlvbiBjbGFzcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChWQUxJRF9ESVJFQ1RJT05TLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgRGlyZWN0aW9uLl92ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdEaXJlY3Rpb24gdmFsdWUgbXVzdCBiZSBgbHRyYCBvciBgcnRsYCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLnJlbW92ZUNsYXNzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5hZGRDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlICsgQ29tcG9uZW50cy5HYXBzLnZhbHVlICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG11dGF0b3IgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIE1lcmdlIGluc3RhbmNlIHRyYW5zZm9ybWVycyB3aXRoIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCB0cmFuc2Zvcm1lcnMuXG4gICAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIFJ0bCBjb21wb25lbnQgYmUgbGFzdCBvbiB0aGUgbGlzdCxcbiAgICogc28gaXQgcmVmbGVjdHMgYWxsIHByZXZpb3VzIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIFRSQU5TRk9STUVSUyA9IFtHYXAsIEdyb3csIFBlZWtpbmcsIEZvY3VzaW5nXS5jb25jYXQoR2xpZGUuX3QsIFtSdGxdKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0xICogdHJhbnNmb3JtICsgJ3B4LCAwcHgsIDBweCknO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSAmJiBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPCcpKSB7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcblxuICAgICAgICBUcmFuc2xhdGUuc2V0KHdpZHRoICogKGxlbmd0aCAtIDEpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCgtd2lkdGggLSBnYXAgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgJiYgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSkge1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3RyYW5zbGF0ZS5qdW1wJyk7XG5cbiAgICAgICAgVHJhbnNsYXRlLnNldCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCh3aWR0aCAqIGxlbmd0aCArIGdhcCAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2xhdGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgdGhpcy5kdXJhdGlvbiArICdtcyAnICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAwbXMgJyArIHNldHRpbmdzLmFuaW1hdGlvblRpbWluZ0Z1bmM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuY29tcG9zZShwcm9wZXJ0eSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW50aW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5cbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgc3dpcGVTaW4gPSAwO1xuICB2YXIgc3dpcGVTdGFydFggPSAwO1xuICB2YXIgc3dpcGVTdGFydFkgPSAwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIFN3aXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN3aXBlIGJpbmRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIHN3aXBlU2luID0gbnVsbDtcbiAgICAgICAgc3dpcGVTdGFydFggPSB0b0ludChzd2lwZS5wYWdlWCk7XG4gICAgICAgIHN3aXBlU3RhcnRZID0gdG9JbnQoc3dpcGUucGFnZVkpO1xuXG4gICAgICAgIHRoaXMuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLmJpbmRTd2lwZUVuZCgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5zdGFydCcpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGBzd2lwZW1vdmVgIGV2ZW50LiBDYWxjdWxhdGVzIHVzZXIncyB0YXAgYW5nbGUgYW5kIGRpc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShldmVudCkge1xuICAgICAgaWYgKCFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB2YXIgX0dsaWRlJHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3MsXG4gICAgICAgICAgICB0b3VjaEFuZ2xlID0gX0dsaWRlJHNldHRpbmdzLnRvdWNoQW5nbGUsXG4gICAgICAgICAgICB0b3VjaFJhdGlvID0gX0dsaWRlJHNldHRpbmdzLnRvdWNoUmF0aW8sXG4gICAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXM7XG5cblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIHZhciBzdWJFeFN4ID0gdG9JbnQoc3dpcGUucGFnZVgpIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzdWJFeVN5ID0gdG9JbnQoc3dpcGUucGFnZVkpIC0gc3dpcGVTdGFydFk7XG4gICAgICAgIHZhciBwb3dFWCA9IE1hdGguYWJzKHN1YkV4U3ggPDwgMik7XG4gICAgICAgIHZhciBwb3dFWSA9IE1hdGguYWJzKHN1YkV5U3kgPDwgMik7XG4gICAgICAgIHZhciBzd2lwZUh5cG90ZW51c2UgPSBNYXRoLnNxcnQocG93RVggKyBwb3dFWSk7XG4gICAgICAgIHZhciBzd2lwZUNhdGhldHVzID0gTWF0aC5zcXJ0KHBvd0VZKTtcblxuICAgICAgICBzd2lwZVNpbiA9IE1hdGguYXNpbihzd2lwZUNhdGhldHVzIC8gc3dpcGVIeXBvdGVudXNlKTtcblxuICAgICAgICBpZiAoc3dpcGVTaW4gKiAxODAgLyBNYXRoLlBJIDwgdG91Y2hBbmdsZSkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgQ29tcG9uZW50cy5Nb3ZlLm1ha2Uoc3ViRXhTeCAqIHRvRmxvYXQodG91Y2hSYXRpbykpO1xuXG4gICAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmRyYWdnaW5nKTtcblxuICAgICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5tb3ZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcblxuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdmFyIHN0ZXBzID0gTWF0aC5yb3VuZChzd2lwZURpc3RhbmNlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcblxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGlzIHBvc2l0aXZlIGFuZCBncmVhdGVyIHRoYW4gdGhyZXNob2xkIG1vdmUgYmFja3dhcmQuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLnBlclRvdWNoKSB7XG4gICAgICAgICAgICBzdGVwcyA9IE1hdGgubWluKHN0ZXBzLCB0b0ludChzZXR0aW5ncy5wZXJUb3VjaCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgICAgIHN0ZXBzID0gLXN0ZXBzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPCcgKyBzdGVwcykpO1xuICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGlzIG5lZ2F0aXZlIGFuZCBsb3dlciB0aGFuIG5lZ2F0aXZlIHRocmVzaG9sZCBtb3ZlIGZvcndhcmQuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLnBlclRvdWNoKSB7XG4gICAgICAgICAgICBzdGVwcyA9IE1hdGgubWF4KHN0ZXBzLCAtdG9JbnQoc2V0dGluZ3MucGVyVG91Y2gpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgICAgICBzdGVwcyA9IC1zdGVwcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJz4nICsgc3RlcHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXaGlsZSBzd2lwZSBkb24ndCByZWFjaCBkaXN0YW5jZSBhcHBseSBwcmV2aW91cyB0cmFuc2Zvcm0uXG4gICAgICAgICAgQ29tcG9uZW50cy5Nb3ZlLm1ha2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuY2xhc3Nlcy5kcmFnZ2luZyk7XG5cbiAgICAgICAgdGhpcy51bmJpbmRTd2lwZU1vdmUoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTd2lwZUVuZCgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5lbmQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBzd2lwZSdzIHN0YXJ0aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gYmluZFN3aXBlU3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcblxuICAgICAgaWYgKHNldHRpbmdzLnN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMF0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZ3MuZHJhZ1RocmVzaG9sZCkge1xuICAgICAgICBCaW5kZXIub24oU1RBUlRfRVZFTlRTWzFdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMuc3RhcnQoZXZlbnQpO1xuICAgICAgICB9LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlU3RhcnQ6IGZ1bmN0aW9uIHVuYmluZFN3aXBlU3RhcnQoKSB7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1swXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGNhcHR1cmUpO1xuICAgICAgQmluZGVyLm9mZihTVEFSVF9FVkVOVFNbMV0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBjYXB0dXJlKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBzd2lwZSdzIG1vdmluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gYmluZFN3aXBlTW92ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oTU9WRV9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aHJvdHRsZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLm1vdmUoZXZlbnQpO1xuICAgICAgfSwgR2xpZGUuc2V0dGluZ3MudGhyb3R0bGUpLCBjYXB0dXJlKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmRTd2lwZU1vdmU6IGZ1bmN0aW9uIHVuYmluZFN3aXBlTW92ZSgpIHtcbiAgICAgIEJpbmRlci5vZmYoTU9WRV9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBjYXB0dXJlKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBzd2lwZSdzIGVuZGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZFN3aXBlRW5kOiBmdW5jdGlvbiBiaW5kU3dpcGVFbmQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKEVORF9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMzLmVuZChldmVudCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmRTd2lwZUVuZDogZnVuY3Rpb24gdW5iaW5kU3dpcGVFbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKEVORF9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVzIGV2ZW50IHRvdWNoZXMgcG9pbnRzIGFjY29ydGluZyB0byBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICB0b3VjaGVzOiBmdW5jdGlvbiB0b3VjaGVzKGV2ZW50KSB7XG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgbWluaW11bSBzd2lwZSBkaXN0YW5jZSBzZXR0aW5ncyBiYXNlZCBvbiBldmVudCB0eXBlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRocmVzaG9sZDogZnVuY3Rpb24gdGhyZXNob2xkKGV2ZW50KSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcblxuICAgICAgaWYgKE1PVVNFX0VWRU5UUy5pbmRleE9mKGV2ZW50LnR5cGUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLmRyYWdUaHJlc2hvbGQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXR0aW5ncy5zd2lwZVRocmVzaG9sZDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHN3aXBlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5lbmFibGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIGNvbXBvbmVudCBjbGFzczpcbiAgICogLSBhZnRlciBpbml0aWFsIGJ1aWxkaW5nXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmFmdGVyJywgZnVuY3Rpb24gKCkge1xuICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5zd2lwZWFibGUpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHN3aXBpbmcgYmluZGluZ3M6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJzXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVTdGFydCgpO1xuICAgIFN3aXBlLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgIFN3aXBlLnVuYmluZFN3aXBlRW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFN3aXBlO1xufVxuXG5mdW5jdGlvbiBJbWFnZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBJbWFnZXMgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMgbGlzdGVuZXIgdG8gZ2xpZGUgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlciB0byBwcmV2ZW50IGRyYWdnaW5nIGltYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbignZHJhZ3N0YXJ0JywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRoaXMuZHJhZ3N0YXJ0KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGBkcmFnc3RhcnRgIGV2ZW50IG9uIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZignZHJhZ3N0YXJ0JywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIuIFByZXZlbnRzIGRyYWdnaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkcmFnc3RhcnQ6IGZ1bmN0aW9uIGRyYWdzdGFydChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGltYWdlczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBJbWFnZXMudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEltYWdlcztcbn1cblxuZnVuY3Rpb24gQW5jaG9ycyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgLyoqXG4gICAqIEhvbGRzIGRldGFjaGluZyBzdGF0dXMgb2YgYW5jaG9ycy5cbiAgICogUHJldmVudHMgZGV0YWNoaW5nIG9mIGFscmVhZHkgZGV0YWNoZWQgYW5jaG9ycy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICB2YXIgZGV0YWNoZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSG9sZHMgcHJldmVudGluZyBzdGF0dXMgb2YgYW5jaG9ycy5cbiAgICogSWYgYHRydWVgIHJlZGlyZWN0aW9uIGFmdGVyIGNsaWNrIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgdmFyIHByZXZlbnRlZCA9IGZhbHNlO1xuXG4gIHZhciBBbmNob3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBhIGluaXRpYWwgc3RhdGUgb2YgYW5jaG9ycyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEhvbGRzIGNvbGxlY3Rpb24gb2YgYW5jaG9ycyBlbGVtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0hUTUxDb2xsZWN0aW9ufVxuICAgICAgICovXG4gICAgICB0aGlzLl9hID0gQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBldmVudHMgdG8gYW5jaG9ycyBpbnNpZGUgYSB0cmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbignY2xpY2snLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5jbGljayk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBldmVudHMgYXR0YWNoZWQgdG8gYW5jaG9ycyBpbnNpZGUgYSB0cmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBjbGljayBldmVudC4gUHJldmVudHMgY2xpY2tzIHdoZW4gZ2xpZGUgaXMgaW4gYHByZXZlbnRgIHN0YXR1cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhldmVudCkge1xuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyBhbmNob3JzIGNsaWNrIGV2ZW50IGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGV0YWNoOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoIWRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJywgdGhpcy5pdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cbiAgICAgICAgICB0aGlzLml0ZW1zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGV0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbmNob3JzIGNsaWNrIGV2ZW50cyBpbnNpZGUgZ2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgICAgcHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChkZXRhY2hlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLml0ZW1zW2ldLmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuaXRlbXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRhY2hlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEFuY2hvcnMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBbmNob3JzLl9hO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIERldGFjaCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gc3dpcGluZywgc28gdGhleSB3b24ndCByZWRpcmVjdCB0byBpdHMgYGhyZWZgIGF0dHJpYnV0ZXNcbiAgICovXG4gIEV2ZW50cy5vbignc3dpcGUubW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBBbmNob3JzLmRldGFjaCgpO1xuICB9KTtcblxuICAvKipcbiAgICogQXR0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBhZnRlciBzd2lwaW5nIGFuZCB0cmFuc2l0aW9ucyBlbmRzLCBzbyB0aGV5IGNhbiByZWRpcmVjdCBhZnRlciBjbGljayBhZ2FpblxuICAgKi9cbiAgRXZlbnRzLm9uKCdzd2lwZS5lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIGFuY2hvcnMgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBBbmNob3JzLmF0dGFjaCgpO1xuICAgIEFuY2hvcnMudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEFuY2hvcnM7XG59XG5cbnZhciBOQVZfU0VMRUNUT1IgPSAnW2RhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1tuYXZdXCJdJztcbnZhciBDT05UUk9MU19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbF49XCJjb250cm9sc1wiXSc7XG5cbmZ1bmN0aW9uIENvbnRyb2xzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgY2FwdHVyZSA9IHN1cHBvcnRzUGFzc2l2ZSQxID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblxuICB2YXIgQ29udHJvbHMgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdHMgYXJyb3dzLiBCaW5kcyBldmVudHMgbGlzdGVuZXJzXG4gICAgICogdG8gdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvbGxlY3Rpb24gb2YgbmF2aWdhdGlvbiBIVE1MIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX24gPSBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKE5BVl9TRUxFQ1RPUik7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBjb250cm9scyBIVE1MIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2MgPSBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKENPTlRST0xTX1NFTEVDVE9SKTtcblxuICAgICAgdGhpcy5hZGRCaW5kaW5ncygpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgYWN0aXZlIGNsYXNzIHRvIGN1cnJlbnQgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldEFjdGl2ZTogZnVuY3Rpb24gc2V0QWN0aXZlKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3ModGhpcy5fbltpXS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbiByZW1vdmVBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIGFjdGl2ZSBjbGFzcyBvbiBpdGVtcyBpbnNpZGUgbmF2aWdhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250cm9sc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIGFkZENsYXNzKGNvbnRyb2xzKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBpdGVtID0gY29udHJvbHNbR2xpZGUuaW5kZXhdO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuXG4gICAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyBmcm9tIGFjdGl2ZSBjb250cm9sLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRyb2xzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY29udHJvbHMpIHtcbiAgICAgIHZhciBpdGVtID0gY29udHJvbHNbR2xpZGUuaW5kZXhdO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaGFuZGxlcyB0byB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQmluZGluZ3M6IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmluZCh0aGlzLl9jW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbignY2xpY2snLCBlbGVtZW50c1tpXSwgdGhpcy5jbGljayk7XG4gICAgICAgIEJpbmRlci5vbigndG91Y2hzdGFydCcsIGVsZW1lbnRzW2ldLCB0aGlzLmNsaWNrLCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBiaW5kZWQgdG8gdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gZWxlbWVudHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vZmYoWydjbGljaycsICd0b3VjaHN0YXJ0J10sIGVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGBjbGlja2AgZXZlbnQgb24gdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqIE1vdmVzIHNsaWRlciBpbiBkcmllY3Rpb24gcHJlY2lzZWQgaW5cbiAgICAgKiBgZGF0YS1nbGlkZS1kaXJgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2xpZGUtZGlyJykpKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKENvbnRyb2xzLCAnaXRlbXMnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBjb2xsZWN0aW9uIG9mIHRoZSBjb250cm9scyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb250cm9scy5fYztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTd2FwIGFjdGl2ZSBjbGFzcyBvZiBjdXJyZW50IG5hdmlnYXRpb24gaXRlbTpcbiAgICogLSBhZnRlciBtb3VudGluZyB0byBzZXQgaXQgdG8gaW5pdGlhbCBpbmRleFxuICAgKiAtIGFmdGVyIGVhY2ggbW92ZSB0byB0aGUgbmV3IGluZGV4XG4gICAqL1xuICBFdmVudHMub24oWydtb3VudC5hZnRlcicsICdtb3ZlLmFmdGVyJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBDb250cm9scy5zZXRBY3RpdmUoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBhbmQgSFRNTCBDbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnJlbW92ZUJpbmRpbmdzKCk7XG4gICAgQ29udHJvbHMucmVtb3ZlQWN0aXZlKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENvbnRyb2xzO1xufVxuXG5mdW5jdGlvbiBLZXlib2FyZCAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgdmFyIEtleWJvYXJkID0ge1xuICAgIC8qKlxuICAgICAqIEJpbmRzIGtleWJvYXJkIGV2ZW50cyBvbiBjb21wb25lbnQgbW91bnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigna2V5dXAnLCBkb2N1bWVudCwgdGhpcy5wcmVzcyk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBrZXlib2FyZCBwcmVzcyBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZigna2V5dXAnLCBkb2N1bWVudCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXlib2FyZCdzIGFycm93cyBwcmVzcyBhbmQgbW92aW5nIGdsaWRlIGZvd2FyZCBhbmQgYmFja3dhcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBwcmVzczogZnVuY3Rpb24gcHJlc3MoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJz4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJzwnKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSBrZXlib2FyZDpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIHJlbW92ZSBhZGRlZCBldmVudHNcbiAgICogLSBvbiB1cGRhdGluZyB0byByZW1vdmUgZXZlbnRzIGJlZm9yZSByZW1vdW50aW5nXG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQudW5iaW5kKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudFxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlZmxlY3QgcG90ZW50aWFsIGNoYW5nZXMgaW4gc2V0dGluZ3NcbiAgICovXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEtleWJvYXJkLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGJpbmRlcjpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gS2V5Ym9hcmQ7XG59XG5cbmZ1bmN0aW9uIEF1dG9wbGF5IChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgQXV0b3BsYXkgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYXV0b3BsYXlpbmcgYW5kIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICBpZiAoR2xpZGUuc2V0dGluZ3MuaG92ZXJwYXVzZSkge1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgYXV0b3BsYXlpbmcgaW4gY29uZmlndXJlZCBpbnRlcnZhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxOdW1iZXJ9IGZvcmNlIFJ1biBhdXRvcGxheWluZyB3aXRoIHBhc3NlZCBpbnRlcnZhbCByZWdhcmRsZXNzIG9mIGBhdXRvcGxheWAgc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodGhpcy5faSkpIHtcbiAgICAgICAgICB0aGlzLl9pID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuXG4gICAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKCc+Jyk7XG5cbiAgICAgICAgICAgIF90aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgfSwgdGhpcy50aW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuX2kgPSBjbGVhckludGVydmFsKHRoaXMuX2kpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGF1dG9wbGF5aW5nIHdoaWxlIG1vdXNlIGlzIG92ZXIgZ2xpZGUncyBhcmVhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbignbW91c2VvdmVyJywgQ29tcG9uZW50cy5IdG1sLnJvb3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnN0b3AoKTtcbiAgICAgIH0pO1xuXG4gICAgICBCaW5kZXIub24oJ21vdXNlb3V0JywgQ29tcG9uZW50cy5IdG1sLnJvb3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmQgbW91c2VvdmVyIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZihbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLCBDb21wb25lbnRzLkh0bWwucm9vdCk7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShBdXRvcGxheSwgJ3RpbWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aW1lIHBlcmlvZCB2YWx1ZSBmb3IgdGhlIGF1dG9wbGF5IGludGVydmFsLiBQcmlvcml0aXplc1xuICAgICAqIHRpbWVzIGluIGBkYXRhLWdsaWRlLWF1dG9wbGF5YCBhdHRydWJ1dGVzIG92ZXIgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBhdXRvcGxheSA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXNbR2xpZGUuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1hdXRvcGxheScpO1xuXG4gICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRvSW50KGF1dG9wbGF5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvSW50KEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTdG9wIGF1dG9wbGF5aW5nIGFuZCB1bmJpbmQgZXZlbnRzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGNsZWFyIGRlZmluZWQgaW50ZXJ2YWxcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS51bmJpbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmc6XG4gICAqIC0gYmVmb3JlIGVhY2ggcnVuLCB0byByZXN0YXJ0IGF1dG9wbGF5aW5nXG4gICAqIC0gb24gcGF1c2luZyB2aWEgQVBJXG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIHdoaWxlIHN0YXJ0aW5nIGEgc3dpcGVcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ3J1bi5iZWZvcmUnLCAncGF1c2UnLCAnZGVzdHJveScsICdzd2lwZS5zdGFydCcsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnN0b3AoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF1dG9wbGF5aW5nOlxuICAgKiAtIGFmdGVyIGVhY2ggcnVuLCB0byByZXN0YXJ0IGF1dG9wbGF5aW5nXG4gICAqIC0gb24gcGxheWluZyB2aWEgQVBJXG4gICAqIC0gd2hpbGUgZW5kaW5nIGEgc3dpcGVcbiAgICovXG4gIEV2ZW50cy5vbihbJ3J1bi5hZnRlcicsICdwbGF5JywgJ3N3aXBlLmVuZCddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RhcnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSB0byByZXNldCBpbnRlcnZhbCB0aGF0IG1heSBjaGFuZ2VkXG4gICAqL1xuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5tb3VudCgpO1xuICB9KTtcblxuICAvKipcbiAgICogRGVzdHJveSBhIGJpbmRlcjpcbiAgICogLSBvbiBkZXN0cm95aW5nIGdsaWRlIGluc3RhbmNlIHRvIGNsZWFydXAgbGlzdGVuZXJzXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEF1dG9wbGF5O1xufVxuXG4vKipcbiAqIFNvcnRzIGtleXMgb2YgYnJlYWtwb2ludCBvYmplY3Qgc28gdGhleSB3aWxsIGJlIG9yZGVyZWQgZnJvbSBsb3dlciB0byBiaWdnZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBvaW50c1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc29ydEJyZWFrcG9pbnRzKHBvaW50cykge1xuICBpZiAoaXNPYmplY3QocG9pbnRzKSkge1xuICAgIHJldHVybiBzb3J0S2V5cyhwb2ludHMpO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ0JyZWFrcG9pbnRzIG9wdGlvbiBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBCcmVha3BvaW50cyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBzZXR0aW5ncy5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gIC8qKlxuICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gYnJlYWtwb2ludHMgb2JqZWN0IGluIHNldHRpbmdzLiBTb3J0cyBicmVha3BvaW50c1xuICAgKiBmcm9tIHNtYWxsZXIgdG8gbGFyZ2VyLiBJdCBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBwcm9wZXJcbiAgICogbWF0Y2hpbmcgY3VycmVudGx5IGFjdGl2ZSBicmVha3BvaW50IHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIHBvaW50cyA9IHNvcnRCcmVha3BvaW50cyhzZXR0aW5ncy5icmVha3BvaW50cyk7XG5cbiAgLyoqXG4gICAqIENhY2hlIGluaXRpYWwgc2V0dGluZ3MgYmVmb3JlIG92ZXJ3cml0dGluZy5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBkZWZhdWx0cyA9IF9leHRlbmRzKHt9LCBzZXR0aW5ncyk7XG5cbiAgdmFyIEJyZWFrcG9pbnRzID0ge1xuICAgIC8qKlxuICAgICAqIE1hdGNoZXMgc2V0dGluZ3MgZm9yIGN1cnJlY3RseSBtYXRjaGluZyBtZWRpYSBicmVha3BvaW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBvaW50c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKHBvaW50cykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZm9yICh2YXIgcG9pbnQgaW4gcG9pbnRzKSB7XG4gICAgICAgICAgaWYgKHBvaW50cy5oYXNPd25Qcm9wZXJ0eShwb2ludCkpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogJyArIHBvaW50ICsgJ3B4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBvaW50c1twb2ludF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSBpbnN0YW5jZSBzZXR0aW5ncyB3aXRoIGN1cnJlbnRseSBtYXRjaGluZyBicmVha3BvaW50IHNldHRpbmdzLlxuICAgKiBUaGlzIGhhcHBlbnMgcmlnaHQgYWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLlxuICAgKi9cbiAgX2V4dGVuZHMoc2V0dGluZ3MsIEJyZWFrcG9pbnRzLm1hdGNoKHBvaW50cykpO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgZ2xpZGUgd2l0aCBzZXR0aW5ncyBvZiBtYXRjaGVkIGJyZWtwb2ludDpcbiAgICogLSB3aW5kb3cgcmVzaXplIHRvIHVwZGF0ZSBzbGlkZXJcbiAgICovXG4gIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgR2xpZGUuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoc2V0dGluZ3MsIEJyZWFrcG9pbnRzLm1hdGNoKHBvaW50cykpO1xuICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSkpO1xuXG4gIC8qKlxuICAgKiBSZXNvcnQgYW5kIHVwZGF0ZSBkZWZhdWx0IHNldHRpbmdzOlxuICAgKiAtIG9uIHJlaW5pdCB2aWEgQVBJLCBzbyBicmVha3BvaW50IG1hdGNoaW5nIHdpbGwgYmUgcGVyZm9ybWVkIHdpdGggb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHBvaW50cyk7XG5cbiAgICBkZWZhdWx0cyA9IF9leHRlbmRzKHt9LCBzZXR0aW5ncyk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgcmVzaXplIGxpc3RlbmVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gIH0pO1xuXG4gIHJldHVybiBCcmVha3BvaW50cztcbn1cblxudmFyIENPTVBPTkVOVFMgPSB7XG4gIC8vIFJlcXVpcmVkXG4gIEh0bWw6IEh0bWwsXG4gIFRyYW5zbGF0ZTogVHJhbnNsYXRlLFxuICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgUGVlazogUGVlayxcbiAgU2l6ZXM6IFNpemVzLFxuICBHYXBzOiBHYXBzLFxuICBNb3ZlOiBNb3ZlLFxuICBDbG9uZXM6IENsb25lcyxcbiAgUmVzaXplOiBSZXNpemUsXG4gIEJ1aWxkOiBCdWlsZCxcbiAgUnVuOiBSdW4sXG5cbiAgLy8gT3B0aW9uYWxcbiAgU3dpcGU6IFN3aXBlLFxuICBJbWFnZXM6IEltYWdlcyxcbiAgQW5jaG9yczogQW5jaG9ycyxcbiAgQ29udHJvbHM6IENvbnRyb2xzLFxuICBLZXlib2FyZDogS2V5Ym9hcmQsXG4gIEF1dG9wbGF5OiBBdXRvcGxheSxcbiAgQnJlYWtwb2ludHM6IEJyZWFrcG9pbnRzXG59O1xuXG52YXIgR2xpZGUkMSA9IGZ1bmN0aW9uIChfQ29yZSkge1xuICBpbmhlcml0cyhHbGlkZSQkMSwgX0NvcmUpO1xuXG4gIGZ1bmN0aW9uIEdsaWRlJCQxKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEdsaWRlJCQxKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR2xpZGUkJDEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHbGlkZSQkMSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoR2xpZGUkJDEsIFt7XG4gICAga2V5OiAnbW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgcmV0dXJuIGdldChHbGlkZSQkMS5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHbGlkZSQkMS5wcm90b3R5cGUpLCAnbW91bnQnLCB0aGlzKS5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBDT01QT05FTlRTLCBleHRlbnNpb25zKSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBHbGlkZSQkMTtcbn0oR2xpZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBHbGlkZSQxO1xuIiwiaW1wb3J0IHsgYWRkTWFya2VyLCBjZW50ZXJNYXAgfSBmcm9tICcuL0dvb2dsZU1hcFV0aWxzJztcblxuY2xhc3MgR01hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2V0dXBEb21SZWZlcmVuY2VzKCkge1xuICAgIHRoaXMuYWNmTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjZi1tYXAnKTtcbiAgICB0aGlzLm1hcmtlcnMgPSB0aGlzLmFjZk1hcC5xdWVyeVNlbGVjdG9yQWxsKCcubWFya2VyJyk7XG4gIH1cblxuICAvKipcbiAgICogMS4gYWRkIG1hcmtlcnNcbiAgICogMi4gY2VudGVyIG1hcFxuICAgKi9cblxuICBuZXdNYXAoZWwpIHtcbiAgICB0aGlzLmFyZ3MgPSB7XG4gICAgICB6b29tOiAxNixcbiAgICAgIGNlbnRlcjogeyBsYXQ6IDAsIGxuZzogMCB9LFxuICAgIH07XG5cbiAgICB0aGlzLm1hcCA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTWFwKGVsLCB0aGlzLmFyZ3MpO1xuICAgIHRoaXMubWFwLm1hcmtlcnMgPSBbXTtcblxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh4KSA9PiB7IC8qIDEgKi9cbiAgICAgIGFkZE1hcmtlcih4LCB0aGlzLm1hcCk7XG4gICAgfSk7XG5cbiAgICBjZW50ZXJNYXAodGhpcy5tYXApOyAvKiAyICovXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBEb21SZWZlcmVuY2VzKCk7XG4gICAgdGhpcy5uZXdNYXAodGhpcy5hY2ZNYXApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXA7XG4iLCIvKipcbiAqIDEuIGlmIG1hcmtlciBjb250YWlucyBIVE1MLCBhZGQgaXQgdG8gYW4gaW5mb1dpbmRvd1xuICogMi4gY3JlYXRlIGluZm8gd2luZG93XG4gKiAzLiBzaG93IGluZm8gd2luZG93IHdoZW4gbWFya2VyIGlzIGNsaWNrZWRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWFya2VyKG1hcmtlciwgbWFwKSB7XG4gIGNvbnN0IGxhdGxuZyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKFxuICAgIG1hcmtlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhdFwiKSxcbiAgICBtYXJrZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1sbmdcIilcbiAgKTtcblxuICBjb25zdCBtYXJrZXJQaW4gPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGxhdGxuZyxcbiAgICBtYXAsXG4gIH0pO1xuXG4gIG1hcC5tYXJrZXJzLnB1c2gobWFya2VyUGluKTtcblxuICBpZiAobWFya2VyLmlubmVySFRNTCkge1xuICAgIC8qIDEgKi9cbiAgICBjb25zb2xlLmxvZyhtYXJrZXIuaW5uZXJIVE1MKTtcbiAgICBjb25zdCBpbmZvV2luZG93ID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgIC8qIDIgKi8gY29udGVudDogbWFya2VyLmlubmVySFRNTCxcbiAgICB9KTtcblxuICAgIHdpbmRvdy5nb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJQaW4sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLyogMyAqL1xuICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyUGluKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIDEuIGxvb3AgdGhyb3VnaCBhbGwgbWFya2VycyBhbmQgY3JlYXRlIGJvdW5kc1xuICogMi4gb25seSAxIG1hcmtlcj9cbiAqIDMuIHNldCBjZW50ZXIgb2YgbWFwXG4gKiA0LiBmaXQgdG8gYm91bmRzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlck1hcChtYXApIHtcbiAgY29uc3QgYm91bmRzID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICBtYXAubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAvKiAxICovXG4gICAgY29uc3QgbGF0bG5nID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICBtYXJrZXIucG9zaXRpb24ubGF0KCksXG4gICAgICBtYXJrZXIucG9zaXRpb24ubG5nKClcbiAgICApO1xuXG4gICAgYm91bmRzLmV4dGVuZChsYXRsbmcpO1xuICB9KTtcblxuICBpZiAobWFwLm1hcmtlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgLyogMiAqL1xuICAgIG1hcC5zZXRDZW50ZXIoYm91bmRzLmdldENlbnRlcigpKTsgLyogMyAqL1xuICAgIG1hcC5zZXRab29tKDE2KTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuZml0Qm91bmRzKGJvdW5kcyk7IC8qIDQgKi9cbiAgfVxufVxuIiwiaW1wb3J0IEdsaWRlIGZyb20gJ0BnbGlkZWpzL2dsaWRlJztcblxuY2xhc3MgSGVyb1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBwYWdlUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcykge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnBhZ2VQYXJhbXMgPSBwYWdlUGFyYW1zO1xuICAgIHRoaXMudGVtcGxhdGVQYXJhbXMgPSB0ZW1wbGF0ZVBhcmFtcztcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zb2xlLmxvZygnaGVyb3NsaWRlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIGNvdW50IGhvdyBtYW55IHNsaWRlcyB0aGVyZSBhcmVcbiAgICogMi4gR2VuZXJhdGUgdGhlIEhUTUwgZm9yIHRoZSBuYXZpZ2F0aW9uIGRvdHNcbiAgICogMy4gQWRkIHRoZSBkb3RzIEhUTUwgdG8gdGhlIERPTVxuICAgKiA0LiBBY3R1YWxseSBpbml0aWFsaXplIHRoZSBnbGlkZSAvIHNsaWRlciBzY3JpcHRcbiAgICovXG5cbiAgc2V0dXBHbGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuaGVyb1NsaWVyKSB7XG4gICAgICB0aGlzLmRvdENvdW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoOyAvKiAxICovXG4gICAgICB0aGlzLmRvdEhUTUwgPSAnJzsgLyogMiAqL1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90Q291bnQ7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmRvdEhUTUwgKz0gYDxidXR0b24gY2xhc3M9J3NsaWRlcl9fYnVsbGV0IGdsaWRlX19idWxsZXQnIGRhdGEtZ2xpZGUtZGlyPSc9JHtpfSc+PC9idXR0b24+YDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5nbGlkZUJ1bGxldHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmRvdEhUTUwpOyAvKiAzICovXG5cbiAgICAgIC8qIDQgKi9cbiAgICAgIHRoaXMuZ2xpZGUgPSBuZXcgR2xpZGUoJy5oZXJvLXNsaWRlcicsIHtcbiAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgICAgICAgcGVyVmlldzogMSxcbiAgICAgICAgYXV0b3BsYXk6IDMwMDAsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5nbGlkZS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwRE9NUmVmZXJlbmNlcygpIHtcbiAgICB0aGlzLmhlcm9TbGllciA9ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1zbGlkZXInKTtcbiAgICB0aGlzLnNsaWRlcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLmhlcm8tc2xpZGVyX19zbGlkZScpO1xuICAgIHRoaXMuZ2xpZGVCdWxsZXRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVfX2J1bGxldHMnKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cERPTVJlZmVyZW5jZXMoKTtcbiAgICB0aGlzLnNldHVwR2xpZGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2xpZGVyO1xuIiwiY2xhc3MgTW9iaWxlTWVudSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcl9fbWVudScpO1xuICAgIHRoaXMub3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcl9fbWVudS10cmlnZ2VyJyk7XG4gICAgdGhpcy5ldmVudHMoKTtcbiAgICBjb25zb2xlLmxvZygnbW9iaWxlIG1lbnUganMgbG9hZGVkJyk7XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgdGhpcy5vcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuTWVudSgpKTtcbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIHRoaXMub3BlbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYS1iYXJzJyk7XG4gICAgdGhpcy5vcGVuQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXdpbmRvdy1jbG9zZScpO1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaXRlLWhlYWRlcl9fbWVudS0tYWN0aXZlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiIsImV4cG9ydCBjb25zdCBzcGlubmVyTG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzcGlubmVyLWxvYWRlclwiPjwvZGl2PmA7XG59XG5cbmNvbnN0IHJlc3VsdExpc3QgPSAoaXRlbXMpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8dWwgY2xhc3M9XCJsaW5rLWxpc3QgbWluLWxpc3RcIj5cbiAgICAgICR7aXRlbXMubWFwKChpdGVtKSA9PiByZXN1bHRJdGVtKGl0ZW0pKS5qb2luKCcnKX1cbiAgICA8L3VsPmBcbn1cblxuY29uc3QgcmVzdWx0SXRlbSA9IChpdGVtKSA9PiB7XG4gIHJldHVybiBgXG4gICAgPGxpPlxuICAgICAgPGEgaHJlZj1cIiR7aXRlbS5saW5rfVwiPlxuICAgICAgICAke2l0ZW0udGl0bGUucmVuZGVyZWR9XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgYFxufVxuXG5jb25zdCBub1Jlc3VsdCA9ICgpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8cD5ObyBnZW5lcmFsIGluZm9ybWF0aW9uIG1hdGNoZXMgdGhhdCBzZWFyY2g8L3A+XG4gIGBcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaFJlc3VsdHMgPSAoanNvbikgPT4ge1xuICByZXR1cm4gYFxuICAgIDxoMiBjbGFzcz1cInNlYXJjaC1vdmVybGF5X19zZWN0aW9uLXRpdGxlXCI+R2VuZXJhbCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAke2pzb24ubGVuZ3RoID8gcmVzdWx0TGlzdChqc29uKSA6IG5vUmVzdWx0KCl9XG4gICAgYDsgIFxufVxuXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoKSA9PiBgPHA+VW5leHBlY3RlZCBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbjwvcD5gO1xuIiwiaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gJy4vc2VhcmNoVXRpbHMnO1xuaW1wb3J0IHsgc3Bpbm5lckxvYWRlciwgc2VhcmNoUmVzdWx0cywgZXJyb3IgfSBmcm9tICcuL2h0bWxUZW1wbGF0ZXMnO1xuXG5jbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmlzT3ZlcmxheU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnR5cGluZ1RpbWVyID0gJyc7XG4gICAgdGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gJyc7XG4gICAgdGhpcy51bml2ZXJzaXR5RGF0YSA9IHdpbmRvdy5nbG9iYWxUaGlzLnVuaXZlcnNpdHlEYXRhO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2V0dXBET01SZWZlcmVuY2VzKCkge1xuICAgIHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtb3ZlcmxheScpO1xuICAgIHRoaXMub3BlblNlYXJjaFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNlYXJjaC10cmlnZ2VyJyk7XG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtb3ZlcmxheV9fY2xvc2UnKTtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRlcm0nKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLW92ZXJsYXlfX3Jlc3VsdHMnKTtcbiAgfVxuXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5vcGVuU2VhcmNoVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLm9wZW5PdmVybGF5KGUpKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY2xvc2VPdmVybGF5KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5UHJlc3NEaXNwYXRjaGVyKGUpKTtcbiAgICB0aGlzLnNlYXJjaFRlcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy50eXBpbmdMb2dpYyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5PdmVybGF5KCkge1xuICAgIHRoaXMuc2VhcmNoT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgdGhpcy5pc092ZXJsYXlPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlT3ZlcmxheSgpIHtcbiAgICB0aGlzLnNlYXJjaE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHRoaXMuaXNPdmVybGF5T3BlbiA9IGZhbHNlO1xuICB9XG5cbiAga2V5UHJlc3NEaXNwYXRjaGVyKGUpIHtcbiAgICBpZiAoXG4gICAgICBlLmtleUNvZGUgPT09IDgzXG4gICAgICAmJiAhdGhpcy5pc092ZXJsYXlPcGVuXG4gICAgICAmJiAhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0OmZvY3VzJykubGVuZ3RoID4gMClcbiAgICAgICYmICEoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWE6Zm9jdXMnKS5sZW5ndGggPiAwKSkge1xuICAgICAgdGhpcy5vcGVuT3ZlcmxheSgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiB0aGlzLmlzT3ZlcmxheU9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgdHlwaW5nTG9naWMoZSkge1xuICAgIHRoaXMuZXZlbnQgPSBlO1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoVGVybS52YWx1ZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50eXBpbmdUaW1lcik7XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0udmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3Bpbm5lclZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gc3Bpbm5lckxvYWRlcigpO1xuICAgICAgICAgIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UmVzdWx0cygpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBzZWFyY2hSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBlcnJvcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5zZWFyY2hUZXJtLnZhbHVlO1xuICB9XG5cbiAgYXN5bmMgZ2V0UmVzdWx0cygpIHtcbiAgICBjb25zdCBwb3N0c0pTT04gPSBhd2FpdCBnZXRKU09OKGAke3RoaXMudW5pdmVyc2l0eURhdGEucm9vdFVybH0vd3AtanNvbi9hc2R3cC92Mi9wb3N0c2AsIHtcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hUZXJtLnZhbHVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZXNKU09OID0gYXdhaXQgZ2V0SlNPTihgJHt0aGlzLnVuaXZlcnNpdHlEYXRhLnJvb3RVcmx9L3dwLWpzb24vd3AvdjIvcGFnZXNgLCB7XG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoVGVybS52YWx1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xuICAgIHJldHVybiBbLi4ucG9zdHNKU09OLCAuLi5wYWdlc0pTT05dO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRE9NUmVmZXJlbmNlcygpO1xuICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiIsIi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHVybCBcbiAqIEBwYXJhbSB7Kn0gcXNQYXJhbXMgXG4gKiBAcmV0dXJucyBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIHFzUGFyYW1zKSB7XG4gIGNvbnN0IGJ1aWxkUXVlcnlTdHJpbmcgPSAocGFyYW1zKSA9PiBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoZCkgPT4gYCR7ZFswXX09JHtkWzFdfWApLmpvaW4oJyYnKTtcblxuICBjb25zdCBxcyA9IHFzUGFyYW1zID8gYD8ke2J1aWxkUXVlcnlTdHJpbmcocXNQYXJhbXMpfWAgOiAnJztcbiAgcmV0dXJuIGZldGNoKGAke3VybH0ke3FzfWApXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn0iLCJpbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuLi8uLi9vcmdhbmlzbXMvbW9iaWxlTWVudS9tb2JpbGVNZW51Lm9yZ2FuaXNtJztcbmltcG9ydCBIZXJvU2xpZGVyIGZyb20gJy4uLy4uL29yZ2FuaXNtcy9oZXJvU2xpZGVyL2hlcm9TbGlkZXIub3JnYW5pc20nO1xuaW1wb3J0IEdNYXAgZnJvbSAnLi4vLi4vb3JnYW5pc21zL2dvb2dsZU1hcC9Hb29nbGVNYXAub3JnYW5pc20nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9vcmdhbmlzbXMvc2VhcmNoL3NlYXJjaC5vcmdhbmlzbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHBhZ2VQYXJhbXMpIHtcbiAgICB0aGlzLnBhZ2VQYXJhbXMgPSBwYWdlUGFyYW1zO1xuICAgIHRoaXMudGVtcGxhdGVQYXJhbXMgPSB7XG4gICAgICB0ZW1wbGF0ZU5hbWU6ICdnZW5lcmljJyxcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzZXR1cE9yZ2FuaXNtcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1jb21wb25lbnQ9XCJtb2JpbGUtbWVudVwiJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMuTU9CSUxFX01FTlUgPSBuZXcgTW9iaWxlTWVudShlbCwgdGhpcy5wYWdlUGFyYW1zLCB0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWNvbXBvbmVudD1cImhlcm8tc2xpZGVyXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMuSEVST19TTElERVIgPSBuZXcgSGVyb1NsaWRlcihlbCwgdGhpcy5wYWdlUGFyYW1zLCB0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWNvbXBvbmVudD1cImdvb2dsZS1tYXBcIl0nKS5mb3JFYWNoKCgpID0+IHtcbiAgICAgIHRoaXMuR09PR0xFX01BUCA9IG5ldyBHTWFwKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1jb21wb25lbnQ9XCJzZWFyY2hcIl0nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5TRUFSQ0ggPSBuZXcgU2VhcmNoKGVsLCB0aGlzLnBhZ2VQYXJhbXMsIHRoaXMudGVtcGxhdGVQYXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwT3JnYW5pc21zKCk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zaW5nbGUucGFnZS5zY3NzJztcblxuaW1wb3J0IEdlbmVyaWNUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvZ2VuZXJpYy9nZW5lcmljLnRlbXBsYXRlJztcblxuY2xhc3MgU2luZ2xlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VQYXJhbXMgPSB7XG4gICAgICBwYWdlTm9kZTogcGFnZSxcbiAgICAgIHBhZ2VUaXRsZTogcGFnZS5kYXRhc2V0LmpzUGFnZSxcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzZXR1cFRlbXBsYXRlKCkge1xuICAgIHRoaXMuR0VORVJJQ19URU1QTEFURSA9IG5ldyBHZW5lcmljVGVtcGxhdGUodGhpcy5wYWdlUGFyYW1zKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cFRlbXBsYXRlKCk7XG4gIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcGFnZT1cInNpbmdsZS1wYWdlXCJdJykuZm9yRWFjaCgocGFnZSkgPT4gbmV3IFNpbmdsZVBhZ2UocGFnZSkpO1xuIl0sIm5hbWVzIjpbImFkZE1hcmtlciIsImNlbnRlck1hcCIsIkdNYXAiLCJpbml0IiwiYWNmTWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFya2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImFyZ3MiLCJ6b29tIiwiY2VudGVyIiwibGF0IiwibG5nIiwibWFwIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImZvckVhY2giLCJ4Iiwic2V0dXBEb21SZWZlcmVuY2VzIiwibmV3TWFwIiwibWFya2VyIiwibGF0bG5nIiwiTGF0TG5nIiwiZ2V0QXR0cmlidXRlIiwibWFya2VyUGluIiwiTWFya2VyIiwicG9zaXRpb24iLCJwdXNoIiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsImluZm9XaW5kb3ciLCJJbmZvV2luZG93IiwiY29udGVudCIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJvcGVuIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiZXh0ZW5kIiwibGVuZ3RoIiwic2V0Q2VudGVyIiwiZ2V0Q2VudGVyIiwic2V0Wm9vbSIsImZpdEJvdW5kcyIsIkdsaWRlIiwiSGVyb1NsaWRlciIsInBhZ2VQYXJhbXMiLCJ0ZW1wbGF0ZVBhcmFtcyIsImhlcm9TbGllciIsImRvdENvdW50Iiwic2xpZGVzIiwiZG90SFRNTCIsImkiLCJnbGlkZUJ1bGxldHMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnbGlkZSIsInR5cGUiLCJwZXJWaWV3IiwiYXV0b3BsYXkiLCJtb3VudCIsInNldHVwRE9NUmVmZXJlbmNlcyIsInNldHVwR2xpZGUiLCJNb2JpbGVNZW51IiwibWVudSIsIm9wZW5CdXR0b24iLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1lbnUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzcGlubmVyTG9hZGVyIiwicmVzdWx0TGlzdCIsIml0ZW1zIiwiaXRlbSIsInJlc3VsdEl0ZW0iLCJqb2luIiwibGluayIsInRpdGxlIiwicmVuZGVyZWQiLCJub1Jlc3VsdCIsInNlYXJjaFJlc3VsdHMiLCJqc29uIiwiZXJyb3IiLCJnZXRKU09OIiwiU2VhcmNoIiwiaXNPdmVybGF5T3BlbiIsInR5cGluZ1RpbWVyIiwiaXNTcGlubmVyVmlzaWJsZSIsInByZXZpb3VzVmFsdWUiLCJ1bml2ZXJzaXR5RGF0YSIsImdsb2JhbFRoaXMiLCJzZWFyY2hPdmVybGF5Iiwib3BlblNlYXJjaFRyaWdnZXJzIiwiY2xvc2VCdXR0b24iLCJzZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0c0NvbnRhaW5lciIsInRyaWdnZXIiLCJlIiwib3Blbk92ZXJsYXkiLCJjbG9zZU92ZXJsYXkiLCJrZXlQcmVzc0Rpc3BhdGNoZXIiLCJ0eXBpbmdMb2dpYyIsImFkZCIsInJlbW92ZSIsImtleUNvZGUiLCJ2YWx1ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRSZXN1bHRzIiwidGhlbiIsInJlc3VsdHMiLCJyb290VXJsIiwic2VhcmNoIiwicG9zdHNKU09OIiwicGFnZXNKU09OIiwic2V0dXBFdmVudExpc3RlbmVycyIsInVybCIsInFzUGFyYW1zIiwiYnVpbGRRdWVyeVN0cmluZyIsInBhcmFtcyIsIk9iamVjdCIsImVudHJpZXMiLCJkIiwicXMiLCJmZXRjaCIsInJlc3BvbnNlIiwiZGF0YSIsIkdlbmVyaWNUZW1wbGF0ZSIsInRlbXBsYXRlTmFtZSIsIk1PQklMRV9NRU5VIiwiSEVST19TTElERVIiLCJHT09HTEVfTUFQIiwiU0VBUkNIIiwidGVtcGxhdGVQYXIiLCJzZXR1cE9yZ2FuaXNtcyIsIlNpbmdsZVBhZ2UiLCJwYWdlIiwicGFnZU5vZGUiLCJwYWdlVGl0bGUiLCJkYXRhc2V0IiwianNQYWdlIiwiR0VORVJJQ19URU1QTEFURSIsInNldHVwVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9