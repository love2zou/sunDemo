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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Button;
}(sun.BasicButton));
__reflect(Button.prototype, "Button");
;
/**游戏提示模版 */
var GameAlert = (function (_super) {
    __extends(GameAlert, _super);
    function GameAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameAlert.prototype.render = function () {
        this.label = "提示模版";
        _super.prototype.render.call(this); //创建背景
        this.colorBottom = sun.Color.defaultBgColor; //提示模板：容器背景颜色
        this.createCloseBtn();
        this.createView();
    };
    GameAlert.prototype.createView = function () {
        this.setButton("提示自动关闭", 100, 100);
        this.setButton("提示手动关闭", 100, 200);
        this.setButton("提示滚动关闭", 100, 300);
    };
    GameAlert.prototype.onClick = function (e) {
        var btn = e.currentTarget;
        switch (btn.label) {
            case "提示自动关闭":
                alertAuto("只显示2秒然后自动关闭", 2);
                break;
            case "提示手动关闭":
                alertHand("这是一个需要手动\n关闭的提示框");
                break;
            case "提示滚动关闭":
                alertRoll("恭喜子乐获得了99级神器");
                break;
        }
    };
    return GameAlert;
}(BView));
__reflect(GameAlert.prototype, "GameAlert");
/**背景图循环播放模版 */
var GameImageLoop = (function (_super) {
    __extends(GameImageLoop, _super);
    function GameImageLoop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameImageLoop.prototype.render = function () {
        this.label = "背景图循环播放模版";
        _super.prototype.render.call(this);
        this.colorBottom = sun.Color.defaultBgColor; //提示模板：容器背景颜色
        //this.colorBottom = 0x1989fa;
        this.createCloseBtn();
        this.createView();
        this.setButton("向左移动", 100, 100);
        this.setButton("向右移动", 100, 200);
        this.setButton("向上移动", 100, 300);
        this.setButton("向下移动", 100, 400);
        this.addItem(new sun.Label("控制速度", 0XFFFFFF), 200, 10);
        var s = new sun.SliderBar();
        s.value = 0.5;
        this.addItem(s, 50, 50);
        s.addEvent(sun.SunEvent.OVER, this.onSlider, this);
        this.slider = s;
    };
    /**点击事件，继承父类进行绑定 */
    GameImageLoop.prototype.onClick = function (e) {
        var btn = e.currentTarget;
        switch (btn.label) {
            case "向左移动":
                this.layout(sun.Const.HORIZONTAL, -1);
                break;
            case "向右移动":
                this.layout(sun.Const.HORIZONTAL, 1);
                break;
            case "向上移动":
                this.layout(sun.Const.VERTICAL, -1);
                break;
            case "向下移动":
                this.layout(sun.Const.VERTICAL, 1);
                break;
        }
    };
    /**布局：@param(布局方向，播放速度) */
    GameImageLoop.prototype.layout = function (type, interval) {
        if (type === void 0) { type = sun.Const.HORIZONTAL; }
        if (interval === void 0) { interval = -1; }
        this.slider.value = 0.5;
        this.image.stop();
        this.image.speed = 5 * interval;
        this.image.layout(type, interval); //重置位置
        this.image.play();
    };
    GameImageLoop.prototype.createView = function () {
        this.image = new sunImage.ImageLoopPlay("loopBg_jpg");
        this.addItem(this.image);
        this.image.play();
    };
    GameImageLoop.prototype.onSlider = function (e) {
        var s = e.currentTarget;
        var vector = this.image.speed / Math.abs(this.image.speed); //取得速度向量（1或-1确定向量方向）
        this.image.speed = vector * (1 + s.value * 10);
    };
    return GameImageLoop;
}(BView));
__reflect(GameImageLoop.prototype, "GameImageLoop");
/**游戏动画模版 */
var GameAnimation = (function (_super) {
    __extends(GameAnimation, _super);
    function GameAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameAnimation.prototype.render = function () {
        this.label = "动画模版";
        _super.prototype.render.call(this);
        this.colorBottom = 0XCCCCCC;
        this.createCloseBtn();
        this.createView();
    };
    GameAnimation.prototype.createView = function () {
        //背景为贴图
        var chartlet = new sunImage.ImageChartlet("wallMin_jpg", 40);
        //chartlet.layout(moon.Const.VERTICAL);//竖版
        chartlet.setMultiLine(4); //多行版，一行有4个
        this.addItem(chartlet);
        //图像动画
        var animation = new sunImage.ImageAnimation("body", 1, 13);
        animation.loop = true;
        animation.ftp = 6;
        animation.play();
        this.addItem(animation, 100, 100);
        this.body = animation;
        this.addItem(new sun.Label("控制速度", 0XFFFFFF), 100, 10);
        var s = new sun.SliderBar();
        s.value = 0;
        this.addItem(s, 50, 50);
        s.addEvent(sun.SunEvent.OVER, this.onSlider, this);
    };
    GameAnimation.prototype.onSlider = function (e) {
        var s = e.currentTarget;
        this.body.ftp = 6 + s.value * 54;
        this.body.play();
    };
    return GameAnimation;
}(BView));
__reflect(GameAnimation.prototype, "GameAnimation");
/** 公告通知 */
/** 功能说明：(1)循环滚动文字显示；(2)可控制文字显示的滚动速度；（3）可按照不同方向滚动 */
var GameNotify = (function (_super) {
    __extends(GameNotify, _super);
    function GameNotify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameNotify.prototype.render = function () {
        this.label = "公告通知";
        _super.prototype.render.call(this);
        this.colorBottom = sun.Color.defaultBgColor; //提示模板：容器背景颜色
        //this.colorBottom = 0x1989fa;
        this.createCloseBtn();
        this.createView();
        this.setButton("向左滚动", 100, 500);
        this.setButton("向上滚动", 100, 600);
        this.setButton("向下滚动", 100, 700);
        this.addItem(new sun.Label("控制速度", 0X101010), 200, 400);
        var s = new sun.SliderBar();
        s.value = 0.5;
        this.addItem(s, 50, 450);
        s.addEvent(sun.SunEvent.OVER, this.onSlider, this);
        this.slider = s;
    };
    /**点击事件，继承父类进行绑定 */
    GameNotify.prototype.onClick = function (e) {
        var btn = e.currentTarget;
        //温馨建议：向上或向下滚动会有文字超出无法显示的问题，所以一般情况下最好使用向左滚动更为合适
        switch (btn.label) {
            case "向左滚动":
                this.layout(sun.Const.HORIZONTAL, -1);
                break;
            case "向上滚动":
                this.layout(sun.Const.VERTICAL, -1);
                break;
            case "向下滚动":
                this.layout(sun.Const.VERTICAL, 1);
                break;
        }
    };
    /**布局：@param(布局方向，播放速度) */
    GameNotify.prototype.layout = function (type, interval) {
        if (type === void 0) { type = sun.Const.HORIZONTAL; }
        if (interval === void 0) { interval = -1; }
        //确定速度值范围：最大值为2，最小值为0.1
        this.slider.value = 0.5;
        this.notice.stop();
        this.notice.speed = 1 * interval;
        this.notice.layout(type, interval); //重置位置
        this.notice.play();
    };
    GameNotify.prototype.createView = function () {
        //公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!
        this.notice = new sunImage.NoticeLoopPlay(this.stageWidth, 400);
        this.notice.addNoticeMsg("001公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!");
        this.notice.addNoticeMsg("002郑重声明：为了体验更好的游戏服务，现将于12点维护服务器");
        this.notice.addNoticeMsg("003公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!");
        this.notice.addNoticeMsg("004郑重声明：为了体验更好的游戏服务，现将于12点维护服务器");
        this.notice.layout();
        this.addItem(this.notice);
        this.notice.play();
    };
    /** 滑动器事件 */
    GameNotify.prototype.onSlider = function (e) {
        var s = e.currentTarget;
        var vector = this.notice.speed / Math.abs(this.notice.speed); //取得速度向量
        this.notice.speed = vector * (0.1 + s.value * 1.8); //初始值为0.2，最大值为2
    };
    return GameNotify;
}(BView));
__reflect(GameNotify.prototype, "GameNotify");
//# sourceMappingURL=GameTest.js.map