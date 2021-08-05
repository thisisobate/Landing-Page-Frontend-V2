import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter} from 'react-icons/fa';

  import {
    CgWebsite} from 'react-icons/cg';


export default function Team(props){
  return (
    <div className="colorize-icons" style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className="container">
        <h2 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
          Meet the Team
        </h2>
        <div className="row ">
          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-0 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Majd Hailat" top src="/images/team/majd.jpg" />
              <CardBody>
                <CardTitle>Majd Hailat</CardTitle>
                <p>Founder & Lead Dev</p>
                <a href="https://www.linkedin.com/in/majd-hailat-033389197/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                <a href="https://github.com/majd64" target="_blank"><FaGithub /></a>
                <a href="https://twitter.com/Majd_Hailat" target="_blank"><FaTwitter /></a>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-0 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Maxim Sindall" top src="/images/team/max.jpg" />
              <CardBody>
                <CardTitle>Maxim Sindall</CardTitle>
                <p>Co-Founder</p>
                <a href="https://www.linkedin.com/in/maxim-s-245a86116/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                <a href="https://twitter.com/maximsindall?lang=en" target="_blank"><FaTwitter /></a>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-md-0 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Andrew" top src="/images/team/andrew.jpg" />
              <CardBody>
                <CardTitle>Andrew Evanyshyn</CardTitle>
                <p>Graphic Designer</p>
                <a target="_blank" href="https://www.linkedin.com/in/andrew-evanyshyn-a66481211/"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-0">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Long Hong Wang" top src="/images/team/longhong.jpg" />
              <CardBody>
                <CardTitle>LongHong Wang</CardTitle>
                <p>Blockchain Developer</p>
                <a href="https://www.linkedin.com/in/wanglonghong/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                <a href="https://github.com/wanglonghong" target="_blank"><FaGithub /></a>
              </CardBody>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

//majd, max, long hong wang, andrew,
