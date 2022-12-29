import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global-styles';
import { CartProvider } from './providers/CartProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <CartProvider>
      <GlobalStyle/>
      <App />
    </CartProvider>
  </>
);