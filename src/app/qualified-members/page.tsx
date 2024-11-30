import React from 'react';

interface Person {
  id: number;
  name: string;
  ranking: string;
  title: string;
}

const people: Person[] = [
  { id: 16, name: 'Harshali Gaikar', ranking: 'Shodan Black Belt', title: '' },
  { id: 17, name: 'Rushikesh Chahande', ranking: 'Shodan Black Belt', title: '' },
  { id: 18, name: 'Mohammadmark Shoaib', ranking: 'Shodan Black Belt', title: '' },
  { id: 19, name: 'Late Vedant Yogaji', ranking: 'Shodan Black Belt', title: '' },
  { id: 20, name: 'Vaishnavi Jadhav', ranking: 'Shodan Black Belt', title: '' },
  { id: 21, name: 'Vaishnavi Marathe', ranking: 'Shodan Black Belt', title: '' },
  { id: 22, name: 'Suraj Badhe', ranking: 'Shodan Black Belt', title: '' },
  { id: 23, name: 'Kautsubh Pahilajani', ranking: 'Shodan Black Belt', title: '' },
  { id: 24, name: 'Shravan Patil', ranking: 'Shodan Black Belt', title: '' },
  { id: 25, name: 'Shubham Harad', ranking: 'Shodan Black Belt', title: '' },
  { id: 26, name: 'Omkar Harad', ranking: 'Shodan Black Belt', title: '' },
  { id: 27, name: 'Bhavna Kekre', ranking: 'Shodan Black Belt', title: '' },
  { id: 28, name: 'Omkar Waghmare', ranking: 'Shodan Black Belt', title: '' },
  { id: 29, name: 'Saddhesh Pote', ranking: 'Shodan Black Belt', title: '' },
  { id: 30, name: 'Rushikesh Pote', ranking: 'Shodan Black Belt', title: '' },
  { id: 31, name: 'Sujeet Bade', ranking: 'Shodan Black Belt', title: '' },
  { id: 32, name: 'CA Hindavi Dhimate', ranking: 'Shodan Black Belt', title: 'Treasurer' },
  { id: 33, name: 'Bhushan Vihte', ranking: 'Shodan Black Belt', title: '' },
  { id: 34, name: 'Dr. Kshitij Mane', ranking: 'Shodan Black Belt', title: '' },
  { id: 35, name: 'Aadimaya Lambate', ranking: 'Shodan Black Belt', title: '' },
  { id: 36, name: 'Ritesh Tomar', ranking: 'Shodan Black Belt', title: '' },
  { id: 37, name: 'Shanel Manawade', ranking: 'Shodan Black Belt', title: '' },
  { id: 38, name: 'Prajkata Panhare', ranking: 'Shodan Black Belt', title: '' },
  { id: 39, name: 'Diksha Pandhare', ranking: 'Shodan Black Belt', title: '' },
  { id: 40, name: 'Prapti Chavhan', ranking: 'Shodan Black Belt', title: '' },
  { id: 41, name: 'Laxmi Vishwakarma', ranking: 'Shodan Black Belt', title: '' },
  { id: 42, name: 'Tejasree Jonnal', ranking: 'Shodan Black Belt', title: '' },
  { id: 43, name: 'Tachireti Humane', ranking: 'Shodan Black Belt', title: '' },
  { id: 44, name: 'Ankita Parvat', ranking: 'Shodan Black Belt', title: '' },
  { id: 45, name: 'Shreyash Rathod', ranking: 'Shodan Black Belt', title: '' },
  { id: 46, name: 'Siddesh Jadhav', ranking: 'Shodan Black Belt', title: '' },
  { id: 47, name: 'Vaishnavi Jadhav', ranking: 'Shodan Black Belt', title: '' },
  { id: 48, name: 'Viraj Pawar', ranking: 'Shodan Black Belt', title: '' },
  { id: 49, name: 'Gopal Dipika', ranking: 'Shodan Black Belt', title: '' },
  { id: 50, name: 'Sais Salunkhe', ranking: 'Shodan Black Belt', title: '' },
  { id: 51, name: 'Dhivya Sai', ranking: 'Shodan Black Belt', title: '' },
  { id: 52, name: 'Aryan Khambayat', ranking: 'Shodan Black Belt', title: '' },
  { id: 53, name: 'Mayank Shrivastav', ranking: 'Shodan Black Belt', title: '' },
  { id: 54, name: 'Omkar Ghode', ranking: 'Shodan Black Belt', title: '' },
  { id: 55, name: 'Pradyun Harad', ranking: 'Shodan Black Belt', title: '' },
  { id: 56, name: 'Pallavi Sampat Pavle', ranking: 'Shodan Black Belt', title: '' },
];

const rankingOrder: { [key: string]: number } = {
  '4th Dan Black Belt': 1,
  '3rd Dan Black Belt': 2,
  '2nd Dan Black Belt': 3,
  'Shodan Black Belt': 4,
};

// Sort people array by rankingOrder
const sortedPeople = people.sort((a, b) => rankingOrder[a.ranking] - rankingOrder[b.ranking]);

const Page: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl text-center md:text-4xl font-bold mb-4 text-white mt-12">Our Esteemed Qualified Instructors</h1>
      <div className="max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto p-6 bg-black">
        <title>Qualified Members</title>
        {sortedPeople.map((person) => (
          <div
            key={person.id}
            className="bg-gray-300 shadow-xl rounded-lg p-4 mb-2 hover:bg-gray-50 transition duration-100"
          >
            <h2 className="text-md md:text-xl font-semibold text-gray-700">{person.name}</h2>
            <p className="text-sm md:text-md text-gray-600">{person.ranking}</p>
            <p className="text-gray-500">{person.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
