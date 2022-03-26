
$(document).ready(function()
{

 

    $('.message a').click(function()
    {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        
    });


    let parameters = {
        count : false,
        letters : false,
        numbers : false,
        special : false
    }

    let strengthBar = document.getElementById("strength-bar");
    let msg = document.getElementById("msg");
    

    $('#password').keyup(function()
    {
    

        let password = $("#password").val();

        parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
        parameters.numbers = (/[0-9]+/.test(password))?true:false;
        parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
        parameters.count = (password.length > 7)?true:false;
    
        let barLength = Object.values(parameters).filter(value=>value);
    
        console.log(Object.values(parameters), barLength);
    
        strengthBar.innerHTML = "";
        for( let i in barLength){
            let span = document.createElement("span");
            span.classList.add("strength");
            strengthBar.appendChild(span);
        }
    
        let spanRef = document.getElementsByClassName("strength");
        for( let i = 0; i < spanRef.length; i++){
            switch(spanRef.length - 1){
                case 0 :
                    spanRef[i].style.background = "#ff3e36";
                    msg.textContent = "Your password is very weak";
                    break;
                case 1:
                    spanRef[i].style.background = "#ff691f";
                    msg.textContent = "Your password is weak";
                    break;
                case 2:
                    spanRef[i].style.background = "#ffda36";
                    msg.textContent = "Your password is good";
                    break;
                case 3:
                    spanRef[i].style.background = "#0be881";
                    msg.textContent = "Your password is strong";
                    break;
            }
        }

    
    });


    $("#toggle").click(function()
    {
        let password = $("#password");
        let eye =  $("#toggle");

    if(password.attr("type") == "password"){

        password.attr("type","text");
        eye.css({"color":"#0be881"});
    }
    else{
        
        password.attr("type","password");
        eye.css({"color":"#808080"});
    }


    });


    var n_r = $("#name").val();
    var p_r = $("#password");
    var e_r =$("#email").val();

    var n_r2 = $("#name_2").val();
    var p_r2 = $("#password_2");

    var cookiesarray;
    var a;
    var strarray;


    $("#crtbtn").click(function()
    {

        if(n_r.length!=0 || encodeURI(p_r.val()).length!=0 ||  e_r.length!=0 || $('#email').val().indexOf('@')>-1)
        {
             strarray=[encodeURI($("#name").val())," ",encodeURI(p_r.val())," ",encodeURI($("#email").val())];
    

             $.cookie('registartion',null, {path:'/'});

             for(var cookie in $.cookie('registartion',strarray, {expires: 1,path:'/'})) {
                $.removeCookie(cookie);
             }

            a= $.cookie('registartion',strarray, {expires: 1,path:'/'});
    
    
            cookiesarray=a.toString().replaceAll("%2C","").replaceAll("%40","@").replaceAll("%20"," ");
           
    
            alert(cookiesarray);

        }

        else
        {
            $.cookie('registartion',null, {path:'/'});

            for(var cookie in $.cookie('registartion',strarray, {expires: 1,path:'/'})) {
                $.removeCookie(cookie);
             }

            if(n_r.length==0)
            {

                $("#name").attr(
                {
                    "style":" box-shadow: 0 0 5px 2px rgb(255, 0, 0); font-size:2em;",
                    "title" : "jQuery - Set Content and Attributes"
            
                });

            } 

            if(encodeURI(p_r.val()).length==0)
            {

                $("#password").attr(
                {
                    "style":" box-shadow: 0 0 5px 2px rgb(255, 0, 0); font-size:2em;",
                    "title" : "jQuery - Set Content and Attributes"
            
                });

            } 

            
            if(e_r.length==0)
            {

                $("#email").attr(
                {
                    "style":" box-shadow: 0 0 5px 2px rgb(255, 0, 0); font-size:2em;",
                    "title" : "jQuery - Set Content and Attributes"
            
                });

            } 
        
            setTimeout(() => {

                window.location.reload();

            }, 1000);
           

        }

        

    });


    $("#loginbtn").click(function()
    {
        if(n_r2.length!=0 || encodeURI(p_r2.val()).length!=0)
        {
  

            if($("#name_2").val()==$("#name").val() && $("#password_2").val()==$("#password").val())
            {
             

                    alert(cookiesarray);

                    for (let index = 0; index < cookiesarray.length; index++) {
                      
                
                   
                            
                            console.log(cookiesarray);
                        
                        
                    }
                
            }

        }

        else
        {

            if(n_r2.length==0)
            {

                $("#name_2").attr(
                {
                    "style":" box-shadow: 0 0 5px 2px rgb(255, 0, 0); font-size:2em;",
                    "title" : "jQuery - Set Content and Attributes"
            
                });

            } 

            if(encodeURI(p_r2.val()).length==0)
            {

                $("#password_2").attr(
                {
                    "style":" box-shadow: 0 0 5px 2px rgb(255, 0, 0); font-size:2em;",
                    "title" : "jQuery - Set Content and Attributes"
            
                });

            } 

            setTimeout(() => {

                window.location.reload();

            }, 1000);

        

           

        }

    });

 

    
});
