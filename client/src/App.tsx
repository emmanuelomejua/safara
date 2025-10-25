import { ClerkProvider } from "@clerk/clerk-react"
import Routes from "./routes/Routes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './font.css'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

function App() {

  const queryCleint = new QueryClient();

  return (
    <main style={{ fontFamily: 'Satoshi' }}>
      <QueryClientProvider client={queryCleint}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes/>
      </ClerkProvider>
      </QueryClientProvider>
    </main>
  )
}

export default App
