import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="containers">
      <div className="row">
        <div className="col-md-3">
          <div className="widget dark">
            <img className="mt-10 mb-15" alt="" src={logo} />
            <p className="font-16 mb-10">
              Maruthi InfoTech is a small but capable Internet consulting
              company located in India, founded in 2013.
              <a className="font-14" href="../page/overview.aspx">
                <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                Read more
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">Quick Links</h5>
            <ul className="list angle-double-right list-border">
              <li>
                <a href="../page/portfolio.aspx">Service</a>
              </li>
              <li>
                <a href="../page/portfolio.aspx">Portfolio</a>
              </li>
              <li>
                <a href="../page/process.aspx">Process</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">Useful Links</h5>
            <ul className="list angle-double-right list-border">
              <li>
                <a href="../page/overview.aspx">Company Overview</a>
              </li>
              <li>
                <a href="../page/privacy.aspx">Privacy Policy</a>
              </li>
              <li>
                <a href="../page/terms.aspx">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">Quick Contact</h5>
            <ul className="list-border">
              <li>
                <a href="#">+91 95000 45128 / +9144 2558 2681</a>
              </li>
              <li>
                <a href="#">info@maruthiinfotech.com</a>
              </li>
              <li>
                <a href="#" className="lineheight-20">
                  No.19A, Kamarajar Salai, Kodungaiyur, Chennai, INDIA, Pin -
                  600118
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
