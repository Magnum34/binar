
import $ = require("jquery");

export class Calculator {

    constructor(select : HTMLElement){
        select.addEventListener("change",function(){
            let type = $(this).val();

        });
    }


}