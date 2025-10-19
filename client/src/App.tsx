import { ClerkProvider } from "@clerk/clerk-react"
import Routes from "./routes/Routes"
import './font.css'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


function App() {
  return (
    <main style={{ fontFamily: 'Satoshi' }}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes/>
      </ClerkProvider>
    </main>
  )
}

export default App
