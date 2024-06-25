/* eslint-disable @next/next/no-img-element */
// pages/boardMembers.js

import React from "react";

const BoardMembersPage = () => {
  // Dummy data for board members

  const founder = [
    {
      id: 1,
      name: "Mangesh Rangnath Dhimte",
      rank: "5th Dan Black Belt",
      position: "Founder & Advisor",
      image:
        "members/a1 Founder & Advisor Mangesh Rangnath Dhimte 4th Dan Black Belt.jpg",
    },
  ];

  const srCouncil = [
    {
      id: 1,
      name: "Aniket Vivek Kawalkar",
      rank: "4th Dan Black Belt",
      position: "Chairman",
      image:
        "members/3 Aniket Vivek Kawalkar (4th Dan Black Belt) Chairman.JPG",
    },

    {
      id: 3,
      name: "Avdhut Madhukar Shelar",
      rank: "4th Dan Black Belt",
      position: "Vice Chairman",
      image:
        "members/6 Avdhut Madhukar Shelar (4th Dan Black Belt) Technical Director.JPG",
    },

    {
      id: 2,
      name: "Abhijit Sanjay Gaikwad",
      position: "General Secretary",
      rank: "2nd Dan Black Belt",
      image:
        "members/4 Abhijit Sanjay Gaikwad (2nd Dan Black Belt) General Secretary.jpg",
    },

    {
      id: 4,
      name: "Nupur Mangesh Dhimte",
      position: "Joint Secretary & Technical Director",
      rank: "3rd Dan Black Belt",
      image:
        "members/7 Nupur Mangesh Dhimte (3rd Dan Black Belt) Technical Director.jpg",
    },

    {
      id: 5,
      name: "Aniruddh Singh",
      rank: "2nd Dan Black Belt",
      position: "Secretary",
      image:
        "members/43 Aniruddh Singh 2nd Dan Black Belt General Seceratory.jpeg",
    },

    {
      id: 7,
      name: "Hindavi Dhimate (C.A)",
      rank: "Shodan Black Belt",
      position: "Treasurer",
      image: "members/931 CA Hindavi Dhimate Shodan Black Belt Treasurer.jpg",
    },
  ];

  const astCouncil = [
    {
      id: 5,
      name: "Sakshi Jitendra Khambayat",
      rank: "",
      position: "2nd Dan Black Belt",
      image:
        "members/42 Sakshi Jitendra Khambayat (2nd Dan Black Belt) Asst Administrator.JPG",
    },

    {
      id: 6,
      name: "Siddhi Borker",
      position: "2nd Dan Black Belt",
      rank: "",
      image:
        "members/42 Siddhi Borker 2nd Dan Black Belt                   Addl Treasurer & Administrator.png",
    },

    {
      id: 9,
      name: "Shravani Patil",
      rank: "",
      position: "2nd Dan Black Belt",
      image:
        "members/45 Shravani Patil (2nd Dan Black Belt) Asst Tech Director Kobudo.JPG",
    },

    {
      id: 11,
      name: "Anjali Rajendra Bangar",
      rank: "",
      position: "2nd Dan Black Belt",
      image: "members/922 Anjal Rajendra Bangar Shodan Black Belt.JPG",
    },

    {
      id: 11,
      name: "Shouryani Pujari",
      rank: "",
      position: "2nd Dan Black Belt",
      image:
        "members/47 Shouryani Pujari 2nd Dan Black Belt Asst Tech Director.JPG",
    },

    {
      id: 11,
      name: "Laxmi Vishwakarma",
      rank: "",
      position: "2nd Dan Black Belt",
      image: "members/940 Laxmi Vishwakarma Shodan Black Belt.jpg",
    },
    {
      id: 8,
      name: "Upasna Bhaskar Dingore",
      position: "2nd Dan Black Belt",
      rank: "",
      image:
        "members/43 Upasna Bhaskar Dingore (2nd Dan Black Belt) Asst Tech Director.JPG",
    },

    {
      id: 10,
      name: "Jidnyesh Dinesh Harad",
      position: "2nd Dan Black Belt",
      rank: "",
      image:
        "members/46 Jidnyesh Dinesh Harad 2nd Dan Black Belt Asst Tech Director Kobudo.JPG",
    },
  ];

  const advisors = [
    {
      id: 2,
      name: "Sanjay Ramesh Mhaskar",
      position: "Businessman",
      image: "members/a2 Advisor Sanjay Ramesh Mhaskar.jpg",
      rank: "",
    },
    {
      id: 4,
      name: "Nitin Birari",
      position: "Professor",
      image: "members/a2 Advisor Prof Nitin Birari.jpg",
      rank: "",
    },
    {
      id: 4,
      name: "Mahendra Dhimte",
      position: "Education Officer",
      image: "members/a2 Advisor Mahendra Dhimte.jpg",
      rank: "",
    },

    {
      id: 4,
      name: "Dr. Shivani Jha",
      position: "Principal",
      image: "members/a2 Advisor Shivani Jha.jpg",
      rank: "Doctrate in Education and Humanity",
    },

    {
      id: 4,
      name: "Omkar Liye",
      position: "Businessman",
      image: "members/a2 Advisor Omkar Liye.jpg",
      rank: "",
    },
  

    {
      id: 4,
      name: "Darshan Kawalkar",
      position: "Businessman",
      image: "members/a2 Advisor Darshan Kawalkar.jpg",
      rank: "",
    },
  ];

  const stateHead = [
    {
      id: 5,
      name: "Sensei Sree Moorthi",
      position: "Kerala State In-Charge(2024)",
      image: "members/State head Kerala.jpg",
      rank: "",
    },
  ];

  const distHead = [
    {
      id: 5,
      name: "Sensei Sai Salunkhe",
      position: "Thane In-Charge(2024)",
      image: "members/955 Sai Salunkhe Shodan Black Belt.jpg",
      rank: "",
    },
  ];

  const intCollab = [
    {
      id: 1,
      name: "Shihan Nimal Kalupahana",
      position: "President, IFKF, Sri Lanka",
      rank: "7th dan, SLKF",
      image: "members/Shihan Nimal Kalupahana.jpg",
    },
    {
      id: 2,
      name: "Sensei Sandali Wijesinghe",
      position: "Secretary, IFKF, Sri Lanka",
      rank: "2nd Dan Fumonkai Karate Federation",
      image: "members/Sensei Sandali Wijesinghe.jpg",
    },
  ];

  return (
    <div className="container mx-auto my-12 min-w-full px-4">
      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        Founder
      </h1>
      <div className="grid w-full justify-center gap-8 p-8">
        {founder.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-lg md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        Head Council
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {srCouncil.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-lg md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        International Collaborations
      </h1>
      <div className="grid md:grid-cols-2 justify-center gap-8 p-8">
        {intCollab.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-sm md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-sm md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        State Head
      </h1>
      <div className="grid w-full justify-center gap-8 p-8">
        {stateHead.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-xs md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        District Head
      </h1>
      <div className="grid w-full justify-center gap-8 p-8">
        {distHead.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-xs md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {astCouncil.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-md md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-xs md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold my-8 text-center">
        Management Committee
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {advisors.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 md:w-42 h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                {member.position}
              </p>
              <p className="text-xs md:text-md text-gray-400">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembersPage;
