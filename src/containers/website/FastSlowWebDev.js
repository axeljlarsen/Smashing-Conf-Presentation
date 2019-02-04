import React, { Component } from "react";
import GenericComponent from "../../components/GenericComponent.js";

export default class FastSlowWebDev extends GenericComponent {
  render() {
    return (     
    <section>
      <h1>The Fast/Slow Layers of Development</h1>
      <h2>Pace Layering</h2>
      <p>Pace layering is a model which distributes several selected categories across a hierarchy of layers based on the difficulty and impact that changes to each layer has. The following is an example that describes several layers that relate to or impact society. Changes to the first layer occur the most frequently and have little impact on the layers below it. As the layers progress the frequency of change lessens and the impact those changes have across the other layers grows.</p>
      <ol>
        <li>Fashion</li>
        <li>Commerce</li>
        <li>Infrastructure</li>
        <li>Governance</li>
        <li>Culture</li>
        <li>Nature</li>
        </ol>
        <p>
          Pace layering can be applied to companies and development teams as well. One example of this could be shown as the following:
        </p>
        <ol>
        <li>Tooling: technologies and languages used to develop a specific technology</li>
        <li>Patterns: shared frameworks, patterns, or solutions across projects</li>
        <li>People: team members, stakeholders, community</li>
        <li>Documentation: principals and policy, brand, design systems</li>
        <li>Governance: team dynamics, roles and responsibilities, established processes</li>
        <li>Foundations: URL, brand, nomenclature</li>
        </ol>
        <p>Using this model you can reframe the prioritization of what foundations to establish for a given project.
           Whether you use Technology A or Technology B to satisfy a set of business requirements, the decision's impact is likely to be superficial over the lifespan of the project.
           Alternatively, establishing nomenclature will reduce miscommunicating across teams and teammembers and increase the code's meaningfulness and consistency.
           Furthermore, the scope of changing which technology is used to solve a set of requirements will likely be less than the scope to a change in nomenclature.
           For example, changing a specialized term could require code changes throughout the application and changes to digital and printed marketing resources, advertisements, internal documentation and training materials, etc.  </p>
        <p></p>
      
    </section>
    
    );
  }
}