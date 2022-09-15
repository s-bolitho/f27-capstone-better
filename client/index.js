// const { calcKd } = require("../server/controller")

// const { default: axios } = require("axios")

const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')
const wzForm = document.querySelector('#wz-form')
const apexForm = document.querySelector('#apex-form')
const fortniteForm = document.querySelector('#fortnite-form')


const baseURL = `http://localhost:4004/api`

const login = body => axios.post(`${baseURL}/login`, body).then( res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})
const register = body => axios.post(`${baseURL}/register`, body).then(res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

function loginSubmitHandler(e) {
    e.preventDefault()

    let username = document.querySelector('#login-username')
    let password = document.querySelector('#login-password')

    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)

    username.value = ''
    password.value = ''
}

function registerSubmitHandler(e) {
  e.preventDefault()

  let username = document.querySelector('#register-username')
  let email = document.querySelector('#register-email')
  let firstName = document.querySelector('#register-firstName')
  let lastName = document.querySelector('#register-lastName')
  let password = document.querySelector('#register-password')
  let password2 = document.querySelector('#register-password-2')

  if (password.value !== password2.value) {
    alert("Your passwords need to match.")
    return
  }

  let bodyObj = {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value
  }

  register(bodyObj)

  username.value = ''
  email.value = ''
  firstName.value = ''
  lastName.value = ''
  password.value = ''
  password2.value = ''
}

function createUserCard(data) {
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class="username">Username: ${data.username}</p>
    <p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>`


    userContainer.appendChild(userCard)
}

const calcKdApex = (e) => {
  e.preventDefault()
let bodyObj = {
  kills: document.querySelector('#apex-kills').value,
  deaths: document.querySelector('#apex-deaths').value
}

axios.post('/calcKd', bodyObj)
.then(res => {
  let theAnswer = res.data.kd
  console.log(theAnswer)
  const apexKd = document.createElement("div")
  apexKd.style.width = "50px";
  apexKd.style.color = "red";
  apexKd.style.background = "black";
  apexKd.style.marginLeft = "100px";
  apexKd.style.bottom = "100px";
  apexKd.innerHTML = 'KD:' + " " + theAnswer
  document.body.appendChild(apexKd)
})
}



const goodAtApexBtn = document.getElementById("goodAtApexButton")

const getGoodAtApex = () => {
    axios.get("http://localhost:4004/api/goodAtApex/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

goodAtApexBtn.addEventListener('click', getGoodAtApex)

const couldYouBeBetterBtn = document.getElementById("couldYouBeBetter")

const getCouldYouBeBetter = () => {
    axios.get("http://localhost:4004/api/couldYouBeBetter/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

couldYouBeBetterBtn.addEventListener('click', getCouldYouBeBetter)

// const loginBtn = document.getElementById("profile_btn")

// const getLogin = () => {
//     axios.get("http://localhost:4004/api/profile_btn/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//         })
// };

// loginBtn.addEventListener('click', getLogin)

// const calcKdWz = (e) => {
//   e.preventDefault()
// let bodyObj = {
//   kills: document.querySelector('#wz-kills').value,
//   deaths: document.querySelector('#wz-deaths').value
// }

// axios.post('/calcKd', bodyObj)
// .then(res => {
//   let theAnswer = res.data.kd
//   console.log(theAnswer)
// })

// }



// loginForm.addEventListener('submit', loginSubmitHandler)
// registerForm.addEventListener('submit', registerSubmitHandler)
apexForm.addEventListener('submit', calcKdApex)