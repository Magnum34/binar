import $ = require("jquery");
import { Calculator } from './calculator';


export class Binary extends Calculator {

    public LimitMinMax(): null {
        $("#bin").attr("max", "1");
        $("#bin").on("keydown input", function (e) {
            let number = parseInt(String.fromCharCode(e.keyCode));
            if ((number > 1 || isNaN(number) || e.keyCode == 44 ) &&
            ( e.keyCode != 46 && e.keyCode != 8  && e.keyCode != 37 && e.keyCode != 39  )
             ) {
                e.preventDefault();
            }
        });
        return null;
    }


    public Calculation(): null {
        $("#bin").keyup(function (e) {
            let value = $(this).val();
            if (value != '') {
                let dec = parseInt(value, 2);
                $("#dec").val(dec);
                let oct = (dec >>> 0 ).toString(8);
                $("#oct").val(oct);
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
            if (name != 'bin') {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
        return null;
    }



}