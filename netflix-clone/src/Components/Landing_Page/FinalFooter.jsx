import React from "react";
import "../../Styles/footer.css";

export default function FinalFooter() {
  return (
    <div className="final-footer-container">
      <p className="final-footer-contact-no">
        Questions? Call{" "}
        <a className="text-white" href="https://help.netflix.com/en/contactus">
          000-800-919-1694
        </a>
      </p>
      <table className="table table-borderless table-dark final-footer-table">
        <tbody>
          <tr>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/en/node/412"
              >
                FAQ
              </a>
            </td>
            <td>
              <a className="text-white" href="https://help.netflix.com/en/">
                Help Centre
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount"
              >
                Account
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a className="text-white" href="https://media.netflix.com/en/">
                Media Center
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://ir.netflix.net/ir-overview/profile/default.aspx"
              >
                Invester Relations
              </a>
            </td>
            <td>
              <a className="text-white" href="https://jobs.netflix.com/">
                Jobs
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a className="text-white" href="https://devices.netflix.com/en/">
                Ways to Watch
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/legal/termsofuse"
              >
                Terms of Use
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/legal/privacy"
              >
                Privacy
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a className="text-white" href="https://www.netflix.com/in/#">
                Cookie Preference
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/legal/corpinfo"
              >
                Corporate Information
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/en/contactus"
              >
                Contact Us
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a className="text-white" href="https://fast.com/">
                Speed Test
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://help.netflix.com/legal/notices"
              >
                Legal Notices
              </a>
            </td>
            <td>
              <a
                className="text-white"
                href="https://www.netflix.com/in/browse/genre/839338"
              >
                Only on Netflix
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
          <select className="final-footer-language" name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
          </select>
      </div>
      <div style={{color: "white", marginTop: "20px"}}>Netflix India</div>
    </div>
  );
}
