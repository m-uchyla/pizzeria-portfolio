import React from 'react'
import {Button, Input, TelInput, Textarea} from '../index';

const Contact = () => {

  const formId = "contactForm";

  return (
    <section id="contact" className=' text-gray my-10'>
        <div className='flex gap-36'>
          <div className='flex-1 my-5 py-5'>
            <h2 className='text-center font-bold text-[40px] m-10'>Kontakt</h2>
            <p className='text-justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in turpis ultricies, consequat justo vitae, consequat turpis. Nulla semper libero at orci sagittis dictum at in nulla. Donec ornare condimentum sem vitae ornare. Pellentesque consequat mauris at ex lobortis consectetur. Cras pellentesque laoreet lobortis. Sed accumsan nisi eget libero interdum pellentesque in pretium arcu. In at nibh nec tortor hendrerit porttitor.</p>
            <div>
              <h3 className='text-center font-bold text-[23px] mt-5 mb-1'>Godziny otwarcia</h3>
              <div className='flex justify-between gap-6'>
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
          <div className='flex-1 my-5 p-5 shadow rounded-xl flex flex-col justify-evenly'>
            <h2 className='text-center font-bold text-[40px] m-10 '>Napisz do nas</h2>
            <div className='flex flex-col  '>
              <div className='w-[80%] flex flex-col mx-auto'>
                <Input formId={formId} type={"text"} forName={"subject"} labelName={"Temat wiadomości"} placeholder={"Podaj temat w sprawie którego kontaktujesz się z nami"} isRequired={true}/>
                <Input formId={formId} type={"email"} forName={"email"} labelName={"Twój adres e-mail"} placeholder={"Wprowadź adres e-mail"} isRequired={true}/>
                <TelInput formId={formId} forName={"tel"} labelName="Numer telefonu" placeholderName="Podaj numer telefonu" name="tel" isRequired={false}/>
                <Input formId={formId} type={"text"} forName={"name"} labelName={"Imię"} placeholder={"Wpisz swoje imię"} isRequired={false}/>
                <Textarea formId={formId} forName={"message"} labelName="Treść wiadomości" placeholderName="Napisz treść swojej wiadomości." name="message" isRequired={true}/>
              </div>
              <div className='w-[40%] flex-center mx-auto my-8'>
                <Button text="Wyślij" background={"bg-orange-gradient"} border={""} color={"text-white"}/>
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