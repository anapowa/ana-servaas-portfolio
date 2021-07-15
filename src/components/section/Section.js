import React from 'react';
export const Section = ({sections}) => {
    console.log(sections)
    return (
        <div>
            {sections.map((section) => (
                <section key={section.id} id={section.id} className = "main-section">
                    <h2 className="sec-title">{section.title}</h2>
                    {section.content}
                </section>
            ))}
        </div>
    )
}