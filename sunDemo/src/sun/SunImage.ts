/**
 * ...2020-9-9
 * @author mark_zq
 * 图片处理类，需要SunTheme支持
 */
var SUN_FTP:number=24;
module sunImage
{
    /**图像类 */
	export class Image extends sun.SunContainer{
        protected skinName:string;//皮肤名称
        protected skinImage:sun.Scale9Image;//九宫格图像
        protected position:Point;
        public bgWidth:number;//图像宽度
        public bgHeight:number;//图像高度
		public constructor(skinName:string="")
        {
            super();
            if(skinName!=""){
                this.skinName=skinName;
                this.position=new Point();
                this.addBitmap();
                this.bgWidth=this.width;
                this.bgHeight=this.height;
            }
        }
        /** 添加图像 */
        public addBitmap():void
        {
            if(RES.hasRes(this.skinName)){
                this.skinImage=new sun.Scale9Image(this.skinName);
                this.addChild(this.skinImage);
            }else{
                trace("找不到资源："+this.skinName)
                //egret.error("找不到key"+this.skinName);
            }
        }
        /**设置锚点在中心 */
        public setAnchorCenter():void
        {
            this.anchorOffsetX=this.width>>1;
            this.anchorOffsetY=this.height>>1;
        }
	}
    /**图像容器类 */
    export class BasicContainer extends Image{
        protected items:any[]=[];//图像对象数组
        protected index:number=0;//索引
        /** 索引重置为0 */
        public reset():void{
			this.index=0;
		}
        /** 添加元素 */
        public addItem(item:any):void{
            this.items.push(item);
        }
        /** 根据索引删除一个元素 */
        public removeItem(index:number):void{
            if(this.hasItem(index)){
                this.items.splice(index,1);
            }
        }
        /** 根据索引获取一个元素 */
		public getItem(index:number):any{
			return this.items[index];
		}
        /** 根据索引判断一个元素是否存在 */
        public hasItem(index:number):boolean{
			return this.items.length>0&&(index>=0&&index<this.items.length);
		}
         /** 获取下一个元素 */
		public getNextItem():any{
			return this.items[this.index++]; 
		}
        /** 获取一个元素的索引值 */
        public getIndexByItem(item:sun.Scale9Image):any{
			return this.items.indexOf(item);
		}
        /** 获取元素数组长度 */
        public get itemsLength():number{
            return this.items.length
        }
        /** 获取元素索引值 */
        public get currIndex():number{
            return this.index;
        }
        /** 删除所有元素 */
		public removeAll():void{
            while(this.hasItem(0)){
                var item:sun.Scale9Image=this.getItem(0);
                if(item.parent) item.parent.removeChild(item);
                this.removeItem(0);
            }
        }
    }
    /**图像贴图类 */
    export class ImageChartlet extends BasicContainer implements sun.ILayout{
        /**图像名称，图像个数 */
        public constructor(skinName:string,count:number=1){
            super();
            this.skinName=skinName;//皮肤名称
            for(var i:number=0;i<count;i++){
                this.items.push(this.getBitmap());
            }
        }
        /** 根据名称获取九宫图 */
        protected getBitmap():sun.Scale9Image
        {
            var skin:sun.Scale9Image;
            if(RES.hasRes(this.skinName)){
                skin = new sun.Scale9Image(this.skinName);
                this.addChild(skin);
            }else{
                trace("找不到资源："+this.skinName)
            }
            return skin;
        }
        /**布局：@param（布局排列方向，间隔距离） */
        public layout(type:string,interval:number=0):void
        {
            if(type==sun.Const.VERTICAL)        sun.SimpleLayout.displayRank(this.items,1,interval,interval,0,0);
            else if(type==sun.Const.HORIZONTAL) sun.SimpleLayout.displayRank(this.items,this.items.length,interval,interval,0,0);
        }
        /**多行排列，xNum是一排排几个 */
        public setMultiLine(xNum:number,interval:number=0):void
        {
            sun.SimpleLayout.displayRank(this.items,xNum,interval,interval,0,0);
        }
    }
     /**图像残影跟随 */
    export class ImageFollow extends ImageChartlet{
        protected head:DisplayObject;
        /**跟随速度 */
        public speed:number=4;
        public constructor(skinName:string,count:number=1){
            super(skinName,count);
            this.head=this.items[0];
            this.addChild(this.head);
            this.reset()
            while(this.hasItem(this.index)){
                var item:DisplayObject=this.getNextItem();
                item.alpha=(this.itemsLength-(this.index-1))/this.itemsLength;
            }
            egret.startTick(this.loop,this);
        }
        /**更新位置 */
        public update(x:number,y:number):void{
            this.head.x+=x;
            this.head.y+=y;
        }
        /**循环函数*/
        private loop(num:number):boolean
        {           
            var len:number=this.items.length-1;
            var endItem=this.items[len];
            //在这里引用了sunGame东西，是否可以优化
            if(sunGame.GameUtils.twoDistance(this.headItem,endItem)>0.1){
                //当头尾间的距离小于0.1时，就不在执行循环跟随。
                var v:number=this.speed;
                for(var i=0;i<len;i++){
                    var item1=this.items[i];
                    var item2=this.items[i+1];
                    item2.x+=(item1.x-item2.x)/v;
                    item2.y+=(item1.y-item2.y)/v;
                }
            }
            return true;
        }
        /**获取第一个元素*/
        public get headItem():DisplayObject{return this.head};
    }
    /**图像循环播放（一般用于两张相同的背景一直循环使用） */
    export class ImageLoopPlay extends ImageChartlet implements sun.ILayout{
        private _speed:number=-5;//速度
        private type:string;//布局类型
        public constructor(skinName:string){
            super(skinName,2);
            this.layout();
        }
        /** 设置速度 */
        set speed(v:number){this._speed=v;}
        /** 获取速度 */
        get speed():number{return this._speed;}
        /**横竖版布局，默认是横版布局 interval在此表示需要移动的左右还是上下的方向*/
		public layout(type:string=sun.Const.HORIZONTAL,interval:number=-1):void
		{
            //sun.Const.HORIZONTAL -1:由右到左；sun.Const.HORIZONTAL 1:由左到右；sun.Const.VERTICAL -1:由下到上；sun.Const.VERTICAL 1:由上到下
			this.type=type;
            this.reset();
            while(this.hasItem(this.index)){
                var item:DisplayObject=this.getItem(this.index);
                item.x=item.y=0;
                if(type==sun.Const.HORIZONTAL){
                    if(interval<0)  item.x=this.index*item.width;//第一张图在屏幕内，第二张图在屏幕右侧
                    else            item.x=this.index*item.width*-1;
                }else{
                    if(interval<0)  item.y=this.index*item.height;
                    else            item.y=this.index*item.height*-1;
                }
                this.index++;
            }
		}
        /** 播放 */
        public play():void{
             egret.startTick(this.loop,this);
        }
        /** 停止 */
        public stop():void{
             egret.stopTick(this.loop,this);
        }
        /**循环函数*/
        private loop(num:number):boolean
        {
            var len:number=this.items.length;
            for(var i=0;i<len;i++){
                var item=this.items[i];
                if(this.type==sun.Const.HORIZONTAL){
                     item.x+=this.speed;
                    if(this.speed<0){//向左移动，当移出屏幕时又重新放到上一张图片后面
                        if(item.x<=-item.width){
                            var x:number=item.x+item.width;
                            item.x=item.width+x;
                        }
                    }else{//向右移动，当移出屏幕时又重新放到上一张图片前面
                        if(item.x>=item.width){
                            var x:number=item.x-item.width;
                            item.x=-item.width+x;
                        }
                    }
                }else{
                     item.y+=this.speed;
                    if(this.speed<0){//向上移动，当移出屏幕时又重新放到上一张图片后面
                        if(item.y<=-item.height){
                            var y:number=item.y+item.height;
                            item.y=item.height+y;
                        }
                    }else{//向下移动，当移出屏幕时又重新放到上一张图片前面
                        if(item.y>=item.height){
                            var y:number=item.y-item.height;
                            item.y=-item.height+y;
                        }
                    }
                }
            }
            return true;
        }
    }  

    /** 公告通知（循环播放） */
    export class NoticeLoopPlay extends BasicContainer {
        private type:string;//布局类型
        private _speed:number=-1;//速度
        /** icon皮肤背景 */
		private iconBg:sun.SunDisplayObject;
        /** 皮肤背景 */
		private bg:sun.SunDisplayObject;
        /** 背景颜色 */
		private bgColor:number;
        /** 舞台宽度 */
		private stageW:number;
        /** 提示文本 */
		protected text:TextField;
        /** 提示文本 */
		protected textX:number;
         /** 提示文本 */
		protected textY:number;
         /** 图标间隔 */
		private iconInterval:number = 20;
        /** @param(舞台宽度，背景皮肤) */
        public constructor(stageW:number,bgWidth:number=200){
            super();
            this.stageW = stageW;
            this.bgColor = 0x101010;//黑色
			this.bgWidth=bgWidth;
            this.initView();
        }

        protected initView():void{
			//在文字宽高基础上 加宽加高
            var w:number=this.bgWidth;//背景宽度
			var h:number=40;
            //设置背景显示位置
			var x:number=(this.stageW-w)>>1;//x位置
			var y:number=100;//y位置
            //设置最底层背景
			this.iconBg=new sun.SunDisplayObject();
			this.iconBg.type = sun.Const.SHAPE_RECT;
            this.iconBg.data={w:w,h:h,c:this.bgColor,a:0.4};
			this.iconBg.x=x;this.iconBg.y=y;
			this.addChild(this.iconBg);
            //公告图标
            var skinImage=new sun.Scale9Image("notice_icon_png");
            skinImage.x = this.iconInterval>>1;
            skinImage.y = (this.iconBg.height - skinImage.height) >> 1;
            this.iconBg.addChild(skinImage);
			//设置背景显示
			this.bg=new sun.SunDisplayObject();
			this.bg.type = sun.Const.SHAPE_RECT;
            this.bg.data={w:w - this.iconInterval*2,h:h,c:this.bgColor,a:0};
            //this.bg.setBackground(0xffcccc,2);//不设置背景，看起来就是画边框
			this.bg.x=x + this.iconInterval*2;this.bg.y=y;
			this.addChild(this.bg);
            //设置背景遮罩效果
			var m:Sprite=sun.SunUI.getRect(w - this.iconInterval*2,h,0,1,x + this.iconInterval*2,y);//画一个黑色遮罩
			this.addChild(m)
			this.bg.mask=m;//遮罩的作用是指定一个显示对象的可见区域，显示对象的可见区域由另一个显示对象确定
            //设置内容显示位置
            this.textX = w - this.iconInterval*2;
		}

        /** 发布消息 */
        public addNoticeMsg(msg:string):void{
            this.text = new TextField();
            this.text.size = 20;
			this.text.textColor = 0xffffff;//白色字体
            this.text.text = msg;
			this.textY = (this.bg.height - this.text.height)>>1;
            this.bg.addChild(this.text)
            this.addItem(this.text);
        }

        /**横竖版布局，默认是横版布局 interval在此表示需要移动的左右还是上下的方向*/
		public layout(type:string=sun.Const.HORIZONTAL,interval:number=-1):void
		{
            //sun.Const.HORIZONTAL -1:由右到左；sun.Const.HORIZONTAL 1:由左到右；sun.Const.VERTICAL -1:由下到上；sun.Const.VERTICAL 1:由上到下
			this.type=type;
            this.reset();
            while(this.hasItem(this.index)){
                var item:DisplayObject=this.getItem(this.index);
                item.x=item.y=0;
                if(type==sun.Const.HORIZONTAL){
                    if(interval<0)  
                    {item.x=this.textX;item.y=this.textY;}//向左移动
                    else            {};
                }else{
                    if(interval<0)  {item.x=0;item.y=item.height*2;}//向上移动
                    else            {item.x=0;item.y=-item.height;}//向下移动
                }
                this.index++;
            }
		}
        /** 设置速度 */
        set speed(v:number){this._speed=v;}
        /** 获取速度 */
        get speed():number{return this._speed;}        
        /** 播放 */
        public play():void{
             egret.startTick(this.loop,this);
        }
        /** 停止 */
        public stop():void{
             egret.stopTick(this.loop,this);
        }

        /**循环函数*/
        private loop(num:number):boolean
        {
            if(this.hasItem(this.index)){
                var item =this.getItem(this.index);
                if(this.type==sun.Const.HORIZONTAL){//水平方向
                    item.x+=this.speed;
                    if(this.speed<0){//向左移动
                        if(item.x<= -item.width){
                            item.x=this.textX;
                            this.index++;
                        }
                    }else{//不需要向右移动

                    }
                }else{
                    item.y+=this.speed;
                    if(this.speed<0){//向上移动
                        if(item.y<=-item.height){
                                item.y= item.height*2;
                                this.index++;
                        }
                    }else{//向下移动
                        if(item.y>=2*item.height){
                                item.y= -item.height;
                                this.index++;
                        }
                    }
                }
            }else{
                this.reset();
            }
            return true;
        }
    }

    /**图像动画类 */
    export class ImageAnimation extends BasicContainer{
        protected timer:egret.Timer;
        protected _ftp:number=SUN_FTP;
        public loop:boolean;
        /** @param(动画皮肤名称，序列帧start，序列帧end，动画资源类型) */
        public constructor(skinName:string="",start:number,end:number,type:string="png"){
            super();
            for(var i:number=start;i<=end;i++){
                this.items.push(skinName+i+"_"+type);
            }
            //添加图形到容器中
            this.skinName=this.getItem(0);
            this.addBitmap();
            //创建计时器
            this.createTime();
        }
        /** 定时器 */
        protected createTime():void
        {
            if(this.timer==null){
                this.timer=new egret.Timer(1000/this.ftp,0);//@param(调用时间间隔；调用次数，为0时表示一直调用)
                this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
            }
        } 
        /** 定时器事件 */
        protected onTimer():void
        {
            //判定资源是否存在
            if(this.hasItem(++this.index)){
                this.gotoAndStop(this.index);
            }else{
                if(this.loop){
                    this.reset();
                    this.gotoAndStop(this.index);
                }else{
                    this.timer.stop();
                }
            }
        }
        public gotoAndStop(index:number):void{
            if(this.hasItem(index)){
                this.index=index;
                this.skinName=this.getItem(index);
                this.update();
            }else{
                trace("gotoAndStop的参数请保持在0到"+this.items.length,"当前index="+index)
            }
        }
        /** 播放资源 */
        public gotoAndPlay(index:number):void{
            this.index=index;
            this.play();
        }
        /** 启动计时器 */
        public play():void{
            this.timer.start();
        }
        /** 停止计时 */
        public stop():void{
            this.timer.stop();
        }
        /** 更新资源 */
        public update():void
        {
            if(RES.hasRes(this.skinName)){
                this.skinImage.texture=RES.getRes(this.skinName);
            }else{
                trace("找不到资源："+this.skinName);
            }
        }
        /** 获取当前帧索引值 */
        public get currentFrame():number{return this.index}
        /** 获取当前帧（每秒） */
        public get ftp(){return this._ftp}
        /** 设置当前帧（每秒） */
        public set ftp(value:number){
            this._ftp=value;
            this.removeTime();
            this.createTime();
        }
        /** 移除计时器 */
        protected removeTime():void
        {
            if(this.timer!=null){
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
                this.timer=null;
            }
        }
        /** 销毁 */
        public dispose():void
        {
            super.dispose();
            this.removeTime();
        }
    }
    /**图像布局类 */
    export class ImageLayout{
        private tw:number;
        private th:number;
        private image:DisplayObject;
        private static instance:ImageLayout;
		public static getIns():ImageLayout{
			if(this.instance == null) this.instance = new ImageLayout();
			return this.instance;
		}
        public setImage(image:DisplayObject):void{
            this.image=image;
        }
		public setStageWH(w:number,h:number):void{
            this.tw=w;this.th=h;
        }
        public setTop(distance:number){
            this.image.y=distance;
        }
        public setBottom(distance:number):void{
            this.image.y=this.th-this.image.height-distance;
        }
        public setLeft(distance:number):void{
            this.image.x=distance;
        }
        public setRight(distance:number):void{
            this.image.x=this.tw-this.image.width-distance;
        }
        public setCenterX(distance:number=0):void{
            this.image.x=((this.tw-this.image.width)>>1)+distance;
        }
        public setCenterY(distance:number=0):void{
            this.image.y=((this.tw-this.image.width)>>1)+distance;
        }
        public setCenterXByPanent(image:DisplayObject):void{
            if(image.parent instanceof Image) image.x=(image.parent.bgWidth-image.width)>>1;
            else image.x=(image.parent.width-image.width)>>1;
        }
        public setCenterYByPanent(image:DisplayObject):void{
            if(image.parent instanceof Image) image.y=(image.parent.bgHeight-image.height)>>1;
            else image.y=(image.parent.height-image.height)>>1;
        }
    }
}