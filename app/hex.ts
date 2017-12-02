import $ = require("jquery");
import { Calculator } from './calculator';


export class Hexal extends Calculator {


    public LimitMinMax(): null {
        $("#hex").on("keydown input", function (e) {
            let ascii =e.keyCode;
            if (( (( ascii < 48 || 57 < ascii ) && ( ascii < 65 || 70 < ascii ) )|| e.keyCode == 44 ) &&
            ( e.keyCode != 46 && e.keyCode != 8   && e.keyCode != 37 && e.keyCode != 39 )
             ) {
                e.preventDefault();
            }
        });
        return null;
    }


    public Calculation(): null {
        $("#hex").keyup(function (e) {
            let value = $(this).val();
            if (value != '') {
                let dec = parseInt(value, 16);
                $("#dec").val(dec);
                let oct = (dec >>> 0 ).toString(8);
                $("#oct").val(oct);
                let bin = (dec >>> 0 ).toString(2);
                $("#bin").val(bin);
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
            if (name != 'hex') {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
        return null;
    }



}