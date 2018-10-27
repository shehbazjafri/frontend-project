let list = [1,1,2,2,3,5];
 /*If value > size, take it in a var and subtract size to get original value and use it
  to find next, else directly use it to get next value*/
//If next value < size, add size to value and continue
//If next value > size, then it was modified before, so it is a duplicate
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
            return value;
        }
    }
}

(function run() {
    findDuplicate(list);
})();