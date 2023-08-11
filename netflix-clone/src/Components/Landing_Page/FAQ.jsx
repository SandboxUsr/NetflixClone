import React from "react";
import { Accordion } from "react-bootstrap"
import "../../Styles/faq.css"


export default function FAQ() {
  return (
    <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
      <Accordion className="mt-4 p-3 faq-accordian">
        <Accordion.Item eventKey="0" className="faq-item">
            <Accordion.Header className="faq-ques">What is Netflix?</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on 
                thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad
                all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="faq-item">
            <Accordion.Header className="faq-ques">How much does Netflix cost?</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. 
                Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="faq-item">
            <Accordion.Header className="faq-ques">Where can I watch?</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on 
                any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and 
                game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're 
                on the go and without an internet connection. Take Netflix with you anywhere.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="faq-item">
            <Accordion.Header className="faq-ques">How do I cancel</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. 
                There are no cancellation fees start or stop your account anytime.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="faq-item">
            <Accordion.Header className="faq-ques">What can I watch on Netflix?</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. 
                Watch as much as you want, anytime you want.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="faq-item">
            <Accordion.Header className="faq-ques">Is Netflix good for Kids?</Accordion.Header>
            <Accordion.Body className="bg-secondary text-light">
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in 
                their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch 
                and block specific titles you dont want kids to see.
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

        <div className="faq-footer">
            <h4 className="faq-footer-title">Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="faq-footer-details">
                <input className="faq-footer-details-email" type="email" name="usrEmail" id="usrEmail" placeholder="Email address"/>
                <button type="button" className="btn btn-danger faq-footer-details-button">Get Started &gt;</button>
            </div>
        </div>
    </div>
  );
}
