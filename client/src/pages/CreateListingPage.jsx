import React from 'react'
import CreateServiceForm from '../components/CreateServiceForm';

const CreateListingPage = () => {
  return (
      <div className='text-lime-300'>
          <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-8  object-cover lg:py-12'>
              <div>
                  <h1 className='mb-5 font-sans text-4xl font-bold tracking-tight sm:text-5xl  sm:leading-none text-center md:text-start'>
                        Hi Coach! <br />
                      Let's Post Your Service
                  </h1>
                  <CreateServiceForm />
              </div>
          </div>
      </div>
  );
}

export default CreateListingPage