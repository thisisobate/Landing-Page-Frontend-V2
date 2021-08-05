import Wizard from '../SVGs/wizard.svg'
export default function Partners(props){
  return (
    <div>
      <div className="gradient-bg"  style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <h2 className="white" style={{fontWeight: "800", marginBottom: "6rem"}}>
            Partnerships
          </h2>
          <div className="row justify-content-md-center" style={{marginBottom: "6rem"}}>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://chain.link/" >
                <img alt="Chainlink" style={{height: "50px", width: "150px"}} src="/images/partners/chainlink.png"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://www.cryptoblades.io/">
                <img alt="Cryptoblades" style={{height: "50px", width: "150px"}} src="/images/partners/cryptoblades.png"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://wizard.financial/">
                <img alt="Wizard" style={{height: "50px", width: "150px"}} src={Wizard}/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://www.oxbull.tech/">
                <img alt="Oxbull" style={{height: "50px", width: "150px"}} src="/images/partners/oxbull.png"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://deepspace.game/">
                <img alt="DeepSpace" style={{height: "50px", width: "150px"}} src="/images/partners/deepspace.png"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://rune.farm/">
                <img alt="Rune" style={{height: "50px", width: "150px"}} src="/images/partners/rune.png"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://nftrade.com/">
                <img alt="NFTrade" style={{height: "50px", width: "150px"}} src="/images/partners/nfttrade.svg"/>
              </a>
            </div>
            <div className="col col-6 col-md-4 col-lg-3 img-hover-zoom py-5">
              <a target="_blank" href="https://coinsbit.io/">
                <img alt="Coinsbit" style={{height: "50px", width: "150px"}} src="/images/partners/coinsbit.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
