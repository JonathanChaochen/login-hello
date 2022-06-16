import './App.css';

import { AuthProvider } from './context/auth';
import Main from './components/Main';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
