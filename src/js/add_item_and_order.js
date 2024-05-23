
import { menu } from './get_menu';




//variabler för meddelanden och eventlistener 
const orderDiv = document.getElementById("menu-div");

let order = [{}];

document.addEventListener("DOMContentLoaded", (e) => {
    //Eventlistener som lyssnar efter klick på ta bort knapparna för cv, initierar funktionen removeCV och skickar med id/index som argument
    orderDiv.addEventListener("click", (e) => {
        if (e.target.classList.contains("order-item")) {
            let id = e.target.id;
            order.push({indexId: id});
            document.getElementById(e.target.id).style.backgroundColor = "blue";
            //addToOrder(id);
            console.log(e.target.id);
        }
    });
});

//Funktionen skickar med id/index till delete fetch-funktionen och väntar på svar. När svar nås skrivs ett meddelande ut på skärmen
/*async function (id) {
    let data = await menuDelete(id);
    menu();
    alert2.innerHTML = `En menyrad är borttaget från databasen.`;
}
*/




//Post fetch-anrop som tar in ett objekt som parameter
export async function menuPost(order) {
      let response = await fetch('https://project-dt207g.azurewebsites.net/protected/order/add', {
            method: 'POST',
            headers: {
                  'authorization': 'Bearer ' + sessionStorage.getItem("token"),
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
      });
      let data = await response.json();
      //När det är klart skrivs ett meddelande ut på skärmen att inlägget är sparat
      cart.style.display = "block";
      callOrder();
}

function callOrder(){
    order();
};