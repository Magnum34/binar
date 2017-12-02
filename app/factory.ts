
import $ = require("jquery");
import { Binary } from './bin';
import {Calculator} from './calculator';
import { Hexal } from './hex';
import { Octal } from './oct';
import { Decimal } from './dec';
import { Quaternary } from './quaternary';



export class Factory {

    create(select : HTMLElement){
        let _this = this;
        select.addEventListener("change",function(){
            let type = $(this).val();
            switch(type){
                case 'bin':
                    var obj = new Binary();
                    break;
                case 'dec':
                    var obj = new Decimal();
                    break;
                case 'oct':
                    var obj = new Octal();
                    break
                case 'hex':
                    var obj = new Hexal();
                    break;
                case 'quaternary':
                    var obj = new Quaternary(); 
                    break;
                default:
                    break;
                
            }
            if(obj){
                obj.getDisabled();
                obj.Calculation();
                obj.LimitMinMax();
            }
            
        });
    }
}