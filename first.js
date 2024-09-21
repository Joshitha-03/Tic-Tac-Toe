let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgcontainer =document.querySelector(".msgcontainer");
let reset =document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let turn0 =true;
let winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn0){
        box.innerHTML="O";
        turn0=false;
      }
      else{
        box.innerHTML="X";
        turn0=true;
      }
      box.disabled=true;
      count++;
      checkwinner();
      let iswinner = checkwinner();
    if(count==9&&!iswinner){
    msgcontainer.classList.remove("hide");
    msg.innerText="Game is draw,please try again";
}
    })
})

const checkwinner =()=>{
    for(pattern of winpattern){
        let pos1= boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" &&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showwinner(pos1);
                return true;
            }
        }
    }
  return false;
}
const disable=()=>{
    for(box of boxes){
        box.disabled=true;
       }
}
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
       }
}
newgame.addEventListener("click",()=>{
    msgcontainer.classList.add("hide");
    for(box of boxes){
        box.innerText="";
    }
    turn0=true;
     enable();
})
reset.addEventListener("click",()=>{
    msgcontainer.classList.add("hide");
    for(box of boxes){
        box.innerText="";
    }
    turn0=true;
     enable();
})
const showwinner=(pos1)=>{
     disable();
       msgcontainer.classList.remove("hide");
       msg.innerText=`Congratulations, Winner is player ${pos1}`;
}
