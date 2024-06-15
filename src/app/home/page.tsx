

import Slider from "../../components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen">
    <title>Home</title>
      <div className="m-12 animate-fade-in delay-200">
        
        <h1 className="text-5xl font-bold mb-2">
          Welcome to the World Karate & Kobudo Federation!
        </h1>
        <h2 className="text-2xl text-gray-400">
          Dear Members, Participants, and Supporters,
        </h2>
      </div>
      <div className="flex mr-16 ml-16 mt-12 animate-fade-in delay-400">
        <div className="flex-col text-lg mr-8 w-3/5">
          <p className="mb-4">
            It brings us great pleasure to extend a warm welcome to each and
            every one of you to the World Karate & Kobudo Federation (WKKF). As
            an esteemed organization dedicated to the promotion and advancement
            of karate and kobudo, we are thrilled to have you join our
            community.
          </p>
          <p className="mb-4">
            At WKKF, we stand at the forefront of martial arts excellence,
            fostering a spirit of discipline, respect, and camaraderie among our
            members worldwide. Whether you are a seasoned practitioner, an
            aspiring athlete, or a passionate enthusiast, you are an invaluable
            part of our federation.
          </p>
          <p className="mb-4">
            As we embark on this journey together, let us embrace the principles
            of integrity, perseverance, and mutual support that define our
            federation. Together, we will strive for excellence in both skill
            and character, enriching our lives and the lives of those around us
            through the art of karate and kobudo.
          </p>
          <p className="mb-4">
            We extend our heartfelt gratitude to each of you for your dedication
            and commitment to the martial arts community. Together, let us
            uphold the legacy of excellence and sportsmanship that defines the
            World Karate & Kobudo Federation.
          </p>
          <p className="mb-4">
            Welcome to WKKF, where champions are made, and dreams are realized.
          </p>
        </div>

        <div className="flex-col w-2/5 rounded-md">
          <Slider />
        </div>
      </div>

      <div className="p-16 animate-fade-in delay-800">
        <img className="rounded-sm border" src="home/11.jpg" />
        <figcaption className="m-4 text-center text-lg text-gray-300">
          Event Banner Title of Achievements
        </figcaption>
      </div>
    </div>
  );
}
