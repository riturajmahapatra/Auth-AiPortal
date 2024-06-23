import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button/button';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen font-xl underline">Dashboard</div>
      <Button
        onClick={() => {
          navigate('/'),
            console.log('clicked  '),
            localStorage.removeItem('authToken');
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default Dashboard;
