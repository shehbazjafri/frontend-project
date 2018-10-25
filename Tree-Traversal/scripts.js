var stopped = false;

var tree = {
    value: 34,
    elem: "",
    children: [{
            value: 23,
            elem: "",
            children: [{
                    value: 12,
                    elem: "",
                    children: []
                },
                {
                    value: 04,
                    elem: "",
                    children: []
                }
            ]

        },
        {
            value: 92,
            elem: "",
            children: []
        }
    ]
}

function preorder(tree) {
    if (typeof tree == "object") {
        Object.entries(tree).forEach(([key, value]) => {
            if (key == "value")
                console.log(value);
            else if (key == "children") {
                if (typeof value[0] == "object")
                    preorder(value[0]);
                if (typeof value[1] == "object")
                    preorder(value[1]);
            }
        });
    }
};


(function runPre() {
    preorder(tree);
})();


function bfs(tree) {

}

function inorder() {
    
}


function postorder() {

}

(function getTree() {
    let parents = document.getElementById('tree').getElementsByTagName('ul');
    let tree = parents[0];
    console.log(tree);
    let treeJSON = domJSON.toJSON(tree, {
        attributes: [false],
        domProperties: [false, 'childElementCount', 'childNodes', 'firstChild', 'innerText','style'],
        metadata: false
    });
    console.log(treeJSON);

    // Object.entries(tree).forEach(([key, value]) => {
    //     if (key == "value")
    //         console.log(value);
    //     else if (key == "children") {
    //         if (typeof value[0] == "object")
    //             preorder(value[0]);
    //         if (typeof value[1] == "object")
    //             preorder(value[1]);
    //     }
    // });
})();

function selectTraversal() {

}

function clearTree() {

}