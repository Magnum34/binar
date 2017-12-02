import $ = require("jquery");
import { Calculator } from './calculator';


export class Octal extends Calculator {

    public LimitMinMax(): null {
        $("#oct").attr("max", "7");
        $("#oct").keydown(function (e) {
            let number = parseInt(String.fromCharCode(e.keyCode));
            if ((number > 7 || isNaN(number) || e.keyCode == 44 ) &&
            ( e.keyCode != 46 && e.keyCode != 8 )
             ) {
                e.preventDefault();
            }
        });
        return null;
    }


    public Calculation(): null {
        $("#oct").keyup(function (e) {
            let value = $(this).val();
            if (value != '') {
                let dec = parseInt(value, 8);
                $("#dec").val(dec);
                let bin = (dec >>> 0 ).toString(2);
                $("#bin").val(bin);
                let hex = (dec >>> 0 ).toString(16);
                $("#hex").val(hex);
                let quaternary = (dec >>> 0 ).toString(4);
                $("#quaternary").val(quaternary);
            }
        });
        return null;
    }
    
    public getDisabled(): null {
        let input = $('input');
        input.each(function () {
            let name = $(this).attr('id');
            if (name != 'oct') {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
        return null;
    }



}