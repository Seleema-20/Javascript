// function order(name)
// {
//     console.log("order ready"+name)
// }
// function User(callback)
// {
//     callback("leema");
// }

// User(order);




// User((name=>{
//     console.log("hello"+name);
// }));



function execute(func) {
    func();
}

execute(() => {
    console.log("Hello");
});