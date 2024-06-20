import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@/components/ui/button';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Button onClick={() => navigate('/signin')}>SignIN</Button>
    </>
  );
}

export default App;
