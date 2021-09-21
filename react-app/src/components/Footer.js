import React from 'react'

import './Footer.css'

export default function Footer() {

    function projectCredits(name, github, linkedin) {
        return (
            <div>
                <div className='footer__name'>
                    {name}
                </div>
                <div className='footer__links'>
                    <a href={github} target='_blank'><i className="fab fa-github"></i></a>
                    <a href={linkedin} target='_blank'><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }

    return (
        <div id='footer'>
            {projectCredits('Christian Brown', 'https://github.com/chrisbh4', 'https://www.linkedin.com/in/christian-brown-8770311ba/')}
            {projectCredits('Manna Kong', 'https://github.com/makon57', 'https://www.linkedin.com/in/manna-kong/')}
            {projectCredits('Michelle Kontoff', 'https://github.com/michellekontoff', 'https://www.linkedin.com/in/michelle-kontoff-149866132/')}
            {projectCredits('Steffano Vidal-Espinoza', 'https://github.com/steffano2021', 'https://www.linkedin.com/in/steffanovidal/')}
        </div>
    )
}
