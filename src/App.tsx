import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full">
        <h1 className="text-3xl font-bold underline">Home</h1>
        <Button onClick={() => navigate('/signin')}>SignIN</Button>
      </div>
    </>
  );
}

export default App;
