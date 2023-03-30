var numberofbuttons=document.querySelectorAll(".drum").length;
for( var i = 0; i <numberofbuttons;i++ )
{
document.querySelectorAll(".drum")[0].addEventListener("click",function handleClick(){

this.style.color="White";
var audio= new Audio("sounds/tom-1.mp3");
audio.play(); 

});
document.querySelectorAll(".drum")[1].addEventListener("click",function handleClick(){

    this.style.color="White";
    var audio1= new Audio("sounds/tom-2.mp3");
    audio1.play(); 
    
    });
    document.querySelectorAll(".drum")[2].addEventListener("click",function handleClick(){

        this.style.color="White";
        var audio3= new Audio("sounds/tom-3.mp3");
        audio3.play(); 
        
        });
        document.querySelectorAll(".drum")[3].addEventListener("click",function handleClick(){

            this.style.color="White";
            var audio3= new Audio("sounds/tom-4.mp3");
            audio3.play(); 
            
            });
            document.querySelectorAll(".drum")[4].addEventListener("click",function handleClick(){

                this.style.color="White";
                var audio4= new Audio("sounds/crash.mp3");
                audio4.play(); 
                
                });
                document.querySelectorAll(".drum")[5].addEventListener("click",function handleClick(){

                    this.style.color="White";
                    var audio5= new Audio("sounds/kick-bass.mp3");
                    audio5.play(); 
                    
                    });
                    document.querySelectorAll(".drum")[6].addEventListener("click",function handleClick(){

                        this.style.color="White";
                        var audio6= new Audio("sounds/snare.mp3");
                        audio6.play(); 
                        
                        });
}
