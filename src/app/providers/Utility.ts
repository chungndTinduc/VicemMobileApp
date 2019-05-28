import {Enum} from 'src/app/providers/Enum';
import {QuyenHan} from 'src/app/providers/Enum';
const TOKEN_KEY = 'auth-token';
const CURRENT_USER = 'current-user';
export class Utility{

    checkPermisstions(strQuenHan){
        strQuenHan= ",0,"+strQuenHan+","
        var listQuenHan:any;
        listQuenHan = QuyenHan;
        if(strQuenHan){
            for (const itemQuyenHan in Enum) {
                if (isNaN(Number(itemQuyenHan))) {
                    var numb = Enum[itemQuyenHan];
                    if(strQuenHan.indexOf(","+numb+",")>0)
                    {
                        listQuenHan[itemQuyenHan] = 1;
                    }
                }
               
            }
        }else{
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(CURRENT_USER); 
        }
       return listQuenHan;
    }
}
