import React from "react";

const AboutMe = () => {
  return (
    <section id="about">
      <header>
        <h4>Hi I'm</h4>
        <h2>Sunil Park</h2>
      </header>
      <main className="about__contact">
        <article className="about__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nesciunt maxime alias quidem cumque modi minima,
            expedita suscipit laudantium explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            asperiores culpa provident incidunt, perferendis nemo deserunt
            laboriosam blanditiis modi quas eius illo magni ratione explicabo
            omnis eligendi iusto! Quisquam labore repellat nobis officiis
            ducimus ut, soluta in dicta ratione suscipit! Quod ex dolores
            repudiandae voluptates delectus cupiditate omnis soluta ea?
          </p>
        </article>
        <div className="about__link">
          <div className="about__resume">Resume</div>
          <div className="link-box">
            <div className="link-box__btn">linked</div>
            <div className="link-box__btn">github</div>
          </div>
        </div>
      </main>
      <div className="about__pic">
        <img />
      </div>
    </section>
  );
};

export default AboutMe;
