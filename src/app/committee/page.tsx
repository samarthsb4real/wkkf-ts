/* eslint-disable @next/next/no-img-element */
// pages/boardMembers.js

import React from "react";

const BoardMembersPage = () => {
  // Dummy data for board members

  const founder = [
    {
        id: 1,
        name: "Mangesh Rangnath Dhimte",
        rank: "4th Dan Black Belt",
        position: "Founder & Advisor",
        image:
          "members/a1 Founder & Advisor Mangesh Rangnath Dhimte 4th Dan Black Belt.jpg",
      },
  ];
  const boardMembers = [
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
      position: "Vice Chairman & Technical Director",
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
      position: "Technical Director",
      rank: "3rd Dan Black Belt",
      image:
        "members/7 Nupur Mangesh Dhimte (3rd Dan Black Belt) Technical Director.jpg",
    },
    {
      id: 5,
      name: "Sakshi Jitendra Khambayat",
      rank: "2nd Dan Black Belt",
      position: "Assistant Administrator",
      image:
        "members/42 Sakshi Jitendra Khambayat (2nd Dan Black Belt) Asst Administrator.JPG",
    },
    {
      id: 6,
      name: "Siddhi Borker",
      position: "Additional Treasurer & Administrator",
      rank: "2nd Dan Black Belt",
      image:
        "members/42 Siddhi Borker 2nd Dan Black Belt                   Addl Treasurer & Administrator.png",
    },

    {
      id: 7,
      name: "Aniruddh Singh",
      rank: "4th Dan Black Belt",
      position: "General Secretary",
      image:
        "members/43 Aniruddh Singh 2nd Dan Black Belt General Seceratory.jpeg",
    },
    {
      id: 8,
      name: "Upasna Bhaskar Dingore",
      position: "Assistant Technical Director",
      rank: "2nd Dan Black Belt",
      image:
        "members/43 Upasna Bhaskar Dingore (2nd Dan Black Belt) Asst Tech Director.jpg",
    },

    {
      id: 9,
      name: "Shravani Patil",
      rank: "2nd Dan Black Belt",
      position: "Assistant Technical Director",
      image:
        "members/45 Shravani Patil (2nd Dan Black Belt) Asst Tech Director Kobudo.JPG",
    },
    {
      id: 10,
      name: "Jidnyesh Dinesh Harad",
      position: "Assistant Technical Director",
      rank: "2nd Dan Black Belt",
      image:
        "members/46 Jidnyesh Dinesh Harad 2nd Dan Black Belt Asst Tech Director Kobudo.jpg",
    },
    {
      id: 11,
      name: "Shouryani Pujari",
      rank: "2nd Dan Black Belt",
      position: "Assistant Technical Director",
      image:
        "members/47 Shouryani Pujari 2nd Dan Black Belt Asst Tech Director.JPG",
    },
    {
      id: 2,
      name: "Dhammadina Prabhakar Donde",
      position: "???",
      rank: "2nd Dan Black Belt",
      image:
        "members/908 Dhammadina Prabhakar Donde 2nd Dan Black Belt.jpg",
    },

    {
      id: 3,
      name: "Diksha Bhoir (Kor)",
      rank: "Shodan Black Belt",
      position: "???",
      image:
        "members/909 Diksha Bhoir (Kor) Shodan Black Belt B Tech Prof.JPG",
    },
    {
      id: 4,
      name: "Dr. Deepali Shelavale",
      position: "???",
      rank: "Shodan Black Belt",
      image:
        "members/909 Dr. Deepali Shelavale Shodan Black Belt.jpeg",
    },
    {
      id: 5,
      name: "Sakshi Jitendra Khambayat",
      rank: "2nd Dan Black Belt",
      position: "Assistant Administrator",
      image:
        "members/42 Sakshi Jitendra Khambayat (2nd Dan Black Belt) Asst Administrator.JPG",
    },
    {
      id: 6,
      name: "Siddhi Borker",
      position: "Additional Treasurer & Administrator",
      rank: "2nd Dan Black Belt",
      image:
        "members/42 Siddhi Borker 2nd Dan Black Belt                   Addl Treasurer & Administrator.png",
    },

    {
      id: 7,
      name: "Aniruddh Singh",
      rank: "4th Dan Black Belt",
      position: "General Secretary",
      image:
        "members/43 Aniruddh Singh 2nd Dan Black Belt General Seceratory.jpeg",
    },
    {
      id: 8,
      name: "Upasna Bhaskar Dingore",
      position: "Assistant Technical Director",
      rank: "2nd Dan Black Belt",
      image:
        "members/43 Upasna Bhaskar Dingore (2nd Dan Black Belt) Asst Tech Director.jpg",
    },

    {
      id: 9,
      name: "Shravani Patil",
      rank: "2nd Dan Black Belt",
      position: "Assistant Technical Director",
      image:
        "members/45 Shravani Patil (2nd Dan Black Belt) Asst Tech Director Kobudo.JPG",
    },
    {
      id: 10,
      name: "Jidnyesh Dinesh Harad",
      position: "Assistant Technical Director",
      rank: "2nd Dan Black Belt",
      image:
        "members/46 Jidnyesh Dinesh Harad 2nd Dan Black Belt Asst Tech Director Kobudo.jpg",
    },
  ];

  return (
    <div className="container mx-auto m-12 min-w-full px-4 py-8">
      
      <h1 className="text-5xl font-bold m-8 text-center">Founder</h1>
      <div className="grid w-full justify-center gap-8 p-8">
        {founder.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden w-42 h-56"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-42  h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="text-md text-gray-500">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>



      <h1 className="text-5xl font-bold m-8 text-center">Senior Council</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden w-42 h-56"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-42 h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="text-md text-gray-500">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-5xl font-bold m-8 text-center">Assistant Council</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden w-42 h-56"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-42  h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="text-md text-gray-500">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-5xl font-bold m-8 text-center">Advisors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="flex border border-gray-300 items-center rounded-lg overflow-hidden w-42 h-56"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-42  h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="text-md text-gray-500">{member.rank}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BoardMembersPage;
