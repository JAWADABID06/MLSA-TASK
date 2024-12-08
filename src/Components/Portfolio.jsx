/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mantra Clone",
    description: "A meditation app with guided sessions, daily affirmations, and progress tracking.",
    url: "https://github.com/yourusername/mantra-clone",
  },
  {
    title: "Little Lemon Clone",
    description: "A food ordering app featuring restaurant menus, online orders, and admin dashboards.",
    url: "https://github.com/yourusername/little-lemon-clone",
  },
  {
    title: "E-Wallet Application",
    description: "An app to manage virtual wallets, transactions, and analytics securely.",
    url: "https://github.com/yourusername/e-wallet-app",
  },
  {
    title: "Expense Tracker",
    description: "A tool to track daily, weekly, and monthly expenses with charts and CSV export.",
    url: "https://github.com/yourusername/expense-tracker",
  },
  {
    title: "Blogging Platform",
    description: "A platform for users to post blogs, comment, and follow other users.",
    url: "https://github.com/yourusername/blogging-platform",
  },
  {
    title: "Attendance Management System",
    description: "An app for marking attendance, viewing reports, and notifying admins.",
    url: "https://github.com/yourusername/attendance-management",
  },
  {
    title: "Online Course Platform",
    description: "A platform for enrolling in courses, completing modules, and earning certifications.",
    url: "https://github.com/yourusername/online-course-platform",
  },
  {
    title: "Portfolio Website",
    description: "A personal website to showcase projects, resume, and contact details.",
    url: "https://github.com/yourusername/portfolio-website",
  },
  {
    title: "Event Management App",
    description: "An app to create and manage events with RSVP and ticketing features.",
    url: "https://github.com/yourusername/event-management-app",
  },
  {
    title: "Inventory Management System",
    description: "A system to manage stock levels, track products, and generate sales reports.",
    url: "https://github.com/yourusername/inventory-management-system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
