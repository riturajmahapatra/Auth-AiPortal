import { Button } from '@/components/ui';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen ">
        <div className="font-xl underline">Dashboard</div>
        <Button
          onClick={() => {
            navigate('/'),
              console.log('clicked  '),
              localStorage.removeItem('authToken');
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
