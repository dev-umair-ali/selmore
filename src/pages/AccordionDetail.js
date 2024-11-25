import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import bgimg from "../images/Glow-1.png";
import "../styles/Accordion.css";
import AddIcon from "@mui/icons-material/Add";
function AccordionDetail() {
  return (
    <div>
      <img src={bgimg} alt="bg" />
      <div className="accordion-main">
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span>01</span>
            Accordion 2How do i choose the best billboard location?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span>02</span>
            How long can i rent a billboard?{" "}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span>03</span>
            How long can i rent a billboard?{" "}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>{" "}
      </div>
    </div>
  );
}

export default AccordionDetail;
