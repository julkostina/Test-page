import React from "react";
import "./talkAboutSection.scss";
import FormELement from "../Form/form.tsx";
const TalkAboutSection: React.FC = () => {
    return (
        <section id="talk-about-section">
            <div className="talk-about-section-caption">
            <h1>Talk To Us About Your Project</h1>
            <p>We will never send spam or add you to a mailing list</p>
            </div>
            <FormELement/>
        </section>
    )
}
export default TalkAboutSection;