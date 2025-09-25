import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import serviceItems from '../data/serviceItems';
import '../styles/services.css';

function Services() {
  return (
    <section id="szolgaltatasok" className="mb-20 bg-[#f9f9f9] shadow">
      <div className="container mx-auto px-0 max-w-full">
        <h2
          className="border-b-[2px] border-[#bfa76a] text-3xl md:text-4xl font-bold text-[#4a4032] text-center pt-12 px-8 md:px-16 py-4 rounded-md shadow-sm drop-shadow-md"
          style={{
            background: 'linear-gradient(to right, rgba(244, 240, 234, 0.95) 50%, rgba(255,255,255,0) 70%)',
          }}
        >
          Szolgáltatások
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {serviceItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative h-full min-h-[650px] sm:min-h-[450px] md:min-h-[500px] flex flex-col md:flex-row items-center py-4 px-4 sm:px-8 md:px-16"
                style={
                  window.innerWidth >= 768
                    ? {
                        backgroundImage: `linear-gradient(to right, rgba(244, 240, 234, 0.95) 50%, rgba(255,255,255,0) 70%), url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                }
              >
                <div className="w-full lg:w-1/2 bg-[rgba(255,255,255,0.8)] p-6 sm:p-8 md:p-10 mx-8 rounded shadow-md">
                
                <div className="flex items-center space-x-4">
                  <span className="text-[60px] font-bold text-[#4a4032] opacity-15 leading-none min-w-[60px] text-center">
                    {item.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#4a4032] leading-tight relative z-10">
                    {item.title}
                  </h3>
                </div>
                  {Array.isArray(item.text) ? (
                    <ul className="list-disc pl-5 mt-8 md:mt-10 space-y-2 text-[#4a4032] text-base xl:text-lg tracking-wide">
                      {item.text.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#4a4032] text-base lg:text-lg mt-8 md:mt-10 leading-relaxed text-justify relative z-10 tracking-wide">
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Services;