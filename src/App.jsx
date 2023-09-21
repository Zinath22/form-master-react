
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSingUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm>       */}
      <ReusableForm formTitle={'sing up'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please sing up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'profile  updata'} handleSubmit={handleUpdateProfile} submitBtnText='Update'> 
      <div>
        <h2>update profile</h2>
        <p>always update your profile</p>
      </div>
      </ReusableForm>
      
    </>
  )
}

export default App
