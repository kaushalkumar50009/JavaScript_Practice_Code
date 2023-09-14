// check nummber of occurance of a character in string

let string = 'kaushal kumar singh'

function occurancess() {
    let char = "a"
    let store = []

    let a = string.split("")
    console.log(a)

    for (let i = 0; i < a.length; i++) {
        if (a[i].includes(char)) {
            store.push(a[i])

        }
    }
    console.log(store.length)
}

occurancess()


function occurrences() {
    let char = "u";
    let store = [];

    let a = string.split("");
    console.log(a);

    for (let i = 0; i < a.length; i++) {
        if (a[i] === char) {
            store.push(a[i]);
        }
    }

    console.log(store.length);
}

occurrences();

function occurance() {
    let char = "s"
    let store = 0

    let a = string.split("")
    console.log(a)

    for (let i = 0; i < a.length; i++) {
        if (a[i].includes(char)) {
            store++

        }
    }
    console.log(store)
    // console.log(store.length)
}

occurance()


