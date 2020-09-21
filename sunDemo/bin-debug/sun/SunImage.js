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
/**
 * ...2020-9-9
 * @author mark_zq
 * 图片处理类，需要SunTheme支持
 */
var SUN_FTP = 24;
var sunImage;
(function (sunImage) {
    /**图像类 */
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image(skinName) {
            if (skinName === void 0) { skinName = ""; }
            var _this = _super.call(this) || this;
            if (skinName != "") {
                _this.skinName = skinName;
                _this.position = new Point();
                _this.addBitmap();
                _this.bgWidth = _this.width;
                _this.bgHeight = _this.height;
            }
            return _this;
        }
        /** 添加图像 */
        Image.prototype.addBitmap = function () {
            if (RES.hasRes(this.skinName)) {
                this.skinImage = new sun.Scale9Image(this.skinName);
                this.addChild(this.skinImage);
            }
            else {
                trace("找不到资源：" + this.skinName);
                //egret.error("找不到key"+this.skinName);
            }
        };
        /**设置锚点在中心 */
        Image.prototype.setAnchorCenter = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height >> 1;
        };
        return Image;
    }(sun.SunContainer));
    sunImage.Image = Image;
    __reflect(Image.prototype, "sunImage.Image");
    /**图像容器类 */
    var BasicContainer = (function (_super) {
        __extends(BasicContainer, _super);
        function BasicContainer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = []; //图像对象数组
            _this.index = 0; //索引
            return _this;
        }
        /** 索引重置为0 */
        BasicContainer.prototype.reset = function () {
            this.index = 0;
        };
        /** 添加元素 */
        BasicContainer.prototype.addItem = function (item) {
            this.items.push(item);
        };
        /** 根据索引删除一个元素 */
        BasicContainer.prototype.removeItem = function (index) {
            if (this.hasItem(index)) {
                this.items.splice(index, 1);
            }
        };
        /** 根据索引获取一个元素 */
        BasicContainer.prototype.getItem = function (index) {
            return this.items[index];
        };
        /** 根据索引判断一个元素是否存在 */
        BasicContainer.prototype.hasItem = function (index) {
            return this.items.length > 0 && (index >= 0 && index < this.items.length);
        };
        /** 获取下一个元素 */
        BasicContainer.prototype.getNextItem = function () {
            return this.items[this.index++];
        };
        /** 获取一个元素的索引值 */
        BasicContainer.prototype.getIndexByItem = function (item) {
            return this.items.indexOf(item);
        };
        Object.defineProperty(BasicContainer.prototype, "itemsLength", {
            /** 获取元素数组长度 */
            get: function () {
                return this.items.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicContainer.prototype, "currIndex", {
            /** 获取元素索引值 */
            get: function () {
                return this.index;
            },
            enumerable: true,
            configurable: true
        });
        /** 删除所有元素 */
        BasicContainer.prototype.removeAll = function () {
            while (this.hasItem(0)) {
                var item = this.getItem(0);
                if (item.parent)
                    item.parent.removeChild(item);
                this.removeItem(0);
            }
        };
        return BasicContainer;
    }(Image));
    sunImage.BasicContainer = BasicContainer;
    __reflect(BasicContainer.prototype, "sunImage.BasicContainer");
    /**图像贴图类 */
    var ImageChartlet = (function (_super) {
        __extends(ImageChartlet, _super);
        /**图像名称，图像个数 */
        function ImageChartlet(skinName, count) {
            if (count === void 0) { count = 1; }
            var _this = _super.call(this) || this;
            _this.skinName = skinName; //皮肤名称
            for (var i = 0; i < count; i++) {
                _this.items.push(_this.getBitmap());
            }
            return _this;
        }
        /** 根据名称获取九宫图 */
        ImageChartlet.prototype.getBitmap = function () {
            var skin;
            if (RES.hasRes(this.skinName)) {
                skin = new sun.Scale9Image(this.skinName);
                this.addChild(skin);
            }
            else {
                trace("找不到资源：" + this.skinName);
            }
            return skin;
        };
        /**布局：@param（布局排列方向，间隔距离） */
        ImageChartlet.prototype.layout = function (type, interval) {
            if (interval === void 0) { interval = 0; }
            if (type == sun.Const.VERTICAL)
                sun.SimpleLayout.displayRank(this.items, 1, interval, interval, 0, 0);
            else if (type == sun.Const.HORIZONTAL)
                sun.SimpleLayout.displayRank(this.items, this.items.length, interval, interval, 0, 0);
        };
        /**多行排列，xNum是一排排几个 */
        ImageChartlet.prototype.setMultiLine = function (xNum, interval) {
            if (interval === void 0) { interval = 0; }
            sun.SimpleLayout.displayRank(this.items, xNum, interval, interval, 0, 0);
        };
        return ImageChartlet;
    }(BasicContainer));
    sunImage.ImageChartlet = ImageChartlet;
    __reflect(ImageChartlet.prototype, "sunImage.ImageChartlet", ["sun.ILayout"]);
    /**图像残影跟随 */
    var ImageFollow = (function (_super) {
        __extends(ImageFollow, _super);
        function ImageFollow(skinName, count) {
            if (count === void 0) { count = 1; }
            var _this = _super.call(this, skinName, count) || this;
            /**跟随速度 */
            _this.speed = 4;
            _this.head = _this.items[0];
            _this.addChild(_this.head);
            _this.reset();
            while (_this.hasItem(_this.index)) {
                var item = _this.getNextItem();
                item.alpha = (_this.itemsLength - (_this.index - 1)) / _this.itemsLength;
            }
            egret.startTick(_this.loop, _this);
            return _this;
        }
        /**更新位置 */
        ImageFollow.prototype.update = function (x, y) {
            this.head.x += x;
            this.head.y += y;
        };
        /**循环函数*/
        ImageFollow.prototype.loop = function (num) {
            var len = this.items.length - 1;
            var endItem = this.items[len];
            //在这里引用了sunGame东西，是否可以优化
            if (sunGame.GameUtils.twoDistance(this.headItem, endItem) > 0.1) {
                //当头尾间的距离小于0.1时，就不在执行循环跟随。
                var v = this.speed;
                for (var i = 0; i < len; i++) {
                    var item1 = this.items[i];
                    var item2 = this.items[i + 1];
                    item2.x += (item1.x - item2.x) / v;
                    item2.y += (item1.y - item2.y) / v;
                }
            }
            return true;
        };
        Object.defineProperty(ImageFollow.prototype, "headItem", {
            /**获取第一个元素*/
            get: function () { return this.head; },
            enumerable: true,
            configurable: true
        });
        ;
        return ImageFollow;
    }(ImageChartlet));
    sunImage.ImageFollow = ImageFollow;
    __reflect(ImageFollow.prototype, "sunImage.ImageFollow");
    /**图像循环播放（一般用于两张相同的背景一直循环使用） */
    var ImageLoopPlay = (function (_super) {
        __extends(ImageLoopPlay, _super);
        function ImageLoopPlay(skinName) {
            var _this = _super.call(this, skinName, 2) || this;
            _this._speed = -5; //速度
            _this.layout();
            return _this;
        }
        Object.defineProperty(ImageLoopPlay.prototype, "speed", {
            /** 获取速度 */
            get: function () { return this._speed; },
            /** 设置速度 */
            set: function (v) { this._speed = v; },
            enumerable: true,
            configurable: true
        });
        /**横竖版布局，默认是横版布局 interval在此表示需要移动的左右还是上下的方向*/
        ImageLoopPlay.prototype.layout = function (type, interval) {
            if (type === void 0) { type = sun.Const.HORIZONTAL; }
            if (interval === void 0) { interval = -1; }
            //sun.Const.HORIZONTAL -1:由右到左；sun.Const.HORIZONTAL 1:由左到右；sun.Const.VERTICAL -1:由下到上；sun.Const.VERTICAL 1:由上到下
            this.type = type;
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                item.x = item.y = 0;
                if (type == sun.Const.HORIZONTAL) {
                    if (interval < 0)
                        item.x = this.index * item.width; //第一张图在屏幕内，第二张图在屏幕右侧
                    else
                        item.x = this.index * item.width * -1;
                }
                else {
                    if (interval < 0)
                        item.y = this.index * item.height;
                    else
                        item.y = this.index * item.height * -1;
                }
                this.index++;
            }
        };
        /** 播放 */
        ImageLoopPlay.prototype.play = function () {
            egret.startTick(this.loop, this);
        };
        /** 停止 */
        ImageLoopPlay.prototype.stop = function () {
            egret.stopTick(this.loop, this);
        };
        /**循环函数*/
        ImageLoopPlay.prototype.loop = function (num) {
            var len = this.items.length;
            for (var i = 0; i < len; i++) {
                var item = this.items[i];
                if (this.type == sun.Const.HORIZONTAL) {
                    item.x += this.speed;
                    if (this.speed < 0) {
                        if (item.x <= -item.width) {
                            var x = item.x + item.width;
                            item.x = item.width + x;
                        }
                    }
                    else {
                        if (item.x >= item.width) {
                            var x = item.x - item.width;
                            item.x = -item.width + x;
                        }
                    }
                }
                else {
                    item.y += this.speed;
                    if (this.speed < 0) {
                        if (item.y <= -item.height) {
                            var y = item.y + item.height;
                            item.y = item.height + y;
                        }
                    }
                    else {
                        if (item.y >= item.height) {
                            var y = item.y - item.height;
                            item.y = -item.height + y;
                        }
                    }
                }
            }
            return true;
        };
        return ImageLoopPlay;
    }(ImageChartlet));
    sunImage.ImageLoopPlay = ImageLoopPlay;
    __reflect(ImageLoopPlay.prototype, "sunImage.ImageLoopPlay");
    /** 公告通知（循环播放） */
    var NoticeLoopPlay = (function (_super) {
        __extends(NoticeLoopPlay, _super);
        /** @param(舞台宽度，背景皮肤) */
        function NoticeLoopPlay(stageW, bgWidth) {
            if (bgWidth === void 0) { bgWidth = 200; }
            var _this = _super.call(this) || this;
            _this._speed = -1; //速度
            /** 图标间隔 */
            _this.iconInterval = 20;
            _this.stageW = stageW;
            _this.bgColor = 0x101010; //黑色
            _this.bgWidth = bgWidth;
            _this.initView();
            return _this;
        }
        NoticeLoopPlay.prototype.initView = function () {
            //在文字宽高基础上 加宽加高
            var w = this.bgWidth; //背景宽度
            var h = 40;
            //设置背景显示位置
            var x = (this.stageW - w) >> 1; //x位置
            var y = 100; //y位置
            //设置最底层背景
            this.iconBg = new sun.SunDisplayObject();
            this.iconBg.type = sun.Const.SHAPE_RECT;
            this.iconBg.data = { w: w, h: h, c: this.bgColor, a: 0.4 };
            this.iconBg.x = x;
            this.iconBg.y = y;
            this.addChild(this.iconBg);
            //公告图标
            var skinImage = new sun.Scale9Image("notice_icon_png");
            skinImage.x = this.iconInterval >> 1;
            skinImage.y = (this.iconBg.height - skinImage.height) >> 1;
            this.iconBg.addChild(skinImage);
            //设置背景显示
            this.bg = new sun.SunDisplayObject();
            this.bg.type = sun.Const.SHAPE_RECT;
            this.bg.data = { w: w - this.iconInterval * 2, h: h, c: this.bgColor, a: 0 };
            //this.bg.setBackground(0xffcccc,2);//不设置背景，看起来就是画边框
            this.bg.x = x + this.iconInterval * 2;
            this.bg.y = y;
            this.addChild(this.bg);
            //设置背景遮罩效果
            var m = sun.SunUI.getRect(w - this.iconInterval * 2, h, 0, 1, x + this.iconInterval * 2, y); //画一个黑色遮罩
            this.addChild(m);
            this.bg.mask = m; //遮罩的作用是指定一个显示对象的可见区域，显示对象的可见区域由另一个显示对象确定
            //设置内容显示位置
            this.textX = w - this.iconInterval * 2;
        };
        /** 发布消息 */
        NoticeLoopPlay.prototype.addNoticeMsg = function (msg) {
            this.text = new TextField();
            this.text.size = 20;
            this.text.textColor = 0xffffff; //白色字体
            this.text.text = msg;
            this.textY = (this.bg.height - this.text.height) >> 1;
            this.bg.addChild(this.text);
            this.addItem(this.text);
        };
        /**横竖版布局，默认是横版布局 interval在此表示需要移动的左右还是上下的方向*/
        NoticeLoopPlay.prototype.layout = function (type, interval) {
            if (type === void 0) { type = sun.Const.HORIZONTAL; }
            if (interval === void 0) { interval = -1; }
            //sun.Const.HORIZONTAL -1:由右到左；sun.Const.HORIZONTAL 1:由左到右；sun.Const.VERTICAL -1:由下到上；sun.Const.VERTICAL 1:由上到下
            this.type = type;
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                item.x = item.y = 0;
                if (type == sun.Const.HORIZONTAL) {
                    if (interval < 0) {
                        item.x = this.textX;
                        item.y = this.textY;
                    } //向左移动
                    else { }
                    ;
                }
                else {
                    if (interval < 0) {
                        item.x = 0;
                        item.y = item.height * 2;
                    } //向上移动
                    else {
                        item.x = 0;
                        item.y = -item.height;
                    } //向下移动
                }
                this.index++;
            }
        };
        Object.defineProperty(NoticeLoopPlay.prototype, "speed", {
            /** 获取速度 */
            get: function () { return this._speed; },
            /** 设置速度 */
            set: function (v) { this._speed = v; },
            enumerable: true,
            configurable: true
        });
        /** 播放 */
        NoticeLoopPlay.prototype.play = function () {
            egret.startTick(this.loop, this);
        };
        /** 停止 */
        NoticeLoopPlay.prototype.stop = function () {
            egret.stopTick(this.loop, this);
        };
        /**循环函数*/
        NoticeLoopPlay.prototype.loop = function (num) {
            if (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                if (this.type == sun.Const.HORIZONTAL) {
                    item.x += this.speed;
                    if (this.speed < 0) {
                        if (item.x <= -item.width) {
                            item.x = this.textX;
                            this.index++;
                        }
                    }
                    else {
                    }
                }
                else {
                    item.y += this.speed;
                    if (this.speed < 0) {
                        if (item.y <= -item.height) {
                            item.y = item.height * 2;
                            this.index++;
                        }
                    }
                    else {
                        if (item.y >= 2 * item.height) {
                            item.y = -item.height;
                            this.index++;
                        }
                    }
                }
            }
            else {
                this.reset();
            }
            return true;
        };
        return NoticeLoopPlay;
    }(BasicContainer));
    sunImage.NoticeLoopPlay = NoticeLoopPlay;
    __reflect(NoticeLoopPlay.prototype, "sunImage.NoticeLoopPlay");
    /**图像动画类 */
    var ImageAnimation = (function (_super) {
        __extends(ImageAnimation, _super);
        /** @param(动画皮肤名称，序列帧start，序列帧end，动画资源类型) */
        function ImageAnimation(skinName, start, end, type) {
            if (skinName === void 0) { skinName = ""; }
            if (type === void 0) { type = "png"; }
            var _this = _super.call(this) || this;
            _this._ftp = SUN_FTP;
            for (var i = start; i <= end; i++) {
                _this.items.push(skinName + i + "_" + type);
            }
            //添加图形到容器中
            _this.skinName = _this.getItem(0);
            _this.addBitmap();
            //创建计时器
            _this.createTime();
            return _this;
        }
        /** 定时器 */
        ImageAnimation.prototype.createTime = function () {
            if (this.timer == null) {
                this.timer = new egret.Timer(1000 / this.ftp, 0); //@param(调用时间间隔；调用次数，为0时表示一直调用)
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            }
        };
        /** 定时器事件 */
        ImageAnimation.prototype.onTimer = function () {
            //判定资源是否存在
            if (this.hasItem(++this.index)) {
                this.gotoAndStop(this.index);
            }
            else {
                if (this.loop) {
                    this.reset();
                    this.gotoAndStop(this.index);
                }
                else {
                    this.timer.stop();
                }
            }
        };
        ImageAnimation.prototype.gotoAndStop = function (index) {
            if (this.hasItem(index)) {
                this.index = index;
                this.skinName = this.getItem(index);
                this.update();
            }
            else {
                trace("gotoAndStop的参数请保持在0到" + this.items.length, "当前index=" + index);
            }
        };
        /** 播放资源 */
        ImageAnimation.prototype.gotoAndPlay = function (index) {
            this.index = index;
            this.play();
        };
        /** 启动计时器 */
        ImageAnimation.prototype.play = function () {
            this.timer.start();
        };
        /** 停止计时 */
        ImageAnimation.prototype.stop = function () {
            this.timer.stop();
        };
        /** 更新资源 */
        ImageAnimation.prototype.update = function () {
            if (RES.hasRes(this.skinName)) {
                this.skinImage.texture = RES.getRes(this.skinName);
            }
            else {
                trace("找不到资源：" + this.skinName);
            }
        };
        Object.defineProperty(ImageAnimation.prototype, "currentFrame", {
            /** 获取当前帧索引值 */
            get: function () { return this.index; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "ftp", {
            /** 获取当前帧（每秒） */
            get: function () { return this._ftp; },
            /** 设置当前帧（每秒） */
            set: function (value) {
                this._ftp = value;
                this.removeTime();
                this.createTime();
            },
            enumerable: true,
            configurable: true
        });
        /** 移除计时器 */
        ImageAnimation.prototype.removeTime = function () {
            if (this.timer != null) {
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this.timer = null;
            }
        };
        /** 销毁 */
        ImageAnimation.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.removeTime();
        };
        return ImageAnimation;
    }(BasicContainer));
    sunImage.ImageAnimation = ImageAnimation;
    __reflect(ImageAnimation.prototype, "sunImage.ImageAnimation");
    /**图像布局类 */
    var ImageLayout = (function () {
        function ImageLayout() {
        }
        ImageLayout.getIns = function () {
            if (this.instance == null)
                this.instance = new ImageLayout();
            return this.instance;
        };
        ImageLayout.prototype.setImage = function (image) {
            this.image = image;
        };
        ImageLayout.prototype.setStageWH = function (w, h) {
            this.tw = w;
            this.th = h;
        };
        ImageLayout.prototype.setTop = function (distance) {
            this.image.y = distance;
        };
        ImageLayout.prototype.setBottom = function (distance) {
            this.image.y = this.th - this.image.height - distance;
        };
        ImageLayout.prototype.setLeft = function (distance) {
            this.image.x = distance;
        };
        ImageLayout.prototype.setRight = function (distance) {
            this.image.x = this.tw - this.image.width - distance;
        };
        ImageLayout.prototype.setCenterX = function (distance) {
            if (distance === void 0) { distance = 0; }
            this.image.x = ((this.tw - this.image.width) >> 1) + distance;
        };
        ImageLayout.prototype.setCenterY = function (distance) {
            if (distance === void 0) { distance = 0; }
            this.image.y = ((this.tw - this.image.width) >> 1) + distance;
        };
        ImageLayout.prototype.setCenterXByPanent = function (image) {
            if (image.parent instanceof Image)
                image.x = (image.parent.bgWidth - image.width) >> 1;
            else
                image.x = (image.parent.width - image.width) >> 1;
        };
        ImageLayout.prototype.setCenterYByPanent = function (image) {
            if (image.parent instanceof Image)
                image.y = (image.parent.bgHeight - image.height) >> 1;
            else
                image.y = (image.parent.height - image.height) >> 1;
        };
        return ImageLayout;
    }());
    sunImage.ImageLayout = ImageLayout;
    __reflect(ImageLayout.prototype, "sunImage.ImageLayout");
})(sunImage || (sunImage = {}));
//# sourceMappingURL=SunImage.js.map