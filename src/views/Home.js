import WhatIsAltura from '../components/WhatIsAltura'
import MajorListings from '../components/MajorListings'
import Features from '../components/Features'
import Partners from '../components/Partners'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import News from '../components/News'
import Header from '../components/Header'

export default function Home(props){
  return(
    <div>
      <Header />
      <MajorListings />
      <br id="about"/>
      <WhatIsAltura holders={props.holders} marketCap={props.marketCap}/>
      <Features />
      <br id="partners"/>
      <Partners />
      <br id="team"/>
      <Team />
      <br id="roadmap"/>
      <Roadmap />
      <br id="news"/>
      <News news={props.news}/>
    </div>
  )
}
