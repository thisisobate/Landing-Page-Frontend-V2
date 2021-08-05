import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {IconButton} from '@material-ui/core';
import axios from 'axios'
import Querystring from 'query-string'

export default function ItemCard2(props) {
  const [isHover, setIsHover] = useState(false)
  const [isHoverOnLike, setIsHoverOnLike] = useState(false)
  const [localLikeCount, setLocalLikeCount] = useState(0)
  const [didLike, setDidLike] = useState(false)
  const [isLiking, setIsLiking] = useState(false)

  const price = 10;
  const quantity = 1;
  const name  ="maxim"

  return (
    <div style={{width: "100%"}}>
        <Container>
          <Row>
            <Col className="text-left">
                <a style={{textDecoration: "none"}} href={`apple.com` }>
                  <Card className={`item-card shadow-none `}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    >
                      <div className="card-img" style={{height: `${props.size ? props.size : "290px"}`, width: "100%"}}>
                        <CardImg className="pt-2 pr-2 pl-2" style={{ position: "absolute", margin: "auto", top: "0", bottom: "111px", left: "0", right: "0", maxWidth: "100%", maxHeight: `${props.size ? props.size : "290px"}`}} src={"https://gbnewwest.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} />
                      </div>
                    <CardBody className="card-body p-0" style={{height: "111px"}}>
                      <div style={{paddingLeft: "30px", paddingRight: "30px", height: "73px", width: "100%", left: "0", bottom: "19px", position: "absolute", display: "inline-block"}}>
                        <p className={`highlight ${price ? "mb-1" : "mb-3"}`} style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "1rem", fontWeight: "700"}}>{name}</p>
                        <p className="mb-1" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "700", fontSize: "0.8rem"}}>{`collection`}</p>
                        <p className="greyColor" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "700", fontSize: "0.8rem"}}>{price ? `${quantity} listing from ${price} ALU` : ""}</p>
                        <btn className={`${isHoverOnLike ? "like-count-bg-hover" : ""}`} onMouseLeave={() => setIsHoverOnLike(false)} onMouseEnter={() => setIsHoverOnLike(true)} onClick={e => {
                            e.preventDefault();
                          }} style={{position: "absolute", right: "22px", bottom: price ? "0" : "5px", borderRadius: "18px", padding: "8px"}} >
                          {
                            didLike ?
                            <FavoriteIcon className={`mr-1 ${isHoverOnLike ? "like-hover" : ""}`} style={{fontSize: "1rem"}}/>
                            :
                            <FavoriteBorderIcon className={`mr-1 ${isHoverOnLike ? "like-hover" : ""}`} style={{fontSize: "1rem"}}/>
                          }
                          <p className={`pb-0 mb-0 highlight2- like-count ${isHoverOnLike ? "like-hover" : ""}`} style={{display: "inline-block", fontWeight: "700"}}>{localLikeCount}</p>
                        </btn>
                      </div>

                    </CardBody>
                  </Card>
                </a>
            </Col>
          </Row>
        </Container>
    </div>

  );
}
