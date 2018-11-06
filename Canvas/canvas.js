/**
 * 作者：sheenden0722
 * 日期：2018-11-06
 * 邮件：
 * 文件说明：React与Canvas
 */
import React from 'react';
let c = undefined;
let parts=[];

const colors=[
    '#00bdff',
    '#4d39ce',
    '088eff'
];

let mousePosition={
    x:window.innerWidth/2,
    y:window.innerHeight/2
};

function particular(x,y,r,color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.r = r;
    this.veliocity = 0.04;
    this.radians = Math.random() * Math.PI * 2;
    this.radius = randomNumberFromRange(70,140);
    this.lastMousePosition={x:x,y:y};

    //drawing
    this.draw=lastPoint=>{
        c.beginPath();
        c.strokeStyle = color;
        c.lineWidth = this.r;
        c.moveTo(lastPoint.x,lastPoint.y);
        c.lineTo(this.x,this.y);
        c.stroke();
        c.closePath();
    }

    //updating
    this.update=()=>{
        //making animation more smooth
        const lastPoint = {x:this.x, y:this.y};

        //drag effect
        this.lastMousePosition.x += (mousePosition.x - this.lastMousePosition.x) * 0.05;
        this.lastMousePosition.y += (mousePosition.y - this.lastMousePosition.y) * 0.05;


        this.radians += this.veliocity;
        this.x = this.lastMousePosition.x + Math.cos(this.radians) * this.radius;
        this.y = this.lastMousePosition.y + Math.sin(this.radians) * this.radius;
        this.draw(lastPoint);
    }
}

function init(){
    for(let i=0;i < 60; i++){
        parts.push(
            new particular(
                mousePosition.x,
                mousePosition.y,
                getRandomRadius(),
                getRandomColor()
            )
        );
    }
}

function randomNumberFromRange(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomRadius(){
    return Math.random() * 5 + 1;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length - 0.01)];
}

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255,0.06)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    parts.forEach(par => {
        par.update();
    });
}


class CanvasLayout extends React.PureComponent {

    componentDidMount(){
         let canvas = document.querySelector('canvas');
         c = canvas.getContext('2d');

         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         canvas.style = 'position:absolute;background:gainsboro;';
         window.addEventListener('resize',function(){
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
         });

         window.addEventListener('mousemove',(mouse)=>{
             mousePosition.x = mouse.x;
             mousePosition.y = mouse.y;
         });
         init();
         animate();
    }

    render() {
        return (
            <div className={styles.container}>
                <canvas/>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <span className={styles.title}>React与Canvas</span>
                    </div>
                    <UserName name="argusername" placeholder="用户名" defaultValue=""/>
                    <Password name="arguserpass" placeholder="密码" defaultValue=""/>
                </div>
            </div>
        );
    }
}

export default CanvasLayout;
