let boton2 = document.getElementById("otro-meme");
boton2.disabled = true;

function getRandomImage(){
    var images =['./memes/1.jpg','./memes/2.jpg','./memes/3.jpg','./memes/4.jpg', './memes/5.jpg', './memes/6.jpg', '7.jpg', './memes/8.jpg', './memes/9.jpg', './memes/10.jpg', './memes/11.jpg', './memes/12.jpg', './memes/13.jpg', './memes/14.jpg', './memes/15.jpeg', './memes/16.jpeg', './memes/17.jpeg'];
    var image = images[Math.floor(Math.random()*images.length)];
    return image;
    
}
function displayRandomImage() {
    var htmlImage = document.getElementById("randomImage");
    htmlImage.src = getRandomImage();
    }

    //displayRandomImage();
        
function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let tag=document.getElementsByTagName("h2")[0].innerHTML= makeid(6);
    
    function required()  
    {
        var empt = document.forms["form1"]["captcha"].value; 
        if (empt == "")  
        {  
            let tag2=document.getElementsByTagName("h3")[0].innerHTML= "🔔 Porfavor, el CAPTCHA es necesario";
            tag2=document.getElementsByTagName("h3")[0].style.color='orange';
            return false;  
        }
        if (empt != tag)
        {
            let tag2=document.getElementsByTagName("h3")[0].innerHTML= "❌ CAPTCHA INCORRECTO, vuelva a intentar";
            tag2=document.getElementsByTagName("h3")[0].style.color='red';
            return false;  
        }
        if (empt == tag)
        {
            let boton1=document.getElementsByClassName("boton")[0].style.visibility ="hidden"; 
            boton1=document.getElementsByClassName("boton")[0].style.position ="absolute"; 
            boton2.disabled = false;
            let tag2=document.getElementsByTagName("h3")[0].innerHTML= "✅ CAPTCHA CORRECTO";
            tag2=document.getElementsByTagName("h3")[0].style.color='green';
            displayRandomImage();
            return false; 
        }
    }


    

