import React from "react"
import Layout from "../components/layout"
import LocalMeetups from "../components/local_meetups"
import "./main.css"

export default () =>
    <Layout>
      <section>
        <p>
          Due to COVID19, most CoffeeOps meetings have moved to virtual meetups. 
        </p>
        <p>
          Coffeehouses are hubs of information sharing: people gather, share
          thoughts, learn about happenings, and discuss challenges. Having a
          place and time to congregate allows people from diverse backgrounds
          to talk of experiences that can inspire, spark innovation and
          improve problem solving.
        </p>
        <p>
          Coffeeops aims to bring on the Age of Delightenment fueled by coffee
          (tea or cocoa!), collaboration and cooperation across companies.
        </p>
        <p>
          If there isn&apos;t a local Coffeeops already happening in your
          area, start one!
        </p>
      </section>
      <section>
        <h1>Local Meetups</h1>
        <LocalMeetups/>
      </section>
      <section>
        <h1>FAQ</h1>
        <ul>
          <li>
            <p>
              <b>Is there a specific format for coffeeops?</b> No. Each group
              self organizes and sets the process and agenda (if any). Some
              groups like Seattle, pre-plan with a specific topic. Other
              groups like Santa Clara have more ad hoc meetings that are
              arranged via Twitter and Slack.
            </p>
          </li>
          <li>
            <p>
              <b>How do I organize a local coffeeops?</b> Reach out to
              community through twitter and any local email lists and see who
              is interested. Pick a time and date and a place with a good
              environment for talking. Depending on the size of your group,
              let the venue know ahead of time about the size of your group.
              Update this website or let <a href="https://twitter.com/sigje">@sigje</a> know.
            </p>
          </li>
        </ul>
        <p><strong>Have an event to add to the site? Fork, Update, and Send a Pull Request:</strong></p>
        <p><strong><a href="https://github.com/CoffeeOps/coffeeops_site">https://github.com/CoffeeOps/coffeeops_site</a></strong></p>
      </section>
    </Layout>
