var stopped = false;
var ind = 0;
var pre = [34, 23, 12, 4, 16, 9, 92];
var inord = [23, 12, 4, 16, 9, 34, 92];
var post = [23, 12, 4, 16, 9, 92, 34];
var breadth = [34, 23, 92, 12, 4, 16, 9];
var descriptions = ["<ol><li>Traverse the left subtree, i.e., call Inorder(left-subtree)</li><li>Visit the root.</li><li>Traverse the right subtree, i.e., call Inorder(right-subtree)</li></ol>", "<ol><li>Visit the root.</li><li>Traverse the left subtree, i.e., call Preorder(left-subtree)</li><li>Traverse the right subtree, i.e., call Preorder(right-subtree)</li></ol>", "<ol><li>Traverse the left subtree, i.e., call Postorder(left-subtree)</li><li>Traverse the right subtree, i.e., call Postorder(right-subtree)</li><li>Visit the root.</li></ol>", "<ol><li>Create an empty queue q</li><li>temp_node = root</li><li>Loop while temp_node is not NULL</li><li>print temp_node->data</li><li>Enqueue temp_node's children to q</li><li>Dequeue a node from q and assign it's value to temp_node</li></ol>"];
//Tree representation:
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
                    children: [{
                        value: 16,
                        elem: "",
                        children: []
                    }, {
                        value: 09,
                        elem: "",
                        children: []
                    }]
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

function preorder() {
    setTimeout(function () {
        if (stopped) {
            return;
        }
        let value = pre[ind];
        let node = document.getElementById(value);
        node.classList.add('visited');
        addOrder(value);
        ind++;
        if (ind < pre.length) {
            preorder();
        } else {
            ind = 0;
        }
    }, 1000);
};


function bfs() {
    setTimeout(function () {
        if (stopped) {
            return;
        }
        let value = breadth[ind];
        let node = document.getElementById(value);
        node.classList.add('visited');
        addOrder(value);
        ind++;
        if (ind < pre.length) {
            bfs();
        } else {
            ind = 0;
        }
    }, 1000);
}

function inorder() {
    setTimeout(function () {
        if (stopped) {
            return;
        }
        let value = inord[ind];
        let node = document.getElementById(value);
        node.classList.add('visited');
        addOrder(value);
        ind++;
        if (ind < pre.length) {
            inorder();
        } else {
            ind = 0;
        }
    }, 1000);
}


function postorder() {
    setTimeout(function () {
        if (stopped) {
            return;
        }
        let value = post[ind];
        let node = document.getElementById(value);
        node.classList.add('visited');
        addOrder(value);
        ind++;
        if (ind < pre.length) {
            postorder();
        } else {
            ind = 0;
        }
    }, 1000);
}

function play() {
    stopped = false;
    let selected = document.getElementById("selected-option").innerHTML;
    if (selected === "In-Order Depth-First Traversal") {
        inorder();
    } else if (selected === "Pre-Order Depth-First Traversal") {
        preorder();
    } else if (selected === "Post-Order Depth-First Traversal") {
        postorder();
    } else if (selected === "Breadth-First Traversal") {
        bfs();
    }
}

function stop() {
    let nodes = document.getElementsByClassName('visited');
    ind = 0;
    stopped = true;
    clearTree(nodes);
    clearOrder();
}

function selectTraversal(option) {
    let selected = document.getElementById("selected-option");
    let descTitle = document.getElementById("desc-title");
    let descBody = document.getElementById("desc-body");
    if (option === 1) {
        selected.innerHTML = "In-Order Depth-First Traversal";
        descTitle.innerHTML = "In-Order Depth-First Traversal";
        descBody.innerHTML = descriptions[0];
        stop();
    } else if (option === 2) {
        selected.innerHTML = "Pre-Order Depth-First Traversal";
        descTitle.innerHTML = "Pre-Order Depth-First Traversal";
        descBody.innerHTML = descriptions[1];
        stop();
    } else if (option === 3) {
        selected.innerHTML = "Post-Order Depth-First Traversal";
        descTitle.innerHTML = "Post-Order Depth-First Traversal";
        descBody.innerHTML = descriptions[2];
        stop();
    } else if (option === 4) {
        selected.innerHTML = "Breadth-First Traversal";
        descTitle.innerHTML = "Breadth-First Traversal";
        descBody.innerHTML = descriptions[3];
        stop();
    }
}

function clearTree(nodes) {
    nodes[0].classList.remove('visited');
    if (nodes[0])
        clearTree(nodes);
}

function clearOrder() {
    let order = document.getElementById('traversal-order');
    while (order.firstChild) {
        order.removeChild(order.firstChild);
    }
}

function addOrder(nodeValue) {
    var newDiv = document.createElement('div');
    newDiv.classList.add("box");
    newDiv.innerHTML = nodeValue;
    document.getElementById('traversal-order').appendChild(newDiv);
}