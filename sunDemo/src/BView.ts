class BView extends sun.PanelBar
{
    protected canvasY:number;//画布y坐标
    protected canvas:Sprite;//画布
    /** start 作用：设置舞台宽、高以及创建标题关闭容器背景 */
    public constructor()
    {
        super(0,0);
    }
    protected render():void
    {
        super.render();
        this.canvasY=this.topHeight;
    }
    /** end */
    /** 创建按钮 */
    protected setButton(label:string,x:number,y:number):void
    {
        var btn:sun.BasicButton=new sun.BasicButton();
        btn.label=label;
        this.addItem(btn,x,y);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
    }
    /** 点击事件 */
    protected onClick(e:egret.TouchEvent):void
    {
        
    }
    /** 创建关闭按钮 */
    protected createCloseBtn():void
    {
        var btn:sun.BasicButton=new sun.BasicButton(sun.SunUI.getRoundRect(60,60,sun.Color.skinNormal),sun.SunUI.getRoundRect(60,60,sun.Color.skinDown));
        btn.label="关闭";
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)
    }
    /** 关闭事件 */
    protected close(e:egret.TouchEvent):void
    {
        this.dispEvent(sun.SunEvent.CLOSE)
        this.removeFromParent(true);
    }
    /** 创建画布 */
    protected createCanvas():void
    {
        //创建画布背景
        var canvasBg:Sprite=this.createRect(this.stage.stageWidth,this.stage.stageHeight-this.canvasY,sun.Color.white);
        canvasBg.y=this.canvasY;
        this.addChild(canvasBg);
        //创建画布与遮罩
        var maskRect:Sprite=this.createRect(this.stage.stageWidth,this.stage.stageHeight-this.canvasY,sun.Color.white);
        maskRect.y=this.canvasY;
        this.canvas=this.createRect(this.stage.stageWidth,this.stage.stageHeight,sun.Color.white);
        this.addChild(this.canvas);
        this.canvas.mask=maskRect;
    }
    /** 弹出提示 */
    protected createAlert(value:string):void
    {
        var alert:sun.AlertBar=new sun.AlertBar(value);
        alert.addEvent(sun.SunEvent.CLOSE,this.closeAlert,this)
        this.addChild(alert);
    }
    /** 关闭提示 */
    protected closeAlert(e:sun.SunEvent):void
    {

    }
    /** 添加标题内容 */
    protected createTitle(title:string,y:number=0,x:number=0):void
    {
        this.addItem(new sun.Label(title,0),x,y);
    }
    /** 获取随机数组 */
    public getRandomArray(array:any[]):any[]
    {
        let value:any[]=[];
        let copy:any[]=array.concat();
        while(copy.length>0){
            let index:number=Math.floor(Math.random()*copy.length);
            value.push(copy.splice(index,1)[0]);
        }
        return value;
    }
}
