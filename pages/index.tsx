import { ExampleComponent } from '@/components/ExampleComponent';
import { VerticalNavbar } from '@/components/GestionSociosComponent/NavBar';

const Home = () => {
  return (
    <div className='flex '>
      <VerticalNavbar />
      <main className='flex h-screen w-full items-center justify-center'>
            <ExampleComponent text='Welcome to CodeF@ctory' />
      </main>
    </div>
  );
};

export default Home;
