import React from 'react'
import {Button, Input} from '../index';

const Contact = () => {
  return (
    <section id="contact" className=' text-gray'>
      contact
        <div className='flex gap-10'>
          <div className='flex-1 m-5 p-5'>
            <h2 className='text-center font-bold text-[40px] m-10'>Kontakt</h2>
            <p className='text-justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in turpis ultricies, consequat justo vitae, consequat turpis. Nulla semper libero at orci sagittis dictum at in nulla. Donec ornare condimentum sem vitae ornare. Pellentesque consequat mauris at ex lobortis consectetur. Cras pellentesque laoreet lobortis. Sed accumsan nisi eget libero interdum pellentesque in pretium arcu. In at nibh nec tortor hendrerit porttitor. Donec accumsan elit eget nisi eleifend, nec posuere metus ullamcorper.</p>
            <div>
              <h3 className='text-center font-bold text-[23px] mt-5 mb-1'>Godziny otwarcia</h3>
              <div className='flex justify-center gap-6'>
                <ul>
                  <li>Poniedziałek</li>
                  <li>Wtorek</li>
                  <li>Środa</li>
                  <li>Czwartek</li>
                  <li>Piątek</li>
                </ul>
                <ul>
                  <li>11:00 - 23:00</li>
                  <li>9:00 - 23:00</li>
                  <li>9:00 - 23:00</li>
                  <li>Nieczynne</li>
                  <li>9:00 - 0:00</li>
                </ul>
              </div>
              <div className='text-center'>
                <h3 className='font-bold text-[23px]  mt-5 mb-1'>Telefon</h3>
                <p>(+48) 123 456 789</p>
                <h3 className='font-bold text-[23px]  mt-5 mb-1'>Email</h3>
                <p>kontakt@funpizza.pl</p>
                <h3 className='font-bold text-[23px]  mt-5 mb-1'>Adres</h3>
                <p>Plac Defilad 1, 00-901 Warszawa</p>
              </div>
            </div>
          </div>
          <div className='flex-1 m-5 p-5 shadow rounded-xl flex flex-col'>
            <h2 className='text-center font-bold text-[40px] m-10 '>Napisz do nas</h2>
            <div className='flex flex-col grow justify-evenly align-middle'>
              <div>
                <h3 className='text-center font-bold text-[23px] mt-5 mb-1'>Godziny otwarcia</h3>
                <div className='flex justify-center gap-6'>
                  <ul>
                    <li>Poniedziałek</li>
                    <li>Wtorek</li>
                    <li>Środa</li>
                    <li>Czwartek</li>
                    <li>Piątek</li>
                  </ul>
                  <ul>
                    <li>11:00 - 23:00</li>
                    <li>9:00 - 23:00</li>
                    <li>9:00 - 23:00</li>
                    <li>Nieczynne</li>
                    <li>9:00 - 0:00</li>
                  </ul>
                </div>
              </div>
              <div className='text-center'>
                <h3 className='font-bold text-[23px]  mt-5 mb-1'>Telefon</h3>
                <p>(+48) 123 456 789</p>
              </div>
              <div className='text-center'>
                <Input forName={"test"} labelName={"Test input"} placeholder={"Wprowadź cokolwiek"} isRequired={true}/>
              </div>
              <div className='w-[40%] flex-center'>
                <Button text="Zamów online" background={"bg-orange-gradient"} border={""} color={"text-white"}/>
              </div>
            </div>
          </div>
        </div>
        <div>
          Google map
        </div>
    </section>
  )
}

export default Contact