export default function MajorListings(props){
  return (
    <div className="major-listings-banner" style={{borderBottom: "1px solid #E2E2E2", borderTop: "1px solid #E2E2E2"}}>
      <div style={{height: "100%"}} className="container">
        <div style={{height: "100%"}} className="row">
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://coinmarketcap.com/currencies/altura/"><img className="major-listing-image" src="/images/partners/coinmarketcap.png"/></a>
          </div>
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://www.coingecko.com/en/coins/altura"><img className="major-listing-image" src="/images/partners/coingecko.png"/></a>
          </div>
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://blockfolio.com/coin/ALU"><img className="major-listing-image" src="/images/partners/blockfolio.png"/></a>
          </div>
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://coinsbit.io/trade_classic/ALU_ETH"><img className="major-listing-image" src="/images/partners/coinsbit.png"/></a>
          </div>
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://medium.com/@alturanft/altura-integrating-chainlink-vrf-to-power-provably-random-loot-boxes-99e29d6f8e4"><img className="major-listing-image" src="/images/partners/chainlink.png"/></a>
          </div>
          <div className="py-2 col-4 col-md-2 my-auto img-hover-zoom">
            <a target="_blank" href="https://bscscan.com/token/0x8263cd1601fe73c066bf49cc09841f35348e3be0"><img className="major-listing-image" src="/images/partners/bscscan.png"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
