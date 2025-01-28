import React from "react";
import "./providedServiceSection.scss";
import List from "../List/list.tsx";
const ProvidedServiceSection: React.FC = () => {
  return (
    <section className="provided-services">
      <div className="provided-services-search">
        <h1>Services We Provide</h1>
        <List />
      </div>
    </section>
  );
};
export default ProvidedServiceSection;
