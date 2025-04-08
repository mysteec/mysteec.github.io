import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'


import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NSS</title>
        <meta property="og:title" content="Frilly Velvety Wildcat" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Have questions or want to get involved? Reach out to us through
              the contact form below.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Involved</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">volunteer-opportunities</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact Us</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Volunteer Opportunities</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">contact-us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Youth &amp; Seniors Connection, where we bridge the
              generation gap with compassion and care.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore various volunteer opportunities to make a difference in
              the lives of seniors in old age homes.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">programs</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Programs</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover our unique programs like &apos;Adopt a Grandparent&apos;
              and &apos;Wish Wall&apos; that bring joy and connection.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
            Bridging Generations, One Connection at a Time
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
            Join a movement where compassion meets action. Connect with seniors, support NGOs, and build lasting bonds through volunteering.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Fulfill small wishes of seniors in old age homes to bring joy and
              happiness to their lives.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Wish Wall</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Send anonymous messages of love and support to seniors in old age
              homes through our platform.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Adopt a Grandparent</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Volunteers can sign up to make weekly calls and provide care to a
              senior citizen in an old age home.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">
              Letters to the Superior Pookies
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Join Us in Making a Difference</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Become a volunteer today and bring joy to the lives of seniors in
              need.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign Up Now</span>
          </Fragment>
        }
      ></CTA26>
      
      
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Fill out our Google Form to sign up as a volunteer and indicate
              your availability and interests in helping seniors.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Our team will match you with a senior based on your preferences
              and availability, ensuring a meaningful connection.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Choose Your Program</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Select from programs like &apos;Adopt a Grandparent,&apos;
              &apos;Letters to the Superior Pookies,&apos; &apos;Wish
              Wall,&apos; or &apos;Bado Ka Sikhaya&apos; for mutual learning.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Sign Up as a Volunteer</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Get Matched</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Once matched, start engaging with your senior through calls,
              messages, fulfilling wishes, or participating in mutual learning
              activities.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Start Making a Difference</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">NGO Coordinator</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Student Volunteer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Chhavi Sharma</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Anish Ahuja</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Our NGO has been able to find dedicated student volunteers through
              this platform for our events and daily assistance programs. It has
              been a great help in fulfilling our mission.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Himank Jain</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Community Member</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Dhruv Sharma</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Volunteering at the old age home has been a truly rewarding
              experience. I have made meaningful connections with the seniors
              and learned so much from them.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Student Volunteer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I never knew spending time with the elderly could bring so much
              joy and wisdom into my life. Thank you for this opportunity!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              The &apos;Adopt a Grandparent&apos; program has brought so much
              joy and companionship to our seniors. It warms my heart to see the
              connections formed through this initiative.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              I am grateful for the &apos;Wish Wall&apos; feature as it allows
              us to fulfill small wishes of the seniors in our community.
              It&apos;s heartwarming to see their smiles when their wishes come
              true.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              If you have any questions or would like to get involved, please
              reach out to us using the contact information below.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Visit us at our office location.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Send us an email for inquiries and volunteer opportunities.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">
              BIT MESRA OFF CAMPUS JAIPUR
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">
              chhavish2004@gmail.com
            </span>
          </Fragment>
        }
      ></Contact10>
      
    </div>
  )
}

export default Home
