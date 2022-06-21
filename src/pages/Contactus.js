import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { Backarrow } from "../components/Backarrow";
import "../styles/Contactus.css";
import { Header } from "../components/Header";

export const Contactus = () => {
  // const location = useLocation();

  return (
    <div>
      <Header />
      <p className="pagedata">
        Thank you for your interest in contacting Wikipedia. Before proceeding,
        some important disclaimers: Wikipedia has no central editorial board.
        Contributions are made by a large number of volunteers at their own
        discretion. Edits are neither the responsibility of the Wikimedia
        Foundation (the organisation that hosts the site) nor of its staff and
        edits will not generally be made in response to an email request.
        Although Wikipedia was founded by Jimmy Wales, he is not personally
        responsible for our content. If you have questions about the concept of
        Wikipedia rather than a specific problem, the About Wikipedia page may
        help. If you want to ask other users for help with editing or using
        Wikipedia, stop by the Teahouse, Wikipedia's live help channel, or the
        help desk to ask someone for assistance. If you disagree with an
        article's content, or are involved in a content dispute, see Dispute
        resolution. The links on the left should direct you to how to contact us
        or resolve problems. If you cannot find your issue listed there, you can
        email helpful, experienced volunteers at info-en@wikimedia.org. Please
        refrain from emailing about disagreements with content; they will not be
        resolved via email.
      </p>
    </div>
  );
};
