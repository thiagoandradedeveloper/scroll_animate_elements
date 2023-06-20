window.onload = function(){
    const itens = document.querySelectorAll("[data-animate]");

    window.addEventListener('scroll',function(){
        let windowTop = Math.floor(window.scrollY);
        
        itens.forEach(function(element,index){
            
            console.log(windowTop,element.offsetTop,index)

            if(windowTop > element.offsetTop*0.75){
                element.classList.add('animation')
            } else {
                element.classList.remove('animation')
            }
        })
    })
}