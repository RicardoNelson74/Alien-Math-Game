//alert('it works')

function randomquestion()
{
    let n1 = 1 + (Math.floor(Math.random() * 25)) ;
    let n2 = 1 + (Math.floor(Math.random() * 9));
    let operator = ["+"][Math.floor(Math.random()*1)];
    return `${n1 } ${operator}  ${n2}` //== eval( n1  + operator + n2)

}


function main()
{
    let add =0;
    let marginLeftPx=0;
    //const ufo = document.querySelector('#ufo');
    const ufo1 = document.querySelector('#ufo1');
    const ufo2 = document.querySelector('#ufo2');
    const ufo3 = document.querySelector('#ufo3');
    const ufo4 = document.querySelector('#ufo4');
    const ufo5 = document.querySelector('#ufo5');
    
    let div = document.querySelector('body');

    ufo1.innerHTML = randomquestion();
    ufo2.innerHTML = randomquestion();
    ufo3.innerHTML = randomquestion();
    ufo4.innerHTML = randomquestion();
    ufo5.innerHTML = randomquestion();

    setInterval(function(){
        add+=10;
        ufo1.style.marginTop=`${add}px`;
        ufo3.style.marginTop=`${add}px`;
        ufo5.style.marginTop=`${add}px`;
        //console.log(`output`)
        },2000);

    setInterval(function(){
        add+=50;
        ufo2.style.marginTop=`${add}px`;
        ufo4.style.marginTop=`${add}px`;
        console.log(`output`)
        },4000);

    let i = 10
    const canon = document.querySelector('#canon');
    const bullet = document.querySelector('#bullet');
    let keycode=i || i.keycode;

   window.addEventListener('keydown',function(event)
   {

       

       console.log(event);
      
       switch (event.key)
       {
           case 'ArrowLeft' :
            marginLeftPx = marginLeftPx - 10;
            canon.style.marginLeft = `${marginLeftPx}px`;
                
           break;
           case 'ArrowRight' : 
           marginLeftPx = marginLeftPx + 10;
           canon.style.marginLeft = `${marginLeftPx}px`;
                
           break;
           case 'ArrowDown':
            marginLeftPx = marginLeftPx + 50;
            bullet.style.marginBottom = `${marginLeftPx}px`;
            
        }
    });

   
   }  


 main()