import { Button } from "shards-react";

export default function WhatIsAltura(props){
  return (
    <div  style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-12 col-md-8 text-md-left mb-5 mb-md-0">
            <h1 className="blue mb-3 pb-2" style={{fontWeight: "800"}}>
              Building the Future of NFTs
            </h1>
            <h6 style={{fontWeight: "400", lineHeight: "1.8rem"}}>
              Altura is a smart contract platform that allows game developers
              to mint, distribute and transact Smart NFTs representing in-game items.
              Smart NFTs are NFTs with dynamic properties that can change
              based on certain conditions.
            </h6>
            <Button href="https://www.alturanft.app/" target="_blank" className="mt-4" pill>Explore Marketplace</Button>
            <Button style={{display: "none"}}target="_blank" className="mt-4 ml-3" outline pill>Build on Altura</Button>
          </div>
          <div className="col col-12 col-md-4 text-md-right">
            <div>
              <h1 className="blue mb-4" style={{fontWeight: "800"}}>{props.holders}</h1>
              <p style={{fontWeight: "600", color: "black"}}>Holders</p>
            </div>
            <div>
              <h1 className="blue mb-4" style={{fontWeight: "800"}}>{props.marketCap}</h1>
              <p style={{fontWeight: "600", color: "black"}}>Market Cap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
