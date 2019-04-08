import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import {Titles} from '../../Constants';

export default class Website extends GenericComponent {
  render() {
    return (
      <div className="website">
        <section>
          <h1>{Titles.W.text}</h1>
          <p>What do you want your website to provide to your consumers?</p>
          <p>What value does that provide to your business?</p>
        </section>
        <section>
          <h1>{Titles.UG.text}</h1>
          <p>What actions committed by users would you consider
          qualify your website as a success?</p>
        </section>
        <section>
          <h1>{Titles.C.text}</h1>
          <p>What content are your users interested in consuming and producing?</p>
          <p>What formats of content would be most effective at engaging users?</p>
          <h2>Schema</h2>
          <p>What content has a clear stucture?</p>
          <p>Is there an appropriate schema.org schema that could be used?
            These schemas provide additional metadata that applications
            utilize to give more meaningful context and create more engaging
          experiences with your content.</p>
          <h2>Naming Conventions</h2>
        </section>
        <section>
          <h1>{Titles.ADA.text}</h1>
        </section>
        <section>
          <h1>{Titles.OM.text}</h1>
          <h2>SEO</h2>
          <h2>Personalization</h2>
          <h2>A/B Testing</h2>
          <h2>Remarketing</h2>
          <h2>Contact Management</h2>
          <h2>Email Marketing</h2>
        </section>
        <section>
          <h1>{Titles.DM.text}</h1>
          <h2>Privacy</h2>
          <h2>GDPR</h2>
        </section>
        <section>
          <h1>{Titles.S.text}</h1>
        </section>
        <section>
          <h1>{Titles.BRD.text}</h1>
        </section>
        <section>
          <h1>{Titles.P.text}</h1>
          <h2>{Titles.P.subtitles[0].text}</h2>
          <h2>{Titles.P.subtitles[1].text}</h2>
          <h2>{Titles.P.subtitles[2].text}</h2>
          <h3>{Titles.P.subtitles[2].subtitles[0].text}</h3>
          <h3>{Titles.P.subtitles[2].subtitles[1].text}</h3>
          <h3>{Titles.P.subtitles[2].subtitles[2].text}</h3>
          <h4>{Titles.P.subtitles[2].subtitles[2].subtitles[0].text}</h4>
          <h4>{Titles.P.subtitles[2].subtitles[2].subtitles[1].text}</h4>
          <h4>{Titles.P.subtitles[2].subtitles[2].subtitles[2].text}</h4>
          <h4>{Titles.P.subtitles[2].subtitles[2].subtitles[3].text}</h4>
          <h3>{Titles.P.subtitles[2].subtitles[3].text}</h3>
          <h2>{Titles.P.subtitles[3].text}</h2>
          <h3>{Titles.P.subtitles[3].subtitles[0].text}</h3>
          <h3>{Titles.P.subtitles[3].subtitles[1].text}</h3>
          <h3>{Titles.P.subtitles[3].subtitles[2].text}</h3>
          <h4>{Titles.P.subtitles[3].subtitles[2].subtitles[0].text}</h4>
          <h4>{Titles.P.subtitles[3].subtitles[2].subtitles[1].text}</h4>
          <h4>{Titles.P.subtitles[3].subtitles[2].subtitles[2].text}</h4>
          <h4>{Titles.P.subtitles[3].subtitles[2].subtitles[3].text}d</h4>
          <h4>{Titles.P.subtitles[3].subtitles[2].subtitles[4].text}d</h4>
       </section>
        <section>
          <h1>{Titles.G.text}</h1>
          <h2>Subtitle</h2>
          <p>Content</p>
          <button onClick={() => console.log(Titles.P.subtitles[3].text)}>Console</button>
        </section>
        {this.props.children}
      </div>
    );
  }
}