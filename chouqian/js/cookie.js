/**
 * Created by gongzilong on 2017/1/30.
 */
//    设置cookie函数
function setCookie(sessionNum,value){
    document.cookie = sessionNum + "=" + encodeURIComponent(value);
}
function getCookie(sessionNum){
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(sessionNum + "=");
        if (c_start!=-1)
        {
            c_start=c_start + sessionNum.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return decodeURIComponent(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}