// const API = `https://randomuser.me/api/?results=30/users`

// const getUsers = async() => {
//     const request = await fetch(API)
//     const response = await request.json()
//     console.log(response);
//     renderUser(response)
// }
// const renderUser = (users) => {
//     users.forEach(element => {
//         let div = document.createElement('div')
//         let name = document.createElement('h3')
//         let surname = document.createElement('h3')
//         let email = document.createElement('p')
//         let phone = document.createElement('p')
//         let address = document.createElement('p')
//         let company = document.createElement('p')
//         let website = document.createElement('p')
//         name.innerHTML = 'name: ' + element.name
//         surname.innerHTML = 'username: ' + element.username
//         email.innerHTML = element.email
//         phone.innerHTML = element.phone
//         address.innerHTML = element.address.city + ' ' + element.address.street + ' ' + element.address.suite
//         company.innerHTML = element.company.name
//         website.innerHTML = element.website
//         document.body.append(div)
//         div.append(name, surname, email, phone, address, company, website)
//     });
// }
// getUsers()

const API = `https://randomuser.me/api/?results=30`

async function getResponse() {
    const url = API
    let req = await fetch(url)
    let response = await req.json()
    console.log(response.results)
    response.results.forEach(el => {

        const row = document.getElementById('row')
        const col = document.createElement('div')
        const box = document.createElement('div')


        const name = document.createElement('h2')
        const email = document.createElement('p')
        const age = document.createElement('p')
        const date = document.createElement('p')
        let iframe = document.createElement('img')


        iframe.className = 'iframe'
        age.innerHTML = 'age:  ' + el.dob.age
        date.innerHTML = 'date:  ' + el.dob.date
        name.innerHTML = 'name:  ' + el.name.first + '  ' + el.name.last
        email.innerHTML = 'email:  ' + el.email
        iframe.src = el.picture.large


        col.className = 'col-3'
        box.className = 'box'
        row.append(col)
        col.append(box)
        box.append(iframe, name, email, age, date)
    });


}
getResponse()