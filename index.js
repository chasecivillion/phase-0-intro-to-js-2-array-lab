// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(name) {
    const beforeCats = [...cats, name];
    return beforeCats;
};
function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;
};
function removeLastCat() {
    const byeLastCat = cats.slice(0,2);
    return byeLastCat;
};
function removeFirstCat() {
    const byeFirstCat = cats.slice(1);
    return byeFirstCat;
};
/*

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    const firstCats = [name, ...cats];
    return firstCats;
}
function removeLastCat(name) {
    const sliceCopyCat = cats.slice(0,2);
    return sliceCopyCat;
}
function removeFirstCat(name) {
    const firstCopyCat = cats.slice(1);
    return firstCopyCat;
}
*/