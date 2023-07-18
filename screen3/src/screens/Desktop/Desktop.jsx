import React from "react";
import { Chart } from "../../components/Chart";
import { DellFill } from "../../components/DellFill";
import { SettingLine } from "../../components/SettingLine";
import { UserAdd } from "../../components/UserAdd";
import { ArhiveDuotone } from "../../icons/ArhiveDuotone";
import { User } from "../../icons/User";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap">
          <div className="rectangle-3" />
          <img className="vector-5" alt="Vector" src="/img/vector.svg" />
          <SettingLine className="setting-line-instance" />
          <User className="user-instance" />
          <ArhiveDuotone className="arhive-duotone" />
          <div className="canvas-graphics">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <Chart className="chart-instance" />
            </div>
          </div>
          <img className="line" alt="Line" src="/img/line-2.svg" />
          <div className="ellipse-2" />
          <div className="JOB-TOOLI">
            JOB
            <br />
            TOOLI
          </div>
          <div className="ellipse-3" />
          <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
          <img className="image" alt="Image" src="/img/image-1.png" />
          <img className="line-2" alt="Line" src="/img/line-18.svg" />
          <img className="line-3" alt="Line" src="/img/line-19.svg" />
          <img className="line-4" alt="Line" src="/img/line-21.svg" />
          <img className="line-5" alt="Line" src="/img/line-20.svg" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
        </div>
        <div className="user-add-wrapper">
          <UserAdd className="user-add-instance" />
        </div>
        <img className="vector-6" alt="Vector" src="/img/vector-1.svg" />
        <p className="text-wrapper">Search jobs and applications ...</p>
        <p className="showing-results">
          <span className="span">showing </span>
          <span className="text-wrapper-2">45</span>
          <span className="span"> results from 108 total</span>
        </p>
        <div className="overlap-3">
          <div className="text-wrapper-3">Show rejected applications</div>
          <div className="text-wrapper-4">Show only subscribed applications</div>
        </div>
        <div className="text-wrapper-5">JOBS</div>
        <div className="text-wrapper-6">JOBS DOMAINS</div>
        <div className="text-wrapper-7">SCORE</div>
        <div className="text-wrapper-8">APPLICATION DATE</div>
        <div className="text-wrapper-9">TAGS</div>
        <div className="overlap-4">
          <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-1.svg" />
          <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-45.svg" />
          <img className="subtract-4" alt="Subtract" src="/img/subtract-6.svg" />
        </div>
        <img className="m" alt="M" src="/img/m-7.png" />
        <div className="overlap-5">
          <div className="riley-cooper-acme">
            <span className="text-wrapper-2">
              Riley Cooper
              <br />
            </span>
            <span className="text-wrapper-10">Acme International</span>
          </div>
          <img className="polygon-2" alt="Polygon" src="/img/polygon-2.svg" />
          <img className="line-6" alt="Line" src="/img/line-5.svg" />
        </div>
        <img className="logout" alt="Logout" src="/img/logout.png" />
        <div className="text-wrapper-11">jobsite</div>
        <h1 className="h-1">Applications</h1>
        <div className="ellipse-wrapper">
          <div className="ellipse-5" />
        </div>
        <div className="div-wrapper">
          <div className="ellipse-6" />
        </div>
        <div className="text-wrapper-12">Filters</div>
        <img className="subtract-5" alt="Subtract" src="/img/subtract-5.svg" />
        <div className="overlap-6">
          <img className="subtract-6" alt="Subtract" src="/img/subtract-4.svg" />
          <DellFill className="dell-fill-instance" />
        </div>
        <img className="subtract-7" alt="Subtract" src="/img/subtract-3.svg" />
        <img className="subtract-8" alt="Subtract" src="/img/subtract-2.svg" />
      </div>
    </div>
  );
};
