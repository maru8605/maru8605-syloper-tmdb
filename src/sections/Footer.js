import React from "react";
import "../sass/section/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <section className='container-footer'>
      <div className='names-box'>
        <h3> Built by</h3>
        <div>
            María Moreno
            <a
              href={`https://www.linkedin.com/in/maria-moreno86/`}
              className='links-footer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={`https://github.com/hrchioest`} className='links-footer'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            </div>

          </div>
      <div className='rights-box'>
        <p>
          ©2020 Ada 9° Generacion. All rights reserved
          <a
            target='_blank'
            href='https://jason.codes/cookie-policy/'
            rel='noopener noreferrer'
          >
            Cookie Policy
          </a>
        </p>
        <p>
          Data provided by
          <a
            target='_blank'
            href='https://www.themoviedb.org/'
            rel='noopener noreferrer'
          >
            TMDb
          </a>
        </p>
      </div>
    </section>
    )
}

export default Footer

