var stopped = false;

var tree = {
    value: 34,
    elem: "",
    children: [
        {
            value: 23,
            elem: "",
            children : []
            
        },
        {
            value: 92,
            elem: "",
            children : []
        }
    ]
} 

function preorder(tree){
   if(typeof tree == "object"){
       Object.entries(tree).forEach(([key, value]) => {
           if(key=="value")
           console.log(value);
           else if(key=="children"){
           if(typeof value[0] == "object")
           preorder(value[0]); 
           if(typeof value[1] == "object")
           preorder(value[1]);    
           }
       });
   }
};


(function runPre(){
    preorder(tree);
})();


function bfs(tree){
   
}

function inorder(){

}


function postorder(){

}

(function getTree(){
     let parents = document.getElementById('tree').getElementsByTagName('li');
})();

function selectTraversal(){

}

function clearTree(){

}