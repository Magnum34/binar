import $ = require("jquery");
import { Calculator } from './calculator';


export class Quaternary extends Calculator {

    public LimitMinMax(): null {
        $("#quaternary").attr("max", "3");
        $("#quaternary").keydown(function (e) {
            let number = parseInt(String.fromCharCode(e.keyCode));
            if ((number > 3 || isNaN(number) || e.keyCode == 44 ) &&
            ( e.keyCode != 46 && e.keyCode != 8 )
             ) {
                e.preventDefault();
            }
        });
        return null;
    }



    public Calculation(): null {
         $("#quaternary").keyup(function (e) {
            let value = $(this).val();
            if (value != '') {
                let dec = parseInt(value, 4);
                $("#dec").val(dec);
                let bin = (dec >>> 0 ).toString(2);
                $("#bin").val(bin);
                let hex = (dec >>> 0 ).toString(16);
                $("#hex").val(hex);
                let oct = (dec >>> 0 ).toString(8);
                $("#oct").val(oct);
            }
        });
        return null;
    }

    public getDisabled(): null {
        let input = $('input');
        input.each(function () {
            let name = $(this).attr('id');
            if (name != 'quaternary') {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
        return null;
    }



}