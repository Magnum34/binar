import $ = require("jquery");
import { Calculator } from './calculator';


export class Decimal extends Calculator {


    
    public getDisabled(): null {
        let input = $('input');
        input.each(function(){
            let name = $(this).attr('id');
            if(name != 'dec'){
                $(this).prop('disabled', true);
            }else{
                 $(this).prop('disabled', false);
            }
        });
        return null;
    }



}