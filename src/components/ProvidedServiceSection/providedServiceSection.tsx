import React from "react";
import "./providedServiceSection.scss";
import List from "../List/list.tsx";
import InstDesignItem from "../InstDesignItem/instDesignItem.tsx";
const ProvidedServiceSection: React.FC = () => {
  return (
    <section className="provided-services">
      <div className="provided-services-search">
        <h1>Services We Provide</h1>
        <List />
      </div>
      <div className="provided-services-design">
        <div className="provided-services-design-description">
          <h1>WE DESIGN</h1>
          <span>LEARNING</span>
          <p>What We Can Do For You?</p>
          <button>Know more</button>
        </div>
        <img src="./imgs/human-image.png" alt="" />
        <hr />
      </div>
      <div className="instructional-design">
        <h1>Instructional Design</h1>
        <div className="instructional-design-description">
          <img src="./imgs/Ellipse1.png" alt="Instructional design " />
          <InstDesignItem
            title="We know learning inside and out"
            description="Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies."
            items={[
              "Each project requires a unique approach, and we are ready for the challenge",
              "Our expertise in the training and development industry will make your project a success",
              "Your goals and deadlines are our priority",
            ]}
          />
        </div>
      </div>
      <div className="clients-love">
        <InstDesignItem title="Our clients love the work we do" description="We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized." items={[
  "We start each project with a careful analysis of your learning needs.",
  "We constantly look for ways to save your time and money while exceeding your expectations.",
  "We don't stop working until you are satisfied with the products we deliver."
]}/>
<img src="./imgs/Ellipse2.png" alt="happy team" />
      </div>
    </section>
  );
};
export default ProvidedServiceSection;
