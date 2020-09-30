var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sunGame;
(function (sunGame) {
    /**初始化游戏*/
    var Game = (function () {
        function Game() {
        }
        Game.init = function (stage) {
            //移动端与PC端使用不同模式
            egret.Capabilities.isMobile ? stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH : stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            //保存好舞台数据
            sun.GameData.stageWidth = stage.stageWidth;
            sun.GameData.stageHeight = stage.stageHeight;
            sun.GameData.stage = stage;
            //初始化部分功能
            sun.TipsManager.getIns().init(stage);
            sun.LogManager.getIns().init(stage);
            sun.AlertManager.getIns().init(stage);
        };
        return Game;
    }());
    sunGame.Game = Game;
    __reflect(Game.prototype, "sunGame.Game");
    /**游戏间的工具类*/
    var GameUtils = (function () {
        function GameUtils() {
        }
        /**把数字转换成时间格式,showNum为3时00:00:00,为2时00:00,为1时00*/
        GameUtils.getTimeFormatByNum = function (num, type, showNum) {
            if (type === void 0) { type = ":"; }
            if (showNum === void 0) { showNum = 3; }
            var s;
            var hour;
            var minute;
            var second;
            if (showNum == 1) {
                second = this.numberFormat(num);
                return second;
            }
            else if (showNum == 2) {
                minute = this.numberFormat((num / 60));
                second = this.numberFormat(num % 60);
                return minute + type + second;
            }
            else {
                hour = this.numberFormat(num / 60 / 60 >> 0);
                minute = this.numberFormat((num / 60) % 60);
                second = this.numberFormat(num % 60);
                return hour + type + minute + type + second;
            }
        };
        /**数字格式，把小于10的数在前面加个0*/
        GameUtils.numberFormat = function (num) {
            num = Math.floor(num);
            if (num >= 10)
                return "" + num;
            else
                return "0" + num;
        };
        /***两点间的距离 */
        GameUtils.twoDistance = function (a, b) {
            var x = a.x - b.x;
            var y = a.y - b.y;
            return Math.sqrt(x * x + y * y);
        };
        /**两个可显示对象的区域碰撞*/
        GameUtils.hitTestRect = function (obj1, obj2) {
            var rect1 = obj1.getBounds(); //获取显示对象的测量边界
            var rect2 = obj2.getBounds(); //获取显示对象的测量边界
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            //此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
            return rect1.intersects(rect2);
        };
        return GameUtils;
    }());
    sunGame.GameUtils = GameUtils;
    __reflect(GameUtils.prototype, "sunGame.GameUtils");
})(sunGame || (sunGame = {}));
//# sourceMappingURL=SunGame.js.map