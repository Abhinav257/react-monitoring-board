import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  overflow: hidden;
  padding-right: 39px;
  position: relative;
  border-right: 2px solid #ccc;
  @media (max-width: 1088px) {
    flex-direction: row;
    border: none;
    padding-top: 1%;
    padding-bottom: 0%;
  }
`;

const Card = styled.div`
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 7px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;

  ${(props) =>
    props.isSpecial &&
    `
  background: rgba(70, 67, 238, 0.10);
  color: #4643EE;
`}
`;

const Headings = [
  "Overview",
  "Onboarding",
  "Monitoring",
  "Flagging",
  "Source of Income",
  "UAR"
];

function Heading() {
  return (
    <Item>
      <img
        style={{
          width: "100px",
          paddingTop: "10%",
          paddingLeft: "10%",
          marginBottom: "120px"
        }}
        src="https://cdn.juno.finance/company-assets/juno-logo-combined.svg"
      />
      {Headings.map((heading, index) => (
        <Card key={index} isSpecial={index === 2}>
          <div
            style={{
              color: index === 2 ? "#4643EE" : "#777676",
              fontSize: "16px",
              fontFamily: "Lettera Text LL",
              fontWeight: 500,
              wordWrap: "break-word"
            }}
          >
            {heading}
          </div>
        </Card>
      ))}
      <div style={{ display: "flex", marginTop: "190px" }}>
        <img
          style={{
            width: "50px"
          }}
          src="https://w7.pngwing.com/pngs/447/446/png-transparent-elon-musk-tesla-motors-tesla-model-3-spacex-tesla-company-car-transport-thumbnail.png
    "
        />
        <div>
          <div
            style={{ marginTop: "5px", marginLeft: "3px", fontSize: "14px" }}
          >
            
            Elon Musk
          </div>
          <p
            style={{
              marginLeft: "3px",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "2px"
            }}
          >
            elon@twitter.com
          </p>
        </div>
      </div>
    </Item>
  );
}

export default Heading;
