try {
    console.log(x);
} catch (error) {
    console.log('Error: ' + error);
}



function double(number) {
   if (isNaN(number)) {
    throw new Error (number + ' is not a number')
   }


    return number * 5
    
}
try {
    const y = double('Hello')
    console.log(y);
} catch (error) {
    console.log(error);
}

//Async promise with Async & Await in handling Error

const getUsers = async () => {
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //const res = await fetch('https://httpstat.us/404')

    if (!response.ok) {
        throw new Error('Request Failed')
    }

      const data = await res.text()

         console.log(data);
   } catch (error) {
     console.log(error);
   }

}

getUsers()


const getPostss = async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/500')
    // const res = await fetch('https://httpstat.us/404')
 
     if (!response.ok) {
         throw new Error('Request Failed')
     }
 
       const data = await response.text()
              console.log(data);
 }
 
 getPostss().catch((error) => console.log(error))