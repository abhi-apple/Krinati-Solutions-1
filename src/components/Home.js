import React from "react";
import Timeline from "./Timeline";
import { FiPlus } from "react-icons/fi/index";
import { HiOutlinePencil } from "react-icons/hi/index";
function Home() {
  const jobs = [
    {
      company: "Krinati",
      startDate: "Nov 2022",
      endDate: "present",
      title: "Frontend Developer",
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEX_7a6WLBtng/company-logo_200_200/0/1644579327341?e=1678320000&v=beta&t=h-n50vQ0lSxBrUcb4n17JqlkxBWUbkgi8NXd_JMejU0",
      loc: "Mumbai,Maharastra,India ",
      link: "https://krinati.co/",
      time: "1mos",
      cat: "Full-time",
    },
    {
      company: "Google",
      startDate: "Aug 2022",
      endDate: "Sep 2022",
      title1: "SDE II",
      time: "2mos",
      cat: "Full-time",
      loc: "Hyderabad,Telangana,India",
      startDate1: "Sep 2022",
      endDate1: "Nov 2022",
      title: "Web Developer",
      time1: "3mos",
      link: "https://www.google.co.in/",
      img: "https://www.transparentpng.com/download/google-logo/google-logo-png-icon-free-download-SUF63j.png",
    },
    {
      loc: "Banglore,Karnataka,India",
      company: "NETFLIX",
      startDate: "Apr 2022",
      endDate: "Aug 2022",
      cat: "Part-time",
      title: "Full-Stack Intern",
      time: "4mos",
      link: "https://www.netflix.com/",
      img: "https://www.pngfind.com/pngs/m/55-550764_netflix-n-logo-logo-n-de-netflix-hd.png",
    },
    {
      loc: "Chennai,TamilNadu,India",
      company: "AMAZON",
      startDate: "Feb 2022",
      endDate: "Apr 2022",
      cat: "Part-time",
      time: "3mos",
      title: "SDE Intern",
      link: "https://www.amazon.com/",
      img: "https://www.clipartmax.com/png/full/315-3159325_amazon-icon-amazon-logo-png-icon.png",
    },
    {
      loc: "Delhi,New Delhi,India",
      company: "APPLE",
      startDate: "Jan 2022",
      endDate: "Feb 2022",
      time: "2mos",
      cat: "Part-time",
      title: "Frontend",
      link: "https://www.apple.com/",
      img: "https://toppng.com/uploads/preview/apple-logo-png-transparent-background-apple-hd-logo-11563645642l1fdvkt3mg.png",
    },
    {
      loc: "Kolkata ,West Bengal,India",
      company: "META",
      startDate: "Aug 2021",
      endDate: "Dec 2021",
      time: "4mos",
      cat: "Part-time",
      title: "SDE Inten",
      link: "https://facebook.com/",
      img: "https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className=" text-slate-50  flex justify-between    p-10 px-14">
        <div className="">
          <h3 className="font-semibold font-sans text-2xl mb-10">Experience</h3>
          {jobs.map((job, index) => (
            <div key={index} className="col-md-4 ml-5">
              <Timeline
                company={job.company}
                startDate={job.startDate}
                endDate={job.endDate}
                title={job.title}
                startDate1={job.startDate1}
                endDate1={job.endDate1}
                title1={job.title1}
                img={job.img}
                loc={job.loc}
                link={job.link}
                time={job.time}
                time1={job.time1}
                cat={job.cat}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-5 pr-96">
          <FiPlus className="text-2xl cursor-pointer" />
          <HiOutlinePencil className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div>
        <footer className="  flex items-center justify-between p-6">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            2022{" "}
            <a
              href="https://abhi-portfolio1890.netlify.app/"
              className="hover:underline"
            >
              Abhinay Portfolio
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 ">
            <li>
              <a
                href="https://www.linkedin.com/in/abhinay-reddy-9375a1203/"
                className="mr-4 hover:underline  "
              >
                Linkedin
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Home;
