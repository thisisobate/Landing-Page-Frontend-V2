import { Button } from "shards-react";

export default function Features(props){
  return (
    <div>
      <div className="gradient-bg" style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="align-self-center col col-12 col-md-6 text-left">
              <h2 className="mb-4 white" style={{fontWeight: "600", lineHeight: "3rem"}}>
                Introducing The Future of NFTs: Smart NFTs
              </h2>
              <h6 className="white" style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                Imagine a video game sword that gets stronger every time it is used
                to slay a monster. Smart NFTs have properties that can change
                based on certain conditions.
              </h6>
              <Button disabled className="mt-4 white" outline pill>Build on Altura</Button>
            </div>
            <div className="col col-12 col-md-6 p-5">
              <img alt="floating gaming sword" src="images/graphics/sword.gif" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <h2 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
            Built by Developers, for Developers
          </h2>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="transparent files" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/transparent.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Transparent Protocols</h4>
              <p>
                Altura uses Chainlink's VRF to provide a provably fair
                and tamper-proof source of randomness.
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="open network around gem" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/open.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Open Source</h4>
              <p>
                Altura keeps all of its code open-source to ensure transparency
                and innovation. You can Find all of our code on
                {" "}<a target="_blank" href="https://github.com/Plutus-Gaming-NFTs-Reimagined">GitHub</a>.
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="shapes" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/simple.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Simple APIs</h4>
              <p>
                As developers, we know the importance of easy-to-use APIs and
                simple documentation. We want integrating with Altura to be as
                easy as possible.
              </p>
            </div>


            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="deed" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/ownership.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>True Ownership</h4>
              <p>
                NFTs allow users to truly own their digital assets without the
                fear of them being confiscated or deleted.
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="coin with dollar sign" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/fees.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Low Fees</h4>
              <p>
                Altura is built on the Binance Smart Chain, which means
                transactions are cheap and fast!
              </p>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="ven diagram with sword in middle" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/cross.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Cross-Platform Items</h4>
              <p>
                Altura allows game developers to utilize in-game items of other
                projects within their own; this allows for cross-game items.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-bg" style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 order-2 order-md-1 p-5">
              <img alt="loot box opening with gem inside" src="images/graphics/lootbox.gif" style={{width: "100%", height: "100%"}}/>
            </div>
            <div className="align-self-center col col-12 col-md-6 order-1 order-md-2 text-left text-md-right ">
              <h2 className="mb-4 white" style={{fontWeight: "600", lineHeight: "3rem"}}>
                Loot Boxes on the Blockchain
              </h2>
              <h6 className="white" style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                We want to create truly random loot boxes on the blockchain that
                drop NFTs with varying rarities when they are unlocked.
              </h6>
              <Button target="_blank" href="https://medium.com/@alturanft/altura-integrating-chainlink-vrf-to-power-provably-random-loot-boxes-99e29d6f8e4" className="mt-4 white" outline pill>Learn more</Button>
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="align-self-center col col-12 col-md-6 text-left">
              <h2 className="mb-4 blue" style={{fontWeight: "600", lineHeight: "3rem"}}>
                An NFT Marketplace Like no Other
              </h2>
              <h6 style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                Explore a whole world of in-game items through Altura's NFT marketplace.
                It is also the most powerful NFT minting platform.
              </h6>
              <Button href="https://www.alturanft.app/" target="_blank" className="mt-4" outline pill>Explore Marketplace</Button>
            </div>
            <div className="col col-12 col-md-6 p-5">
              <img src="/images/graphics/marketplace.jpg" style={{width: "100%", height: "100%", borderRadius: "15px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
