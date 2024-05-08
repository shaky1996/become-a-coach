import React from 'react'
import { certifications } from '../constants/data';

const UnderHero = () => {
  return (
      <div className='bg-lime-300'>
          <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-3 lg:py-6  '>
              <div className='flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-10'>
                  <h1 className='text-lg md:text-2xl italic text-black font-bold'>
                      Certified Coaches from:
                  </h1>
                  <div className='flex flex-row gap-5 items-center justify-center'>
                      {certifications.map((certificate, index) => {
                          return (
                              <div key={index}>
                                  <img
                                      src={certificate.image}
                                      alt={certificate.label}
                                      className='w-24 lg:w-40 lg:h-12 '
                                  />
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default UnderHero