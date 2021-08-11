import { Button } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default function Jobs(props){
  const jobs = [
    {
      title: "Marketing Manager",
      subtitle: "Marketing • Remote • Full-time or Part-time • US$10-50k",
      description: "Altura is looking for a marketing manager to develop digital marketing strategies to drive user acquisition, and awarness.",
      link: ""
    },

    {
      title: "Social Media Marketing Manager",
      subtitle: "Marketing • Remote • Full-time or Part-time • US$10-50k",
      description: "Altura is looking for a social media marketing manager to create and execute social media marketing strategies across all social media outlets. ",
      link: ""
    },

    {
      title: "Influencer Manager",
      subtitle: "Marketing • Remote • Part-time • US$10-50k",
      description: "Altura is looking for someone to manage social media infleucer promotions and sponsorships. You would be contacting and closing sponsorship deals with influencers across social medias. ",
      link: ""
    },

    {
      title: "Content Manager",
      subtitle: "Marketing • Remote • Part-time • US$10-50k",
      description: "Altura is looking for someone to manage content for social medias. You would be brainstorming and writing scipts for YouTube and other socila platform.",
      link: ""
    },

    {
      title: "Video Editor",
      subtitle: "Editing • Remote • Part-time • US$5-50k",
      description: "Altura is looking for someone to edit video content for social medias such as YouTube and Instagram reels. you must have solid experinace in any video edition software such as Premiere Pro, or Final Cut Pro.",
      link: ""
    },

    {
      title: "Graphic Designer",
      subtitle: "Design • Remote • Full-time or Part-time • US$5-50k",
      description: "Altura is looking for a graphic designer to create social media banners, brand designs, and consistent forward facing designs. You would need to be able to create on demand designs quickly. ",
      link: ""
    },

    {
      title: "React.js Developer",
      subtitle: "Developer • Remote • Full-time • US$40-60k",
      description: "Altura is looking for a frontend React developer with at least one year of experiance. You must have solid experiance in React.js, Next.js, HTML, CSS, Redux or Context, Material UI, Bootstrap, Typescript, Javascript, Axios & Github. You must be able to implement designs given by a web designer. You must be able to work with APIs and external data. You must be able to build user friendly web frontends that are moduler and scalable.",
      link: ""
    },

    {
      title: "Node.js Developer",
      subtitle: "Developer • Remote • Full-time • US$40-60k",
      description: "Altura is looking for a backend Node developer with at least one year of experiance. You must have solid experiance in Node.js, Javascript, MongoDB, Express.js, data structures & algorithms, and Github You must be able to create a scalable backend server and API.",
      link: ""
    },

    {
      title: "Full Stack Developer",
      subtitle: "Developer • Remote • Full-time • US$40-70k",
      description: "Altura is looking for a full stack web developer with at least one year of experiance. You must have solid experiance in all the requirements for our Node.js and React.js positions.",
      link: ""
    },

    {
      title: "Blockchain developer",
      subtitle: "Developer • Remote • Full-time • US$40-70k",
      description: "Altura is looking for a blockchain developer that has solid experinace in Solidity, React and web3.",
      link: ""
    },
  ]

  return (
    <div>
      <div className="contact-us-div gradient-bg" >
        <div className="container" style={{height: "100%"}}>
          <div className="row" style={{height: "100%"}}>
            <div className="col col-12 my-auto">
              <h1 className="white title" style={{position: "relative", bottom: "100p", fontWeight: "800"}}>Job Positions</h1>
              <p style={{fontWeight: "800"}} className="white header-subtitle">
                Join Altura to be apart of the future of blockchain.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {
            jobs.map((job, i) => {
              return (
                <div className="col col-12 col-md-6 mb-3 text-left">
                  <Card style={{height: "100%"}}>
                    <CardBody>
                      <CardTitle className="mb-4">{job.title}</CardTitle>
                      <CardSubtitle className="mb-2">{job.subtitle}</CardSubtitle>
                      {job.description}
                      <br/>
                      <Button className="mt-3" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScHIzznUZ93eiTkGfFXn0mVQLgwpsI7ifmi-P8ZzJEadGfK1w/viewform?usp=sf_link">Apply Now</Button>
                    </CardBody>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
