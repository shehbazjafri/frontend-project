let list = [2,3,1,3];

function findDuplicate(list){
    let i=0,currPos=0,currVal,goTo,visited;
    console.log(list);
    while(i<list.length){
        if(i==0){ //not jumped yet, so don't mark
            goTo = list[currPos];
            console.log("Go to " + goTo);
            currPos = goTo-1;
            console.log("I'm at index "+currPos);
        }
        else{
             if(list[currPos]==-1){
                 console.log(currVal);
                 return;
             }
             currVal = list[currPos];
             console.log("Current value is "+ currVal);
             goTo = list[currPos];
             console.log("Go to " + goTo);
             list[currPos] = -1;
             console.log("Now list is "+ list);
             //edge case
             //if(i==list.length-1)
             //currPos = list.length-1;
             //else
             currPos = goTo-1;
             console.log("I'm now at index " + currPos);
        }
        
        i++;
    }

};

(function run(){
    findDuplicate(list);
})();