import React, { useEffect, useState } from "react";
import config from "../config";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
} from "@mui/material";

function HomePage() {
  return (
    <div className="bg-zinc-300 h-screen w-screen flex flex-col">
      <div className="bg-blue-300 h-[12.5%]">
        Arthur Universe
        <div>test</div>
      </div>
      <div className="bg-red-900 h-[12.5%] w-2/3">
        <span style={{ textAlign: "center" }}>QUALIFICATIONS PROFILE</span>
        <ul>
          <li>
            * 3.5 years of experience as a backend engineer, contributing to the
            development of several high-quality products
          </li>
          <li>
            * Strong problem-solving skills and a collaborative team player
          </li>
          <li>
            * Proficient in programming and algorithm design, with expertise in
            Python and Django
          </li>
          <li>* Eager to continue learning and advancing skills</li>
          <li>
            * Demonstrated leadership ability, having successfully led a team of
            5 backend engineers
          </li>
          <li>
            * Extensive experience in managing and maintaining server
            infrastructure, including provisioning, configuration, and
            deployment
          </li>
        </ul>
      </div>
      <div className="bg-yellow-900 h-[75%] w-2/3"></div>
    </div>
  );
}

export default HomePage;
