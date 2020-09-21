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
var MainSun = (function (_super) {
    __extends(MainSun, _super);
    function MainSun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainSun.prototype.render = function () {
        //初始化舞台宽高
        _super.prototype.render.call(this);
        //初始化游戏
        sunGame.Game.init(this.stage);
        //创建背景
        this.createBackground(0xf7f5fb);
        var names = ["基础组件", "提示模块", "循环移动", "动画与贴图模版", "公告通知"];
        var btns = [];
        for (var i = 0; i < names.length; i++) {
            var btn = new sun.BasicButton(sun.SunUI.getRoundRect(300, 60, sun.Color.skinNormal), sun.SunUI.getRoundRect(300, 60, sun.Color.skinDown));
            btn.skinAutoScale = false;
            btn.label = names[i]; //按钮名称
            btn.name = i.toString(); //按钮索引值
            // btn.x=(this.stageWidth-btn.width)>>1;
            // btn.y=i*(btn.height+10);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
            this.addChild(btn);
            btns.push(btn);
        }
        //简单布局
        sun.SimpleLayout.displayRank(btns, 2, 10, 10, 10, 10);
        this.father = this.parent; //this.parent 是 Main.ts
    };
    MainSun.prototype.click = function (e) {
        var btn = e.currentTarget;
        this.removeFromParent();
        var view;
        switch (parseInt(btn.name)) {
            case 0:
                view = new SunBasicView();
                break;
            case 1:
                view = new GameAlert();
                break;
            case 2:
                view = new GameImageLoop();
                break;
            case 3:
                view = new GameAnimation;
                break;
            case 4:
                view = new GameNotify();
                break;
        }
        this.father.addChild(view);
        view.addEvent(sun.SunEvent.CLOSE, this.onClose, this);
    };
    MainSun.prototype.onClose = function (e) {
        this.father.addChild(this);
    };
    return MainSun;
}(sun.BasicView));
__reflect(MainSun.prototype, "MainSun");
//# sourceMappingURL=MainSun.js.map