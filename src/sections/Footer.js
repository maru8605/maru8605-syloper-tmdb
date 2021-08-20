import React from "react";
import "../sass/section/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    return (
        <section className='container-footer'>
          <div>
            <h4 className='text-center mt-3'>Build by</h4>
          </div>
          <div className='footer'>
            <p className='pe-3'>María Moreno</p>
            <a className='pe-3' href='https://www.linkedin.com/in/maria-moreno86/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className='pe-3'  href='https://github.com/maru8605'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className='policy'>
            <p className='text-center'>
              ©2021  All rights reserved
              <a
                target='_blank'
                href='https://jason.codes/cookie-policy/'
                rel='noopener noreferrer'
              >
                Cookie Policy
              </a>
            </p>
            <p className='text-center'>
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

