import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import Skeleton from '@material-ui/lab/Skeleton';

export default function News(props){
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <div>
      <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <h1 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
            Altura News
          </h1>

          {
            props.news && props.news.length >= 1 ?

            <div className="row">
              {
                props.news.map((news, i) => {
                  return (
                    <div className="col col-12 col-lg-4 mb-5 text-left">
                      <Card style={{height: "100%"}}>
                        <CardImg top src={news.image} />
                        <CardBody>
                          <CardTitle>{news.title}</CardTitle>
                          <p>{news.body}</p>
                          <Button style={{display: news.link ? "" : "none"}} target="_blank" href={news.link}>{news.linkTitle}{` `}&rarr;</Button>
                        </CardBody>
                        <CardFooter>{news.date}</CardFooter>
                      </Card>
                    </div>
                  )
                })
              }
            </div>

              :

              <div className="row">
                {
                  skeletons.map((value, i) => {
                    return (
                      <div className="col col-lg-4 col-12 mb-5 text-left">
                        <Card>
                          <Skeleton top variant="rect" height={200} />
                          <CardBody>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Button  target="_blank" >{`Read more`}{` `}&rarr;</Button>
                          </CardBody>
                          <CardFooter><Skeleton variant="text" /></CardFooter>
                        </Card>
                      </div>
                    )
                  })
                }
              </div>
        }

        </div>
        <Button href="/blog" className="mt-5 mr-3" pill>Visit our Blog</Button>
        <Button href="https://twitter.com/altura_nft" target="_blank" className="mt-5" outline pill> Follow us Twitter </Button>
      </div>
  </div>
  )
}
