var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var painting = false
var eraserEnabled = false

//工具函数

function getWindowResize(canvas){
    var pageWidth= document.documentElement.clientWidth
    var pageHeight= document.documentElement.clientHeight
    canvas.width =pageWidth
    canvas.height=pageHeight
}

function drawCircle(x,y,radius){
    ctx.beginPath()
    ctx.fillStyle='#000'
    ctx.arc(x,y,radius,0,7)
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineWidth=5
    ctx.fillStyle='#000'
    ctx.lineTo(x2,y2)
    ctx.stroke()
    ctx.closePath()
}

//使画板全屏
setCanvasSize()
function setCanvasSize(){
    getWindowResize(canvas)
    window.onresize = function(x){
        getWindowResize(canvas)
    }
}

//mouse事件

setMouseEvent(canvas)
function setMouseEvent(canvas){
        //按下鼠标
    var lastPoint = {
        x: undefined,
        y: undefined
    }
    canvas.onmousedown=function(a){
        var x = a.clientX
        var y = a.clientY
        painting = true
        if(eraserEnabled){
            ctx.clearRect(x-5,y-5,10,10)
        }else{
            lastPoint = {
                "x": x,
                "y": y
            }
            }
        // drawCircle(x,y,5)
    }
    //移动鼠标
    canvas.onmousemove = function(a){
        var x = a.clientX
        var y = a.clientY
        if(painting){
            if(eraserEnabled){   
                ctx.clearRect(x-5,y-5,10,10)
            }else{
            var newPoint = {
                "x": x,
                "y": y
            }
            //   drawCircle(x,y,5)
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }
        }
    }
    //松开鼠标
    canvas.onmouseup = function(z){
        painting = false
    }
}

//是否触发橡皮擦
usingEraser(eraser,brush)
function usingEraser(eraser,brush){
    eraser.onclick = function(aa){
        eraserEnabled = true
        actions.className="actions x"
    }
    brush.onclick=function(bb){
        eraserEnabled = false
        actions.className="actions"
    }
}


