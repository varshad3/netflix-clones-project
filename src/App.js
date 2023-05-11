import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Row isPoster={true} title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} />
      <Row  title={'Trending Movies'} fetchUrl={requests.fetchTrending} />
      <Row  title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
      <Row  title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
      <Row  title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
      <Row  title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} />
      <Row  title={'TopRated Movies'} fetchUrl={requests.fetchTopRated} />
      <Row  title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />

    </div>
  );
}

export default App;
