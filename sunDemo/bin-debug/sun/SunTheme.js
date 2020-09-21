/**
 * ...2020-9-8
 * @author mark_zq
 * 纯代码组件类，可独立使用
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/** 文本 */
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
;
/** 精灵 */
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sprite;
}(egret.Sprite));
__reflect(Sprite.prototype, "Sprite");
;
/** 图形 */
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shape;
}(egret.Shape));
__reflect(Shape.prototype, "Shape");
;
/** 显示对象 */
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObject;
}(egret.DisplayObject));
__reflect(DisplayObject.prototype, "DisplayObject");
;
/** 显示对象容器 */
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObjectContainer;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjectContainer.prototype, "DisplayObjectContainer");
;
/** 坐标 */
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Point;
}(egret.Point));
__reflect(Point.prototype, "Point");
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(egret.Rectangle));
__reflect(Rectangle.prototype, "Rectangle");
;
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bitmap;
}(egret.Bitmap));
__reflect(Bitmap.prototype, "Bitmap");
;
var BitmapData = (function (_super) {
    __extends(BitmapData, _super);
    function BitmapData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BitmapData;
}(egret.BitmapData));
__reflect(BitmapData.prototype, "BitmapData");
;
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stage;
}(egret.Stage));
__reflect(Stage.prototype, "Stage");
;
var Tween = (function (_super) {
    __extends(Tween, _super);
    function Tween() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tween;
}(egret.Tween));
__reflect(Tween.prototype, "Tween");
;
var Ease = (function (_super) {
    __extends(Ease, _super);
    function Ease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ease;
}(egret.Ease));
__reflect(Ease.prototype, "Ease");
;
//----------------------------------------------
//以下几种方法在使用前都必须先调用各自的初始化函数
//sun.TipsManager.getIns().init(this.stage);
//sun.showLog.getIns().init(this.stage);
//sun.AlertManager.getIns().init(this.stage);
/** 打印日志 */
var log = console.log;
var trace = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    sun.LogManager.getIns().logMessage(str);
};
var traceSimple = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    sun.LogManager.getIns().log(str);
};
/** 提示或警告 */
var alertAuto = function (title, closeTime) {
    if (title === void 0) { title = "提示或警告"; }
    if (closeTime === void 0) { closeTime = 3; }
    sun.AlertManager.getIns().alertAuto(title, closeTime);
};
var alertHand = function (title) {
    if (title === void 0) { title = "提示或警告"; }
    sun.AlertManager.getIns().alert(title);
};
var alertRoll = function (title, bgWidth) {
    if (title === void 0) { title = "提示或警告"; }
    if (bgWidth === void 0) { bgWidth = 200; }
    sun.AlertManager.getIns().alertRoll(title, bgWidth);
};
/**
 * sun模块
 * 模块中的代码属于模块本身的作用域，而不是全局作用域。
 * 也这就意味着没有明确的 export 的话，模块中的 变量，函数，类等对其他模块是不见的。相对的其他模块要使用某一模块的内容需要通过 import 导入。
 */
var sun;
(function (sun) {
    /** 字体 */
    var FONT = (function () {
        function FONT() {
        }
        FONT.YaHei = "Microsoft YaHei";
        FONT.HeiTi = "黑体";
        return FONT;
    }());
    sun.FONT = FONT;
    __reflect(FONT.prototype, "sun.FONT");
    /** 常量类 */
    var Const = (function () {
        function Const() {
        }
        /**布局 横版*/
        Const.HORIZONTAL = "horizontal";
        /**布局 竖版*/
        Const.VERTICAL = "vertical";
        /**形状 方块*/
        Const.SHAPE_RECT = "shape rect";
        /**形状 圆角方块*/
        Const.SHAPE_RECT_ROUND = "shape rect round";
        /**形状 圆块*/
        Const.SHAPE_CIRCLE = "shape circle";
        /**版本 调试*/
        Const.VER_DEBUG = "debug";
        /**版本 发布*/
        Const.VER_RELEASE = "release";
        return Const;
    }());
    sun.Const = Const;
    __reflect(Const.prototype, "sun.Const");
    /** 游戏基础数据 */
    var GameData = (function () {
        function GameData() {
        }
        /**游戏屏幕宽 */
        GameData.stageWidth = 640;
        /**游戏屏幕高 */
        GameData.stageHeight = 1136;
        /**帧频*/
        GameData.FPS = 60;
        /**游戏版号，默认是调试版 */
        GameData.version = Const.VER_DEBUG;
        /**是否为移动模式（例如移动电话或平板电脑） */
        GameData.isMobile = egret.Capabilities.isMobile;
        /**游戏的ID */
        GameData.gameId = 1;
        /**游戏分数 */
        GameData.score = 0;
        return GameData;
    }());
    sun.GameData = GameData;
    __reflect(GameData.prototype, "sun.GameData");
    /**颜色 */
    var Color = (function () {
        function Color() {
        }
        Object.defineProperty(Color, "skinNormal", {
            //默认：primary颜色
            get: function () { return 0X409eff; },
            enumerable: true,
            configurable: true
        });
        ; //显示蓝色
        Object.defineProperty(Color, "skinDown", {
            get: function () { return 0X66b1ff; },
            enumerable: true,
            configurable: true
        });
        ; //按下背景色
        Object.defineProperty(Color, "random", {
            //随机颜色
            get: function () { return Math.random() * 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "white", {
            //白色
            get: function () { return 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "defaultBgColor", {
            //灰白色
            get: function () { return 0xf7f5fb; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "darkBlue", {
            //primary颜色
            get: function () { return 0X409eff; },
            enumerable: true,
            configurable: true
        });
        ; //深蓝
        Object.defineProperty(Color, "lightBlue", {
            get: function () { return 0Xecf5ff; },
            enumerable: true,
            configurable: true
        });
        ; //浅蓝
        Object.defineProperty(Color, "darkGreen", {
            //success颜色
            get: function () { return 0X67c23a; },
            enumerable: true,
            configurable: true
        });
        ; //深绿
        Object.defineProperty(Color, "lightGreen", {
            get: function () { return 0Xf0f9eb; },
            enumerable: true,
            configurable: true
        });
        ; //浅绿
        Object.defineProperty(Color, "darkYellow", {
            //warning颜色
            get: function () { return 0Xe6a23c; },
            enumerable: true,
            configurable: true
        });
        ; //深黄
        Object.defineProperty(Color, "lightYellow", {
            get: function () { return 0Xfdf6ec; },
            enumerable: true,
            configurable: true
        });
        ; //浅黄
        Object.defineProperty(Color, "darkRed", {
            //error颜色
            get: function () { return 0Xf56c6c; },
            enumerable: true,
            configurable: true
        });
        ; //深黄
        Object.defineProperty(Color, "lightRed", {
            get: function () { return 0Xfef0f0; },
            enumerable: true,
            configurable: true
        });
        ; //浅黄
        Object.defineProperty(Color, "darkGray", {
            //不重要颜色
            get: function () { return 0X909399; },
            enumerable: true,
            configurable: true
        });
        ; //深灰
        Object.defineProperty(Color, "lightGray", {
            get: function () { return 0Xf4f4f5; },
            enumerable: true,
            configurable: true
        });
        ; //浅灰
        Object.defineProperty(Color, "black", {
            get: function () { return 0X151515; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "gray", {
            get: function () { return 0X666666; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "red", {
            get: function () { return 0XFF0000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "green", {
            get: function () { return 0X00FF00; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "bule", {
            get: function () { return 0X0000FF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "titleBackground", {
            get: function () { return 0x1989fa; },
            enumerable: true,
            configurable: true
        });
        ;
        Color.getRandomArray = function (count) {
            var colors = [];
            for (var i = 0; i < count; i++)
                colors.push(Math.random() * 0XFFFFFF);
            return colors;
        };
        ;
        /** 可改变颜色的亮暗,value值是-255到255*/
        Color.lightenDarkenColor = function (color, value) {
            var r = (color >> 16) + value;
            if (r > 255)
                r = 255;
            else if (r < 0)
                r = 0;
            var b = ((color >> 8) & 0x00FF) + value;
            if (b > 255)
                b = 255;
            else if (b < 0)
                b = 0;
            var g = (color & 0x0000FF) + value;
            if (g > 255)
                g = 255;
            else if (g < 0)
                g = 0;
            return (g | (b << 8) | (r << 16));
        };
        return Color;
    }());
    sun.Color = Color;
    __reflect(Color.prototype, "sun.Color");
    /**皮肤 */
    var Skin = (function () {
        function Skin() {
        }
        Object.defineProperty(Skin, "randomRect", {
            /**随机色的方与圆 */
            get: function () { return sun.SunUI.getRect(60, 60, sun.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "randomCircle", {
            get: function () { return sun.SunUI.getCircle(50, sun.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointNormal", {
            /**默认点 */
            get: function () { return sun.SunUI.getCircle(6, sun.Color.black); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointDown", {
            get: function () { return sun.SunUI.getCircle(6, sun.Color.gray); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonNormal", {
            /**默认按钮 */
            get: function () { return sun.SunUI.getRect(60, 30, sun.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonDown", {
            get: function () { return sun.SunUI.getRect(60, 30, sun.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOff", {
            /**默认单选框 */
            get: function () { return sun.SunUI.getRadioCircle(sun.Color.white, sun.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOn", {
            get: function () { return sun.SunUI.getRadioCircle(sun.Color.white, sun.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOff", {
            /**默认复选框 */
            get: function () { return sun.SunUI.getCheckBoxRect(sun.Color.white, sun.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOn", {
            get: function () { return sun.SunUI.getCheckBoxRect(sun.Color.white, sun.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOff", {
            /**默认开关 */
            get: function () { return sun.SunUI.getSwitch(sun.Color.skinNormal, sun.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOn", {
            get: function () { return sun.SunUI.getSwitch(sun.Color.skinDown, sun.Color.white, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "progressBackground", {
            /**默认进度条 */
            get: function () { return sun.SunUI.getRect(300, 20, sun.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "progressValue", {
            get: function () { return sun.SunUI.getRect(300, 20, sun.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBackground", {
            /**默认滑动器 */
            get: function () { return sun.SunUI.getRect(300, 10, sun.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderValue", {
            get: function () { return sun.SunUI.getRect(300, 10, sun.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBar", {
            get: function () { return sun.SunUI.getCircle(15, sun.Color.white); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "scrollBar", {
            /**默认滚动条 */
            get: function () { return sun.SunUI.getRect(10, 10, sun.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "pnBarPrevNormal", {
            /**上下页切换组件 */
            get: function () { return sun.SunUI.getPolygon(3, 20, sun.Color.skinNormal, 180); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "pnBarPrevDown", {
            get: function () { return sun.SunUI.getPolygon(3, 20, sun.Color.skinDown, 180); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "pnBarNextNormal", {
            get: function () { return sun.SunUI.getPolygon(3, 20, sun.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "pnBarNextDown", {
            get: function () { return sun.SunUI.getPolygon(3, 20, sun.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Skin.getRodatioButton = function (label) {
            var btn = new BasicButton(sun.Skin.radioOff, sun.Skin.radioOn);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.labelColor = sun.Color.black;
            btn.setLabelPoint(40, 0);
            return btn;
        };
        Skin.getCheckBox = function (label) {
            var skins = [sun.Skin.checkBoxOff, sun.Skin.checkBoxOff, sun.Skin.checkBoxOn, sun.Skin.checkBoxOn];
            var btn = new sun.MoreSkinButton(skins);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.toggleSwitch = true;
            btn.labelColor = sun.Color.black;
            btn.setLabelPoint(50, 2);
            return btn;
        };
        return Skin;
    }());
    sun.Skin = Skin;
    __reflect(Skin.prototype, "sun.Skin");
    /**
     * 简单的布局
     * @author mark_zq
     */
    var SimpleLayout = (function () {
        function SimpleLayout() {
        }
        /**参数：数组,X轴个数（即一行几个）,X轴距离（左右间距）,Y轴距离（上下间距）,X轴位置（第一个按钮初始x位置）,Y轴位置（第一个按钮初始y位置）,正排=1/反排=-1 */
        SimpleLayout.displayRank = function (array, xNum, xDis, yDis, x, y, sign) {
            if (xNum === void 0) { xNum = 1; }
            if (xDis === void 0) { xDis = 0; }
            if (yDis === void 0) { yDis = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (sign === void 0) { sign = 1; }
            //sign反排=-1时，x,y 初始位置可以放在画面的右上角位置，比如x=430，y=0
            var display;
            for (var i = 0; i < array.length; i++) {
                display = array[i];
                display.x = x + Math.floor(i % xNum) * (display.width + xDis) * sign;
                display.y = y + Math.floor(i / xNum) * (display.height + yDis) * sign;
            }
        };
        return SimpleLayout;
    }());
    sun.SimpleLayout = SimpleLayout;
    __reflect(SimpleLayout.prototype, "sun.SimpleLayout");
    /** Sun显示对象 */
    var SunDisplayObject = (function (_super) {
        __extends(SunDisplayObject, _super);
        /** 初始化 */
        function SunDisplayObject() {
            var _this = _super.call(this) || this;
            /** 显示对象形状 */
            _this._type = Const.SHAPE_RECT;
            /** 形状颜色 */
            _this._color = 0;
            _this.display = new Sprite;
            _this.bg = new Sprite;
            return _this;
        }
        Object.defineProperty(SunDisplayObject.prototype, "type", {
            /** 获取形状 */
            get: function () { return this._type; },
            /**设置形状 */
            set: function (value) { this._type = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SunDisplayObject.prototype, "color", {
            /** 获取显示对象颜色 */
            get: function () { return this._color; },
            /** 设置颜色并绘制 */
            set: function (value) { this._color = value; this._data.c = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SunDisplayObject.prototype, "data", {
            /** 绘制形状：{w:1,h:1,r:1,c:1,ew:1,eh:1,a:0.3} */
            set: function (value) { this._data = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        SunDisplayObject.prototype.draw = function () {
            this._color = this._data.c;
            this.display.graphics.clear();
            this.display = this.getDisplay(this._data);
            this.addChild(this.display);
            this.setPosition();
        };
        /** 设置位置（如果有背景，则会设置位置） */
        SunDisplayObject.prototype.setPosition = function () {
            if (this._hasBg && this.type != Const.SHAPE_CIRCLE) {
                this.display.x = (this.bg.width - this.display.width) >> 1;
                this.display.y = (this.bg.height - this.display.height) >> 1;
            }
        };
        /** 设置背景 */
        SunDisplayObject.prototype.setBackground = function (color, side) {
            if (side === void 0) { side = 1; }
            this._hasBg = true;
            var d = this._data;
            var o = {};
            for (var i in d) {
                o[i] = d[i];
            }
            o.c = color;
            if (o.w)
                o.w = o.w + side * 2;
            if (o.h)
                o.h = o.h + side * 2;
            if (o.r)
                o.r = o.r + side;
            this.bg.graphics.clear();
            this.bg = this.getDisplay(o);
            this.addChildAt(this.bg, 0);
            this.setPosition();
        };
        /** 绘制形状 */
        SunDisplayObject.prototype.getDisplay = function (o) {
            switch (this.type) {
                case Const.SHAPE_RECT:
                    return SunUI.getRect(o.w, o.h, o.c, o.a);
                case Const.SHAPE_RECT_ROUND:
                    return SunUI.getRoundRect(o.w, o.h, o.c, o.ew, o.eh, o.a);
                case Const.SHAPE_CIRCLE:
                    return SunUI.getCircle(o.r, o.c, o.a);
            }
        };
        return SunDisplayObject;
    }(Sprite));
    sun.SunDisplayObject = SunDisplayObject;
    __reflect(SunDisplayObject.prototype, "sun.SunDisplayObject");
    /**
     * ES6模块主要有两个功能：export和import
     * export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
     * import用于在一个模块中加载另一个含有export接口的模块。
     * 也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。
     * export default 向外暴露的成员，可以使用任意变量来接收; 使用export导出的成员，必须严格按照导出时候的名称，来使用{ }按需接收
     * extends：继承父类，可重写父类函数；implements:实现所有接口
     */
    var SunContainer = (function (_super) {
        __extends(SunContainer, _super);
        function SunContainer() {
            var _this = _super.call(this) || this;
            _this.dataEvent = new Object; //事件对象
            //初始化
            _this.init();
            //once只触发一次,触发后会自动注销事件，而对应的addEventListener需要手动注销
            _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            return _this;
        }
        /** 加载到舞台方法 */
        SunContainer.prototype.addToStage = function () {
            this.render();
        };
        /**加载到舞台之前调用 */
        SunContainer.prototype.init = function () {
        };
        /**加载到舞台之后调用 */
        SunContainer.prototype.render = function () {
            this.stageWidth = this.stage.stageWidth;
            this.stageHeight = this.stage.stageHeight;
        };
        /**发布事件*/
        SunContainer.prototype.dispEvent = function (type, data, dataType) {
            if (data === void 0) { data = null; }
            if (dataType === void 0) { dataType = null; }
            if (this.dataEvent) {
                var fun = this.dataEvent[type];
                if (fun != null) {
                    var moonEvent = new SunEvent();
                    moonEvent.currentTarget = this;
                    moonEvent.data = data;
                    moonEvent.type = type;
                    moonEvent.dataType = dataType;
                    if (fun["this"]) {
                        fun.apply(fun["this"], [moonEvent]);
                    }
                    else {
                        fun(moonEvent);
                    }
                }
            }
        };
        /**帧听事件*/
        SunContainer.prototype.addEvent = function (type, listener, thisObj) {
            if (thisObj === void 0) { thisObj = null; }
            if (this.dataEvent && this.dataEvent[type] == null) {
                listener["this"] = thisObj;
                this.dataEvent[type] = listener;
            }
        };
        /**删除事件*/
        SunContainer.prototype.removeEvent = function (type, listener) {
            if (this.dataEvent && this.dataEvent[type]) {
                delete this.dataEvent[type];
            }
        };
        /**把自己从父级删除*/
        SunContainer.prototype.removeFromParent = function (value) {
            if (value === void 0) { value = false; }
            var _parent = this.parent;
            if (value)
                this.dispose();
            if (_parent && _parent.contains(this))
                _parent.removeChild(this);
            _parent = null;
        };
        /**删除所有的*/
        SunContainer.prototype.removeChildAll = function (dispose) {
            if (dispose === void 0) { dispose = false; }
            while (this.numChildren > 0) {
                this.removeChildIndex(0, dispose);
            }
        };
        /**删除index层的*/
        SunContainer.prototype.removeChildIndex = function (index, dispose) {
            if (index >= 0 || index < this.numChildren) {
                var basicContent = this.getChildAt(index);
                if (basicContent instanceof SunContainer) {
                    basicContent.removeFromParent(dispose);
                }
                else {
                    var display = this.getChildAt(index);
                    if (display.parent)
                        display.parent.removeChild(display);
                }
            }
        };
        /**销毁*/
        SunContainer.prototype.dispose = function () {
            this.removeChildAll(true);
            this.dataEvent = null;
            this.stageWidth = null;
            this.stageHeight = null;
        };
        return SunContainer;
    }(DisplayObjectContainer));
    sun.SunContainer = SunContainer;
    __reflect(SunContainer.prototype, "sun.SunContainer");
    /**
     * ...
     * 默认参数x轴,y轴,w宽,h高,r半径,c颜色,ew圆角宽,eh圆家高
     * @author vinson
     */
    var SunUI = (function () {
        function SunUI() {
        }
        Object.defineProperty(SunUI, "randomColor", {
            /**得到随机色*/
            get: function () {
                return Math.random() * 0XFFFFFF;
            },
            enumerable: true,
            configurable: true
        });
        /**得到矩形框*/
        SunUI.getLineRect = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawRect(x, y, w, h);
            node.graphics.endFill();
            return node;
        };
        /**得到圆形框*/
        SunUI.getLineCircle = function (r, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawCircle(x, y, r);
            node.graphics.endFill();
            return node;
        };
        /**得到渐变矩形 a为角度偏移率0,0.5,1,2分别为四个正方向*/
        SunUI.getMatrixRect = function (w, h, c1, c2, a) {
            if (c1 === void 0) { c1 = 0; }
            if (c2 === void 0) { c2 = 0; }
            if (a === void 0) { a = 0; }
            var node = new Sprite();
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, Math.PI * a, 0, 0);
            node.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
            node.graphics.drawRect(0, 0, w, h);
            node.graphics.endFill();
            return node;
        };
        /**得到矩形和一个X*/
        SunUI.getRectAndX = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = this.getRect(w, h, c, x, y);
            s.addChild(this.getX(w, h, c, 1, x, y));
            return s;
        };
        /**得到矩形和一个X*/
        SunUI.getX = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var container = new Sprite;
            var l1 = new Sprite;
            l1.graphics.lineStyle(s, c);
            l1.graphics.moveTo(0, 0);
            l1.graphics.lineTo(w, h);
            var l2 = new Sprite;
            l2.graphics.lineStyle(s, c);
            l2.graphics.moveTo(w, 0);
            l2.graphics.lineTo(0, h);
            container.addChild(l1);
            container.addChild(l2);
            return container;
        };
        /**得到矩形 带上透明度 a:透明度，0到1之间的小数*/
        SunUI.getRect = function (w, h, c, a, x, y) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c, a);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
            return s;
        };
        /**得到圆角矩形 带上透明度*/ /**c:填充色，例如：0XFFFFFF；ew：圆角宽度，单位px;eh：（可选）如果未指定值，则默认值与为ew参数提供的值相匹配；a:透明度，0到1之间的小数；*/
        SunUI.getRoundRect = function (w, h, c, ew, eh, a, x, y) {
            if (c === void 0) { c = 0; }
            if (ew === void 0) { ew = 5; }
            if (eh === void 0) { eh = 5; }
            if (a === void 0) { a = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c, a);
            s.graphics.drawRoundRect(x, y, w, h, ew, eh);
            s.graphics.endFill();
            return s;
        };
        /**得到圆形 带上透明度 a:透明度，0到1之间的小数*/
        SunUI.getCircle = function (r, c, a, x, y) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c, a);
            s.graphics.drawCircle(x, y, r);
            s.graphics.endFill();
            return s;
        };
        /**得到多边形,side边数,rotation角度,a 透明度*/
        SunUI.getPolygon = function (side, r, c, rotation, a) {
            if (side === void 0) { side = 3; }
            if (r === void 0) { r = 10; }
            if (c === void 0) { c = 0; }
            if (rotation === void 0) { rotation = 0; }
            if (a === void 0) { a = 1; }
            var s = new Sprite;
            s.rotation = rotation;
            s.graphics.beginFill(c, a);
            for (var i = 0; i <= side; i++) {
                var lineX = Math.cos((i * (360 / side) * Math.PI / 180)) * r;
                var lineY = Math.sin((i * (360 / side) * Math.PI / 180)) * r;
                if (i == 0)
                    s.graphics.moveTo(lineX, lineY);
                else
                    s.graphics.lineTo(lineX, lineY);
            }
            s.graphics.endFill();
            return s;
        };
        /**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
        SunUI.getArrowRoundRect = function (w, h, rc, pc, rotation) {
            if (pc === void 0) { pc = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, rc));
            var p = this.getPolygon(3, w / 3, pc, 30 + rotation);
            p.x = s.width >> 1;
            p.y = s.height >> 1;
            s.addChild(p);
            return s;
        };
        /**得到滚动条的bar*/
        SunUI.getScrollLineBar = function (w, h, c) {
            var s = new Sprite;
            var _h = h / 3;
            for (var i = 0; i < 3; i++) {
                var r = this.getRect(w, 1, c, 0, i * _h);
                s.addChild(r);
            }
            return s;
        };
        /**得到圆角矩形-加*/
        SunUI.getAddRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r1 = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            var r2 = this.getRect(2, h / 2, 0, w / 2 - 1, h / 4);
            s.addChild(r1);
            s.addChild(r2);
            return s;
        };
        /**得到圆角矩形-减*/
        SunUI.getRemoveRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            s.addChild(r);
            return s;
        };
        /**得到带文字的圆角方形*/
        SunUI.getRoundRectText = function (w, h, c, str) {
            if (str === void 0) { str = "click"; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var text = new TextField;
            text.name = "text";
            text.text = str;
            text.x = (s.width - text.width) >> 1;
            text.y = (s.height - text.height) >> 1;
            s.addChild(text);
            return s;
        };
        /**得到矩形-switchButton bc背景颜色，gc钩选的颜色,type为0是没有钩为1是有钩*/
        SunUI.getSwitch = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var node = sun.SunUI.getRoundRect(80, 50, bc, 60, 60);
            node.addChild(sun.SunUI.getCircle(22, gc, type == 0 ? 25 : 55, 25));
            return node;
        };
        /**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
        SunUI.getCheckBoxRect = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getRect(40, 40, bc));
            if (type == 1) {
                var r = new Sprite;
                r.graphics.beginFill(gc);
                r.graphics.moveTo(0, 20);
                r.graphics.lineTo(20, 36);
                r.graphics.lineTo(44, 8);
                r.graphics.lineTo(36, 0);
                r.graphics.lineTo(20, 18);
                r.graphics.lineTo(12, 8);
                r.graphics.lineTo(0, 20);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
        SunUI.getRadioCircle = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getCircle(16, bc, 16, 16));
            s.graphics.lineStyle(1, 0);
            if (type == 1) {
                var r = this.getCircle(8, gc, 16, 16);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-网格
         * rect.x是x轴数量
         * rect.y是y轴数量
         * rect.width是网格宽
         * rect.height是网格高
         * lc网格线颜色
         * */
        SunUI.getGridding = function (rect, c) {
            if (c === void 0) { c = 0; }
            var s = new Sprite;
            s.graphics.lineStyle(0.1, c);
            var disx = rect.width / rect.x;
            var disy = rect.height / rect.y;
            for (var i = 0; i < rect.x; i++) {
                s.graphics.moveTo(0, i * disy);
                s.graphics.lineTo(rect.width, i * disy);
            }
            for (i = 0; i < rect.y; i++) {
                s.graphics.moveTo(i * disx, 0);
                s.graphics.lineTo(i * disx, rect.height);
            }
            return s;
        };
        /***得到爱心 */
        SunUI.getHeart = function (r, c) {
            if (r === void 0) { r = 15; }
            if (c === void 0) { c = 0XFF0000; }
            var s = new Sprite;
            s.graphics.beginFill(c);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(r, -r * 2.5, r * 2, -r * 1.5, 0, 0);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(-r, -r * 2.5, -r * 2, -r * 1.5, 0, 0);
            s.graphics.endFill();
            s.anchorOffsetX = -s.width / 2;
            s.anchorOffsetY = -s.height;
            return s;
        };
        return SunUI;
    }());
    sun.SunUI = SunUI;
    __reflect(SunUI.prototype, "sun.SunUI");
    /** 基础视图 */
    var BasicView = (function (_super) {
        __extends(BasicView, _super);
        function BasicView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** 创建文本（新建精灵绘制） */
        BasicView.prototype.createText = function (x, y, s) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (s === void 0) { s = ""; }
            var text = (new Label).textField;
            text.x = x;
            text.y = y;
            text.text = s;
            this.addChild(text);
            return text;
        };
        /** 绘制矩形（新建精灵绘制） */
        BasicView.prototype.createRect = function (w, h, c, a, x, y) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = SunUI.getRect(w, h, c, a, x, y);
            this.addChild(sprite);
            return sprite;
        };
        /** 绘制圆形（新建精灵绘制） */
        BasicView.prototype.createCircle = function (r, c, a, x, y) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = SunUI.getCircle(r, c, a, x, y);
            this.addChild(sprite);
            return sprite;
        };
        /** 绘制矩形(自身绘制) */
        BasicView.prototype.createRectBySprite = function (s, w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            s.graphics.clear();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
        };
        /**创建纯色背景 @param(背景颜色，透明度) */
        BasicView.prototype.createBackground = function (c, a) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            var s = this.createRect(this.stageWidth, this.stageHeight, c);
            s.alpha = a;
            s.touchEnabled = true; //用于阻止下层点击事件
            return s;
        };
        /**创建渐变色背景 @param(direction：渐变方向 direction=0 从左到右；Math.PI/2：从上到下；Math.PI：从右到左；-Math.PI/2:从下到上；c1,,c2 从c1渐变到c2;gradientType：渐变类型) */
        BasicView.prototype.createBgGradientFill = function (direction, c1, c2, gradientType) {
            if (direction === void 0) { direction = Math.PI / 2; }
            if (c1 === void 0) { c1 = 0X017AC3; }
            if (c2 === void 0) { c2 = 0XDDDDDD; }
            if (gradientType === void 0) { gradientType = egret.GradientType.LINEAR; }
            //注意：egret自带的渐变背景函数一般不建议使用，这里仅供学习，可以采用ps工具实现渐变素材渲染起来会很方便
            var w = this.stageWidth;
            var h = this.stageHeight;
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, direction); //渐变方向direction=0 从左到右；Math.PI/2：从上到下；Math.PI：从右到左；-Math.PI/2:从下到上
            var sprite = new Sprite;
            //渐变类型 、颜色、 透明度、所占比例(0~255)、方向
            sprite.graphics.beginGradientFill(gradientType, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        };
        return BasicView;
    }(sun.SunContainer));
    sun.BasicView = BasicView;
    __reflect(BasicView.prototype, "sun.BasicView");
    /**基础组件-基础面板*/
    var BasicBar = (function (_super) {
        __extends(BasicBar, _super);
        function BasicBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = [];
            _this.index = 0;
            return _this;
        }
        /** 添加一个元素 */
        BasicBar.prototype.addItem = function (item) {
            this.items.push(item);
        };
        /** 删除一个元素 */
        BasicBar.prototype.removeItem = function (item) {
            var index = this.items.indexOf(item); //查找到对象所在索引下标
            if (index >= 0)
                this.items.splice(index, 1); //@param(开始索引，删除个数)
        };
        /** 根据索引值判断元素是否存在 */
        BasicBar.prototype.hasItem = function (index) {
            return this.items.length > 0 && (index >= 0 && index < this.items.length);
        };
        /** 根据索引值获取元素 */
        BasicBar.prototype.getItem = function (index) {
            return this.items[index];
        };
        /** 获取下一个元素 */
        BasicBar.prototype.getNextItem = function () {
            return this.items[this.index++];
        };
        /** 获取一个元素的索引值 */
        BasicBar.prototype.getIndexByItem = function (item) {
            return this.items.indexOf(item);
        };
        /** 索引值重置为0 */
        BasicBar.prototype.reset = function () {
            this.index = 0;
        };
        /** 修改，暂无具体方法 */
        BasicBar.prototype.update = function () {
        };
        /**布局 type类型为横或竖，interval为对象间的间隔*/
        BasicBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.VERTICAL; }
            if (interval === void 0) { interval = 10; }
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (type == Const.VERTICAL)
                    item.y = (item.height + interval) * i;
                else
                    item.x = (item.width + interval) * i;
            }
        };
        /**销毁*/
        BasicBar.prototype.dispose = function () {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                this.removeItem(item);
                if (item instanceof SunContainer) {
                    item.removeFromParent(true);
                }
            }
        };
        return BasicBar;
    }(BasicView));
    sun.BasicBar = BasicBar;
    __reflect(BasicBar.prototype, "sun.BasicBar", ["sun.IItem", "sun.ILayout"]);
    /**面板 */
    var PanelBar = (function (_super) {
        __extends(PanelBar, _super);
        /** @param(面板宽度，面板高度) */
        function PanelBar(pWidth, pHeight) {
            if (pWidth === void 0) { pWidth = 0; }
            if (pHeight === void 0) { pHeight = 0; }
            var _this = _super.call(this) || this;
            _this.titleHeight = 60; //标题高度
            //初始化
            _this.pWidth = pWidth;
            _this.pHeight = pWidth;
            _this.titleBg = new Sprite;
            _this.containerBg = new Sprite;
            _this.title = (new Label).textField;
            _this.container = new SunContainer();
            return _this;
        }
        /**加载到舞台之后调用 */
        PanelBar.prototype.render = function () {
            //设置舞台宽高
            if (this.pWidth == 0 && this.pHeight == 0) {
                _super.prototype.render.call(this);
            }
            else {
                this.stageWidth = this.pWidth;
                this.stageHeight = this.pHeight;
            }
            //创建标题背景
            this.createRectBySprite(this.titleBg, this.stageWidth, this.titleHeight, sun.Color.titleBackground);
            //创建白色背景
            this.createRectBySprite(this.containerBg, this.stageWidth, this.stageHeight - this.titleHeight, sun.Color.white, 0, this.titleHeight);
            this.addChild(this.titleBg);
            this.addChild(this.containerBg);
            //设置标题位置
            this.title.anchorOffsetX = this.title.textWidth >> 1;
            this.title.anchorOffsetY = this.title.textHeight >> 1;
            this.title.x = this.stageWidth >> 1;
            this.title.y = this.titleHeight >> 1;
            this.addChild(this.title);
            //容器与遮罩
            this.container.y = this.titleHeight;
            this.addChild(this.container);
            this.containerMask = this.createRect(this.stageWidth, this.stageHeight - this.titleHeight, sun.Color.white, 1, 0, this.titleHeight);
            this.container.mask = this.containerMask;
            this.touchEnabled = true; //为了阻挡面板下所有事件
            this.dispEvent(SunEvent.RENDER_COMPLETE);
        };
        /** 给容器添加元素 */
        PanelBar.prototype.addItem = function (item, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.prototype.addItem.call(this, item);
            if (x != 0)
                item.x = x;
            if (y != 0)
                item.y = y;
            this.container.addChild(item);
        };
        /** 从容器中移除元素 */
        PanelBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            if (this.container.contains(item))
                this.container.removeChild(item);
        };
        Object.defineProperty(PanelBar.prototype, "label", {
            /** 获取文本内容 */
            get: function () {
                return this.title.text;
            },
            /** 设置文本内容 */
            set: function (value) {
                this.title.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorTop", {
            /** 设置标题背景色 */
            set: function (c) {
                var w = this.titleBg.width, h = this.titleBg.height;
                this.createRectBySprite(this.titleBg, w, h, c);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorBottom", {
            /** 设置容器背景色 */
            set: function (c) {
                var w = this.containerBg.width, h = this.containerBg.height;
                this.createRectBySprite(this.containerBg, w, h, c, 0, this.titleHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "windowRect", {
            /** 获取整个屏幕矩形 */
            get: function () {
                var rect = new Rectangle(0, 0, this.stageWidth, this.stageHeight);
                return rect;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "topHeight", {
            /** 获取标题高度 */
            get: function () {
                return this.titleHeight;
            },
            enumerable: true,
            configurable: true
        });
        /** 移除容器中所有精灵（元素） */
        PanelBar.prototype.removeAll = function () {
            this.container.dispose();
        };
        return PanelBar;
    }(BasicBar));
    sun.PanelBar = PanelBar;
    __reflect(PanelBar.prototype, "sun.PanelBar");
    /** 多个面板管理 */
    var PanelMoreManager = (function (_super) {
        __extends(PanelMoreManager, _super);
        function PanelMoreManager() {
            var _this = _super.call(this) || this;
            _this.radioButton = new RadioButtonBar();
            _this.currentPage = 0;
            _this.posStartX = 0;
            _this.moveItems = [];
            _this.container = new SunContainer();
            _this.addChild(_this.container);
            _this.radioButton.isAutoLayout = true;
            return _this;
        }
        PanelMoreManager.prototype.open = function () {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.close = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.update = function () {
            this.container.removeChildren();
            var itemW;
            var itemH;
            if (this.items.length > 0) {
                var item = this.items[0];
                this.container.addChild(item);
                itemW = item.windowRect.width;
                itemH = item.windowRect.height;
                this.panelWidth = itemW;
            }
            var len = this.items.length;
            for (var i = 0; i < len; i++) {
                var btn = new BasicButton(sun.Skin.pointNormal, sun.Skin.pointDown);
                this.radioButton.addItem(btn);
            }
            btn = this.radioButton.getItem(0);
            btn.setSkinDown();
            this.radioButton.x = (itemW - len * 22) >> 1;
            this.radioButton.y = itemH - 20;
            this.addChild(this.radioButton);
        };
        PanelMoreManager.prototype.render = function () {
            this.update();
            if (this.items.length > 1) {
                this.open();
            }
        };
        PanelMoreManager.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.posStartX = e.stageX;
                    this.dispEvent(SunEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.moveEnd(e.stageX);
                    break;
            }
        };
        PanelMoreManager.prototype.moveDo = function (x) {
            var disx = x - this.posStartX;
            if (Math.abs(disx) > 20) {
                if (this.moveItems.length == 0) {
                    var item = this.items[this.currentPage];
                    var width = this.panelWidth;
                    this.moveItems.push(item);
                    if (this.currentPage == 0) {
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                    else if (this.currentPage == this.items.length - 1) {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                    }
                    else {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                }
                var boo1 = (this.currentPage == 0 && disx > 0);
                var boo2 = ((this.currentPage == this.items.length - 1) && disx < 0);
                if (!boo1 && !boo2) {
                    this.container.x = disx;
                }
            }
        };
        PanelMoreManager.prototype.moveEnd = function (x) {
            if (this.container.x == 0) {
                this.backCall(0);
                return;
            }
            var disx = x - this.posStartX;
            var tw = egret.Tween.get(this.container);
            var currX = this.panelWidth;
            var turnDis = this.panelWidth >> 2;
            //至少滑动窗口宽的四分之一才可以算翻页
            if (Math.abs(disx) > turnDis) {
                currX = this.panelWidth;
                currX *= disx > 0 ? 1 : -1;
            }
            else {
                disx = 0;
                currX = 0;
            }
            var time = 200;
            tw.to({ x: currX }, time);
            tw.call(this.backCall, this, [disx]);
        };
        /**结束翻页后的回调函数 */
        PanelMoreManager.prototype.backCall = function (disx) {
            if (disx > 0) {
                this.currentPage--;
                this.currentPage = this.currentPage < 0 ? 0 : this.currentPage;
            }
            else if (disx < 0) {
                this.currentPage++;
                this.currentPage = this.currentPage == this.items.length ? this.items.length - 1 : this.currentPage;
            }
            this.container.removeChildren();
            var item = this.items[this.currentPage];
            item.x = 0;
            this.container.addChild(item);
            this.radioButton.selectIndex = this.currentPage;
            this.moveItems.length = 0;
            this.container.x = 0;
            this.dispEvent(SunEvent.OVER);
        };
        /**销毁*/
        PanelMoreManager.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.close();
        };
        return PanelMoreManager;
    }(BasicBar));
    sun.PanelMoreManager = PanelMoreManager;
    __reflect(PanelMoreManager.prototype, "sun.PanelMoreManager", ["sun.IOnoff"]);
    /** 游戏视图 */
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameView.prototype.play = function () {
            this.stop();
            this.isPlay = true;
            egret.startTick(this.loop, this);
        };
        GameView.prototype.stop = function () {
            this.isPlay = false;
            egret.stopTick(this.loop, this);
        };
        GameView.prototype.loop = function (n) {
            traceSimple(n);
            return true;
        };
        return GameView;
    }(sun.BasicView));
    sun.GameView = GameView;
    __reflect(GameView.prototype, "sun.GameView");
    /**游戏加载模版 */
    var GameLoad = (function (_super) {
        __extends(GameLoad, _super);
        function GameLoad() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = 0XF9AB03;
            return _this;
        }
        GameLoad.prototype.render = function () {
            _super.prototype.render.call(this);
            this.createBgGradientFill();
            var container = new Sprite;
            this.addChild(container);
            var sw = this.stageWidth;
            var sh = this.stageHeight;
            var w = 80;
            var loadbg = SunUI.getRoundRect(sw - 100, w, 0XFCE59D, 100, 100);
            loadbg.x = (sw - loadbg.width) >> 1;
            loadbg.y = (sh - loadbg.height) >> 1;
            container.addChild(loadbg);
            //--------
            var progress = SunUI.getRect(sw - 120, w - 10, this.color);
            progress.x = (sw - progress.width) >> 1;
            progress.y = (sh - progress.height) >> 1;
            container.addChild(progress);
            this.proWidth = progress.width;
            var mask = SunUI.getRoundRect(sw - 120, w - 10, 0, 100, 100);
            mask.x = (sw - mask.width) >> 1;
            mask.y = (sh - mask.height) >> 1;
            progress.mask = mask;
            this.progress = progress;
            //--------
            var txtbg = new SunDisplayObject();
            txtbg.type = sun.Const.SHAPE_CIRCLE;
            txtbg.data = { r: w / 2, c: 0XE18E0D };
            txtbg.setBackground(0XFFFFFF, 5);
            this.addChild(txtbg);
            txtbg.x = loadbg.x + loadbg.width - w / 2;
            txtbg.y = loadbg.y + w / 2;
            this.txtLoadPos = new Point(txtbg.x, txtbg.y);
            var txtExp = this.createText(0, 0, "");
            txtExp.size = 40;
            txtExp.textColor = 0xB07300;
            this.txtLoad = txtExp;
            //--------
            var txtTip = this.createText(0, 0, "游戏加载");
            txtTip.size = 40;
            txtTip.x = (sw - txtTip.width) >> 1;
            txtTip.y = loadbg.y - txtTip.height * 2;
            var txtName = this.createText(0, 0, "");
            txtName.size = 40;
            this.txtName = txtName;
            this.updateName("敬请期待");
            //--------
            this.createAirFan();
            this.airFan.x = txtbg.x;
            this.airFan.y = txtbg.y;
            this.createLogo();
            this.update(0);
            this.play();
        };
        GameLoad.prototype.loop = function (n) {
            this.airFan.rotation += 3;
            return true;
        };
        GameLoad.prototype.createAirFan = function () {
            this.airFan = new Sprite;
            this.addChild(this.airFan);
            for (var i = 0; i < 4; i++) {
                var shape = new Sprite();
                this.airFan.addChild(shape);
                shape.graphics.lineStyle(0);
                shape.graphics.beginFill(0xFFFFFF);
                shape.graphics.cubicCurveTo(-29, -28, 29, -28, 0, 0);
                shape.graphics.endFill();
                shape.rotation = i * 90;
            }
        };
        GameLoad.prototype.createLogo = function () {
            var sw = this.stageWidth;
            var sh = this.stageHeight;
            var logo = new SunDisplayObject();
            logo.type = sun.Const.SHAPE_CIRCLE;
            logo.data = { r: 50, c: 0XE18E0D };
            logo.setBackground(0XFFFFFF, 2);
            logo.x = sw >> 1;
            logo.y = logo.height;
            this.addChild(logo);
            var txtName = this.createText(0, 0, "ZL");
            txtName.size = 40;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) - 15;
            txtName = this.createText(0, 0, "game");
            txtName.size = 30;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) + 15;
            this.addChild(sun.SunUI.getHeart(15, 0XFFFFFF));
            txtName = this.createText(0, 0, "子乐游戏");
            txtName.size = 40;
            txtName.textColor = 0XE09F21;
            txtName.x = sw - txtName.width - 10;
            txtName.y = sh - txtName.height - 10;
        };
        /**创建渐变色背景 */
        GameLoad.prototype.createBgGradientFill = function (c1, c2) {
            if (c1 === void 0) { c1 = 0XFDD559; }
            if (c2 === void 0) { c2 = 0XE09F21; }
            var w = this.stageWidth;
            var h = this.stageHeight;
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w * 2, h * 2, Math.PI / 2);
            var sprite = new Sprite;
            sprite.graphics.beginGradientFill(egret.GradientType.RADIAL, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        };
        GameLoad.prototype.updateName = function (name) {
            this.txtName.text = name;
            this.txtName.x = (this.stageWidth - this.txtName.width) >> 1;
            this.txtName.y = this.stageHeight / 2 + this.txtName.height * 2;
        };
        GameLoad.prototype.update = function (value) {
            if (value > 1)
                return;
            if (value > 0.99)
                this.stop();
            this.progress.scaleX = value;
            var txtExp = this.txtLoad;
            var pos = this.txtLoadPos;
            txtExp.text = Math.ceil(value * 100) + "%";
            txtExp.x = (this.stageWidth - txtExp.width) >> 1;
            txtExp.y = pos.y - txtExp.height / 2;
            var exp = SunUI.getCircle(5 + Math.random() * 5, this.color, pos.x, pos.y);
            exp.y = 10 - Math.random() * 20;
            this.addChildAt(exp, 2);
            Tween.get(exp).to({ x: -this.proWidth, alpha: 0 }, 1000);
        };
        return GameLoad;
    }(sun.GameView));
    sun.GameLoad = GameLoad;
    __reflect(GameLoad.prototype, "sun.GameLoad");
    /** 进度条，继承SunContainer容器 */
    var ProgressBar = (function (_super) {
        __extends(ProgressBar, _super);
        /*** 参数为显示对象 @param(背景皮肤，实际值皮肤) */
        function ProgressBar(bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            var _this = _super.call(this) || this;
            _this._value = 0;
            _this.setSkin(bg, value);
            _this.addChild(_this.skinBg);
            _this.addChild(_this.skinValue);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            return _this;
        }
        /*** 设置皮肤 */
        ProgressBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.progressBackground;
            this.skinValue = value || Skin.progressValue;
        };
        Object.defineProperty(ProgressBar.prototype, "value", {
            /*** 获取实际值 */
            get: function () {
                return this._value;
            },
            /**设置实际值：值只能是0－1之间 */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v; //v小于0取0，否则继续判断v>1,大于1则取1，否则取v
                this._value = v;
                this.skinValue.scaleX = v;
            },
            enumerable: true,
            configurable: true
        });
        /*** 显示实际值 */
        ProgressBar.prototype.showText = function (v, x, y) {
            if (x === void 0) { x = -1; }
            if (y === void 0) { y = -1; }
            this.text.text = v;
            if (x == -1)
                this.text.x = (this.skinBg.width - this.text.width) >> 1;
            else
                this.text.x = x;
            if (y == -1)
                this.text.y = this.skinBg.height + 5;
            else
                this.text.y = y;
        };
        return ProgressBar;
    }(SunContainer));
    sun.ProgressBar = ProgressBar;
    __reflect(ProgressBar.prototype, "sun.ProgressBar");
    /*** 滑动器，继承进度条ProgressBar，需要实现布局接口ILayout的函数 */
    var SliderBar = (function (_super) {
        __extends(SliderBar, _super);
        /** @param(滑动器背景,滑动值，滑动器圆圈) */
        function SliderBar(bg, value, bar) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            if (bar === void 0) { bar = null; }
            var _this = _super.call(this, bg, value) || this;
            //滑动器：圆圈
            _this.skinBar = bar || Skin.sliderBar;
            _this.addChild(_this.skinBar);
            //给滑动器绑定事件
            _this.skinBar.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            _this.skinBar.touchEnabled = true;
            //滑动器布局
            _this.layout();
            _this.value = 1;
            return _this;
        }
        /** 设置皮肤 */
        SliderBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.sliderBackground;
            this.skinValue = value || Skin.sliderValue;
        };
        /** 触摸事件 */
        SliderBar.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(SunEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX, e.stageY);
                    this.dispEvent(SunEvent.MOVE);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(SunEvent.OVER);
                    break;
            }
        };
        /** 设置滑动值 */
        SliderBar.prototype.moveDo = function (x, y) {
            var p = this.globalToLocal(x, y);
            var v;
            if (this.type == Const.HORIZONTAL)
                v = p.x / this.skinValue.width;
            else
                v = -p.y / this.skinValue.width;
            this.value = v;
        };
        Object.defineProperty(SliderBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**值只能是0－1之间 */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v;
                this._value = v;
                this.skinValue.scaleX = v;
                if (this.type == Const.HORIZONTAL)
                    this.skinBar.x = this.skinValue.width * v;
                else
                    this.skinBar.y = -this.skinValue.width * v;
            },
            enumerable: true,
            configurable: true
        });
        /**横竖版布局，默认是横版布局 */
        SliderBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.HORIZONTAL; }
            if (interval === void 0) { interval = 0; }
            var angle; //旋转角度
            this.type = type;
            if (type == Const.VERTICAL) {
                angle = -90;
                this.skinBar.x = this.skinValue.height >> 1;
            }
            else {
                angle = 0;
                this.skinBar.y = this.skinValue.height >> 1;
            }
            this.skinBg.rotation = angle; //滑动器皮肤方向
            this.skinValue.rotation = angle; //滑动器实际皮肤方向
        };
        return SliderBar;
    }(ProgressBar));
    sun.SliderBar = SliderBar;
    __reflect(SliderBar.prototype, "sun.SliderBar", ["sun.ILayout"]);
    /**提示警告框 手动关闭*/
    var AlertBar = (function (_super) {
        __extends(AlertBar, _super);
        /** @param(提示内容) */
        function AlertBar(title) {
            if (title === void 0) { title = "提示或警告"; }
            var _this = _super.call(this) || this;
            _this.bgColor = 0xEFEBE8; //灰色背景
            _this.text = (new Label).textField; //初始化文本对象
            _this.text.textColor = 0x101010;
            _this.text.text = title; //设置文本内容
            return _this;
        }
        /**加载到舞台之后调用 */
        AlertBar.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        /** 创建背景  */
        AlertBar.prototype.initView = function () {
            //创建纯色背景
            var node = this.createBackground(0, 0.3);
            //文字宽、高
            var tw = this.text.width;
            var th = this.text.height;
            //在文字宽高基础上 加宽加高
            var w = tw + 80;
            var h = th + 120;
            //设置位置：正中间
            var x = (this.stageWidth - w) >> 1;
            var y = (this.stageHeight - h) >> 1;
            //设置背景显示
            this.bg = new SunDisplayObject();
            this.bg.type = Const.SHAPE_RECT_ROUND;
            this.bg.data = { w: w, h: h, c: this.bgColor, ew: 10, eh: 10, a: 1 }; //绘制一个灰色矩形
            //this.bg.setBackground(0,2);
            this.bg.x = x;
            this.bg.y = y;
            this.addChild(this.bg);
            //画线
            var shape = new Sprite();
            shape.graphics.lineStyle(2, 0XE1E3E6); //灰色背景
            shape.graphics.moveTo(w, this.text.y + th + 40);
            shape.graphics.lineTo(0, this.text.y + th + 40);
            this.bg.addChild(shape);
            //确定按钮
            var btn = new BasicButton();
            btn.label = "确 定";
            this.bg.addChild(btn);
            btn.x = (w - btn.width) >> 1;
            btn.y = this.text.y + th + 60;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            //设置内容显示位置
            this.text.x = x + ((w - tw) >> 1);
            this.text.y = y + 20;
            this.addChild(this.text);
        };
        /** 绑定事件 */
        AlertBar.prototype.onClick = function (e) {
            this.removeFromParent(true);
            this.dispEvent(SunEvent.CLOSE);
        };
        Object.defineProperty(AlertBar.prototype, "color", {
            /**设置显示对象的颜色 */
            set: function (value) {
                this.bgColor = value;
                if (this.bg)
                    this.bg.color = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        /** 销毁 */
        AlertBar.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.bg = null;
            this.bgColor = null;
            this.text = null;
        };
        return AlertBar;
    }(BasicBar));
    sun.AlertBar = AlertBar;
    __reflect(AlertBar.prototype, "sun.AlertBar");
    /**提示警告框 自动关闭*/
    var AlertAutoBar = (function (_super) {
        __extends(AlertAutoBar, _super);
        /** @param(提示内容，提示时长) */
        function AlertAutoBar(title, closeTime) {
            if (title === void 0) { title = "提示或警告"; }
            if (closeTime === void 0) { closeTime = 3; }
            var _this = _super.call(this, title) || this;
            _this.bgColor = 0x101010; //黑色
            _this.text.textColor = 0xffffff; //白色字体
            _this.time = closeTime;
            return _this;
        }
        AlertAutoBar.prototype.initView = function () {
            //文字宽、高
            var tw = this.text.width;
            var th = this.text.height;
            //在文字宽高基础上 加宽加高
            var w = tw + 20;
            var h = th + 20;
            //设置位置：正中间
            var x = (this.stageWidth - w) >> 1;
            var y = (this.stageHeight - h) >> 1;
            //设置背景显示
            this.bg = new SunDisplayObject();
            this.bg.type = Const.SHAPE_RECT_ROUND;
            this.bg.data = { w: w, h: h, c: this.bgColor, ew: 10, eh: 10, a: 0.4 };
            //this.bg.setBackground(0,2);//不设置背景，看起来就是画边框
            this.bg.x = x;
            this.bg.y = y;
            this.addChild(this.bg);
            //设置内容显示位置
            this.text.x = x + ((w - tw) >> 1);
            this.text.y = y + ((h - th) >> 1);
            this.addChild(this.text);
            this.alpha = 0;
            var ty = this.y - 50;
            //动画效果
            Tween.get(this).to({ alpha: 1 }, 500).wait(this.time * 1000).to({ alpha: 0, y: ty }, 500).call(this.backCall, this);
        };
        /** 动画结束后回调事件 */
        AlertAutoBar.prototype.backCall = function () {
            Tween.removeTweens(this);
            this.removeFromParent(true);
            this.time = null;
            this.dispEvent(SunEvent.CLOSE);
        };
        /** 销毁 */
        AlertAutoBar.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            Tween.removeTweens(this);
        };
        return AlertAutoBar;
    }(AlertBar));
    sun.AlertAutoBar = AlertAutoBar;
    __reflect(AlertAutoBar.prototype, "sun.AlertAutoBar");
    /**提示警告框 滚动显示*/
    var AlertRollBar = (function (_super) {
        __extends(AlertRollBar, _super);
        function AlertRollBar(title, bgWidth) {
            if (title === void 0) { title = "提示或警告"; }
            if (bgWidth === void 0) { bgWidth = 200; }
            var _this = _super.call(this, title) || this;
            _this.bgColor = 0x101010; //黑色
            _this.text.textColor = 0xffffff; //白色字体
            _this.bgWidth = bgWidth;
            return _this;
        }
        AlertRollBar.prototype.initView = function () {
            //文字宽高
            var tw = this.text.width; //文字宽度
            var th = this.text.height; //文字高度
            //设置宽高
            var w = this.bgWidth; //背景宽度
            var h = th + 20; //背景高度
            //设置背景显示位置
            var x = (this.stageWidth - w) >> 1; //x位置
            var y = 100; //y位置
            //设置背景显示
            this.bg = new SunDisplayObject(); //背景
            this.bg.type = Const.SHAPE_RECT; //形状类型
            this.bg.data = { w: w, h: h, c: this.bgColor, a: 0.4 }; //画一个灰色矩形
            this.bg.x = x;
            this.bg.y = y; //设置位置
            this.addChild(this.bg);
            //设置背景遮罩效果
            var m = SunUI.getRect(w, h, 0, 1, x, y); //画一个黑色遮罩
            this.addChild(m);
            this.bg.mask = m;
            //文字从最右端位置开始移动
            this.text.x = w;
            this.text.y = 10;
            this.bg.addChild(this.text);
            var time = 2000 + this.text.text.length * 100;
            var tx = -tw;
            //动画效果
            Tween.get(this.text).to({ x: tx }, time).call(this.backCall, this);
        };
        /** 动画结束后回调事件 */
        AlertRollBar.prototype.backCall = function () {
            Tween.removeTweens(this);
            Tween.removeTweens(this.text);
            this.removeFromParent(true);
            this.bgWidth = null;
            this.dispEvent(SunEvent.CLOSE);
        };
        return AlertRollBar;
    }(AlertBar));
    sun.AlertRollBar = AlertRollBar;
    __reflect(AlertRollBar.prototype, "sun.AlertRollBar");
    /** 提示管理器 */
    var AlertManager = (function () {
        function AlertManager() {
        }
        /** 单例函数 */
        AlertManager.getIns = function () {
            if (this.instance == null) {
                this.instance = new AlertManager();
            }
            return this.instance;
        };
        /**请先调用初始化函数 */
        AlertManager.prototype.init = function (stage) {
            this.stage = stage;
        };
        /**提示后自动关闭 */
        AlertManager.prototype.alertAuto = function (title, closeTime) {
            if (title === void 0) { title = "自动关闭的提示或警告"; }
            if (closeTime === void 0) { closeTime = 3; }
            var a;
            if (this.stage) {
                if (this.stage.getChildByName("AlertAutoBar")) {
                    a = this.stage.getChildByName("AlertAutoBar");
                    a.removeFromParent(true);
                }
                a = new AlertAutoBar(title, closeTime);
                a.name = "AlertAutoBar";
                this.stage.addChild(a);
            }
            else {
                trace("调用alertAuto时请先执行AlertManager的init初始化函数");
            }
            return a;
        };
        AlertManager.prototype.alert = function (title) {
            if (title === void 0) { title = "手动关闭的提示或警告"; }
            var a = new AlertBar(title);
            if (this.stage)
                this.stage.addChild(a);
            else
                trace("调用alertAuto时请先执行AlertManager的init初始化函数");
            return a;
        };
        AlertManager.prototype.alertRoll = function (title, bgWidth) {
            if (title === void 0) { title = "提示或警告"; }
            if (bgWidth === void 0) { bgWidth = 200; }
            var a = new AlertRollBar(title, bgWidth);
            if (this.stage)
                this.stage.addChild(a);
            else
                trace("调用alertAuto时请先执行AlertManager的init初始化函数");
            return a;
        };
        return AlertManager;
    }());
    sun.AlertManager = AlertManager;
    __reflect(AlertManager.prototype, "sun.AlertManager");
    /** 日志管理器 */
    var LogManager = (function () {
        function LogManager() {
        }
        //单例函数
        LogManager.getIns = function () {
            if (this.instance == null) {
                this.instance = new LogManager();
            }
            return this.instance;
        };
        /**请先调用初始化函数 */
        LogManager.prototype.init = function (stage) {
            //初始化两个文本
            var txt = (new Label).textField;
            txt.textAlign = egret.HorizontalAlign.LEFT;
            stage.addChild(txt);
            this.txtSimple = txt;
            var txt = (new Label).textField;
            txt.size = 25;
            stage.addChild(txt);
            this.txtMessage = txt;
        };
        /**每次都覆盖上一次信息 */
        LogManager.prototype.debug = function (value) {
            this.txtSimple.text = value;
        };
        /**每次都覆盖上一次信息 */
        LogManager.prototype.log = function (value) {
            if (GameData.version == Const.VER_DEBUG)
                this.txtSimple.text = value;
        };
        /**显示所有信息 */
        LogManager.prototype.logMessage = function (value) {
            if (GameData.version == Const.VER_DEBUG)
                this.txtMessage.appendText(value + "\n");
        };
        LogManager.prototype.setLogColor = function (color) {
            this.txtSimple.textColor = color;
        };
        LogManager.prototype.setLogMessageColor = function (color) {
            this.txtMessage.textColor = color;
        };
        return LogManager;
    }());
    sun.LogManager = LogManager;
    __reflect(LogManager.prototype, "sun.LogManager");
    var TipsManager = (function () {
        function TipsManager() {
            this.bgName = "tips_png"; //TIPS的背景图片
        }
        TipsManager.getIns = function () {
            if (this.instance == null) {
                this.instance = new TipsManager();
            }
            return this.instance;
        };
        /**请先调用初始化函数 */
        TipsManager.prototype.init = function (stage) {
            this.stage = stage;
        };
        TipsManager.prototype.simpleTips = function (value, pos) {
            if (this.tipsView == null) {
                this.tipsView = new sun.BasicTips(this.bgName);
                this.tipsView.setValue(value);
                this.stage.addChild(this.tipsView);
                this.setPosition(pos);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
            }
        };
        TipsManager.prototype.setPosition = function (pos) {
            if (pos) {
                this.tipsView.x = pos.x - (this.tipsView.width >> 1);
                this.tipsView.y = pos.y - this.tipsView.height * 2;
                if (this.tipsView.y < 0) {
                    this.tipsView.y = pos.y;
                }
                if ((this.tipsView.y + this.tipsView.height) > this.stage.stageHeight) {
                    this.tipsView.y = pos.y - (this.tipsView.height + 50);
                }
                if (this.tipsView.x < 0) {
                    this.tipsView.x = pos.x + 50;
                }
                if ((this.tipsView.x + this.tipsView.width) > this.stage.stageWidth) {
                    this.tipsView.x = pos.x - (this.tipsView.width + 50);
                }
            }
        };
        TipsManager.prototype.removeTips = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
            var parent = this.tipsView.parent;
            if (parent != null) {
                parent.removeChild(this.tipsView);
                this.tipsView = null;
            }
        };
        return TipsManager;
    }());
    sun.TipsManager = TipsManager;
    __reflect(TipsManager.prototype, "sun.TipsManager");
    /** 基础按钮 */
    var BasicButton = (function (_super) {
        __extends(BasicButton, _super);
        /** @param(显示颜色按钮对象，按下颜色按钮对象) */
        function BasicButton(normal, down) {
            if (normal === void 0) { normal = null; }
            if (down === void 0) { down = null; }
            var _this = _super.call(this) || this;
            /**皮肤大小随字体大小变化 */
            _this.skinAutoScale = true;
            //初始化按钮
            _this.statusNormal = normal || Skin.buttonNormal;
            _this.statusDown = down || Skin.buttonDown;
            //容器
            _this.skinContainer = new DisplayObjectContainer;
            _this.addChild(_this.skinContainer);
            _this.updateSkin(_this.statusNormal);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            _this.open();
            return _this;
        }
        /** 绑定事件 */
        BasicButton.prototype.open = function () {
            this.close();
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            this.setGray(false);
        };
        /** 移除事件 */
        BasicButton.prototype.close = function () {
            this.touchEnabled = false;
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            if (this.stage)
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        };
        /** 禁用此功能 */
        BasicButton.prototype.closeAndSetGray = function () {
            this.close();
            this.setGray(true);
        };
        Object.defineProperty(BasicButton.prototype, "labelColor", {
            /** 设置文本颜色 */
            set: function (value) {
                this.text.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "labelSize", {
            /** 设置文本字体大小 */
            set: function (value) {
                this.text.size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "label", {
            /** 文本内容 */
            get: function () {
                return this.text.text;
            },
            /** 设置文本内容 */
            set: function (value) {
                this.text.text = value;
                var width = this.text.width + 20;
                this.setSkinSize();
                this.setTextPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textFild", {
            /** 文本 */
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        /**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
        BasicButton.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setSkinSize();
            this.setTextPosition();
        };
        /** 设置文本显示位置 */
        BasicButton.prototype.setLabelPoint = function (x, y) {
            this.text.anchorOffsetX = 0;
            this.text.anchorOffsetY = 0;
            this.text.x = x;
            this.text.y = y;
        };
        /** 设置显示 皮肤 */
        BasicButton.prototype.setSkinNormal = function () {
            this.updateSkin(this.statusNormal);
        };
        /** 设置按下 皮肤 */
        BasicButton.prototype.setSkinDown = function () {
            this.updateSkin(this.statusDown);
        };
        /** 触摸事件 */
        BasicButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusDown);
            }
            else {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusNormal);
            }
            this.dispEvent(SunEvent.CLICK);
        };
        Object.defineProperty(BasicButton.prototype, "textWidth", {
            /** 文本宽度 */
            get: function () {
                return this.text.width + 20;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textHeight", {
            /** 文本高度 */
            get: function () {
                return this.text.height + 20;
            },
            enumerable: true,
            configurable: true
        });
        /** skinAutoScale = true时将设置皮肤大小 */
        BasicButton.prototype.setSkinSize = function () {
            if (this.skinAutoScale && this.text.text != "") {
                var scale = this.textWidth / this.statusNormal.width;
                if (this.statusNormal instanceof Bitmap) {
                    this.statusNormal.width = this.textWidth;
                    this.statusDown.width = this.textWidth;
                }
                else {
                    this.statusNormal.scaleX = this.statusDown.scaleX = scale;
                }
                var height = this.textHeight;
                if (height >= this.statusNormal.height) {
                    scale = height / this.statusNormal.height;
                    if (this.statusNormal instanceof Bitmap) {
                        this.statusNormal.height = this.textHeight;
                        this.statusDown.height = this.textHeight;
                    }
                    else {
                        this.statusNormal.scaleY = this.statusDown.scaleY = scale;
                    }
                }
            }
        };
        /** 设置文本位置 */
        BasicButton.prototype.setTextPosition = function () {
            //锚点：元素中心，一般可用于旋转，可固定位置
            this.text.anchorOffsetX = this.text.width >> 1;
            this.text.anchorOffsetY = this.text.height >> 1;
            if (this.textWidth > this.statusNormal.width)
                this.text.x = this.textWidth >> 1;
            else {
                if (this.skinAutoScale)
                    this.text.x = (this.statusNormal.width - this.text.anchorOffsetX) >> 1;
                else
                    this.text.x = this.statusNormal.width >> 1;
            }
            if (this.textHeight > this.statusNormal.height)
                this.text.y = this.textHeight >> 1;
            else
                this.text.y = this.statusNormal.height >> 1;
        };
        /** 修改显示对象 */
        BasicButton.prototype.updateSkin = function (skin) {
            this.skinContainer.removeChildren();
            this.skinContainer.addChild(skin);
        };
        /**设置可示对象是否为灰色：一般是禁用按钮可点击 */
        BasicButton.prototype.setGray = function (isGray) {
            if (isGray) {
                this.filters = [new egret.ColorMatrixFilter([
                        0.5, 0, 0, 0, 0,
                        0, 0.5, 0, 0, 0,
                        0, 0, 0.5, 0, 0,
                        0, 0, 0, 0.8, 0
                    ])];
                // this.filters = [new egret.ColorMatrixFilter([
                // 				0.3, 0.6, 0.08, 0, 0,
                // 				0.3, 0.6, 0.08, 0, 0,
                // 				0.3, 0.6, 0.08, 0, 0,
                // 				0, 0, 0, 1, 0				])]
            }
            else {
                this.filters = null;
            }
        };
        BasicButton.prototype.dispose = function () {
            this.close();
            _super.prototype.dispose.call(this);
        };
        return BasicButton;
    }(SunContainer));
    sun.BasicButton = BasicButton;
    __reflect(BasicButton.prototype, "sun.BasicButton", ["sun.IOnoff"]);
    /**
     * 类似多个皮肤按钮,构造函数的参数必须大于2个且必须是2的次方
     * 使用四个皮肤就可以模拟ToggleSwitch了
    */
    var MoreSkinButton = (function (_super) {
        __extends(MoreSkinButton, _super);
        function MoreSkinButton(skins) {
            var _this = _super.call(this, skins[0], skins[1]) || this;
            _this._currentPage = 0;
            _this.skins = skins;
            return _this;
        }
        /**更新到第几个按钮同时刷新皮肤 */
        MoreSkinButton.prototype.updatePage = function (value) {
            this.currentPage = value;
            this.setSkinNormal();
        };
        Object.defineProperty(MoreSkinButton.prototype, "currentPage", {
            get: function () {
                return this._currentPage;
            },
            set: function (value) {
                value = value * 2 == this.skins.length ? 0 : value;
                this._currentPage = value;
                this.statusNormal = this.skins[value * 2];
                this.statusDown = this.skins[(value * 2) + 1];
                this.setSkinSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoreSkinButton.prototype, "toggleSwitch", {
            set: function (value) {
                this._toggleSwitch = value;
            },
            enumerable: true,
            configurable: true
        });
        MoreSkinButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_END) {
                if (this._toggleSwitch) {
                    this.currentPage = 1 - this.currentPage;
                }
            }
            _super.prototype.onTouch.call(this, e);
        };
        return MoreSkinButton;
    }(BasicButton));
    sun.MoreSkinButton = MoreSkinButton;
    __reflect(MoreSkinButton.prototype, "sun.MoreSkinButton");
    /** 开关按钮 */
    var SwitchButtion = (function (_super) {
        __extends(SwitchButtion, _super);
        function SwitchButtion() {
            var _this = this;
            var normal = sun.Skin.switchOn;
            var down = sun.Skin.switchOn;
            var normal2 = sun.Skin.switchOff;
            var down2 = sun.Skin.switchOff;
            var skins = [normal, down, normal2, down2];
            _this = _super.call(this, skins) || this;
            _this.toggleSwitch = true;
            return _this;
        }
        return SwitchButtion;
    }(MoreSkinButton));
    sun.SwitchButtion = SwitchButtion;
    __reflect(SwitchButtion.prototype, "sun.SwitchButtion");
    /** */
    var BasicTips = (function (_super) {
        __extends(BasicTips, _super);
        function BasicTips(skinName) {
            var _this = _super.call(this) || this;
            _this.side = 14; //文字离边框的距离
            _this.lineSpacing = 4; //行间距
            _this.image = new Scale9Image(skinName);
            _this.addChild(_this.image);
            _this.text = (new Label).textField;
            _this.text.textAlign = egret.HorizontalAlign.CENTER;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.lineSpacing = _this.lineSpacing;
            _this.addChild(_this.text);
            return _this;
        }
        /**设置普通文字*/
        BasicTips.prototype.setValue = function (value) {
            this.text.text = value;
            this.setCenter();
        };
        /**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
        BasicTips.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setCenter();
        };
        BasicTips.prototype.setCenter = function () {
            var image = this.image;
            var text = this.text;
            var side = this.side;
            var w = text.width + side;
            var h = text.height + side;
            image.width = w;
            image.height = h;
            text.x = text.y = side >> 1;
        };
        return BasicTips;
    }(SunContainer));
    sun.BasicTips = BasicTips;
    __reflect(BasicTips.prototype, "sun.BasicTips");
    /** 基础组件-Label */
    var Label = (function (_super) {
        __extends(Label, _super);
        //@param(文字，文字颜色)
        function Label(str, c) {
            if (str === void 0) { str = ""; }
            if (c === void 0) { c = 0XFFFFFF; }
            var _this = _super.call(this) || this;
            _this.text = new TextField;
            _this.text.textAlign = egret.HorizontalAlign.LEFT; //水平居左
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE; //垂直居中
            _this.text.text = str;
            _this.text.textColor = c;
            _this.text.fontFamily = sun.FONT.YaHei;
            _this.addChild(_this.text);
            return _this;
        }
        Object.defineProperty(Label.prototype, "textField", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(SunContainer));
    sun.Label = Label;
    __reflect(Label.prototype, "sun.Label");
    /** 复选框按钮 */
    var CheckBoxBar = (function (_super) {
        __extends(CheckBoxBar, _super);
        function CheckBoxBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckBoxBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getCheckBox(label);
            else
                item.label = label;
            this.addItem(item);
        };
        CheckBoxBar.prototype.addItem = function (item) {
            _super.prototype.addItem.call(this, item);
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addChild(item);
        };
        CheckBoxBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            item.removeFromParent(true);
        };
        CheckBoxBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.dispEvent(sun.SunEvent.CHANGE);
        };
        Object.defineProperty(CheckBoxBar.prototype, "selectIndexs", {
            get: function () {
                var nums = [];
                for (var i = 0; i < this.items.length; i++) {
                    var btn = this.items[i];
                    if (btn.currentPage == 1)
                        nums.push(i);
                }
                return nums;
            },
            enumerable: true,
            configurable: true
        });
        return CheckBoxBar;
    }(BasicBar));
    sun.CheckBoxBar = CheckBoxBar;
    __reflect(CheckBoxBar.prototype, "sun.CheckBoxBar");
    /**单选框按钮 */
    var RadioButtonBar = (function (_super) {
        __extends(RadioButtonBar, _super);
        function RadioButtonBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAutoLayout = false;
            return _this;
        }
        RadioButtonBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getRodatioButton(label);
            else
                item.label = label;
            this.addItem(item);
        };
        RadioButtonBar.prototype.render = function () {
            this.update();
        };
        RadioButtonBar.prototype.update = function () {
            var item;
            if (this.isAutoLayout == true) {
                for (var i = 0; i < this.items.length; i++) {
                    item = this.items[i];
                    item.x = (item.width + 10) * i;
                }
            }
        };
        RadioButtonBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.selectIndex = this.items.indexOf(item);
            this.dispEvent(sun.SunEvent.CHANGE);
        };
        Object.defineProperty(RadioButtonBar.prototype, "selectIndex", {
            get: function () {
                return this._selectIndex;
            },
            set: function (index) {
                this._selectIndex = index;
                var item = this.items[index];
                this.items.map(setSkinNormal, this);
                function setSkinNormal(i) {
                    i.setSkinNormal();
                }
                item.setSkinDown();
            },
            enumerable: true,
            configurable: true
        });
        return RadioButtonBar;
    }(CheckBoxBar));
    sun.RadioButtonBar = RadioButtonBar;
    __reflect(RadioButtonBar.prototype, "sun.RadioButtonBar");
    /**选项栏组件 */
    var TabbarBar = (function (_super) {
        __extends(TabbarBar, _super);
        function TabbarBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._selectIndex = 0;
            return _this;
        }
        TabbarBar.prototype.onClick = function (e) {
            var curr = e.currentTarget;
            this.selectItem(curr);
        };
        TabbarBar.prototype.selectItem = function (curr) {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getNextItem();
                item.currentPage = 0;
                item.setSkinNormal();
                item.open();
            }
            if (curr) {
                curr.close();
                curr.currentPage = 1;
                curr.setSkinNormal();
                this._selectIndex = this.items.indexOf(curr);
                this.dispEvent(sun.SunEvent.CHANGE, this._selectIndex);
            }
        };
        Object.defineProperty(TabbarBar.prototype, "selectIndex", {
            get: function () { return this._selectIndex; },
            set: function (value) { this._selectIndex = value, this.selectItem(this.getItem(value)); },
            enumerable: true,
            configurable: true
        });
        return TabbarBar;
    }(CheckBoxBar));
    sun.TabbarBar = TabbarBar;
    __reflect(TabbarBar.prototype, "sun.TabbarBar");
    /**上下页切换组件 */
    var PrevNextBar = (function (_super) {
        __extends(PrevNextBar, _super);
        function PrevNextBar(prev, next, interval) {
            if (prev === void 0) { prev = null; }
            if (next === void 0) { next = null; }
            if (interval === void 0) { interval = 100; }
            var _this = _super.call(this) || this;
            _this._selectIndex = 0;
            _this._total = 1;
            _this.btnPrev = prev || new BasicButton(Skin.pnBarPrevNormal, Skin.pnBarPrevDown);
            _this.btnNext = next || new BasicButton(Skin.pnBarNextNormal, Skin.pnBarNextDown);
            _this._interval = interval;
            _this.addChild(_this.btnPrev);
            _this.addChild(_this.btnNext);
            _this.addItem(_this.btnPrev);
            _this.addItem(_this.btnNext);
            _this.layout(Const.HORIZONTAL, interval);
            _this.selectItem();
            return _this;
        }
        PrevNextBar.prototype.onClick = function (e) {
            var curr = e.currentTarget;
            var index = this._selectIndex;
            var total = this._total - 1;
            if (curr == this.btnPrev) {
                index = index > 0 ? --index : 0;
            }
            else {
                index = index < total ? ++index : total;
            }
            this.selectIndex = index;
        };
        PrevNextBar.prototype.selectItem = function () {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getNextItem();
                item.filters = null;
                item.close();
                item.open();
            }
            if (this._selectIndex == 0) {
                this.btnPrev.closeAndSetGray();
            }
            if (this._selectIndex == this._total - 1) {
                this.btnNext.closeAndSetGray();
            }
            this.dispEvent(sun.SunEvent.CHANGE, this._selectIndex);
        };
        Object.defineProperty(PrevNextBar.prototype, "selectIndex", {
            get: function () { return this._selectIndex; },
            set: function (value) { this._selectIndex = value, this.selectItem(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PrevNextBar.prototype, "total", {
            get: function () { return this._total; },
            set: function (value) { this._total = value, this.selectItem(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PrevNextBar.prototype, "interval", {
            get: function () { return this._interval; },
            set: function (value) { this._interval = value, this.layout(Const.HORIZONTAL, value); },
            enumerable: true,
            configurable: true
        });
        return PrevNextBar;
    }(CheckBoxBar));
    sun.PrevNextBar = PrevNextBar;
    __reflect(PrevNextBar.prototype, "sun.PrevNextBar");
    /**九宫格*/
    var Scale9Image = (function (_super) {
        __extends(Scale9Image, _super);
        function Scale9Image(name, rect) {
            if (rect === void 0) { rect = null; }
            var _this = _super.call(this) || this;
            if (name != null) {
                if (RES.hasRes(name)) {
                    _this.texture = RES.getRes(name);
                    _this.scale9Grid = rect || new Rectangle(8, 8, 2, 2);
                }
                else {
                    egret.error("找不到资源：" + name);
                }
            }
            return _this;
        }
        /**增加外网的图片资源 */
        Scale9Image.prototype.addOutWebImage = function (url) {
            if (url != "" && url != null) {
                var imageLoader = new egret.ImageLoader();
                egret.ImageLoader.crossOrigin = "anonymous"; //用于跨域加载不报错
                imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
                imageLoader.load(url);
            }
        };
        Scale9Image.prototype.loadCompleteHandler = function (event) {
            var imageLoader = event.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            this.texture = texture;
        };
        return Scale9Image;
    }(Bitmap));
    sun.Scale9Image = Scale9Image;
    __reflect(Scale9Image.prototype, "sun.Scale9Image");
    /**
     * 资源解析
     */
    var ResourceUtils = (function () {
        function ResourceUtils() {
        }
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         */
        ResourceUtils.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**
         * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
         */
        ResourceUtils.createBitmapFromSheet = function (name, sheetName) {
            if (sheetName === void 0) { sheetName = "gameRes"; }
            var sheet = RES.getRes(sheetName);
            var texture = sheet.getTexture(name);
            var result = new egret.Bitmap();
            result.texture = texture;
            return result;
        };
        ResourceUtils.getTextureFromSheet = function (name, sheetName) {
            if (sheetName === void 0) { sheetName = "gameRes"; }
            var sheet = RES.getRes(sheetName);
            var result = sheet.getTexture(name);
            return result;
        };
        return ResourceUtils;
    }());
    sun.ResourceUtils = ResourceUtils;
    __reflect(ResourceUtils.prototype, "sun.ResourceUtils");
    /** 事件类型 */
    var SunEvent = (function (_super) {
        __extends(SunEvent, _super);
        function SunEvent(type, data, currentTarget) {
            if (type === void 0) { type = ""; }
            if (data === void 0) { data = null; }
            if (currentTarget === void 0) { currentTarget = null; }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.data = data;
            _this.currentTarget = currentTarget;
            return _this;
        }
        //button event
        SunEvent.MOUSE_OVER = "event-over"; //移进
        SunEvent.MOUSE_OUT = "event-out"; //移出
        SunEvent.MOUSE_DOWN = "event-down"; //点下
        SunEvent.MOUSE_MOVE = "event-move"; //移动
        SunEvent.MOUSE_UP = "event-up"; //弹开
        SunEvent.CLICK = "event-click"; //单击
        //tabbar event
        SunEvent.CHANGE = "change"; //更换
        SunEvent.COMPLETE = "complete"; //完成
        SunEvent.ERROR = "error"; //错误
        SunEvent.RENDER_COMPLETE = "render complete"; //渲染完成
        SunEvent.UPDATE = "update"; //更新
        SunEvent.START = "start"; //开始
        SunEvent.MOVE = "move"; //移动
        SunEvent.OVER = "over"; //结束
        SunEvent.PAUSE = "pause"; //暂停
        SunEvent.STOP = "stop"; //停止
        SunEvent.PLAY = "play"; //播放
        SunEvent.OPEN = "open"; //开启
        SunEvent.CLOSE = "close"; //关闭
        return SunEvent;
    }(egret.EventDispatcher));
    sun.SunEvent = SunEvent;
    __reflect(SunEvent.prototype, "sun.SunEvent");
})(sun || (sun = {}));
//# sourceMappingURL=SunTheme.js.map