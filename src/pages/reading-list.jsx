/* eslint-disable quotes */
import React from "react";
import "./bulma.scss";
import Book from "../components/book";
import SiteHeroHeader from "../components/heroHead";

const ReadingList = () => (
  <div>
    <section className="hero is-light is-bold">
      <SiteHeroHeader hideLinks />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Reading List</h1>
          <h2 className="subtitle">
            <em>
              A collection of books that have had a
              <b> major </b>
              impact on my life.
            </em>
          </h2>
          <h2 className="subtitle">
            The book links are affiliate, if you decide to purchase them, I get
            some kickback. Thanks if you do!
          </h2>
        </div>
      </div>
    </section>
    <Book
      title="Zero to One"
      link="https://amzn.to/2oG00LB"
      imgAlt="Zero to One"
      imgLink="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg"
      description={[`I'm a big fan of this book because it's written by someone who has started a major company (Paypal).`,  <br/>, <i>Zero to One</i>, ` is a short read, and Mr. Thiel takes an objective look at what makes startups successful. My favorite takeaway from the book was recognizing the value of companies that take vertical risks. A vertical risk is creating new technologies for society instead of making existing ones better.`]}
    />
    <Book
      title="Siddhartha"
      link="https://amzn.to/2o536su"
      imgAlt="Siddhartha"
      imgLink="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428715580l/52036.jpg"
      description={[<i>Siddhartha</i>, ' is a short read by Herman Hesse. It addresses that the only constant in life is change. Warning, the river chapter may make you tear up!']}
    />
    <Book
      title="Sapiens"
      link="https://amzn.to/33oMMSH"
      imgAlt="Sapiens"
      imgLink="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg"
      description={[<i>Sapiens</i> , " got me started on reading books. It's an amazing read that gives a comprehensive look at where we come from, and how societal structures were built. The concept of shared fictions has been influencing my decision making to this day."]}
    />
  </div>
);

export default ReadingList;
