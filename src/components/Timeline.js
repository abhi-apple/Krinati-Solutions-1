import React from "react";

function Timeline({
  company,
  startDate,
  endDate,
  title,
  title1,
  startDate1,
  endDate1,
  img,
  loc,
  link,
  time,
  time1,
  cat,
}) {
  return (
    <div className="flex mb-6 pr-96  border-b tracking-widest -ml-10 flex-row">
      <div className="mx-3">
        <a
          href={link}
          className="hover:font-semibold"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="imag"
            // src="https://media-exp1.licdn.com/dms/image/C4E0BAQEX_7a6WLBtng/company-logo_200_200/0/1644579327341?e=1678320000&v=beta&t=h-n50vQ0lSxBrUcb4n17JqlkxBWUbkgi8NXd_JMejU0"
            // src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
            // src="https://www.transparentpng.com/download/google-logo/google-logo-png-icon-free-download-SUF63j.png"
            src={img}
            className=" hover:scale-125 transition duration-100 ease-in-out h-24 w-24 mb-5"
          />
        </a>
      </div>
      <div className="mb-3">
        <p className="font-semibold font-sans">{title}</p>
        <a
          href={link}
          className="hover:font-semibold"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          {company} . {cat}
        </a>
        <p className="font-normal text-gray-500">
          {startDate} - {endDate} {" .    "} {time}
        </p>
        <p>{loc}</p>
        {/* {title1
          ? `${(
              <>
                {console.log(title1)}
                <p className="font-semibold font-sans"> {title1}</p>
                <p className="font-normal text-gray-500">
                  {startDate1} - {endDate1} {" .    "}
                </p>
                <p>Mumbai,Maharastra,India </p>
              </>
            )}`
          : `${(<></>)}`} */}
        {/* if(title1)
        {
          <>
            <p className="font-semibold font-sans"> {title1}</p>
            <p className="font-normal text-gray-500">
              {startDate1} - {endDate1} {" .    "}
            </p>
            <p>Mumbai,Maharastra,India </p>
          </>
        } */}
        {title1 && (
          <div className=" mt-10">
            <p className="font-semibold font-sans"> {title1}</p>
            <p className="font-normal text-gray-500">
              {startDate1} - {endDate1} {" .    "}
              {time1}
            </p>
            <p>Mumbai,Maharastra,India </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
