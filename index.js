
let initialprice =  document.querySelector('#initial-price') ;
let initialstock =  document.querySelector('#initial-stock') ; 
let currentprice = document.querySelector('#current-price') ;
let submitbtn = document.querySelector('#sumbit') ; 
let output = document.querySelector('#output') ;    
submitbtn.addEventListener('click',clickHandeler) ; 


function clickHandeler () {
    let ip = Number(initialprice.value) ; 
     let qty =Number( initialstock.value ); 
     let cp = Number(currentprice.value );   
     calculateprofitloss(ip,qty,cp) ;
}
        function calculateprofitloss (initial,quantity,current) {
            if (initial > current) {   
                let loss = ((  initial - current) * quantity).toFixed(2) ;
             let Losspercentage = ( (loss /initial) * 100).toFixed(2);   
             output.innerText= "the loss is" + loss + "and the loss percentage is" + Losspercentage ; 
 } 
 else if    (current> initial ) {
                 let profit = ((  current - initial) * quantity).toFixed(2) ; 
                 let profitpercentage = ( (profit * initial) * 100).toFixed(2) ; 
                 output.innerText= "the profit is" + profit + "and the profit percentage is" + profitpercentage ;  
                    } 
             else {
                 output.innerText= "No Pain No Gain" ; 
                 
             }  

         }