"use client";

import { experiencie } from "constant";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="bg-slate-100 w-full flex flex-col gap-20" id="experiencia">
      <h2 className="text-6xl text-center font-bold mt-20">Experiencia</h2>
      <VerticalTimeline lineColor="#0A1128">
        {experiencie.map((element) => (
          <VerticalTimelineElement
            className="rounded-md"
            key={element.title}
            date={element.date}
            iconStyle={{
              background: "#0A1128",
              display: "flex",
              placeItems: "center",
              justifyContent: "center",
            }}
            icon={<Image src={element.icon} alt="" />}
          >
            <h3 className="text-3xl font-bold text-gray-600">
              {element.title}
            </h3>
            <p className="text-gray-400">{element.sub}</p>
            <div className="pl-5 flex flex-col mt-3">
              {element.topics.map((el, i) => (
                <span key={i} className="text-gray-600">{`${
                  i + 1
                }. ${el}`}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
