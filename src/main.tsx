import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./styles/index.css";    
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';   
import App from "./App";    

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);