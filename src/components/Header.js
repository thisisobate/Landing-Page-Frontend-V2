import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import ItemCard2 from './ItemCard2'

export default function Header(props){
  return (
    <div>
      <div className="header text-center" style={{height: "calc(100vh - 128px)",
        width: "100vw", display: "table-cell", verticalAlign: "middle", paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-7 text-lg-left my-auto">
              <div className="my-auto" style={{display: "inline-block", width: "100%"}}>
                <h1 className="text-gradient title pl-0 pb-3 mb-1" style={{fontWeight: "800"}}>
                  Where Blockchain<br></br> Meets Gaming
                </h1>

                <p id="subtitle" className="gray header-subtitle" style={{fontWeight: "800"}} className="mb-5">
                  Altura is the next generation gaming NFT platform
                </p>
                <Button href="https://app.alturanft.com/" target="_blank" className="my-auto mr-3" size="lg--" pill>
                  Explore marketplace
                </Button>

                <Button target="_blank" href="https://pancakeswap.finance/swap#/swap?inputCurrency=0x8263CD1601FE73C066bf49cc09841f35348e3be0" outline pill>Buy $ALU</Button>
              </div>
            </div>
            <div className="col col-12 col-lg-5 my-auto">
              <img alt="spinning gem" style={{width: "100%", height: "100%"}}src="images/graphics/gemspin.gif"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
