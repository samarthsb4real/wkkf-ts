export default function Chairman() {
  return (
    <div className=" min-h-screen">
    <title>Chairman's Desk</title>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-6xl font-bold mb-8 text-center">Chairman's Desk</h1>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4 p-12">
            <div className="bg-red-700 rounded-xl p-64 md:h-auto flex items-center justify-center text-white text-center">
              <p>Chairman photo</p>
            </div>
          </div>
          <div className="w-auto md:w-1/2 p-8">
            <p className="text-lg font-semibold mb-4">Dear Members,</p>
            <p className="mb-4">
              It is with great honor and enthusiasm that I address you as the
              chairman of the World Karate & Kobudo Federation. Our federation
              stands as a beacon of excellence in the martial arts world, built
              upon a foundation of tradition, integrity, and unwavering
              dedication. For decades, we have championed the values of
              discipline, respect, and unity, nurturing generations of
              practitioners who embody the spirit of karate and kobudo.
            </p>
            <p className="mb-4">
              As we navigate the dynamic landscape of the martial arts
              community, our commitment to innovation and progress remains
              steadfast. We strive to uphold the highest standards of training
              and competition, providing opportunities for growth and
              development to all our members, from novice to master.
            </p>
            <p className="mb-4">
              Together, we are not only custodians of a rich legacy but also
              architects of a vibrant future. Through collaboration,
              perseverance, and a shared passion for martial arts, we will
              continue to elevate our federation to new heights of excellence.
            </p>
            <p className="mb-4">
              I am immensely proud to lead such a distinguished organization,
              and I am grateful for the dedication and support of each and every
              member. Together, let us embark on this journey with renewed
              determination and an unwavering commitment to the values that
              define us.
            </p>
            <p>
              <span className="font-semibold">With respect and gratitude,</span>
              <br />
              [Your Name]
              <br />
              Chairman
              <br />
              World Karate & Kobudo Federation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
