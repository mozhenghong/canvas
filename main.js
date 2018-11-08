var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var painting = false

//工具函数

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
//按下鼠标
var lastPoint = {
    x: undefined,
    y: undefined
  }
canvas.onmousedown=function(a){
    painting = true
    var x = a.clientX
    var y = a.clientY
    lastPoint = {
        "x": x,
        "y": y
      }
    // drawCircle(x,y,5)
}
//移动鼠标
canvas.onmousemove = function(a){
    if(painting){
        var x = a.clientX
        var y = a.clientY
        var newPoint = {
            "x": x,
            "y": y
          }
        //   drawCircle(x,y,5)
          drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
          lastPoint = newPoint
    }
}

//松开鼠标
canvas.onmouseup = function(z){
    painting = false
}
