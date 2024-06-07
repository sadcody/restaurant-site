import { resetPage,defaultPage , content} from "./index.js";

export default function homePage(){
    resetPage();
   content.style.flexDirection = "row";

    defaultPage();
    
};