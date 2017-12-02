import $ = require("jquery");
import { Calculator } from './calculator';


export class Hexal extends Calculator {

    
    public LimitMinMax(): null {
        throw new Error("Method not implemented.");
    }


    public Calculation(): null {
        throw new Error("Method not implemented.");
    }


    public getDisabled(): null {
        let input = $('input');
        input.each(function () {
            let name = $(this).attr('id');
            if (name != 'hex') {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
        return null;
    }



}