import React from 'react';

const cards = [
  {
    img: '/laptop1.svg',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
  },
  {
    img: '/laptop2.svg',
    title: 'What are your safeguarding responsibilities and how can you manage them?',
  },
  {
    img: '/laptop3.svg',
    title: 'Revamping the Membership Model with Triathlon Australia',
  },
];

const Caring = () => {
  return (
    <section className="bg-primary py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-primary font-semibold text-2xl sm:text-3xl md:text-[32px] mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-tertiary text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The Nextcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their membership income and lot's more.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="relative group">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />

              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[85%] bg-white rounded-2xl shadow-md p-5 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-primary font-medium text-sm sm:text-base leading-snug mb-3 text-left">
                  {card.title}
                </h3>
                <a
                  href="#"
                  className="text-green font-semibold text-sm sm:text-base flex items-center gap-1 hover-color transition-colors px-3 py-1 rounded"
                >
                  Readmore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Caring;