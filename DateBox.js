class DateBox{
    constructor(container, width, height, x, y, num, src, text){
        this.container=container;
        this.div;
        this.span; //날짜의 숫자를 담을 컨테이너(위치를 지정하기 위해)
        this.detail; //메모를 담을 div
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.num=num; //날짜, 숫자 표기
        this.icon; //아이콘 표기
        this.src=src; //아이콘의 이미지 경로
        this.text=text;//메모 표기

        this.div=document.createElement("div");
        this.span=document.createElement("span");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.border="1px solid rgb(240, 233, 247)";
        this.div.style.boxSizing="border-box";

        this.span.style.position="absolute";
        this.span.style.left=10+"px";
        this.span.style.top=10+"px";
        this.div.appendChild(this.span); 
        this.span.innerText=this.num; //날짜 텍스트 적용

        this.icon=document.createElement("img");
        this.icon.src=this.src;
        this.icon.style.width=25+"px";
        this.icon.style.position="absolute";
        this.icon.style.left=10+"px";
        this.icon.style.top=45+"px";

        this.detail=document.createElement("div");
        this.detail.style.width=80+"px";
        this.detail.style.height=28+"px";

        this.detail.style.position="absolute";
        this.detail.style.left=10+ "px";
        this.detail.style.top=70+ "px";
        this.detail.innerText=this.text; //메모 대입
        
        //부착하기
        this.div.appendChild(this.icon); //아이콘 부착
        this.div.appendChild(this.detail); //메모 부착

        this.container.appendChild(this.div); //날짜 사각형을 부착
        
   }
}