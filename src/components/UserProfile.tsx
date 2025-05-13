import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase/client';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user || null);
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          {/* Add more user profile details here */}
        </div>
      ) : (
        <h2>Please log in to see your profile.</h2>
      )}
    </div>
  );
};

export default UserProfile;
