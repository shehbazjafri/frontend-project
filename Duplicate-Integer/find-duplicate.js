let list = [1,1,2,2,3,5];

function findDuplicate(list) {
    console.log("List = " + list);
    let size = list.length;
    for (let i = 0; i < size; i++) {
        let value = list[i];
        if (value > size) {
            value = value - size;
        }
        let next = list[value - 1];
        if (next < size) {
            list[value - 1] += size;
            continue;
        } else {
            console.log("DUPLICATE = " +value);
            return;
        }
    }
}

(function run() {
    findDuplicate(list);
})();