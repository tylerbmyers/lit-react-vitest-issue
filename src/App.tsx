import './simple-greeting.js';
import { SimpleGreetingWithPackage, SimpleGreetingWithDirectImport } from './SimpleGreeting.js';

function App() {
  return (
    <>
      <SimpleGreetingWithPackage name='Testing' data-testid='simpleGreetingWithPackage' />
      <SimpleGreetingWithDirectImport name='Testing' data-testid='simpleGreetingWithDirectImport' />
    </>
  );
}

export default App;
