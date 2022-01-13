
function add()
{
    var a = document.getElementById("first-inp2").value
    var b = document.getElementById("second-inp2").value
    document.getElementById("ans").innerHTML= (+a + +b)
}
function sub()
{
    var a = document.getElementById("first-inp2").value
    var b = document.getElementById("second-inp2").value
    document.getElementById("ans").innerHTML= (a-b)
}
function multi()
{
  var a = document.getElementById("first-inp2").value
   var b = document.getElementById("second-inp2").value
    document.getElementById("ans").innerHTML= (a*b)
}
function div()
{
     var a = document.getElementById("first-inp2").value
    var b = document.getElementById("second-inp2").value
    document.getElementById("ans").innerHTML= (a/b)
}
function reset()
{
    document.getElementById("ans").innerHTML=0
}
