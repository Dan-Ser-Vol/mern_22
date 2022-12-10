const people = [
    {name: "Dan", age: 17, budget: 1002},
    {name: "Jon", age: 26, budget: 1002},
    {name: "Miss", age: 45, budget: 1006},
    {name: "Scott", age: 56, budget: 1002},
    {name: "Lion", age: 45, budget: 1004},
    {name: "Pop", age: 46, budget: 1003},
    {name: "Jack", age: 25, budget: 1004},
]


const log = () =>{
 console.log('time: ' + new Date())
}


const debounce = (fn, ms) => {
    let timer

    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, ms);
    }
}

debounce(log, 3000)
