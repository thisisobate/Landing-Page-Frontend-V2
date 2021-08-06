featuredimport { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, useLocation} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import axios from 'axios';
import TermsOfUse from './views/TermsOfUse';
import Home from './views/Home';
import RequestCollectionVerifiation from './views/RequestCollectionVerification';
import Contact from './views/Contact';
import Blog from './views/Blog'

function App() {
  const [ holders, setHolders ] = useState('--')
  const [ marketCap, setMarketCap ] = useState('--')
  const [ blogs, setBlogs ] = useState([])

  var marketCapFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  });

  useEffect(() => {
    axios.get("/api/holders")
    .then(res => {
      setHolders(`${String(res.data).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    })
    .catch(err => {
      console.log(err)
    })

    axios.get("/api/marketcap")
    .then(res => {
      setMarketCap(marketCapFormatter.format(res.data))
    })
    .catch(err => {
      console.log(err)
    })

    axios.get("/api/news")
    .then(res => {
      setBlogs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Banner  />
        <Navbar />
        <Route path="/terms-of-use" exact render={(props) => ( <TermsOfUse {...props} />)}/>
        <Route path="/blog/article/request-collection-verification" exact render={(props) => ( <RequestCollectionVerifiation {...props} />)}/>
        <Route path="/contact/:defaultSubject?" exact render={(props) => ( <Contact {...props} />)}/>
        <Route path="/blog/:category?" exact render={(props) => ( <Blog blogs={blogs} {...props} />)}/>
        <Route path="/" exact render={(props) => ( <Home {...props} news={blogs.featuredNews} holders={holders} marketCap={marketCap} />)}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
