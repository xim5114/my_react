import React from 'react'

const contactText = [
    {
        link: "https://xim5114.dothome.co.kr",
        title: "xim5114.dothome.co.kr",
    },
    {
        link: "mailto:xim5114@naver.com",
        title: "xim5114@naver.com",
    }
]

const Contact = () => {
    return (
        <section id='contact'>
            <div className="contact_inner">
                <h2 className='contact_title'>contact</h2>
                <div className="contact_lines" aria-hidden='true'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                <div className="contact_text">
                    <div className="text">

                        {contactText.map((contact, key) => (
                            <div key={key}><a href={contact.link} target='_blank' rel='noreferrer'>{contact.title}</a></div>
                        ))}

                    </div>
                </div>
                <div className="contact_lines bottom" aria-hidden='true'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
        </section>
    )
}

export default Contact
