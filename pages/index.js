import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();

  const onUpdate = () => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  };

  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  console.warn(authUser?.firebaseId);

  return (
    <>
      {authUser?.firebaseId === user?.uid ? (
        <>
          Hello!
        </>
      ) : (<RegisterForm user={user} onUpdate={onUpdate} />)}
    </>
  );
}

export default Home;
