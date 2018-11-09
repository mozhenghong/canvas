var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var using = false
//设置画板大小
function canvasSize(canvas){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight 
}
canvasSize(canvas)
window.onresize = function(a){
    canvasSize(canvas)
}
//画圆
function drawCircle(x,y,radius){
    ctx.beginPath()
    ctx.fillSytle = "black"
    ctx.arc(x,y,radius,0,Math.PI*2)
    ctx.fill()
}

//画线
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.strokeStyle = "black"
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}

//触发橡皮擦
var eraserEnabled = false
function usingEraser(){
    eraser.onclick = function(){
        eraserEnabled = true
        actions.className = 'actions x'
    }
    brush.onclick = function(){
        eraserEnabled = false
        actions.className = 'actions'
    }
}
usingEraser()

//键盘事件
function mouseEvent(){
    //按下鼠标
    var oldPoint={
        'x': undefined,
        'y':undefined
    }
    document.onmousedown=function(a){
        using = true
        var x=a.clientX
        var y=a.clientY
        if(eraserEnabled){
            ctx.clearRect(x-5,y-5,10,10)
        }else{
            oldPoint ={
                'x':x,
                'y':y
            }
            // drawCircle(x,y,5)
        }   
    }
    //移动鼠标
    document.onmousemove =function(a){
        if(using){
            var x=a.clientX
            var y=a.clientY
            if(eraserEnabled){
                ctx.clearRect(x-5,y-5,10,10)
            }else{
                var newPoint={
                    'x': x,
                    'y': y
                }
                drawLine(oldPoint.x,oldPoint.y,newPoint.x,newPoint.y)
                oldPoint = newPoint
            }
        }
    }
    //松开鼠标
    document.onmouseup = function(a){
        using = false
    }
}

mouseEvent()