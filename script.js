let a = 0;





let items = [
  {
    Name: "Sprint Men's Sports Shoe",
    price: 30,
    type: "Shoe",
    pic:"pic/shoes/sh/2e8cd738-d0d3-4e1f-a6e4-d4ca559a9b37"
  },
 {
    Name: "Sprint Men's Sports Shoe",
    price: 36,
    type: "Shoe",
  },
  {
    Name: "Sprint Men's Sports Shoe",
    price: 28,
    type: "Shoe",
  },
   {
    Name: "Sprint Men's Sports Shoe",
    price: 32,
    type: "Shoe",
  },
];



function af() {
  let to=  document.createElement('div');
   to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[0].Name}</div>  <div>Price- ${items[0].price}$</div> <div>Type- ${items[0].type}</div> </div> `;
 
   document.querySelector('.cart-items').append(to)

 
}

function afa() {
  let to=  document.createElement('div');
   to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[1].Name}</div>  <div>Price- ${items[1].price}$</div> <div>Type- ${items[1].type}</div></div> `;
   document.querySelector('.cart-items').append(to)
 
}

function afb() {
  let to=  document.createElement('div');
   to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px">  <div>Name- ${items[2].Name}</div>  <div>Price- ${items[2].price}$</div> <div>Type- ${items[2].type}</div></div> `;
   document.querySelector('.cart-items').append(to)
 
}

function afc() {
  let to=  document.createElement('div');
   to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[3].Name}</div>  <div>Price- ${items[3].price}$</div> <div>Type- ${items[3].type}</div></div> `;
   document.querySelector('.cart-items').append(to)
 
}

function ber(){
  document.querySelector('.cart-items').classList.add("cca")
  document.querySelector('.ca').classList.toggle("cate");


}

function be(){
  document.querySelector('.cart-items').classList.remove("cca")
  document.querySelector('.ca').classList.remove("cate")
}

function add() {

  a =a+1;
   document.querySelector(".hold").innerHTML = a ;
 
 
   document.querySelector('.total_it').innerHTML =`Total items : ${a}`
 
   
 }

 