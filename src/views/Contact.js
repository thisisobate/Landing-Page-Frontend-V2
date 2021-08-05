import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Button, FormSelect } from "shards-react";
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress, makeStyles } from '@material-ui/core/';
import { useParams } from "react-router-dom"

const queryString = require('query-string');

export default function RequestCollectionVerifiation(props){
  const [ subject, setSubject ] = useState('General');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const [ nameMissing, setNameMissing ] = useState(false);
  const [ emailMissing, setEmailMissing ] = useState(false);
  const [ messageMissing, setMessageMissing ] = useState(false);

  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const subjects = ["General",
                    "Help",
                    "Feedback",
                    "Partnership",
                    "Media",
                    "Bug report"];

  let { defaultSubject } = useParams();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  useEffect(() => {
    if (defaultSubject && subjects.includes((defaultSubject.charAt(0).toUpperCase() + defaultSubject.slice(1))))  {
      setSubject((defaultSubject.charAt(0).toUpperCase() + defaultSubject.slice(1)))
    }else{
      setSubject('General')
    }
  }, [])

  function submitForm(){
    setNameMissing(false)
    setEmailMissing(false)
    setMessageMissing(false)

    if (!name) return setNameMissing(true)
    if (!email) return setEmailMissing(true)
    if (!message) return setMessageMissing(true)

    setLoading(true)
    axios.post("/api/contact", queryString.stringify({subject: subject, name: name, email: email, message: message}))
    .then(res => {
      setOpen(true)
      setSubject('General')
      setName('')
      setEmail('')
      setMessage('')
      setLoading(false)
    })
    .catch(err => {

    })
  }

  return (
    <div>
      <div className="contact-us-div gradient-bg" >
        <div className="container" style={{height: "100%"}}>
          <div className="row" style={{height: "100%"}}>
            <div className="col col-12 my-auto">
              <h1 className="white title" style={{position: "relative", bottom: "100p", fontWeight: "800"}}>Contact Altura</h1>
              <p style={{fontWeight: "800"}} className="white header-subtitle">
                At Altura, we are here for the community. Fill in the contact form below and
                we will connect you with the right person
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-form-container text-left">
        <div className="row justify-content-center">
          <div className="col col-12 col-lg-9">
            <h2 className="mb-4" style={{fontWeight: "600", lineHeight: "3rem"}}>
              What Can We Help You With?
            </h2>
            <p>We will try to get back to you within 48 hours.</p>
            <Form>
              <Form.Group>
                <Form.Label>Subject*</Form.Label>
                <FormSelect onChange={e => {setSubject(e.target.value)}} value={subject}>
                  {
                    subjects.map((sub, i) => {
                      return (
                        <option value={sub}>{sub}</option>
                      )
                    })
                  }
                </FormSelect>
              </Form.Group>

              <Form.Group>
                <Form.Label>Name*</Form.Label>
                <Form.Control isInvalid={nameMissing} onChange={e => setName(e.target.value)} value={name} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email*</Form.Label>
                <Form.Control isInvalid={emailMissing} type="email" onChange={e => setEmail(e.target.value)} value={email} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message*</Form.Label>
                <Form.Control isInvalid={messageMissing} as="textarea" rows={3} onChange={e => setMessage(e.target.value)} value={message} />
              </Form.Group>

              <Button onClick={e => {
                  e.preventDefault()
                  submitForm()
                }} variant="primary" pill type="submit">
                <CircularProgress style={{display: loading ? "" : "none", color: "white", width: "20px", height: "20px"}} />
                <span style={{display: loading ? "none" : ""}}>Submit</span>
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{backgroundColor: "#00d1ff"}}>
          Sent to the Altura Team!
        </Alert>
      </Snackbar>
    </div>
  )
}
