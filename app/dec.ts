import $ = require("jquery");
import { Calculator } from './calculator';


export class Decimal extends Calculator {

    public LimitMinMax(): null {
        $("#dec").on("keydown input", function (e) {
            let number = parseInt(String.fromCharCode(e.keyCode));
            if ((number > 9 || isNaN(number) || e.keyCode == 44 ) &&
            ( e.keyCode != 46 && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 )
             ) {
                e.preventDefault();
            }
        });
        return null;
    }


    public Calculation(): null {
        $("#dec").keyup(function(e){
            let value = $(this).val();
            if(value != ''){
                let bin = (value >>> 0 ).toString(2);
                $("#bin").val(bin);
                let oct = (value >>> 0 ).toString(8);
                $("#oct").val(oct);
                let hex = (value >>> 0 ).toString(16).toUpperCase();
                $("#hex").val(hex);
                let quaternary = (value >>> 0 ).toString(4);
                $("#quaternary").val(quaternary);
            }
        });
        return null;
    }


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