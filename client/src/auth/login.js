import '../styles/main.scss'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../styles/login.scss'
import '../styles/main.scss'
import seal from '../assets/hogwarts-seal.png'

// import { loginPopUp } from '../../helpers/popUps.js' //* handles the pop-up


const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [ wasLoginSuccess, setWasLoginSuccess ] = useState(null)
  console.log('🐝 ~ file: Login.js ~ line 15 ~ wasLoginSuccess', wasLoginSuccess)

  const handleChange = (event) => {
    //?get the value of what's being typed in the form and updating state
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log('🐝 ~ file: Login.js ~ line 14 ~ event', event)
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if()
    try {
      const response = await axios.post('/api/auth/login/', formData)
      console.log('🐝 ~ file: Login.js ~ line 26 ~ response', response.data.message)
      setWasLoginSuccess(true)
      // loginPopUp(true)
      window.localStorage.setItem('token',response.data.token)
      console.log('🐝 ~ file: Login.js ~ line 26 ~ response', response)
      history.push('/potions') 
    } catch (err) {
      console.log('🐝 ~ file: Login.js ~ line 33 ~ err', err.response)
      setWasLoginSuccess(false)
      // loginPopUp(false)
    }
  }

  return (
    <div className="columns has-text-centered">
      {/* <section className="section"> */}
      {/* <div className="container"> */}
      {/* <div className="columns"> */}
      <form onSubmit={handleSubmit}className="column is-half is-offset-one-quarter box">
        <div className="seal">
          <img src={ seal }/>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              //value={formData.password}
            />
          </div>
        </div>
        <div>
          <button className="button is-fullwidth login">Login</button><br />
        </div>
      </form>
      
    </div>
  )
}
export default Login












// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import '../styles/main.scss'

// const Login = () => {

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })
//   const history = useHistory()

//   const handleChange = event => {
//     const newFormData = { ...formData, [event.target.name]: event.target.value }
//     setFormData(newFormData)
//   }

//   const handleSubmit = async event => {
//     event.preventDefault()
//     const response = await axios.post('api/auth/login/', formData)
//     window.localStorage.setItem('token', response.data.token)
//     history.push('/lab') // <-------------------------------------   !!! check this !!!
//   }

//   return (
//     <section className="section">
//       <div className="container">
//         <div className="columns">
//           <form onSubmit={handleSubmit }className="box column is-half is-offset-one-quarter">
//             <div className="field">
//               <label className="label">Email</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   placeholder="Email"
//                   name="email"
//                   onChange={handleChange}
//                   value={formData.email}
//                 />
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Password</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   onChange={handleChange}
//                   value={formData.password}
//                 />
//               </div>
//             </div>
//             <div className="field">
//               <button type="submit" className="button is-fullwidth is-warning">Log in</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Login
