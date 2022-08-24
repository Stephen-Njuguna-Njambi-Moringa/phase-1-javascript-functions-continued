// code your solution here'
function saturdayFun(action){
    if(typeof action==='undefined'){
        action="roller-skate";
    }
    return `This Saturday, I want to ${action}!`
}
saturdayFun();
function mondayWork(action1='go to the office'){
    return `This Monday, I will ${action1}.`;
    
}
mondayWork();

function wrapAdjective(pass){
    return function(){
        if(pass==='||'){
            let results='||a dedicated programmer||!';
            let emphatic=`You are ${results}`;
            return emphatic;
        }  

        else if(pass==='*'){
            let results='*a hard worker*!';
            let emphatic=`You are ${results}`;
            return emphatic;
        }
    }

}
