function openwin1(){
   w1 = window.open("https://www.ecosia.org/search?q=search1")
}

function closewin1(){
    w1.close()
}

function openwin2(){
   w2 = window.open("https://www.ecosia.org/search?q=search1")
}

function closewin2(){
    w2.close()
}

setInterval(function(){setTimeout(openwin1 ,1000)
setTimeout(closewin1 ,10000)
setTimeout(openwin2 ,28000)
setTimeout(closewin2 ,40000)} ,60000)