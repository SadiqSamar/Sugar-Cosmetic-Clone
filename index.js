function change()
     {
          document.getElementById('sub').innerText='SUBSCRIBED';
          alert("You Have Subscribed Us Thank You...")
     }
     
     let buttons=document.querySelectorAll(".selected")
     for(let i=0; i<buttons.length; i++)
     {
      buttons[i].addEventListener("click",function(){
          buttons[i].innerHTML="SELECTED"
          alert("Your item has been selected")
      });
     }

     let btn=document.querySelectorAll(".done")
     for(let i=0; i<btn.length; i++)
     {
        btn[i].addEventListener("click",function(){
            btn[i].innerHTML="CHOOSED"
            alert("Your item has been choosed")
        })
     }

     let handlebtn=document.querySelectorAll(".add")
     for(let i=0; i<handlebtn.length; i++)

     {
        handlebtn[i].addEventListener("click",function(){
            handlebtn[i].innerHTML="ADDED"
            alert("Your has been added")
        })
        
     }

     let shade=document.querySelectorAll("span")
     for (let i = 0; i < shade.length; i++) {
        shade[i].addEventListener("click",function(){
            shade[i].style.background="Red"
            shade[i].style.borderRadius="10px"
        })
        
     }