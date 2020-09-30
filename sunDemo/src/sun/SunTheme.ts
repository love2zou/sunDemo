
/**
 * ...2020-9-8
 * @author mark_zq
 * 纯代码组件类，可独立使用
 */

/** 文本 */
class TextField extends egret.TextField {};
/** 精灵 */
class Sprite extends egret.Sprite {};
/** 图形 */
class Shape extends egret.Shape {};
/** 显示对象 */
class DisplayObject extends egret.DisplayObject {};
/** 显示对象容器 */
class DisplayObjectContainer extends egret.DisplayObjectContainer {};
/** 坐标 */
class Point extends egret.Point{};
class Rectangle extends egret.Rectangle{};
class Bitmap extends egret.Bitmap{};
class BitmapData extends egret.BitmapData{};
class Stage extends egret.Stage{};
class Tween extends egret.Tween{};
class Ease extends egret.Ease{};

//----------------------------------------------
//以下几种方法在使用前都必须先调用各自的初始化函数
//sun.TipsManager.getIns().init(this.stage);
//sun.showLog.getIns().init(this.stage);
//sun.AlertManager.getIns().init(this.stage);
/** 打印日志 */
var log=console.log;
var trace=function(...arg):void
{
    var str:string="";
	for(let i:number=0;i<arg.length;i++){
         str+=arg[i]+",";
    }
	str=str.substr(0,str.length-1);
	sun.LogManager.getIns().logMessage(str)
}
var traceSimple=function(...arg):void
{
	var str:string="";
	for(let i:number=0;i<arg.length;i++){
         str+=arg[i]+",";
    }
	str=str.substr(0,str.length-1);
    sun.LogManager.getIns().log(str);
}
/** 提示或警告 */
var alertAuto=function(title:string="提示或警告",closeTime:number=3):void
{
	sun.AlertManager.getIns().alertAuto(title,closeTime)
}
var alertHand=function(title:string="提示或警告"):void
{
	sun.AlertManager.getIns().alert(title);
}
var alertRoll=function(title:string="提示或警告",bgWidth:number=200):void
{
	sun.AlertManager.getIns().alertRoll(title,bgWidth);
}
/**
 * sun模块
 * 模块中的代码属于模块本身的作用域，而不是全局作用域。
 * 也这就意味着没有明确的 export 的话，模块中的 变量，函数，类等对其他模块是不见的。相对的其他模块要使用某一模块的内容需要通过 import 导入。
 */
module sun
{
    /** 字体 */
    export class FONT{
        public static YaHei:string="Microsoft YaHei";
		public static HeiTi:string="黑体";
	}
    /** 常量类 */
    export class Const{
		/**布局 横版*/
		public static readonly HORIZONTAL:string="horizontal";
		/**布局 竖版*/
		public static readonly VERTICAL:string="vertical";
		/**方向 顶部*/
		public static readonly TOP:string="top";
		/**方向 底部*/
		public static readonly BOTTOM:string="bottom";
		/**方向 左*/
		public static readonly LEFT:string="left";
		/**方向 右*/
		public static readonly RIGHT:string="right";
		/**方向 居中*/
		public static readonly CENTER:string="center";
		/**方向 自定义坐标*/
		public static readonly CUSTOM:string="custom";

		/**形状 方块*/
		public static readonly SHAPE_RECT:string="shape rect";
		/**形状 圆角方块*/
		public static readonly SHAPE_RECT_ROUND:string="shape rect round";
		/**形状 圆块*/
		public static readonly SHAPE_CIRCLE:string="shape circle";
		/**版本 调试*/
		public static readonly VER_DEBUG:string="debug";
		/**版本 发布*/
		public static readonly VER_RELEASE:string="release";
	}
    /** 游戏基础数据 */
    export class GameData{
		/**舞台*/
		public static stage:Stage;
		/**游戏屏幕宽 */
		public static stageWidth:number=640;
		/**游戏屏幕高 */
		public static stageHeight:number=1136;
		/**帧频*/
		public static FPS:number=60;
		/**游戏版号，默认是调试版 */
		public static version:string = Const.VER_DEBUG;
		/**是否为移动模式（例如移动电话或平板电脑） */
		public static isMobile:boolean = egret.Capabilities.isMobile;
		/**游戏的ID */
		public static gameId:number=1;
		/**游戏分数 */
		public static score:number=0;
	}

	/** 列表对象接口 */
	export interface IItem{
		update():void;
		addItem(item:DisplayObject):void;
		removeItem(item:DisplayObject):void;
		hasItem(index:number):boolean;
		getItem(index:number):DisplayObject;
		getNextItem():DisplayObject;
		reset():void;
    }
	export interface ILayout{  
		layout(type:string,interval:number):void;
    }
	/** 按钮接口 */
	export interface IOnoff{
		open():void;
		close():void;
	}

	/**颜色 */
	export class Color
	{
		//默认：primary颜色
		public static get skinNormal():number{return 0X409eff};//显示蓝色
		public static get skinDown():number{return 0X66b1ff};//按下背景色
		public static get progressBgColor():number{return 0Xebeef5};//progress bgColor
		
		//随机颜色
		public static get random():number{return Math.random()*0XFFFFFF};

		//白色
		public static get white():number {return 0XFFFFFF};
		//灰白色
		public static get defaultBgColor():number {return 0xf7f5fb};
		
		//primary颜色
		public static get blueNormal():number {return 0X409eff};//深蓝
		public static get blueNormal2():number {return 0xecf5ff};//浅蓝
		public static get blueDown():number {return 0X66b1ff};//浅蓝
		//success颜色
		public static get greenNormal():number {return 0X67c23a};//深绿	
		public static get greenNormal2():number {return 0Xf0f9eb};//浅绿
		public static get greenDown():number {return 0X85ce61};//浅绿
		//warning颜色
		public static get yellowNormal():number {return 0Xe6a23c};//深黄
		public static get yellowNormal2():number {return 0Xfdf6ec};//浅黄
		public static get yellowDown():number {return 0Xebb563};//浅黄
		//error颜色
		public static get redNormal():number {return 0Xf56c6c};//深红
		public static get redNormal2():number {return 0Xfef0f0};//浅红
		public static get redDown():number {return 0Xf78989};//浅红
		//不重要颜色
		public static get grayNormal():number {return 0X909399};//深灰
		public static get grayNormal2():number {return 0Xf4f4f5};//浅灰
		public static get grayDown():number {return 0Xa6a9ad};//浅灰

		public static get switchOnDown():number{return 0X13ce66};//开-绿色
		public static get switchOffDown():number{return 0Xff4949};//关-红色

		public static get black():number {return 0X101010};
		public static get red():number {return 0XFF0000};
		public static get green():number {return 0X00FF00};
		public static get bule():number {return 0X0000FF};

		public static get titleBackground():number{return 0x1989fa};
		public static getRandomArray(count:number):number[]{
			var colors:number[]=[];
			for(var i:number=0;i<count;i++) colors.push(Math.random()*0XFFFFFF);
			return colors;
		};
		/** 可改变颜色的亮暗,value值是-255到255*/
		public static lightenDarkenColor(color:number, value:number):number {  
			var r = (color >> 16) + value;
			if (r > 255) r = 255;
			else if (r < 0) r = 0;
			var b = ((color >> 8) & 0x00FF) + value;
			if (b > 255) b = 255;
			else if (b < 0) b = 0;
			var g = (color & 0x0000FF) + value;
			if (g > 255) g = 255;
			else if (g < 0) g = 0;
			return (g | (b << 8) | (r << 16));
		}
	}
	/**皮肤 */
	export class Skin
	{
		/**默认按钮 */
		public static get buttonNormal():Sprite{return sun.SunUI.getRect(60,30,sun.Color.skinNormal)};
		public static get buttonDown():Sprite{return sun.SunUI.getRect(60,30,sun.Color.skinDown)};
		/** 主要按钮-primary */
		public static get primaryNormal():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.blueNormal)};
		public static get primaryNormal2():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.blueNormal2)};
		public static get primaryDown():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.blueDown)};
		/** 成功按钮-success */
		public static get successNormal():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.greenNormal)};
		public static get successDown():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.greenDown)};
		/** 警告按钮-warning */
		public static get warningNormal():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.yellowNormal)};
		public static get warningDown():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.yellowDown)};
		/** 危险按钮-error */
		public static get errorNormal():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.redNormal)};
		public static get errorDown():Sprite{return sun.SunUI.getRoundRect(60,30,sun.Color.redDown)};
		/**随机色的方与圆 */
		public static get randomRect():Sprite{return sun.SunUI.getRect(60,60,sun.Color.random)};
		public static get randomCircle():Sprite{return sun.SunUI.getCircle(50,sun.Color.random)};
		/**默认点-轮播 */
		public static get pointNormal():Sprite{return sun.SunUI.getCircle(6,sun.Color.white,0.4)};
		public static get pointDown():Sprite{return sun.SunUI.getCircle(6,sun.Color.white)};
		/**默认单选框 */
		public static get radioOff():Sprite{return sun.SunUI.getRadioCircle(sun.Color.white,sun.Color.white)};
		public static get radioOn():Sprite{return sun.SunUI.getRadioCircle(sun.Color.blueNormal,sun.Color.white,1)};
		/**默认复选框 */
		public static get checkBoxOff():Sprite{return sun.SunUI.getCheckBoxRect(sun.Color.white,sun.Color.white)};
		public static get checkBoxOn():Sprite{return sun.SunUI.getCheckBoxRect(sun.Color.blueNormal,sun.Color.white,1)};
		/**默认开关 */
		public static get switchOff():Sprite{return sun.SunUI.getSwitch(sun.Color.switchOffDown,sun.Color.white)};
		public static get switchOn():Sprite{return sun.SunUI.getSwitch(sun.Color.switchOnDown,sun.Color.white,1)};
		/**默认进度条 */
		public static get progressBackground():Sprite{return sun.SunUI.getRoundRect(300,10,sun.Color.progressBgColor,15,15);}
		public static get progressValue():Sprite{return sun.SunUI.getRoundRect(300,10,sun.Color.blueNormal,15,15);}
		/**默认滑动器 */
		public static get sliderBackground():Sprite{return sun.SunUI.getRoundRect(300,10,sun.Color.progressBgColor,15,15);}
		public static get sliderValue():Sprite{return sun.SunUI.getRoundRect(300,10,sun.Color.skinNormal,15,15);}
		public static get sliderBar():Sprite{return sun.SunUI.getCircle(12,sun.Color.white);}
		/**默认滚动条 */
		public static get scrollBar():Sprite{return sun.SunUI.getRect(10,10,sun.Color.skinNormal);}
		/**上下页切换组件 */
		public static get pnBarPrevNormal():Sprite{return sun.SunUI.getPolygon(3,20,sun.Color.skinNormal,180);}
		public static get pnBarPrevDown():Sprite{return sun.SunUI.getPolygon(3,20,sun.Color.skinDown,180);}
		public static get pnBarNextNormal():Sprite{return sun.SunUI.getPolygon(3,20,sun.Color.skinNormal);}
		public static get pnBarNextDown():Sprite{return sun.SunUI.getPolygon(3,20,sun.Color.skinDown);}
		/** 获取单选按钮 @param（文字） */
		public static getRodatioButton(label:string):BasicButton
		{
			var btn:BasicButton=new BasicButton(sun.Skin.radioOff,sun.Skin.radioOn);
			btn.skinAutoScale=false;
			btn.label=label;
			btn.labelColor=sun.Color.black;
			//设置按钮文字位置
            btn.setLabelPoint(40,0);
			return btn;
		}
		public static getCheckBox(label:string):MoreSkinButton
		{
			var skins:any[]=[sun.Skin.checkBoxOff,sun.Skin.checkBoxOff,sun.Skin.checkBoxOn,sun.Skin.checkBoxOn]
            var btn:sun.MoreSkinButton=new sun.MoreSkinButton(skins);
			btn.skinAutoScale=false;
			btn.label=label;
            btn.toggleSwitch=true;
            btn.labelColor=sun.Color.black;
            btn.setLabelPoint(50,2);
			return btn;
		}
	}
	
	/**
	 * 简单的布局
	 * @author mark_zq
	 */
	export class SimpleLayout{
		/**参数：数组,X轴个数（即一行几个）,X轴距离（左右间距）,Y轴距离（上下间距）,X轴位置（第一个按钮初始x位置）,Y轴位置（第一个按钮初始y位置）,正排=1/反排=-1 */
		public static displayRank(array:any[],xNum:number=1,xDis:number=0,yDis:number=0,x:number=0,y:number=0,sign:number=1):void
		{
			//sign反排=-1时，x,y 初始位置可以放在画面的右上角位置，比如x=430，y=0
			var display:egret.DisplayObject;
			for(var i:number=0;i<array.length;i++){
				display=array[i];
				display.x=x+Math.floor(i%xNum)*(display.width+xDis)*sign;
				display.y=y+Math.floor(i/xNum)*(display.height+yDis)*sign;
			}
		}
	}
    /** Sun显示对象 */
    export class SunDisplayObject extends Sprite
	{
		/** 显示对象形状 */
		private _type:string=Const.SHAPE_RECT;
		/** 形状颜色 */
		private _color:number=0;
		/** 绘制图形的数据 */
		private _data:any;
		/** 是否存在背景 */
		private _hasBg:boolean;
		/** 显示对象 */
		private display:Sprite;
		/** 显示背景 */
		private bg:Sprite;
		/** 初始化 */
		public constructor()
		{
			super();
			this.display=new Sprite;
			this.bg=new Sprite;
		}
		/**设置形状 */
		set type(value:string){this._type=value}
		/** 获取形状 */
		get type():string{return this._type}
		/** 设置颜色并绘制 */
		set color(value:number){this._color=value;this._data.c=value;this.draw();}
		/** 获取显示对象颜色 */
		get color():number{return this._color}
		/** 绘制形状：{w:1,h:1,r:1,c:1,ew:1,eh:1,a:0.3} */
		set data(value:Object){this._data=value;this.draw();}
		protected draw():void
		{
			this._color=this._data.c;
			this.display.graphics.clear();
			this.display=this.getDisplay(this._data);
			this.addChild(this.display);
			this.setPosition();
		}
		/** 设置位置（如果有背景，则会设置位置） */
		protected setPosition():void
		{
			if(this._hasBg&&this.type!=Const.SHAPE_CIRCLE){
				this.display.x=(this.bg.width-this.display.width)>>1;
				this.display.y=(this.bg.height-this.display.height)>>1;
			}
		}
		/** 设置背景 */
		public setBackground(color:number,side:number=1)
		{
			this._hasBg=true;
			var d:any=this._data;
			var o:any={};
			for(var i in d){
				o[i]=d[i];
			}
			o.c=color;
			if(o.w) o.w=o.w+side*2;
			if(o.h) o.h=o.h+side*2;
			if(o.r) o.r=o.r+side;
			this.bg.graphics.clear();
			this.bg=this.getDisplay(o);
			this.addChildAt(this.bg,0);
			this.setPosition();
		}
		/** 绘制形状 */
		protected getDisplay(o:any):Sprite
		{
			switch(this.type){
				case Const.SHAPE_RECT:
				return SunUI.getRect(o.w,o.h,o.c,o.a);
				case Const.SHAPE_RECT_ROUND:
				return SunUI.getRoundRect(o.w,o.h,o.c,o.ew,o.eh,o.a);
				case Const.SHAPE_CIRCLE:
				return SunUI.getCircle(o.r,o.c,o.a);
			}
		}
	}
    /**
     * ES6模块主要有两个功能：export和import
     * export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
     * import用于在一个模块中加载另一个含有export接口的模块。
     * 也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。
     * export default 向外暴露的成员，可以使用任意变量来接收; 使用export导出的成员，必须严格按照导出时候的名称，来使用{ }按需接收
	 * extends：继承父类，可重写父类函数；implements:实现所有接口 
     */
     export class SunContainer extends DisplayObjectContainer
	{
		private dataEvent:Object = new Object;//事件对象
		protected stageWidth:number;//舞台宽度
		protected stageHeight:number;//舞台高度
        public constructor()
        {
            super();
            //初始化
            this.init();
            //once只触发一次,触发后会自动注销事件，而对应的addEventListener需要手动注销
			this.once(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
        }
        /** 加载到舞台方法 */
        private addToStage():void
        {
            this.render();
        }
        /**加载到舞台之前调用 */
        protected init():void
        {

        }
        /**加载到舞台之后调用 */
        protected render():void
        {
			this.stageWidth = this.stage.stageWidth;
			this.stageHeight = this.stage.stageHeight;
        }

		/**发布事件*/
		public dispEvent(type:string,data:Object=null,dataType:Object=null):void
		{
			if(this.dataEvent){
				var fun:Function=this.dataEvent[type] as Function;
				if(fun!=null){
                    var moonEvent:SunEvent = new SunEvent();
					moonEvent.currentTarget=this;
					moonEvent.data=data;
					moonEvent.type=type;
					moonEvent.dataType=dataType;
					if(fun["this"]){
						(<Function>fun).apply(fun["this"],[moonEvent]);
					}else{
						fun(moonEvent)
					}
				}
			}
		}
		/**帧听事件*/
		public addEvent(type:string, listener:Function,thisObj:any=null):void
		{
			if(this.dataEvent&&this.dataEvent[type]==null){
				listener["this"]=thisObj
				this.dataEvent[type]=listener;
			}
		}
		/**删除事件*/
		public removeEvent(type:string, listener:Function):void
		{
			if(this.dataEvent&&this.dataEvent[type]){
				delete this.dataEvent[type];
			}
		}
		/**把自己从父级删除*/
		public removeFromParent(value:Boolean=false):void
		{
			var _parent:DisplayObjectContainer=this.parent as DisplayObjectContainer;
			if(value)		this.dispose();
			if(_parent&&_parent.contains(this))		_parent.removeChild(this);
			_parent=null;
		}
		/**删除所有的*/
		public removeChildAll(dispose:Boolean=false):void
		{
			while(this.numChildren>0){
				this.removeChildIndex(0, dispose);
			}
		}
		/**删除index层的*/
		public removeChildIndex(index:number, dispose:Boolean):void
		{
			if (index >= 0 || index < this.numChildren){ 
				var basicContent:SunContainer = this.getChildAt(index) as SunContainer;
				if(basicContent instanceof SunContainer){
					basicContent.removeFromParent(dispose);
				}else{
					var display:DisplayObject=this.getChildAt(index) as DisplayObject;
					if(display.parent)	display.parent.removeChild(display);
				}
				
			}
		}
		/**销毁*/
		public dispose():void
		{
			this.removeChildAll(true);
			this.dataEvent=null;
			this.stageWidth=null;
			this.stageHeight=null;
		}
    }
	
    /**
	 * ...
	 * 默认参数x轴,y轴,w宽,h高,r半径,c颜色,ew圆角宽,eh圆家高
	 * @author vinson
	 */
    export class SunUI
	{
        /**得到随机色*/
		public static get randomColor():number{
			return Math.random()*0XFFFFFF;
		}
		/**得到矩形框*/
		public static getLineRect(w:number,h:number,c:number=0,s:number=1,x:number=0,y:number=0):Sprite
		{
			var node:Sprite=new Sprite()
			node.graphics.lineStyle(s,c)
			node.graphics.drawRect(x,y,w,h);
			node.graphics.endFill();
			return node;
		}
		/**得到圆形框*/
		public static getLineCircle(r:number,c:number=0,s:number=1,x:number=0,y:number=0):Sprite
		{
			var node:Sprite=new Sprite();
			node.graphics.lineStyle(s,c)
			node.graphics.drawCircle(x,y,r);
			node.graphics.endFill();
			return node;
		}
		/**得到渐变矩形 a为角度偏移率0,0.5,1,2分别为四个正方向*/
		public static getMatrixRect(w:number,h:number,c1:number=0,c2:number=0,a:number=0):Sprite
		{
			var node = new Sprite();
			var matrix = new egret.Matrix();
			matrix.createGradientBox(w, h, Math.PI * a, 0, 0); 
			node.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
			node.graphics.drawRect(0, 0, w, h);
			node.graphics.endFill();
			return node;
		}
		/**得到矩形和一个X*/
		public static getRectAndX(w:number,h:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=this.getRect(w,h,c,x,y)
			s.addChild(this.getX(w,h,c,1,x,y));
			return s;
		}
		/**得到矩形和一个X*/
		public static getX(w:number,h:number,c:number=0,s:number=1,x:number=0,y:number=0):Sprite
		{
			var container:Sprite=new Sprite;
			var l1:Sprite=new Sprite;
			l1.graphics.lineStyle(s,c);
			l1.graphics.moveTo(0,0);
			l1.graphics.lineTo(w,h);
			var l2:Sprite=new Sprite;
			l2.graphics.lineStyle(s,c);
			l2.graphics.moveTo(w,0);
			l2.graphics.lineTo(0,h);
			container.addChild(l1);
			container.addChild(l2);
			return container;
		}
		/**得到矩形 带上透明度 a:透明度，0到1之间的小数*/
		public static getRect(w:number,h:number,c:number=0, a:number=1,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite()
			s.graphics.beginFill(c, a);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
			return s;
		}
		/**得到圆角矩形 带上透明度*/ /**c:填充色，例如：0XFFFFFF；ew：圆角宽度，单位px;eh：（可选）如果未指定值，则默认值与为ew参数提供的值相匹配；a:透明度，0到1之间的小数；*/
		public static getRoundRect(w:number,h:number,c:number=0, ew:number=5,eh:number=5, a:number=1,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite()
			s.graphics.beginFill(c, a);
			s.graphics.drawRoundRect(x,y,w,h,ew,eh);
			s.graphics.endFill();
			return s;
		}

		/**得到环形 angle:角度值，r:半径，c:背景色， a:透明度，0到1之间的小数，x y：圆心位置*/
		public static getRing(angle:number,r:number,c:number=0, a:number=1,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite();
			s.graphics.lineStyle(15, c, a);
        	s.graphics.drawArc(x, y, r, -Math.PI/2, angle * Math.PI / 180 - Math.PI/2, false);//从-90度方向开始画圆
        	s.graphics.endFill();
			return s;
		}
		/**得到圆形 带上透明度 a:透明度，0到1之间的小数*/
		public static getCircle(r:number,c:number=0, a:number=1,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite();
			s.graphics.beginFill(c, a);
			s.graphics.drawCircle(x,y,r);
			s.graphics.endFill();
			return s;
		}
		/**得到多边形,side边数,rotation角度,a 透明度*/
		public static getPolygon(side:number=3,r:number=10,c:number=0,rotation:number=0, a:number=1):Sprite
		{
			var s:Sprite = new Sprite;
			s.rotation=rotation;
			s.graphics.beginFill(c,a);
			for (var i:number =0; i <=side; i++) {
				var lineX:number =  Math.cos((i * (360 / side) * Math.PI / 180)) * r;
				var lineY:number =  Math.sin((i * (360 / side) * Math.PI / 180)) * r;
				if (i == 0) s.graphics.moveTo(lineX,lineY);
				else		s.graphics.lineTo(lineX, lineY);
				
			}
			s.graphics.endFill();
			return s;
		}
		/**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
		public static getArrowRoundRect(w:number,h:number,rc:number,pc:number=0,rotation:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,rc));
			var p:Sprite=this.getPolygon(3,w/3,pc,30+rotation);
			p.x=s.width>>1;p.y=s.height>>1;
			s.addChild(p);
			return s;
		}
		/**得到滚动条的bar*/
		public static getScrollLineBar(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			var _h:number=h/3;
			for(var i:number=0;i<3;i++){
				var r:Sprite=this.getRect(w,1,c,0,i*_h);
				s.addChild(r);
			}
			return s;
		}
		/**得到圆角矩形-加*/
		public static getAddRoundRect(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r1:Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			var r2:Sprite=this.getRect(2,h/2,0,w/2-1,h/4);
			s.addChild(r1);
			s.addChild(r2);
			return s;
		}
		/**得到圆角矩形-减*/
		public static getRemoveRoundRect(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r:Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			s.addChild(r);
			return s;
		}
		/**得到带文字的圆角方形*/
		public static getRoundRectText(w:number,h:number,c:number,str:string="click"):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var text:TextField=new TextField;
			text.name="text";
			text.text=str;
			text.x=(s.width-text.width)>>1;
			text.y=(s.height-text.height)>>1;
			s.addChild(text);
			return s;
		}
		/**得到矩形-switchButton bc背景颜色，gc钩选的颜色,type为0是没有钩，为1是有钩*/
		public static getSwitch(bc:number=0XFFFFFF,gc:number=0,type:number=0):Sprite
		{
			var node:Sprite=sun.SunUI.getRoundRect(90,40,bc,50,50);
			node.addChild(sun.SunUI.getCircle(17,gc,1,type==0?21:70,20));
			return node;
		} 
		/**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
		public static getCheckBoxRect(bc:number=0XFFFFFF,gc:number=0,type:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			//s.addChild(this.getRect(40,40,bc));
			s.addChild(this.getRoundRect(32,32,bc,4,4));
			if(type==1){
				var r:Sprite=new Sprite();
				r.graphics.beginFill(gc);
				r.graphics.moveTo(4,18);
				r.graphics.lineTo(12,26);r.graphics.lineTo(28,8);r.graphics.lineTo(26,6);r.graphics.lineTo(12,22);
				r.graphics.lineTo(6,16);r.graphics.lineTo(4,18);
				// r.graphics.lineTo(20,36);r.graphics.lineTo(44,8);r.graphics.lineTo(36,0);r.graphics.lineTo(20,18);
				// r.graphics.lineTo(12,8);r.graphics.lineTo(0,20);
				s.addChild(r);
			}
			return s;
		}
		/**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
		public static getRadioCircle(bc:number=0XFFFFFF,gc:number=0,type:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getCircle(16,bc,1,16,16));
			s.graphics.lineStyle(1,0);
			if(type==1){
				var r:Sprite=this.getCircle(6,gc,1,16,16)
				s.addChild(r);
			}
			return s;
		}
		/**得到矩形-网格
		 * rect.x是x轴数量
		 * rect.y是y轴数量
		 * rect.width是网格宽
		 * rect.height是网格高
		 * lc网格线颜色
		 * */
		public static getGridding(rect:Rectangle,c:number=0):Sprite
		{
			var s:Sprite=new Sprite;
			s.graphics.lineStyle(0.1,c);
			var disx:number=rect.width/rect.x;
			var disy:number=rect.height/rect.y;
			for(var i:number=0;i<rect.x;i++){
				s.graphics.moveTo(0,i*disy);
				s.graphics.lineTo(rect.width,i*disy);
			}
			for(i=0;i<rect.y;i++){
				s.graphics.moveTo(i*disx,0);
				s.graphics.lineTo(i*disx,rect.height);
			}
			return s;
		}
		/***得到爱心 */
		public static getHeart(r:number=15,c:number=0XFF0000):Sprite
		{
			var s:Sprite=new Sprite;
			s.graphics.beginFill(c);
			s.graphics.moveTo(0,0);
			s.graphics.lineTo(0,-r*2)
			s.graphics.cubicCurveTo(r,-r*2.5,r*2,-r*1.5,0,0);  
			s.graphics.moveTo(0,0);
			s.graphics.lineTo(0,-r*2)
			s.graphics.cubicCurveTo(-r,-r*2.5,-r*2,-r*1.5,0,0);  	
			s.graphics.endFill();
			s.anchorOffsetX=-s.width/2;
			s.anchorOffsetY=-s.height;
			return s;
		}
    }

    /** 基础视图 */
	export class BasicView extends sun.SunContainer
	{
		/** 创建文本（新建精灵绘制） */
		protected createText(x:number=0,y:number=0,s:string=""):TextField
		{
			var text:TextField=(new Label).textField;
			text.x=x;text.y=y;text.text=s;
			this.addChild(text);
			return text;
		}
		/** 绘制矩形（新建精灵绘制） */
		protected createRect(w:number,h:number,c:number=0,a:number=1,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite = SunUI.getRect(w,h,c,a,x,y);
			this.addChild(sprite);
			return sprite;
		}
		/** 绘制圆形（新建精灵绘制） */
		protected createCircle(r:number,c:number=0,a:number=1,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite= SunUI.getCircle(r,c,a,x,y);
			this.addChild(sprite);
			return sprite;
		}
		/** 绘制矩形(自身绘制) */
		protected createRectBySprite(s:Sprite,w:number,h:number,c:number=0,x:number=0,y:number=0):void
		{
			s.graphics.clear();
			s.graphics.beginFill(c);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
		}
		/**创建纯色背景 @param(背景颜色，透明度) */
		protected createBackground(c:number=0,a:number=1):Sprite
		{
			var s:Sprite = this.createRect(this.stageWidth,this.stageHeight,c);
			s.alpha=a;s.touchEnabled=true;//用于阻止下层点击事件
			return s;
		}
		/**创建渐变色背景 @param(direction：渐变方向 direction=0 从左到右；Math.PI/2：从上到下；Math.PI：从右到左；-Math.PI/2:从下到上；c1,,c2 从c1渐变到c2;gradientType：渐变类型) */
		protected createBgGradientFill(direction:number=Math.PI/2,c1:number=0X017AC3,c2:number=0XDDDDDD,gradientType:string=egret.GradientType.LINEAR):Sprite
		{
			//注意：egret自带的渐变背景函数一般不建议使用，这里仅供学习，可以采用ps工具实现渐变素材渲染起来会很方便
			var w:number=this.stageWidth;
			var h:number=this.stageHeight;
			var matrix:egret.Matrix = new egret.Matrix();
			matrix.createGradientBox(w,h,direction);//渐变方向direction=0 从左到右；Math.PI/2：从上到下；Math.PI：从右到左；-Math.PI/2:从下到上
			var sprite:Sprite=new Sprite;
			//渐变类型 、颜色、 透明度、所占比例(0~255)、方向
			sprite.graphics.beginGradientFill(gradientType,[c1,c2],[1,1],[0,255],matrix);
			sprite.graphics.drawRect(0,0,w,h);
			this.addChild(sprite);
			return sprite;
		}
	}

	/**基础组件-基础面板*/
	export class BasicBar extends BasicView implements IItem,ILayout
	{
		protected items:any[]=[];
		protected index:number=0;
		/** 添加一个元素 */
		public addItem(item:DisplayObject):void
		{
			this.items.push(item);
		}
		/** 删除一个元素 */
		public removeItem(item:DisplayObject):void
		{
			var index:number=this.items.indexOf(item);//查找到对象所在索引下标
			if(index>=0) this.items.splice(index,1);//@param(开始索引，删除个数)
		}
		/** 根据索引值判断元素是否存在 */
		public hasItem(index:number):boolean
		{
			return this.items.length>0&&(index>=0&&index<this.items.length);
		}
		/** 根据索引值获取元素 */
		public getItem(index:number):DisplayObject
		{
			return this.items[index];
		}
		/** 获取下一个元素 */
		public getNextItem():DisplayObject
		{
			return this.items[this.index++]; 
		}
		/** 获取一个元素的索引值 */
		public getIndexByItem(item:DisplayObject):number{
			return this.items.indexOf(item);
		}
		/** 索引值重置为0 */
		public reset():void
		{
			this.index=0;
		}
		/** 修改，暂无具体方法 */
		public update():void
		{

		}
		/**布局 type类型为横或竖，interval为对象间的间隔*/
		public layout(type:string=Const.VERTICAL,interval:number=10):void
		{
			for(var i:number=0;i<this.items.length;i++){
				var item:DisplayObject=this.items[i];
				if(type==Const.VERTICAL) 
					item.y=(item.height+interval)*i;
				else					 
					item.x=(item.width+interval)*i;
			}
		}
		/**销毁*/
		public dispose():void
		{
			this.reset();
			while(this.hasItem(this.index)){
				var item:DisplayObject=this.getItem(this.index) as DisplayObject;
				this.removeItem(item);
				if(item instanceof SunContainer){
					item.removeFromParent(true);
				}
			}
		}
	}

	/**面板 */
	export class PanelBar extends BasicBar
	{
		protected titleBg:Sprite;//文本精灵，相当于文本画布
		protected title:TextField;
		protected containerBg:Sprite;
		protected container:SunContainer;//容器
		protected containerMask:Sprite;//容器遮罩
		protected pWidth:number;//面板宽度
		protected pHeight:number;//面板高度
		protected titleHeight:number=60;//标题高度
		/** @param(面板宽度，面板高度) */
		public constructor(pWidth:number=0,pHeight:number=0)
        {
			super();
			//初始化
			this.pWidth=pWidth;
			this.pHeight=pWidth;
			this.titleBg=new Sprite;
			this.containerBg=new Sprite;
			this.title=(new Label).textField;
			this.container=new SunContainer();
        }
		/**加载到舞台之后调用 */
        protected render():void
        {
			//设置舞台宽高
			if(this.pWidth==0&&this.pHeight==0){
				super.render();
			}else{
				this.stageWidth=this.pWidth;
				this.stageHeight=this.pHeight;
			}
			//创建标题背景
			this.createRectBySprite(this.titleBg,this.stageWidth,this.titleHeight,sun.Color.titleBackground);
			//创建白色背景
			this.createRectBySprite(this.containerBg,this.stageWidth,this.stageHeight-this.titleHeight,sun.Color.white,0,this.titleHeight);
			this.addChild(this.titleBg);
			this.addChild(this.containerBg);
			//设置标题位置
			this.title.anchorOffsetX=this.title.textWidth>>1;
			this.title.anchorOffsetY=this.title.textHeight>>1;
			this.title.x=this.stageWidth>>1;
			this.title.y=this.titleHeight>>1;
			this.addChild(this.title);
			//容器与遮罩
			this.container.y=this.titleHeight;
			this.addChild(this.container);
			this.containerMask=this.createRect(this.stageWidth,this.stageHeight-this.titleHeight,sun.Color.white,1,0,this.titleHeight);
			this.container.mask=this.containerMask;
			this.touchEnabled=true;//为了阻挡面板下所有事件
			this.dispEvent(SunEvent.RENDER_COMPLETE);
        }
		/** 给容器添加元素 */
		public addItem(item:DisplayObject,x:number=0,y:number=0):void
		{
			super.addItem(item);
			if(x!=0)item.x=x;if(y!=0)item.y=y;
			this.container.addChild(item)
		}
		/** 从容器中移除元素 */
		public removeItem(item:DisplayObject):void
		{
			super.removeItem(item);
			if(this.container.contains(item)) this.container.removeChild(item);
		}
		/** 设置文本内容 */
		set label(value:string){
			this.title.text=value;
		}
		/** 获取文本内容 */
		get label():string{
			return this.title.text;
		}
		/** 设置标题背景色 */
		set colorTop(c:number){
			var w:number=this.titleBg.width,h:number=this.titleBg.height;
			this.createRectBySprite(this.titleBg,w,h,c);
		}
		/** 设置容器背景色 */
		set colorBottom(c:number){
			var w:number=this.containerBg.width,h:number=this.containerBg.height;
			this.createRectBySprite(this.containerBg,w,h,c,0,this.titleHeight);
		}
		/** 获取整个屏幕矩形 */
		get windowRect():Rectangle
		{
			var rect:Rectangle=new Rectangle(0,0,this.stageWidth,this.stageHeight);
			return rect;
		}
		/** 获取标题高度 */
		get topHeight():number{
			return this.titleHeight;
		}
		/** 移除容器中所有精灵（元素） */
		public removeAll():void
		{
			this.container.dispose();
		}
	}

	/** 多个面板管理 */
	export class PanelMoreManager extends BasicBar implements IOnoff
	{
		/** 单选按钮 */
		protected radioButton:RadioButtonBar = new RadioButtonBar();
		/** 容器 */
		protected container:SunContainer;
		/** 面板宽度，面板高度 */
		protected pWidth:number;
		protected pHeight:number;
		/** 当前页 */
		protected currentPage:number=0;
		protected posStartX:number=0;
		protected moveItems:PanelBar[]=[];
		protected panelWidth:number;
		public constructor()
        {
			super();
			this.container=new SunContainer();
			this.addChild(this.container);
			this.radioButton.isAutoLayout=true;
		}
		/** 开启监听 */
		public open():void
		{
			this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
		}
		/** 关闭监听 */
		public close():void
		{
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
		}
		/** 更新面板显示内容 */
		public update():void
		{
			//移除所有内容
			this.container.removeChildren();
			var itemW:number;
			var itemH:number;
			//设置每一个面板的宽高
			if(this.items.length>0){
				var item:PanelBar=this.items[0];
				this.container.addChild(item); 
				itemW=item.windowRect.width;
				itemH=item.windowRect.height;
				this.panelWidth=itemW;
			}
			//绘制面板的走马灯圆点
			var len:number=this.items.length;
			for(var i:number=0;i<len;i++){
				var btn:BasicButton=new BasicButton(sun.Skin.pointNormal,sun.Skin.pointDown);
				this.radioButton.addItem(btn);
			}
			//默认选中第一个
			btn=this.radioButton.getItem(0) as BasicButton;
			btn.setSkinDown();
			this.radioButton.x=(itemW-len*22)>>1;
			this.radioButton.y=itemH-20;
			this.addChild(this.radioButton);
		}
		protected render():void
		{
			this.update();
			if(this.items.length>1){
				this.open();
			}
        }
        protected onTouch(e: egret.TouchEvent){
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
					this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.posStartX=e.stageX;
					this.dispEvent(SunEvent.START)
                    break;
				case egret.TouchEvent.TOUCH_MOVE:
					this.moveDo(e.stageX)
				break;
                case egret.TouchEvent.TOUCH_END:
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.moveEnd(e.stageX);
                    break;
            }
        }
		protected moveDo(x:number):void
		{
			var disx:number=x-this.posStartX;
			if(Math.abs(disx)>20){
				if(this.moveItems.length==0){
					var item:PanelBar=this.items[this.currentPage];
					var width:number=this.panelWidth;
					this.moveItems.push(item);
					if(this.currentPage==0){
						item=this.items[this.currentPage+1];
						this.container.addChild(item);
						item.x=width;
						this.moveItems.push(item);
					}else if(this.currentPage==this.items.length-1){
						item=this.items[this.currentPage-1];
						this.container.addChild(item);
						item.x=-width;
						this.moveItems.push(item);
					}else{
						item=this.items[this.currentPage-1];
						this.container.addChild(item);
						item.x=-width;
						this.moveItems.push(item);
						item=this.items[this.currentPage+1];
						this.container.addChild(item);
						item.x=width;
						this.moveItems.push(item);
					}
				}
				var boo1:boolean=(this.currentPage==0&&disx>0);
				var boo2:boolean=((this.currentPage==this.items.length-1)&&disx<0)
				if(!boo1&&!boo2){
					this.container.x=disx;
				}
			}
		}
		protected moveEnd(x:number):void
		{
			if(this.container.x==0){
				this.backCall(0);
				return;
			}
			var disx:number=x-this.posStartX;
			var tw:egret.Tween=egret.Tween.get(this.container);
			var currX=this.panelWidth;
			var turnDis:number=this.panelWidth>>2;
			//至少滑动窗口宽的四分之一才可以算翻页
			if(Math.abs(disx)>turnDis){
				currX=this.panelWidth;
				currX*=disx>0?1:-1;
			}else{
				disx=0;
				currX=0;
			}
			var time:number=200;
			tw.to({x:currX},time);
			tw.call(this.backCall,this,[disx]);
		}
		/**结束翻页后的回调函数 */
		protected backCall(disx:number):void
		{
			if(disx>0){
				this.currentPage--;
				this.currentPage=this.currentPage<0?0:this.currentPage;
			}else if(disx<0){
				this.currentPage++;
				this.currentPage=this.currentPage==this.items.length?this.items.length-1:this.currentPage;
			}
			this.container.removeChildren();
			var item:PanelBar=this.items[this.currentPage];
			item.x=0;
			this.container.addChild(item);
			this.radioButton.selectIndex=this.currentPage;
			this.moveItems.length=0;
			this.container.x=0;
			this.dispEvent(SunEvent.OVER)
		}
		/**销毁*/
		public dispose():void
		{
			super.dispose();
			this.close();
		}
	}
    /** 游戏视图 */
	export class GameView extends sun.BasicView
	{
		protected isPlay:boolean;
		protected play():void
		{
			this.stop();
			this.isPlay=true;
			egret.startTick(this.loop, this);
		}
		protected stop():void
		{
			this.isPlay=false;
			egret.stopTick(this.loop, this);
		}
		protected loop(n:number):boolean
		{
			traceSimple(n);
			return true;
		}
	}
    /**游戏加载模版 */
	export class GameLoad extends sun.GameView
	{
		private txtLoad:TextField;
		private txtName:TextField;
		private progress:Sprite;
		private txtLoadPos:Point;
		private color:number=0XF9AB03;
		private proWidth:number;
		private airFan:Sprite;
		protected render():void
		{
			super.render();
			this.createBgGradientFill();
			var container:Sprite=new Sprite;
			this.addChild(container);
			var sw:number=this.stageWidth;
			var sh:number=this.stageHeight;
			var w:number=80;
			var loadbg:Sprite = SunUI.getRoundRect(sw-100,w,0XFCE59D,100,100);
			loadbg.x=(sw-loadbg.width)>>1;
			loadbg.y=(sh-loadbg.height)>>1;
			container.addChild(loadbg);

			//--------
			var progress:Sprite = SunUI.getRect(sw-120,w-10,this.color);
			progress.x=(sw-progress.width)>>1;
			progress.y=(sh-progress.height)>>1;
			container.addChild(progress);
			this.proWidth=progress.width;

			var mask:Sprite = SunUI.getRoundRect(sw-120,w-10,0,100,100);
			mask.x=(sw-mask.width)>>1;
			mask.y=(sh-mask.height)>>1;
			progress.mask=mask;
			this.progress=progress;
			
			//--------
			var txtbg:SunDisplayObject=new SunDisplayObject();
			txtbg.type=sun.Const.SHAPE_CIRCLE
            txtbg.data={r:w/2,c:0XE18E0D};
            txtbg.setBackground(0XFFFFFF,5);
            this.addChild(txtbg);
			txtbg.x=loadbg.x+loadbg.width-w/2;
			txtbg.y=loadbg.y+w/2;
			this.txtLoadPos=new Point(txtbg.x,txtbg.y);
			
			var txtExp:TextField=this.createText(0,0,"");
			txtExp.size=40;
			txtExp.textColor=0xB07300;
			this.txtLoad=txtExp;
			//--------
			var txtTip:TextField=this.createText(0,0,"游戏加载");
			txtTip.size=40;
			txtTip.x=(sw-txtTip.width)>>1;
			txtTip.y=loadbg.y-txtTip.height*2;
			
			var txtName:TextField=this.createText(0,0,"");
			txtName.size=40;
			this.txtName=txtName;
			this.updateName("敬请期待");
			//--------
			this.createAirFan();
			this.airFan.x=txtbg.x;
			this.airFan.y=txtbg.y;

			this.createLogo();
			
			this.update(0);
			this.play();
		}
        protected loop(n:number):boolean
		{
			this.airFan.rotation+=3;
			return true;
		}
		private createAirFan():void
		{
			this.airFan=new Sprite;
			this.addChild(this.airFan);
			for (var i:number=0; i<4; i++)  
			{  
				var shape:Sprite=new Sprite();  
				this.airFan.addChild(shape);  
				shape.graphics.lineStyle(0);  
				shape.graphics.beginFill(0xFFFFFF);  
				shape.graphics.cubicCurveTo(-29,-28,29,-28,0,0);  
				shape.graphics.endFill();  
				shape.rotation = i * 90;  
			}  
		}
		protected createLogo():void
		{
			var sw:number=this.stageWidth;
			var sh:number=this.stageHeight;
			var logo:SunDisplayObject=new SunDisplayObject();
			logo.type=sun.Const.SHAPE_CIRCLE;
            logo.data={r:50,c:0XE18E0D};
			logo.setBackground(0XFFFFFF,2);
			logo.x=sw>>1;
			logo.y=logo.height;
			this.addChild(logo);

			var txtName:TextField=this.createText(0,0,"ZL");
			txtName.size=40;
			txtName.x=logo.x-(txtName.width>>1);
			txtName.y=logo.y-(txtName.height>>1)-15;

			txtName=this.createText(0,0,"game");
			txtName.size=30;
			txtName.x=logo.x-(txtName.width>>1);
			txtName.y=logo.y-(txtName.height>>1)+15;

			this.addChild(sun.SunUI.getHeart(15,0XFFFFFF))
			txtName=this.createText(0,0,"子乐游戏");
			txtName.size=40;
			txtName.textColor=0XE09F21;
			txtName.x=sw-txtName.width-10;
			txtName.y=sh-txtName.height-10;

		}
		/**创建渐变色背景 */
		protected createBgGradientFill(c1:number=0XFDD559,c2:number=0XE09F21):Sprite
		{
			var w:number=this.stageWidth;
			var h:number=this.stageHeight;
			var matrix:egret.Matrix = new egret.Matrix();
			matrix.createGradientBox(w*2,h*2,Math.PI/2);
			var sprite:Sprite=new Sprite;
			sprite.graphics.beginGradientFill(egret.GradientType.RADIAL,[c1,c2],[1,1],[0,255],matrix);
			sprite.graphics.drawRect(0,0,w,h);
			this.addChild(sprite);
			return sprite;
		}
		public updateName(name:string):void
		{
			this.txtName.text=name;
			this.txtName.x=(this.stageWidth-this.txtName.width)>>1;
			this.txtName.y=this.stageHeight/2+this.txtName.height*2;
		}
		public update(value:number):void
		{
			if(value>1) return;
			if(value>0.99) this.stop();
			this.progress.scaleX=value;
			var txtExp:TextField=this.txtLoad;
			var pos:Point=this.txtLoadPos;
			txtExp.text=Math.ceil(value*100)+"%";
			txtExp.x=(this.stageWidth-txtExp.width)>>1;
			txtExp.y=pos.y-txtExp.height/2;
			var exp:Sprite=SunUI.getCircle(5+Math.random()*5,this.color,pos.x,pos.y);
			exp.y=10-Math.random()*20;
			this.addChildAt(exp,2);
			Tween.get(exp).to({x:-this.proWidth,alpha:0},1000);
		}
    }
	/** 进度条，继承SunContainer容器 */
	export class ProgressBar extends SunContainer
	{
		/*** 皮肤背景 */
		protected skinBg:DisplayObject;
		/*** 实际值皮肤 */
		protected skinValue:DisplayObject;
		protected text:TextField;
		protected _value:number=0;
		/*** 参数为显示对象 @param(背景皮肤，实际值皮肤,是否遮罩) */
		public constructor(bg:DisplayObject=null,value:DisplayObject=null)
        {
			super();
			this.setSkin(bg,value);
			this.addChild(this.skinBg);
			this.addChild(this.skinValue);
			this.text=(new Label).textField;
			this.addChild(this.text);
		}
		/*** 设置皮肤 */
		protected setSkin(bg:DisplayObject=null,value:DisplayObject=null)
        {
			this.skinBg=bg||Skin.progressBackground;
			this.skinValue=value||Skin.progressValue;
		}
		/**设置实际值：值只能是0－1之间 */
		set value(v:number)
		{
			v=v<0?0:v>1?1:v;//v小于0取0，否则继续判断v>1,大于1则取1，否则取v
			this._value=v;
			this.skinValue.scaleX=v;
		}
		/*** 获取实际值 */
		get value():number
		{
			return this._value;
		}
		/** 设置文本字体大小 */
		set labelSize(value:number)
		{
			this.text.size=value;
		}
		/**设置角度(环形图使用) */
		public setRingAngle(angle:number,x:number=0,y:number=0,r:number=100,c:number=0, a:number=1)
		{
			var m = sun.SunUI.getRing(angle,r,c,a,x,y);
			if(this&&this.contains(m))
				this.removeChild(m);
			this.addChild(m);
			this.skinValue.mask = m;
		}

		/*** 显示实际值：d表示方向 */
		public showText(v:string,d:string=Const.RIGHT,x:number=0,y:number=0):void
		{
			this.text.text=v;
			if(d == Const.LEFT){
				this.text.x = this.skinBg.x - 10;
				this.text.y = this.skinBg.y;
			}
			else if(d == Const.TOP){
				this.text.x = (this.skinBg.width>>1) - 15;
				this.text.y = -this.skinBg.height - 5;
			}
			else if(d == Const.BOTTOM){
				this.text.x = (this.skinBg.width>>1) - 15;
				this.text.y = this.skinBg.height + 5;
			}
			else if(d == Const.CENTER){
				this.text.x = (this.skinBg.width>>1) - 15;
				this.text.y = (this.skinBg.height>>1) - 5;
			}
			else if(d == Const.RIGHT){
				this.text.x = this.skinBg.width + 18;
				this.text.y = (this.skinBg.height-this.text.height)>>1;
			}else{
				this.text.x=x;this.text.y=y;
			}
		}
	}
	/*** 滑动器，继承进度条ProgressBar，需要实现布局接口ILayout的函数 */
	export class SliderBar extends ProgressBar implements ILayout
	{
		protected skinBar:DisplayObject;
		protected type:string;
		/** @param(滑动器背景,滑动值，滑动器圆圈) */
		public constructor(bg:DisplayObject=null,value:DisplayObject=null,bar:DisplayObject=null)
        {
			super(bg,value);
			//滑动器：圆圈
			this.skinBar=bar||Skin.sliderBar;
			this.addChild(this.skinBar);
			//给滑动器绑定事件
			this.skinBar.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			this.skinBar.touchEnabled=true;
			//滑动器布局
			this.layout();
			this.value=1;
		}
		/** 设置皮肤 */
		protected setSkin(bg:DisplayObject=null,value:DisplayObject=null)
        {
			this.skinBg=bg||Skin.sliderBackground;
			this.skinValue=value||Skin.sliderValue;
		}
		/** 触摸事件 */
		protected onTouch(e:egret.TouchEvent):void
		{
			switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
					this.skinBar.scaleX = this.skinBar.scaleY = 1.2;
					this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
					this.dispEvent(SunEvent.START);
                    break;
				case egret.TouchEvent.TOUCH_MOVE:
					this.skinBar.scaleX = this.skinBar.scaleY = 1.2;
					this.moveDo(e.stageX,e.stageY);
					this.dispEvent(SunEvent.MOVE);
				break;
                case egret.TouchEvent.TOUCH_END:
					this.skinBar.scaleX = this.skinBar.scaleY = 1;
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
					this.dispEvent(SunEvent.OVER);
                    break;
            }
		}
		/** 设置滑动值 */
		protected moveDo(x:number,y:number):void
		{
			var p:Point=this.globalToLocal(x,y);
			var v:number;
			if(this.type==Const.HORIZONTAL)	v=p.x/this.skinValue.width;
			else							v=-p.y/this.skinValue.width;
			this.value=v;
		}
		/**值只能是0－1之间 */
		set value(v:number)
		{
			v=v<0?0:v>1?1:v;
			this._value=v;
			this.skinValue.scaleX=v;
			if(this.type==Const.HORIZONTAL)	this.skinBar.x=this.skinValue.width*v;
			else							this.skinBar.y=-this.skinValue.width*v;
		}
		get value():number
		{//get 方法竟然是不能继承的，这个得注意了。
			return this._value;
		}
		/**横竖版布局，默认是横版布局 */
		public layout(type:string=Const.HORIZONTAL,interval:number=0):void
		{
			var angle:number;//旋转角度
			this.type=type
			if(type==Const.VERTICAL){
				angle=-90;
				this.skinBar.x=this.skinValue.height>>1;
			}else{
				angle=0;
				this.skinBar.y=this.skinValue.height>>1;
			}
			this.skinBg.rotation=angle;//滑动器皮肤方向
			this.skinValue.rotation=angle;//滑动器实际皮肤方向
		}
	}
	/**提示警告框 手动关闭*/
	export class AlertBar extends BasicBar
	{
		/** 显示对象 */
		protected bg:SunDisplayObject;
		/** 背景颜色 */
		protected bgColor:number;
		/** 提示文本 */
		protected text:TextField;
		/** @param(提示内容) */
		public constructor(title:string="提示或警告")
        {
			super();
			this.bgColor=0xEFEBE8;//灰色背景
			this.text=(new Label).textField;//初始化文本对象
			this.text.textColor = 0x101010;
			this.text.text=title;//设置文本内容
		}
		/**加载到舞台之后调用 */
        protected render():void{
			super.render();
			this.initView();
		}
		/** 创建背景  */
		protected initView():void{
			//创建纯色背景
			var node:Sprite=this.createBackground(0,0.3);
			//文字宽、高
			var tw:number=this.text.width;
			var th:number=this.text.height;
			//在文字宽高基础上 加宽加高
			var w:number=tw+80;
			var h:number=th+120;
			//设置位置：正中间
			var x:number=(this.stageWidth-w)>>1;
			var y:number=(this.stageHeight-h)>>1;
			//设置背景显示
			this.bg=new SunDisplayObject();
			this.bg.type=Const.SHAPE_RECT_ROUND;
            this.bg.data={w:w,h:h,c:this.bgColor,ew:10,eh:10,a:1};//绘制一个灰色矩形
            //this.bg.setBackground(0,2);
			this.bg.x=x;this.bg.y=y;
			this.addChild(this.bg);

			//画线
			var shape:Sprite=new Sprite()
			shape.graphics.lineStyle(2, 0XE1E3E6);//灰色背景
			shape.graphics.moveTo(w, this.text.y+th+40);
        	shape.graphics.lineTo(0, this.text.y+th+40);	
			this.bg.addChild(shape);
			//确定按钮
			var btn:BasicButton=new BasicButton();
			btn.label="确 定";
			this.bg.addChild(btn);
			btn.x=(w-btn.width)>>1;
			btn.y=this.text.y+th+60;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			//设置内容显示位置
			this.text.x=x+((w-tw)>>1);
			this.text.y=y+20;
			this.addChild(this.text);
		}
		/** 绑定事件 */
		private onClick(e:egret.TouchEvent):void
		{
			this.removeFromParent(true);
			this.dispEvent(SunEvent.CLOSE);
		}
		/**设置显示对象的颜色 */
		set color(value:number){
			this.bgColor=value;
			if(this.bg)this.bg.color=value;
		};
		/** 销毁 */
		public dispose():void
		{
			super.dispose();
			this.bg=null;
			this.bgColor=null;
			this.text=null;
		}
	}
	/**提示警告框 自动关闭*/
	export class AlertAutoBar extends AlertBar
	{
		/** 提示时长,单位：秒 */
		private time:number;
		/** @param(提示内容，提示时长) */
		public constructor(title:string="提示或警告",closeTime:number=3)
        {
			super(title);
			this.bgColor = 0x101010;//黑色
			this.text.textColor = 0xffffff;//白色字体
			this.time=closeTime;
		}
		protected initView():void{
			//文字宽、高
			var tw:number=this.text.width;
			var th:number=this.text.height;
			//在文字宽高基础上 加宽加高
			var w:number=tw+20;
			var h:number=th+20;
			//设置位置：正中间
			var x:number=(this.stageWidth-w)>>1;
			var y:number=(this.stageHeight-h)>>1;
			//设置背景显示
			this.bg=new SunDisplayObject();
			this.bg.type=Const.SHAPE_RECT_ROUND;
            this.bg.data={w:w,h:h,c:this.bgColor,ew:10,eh:10,a:0.4};
            //this.bg.setBackground(0,2);//不设置背景，看起来就是画边框
			this.bg.x=x;this.bg.y=y;
			this.addChild(this.bg);
			//设置内容显示位置
			this.text.x=x+((w-tw)>>1);
			this.text.y=y+((h-th)>>1);
			this.addChild(this.text);
			this.alpha=0;
			var ty=this.y-50;
			//动画效果
			Tween.get(this).to({alpha:1},500).wait(this.time*1000).to({alpha:0,y:ty},500).call(this.backCall,this);
		}
		/** 动画结束后回调事件 */
		private backCall():void
		{
			Tween.removeTweens(this);
			this.removeFromParent(true);
			this.time=null;
			this.dispEvent(SunEvent.CLOSE);
		}
		/** 销毁 */
		public dispose():void
		{
			super.dispose();
			Tween.removeTweens(this);
		}
	}
	/**提示警告框 滚动显示*/
	export class AlertRollBar extends AlertBar
	{
		/** 背景宽度 */
		private bgWidth:number;
		public constructor(title:string="提示或警告",bgWidth:number=200)
        {
			super(title);
			this.bgColor = 0x101010;//黑色
			this.text.textColor = 0xffffff;//白色字体
			this.bgWidth=bgWidth;
		}
		protected initView():void{
			//文字宽高
			var tw:number=this.text.width;//文字宽度
			var th:number=this.text.height;//文字高度
			//设置宽高
			var w:number=this.bgWidth;//背景宽度
			var h:number=th+20;//背景高度
			//设置背景显示位置
			var x:number=(this.stageWidth-w)>>1;//x位置
			var y:number=100;//y位置
			//设置背景显示
			this.bg=new SunDisplayObject();//背景
			this.bg.type=Const.SHAPE_RECT;//形状类型
            this.bg.data={w:w,h:h,c:this.bgColor,a:0.4};//画一个灰色矩形
			this.bg.x=x;this.bg.y=y;//设置位置
			this.addChild(this.bg);
			//设置背景遮罩效果
			var m:Sprite=SunUI.getRect(w,h,0,1,x,y);//画一个黑色遮罩
			this.addChild(m)
			this.bg.mask=m;

			//文字从最右端位置开始移动
			this.text.x=w;
			this.text.y=10;
			this.bg.addChild(this.text);
			var time:number=2000+this.text.text.length*100;
			var tx:number=-tw;
			//动画效果
			Tween.get(this.text).to({x:tx},time).call(this.backCall,this);
		}
		/** 动画结束后回调事件 */
		private backCall():void
		{
			Tween.removeTweens(this);
			Tween.removeTweens(this.text);
			this.removeFromParent(true);
			this.bgWidth=null;
			this.dispEvent(SunEvent.CLOSE);
		}
	}
	
	/** 提示管理器 */
	export class AlertManager
	{
		/**单例对象 */
		private static instance:AlertManager;
		/** 舞台 */
		private stage:Stage;
		/** 单例函数 */
		public static getIns():AlertManager{
			if(this.instance == null){
					this.instance = new AlertManager();
			}
			return this.instance;
		}
		/**请先调用初始化函数 */
		public init(stage:Stage):void
		{
			this.stage=stage;
		}
		/**提示后自动关闭 */
		public alertAuto(title:string="自动关闭的提示或警告",closeTime:number=3):AlertAutoBar
		{
			var a:AlertAutoBar
			if(this.stage){
				if(this.stage.getChildByName("AlertAutoBar")){
					a=this.stage.getChildByName("AlertAutoBar") as AlertAutoBar;
					a.removeFromParent(true);
				}
				a=new AlertAutoBar(title,closeTime);
				a.name="AlertAutoBar";
				this.stage.addChild(a);
			}else{
				trace("调用alertAuto时请先执行AlertManager的init初始化函数")
			}	
			return a;
		}
		public alert(title:string="手动关闭的提示或警告"):AlertBar
		{
			var a:AlertBar=new AlertBar(title);
			if(this.stage) this.stage.addChild(a);
			else	trace("调用alertAuto时请先执行AlertManager的init初始化函数")
			return a;
		}
		public alertRoll(title:string="提示或警告",bgWidth:number=200):AlertRollBar
		{
			var a:AlertRollBar=new AlertRollBar(title,bgWidth);
			if(this.stage) this.stage.addChild(a);
			else	trace("调用alertAuto时请先执行AlertManager的init初始化函数")
			return a;
		}
	}
	
     /** 日志管理器 */
    export class LogManager
	{
		private static instance:LogManager;//单例对象
		private txtSimple:TextField;
		private txtMessage:TextField;
        //单例函数
		public static getIns():LogManager{
			if(this.instance == null){
					this.instance = new LogManager();
			}
			return this.instance;
		}
		/**请先调用初始化函数 */
		public init(stage:Stage):void
		{
            //初始化两个文本
			var txt:TextField=(new Label).textField;
			txt.textAlign = egret.HorizontalAlign.LEFT;
			stage.addChild(txt);
			this.txtSimple=txt;

			var txt:TextField=(new Label).textField;
			txt.size=25;
			stage.addChild(txt);
			this.txtMessage=txt;
		}
		/**每次都覆盖上一次信息 */
		public debug(value:string):void
		{
			this.txtSimple.text=value;
		}
		/**每次都覆盖上一次信息 */
		public log(value:string):void
		{
			if(GameData.version==Const.VER_DEBUG) 
                this.txtSimple.text=value;
		}
		/**显示所有信息 */
		public logMessage(value:string):void
		{
			if(GameData.version==Const.VER_DEBUG)
                this.txtMessage.appendText(value+"\n");
		}
		public setLogColor(color:number):void
		{
			this.txtSimple.textColor=color;
		}
		public setLogMessageColor(color:number):void
		{
			this.txtMessage.textColor=color;
		}
	}
	export class TipsManager
	{
		private static instance:TipsManager;
		private stage:Stage;
		private tipsView:BasicTips;
		public bgName:string="tips_png";//TIPS的背景图片
		public static getIns():TipsManager{
			if(this.instance == null){
					this.instance = new TipsManager();
			}
			return this.instance;
		}
		/**请先调用初始化函数 */
		public init(stage:Stage):void
		{
			this.stage=stage;
		}
		public simpleTips(value:string,pos:Point):void
		{
			if(this.tipsView==null){
				this.tipsView=new sun.BasicTips(this.bgName);
        		this.tipsView.setValue(value)
        		this.stage.addChild(this.tipsView);
				this.setPosition(pos);
				this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);
			}
		}
		protected setPosition(pos:Point):void
		{
			if(pos){
				this.tipsView.x=pos.x-(this.tipsView.width>>1);
				this.tipsView.y=pos.y-this.tipsView.height*2;
				if(this.tipsView.y<0){
					this.tipsView.y=pos.y;
				}
				if((this.tipsView.y+this.tipsView.height)>this.stage.stageHeight){
					this.tipsView.y=pos.y-(this.tipsView.height+50);
				}
				if(this.tipsView.x<0){
					this.tipsView.x=pos.x+50
				}
				if((this.tipsView.x+this.tipsView.width)>this.stage.stageWidth){
					this.tipsView.x=pos.x-(this.tipsView.width+50);
				}
			}
		}
		public removeTips():void
		{
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);
			var parent:DisplayObjectContainer=this.tipsView.parent;
			if(parent!=null){
				parent.removeChild(this.tipsView);
				this.tipsView=null;
			}
		}
	}
	/** 基础按钮 */
	export class BasicButton extends SunContainer implements IOnoff
	{
		/** 按钮显示对象 */
		protected statusNormal:DisplayObject;
		protected statusDown:DisplayObject;
		/** 显示对象容器 */
		protected skinContainer:DisplayObjectContainer;
		protected text:TextField;
		/**皮肤大小随字体大小变化 */
		public skinAutoScale:boolean=true;
		/** @param(显示颜色按钮对象，按下颜色按钮对象) */
		public constructor(normal:DisplayObject=null, down:DisplayObject=null)
        {
			super();
			//初始化按钮
			this.statusNormal=normal||Skin.buttonNormal;
			this.statusDown=down||Skin.buttonDown;
			//容器
			this.skinContainer=new DisplayObjectContainer;
			this.addChild(this.skinContainer);
			this.updateSkin(this.statusNormal);
			this.text=(new Label).textField;
			this.addChild(this.text);

			this.open();
		}
		/** 绑定事件 */
		public open():void
		{
			this.close();
			this.touchEnabled=true;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			this.setGray(false);
		}
		/** 移除事件 */
		public close():void
		{
			this.touchEnabled=false;
			this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			if(this.stage) this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
		}
		/** 禁用此功能 */
		public closeAndSetGray():void{
			this.close();
			this.setGray(true);
		}
		/** 设置文本颜色 */
		set labelColor(value:number)
		{
			this.text.textColor=value;
		}
		/** 设置文本字体大小 */
		set labelSize(value:number)
		{
			this.text.size=value;
		}
		/** 设置文本内容 */
		set label(value:string)
		{
			this.text.text=value;
			var width:number=this.text.width+20;
			this.setSkinSize();
			this.setTextPosition();
		}
		/** 文本内容 */
		get label():string
		{
			return this.text.text;
		}
		/** 文本 */
		get textFild():TextField
		{
			return this.text;
		}
		/**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
		public setTextFlow(textFlow:egret.ITextElement[]):void
		{
			this.text.textFlow=textFlow;
			this.setSkinSize();
			this.setTextPosition();
		}
		/** 设置文本显示位置 */
		public setLabelPoint(x:number,y:number):void
		{
			this.text.anchorOffsetX=0;
			this.text.anchorOffsetY=0;
			this.text.x=x;this.text.y=y;
		}
		/** 设置显示 皮肤 */
		public setSkinNormal():void
		{
			this.updateSkin(this.statusNormal);
		}
		/** 设置按下 皮肤 */
		public setSkinDown():void
		{
			this.updateSkin(this.statusDown);
		}
		/** 触摸事件 */
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_BEGIN){//按下按钮后
				this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusDown);
			}else{//释放按钮后
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusNormal);
			}
			this.dispEvent(SunEvent.CLICK);								
		}
		/** 文本宽度 */
		protected get textWidth():number
		{
			return this.text.width+20;
		}
		/** 文本高度 */
		protected get textHeight():number
		{
			return this.text.height+20;
		}
		/** skinAutoScale = true时将设置皮肤大小 */
		protected setSkinSize():void
		{
			if(this.skinAutoScale&&this.text.text!=""){
				var scale:number=this.textWidth/this.statusNormal.width;
				if(this.statusNormal instanceof Bitmap){
					this.statusNormal.width=this.textWidth;
					this.statusDown.width=this.textWidth;
				}else{
					this.statusNormal.scaleX=this.statusDown.scaleX=scale;
				} 
				var height:number=this.textHeight;
				if(height>=this.statusNormal.height){
					scale=height/this.statusNormal.height;
					if(this.statusNormal instanceof Bitmap){
						this.statusNormal.height=this.textHeight;
						this.statusDown.height=this.textHeight;
					}else{ 
						this.statusNormal.scaleY=this.statusDown.scaleY=scale;
					}
				}
			}
		}
		/** 设置文本位置 */
		protected setTextPosition():void
		{
			//锚点：元素中心，一般可用于旋转，可固定位置
			this.text.anchorOffsetX=this.text.width>>1;
			this.text.anchorOffsetY=this.text.height>>1;

			if(this.textWidth>this.statusNormal.width)		
				this.text.x=this.textWidth>>1;
			else{
				if(this.skinAutoScale)	this.text.x=(this.statusNormal.width - this.text.anchorOffsetX)>>1;
				else  					this.text.x=this.statusNormal.width>>1;
			}
			if(this.textHeight>this.statusNormal.height)	this.text.y=this.textHeight>>1;
			else											this.text.y=this.statusNormal.height>>1;
		}
		/** 修改显示对象 */
		protected updateSkin(skin:DisplayObject):void
		{
			this.skinContainer.removeChildren();
			this.skinContainer.addChild(skin);
		}
		/**设置可示对象是否为灰色：一般是禁用按钮可点击 */
		public setGray(isGray:boolean):void
		{
			if(isGray){
				this.filters = [new egret.ColorMatrixFilter([
								0.5, 0, 0, 0, 0,
								0, 0.5, 0, 0, 0,
								0, 0, 0.5, 0, 0,
								0, 0, 0, 0.8, 0				])]
				// this.filters = [new egret.ColorMatrixFilter([
				// 				0.3, 0.6, 0.08, 0, 0,
				// 				0.3, 0.6, 0.08, 0, 0,
				// 				0.3, 0.6, 0.08, 0, 0,
				// 				0, 0, 0, 1, 0				])]
			}else{
				this.filters =null;
			}
		}
		public dispose():void
		{
			this.close();
			super.dispose();
		}
	}

	/**
	 * 类似多个皮肤按钮,构造函数的参数必须大于2个且必须是2的次方
	 * 使用四个皮肤就可以模拟ToggleSwitch了
	*/
	export class MoreSkinButton extends BasicButton
	{
		/** 当前值 */
		protected _currentPage:number=0;
		/** 皮肤数组 */
		protected skins:any[];
		/** 是否可触发事件 */
		protected _toggleSwitch:Boolean;
		public constructor(skins:any[])
        {
			super(skins[0],skins[1]);
			this.skins=skins;
		}
		/** 更新到第几个按钮同时刷新皮肤 */
		public updatePage(value:number)
		{
			this.currentPage=value;
			this.setSkinNormal();
		}
		/** 更新皮肤，但不刷新皮肤 */
		set currentPage(value:number)
		{
			value=value*2==this.skins.length?0:value;
			this._currentPage=value;
			this.statusNormal=this.skins[value*2];
			this.statusDown=this.skins[(value*2)+1];
			this.setSkinSize();
		}
		/** 获取当前值 */
		get currentPage():number
		{
			return this._currentPage;
		}
		/** 设置可触摸事件 */
		set toggleSwitch(value:Boolean)
		{
			this._toggleSwitch=value;
		}
		/** 绑定触发事件 */
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_END){
				if(this._toggleSwitch){
					this.currentPage=1-this.currentPage;
				}
			}
			super.onTouch(e);								
		}
	}
	/** 开关按钮 */
	export class SwitchButtion extends MoreSkinButton{
		public constructor()
        {
			var normal:Sprite=sun.Skin.switchOn;
			var down:Sprite=sun.Skin.switchOn;
			var normal2:Sprite=sun.Skin.switchOff;
			var down2:Sprite=sun.Skin.switchOff;
			var skins:any=[normal,down,normal2,down2];
			super(skins);
			this.toggleSwitch=true;
		}
	}
	/** */
	export class BasicTips extends SunContainer
	{
		protected image:Scale9Image;
		protected text:TextField;
		public side:number=14;//文字离边框的距离
		public lineSpacing:number=4;//行间距
		public constructor(skinName:string)
        {
            super();
			this.image=new Scale9Image(skinName);
			this.addChild(this.image);

			this.text=(new Label).textField;
			this.text.textAlign = egret.HorizontalAlign.CENTER;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.text.lineSpacing=this.lineSpacing;
			this.addChild(this.text);
		}
		/**设置普通文字*/
		public setValue(value:string):void
		{
			this.text.text=value;
			this.setCenter();
		}
		/**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
		public setTextFlow(textFlow:egret.ITextElement[]):void
		{
			this.text.textFlow=textFlow;
			this.setCenter();
		}
		protected setCenter():void
		{
			var image:Scale9Image=this.image;
			var text:TextField=this.text;
			var side:number=this.side;
			var w:number=text.width+side;
			var h:number=text.height+side;
			image.width=w;
			image.height=h;
			text.x=text.y=side>>1;
		}
	}
    /** 基础组件-Label */
    export class Label extends SunContainer
	{
		private text:TextField;
        //@param(文字，文字颜色)
		public constructor(str:string="",c:number=0XFFFFFF)
        {
			super();
			this.text=new TextField;
			this.text.textAlign = egret.HorizontalAlign.LEFT;//水平居左
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;//垂直居中
			this.text.text=str;
			this.text.textColor=c;
			this.text.fontFamily = sun.FONT.YaHei;
			this.addChild(this.text);
		}
		get textField():TextField
		{
			return this.text;
		}
	}

	/** 复选框按钮,继承BasicBar:添加元素等 */
	export class CheckBoxBar extends BasicBar
	{
		/** 添加复选按钮 */
		public addItemLabel(label:string,item:MoreSkinButton=null):void
		{
			if(item==null)		item=Skin.getCheckBox(label);
			else				item.label=label;
			this.addItem(item)
		}
		
		public addItem(item:BasicButton):void
		{
			super.addItem(item);
			item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			this.addChild(item);
		}
		public removeItem(item:BasicButton):void
		{
			super.removeItem(item);
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			item.removeFromParent(true);
		}
		protected onClick(e:egret.TouchEvent):void
		{
			var item:MoreSkinButton=e.currentTarget as MoreSkinButton;
			//字体颜色改变
			if(item.currentPage == 1) item.labelColor = sun.Color.blueNormal;
			else item.labelColor = sun.Color.black;
			this.dispEvent(sun.SunEvent.CHANGE);
		}
		public get selectIndexs():number[]
		{
			var nums:number[]=[];
			for(var i:number=0;i<this.items.length;i++){
				var btn:MoreSkinButton=this.items[i] as MoreSkinButton;
				if(btn.currentPage==1) nums.push(i);
			}
			return nums;
		}
	}
	/** 单选框按钮 */
	export class RadioButtonBar extends CheckBoxBar
	{
		/** 所选索引 */
		protected _selectIndex:number;
		/** 是否自动布局 */
		public isAutoLayout:Boolean=false;
		/** 添加单选按钮 */
		 public addItemLabel(label:string,item:BasicButton=null):void
		{
			if(item==null)				item=Skin.getRodatioButton(label);
			else						item.label=label;
			this.addItem(item);
		}
		protected render():void
		{
			this.update();
		}
		public update():void
		{
			var item:BasicButton;
			if(this.isAutoLayout==true){
				for(var i:number=0;i<this.items.length;i++){
					item=this.items[i];
					item.x=(item.width+10)*i;
				}
			}
		}
		protected onClick(e:egret.TouchEvent):void
		{
			var item:BasicButton=e.currentTarget as BasicButton;
			this.selectIndex=this.items.indexOf(item);
			this.dispEvent(sun.SunEvent.CHANGE);
		}
		set selectIndex(index:number){
			this._selectIndex=index;
			var item:BasicButton=this.items[index];
			this.items.map(setSkinNormal,this);
			//还原皮肤以及还原字体颜色
			function setSkinNormal(i:BasicButton):void{
				i.setSkinNormal();
				i.labelColor = sun.Color.black;
			}
			//更新皮肤以及字体颜色
			item.setSkinDown();
			item.labelColor = sun.Color.blueNormal;
		}
		get selectIndex(){
			return this._selectIndex;
		}
	}
	/**选项栏组件 */
	export class TabbarBar extends CheckBoxBar
	{
		protected _selectIndex:number=0;
		protected onClick(e:egret.TouchEvent):void
		{
			var curr:MoreSkinButton=e.currentTarget as MoreSkinButton;
			this.selectItem(curr)
		}
		protected selectItem(curr:MoreSkinButton):void
		{
			this.reset();
			while(this.hasItem(this.index)){
				var item:MoreSkinButton=this.getNextItem() as MoreSkinButton;
				item.currentPage=0;
				item.setSkinNormal();
				item.open();
			}
			if(curr){//如果设置为-1表示初始所有
				curr.close();
				curr.currentPage=1;
				curr.setSkinNormal();
				this._selectIndex=this.items.indexOf(curr);
				this.dispEvent(sun.SunEvent.CHANGE,this._selectIndex);
			}
		}
		set selectIndex(value:number){this._selectIndex=value,this.selectItem(this.getItem(value) as MoreSkinButton)}
		get selectIndex():number{return this._selectIndex}
	}

	/**上下页切换组件 */
	export class PrevNextBar extends CheckBoxBar
	{
		protected _selectIndex:number=0;
		protected _total:number=1;
		protected _interval:number;
		protected btnPrev:BasicButton;
		protected btnNext:BasicButton;
		public constructor(prev:BasicButton=null,next:BasicButton=null,interval:number=100)
        {
			super();
			this.btnPrev=prev||new BasicButton(Skin.pnBarPrevNormal,Skin.pnBarPrevDown);
			this.btnNext=next||new BasicButton(Skin.pnBarNextNormal,Skin.pnBarNextDown);
			this._interval=interval;
			this.addChild(this.btnPrev);
			this.addChild(this.btnNext);
			this.addItem(this.btnPrev);
			this.addItem(this.btnNext);
			this.layout(Const.HORIZONTAL,interval);
			this.selectItem();
		}
		protected onClick(e:egret.TouchEvent):void
		{
			var curr:BasicButton=e.currentTarget as BasicButton;
			var index:number=this._selectIndex;
			var total:number=this._total-1;
			if(curr==this.btnPrev){
				index=index>0?--index:0;
			}else{
				index=index<total?++index:total;
			}
			this.selectIndex=index;
		}
		protected selectItem():void
		{
			this.reset();
			while(this.hasItem(this.index)){
				var item:BasicButton=this.getNextItem() as BasicButton;
				item.filters=null;
				item.close();
				item.open();
			}
			if(this._selectIndex==0){
				this.btnPrev.closeAndSetGray();
			}
			if(this._selectIndex==this._total-1){
				this.btnNext.closeAndSetGray();
			}
			this.dispEvent(sun.SunEvent.CHANGE,this._selectIndex);
		}
		set selectIndex(value:number){this._selectIndex=value,this.selectItem()}
		get selectIndex():number{return this._selectIndex}
		set total(value:number){this._total=value,this.selectItem()}
		get total():number{return this._total}
		set interval(value:number){this._interval=value,this.layout(Const.HORIZONTAL,value);}
		get interval():number{return this._interval}
	}
	/**九宫格*/
	export class Scale9Image extends Bitmap
	{
		public constructor(name:string,rect:Rectangle=null)
        {
            super();
			if(name!=null){
				if(RES.hasRes(name)){
					this.texture = RES.getRes(name);
					this.scale9Grid=rect||new Rectangle(8,8,2,2);
				}else{
					egret.error("找不到资源："+name);
				}
			}
		}
		/**增加外网的图片资源 */
		public addOutWebImage(url:string):void
		{
			if(url!=""&&url!=null){
				var imageLoader:egret.ImageLoader = new egret.ImageLoader();
				egret.ImageLoader.crossOrigin = "anonymous" //用于跨域加载不报错
				imageLoader.addEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
				imageLoader.load(url);
			}
		}

		private loadCompleteHandler(event:egret.Event):void {
			var imageLoader = <egret.ImageLoader>event.currentTarget;
			let texture = new egret.Texture();
			texture._setBitmapData(imageLoader.data);
			this.texture=texture;
		}
	}

	/**
	 * 资源解析
	 */
	export class ResourceUtils {
		/**
		 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
		 */
		public static createBitmapByName(name:string):egret.Bitmap {
			var result:egret.Bitmap = new egret.Bitmap();
			var texture:egret.Texture = RES.getRes(name);
			result.texture = texture;
			return result;
		}

		/**
		 * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
		 */
		public static createBitmapFromSheet(name:string, sheetName:string = "gameRes"):egret.Bitmap {
			var sheet:egret.SpriteSheet = RES.getRes(sheetName);
			var texture:egret.Texture = sheet.getTexture(name);
			var result:egret.Bitmap = new egret.Bitmap();
			result.texture = texture;
			return result;
		}

		public static getTextureFromSheet(name:string, sheetName:string = "gameRes"):egret.Texture {
			var sheet:egret.SpriteSheet = RES.getRes(sheetName);
			var result:egret.Texture = sheet.getTexture(name);
			return result;
		}
	}

    /** 事件类型 */
    export class SunEvent extends egret.EventDispatcher
	{
		//button event
		public static readonly MOUSE_OVER:string="event-over";//移进
		public static readonly MOUSE_OUT:string="event-out";//移出
		public static readonly MOUSE_DOWN:string="event-down";//点下
		public static readonly MOUSE_MOVE:string="event-move";//移动
		public static readonly MOUSE_UP:string="event-up";//弹开
		public static readonly CLICK:string="event-click";//单击
		
		//tabbar event
		public static readonly CHANGE:string="change";//更换
		public static readonly COMPLETE:string="complete";//完成
		public static readonly ERROR:string="error";//错误
		public static readonly RENDER_COMPLETE:string="render complete";//渲染完成
		public static readonly UPDATE:string="update";//更新
		public static readonly START:string="start";//开始
		public static readonly MOVE:string="move";//移动
		public static readonly OVER:string="over";//结束
		public static readonly PAUSE:string="pause";//暂停
		public static readonly STOP:string="stop";//停止
		public static readonly PLAY:string="play";//播放
		public static readonly OPEN:string="open";//开启
		public static readonly CLOSE:string="close";//关闭
		
		public currentTarget:Object;//当前对象
		public type:string;//事件类型
		public data:Object;//通用数据
		public dataType:Object;//数据类型
		public constructor(type:string="",data:Object=null,currentTarget:Object=null)
		{
			super();//执行父类的构造函数,若要使用的父类的函数，必须至少执行一次，用来创建父类的 this
			this.type = type;
			this.data = data;
			this.currentTarget = currentTarget;
		}
	}
}