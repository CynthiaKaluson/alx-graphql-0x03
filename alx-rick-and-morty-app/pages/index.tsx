import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Rick and Morty GraphQL Explorer</h1>
      <p>Welcome to the ALX Rick and Morty application with React Error Boundaries</p>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5' }}>
        <h2>Error Boundary Test Section</h2>
        <ErrorBoundary>
          <ErrorProneComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;
