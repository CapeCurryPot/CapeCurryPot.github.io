import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import landingImg from "../images/landingimage.jpg"
import MenuComponent from "../components/menu"
import chefImage from "../images/chef.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import Reviews from "../components/reviews"

const IndexPage = props => {
  const landingContent = props.data.landingContent.frontmatter

  return (
    <Layout>
      <HomeStyles>
        <div className="landing">
          <div className="landing-box">
            <h2>{landingContent.landingHeading}</h2>
            <p>{landingContent.landingSubtext}</p>
            <p>{landingContent.landingSubSubtext}</p>
            <p>{landingContent.landingSubSubSubtext}</p>
            <Link to="/menu">
              <ActionButton>View our menu</ActionButton>
            </Link>
          </div>
        </div>
        <div className="res-info">
          <div className="res-info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h3 className="title">Adresse</h3>
            <p>Schildhornstr. 18, 12163 Berlin</p>
          </div>
          <div className="res-info-item">
            <FontAwesomeIcon icon={faClock} />
            <h3 className="title">Öffnungszeiten</h3>
            <p>Dienstag bis Freitag: 11:30 - 14:00  &  17:30 - 22:00</p>
            <p>Wochenende und Feiertage: 16:00 - 22:00</p>
          </div>
          <div className="res-info-item">
            <FontAwesomeIcon icon={faPhone} />
            <h3 className="title">Mobilnummer</h3>
            <p>+4915734872143</p>
          </div>
          <div className="res-info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className="title">Email</h3>
            <p>info@capecurrypot.de</p>
          </div>
        </div>
        <AboutSection>
          <div className="text-section">
            <h2>Bekannt aus Funk und Fernsehen</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>
          <div class="img-div video">
            <video src="http://player.vimeo.com/video/410588697" width="480" height="270" controls></video>
          </div>
        </AboutSection>
        <section>
          <Reviews />
        </section>
        <MenuComponent />
      </HomeStyles>
    </Layout>
  )
}

var AboutSection = styled.section`
  padding: 60px 15px;
  max-width: 800px;
  margin: auto;
  margin-top: 44px;
  margin-bottom: 44px;
  img {
    height: 450px;
    margin: auto;
  }
  .text-section {
    h3 {
      color: #969696;
      font-family: Lora;
      font-size: 18px;
      font-weight: 400;
      font-style: italic;
      line-height: 32px;
    }

    h2 {
      font-family: Lora, Georgia, serif;
      font-style: normal;
      line-height: 62px;
      font-size: 44px;
      color: #404044;
    }
    p {
      font-family: Poppins, Arial, sans-serif;
      color: #7d7d7d;
      font-size: 15px;
      line-height: 27px;
    }
  }
  .img-div {
    text-align: center;
  }
  .video {
    padding-left: 100px;
  }
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 50% 50%;

    .img-div {
      text-align: right;
    }
  }
`
var ActionButton = styled.button`
  background: #ff6107;
  font-style: normal;
  line-height: 17px;
  color: #fff;
  border: 2px solid #ff6107;
  margin-right: 4px;
  margin-bottom: 4px;
  font-size: 13px !important;
  border-radius: 30px;
  font-weight: 400;
  font-family: "Lora", Georgia, serif;
  text-transform: uppercase;
  padding: 18px 36px !important;
`

var HomeStyles = styled.div`
  font-family: Lora !important;
  min-height: 100vh;
  .landing {
    padding-top: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${landingImg});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    .landing-box {
      max-width: 550px;
      p {
        font-style: normal;
        line-height: 29px;
        font-size: 16px;
        font-weight: 400;
      }
    }
    h2 {
      font-family: Lora;
      font-weight: 400;
      font-style: normal;
      font-size: 44px;
      line-height: 57px;
    }
  }
  .res-info {
    padding: 40px 16px;
    color: #fff;
    background-color: #302939;
    text-align: center;
    .res-info-item {
      svg {
        height: 24px;
        margin-bottom: 4px;
      }
      .title {
        font-weight: 500;
        line-height: 18px;
        font-size: 16px;
        margin-bottom: 15px;
        font-family: Lora, Georgia, serif;
      }
      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
      }
    }
    @media (min-width: 1025px) {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
`


export const query = graphql`
  query {
    landingContent: markdownRemark(
      fileAbsolutePath: { regex: "/landing-content.md/" }
    ) {
      frontmatter {
        landingHeading
        landingSubtext
        landingSubSubtext
        landingSubSubSubtext
      }
    }
  }
`
export default IndexPage
