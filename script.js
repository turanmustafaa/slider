var models= [
    {
        name: 'bmw',
        image: 'img/bmw.jpg',
        link:'https://mail.google.com/mail/u/0/#inbox'
    },
    {
        name: 'mazda',
        image: 'img/mazda.jpg',
        link:'https://mail.google.com/mail/u/0/#inbox'
    },
    
    {
        name: 'volvo',
        image: 'img/volvo.jpg',
        link:'https://mail.google.com/mail/u/0/#inbox'
    },
    {
        name: 'skoda',
        image: 'img/skoda.jpg',
        link:'https://mail.google.com/mail/u/0/#inbox'
    },
    {
        name: 'bmw',
        image: 'img/honda.jpg',
        link:'https://mail.google.com/mail/u/0/#inbox'
    }
    
    

]

var index = 0;
var slaytcount = models.length;

var interval;
var  settings ={
    duration: '1000',
    random: false
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
index--;
showslide(index);

});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
index++;
showslide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    var prev;
interval = setInterval(function(){
if(settings.random){
    do{
        index = Math.floor( Math.random() * slaytcount);
}while(index==prev)
prev=index;
    }
    else{
        if(slaytcount == index +1){
            index = 0;
        }
        index++;
    }
showslide(index);
console.log(index);
},settings.duration)

}


function showslide(i){

    
 index = i;

      if(i<0){
          index = slaytcount -1;
      }

      if(i >= slaytcount){
   index= 0 ;         
      }
    

document.querySelector('.card-title').textContent = models[index].name ;

document.querySelector('.card-img-top').setAttribute('src',models[index].image);

document.querySelector('.card-link').setAttribute('href',models[index].link);
};