import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Footer } from "react-materialize";

class PageFooter extends Component {
  render() {
    return (
      <Footer
        moreLinks={
          <a className="white-text" href="//notyteam.com.ua">
            <FormattedMessage id="footer.copyrights" />: Skvader&NotyTeam
          </a>
        }
        className="black"
      >
        <div className="footer-wrap">
          <a className="white-text" href="mailto:ua.football@mygame4u.com">
            ua.football@mygame4u.com
          </a>
          <a className="white-text" href="tel:+380660365296">
            +38 (066) 036 52 96
          </a>
        </div>
      </Footer>
    );
  }
}

export default PageFooter;
