import React from "react";
import "./bulma.scss";

const Tweet = () => (
    <div className="container">
        <h1 className="title is-1 has-text-centered	">How to Write a Damn Good Tweet</h1>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/checklists">Checklists</a></li>
                <li><a href="#">Writing</a></li>
                <li class="is-active"><a href="#">Tweet</a></li>
            </ul>
        </nav>
        <hr />
        <h2 className="title is-2">What makes a good tweet?</h2>
        <h1 className="subtitle is-3">A good tweet is <b>shareable</b>, <b>easy to understand</b>, and <b>defensible</b>.</h1>
        <hr />
        <div>
            <h2 className="title is-2">Shareable</h2>
            <p className="subtitle is-3">A shareable tweet encourages your Twitter followers to retweet, like, comment, or overall interact with your Tweet.</p>
            <p>The best way to encourage "shareability" is to provide <b>value</b>. In a tweet, value is <em>entertainment</em> or <em>informational.</em></p>
            <h3 className="title is-3">Entertaining</h3>
            <p>"Entertaining" is subjective. Here are good resources to make what you're saying more enjoyable to listen to: <a href="https://screencraft.org/2019/08/12/5-rules-of-comedy-according-to-the-office-showrunner/">The Office's Rules of Comedy</a></p>
        </div>
        <hr />
        <div>
            <h2 className="title is-2">Easy to Understand</h2>
            <p className="subtitle is-3">A <b>easy to unterstand</b> tweet can be understood by your <em>audience</em> with minimal context.</p>
            <p>The best way to make your tweet <b>easy to understand</b> is to edit down your tweet to it's core offering.</p>
            <h3 className="title is-3">Entertaining</h3>
        </div>
    </div>
)

export default Tweet;