// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppDataProvider } from './context/AppDataContext';
import ImportData from './components/ImportData/ImportData';
import Filters from './components/Filters/Filters';
import Dashboard from './components/Dashboard/Dashboard';
import StatusBar from './components/StatusBar/StatusBar';
import ErrorLogger from './components/ErrorLogger/ErrorLogger';

function App() {
  return (
    <AppDataProvider>
      <div className="App">
        <header className="bg-white shadow-sm">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Olimp Marketplace" height="40" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">Dashboard Oszczędności</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="container my-4">
          <ImportData />
          <StatusBar />
          <Filters />
          <Dashboard />
        </main>

        <footer className="bg-light py-3 mt-5">
          <div className="container text-center">
            <p className="text-muted mb-0">&copy; 2025 Olimp Marketplace. Wszystkie prawa zastrzeżone.</p>
          </div>
        </footer>
        <ErrorLogger />
      </div>
    </AppDataProvider>
  );
}

export default App;