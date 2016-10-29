/**
 * Created by Scissors on 29.10.2016.
 */

function arrayToList(array) {
    var list = {
        value: null,
        rest: null
    };
  array.forEach(addToList)
    return list;
    function addToList(value) {
        var newNode = {
            rest: null,
            value: value
        };
        if (list.value === null) {
            list = newNode;
        }
        else {
            lastElement = getLastElement(list);
            lastElement.rest = newNode;
        }

    }
}
function getLastElement(listHeader) {
    if (listHeader.rest === null) {
        return listHeader;
    }
    else return getLastElement(listHeader.rest);
}
console.log(arrayToList([1, 2, 3]));