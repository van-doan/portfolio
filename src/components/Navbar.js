// G L O B A L   I M P O R T S //
import React, { useState } from 'react';
import Modal from 'react-modal';


// M E D I A   I M P O R T S //
import img from '../media/images/andy_headshot.jpeg'
import { FaCss3Alt, FaHtml5, FaPython, FaSass, FaJs, FaReact } from "react-icons/fa";
import { DiDjango, DiNodejsSmall, DiPostgresql, } from "react-icons/di";
// import Express from '../media/icons/express-js.svg'

Modal.setAppElement("#root");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setText] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    setText(!status);
  }

  return (
    <nav className="about-modal">
      <a className="about" onClick={toggleModal}>{status ? 'CLOSE' : 'ABOUT'}</a>
      <Modal 
        isOpen={isOpen}
        overlayClassName="modal-overlay"
        className="modal"
        onRequestClose={toggleModal}
        closeTimeoutMS={500}>
          <div className="aboutme">
            <div className="about-section">
              <div className="head-section">
                <h1 className="greeting">Hello,</h1>
                <h1 className="greeting2">I'm Andy <span className="highlight">Van Doan.</span></h1>
                <p className="desc">I'm a Chicago-based, full-stack savvy software engineer.</p>
                <p className="desc">I design and build engaging, performant applications.</p>
                <p className="desc">Machine learning and automation energize me.</p>
                <p className="desc">If you have any cool projects or opportunities, let's work together!</p>
              </div>
              <div className="subsection">
                <h3>Education</h3>
                <p className="subdesc">Text text text</p>
              </div>
              <div className="subsection">
              <h3>Experience</h3>
                <p className="subdesc">Text text text</p>
              </div>
            </div>
            <div className="about-section2">
              <img src={img} className="headshot"/>
              <div className="techstack">
                <div className="type">
                <h3 className="title">Recent Front-end</h3>
                  <div className="icons">
                    <div className="single-icon">
                      <div className="icon">
                        <FaJs/>
                      <div className="label">JS</div>
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                        <FaHtml5/>
                      <div className="label">HTML5</div>
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                        <FaCss3Alt/>
                      <div className="label">CSS3</div>
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                        <FaSass/>
                      <div className="label">Sass</div>
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                        <FaReact/>
                      <div className="label">React</div>
                      </div>
                    </div>
                  </div>
                </div>                
                <div className="type">
                  <h3 className="title">Recent Back-end</h3>
                    <div className="icons">
                      <div className="single-icon">
                        <div className="icon">
                          <FaPython/>
                          <div className="label">Python</div>
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                          <DiDjango/>
                        <div className="label">Django</div>
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                        <DiNodejsSmall/>
                        <div className="label">Node.js</div>
                        </div>
                      </div>
                      {/* <div className="single-icon">
                        <div className="icon">
                        
                        <div className="label">Express</div>
                        </div>
                      </div> */}
                      <div className="single-icon">
                        <div className="icon">
                          <DiPostgresql/>
                        <div className="label">Postgresql</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </nav> 
  )
}

export default Navbar;