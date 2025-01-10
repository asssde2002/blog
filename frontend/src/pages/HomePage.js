import React, { useEffect, useState } from "react";
import config from "../config";

function QualificaitonProfile() {
  return (
    <div>
      <h3 style={{ background: "yellow", fontWeight: "bold" }}>
        QUALIFICATIONS PROFILE
      </h3>
      <ul>
        <li>
          3.5 years of experience as a backend engineer, contributing to the
          development of several high-quality products
        </li>
        <li>Strong problem-solving skills and a collaborative team player</li>
        <li>
          Proficient in programming and algorithm design, with expertise in
          Python and Django
        </li>
        <li>Eager to continue learning and advancing skills</li>
        <li>
          Demonstrated leadership ability, having successfully led a team of 5
          backend engineers
        </li>
        <li>
          Extensive experience in managing and maintaining server
          infrastructure, including provisioning, configuration, and deployment
        </li>
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3 style={{ background: "yellow", fontWeight: "bold" }}>EDUCATION</h3>
      <ul>
        <li>
          M.S. in Computer Science & Information Engineering, National Taiwan
          University
          <span> | Taiwan</span>
          <span> | Sep. 2018 - Aug. 2020</span>
          <ul>
            <li>Advisor: Chung-Wei Lin</li>
            <li>
              Master's Thesis Topic: Robust Scheduling for Intelligent
              Intersection Management Considering Denial-of-Service Attack
            </li>
          </ul>
        </li>
        <li>
          B.S. in Engineering Science, National Cheng Kung University
          <span> | Taiwan</span>
          <span> | Sep. 2014 - Jun. 2018</span>
        </li>
      </ul>
    </div>
  );
}

function WorkExperience() {
  return (
    <div>
      <h3 style={{ background: "yellow", fontWeight: "bold" }}>
        WORK EXPERIENCE
      </h3>
      <ul>
        <li>
          <strong>
            beBitTECH
            <span> | Backend Manager</span>
            <span> | Jan. 2022 - June. 2024</span>
          </strong>
          <ul>
            <li>
              Migrated data from legacy PostgreSQL tables to a new partitioned
              PostgreSQL setup, enhancing performance and scalability while
              ensuring compatibility with Django's partitioned table filtering
              syntax.
            </li>
            <li>
              Implemented migration of time-series data from PostgreSQL to
              TimescaleDB, resulting in reduced disk usage and improved
              efficiency.
            </li>
            <li>
              Integrated Leek service into our system to effectively monitor
              Celery task execution progress.
            </li>
            <li>
              Introduced KEDA autoscaler to optimize Kubernetes pod scaling
              based on RabbitMQ queue length, rather than CPU usage.
            </li>
            <li>
              Developed a comprehensive deployment SOP for our new environment
              and conducted rigorous load testing to simulate the impact of
              concurrent user loads on database and API performance.
            </li>
            <li>
              Introduced a backend linter (Ruff) and formatter (Isort, Ruff) to
              ensure codebase consistency and maintain coding standards.
            </li>
            <li>
              Led a team of backend developers in the design and implementation
              of scalable and reliable systems.
            </li>
            <li>
              Managed deployment and maintenance of systems on Google Cloud
              Platform (GCP) using Docker, Kubernetes, and Dokku, ensuring
              seamless operations and efficient resource management.
            </li>
            <li>
              Analyzed complex and ambiguous requirements, proposing multiple
              solutions after a thorough evaluation of the pros and cons of each
              option.
            </li>
            <li>
              Provided technical leadership and mentorship to team members to
              ensure their professional growth and development.
            </li>
            <li>
              Developed and implemented best practices for software development
              processes and ensured adherence to coding standards and practices.
            </li>
            <li>
              Monitored system performance metrics and provided actionable
              recommendations for optimization and enhancement, driving
              continuous improvement efforts.
            </li>
            <li>
              Leveraged CI/CD tools like DroneCI to automate testing and
              deployment processes, streamlining development workflows and
              improving productivity.
            </li>
            <li>
              Evaluated and refined the pretest and interview process to ensure
              effectiveness and comprehensiveness.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            beBitTECH
            <span> | Backend Engineer</span>
            <span> | Feb. 2021 - Jan. 2022</span>
          </strong>
          <ul>
            <li>
              Collaborated with cross-functional teams, including frontend
              developers, quality assurance engineers, and product managers, to
              deliver high-quality software solutions.
            </li>
            <li>
              Designed, developed, and maintained backend systems to support
              business requirements.
            </li>
            <li>
              Integrated Customer Data Platform (CDP) platforms,
              email/SMS/Line/push notification providers, and Facebook Ads into
              the system infrastructure.
            </li>
            <li>
              Generated dummy data for system-wide marketing purposes,
              contributing to business growth strategies.
            </li>
            <li>
              Implemented alerting mechanisms to monitor task execution status,
              ensuring system reliability and stability.
            </li>
            <li>
              Enhanced system performance by implementing efficient caching
              mechanisms.
            </li>
            <li>
              Refactored legacy code to improve performance and maintainability,
              leveraging design patterns and coding standards.
            </li>
            <li>
              Introduced comprehensive unit and integration tests to ensure code
              quality and robustness.
            </li>
            <li>
              Participated in code reviews, improving team productivity and code
              quality.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h3 style={{ background: "yellow", fontWeight: "bold" }}>Skills</h3>
      <table>
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold" }}>Languages</td>
            <td>Chinese (Native), English</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Programming languages</td>
            <td>Python, SQL</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Tools & Frameworks</td>
            <td>
              Django, Flask, FastAPI, Celery, RESTful, RabbitMQ, K8S, KEDA,
              Docker, Dokku, Leek
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Databases</td>
            <td>
              PostgreSQL, TimescaleDB, Citus, PgBouncer, Elasticsearch, Redis,
              DragonflyDB
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>CI & CD</td>
            <td>DroneCI, Octopus</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Cloud Platform</td>
            <td>GCP, AWS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function HomePage() {
  return (
    <div className="bg-zinc-300 h-screen w-screen flex flex-col">
      <div className="bg-blue-300 h-[12.5%]">
        <h1>Arthur Universe</h1>
      </div>
      <QualificaitonProfile />
      <Education />
      <WorkExperience />
      <Skills />
      <div></div>
    </div>
  );
}

export default HomePage;
