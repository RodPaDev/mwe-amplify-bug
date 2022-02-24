//
import { Auth } from 'aws-amplify'

function App() {
  //I used this hook before to signOut, basically same function but still freezes so it's not the hook
  // const { signOut } = useAmplifyAuth()

  return (
    <div>
      <h1>VitreactApp</h1>

      <button
        onClick={async e => {
          try {
            e?.preventDefault()
            await Auth.signOut()
          } catch (error) {
            console.log(error)
          }
        }}
      >
        Sign Out
      </button>
      <button style={{ cursor: 'pointer' }}>
        I should always be clickable and do nothing!
      </button>
    </div>
  )
}

export default App
