import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;


  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
