const promise = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve({name: 'Assumpta', age: 23})
    }, 100);
})

//promise.then((data) => console.log(data))

async function getPromise() {
     const response = await promise
     console.log(response);
}

//getPromise()

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    console.log(data);
}

 getUser()

//Using the arrow function

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    console.log(data);
}

getPosts()

