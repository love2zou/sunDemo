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
var BView = (function (_super) {
    __extends(BView, _super);
    /** start 作用：设置舞台宽、高以及创建标题关闭容器背景 */
    function BView() {
        return _super.call(this, 0, 0) || this;
    }
    BView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.canvasY = this.topHeight;
    };
    /** end */
    /** 创建按钮 */
    BView.prototype.setButton = function (label, x, y) {
        var btn = new sun.BasicButton();
        btn.label = label;
        this.addItem(btn, x, y);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    /** 点击事件 */
    BView.prototype.onClick = function (e) {
    };
    /** 创建关闭按钮 */
    BView.prototype.createCloseBtn = function () {
        var btn = new sun.BasicButton(sun.SunUI.getRoundRect(60, 60, sun.Color.skinNormal), sun.SunUI.getRoundRect(60, 60, sun.Color.skinDown));
        btn.label = "关闭";
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    /** 关闭事件 */
    BView.prototype.close = function (e) {
        this.dispEvent(sun.SunEvent.CLOSE);
        this.removeFromParent(true);
    };
    /** 创建画布 */
    BView.prototype.createCanvas = function () {
        //创建画布背景
        var canvasBg = this.createRect(this.stage.stageWidth, this.stage.stageHeight - this.canvasY, sun.Color.white);
        canvasBg.y = this.canvasY;
        this.addChild(canvasBg);
        //创建画布与遮罩
        var maskRect = this.createRect(this.stage.stageWidth, this.stage.stageHeight - this.canvasY, sun.Color.white);
        maskRect.y = this.canvasY;
        this.canvas = this.createRect(this.stage.stageWidth, this.stage.stageHeight, sun.Color.white);
        this.addChild(this.canvas);
        this.canvas.mask = maskRect;
    };
    /** 弹出提示 */
    BView.prototype.createAlert = function (value) {
        var alert = new sun.AlertBar(value);
        alert.addEvent(sun.SunEvent.CLOSE, this.closeAlert, this);
        this.addChild(alert);
    };
    /** 关闭提示 */
    BView.prototype.closeAlert = function (e) {
    };
    /** 添加标题内容 */
    BView.prototype.createTitle = function (title, y, x) {
        if (y === void 0) { y = 0; }
        if (x === void 0) { x = 0; }
        this.addItem(new sun.Label(title, 0), x, y);
    };
    /** 获取随机数组 */
    BView.prototype.getRandomArray = function (array) {
        var value = [];
        var copy = array.concat();
        while (copy.length > 0) {
            var index = Math.floor(Math.random() * copy.length);
            value.push(copy.splice(index, 1)[0]);
        }
        return value;
    };
    return BView;
}(sun.PanelBar));
__reflect(BView.prototype, "BView");
//# sourceMappingURL=BView.js.map