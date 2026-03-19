import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import Providers from './app/Providers.jsx'

createRoot(document.getElementById('root')).render(
    <Providers>
        <App />
    </Providers>
)
