
class MainSun extends sun.BasicView
{
    private father:DisplayObjectContainer;
     protected render():void
    {
        //初始化舞台宽高
        super.render();
        //初始化游戏
        sunGame.Game.init(this.stage);
        //创建背景
        this.createBackground(0xf7f5fb);
        var names:string[]=["基础组件","提示模块","循环移动","动画与贴图模版","公告通知"];
        var btns:any[]=[];
        for(var i:number=0;i<names.length;i++){
            var btn:sun.BasicButton = new sun.BasicButton(sun.SunUI.getRoundRect(300,60,sun.Color.skinNormal),sun.SunUI.getRoundRect(300,60,sun.Color.skinDown));
            btn.skinAutoScale=false;
            btn.label=names[i];//按钮名称
            btn.name=i.toString();//按钮索引值
            // btn.x=(this.stageWidth-btn.width)>>1;
            // btn.y=i*(btn.height+10);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
            this.addChild(btn);
            btns.push(btn);
        }
        //简单布局
        sun.SimpleLayout.displayRank(btns,2,10,10,10,10);
        this.father=this.parent;//this.parent 是 Main.ts
   
    }
    protected click(e:egret.TouchEvent):void
    {
        var btn:sun.BasicButton=e.currentTarget;
        this.removeFromParent();
        var view:sun.SunContainer;
        switch(parseInt(btn.name)){
            case 0:view = new SunBasicView();           break;
            case 1:view = new GameAlert();              break;
            case 2:view = new GameImageLoop();          break;
            case 3:view = new GameAnimation;            break;
            case 4:view = new GameNotify();             break;
         }
        this.father.addChild(view);
        view.addEvent(sun.SunEvent.CLOSE,this.onClose,this);
    }
    private onClose(e:sun.SunEvent):void
    {
         this.father.addChild(this);
    }
}