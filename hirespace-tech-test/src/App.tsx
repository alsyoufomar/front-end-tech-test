import './App.css';
import Header from './components/header/Header';
import EventDetails from './components/events/EventDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='event-body'>
        <EventDetails />
        <div className='event-hero'></div>
      </div>
    </div>
  );
}

export default App;
