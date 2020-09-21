/** 基础组件视图 */
class SunBasicView extends sun.SunContainer
{
    protected panelMore:sun.PanelMoreManager;
    protected panelBar:sun.PanelBar;
    protected init():void
    {
        this.panelMore=new sun.PanelMoreManager();
        var names:string[]=[];
        names.push("sun组件一，基本按钮展示");
        names.push("sun组件二，进度条与滑动器展示");
        names.push("sun组件三，TIPS展示");
        names.push("sun组件四，sunDisplay展示");
        names.push("sun组件五，Tabbar展示");
        names.push("sun组件六，上下页展示");
        for(var i=0;i<names.length;i++){
            var panel:sun.PanelBar=new sun.PanelBar();
            panel.label=names[i];
            panel.addEvent(sun.SunEvent.RENDER_COMPLETE,this.onAddStage.bind(this));
            this.panelMore.addItem(panel);
        }
        this.panelMore.addEvent(sun.SunEvent.START,this.start,this);
        this.panelMore.addEvent(sun.SunEvent.OVER,this.over,this);
        this.addChild(this.panelMore);
        
        this.showButton(0);
        this.showProgresBar(1);
        this.showTipsBar(2);
        this.showsunDisplay(3);
        this.showTabbar(4);
        this.showPreNext(5);
        //this.panelMore.once(egret.Event.ADDED_TO_STAGE,this.addToStageMore,this);

        this.createCloseBtn();
    }
    protected createCloseBtn():void
    {
        var btn:sun.BasicButton=new sun.BasicButton();
        btn.label="关闭";
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)
    }
    protected close(e:egret.TouchEvent):void
    {
        this.dispEvent(sun.SunEvent.CLOSE);
        this.removeFromParent(true);
    }
    protected addToStageMore(e:egret.Event):void
    {
        this.panelMore.close();
    }
    protected start(e:sun.SunEvent):void
    {
        //traceSimple("翻页开始");
    }
    protected over(e:sun.SunEvent):void
    {
        //traceSimple("翻页结束");
    }
    protected onAddStage(e:sun.SunEvent):void
    {
        var panel:sun.PanelBar=e.currentTarget as sun.PanelBar;
        panel.colorBottom=0XFCDF7C;
    }

     //------屏幕1-----
    protected showButton(index:number):void
    {
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;
        //-----------
        var btn1:sun.BasicButton=new sun.BasicButton();
        btn1.label="默认皮肤按钮";
        panel.addItem(btn1,10,10);
        //-----------
        var normal:Sprite=sun.Skin.randomRect;
        var down:Sprite=sun.Skin.randomRect;
        var btn1:sun.BasicButton=new sun.BasicButton(normal,down);
        btn1.label="随机颜色皮肤按钮";
        panel.addItem(btn1,10,90);
        //-----------
        var normal3:sun.Scale9Image=new sun.Scale9Image("btn1_png");
        var down3:sun.Scale9Image=new sun.Scale9Image("btn2_png");
        var btn1:sun.BasicButton=new sun.BasicButton(normal3,down3);
        btn1.label="外部加载的皮肤"
        panel.addItem(btn1,300,100);
        //---------
        var normal3:sun.Scale9Image=new sun.Scale9Image("btn1_png");
        var down3:sun.Scale9Image=new sun.Scale9Image("btn2_png");
        normal3.width=down3.width=280;
        normal3.height=down3.height=100;
        var btn1:sun.BasicButton=new sun.BasicButton(normal3,down3);
        btn1.skinAutoScale=false;//不自动改变大小
        btn1.label="外部加载的皮肤"
        panel.addItem(btn1,300,200);
        //-----------
        var normal:Sprite=sun.Skin.switchOn;
        var down:Sprite=sun.Skin.switchOn;
        var normal2:Sprite=sun.Skin.switchOff;
        var down2:Sprite=sun.Skin.switchOff;
        var btn4:sun.MoreSkinButton=new sun.MoreSkinButton([normal,down,normal2,down2]);
        btn4.toggleSwitch=true;
        panel.addItem(new sun.Label("toggleSwitch按钮",0),10,300);
        panel.addItem(btn4,10,340);
        //-----------
        var items:any[]=["我帅","我很帅","我双酷双帅","我帅得惊动上帝"];
        var radioButton:sun.RadioButtonBar=new sun.RadioButtonBar;
        for(var i:number=0;i<items.length;i++){
            radioButton.addItemLabel(items[i]);
        }
        radioButton.layout();
        panel.addItem(new sun.Label("单选框按钮",0),10,500);
        panel.addItem(radioButton,10,540);
        radioButton.addEvent(sun.SunEvent.CHANGE,onHandlerRadion.bind(this));
        function onHandlerRadion(e:sun.SunEvent):void
        {
            sun.TipsManager.getIns().simpleTips("选择了"+radioButton.selectIndex,new Point(150,550))
        }
        //-------------------
        var items:any[]=["A","B","C","D"];
        var radioButton_1:sun.RadioButtonBar=new sun.RadioButtonBar;
        for(var i:number=0;i<items.length;i++){
            radioButton_1.addItemLabel(items[i]);
        }
        radioButton_1.layout(sun.Const.HORIZONTAL,10);
        panel.addItem(new sun.Label("单选框按钮横排版",0),10,800);
        panel.addItem(radioButton_1,10,840);
        //-----------
        var items:any[]=["我帅","我很帅","我双酷双帅","我帅得惊动上帝"];
        var checkBox:sun.CheckBoxBar=new sun.CheckBoxBar;
        var len:number=items.length;
        for(var i:number=0;i<len;i++){
             checkBox.addItemLabel(items[i]);
        }
        checkBox.layout();
        panel.addItem(new sun.Label("复选框按钮",0),300,500);
        panel.addItem(checkBox,300,540);
        checkBox.addEvent(sun.SunEvent.CHANGE,onHandlerCheckBox,this);
        function onHandlerCheckBox(e:sun.SunEvent):void
        {
            sun.TipsManager.getIns().simpleTips("选择了"+checkBox.selectIndexs,new Point(300,550))
        }

    }
    //------屏幕2-----
    protected showProgresBar(index:number):void
    {
        
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;
        //------默认皮肤-----
        var progressBar:sun.ProgressBar=new sun.ProgressBar();
        progressBar.value=0.5;
        panel.addItem(progressBar,50,300);
        var v:string=Math.round(progressBar.value*100)+"%";
        progressBar.showText(v,-1,-40);
        //------随机颜色皮肤-----
        var width=400;
        var height=30;
        var skinOut:Sprite=sun.SunUI.getRect(width,height,sun.Color.random);
        var skinIn:Sprite=sun.SunUI.getRect(width,height,sun.Color.random);
        var progressBar:sun.ProgressBar=new sun.ProgressBar(skinOut,skinIn);
        panel.addItem(progressBar,100,50);
        progressBar.value=0.8;
        var v:string=Math.round(progressBar.value*100)+"%";
        progressBar.showText(v);
        //----------------------
        var sliderBar:sun.SliderBar=new sun.SliderBar();
        panel.addItem(sliderBar,300,500);
        sliderBar.value=0.2;
        sliderBar.addEvent(sun.SunEvent.START,onStartOver,this);
        sliderBar.addEvent(sun.SunEvent.MOVE,onStartOver,this);
        sliderBar.addEvent(sun.SunEvent.OVER,onStartOver,this);

        var sliderBar:sun.SliderBar=new sun.SliderBar();
        panel.addItem(sliderBar,50,650);
        sliderBar.layout(sun.Const.VERTICAL);
        sliderBar.value=0.2;
       
        
        function onStartOver(e:sun.SunEvent):void
        {
            if(e.type==sun.SunEvent.START){
                this.panelMore.close();
            }else if(e.type==sun.SunEvent.MOVE){

            }else{
                this.panelMore.open();
            }
        }
    }
    //------屏幕3-----
    protected showTipsBar(index:number):void
    {
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;
        var xNum:number=2;
        var disX:number=400;
        var disY:number=500;
        panel.addItem(new sun.Label("单击按钮显示TIPS，TIPS显示始终都在屏幕内",0),10,100);
        for(var i:number=0;i<6;i++){
            var btn:sun.BasicButton=new sun.BasicButton();
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,onTouch,this)
            btn.label="单击显示TIPS"+i;
            var x:number=Math.floor(i%xNum)*disX;
            var y:number=Math.floor(i/xNum)*disY;
            panel.addItem(btn,x,y);
        }
        function onTouch(e:egret.TouchEvent):void
        {
            var btn:sun.BasicButton=e.currentTarget as sun.BasicButton; 
            sun.TipsManager.getIns().simpleTips(btn.label,new Point(e.stageX,e.stageY));
        }
    }
    //------屏幕4-----
    protected showsunDisplay(index:number):void
    {
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;

        //方形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_RECT
		rect.data={w:100,h:100,c:sun.Color.random}
		panel.addItem(rect,100,100);

        //圆角方形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_RECT_ROUND
		rect.data={w:100,h:100,c:sun.Color.random,ew:50,eh:50}
		panel.addItem(rect,100,300);

        //圆形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_CIRCLE
		rect.data={r:50,c:sun.Color.random}
		panel.addItem(rect,100,600);

        //有边框的方形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_RECT
		rect.data={w:100,h:100,c:sun.Color.random}
		panel.addItem(rect,300,100);
        rect.setBackground(sun.Color.random,10);

        //有边框圆角方形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_RECT_ROUND
		rect.data={w:100,h:100,c:sun.Color.random,ew:50,eh:50}
		panel.addItem(rect,300,300);
        rect.setBackground(sun.Color.random,10);

        //有边框圆形
        var rect=new sun.SunDisplayObject;
		rect.type=sun.Const.SHAPE_CIRCLE
		rect.data={r:50,c:sun.Color.random}
		panel.addItem(rect,300,600);
        rect.setBackground(sun.Color.random,10);

        // var rect=new sun.SunDisplayObject;
		// rect.type=sun.Const.SHAPE_RECT_ROUND
		// rect.data={w:100,h:100,c:sun.Color.random,ew:20,eh:20}
		// panel.addItem(rect,300,100);
		//rect.setBackground(sun.Color.random,10);
		//rect.color=0XFF0000;
    }
    //------屏幕5-----
    private showTabbar(index:number):void
    {
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;

        var names:any[]=["标题1","标题2","标题3","标题4","标题5"];
        var tabbar:sun.TabbarBar=new sun.TabbarBar;
        panel.addItem(tabbar,100,100);
        for(var i:number=0;i<names.length;i++){
            var skins:any[]=[sun.Skin.buttonNormal,sun.Skin.buttonDown,sun.Skin.buttonDown,sun.Skin.buttonDown]
            var btn:sun.MoreSkinButton=new sun.MoreSkinButton(skins);
            btn.label=names[i];
            tabbar.addItem(btn);
        }
        tabbar.selectIndex=0;
        tabbar.layout(sun.Const.HORIZONTAL,10);

        var names:any[]=["标题一","标题二","标题三","标题四","标题五"];
        var tabbar:sun.TabbarBar=new sun.TabbarBar;
        panel.addItem(tabbar,100,300);
        for(var i:number=0;i<names.length;i++){
            var skins:any[]=[sun.Skin.buttonNormal,sun.Skin.buttonDown,sun.Skin.buttonDown,sun.Skin.buttonDown]
            var btn:sun.MoreSkinButton=new sun.MoreSkinButton(skins);
            btn.label=names[i];
            tabbar.addItem(btn);
        }
        tabbar.layout(sun.Const.VERTICAL,10);
    }
    //------屏幕6-----
    private showPreNext(index:number):void
    {
        var panel:sun.PanelBar=this.panelMore.getItem(index) as sun.PanelBar;

        var btn2:sun.SwitchButtion=new sun.SwitchButtion();
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,onClick,this)
        panel.addItem(btn2);
        panel.addItem(new sun.Label("屏幕拖动开关",0),100,10);
        function onClick(e:sun.SunEvent):void
        {
            if(btn2.currentPage==0){
                this.panelMore.open();
            }else{
                this.panelMore.close();
            }
        }

        var total:number=5;
        var container:Sprite=new Sprite;
        var w:number=200;
        var cmask:Sprite=sun.SunUI.getRect(w,w);
        for(var i:number=0;i<total;i++){
            var box:Sprite=sun.SunUI.getRect(w,w,sun.Color.random);
            box.addChild(sun.SunUI.getRoundRectText(100,100,0,"模块"+i));
            box.x=i*w;
            container.addChild(box);
        }
        panel.addItem(cmask,200,300);
        panel.addItem(container,200,300);
        container.mask=cmask;

        var pnBar:sun.PrevNextBar=new sun.PrevNextBar();
        pnBar.total=total;
        pnBar.interval=280;
        //pnBar.layout(sun.Const.HORIZONTAL,280);
        panel.addItem(pnBar,150,400);
        pnBar.addEvent(sun.SunEvent.CHANGE,onPrevNext,this)  
        function onPrevNext(e:sun.SunEvent):void
        {
           var index:any=e.data;
           Tween.get(container).to({x:200-index*w},200)
        }
    }
}