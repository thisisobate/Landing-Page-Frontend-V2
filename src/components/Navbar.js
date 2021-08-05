import {useState} from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from "shards-react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

function NavBar(props){
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div>

      <Navbar className="" bg="" expand="lg">
        <div className="container">
          <Navbar.Brand className="my-auto" href="/">
            <img
              style={{maxHeight: "38px"}}
              alt="Altura NFT"
              src="/images/logo_500x500.png"
              className="d-inline-block"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center mx-auto">
              <NavDropdown className="" title="Developer" id="basic-nav-dropdown">
                <NavDropdown.Item disabled href="">Developer Dashboard</NavDropdown.Item>
                <NavDropdown.Item disabled href="">Docs</NavDropdown.Item>
                <NavDropdown.Item href="/blog/article/request-collection-verification">Get verified</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://drive.google.com/file/d/1xjCoKdDAsmS2lvAcNglszxhu3l15lajb/view?usp=sharing">Whitepaper</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="" href="/#roadmap">Roadmap</Nav.Link>
              <Nav.Link className="" href="/#partners">Partners</Nav.Link>
              <Nav.Link className="" href="/blog">Blog</Nav.Link>
              <NavDropdown className="" title="ALU" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://bscscan.com/token/0x8263cd1601fe73c066bf49cc09841f35348e3be0">BSCScan</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://coinmarketcap.com/currencies/altura/">CoinMarketCap</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x8263CD1601FE73C066bf49cc09841f35348e3be0">PancakeSwap</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://dex.guru/token/0x8263cd1601fe73c066bf49cc09841f35348e3be0-bsc">Chart</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    navigator.clipboard.writeText("0x8263cd1601fe73c066bf49cc09841f35348e3be0")
                    setOpen(true)
                  }}>Copy contract address</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="" href="/contact">Contact</Nav.Link>

            </Nav>
            <Button href="https://www.alturanft.app/" target="_blank" className="my-auto" style={{height: "31.2px"}} pill size="sm">
              Marketplace
            </Button>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} style={{backgroundColor: "#00d1ff"}}>
          Copied!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default NavBar
