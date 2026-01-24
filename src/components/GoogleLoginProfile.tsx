import { MdLogout } from 'react-icons/md';

import { GoogleLogin } from '@react-oauth/google';

import LeagueSelector from '@/components/LeagueSelector';
import { useAuth } from '@/context/AuthProvider.jsx';

function GoogleLoginProfile() {
  const { user, login, logout } = useAuth();

  return (
    <>
      {user ? (
        <div className='flex flex-col flex-grow items-end gap-1 md:gap-2'>
          <div className='flex items-center gap-2 justify-end w-full'>
            <span className='text-white font-bold text-md'>{user.name}</span>
            <MdLogout
              onClick={logout}
              size={24}
              color='white'
              className='cursor-pointer'
              title='Logout'
            />
          </div>
          <LeagueSelector />
        </div>
      ) : (
        <GoogleLogin
          size='large'
          text='continue_with'
          shape='pill'
          onSuccess={login}
          useOneTap
          auto_select
        />
      )}
    </>
  );
}

export default GoogleLoginProfile;
