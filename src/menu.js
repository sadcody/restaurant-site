import { first } from "lodash";
import { resetPage ,content } from "./index";
import starterBurger from "./resources/starterBurger.png";
import biggBurger from "./resources/bigBurger.png";
import premiumBurg from "./resources/premiumBurger.png";

export default function menuPage(){
    resetPage();

    
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Food Menu";
    const menuObj = document.createElement("div");
    menuObj.style.display = "flex";
    menuObj.style.flexDirection = "row";
    
    
    content.style.display = "flex";
    content.style.flexDirection = "column";
    


    content.appendChild(menuTitle);
    content.appendChild(menuObj);
    




    class menuObjects{
        constructor(foodName , foodPrice, foodImage ){
            this.foodName = foodName;
            this.foodPrice = foodPrice;
            this.foodImage = foodImage;
                }
    }

    const firstBurger = new menuObjects("Starter","$2.99",starterBurger);
    const bigBurger = new menuObjects("bigBurger", "$5.99",biggBurger);
    const premiumBurger = new menuObjects("Premium Burger","$12.99",premiumBurg);
    

    const menuItems = [firstBurger , bigBurger , premiumBurger];
    console.log(menuItems.length);


   
  for(let i = 0 ; i < menuItems.length ; i++){
    const div = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const image = document.createElement("img");
        image.src = `${menuItems[i].foodImage}`;
        image.style.width = "13em";
        image.style.height = "10.5em"
        image.style.objectFit = "cover";
        image.style.marginBottom = "2.5rem"
        name.textContent = `${menuItems[i].foodName}`;
        price.textContent = `${menuItems[i].foodPrice}`;
        name.style.color = "white";
        price.style.color = "white";



        div.style.margin = "2em";
        div.style.height = "20em"
        div.style.border = "0.5px solid orange"
        div.style.padding = "1rem";

        menuObj.appendChild(div);
      div.appendChild(image);  
      div.appendChild(name);
      div.appendChild(price);

};


};