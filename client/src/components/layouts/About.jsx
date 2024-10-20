import React from "react";
import { Spring } from "react-spring/renderprops";
import checkList from "../../assets/images/checklist.svg";
import "../../assets/about-styles/about.css";

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row m-0">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 300 }}
        >
          {(props) => (
            <div style={props}>
              <div className="col-12 col-sm-12 ">
                <h1 style={{ fontWeight: "lighter mt-5" }}>
                  <span className="font-Roboto">About HRMS</span>
                </h1>
                <p className=" font-arial  w-50 ">
                We are dedicated to revolutionizing the way businesses manage their most valuable asset — their people. We provide a comprehensive, easy-to-use Human Resource Management System designed to simplify HR processes and help organizations thrive
                </p>
                <h1 className="font-arial ">Our Vision</h1>
                <p className=" font-arial  w-50">
                We envision a future where HR departments are equipped with cutting-edge solutions to seamlessly manage employee life cycles, from recruitment to retirement. With our innovative platform, companies can create a supportive and productive workplace, leading to happier, more engaged employees.
                </p>
                <h1 className="font-arial mt-4">Why Choice Us?</h1>
                <p className=" font-arial  w-50">
                With years of expertise in HR management and technology, we understand the unique challenges that HR professionals face. Our platform integrates seamlessly into your existing workflows, providing tools for recruitment, onboarding, payroll, attendance tracking, performance management, and more. With customizable features and robust analytics, our HRMS adapts to the needs of businesses of any size.
                </p>
                
              </div>

              <div className="col">
                <img className="aboutSVG" src={checkList} alt="" />
              </div>
            </div>
          )}
        </Spring>
      </div>
    </div>
  );
}
