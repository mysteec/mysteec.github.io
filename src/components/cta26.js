import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Join Us in Making a Difference
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Become a volunteer today and bring joy to the lives of
                        seniors in need.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    
                      <Fragment>
                        <span className="cta26-text6"><a href='https://docs.google.com/forms/d/e/1FAIpQLSf-Yzk5qHWPmg9ZbvTC2X6NAF7DbIDzgEaRAuKq6FY_x7F1SQ/viewform?usp=dialog' target="_blank">Be a volunteer</a></span>
                      </Fragment>
                  
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
