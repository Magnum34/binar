import $ = require("jquery");
import { Calculator } from './calculator';


export class Quaternary extends Calculator {


    public getDisabled(): null {
        let input = $('input');
        input.each(function(){
            let name = $(this).attr('id');
            if(name != 'quaternary'){
                $(this).prop('disabled', true);
            }else{
                 $(this).prop('disabled', false);
            }
        });
        return null;
    }



}