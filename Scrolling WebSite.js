let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let moun3 = document.getElementById('moun3')
let moun4 = document.getElementById('moun4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let omar = document.querySelector('.omar')

window.onscroll = function()
{
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    moun3.style.top = value*2 +'px';
    moun4.style.top = value*2 + 'px';
    river.style.top = value +'px';
    boat.style.top= value + 'px';
    boat.style.left= value*2.5 +'px'
    omar.style.fontSize= value +'px'
    if(scrollY >=110){
        omar.style.fontSize= 110 +'px';
        omar.style.position='fixed';
        if(scrollY>=412){
            omar.style.display='none';
        }else{
            omar.style.display='block'
        }
    }

    if(scrollY>=177){
        document.querySelector('.photo').style.background='linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.photo').style.background='linear-gradient(#200016,#10001f)'
    }
}

















