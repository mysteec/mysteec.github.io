import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    If you have any questions or would like to get involved,
                    please reach out to us using the contact information below.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Address: BIT MESRA OFF CAMPUS JAIPUR NSS
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Visit us at our office location.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
             
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Email: chhavish2004@gmail.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Send us an email for inquiries and volunteer opportunities.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1574740981348-fe6e45e9a294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA4ODM2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1652811631129-bed15ba35d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA4ODM2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2ImageAlt: 'Email Icon',
  heading1: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Office Location Image',
  location1: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
