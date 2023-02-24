import React from "react";
import styled from "styled-components";
import home_img from "../../assets/home.jpg";
import appointment_img from "../../assets/appointment.jpg";
import filter_img from "../../assets/filter_new.jpg";
import res_img1 from "../../assets/res_img1.jpg";
import res_img2 from "../../assets/res_img2.jpg";
import res_img3 from "../../assets/res_img3.jpg";
import res_img4 from "../../assets/res_img4.jpg";
import res_img5 from "../../assets/res_img5.jpg";
import res_img6 from "../../assets/res_img6.jpg";

const Home = () => {
  return (
    <StyledHome className="home">
      <StyledSectionOne className="section-1">
        <div className="section-details">
          <h1>Last Serve</h1>
          <p>Let's end the hunger together.</p>
        </div>
        <div className="section-img">
          <img src={home_img} alt="home_img" />
        </div>
      </StyledSectionOne>
      <StyledSectionTwo className="section-2">
        <div className="section-header-wrapper">
          <h4>
            Are you a restaurant that has to throw away cooked food daily?
          </h4>
          <button>Register Today</button>
        </div>
        <div className="section-body-wrapper">
          <div className="section-content">
            <h5>Create Posts Daily to donate food in seconds</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ducimus aliquam praesentium! Quae libero cumque dolor corporis
              adipisci ipsum eligendi praesentium facere? Dicta explicabo
              necessitatibus sunt aut vel doloribus? Cumque.
            </p>
            <button>Learn more</button>
          </div>
          <div className="section-content">
            <h5>Get help from our Volunteers on our platform</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ducimus aliquam praesentium! Quae libero cumque dolor corporis
              adipisci ipsum eligendi praesentium facere? Dicta explicabo
              necessitatibus sunt aut vel doloribus? Cumque.
            </p>
            <button>Learn more</button>
          </div>
          <div className="section-content">
            <h5>Manage the orders via Dashboard</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ducimus aliquam praesentium! Quae libero cumque dolor corporis
              adipisci ipsum eligendi praesentium facere? Dicta explicabo
              necessitatibus sunt aut vel doloribus? Cumque.
            </p>
            <button>Learn more</button>
          </div>
          <div className="section-content">
            <h5>Tempor incididunt</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ducimus aliquam praesentium! Quae libero cumque dolor corporis
              adipisci ipsum eligendi praesentium facere? Dicta explicabo
              necessitatibus sunt aut vel doloribus? Cumque.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </StyledSectionTwo>
      <StyledSectionThree className="section-3">
        <div className="section-header-wrapper">
          <h4>We are bulding a better community by feeding the hungry.</h4>
          <button>Join Our Community</button>
        </div>
        <div className="section-body-wrapper">
          <div className="section-body-img">
            <img src={appointment_img} alt="appointment_img" />
          </div>
          <div className="section-body-content">
            <h5>Scedule appointments and pickup leftover food</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              non aliquid accusantium architecto dolores dolore a quas commodi
              eos. Ipsam totam consequatur rerum asperiores laborum.
            </p>
          </div>
        </div>
        <div className="section-body-wrapper">
          <div className="section-body-content">
            <h5>Filter restaurants based on zipcode and food preference.</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              non aliquid accusantium architecto dolores dolore a quas commodi
              eos. Ipsam totam consequatur rerum asperiores laborum.
            </p>
          </div>
          <div className="section-body-img">
            <img src={filter_img} alt="filter_img" />
          </div>
        </div>
      </StyledSectionThree>
      <StyledSectionFour className="section-4">
        <div className="section-header-wrapper">
          <h4>Our Partners</h4>
          <p>
            These restaurants have regularly donated food using our application.
          </p>
        </div>
        <div className="section-body-wrapper">
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img1} alt="res_img1" />
            </div>
          </div>
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img2} alt="res_img2" />
            </div>
          </div>
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img3} alt="res_img3" />
            </div>
          </div>
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img4} alt="res_img4" />
            </div>
          </div>
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img5} alt="res_img5" />
            </div>
          </div>
          <div className="section-body-content">
            <div className="section-body-img">
              <img src={res_img6} alt="res_img6" />
            </div>
          </div>
        </div>
      </StyledSectionFour>
    </StyledHome>
  );
};

const StyledHome = styled.div``;

const StyledSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  .section-details {
    flex-basis: 40%;
    padding: 2rem 2rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 8rem;
      font-weight: 500;
    }
    p {
      font-size: 6rem;
      color: rgb(161, 161, 161);
      font-weight: 300;
    }
  }

  .section-img {
    flex-basis: 60%;
    padding-top: 1rem;
    /* display: none; */
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 1120px) {
    height: 65vh;
    padding: 3rem 1rem 2rem 1rem;
    .section-details {
      flex-basis: 100%;
      padding: 0;
      h1 {
        font-size: 5.5rem;
      }
      p {
        font-size: 3.5rem;
      }
    }
    .section-img {
      flex-basis: 100%;
      overflow: hidden;
    }
  }
  @media only screen and (min-width: 435px) and (max-width: 1120px) {
    padding: 2rem 2rem 2rem 5rem;
  }
`;

const StyledSectionTwo = styled.div`
  background-color: rgb(239, 240, 243);
  padding: 6rem 2rem;
  .section-header-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      text-align: center;
      font-size: 3rem;
      font-weight: 300;
    }

    button {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border: none;
      width: fit-content;
      font-size: 1.5rem;
      :hover {
        cursor: pointer;
      }
    }
  }

  .section-body-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      flex-basis: 40%;
      h5 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: 200;
        text-align: justify;
      }
      button {
        background-color: white;
        padding: 1rem;
        border: 1px solid rgb(2, 127, 254);
        color: rgb(2, 127, 254);
        border-radius: 5px;
        width: fit-content;
        :hover {
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 432px) {
    .section-header-wrapper {
      h4 {
        font-size: 3rem;
      }
    }
    .section-body-wrapper {
      padding: 3rem 1rem;
      .section-content {
        flex-basis: 100%;
      }
    }
  }
`;

const StyledSectionThree = styled.div`
  margin-top: 2rem;
  padding: 5rem 2rem;
  .section-header-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      text-align: center;
      font-size: 3rem;
      font-weight: 300;
    }

    button {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border: none;
      width: fit-content;
      font-size: 1.5rem;
      :hover {
        cursor: pointer;
      }
    }
  }
  .section-body-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem;
    gap: 2rem;
    justify-content: space-between;
    .section-body-img {
      flex-basis: 45%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .section-body-content {
      flex-basis: 45%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      font-size: 2rem;
      h5 {
        font-size: 2.5rem;
        font-weight: 400;
      }
      p {
        font-weight: 200;
      }
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    .section-header-wrapper {
      h4 {
        font-size: 3rem;
      }
    }
    .section-body-wrapper {
      padding: 3rem 1rem;
      .section-body-img {
        flex-basis: 100%;
      }
      .section-body-content {
        flex-basis: 100%;
      }
    }
    .section-body-wrapper:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  }
`;

const StyledSectionFour = styled.div`
  padding: 5rem 2rem;
  .section-header-wrapper {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      font-size: 4rem;
      font-weight: 400;
    }
    p {
      font-weight: 200;
    }
  }
  .section-body-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10rem;
    margin-top: 6rem;
    .section-body-content {
      .section-body-img {
        width: 120px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;

export default Home;
