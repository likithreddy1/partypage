function generateRandomColor()
{
    return "#"+Math.floor(Math.random()*16778532).toString(16);
}
function changeColor()
{
    let element = document.getElementById("div_")
    element.style.backgroundColor=generateRandomColor();
}
function changeText()
{
    if(document.getElementById("TEXT").innerHTML=="ON THE FLOOR BABY!!!")
    {
        document.getElementById("TEXT").innerHTML="HIT IT HARD BABY!!!";
    }
    else if(document.getElementById("TEXT").innerHTML=="HIT IT HARD BABY!!!")
    {
        document.getElementById("TEXT").innerHTML="ROCK THE PARTY BABY!!!";
    }
    else if( document.getElementById("TEXT").innerHTML=="ROCK THE PARTY BABY!!!")
    {
        document.getElementById("TEXT").innerHTML="ON THE FLOOR BABY!!!";
    }
}
function changeeverything()
{
    generateRandomColor();
    changeColor();
    changeText();
}
setInterval(changeeverything,200);