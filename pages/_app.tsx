import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@/context/UserContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default App;
