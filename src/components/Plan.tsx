import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { IoIosCheckmark } from 'react-icons/io';

function Plan() {
  const plans = [
    {
      name: 'HD+ Package',
      price: 4.99,
      features: [
        'No Ads',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      name: 'Full HD Package',
      price: 12.99,
      features: [
        'No Ads',
        'Advanced reporting and analytics',
        'Up to 20 individual users',
        '40GB individual data each user',
        'Priority chat and email support',
      ],
    },
    {
      name: '4K Package',
      price: 24.99,
      features: [
        'No Ads',
        'Audit log and data history',
        'Unlimited individual users',
        'Unlimited individual data',
        'Personalised+priority service',
      ],
    },
  ];
  return (
    <div className='-mt-[1.5rem] bg-[#141414]'>
      <section className='layout grid grid-flow-row gap-3 pt-10 md:gap-6'>
        <article className='grid grid-flow-row items-center justify-items-center gap-3'>
          <h2 className='text-white md:text-4xl lg:text-5xl'>
            Start your free Trial
          </h2>
          <p className='max-w-xs text-center text-dimWhite md:max-w-md md:text-lg lg:max-w-none lg:text-xl'>
            choose from annual or monthly plans. Switch or cancel anytime.
          </p>
        </article>
        <article className='grid grid-flow-row justify-center gap-3 md:grid-flow-col lg:gap-6'>
          {plans.map((plan, index) => (
            <div
              className='grid cursor-pointer grid-flow-row justify-items-center gap-3 rounded-2xl border border-4 border-orange-500 p-4 hover:bg-[#3f3f3f]'
              key={plan.name + index}
            >
              <div className='rounded-full bg-orange-400 p-2'>
                <BsLightningChargeFill className='h-5 w-5 fill-white' />
              </div>
              <h5 className='text-white'>{plan.name}</h5>
              <h2 className='text-orange-400'>{`$${plan.price}/mth`}</h2>
              <p className='text-orange-400'>Billed annually.</p>
              <ul className='grid grid-flow-row divide-y divide-gray-700'>
                {plan.features.map((feature, index) => (
                  <li
                    className='flex flex-row items-center space-x-4 overflow-hidden py-3 text-xs text-dimWhite'
                    key={index}
                  >
                    <IoIosCheckmark className='h-6 w-6 fill-green-500' />
                    <p className=''>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}

export default Plan;
