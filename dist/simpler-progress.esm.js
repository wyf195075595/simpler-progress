/*!
 * SimplerProgress.js v1.0.0
 * https://195075595.github.io
 *
 * Copyright 2023-present wangyf1024
 * Released under the ISC license
 *
 * Date: 2023-03-23T00:48:22.880Z
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var Progress = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Progress, _HTMLElement);
  var _super = _createSuper(Progress);
  function Progress() {
    var _this;
    _classCallCheck(this, Progress);
    // 调用超类的构造器
    _this = _super.call(this);
    // 创建一个影子 DOM 树并将其附加到这个元素
    // 设置为 this.shadowRoot 的值
    _this.attachShadow({
      mode: 'open'
    });

    // 克隆模板，定义自定义组件的后代及样式
    // 然后把内容追加到影子根节点
    _this.createTemplate();
    _this.shadowRoot.append(_this.template.content.cloneNode(true));

    // 内容模板
    _this.contentTemplate = "\u6B63\u5728\u5B89\u88C5 #percentage %";

    // 取得对影子DOM中重要元素的引用
    _this.progress = _this.shadowRoot.querySelector('.progress');
    _this.progressContent = _this.shadowRoot.querySelector('.progress-content');
    _this.progressWrapper = _this.shadowRoot.querySelector('.progress-wrapper');

    // 初始化进度
    _this.start = 0;
    _this.max = 100;
    return _this;
  }
  // 钩子函数： 自定义元素增加、删除、修改属性时 ，调用。
  // 触发此回调函数，必须监听变化的属性static get observedAttributes() ,返回监听的属性。
  _createClass(Progress, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log(name, oldValue, newValue);
    }
    // 创建一个 template 元素，用于保存样式和元素树,可以在每个 元素的实例中使用它门
  }, {
    key: "createTemplate",
    value: function createTemplate() {
      var template = document.createElement('template');
      template.innerHTML = "\n            <style>\n              .progress-wrapper {\n                position: relative;\n                overflow: hidden;\n                width: 300px;\n                height: 20px;\n                text-align: center;\n                border-radius: 10px;\n                background-color: #cdeee3;\n              }\n        \n              .progress {\n                width: 0%;\n                height: 100%;\n                transition: all 200ms;\n                background-color: #3da985;\n              }\n        \n              p {\n                font-size: 12px;\n                font-weight: bolder;\n                position: absolute;\n                z-index: 10;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                margin: 0;\n                transition: all 200ms;\n                background-image: linear-gradient(to right, #cdeee3 0%, #3da985 0%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n              }\n            </style>\n            <div class=\"progress-wrapper\">\n                <div class=\"progress\"></div>\n                <p class=\"progress-content\">\u6B63\u5728\u5B89\u88C5 0%</p>\n            </div>\n        ";
      this.template = template;
    }
    // 更新进度条
  }, {
    key: "updateProgress",
    value: function updateProgress(percentage) {
      this.progress.style.width = percentage + "%";
      this.progressContent.innerText = this.contentTemplate.replace("#percentage", percentage);
      this.progressContent.style.backgroundImage = "linear-gradient(to right, #cdeee3 ".concat(percentage, "%, #3da985 ").concat(percentage, "%)");
    }
    // 常用属性读写
  }, {
    key: "percentage",
    get: function get() {
      return this.start;
    },
    set: function set(pt) {
      if (String(pt).length) {
        if (pt >= this.max) pt = this.max;
        this.start = pt;
        this.updateProgress(pt);
        this.setAttribute("data-percentage", pt);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.progressWrapper.style.width;
    },
    set: function set(val) {
      if (val) {
        this.progressWrapper.style.width = val;
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this.progressWrapper.style.height;
    },
    set: function set(val) {
      if (val) {
        this.progressWrapper.style.height = val;
        var fontSize = parseInt(1 / 3 * +String(val).replace("px", ""));
        this.fontSize = fontSize + "px";
      }
    }
  }, {
    key: "fontSize",
    get: function get() {
      return this.progressContent.style.fontSize;
    },
    set: function set(val) {
      if (val) {
        this.progressContent.style.fontSize = val;
      }
    }
  }]);
  return Progress;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // 这个静态属性对 attributeChangedCallback 方法是必须的，只有在这个数组中列出的属性名才会触发对该方法的调用
Progress.observedAttributes = ['innerText', 'value', 'data-percentage'];
customElements.define('my-progress', Progress);

export { Progress as default };
