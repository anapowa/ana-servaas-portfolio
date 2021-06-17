export const Section = ({sections}) => {
    return (
        <>
            {sections.map((section) => (
                <section key={section.id} id={section.id}>
                    <h2 className="sec-title">{section.Title}</h2>
                    {section.content}
                </section>
            ))}
        </>
    )
}