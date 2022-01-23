import {
  Email,
  // EmailOutlined,
  // LinkedIn,
  LocationCity,
  Phone,
  // PhoneAndroidOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { small } from "../responsive";

const MainContainer = styled.div`
  height: 100%;
  background-color: #1E90FF;
  color: black;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 3rem;
  ${small({ display: "inline" })}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;


const Footer = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Left>
            <div>
              <h2 style={{ textAlign: "start" }}>Electronic Commerce</h2>
            </div>
            <div>
              <p style={{ padding: "5px" }}>
              We have a wide range of Cameras and Lenses that will uplift your photography skills. The website is also home 
              to a gigantic variety of General-use Laptops, Gaming Laptops, Computers, Desktops and PCs available in different
              models and specifications to suit all your computing needs . If you love audio in high-definition, we offer
               different kinds of Speakers and Headphones from world-renowned brands to treat your ears to an unparalleled sound. 
              We also do have a section of hi-resolution Monitors and LEDs that deliver extremely sharp and lifelike images. 
              For business enterprises that have heavy data storage or hosting needs, Electronic Commerce offers heavy duty
              Servers that will securely house data for as long as it is required. We are also available with projectors, freezers
              ovens, BARCODE-Scanners etc
              </p>
            </div>
          </Left>
          <Right>
            <div>
              <h2 style={{ textAlign: "start" }}>Contact Us</h2>
            </div>
            <div>
              <p>
                <LocationCity /> Coimbatore,Tamilnadu.
              </p>
            </div>
            <div>
              <p>
                <Email /> mkandanmk7@gmail.com
              </p>
            </div>
            <div>
              <p>
                <Phone /> +91-9994304490
              </p>
            </div>
          </Right>
        </InnerContainer>
      </MainContainer>
      {/* <OwnerDiv>
        <div className="p-2"> Developed by Muthu</div>
        <div className="d-flex gap-1  ">
          <div>
            <EmailOutlined />
            mkandanmk7@gmail.com
          </div>
          <div>
            <LinkedIn />
            www.linkedin.com/in/muthu-web
          </div>
          <div>
            <PhoneAndroidOutlined />
            +91-9994304490
          </div>
        </div>
      </OwnerDiv> */}
    </>
  );
};

export default Footer;
