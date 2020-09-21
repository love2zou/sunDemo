class Button extends sun.BasicButton {};
/**游戏提示模版 */
class GameAlert extends BView
{
    protected render()
    {
        this.label="提示模版";
        super.render();//创建背景
        this.colorBottom=sun.Color.defaultBgColor;//提示模板：容器背景颜色
        this.createCloseBtn();
        this.createView();
    }
    protected createView():void
    {
        this.setButton("提示自动关闭",100,100);
        this.setButton("提示手动关闭",100,200);
        this.setButton("提示滚动关闭",100,300);
    }
    protected onClick(e:egret.TouchEvent):void
    {
        var btn:Button=e.currentTarget as Button;
        switch(btn.label){
            case "提示自动关闭": alertAuto("只显示2秒然后自动关闭",2);      break;
            case "提示手动关闭": alertHand("这是一个需要手动\n关闭的提示框");break;
            case "提示滚动关闭": alertRoll("恭喜子乐获得了99级神器");       break;
        }
    }
}
/**背景图循环播放模版 */
class GameImageLoop extends BView
{
    private image:sunImage.ImageLoopPlay;
    private slider:sun.SliderBar;
    protected render()
    {
        this.label="背景图循环播放模版";
        super.render();
        this.colorBottom=sun.Color.defaultBgColor;//提示模板：容器背景颜色
        //this.colorBottom = 0x1989fa;
        this.createCloseBtn();
        this.createView();

        this.setButton("向左移动",100,100);
        this.setButton("向右移动",100,200);
        this.setButton("向上移动",100,300);
        this.setButton("向下移动",100,400);

        this.addItem(new sun.Label("控制速度",0XFFFFFF),200,10);
        var s:sun.SliderBar=new sun.SliderBar();
        s.value=0.5;
        this.addItem(s,50,50);
        s.addEvent(sun.SunEvent.OVER,this.onSlider,this);
        this.slider=s;
    }
    /**点击事件，继承父类进行绑定 */
    protected onClick(e:egret.TouchEvent):void
    {
        var btn:Button=e.currentTarget as Button;
        switch(btn.label){
            case "向左移动": this.layout(sun.Const.HORIZONTAL,-1);     break;
            case "向右移动": this.layout(sun.Const.HORIZONTAL,1);      break;
            case "向上移动": this.layout(sun.Const.VERTICAL,-1);       break;
            case "向下移动": this.layout(sun.Const.VERTICAL,1);        break;
        }
    }
    /**布局：@param(布局方向，播放速度) */
    public layout(type:string=sun.Const.HORIZONTAL,interval:number=-1):void
	{
        this.slider.value=0.5;
        this.image.stop();
        this.image.speed=5*interval;
        this.image.layout(type,interval);//重置位置
        this.image.play();
    }
    protected createView():void
    {
        this.image=new sunImage.ImageLoopPlay("loopBg_jpg");
        this.addItem(this.image);
        this.image.play();
	}
    private onSlider(e:sun.SunEvent):void
    {
        var s:sun.SliderBar = e.currentTarget as sun.SliderBar;
        var vector:number=this.image.speed/Math.abs(this.image.speed);//取得速度向量（1或-1确定向量方向）
        this.image.speed=vector*(1+s.value*10);
    }
}

/**游戏动画模版 */
class GameAnimation extends BView
{
    private body:sunImage.ImageAnimation;
    protected render()
    {
        this.label="动画模版";
        super.render();
        this.colorBottom=0XCCCCCC;
        this.createCloseBtn();
        this.createView();
    }
    protected createView():void
    {
        //背景为贴图
        var chartlet:sunImage.ImageChartlet=new sunImage.ImageChartlet("wallMin_jpg",40);
        //chartlet.layout(moon.Const.VERTICAL);//竖版
        chartlet.setMultiLine(4);//多行版，一行有4个
        this.addItem(chartlet);

        //图像动画
        var animation:sunImage.ImageAnimation=new sunImage.ImageAnimation("body",1,13);
        animation.loop=true;
        animation.ftp=6;
        animation.play();
        this.addItem(animation,100,100);
        this.body=animation;

        this.addItem(new sun.Label("控制速度",0XFFFFFF),100,10);
        var s:sun.SliderBar=new sun.SliderBar();
        s.value=0;
        this.addItem(s,50,50);
        s.addEvent(sun.SunEvent.OVER,this.onSlider,this);
    }
    private onSlider(e:sun.SunEvent):void
    {
        var s:sun.SliderBar=e.currentTarget as sun.SliderBar;
        this.body.ftp=6+s.value*54;
        this.body.play();
    }
}

/** 公告通知 */
/** 功能说明：(1)循环滚动文字显示；(2)可控制文字显示的滚动速度；（3）可按照不同方向滚动 */
class GameNotify extends BView
{
    /** 公告通知对象 */
    private notice:sunImage.NoticeLoopPlay;
    /** 滑动条：控制速度 */
    private slider:sun.SliderBar;
    protected render()
    {
        this.label="公告通知";
        super.render();
        this.colorBottom=sun.Color.defaultBgColor;//提示模板：容器背景颜色
        //this.colorBottom = 0x1989fa;
        this.createCloseBtn();
        this.createView();

        this.setButton("向左滚动",100,500);
        this.setButton("向上滚动",100,600);
        this.setButton("向下滚动",100,700);

        this.addItem(new sun.Label("控制速度",0X101010),200,400);
        var s:sun.SliderBar=new sun.SliderBar();
        s.value=0.5;
        this.addItem(s,50,450);
        s.addEvent(sun.SunEvent.OVER,this.onSlider,this);
        this.slider=s;
    }
    /**点击事件，继承父类进行绑定 */
    protected onClick(e:egret.TouchEvent):void
    {
        var btn:Button=e.currentTarget as Button;
        //温馨建议：向上或向下滚动会有文字超出无法显示的问题，所以一般情况下最好使用向左滚动更为合适
        switch(btn.label){
            case "向左滚动": this.layout(sun.Const.HORIZONTAL,-1);     break;
            case "向上滚动": this.layout(sun.Const.VERTICAL,-1);       break;
            case "向下滚动": this.layout(sun.Const.VERTICAL,1);        break;
        }
    }
    /**布局：@param(布局方向，播放速度) */
    public layout(type:string=sun.Const.HORIZONTAL,interval:number=-1):void
	{
        //确定速度值范围：最大值为2，最小值为0.1
        this.slider.value=0.5;
        this.notice.stop();
        this.notice.speed=1*interval;
        this.notice.layout(type,interval);//重置位置
        this.notice.play();
    }
    protected createView():void
    {
        //公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!
        this.notice = new sunImage.NoticeLoopPlay(this.stageWidth,400);
        this.notice.addNoticeMsg("001公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!");
        this.notice.addNoticeMsg("002郑重声明：为了体验更好的游戏服务，现将于12点维护服务器");
        this.notice.addNoticeMsg("003公告通知：由于近期发生特大bug事件，服务器要进行夜间维护。如给玩家带来不便影响，请予以谅解!");
        this.notice.addNoticeMsg("004郑重声明：为了体验更好的游戏服务，现将于12点维护服务器");
        this.notice.layout();
        this.addItem(this.notice);
        this.notice.play();
	}
    /** 滑动器事件 */
    private onSlider(e:sun.SunEvent):void
    {
        var s:sun.SliderBar=e.currentTarget as sun.SliderBar;
        var vector:number=this.notice.speed/Math.abs(this.notice.speed);//取得速度向量
        this.notice.speed=vector*(0.1+s.value*1.8);//初始值为0.2，最大值为2
    }
}