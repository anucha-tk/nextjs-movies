import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Faq = () => {
  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can change plan ever time',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can read term here',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add',
    },
    {
      question: 'How does billing work?',
      answer: 'yo can use payment monthly or annually',
    },
    {
      question: 'How do I change my account email?',
      answer: 'Yes, you can change email ever time.',
    },
  ];
  return (
    <div className='-mt-[1.5rem] bg-[#1D1D1D] pb-10'>
      <section className='layout grid grid-flow-row justify-center gap-3 pt-10'>
        <article className='grid grid-flow-row justify-items-center gap-3'>
          <h3 className='text-white'>Frequently asked questions</h3>
          <p className='text-center text-dimWhite'>
            Everything you need to know about the product and billing.
          </p>
        </article>
        <article className='mx-auto grid w-full grid-flow-row divide-y divide-gray-500 md:w-[600px]'>
          {faqs.map((faq, index) => (
            <Disclosure key={index} as='div' className='mt-2 py-6'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg bg-transparent'>
                    <span className='text-white'>{faq.question}</span>
                    <IoIosArrowDown
                      className={` ${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 fill-orange-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='bg-none px-4 pt-4 pb-2 text-sm text-dimWhite'>
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </article>
        <article className='grid grid-flow-row justify-items-center gap-3'>
          <div className='relative flex h-10 w-full flex-col items-center'>
            <div className='absolute ml-10 h-10 w-10 rotate-12 overflow-hidden rounded-full'>
              <Image
                src='/images/p-woman.jpg'
                alt='women'
                objectFit='cover'
                layout='fill'
              />
            </div>
            <div className='absolute z-[5] h-11 w-11 overflow-hidden rounded-full'>
              <Image
                src='/images/p-woman-2.jpg'
                alt='women-2'
                objectFit='cover'
                layout='fill'
              />
            </div>
            <div className='absolute mr-10 h-10 w-10 -rotate-12 overflow-hidden rounded-full'>
              <Image
                src='/images/p-men.jpg'
                alt='men'
                objectFit='cover'
                layout='fill'
              />
            </div>
          </div>
          <div className='flex max-w-md flex-col items-center space-y-2 md:space-y-4'>
            <h5 className='text-white'>Still have questions?</h5>
            <p className='text-center text-dimWhite'>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className='buttonContained'>Get in touch</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Faq;
