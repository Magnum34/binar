
import $ = require("jquery");

export class Calculator {

    constructor(select : HTMLElement){
        select.addEventListener("change",function(){
            console.log($(this).val);
        });
    }


}