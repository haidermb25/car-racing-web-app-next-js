'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegistrationEndurancePage() {
  const [formData, setFormData] = useState({
    teamName: '',
    driver1: { firstName: '', lastName: '', dateOfBirth: '' },
    driver2: { firstName: '', lastName: '', dateOfBirth: '' },
    driver3: { firstName: '', lastName: '', dateOfBirth: '' },
    driver4: { firstName: '', lastName: '', dateOfBirth: '' },
    addressLine1: '',
    email: '',
    addressLine2: '',
    phone: '',
    townCity: '',
    state: '',
    zipCode: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name.startsWith('driver')) {
      const [driverNum, field] = name.split('.');
      setFormData({
        ...formData,
        [driverNum]: {
          ...formData[driverNum],
          [field]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#DEDEDE]">
      <Header />
      
      <h1 className="text-black mt-4 mx-0 sm:mx-5 lg:mx-8 xl:mx-12 uppercase font-black text-2xl sm:text-3xl md:text-4xl mb-8">
        REGISTRATION:
        <br />
        ENDURANCE CHAMPIONSHIP
      </h1>

      <div className="px-2 sm:px-4 lg:px-2 py-4 sm:py-6 bg-white mx-0 sm:mx-5 lg:mx-8 xl:mx-12 border-t-8 border-t-[#60A5FA]">
        <div className="max-w-[98%] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* TEAM INFORMATION Section */}
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                TEAM INFORMATION:
              </h2>
              <div>
                <label className="block text-lg font-normal mb-2 text-black">
                  Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                />
              </div>
            </div>

            {/* DRIVER INFORMATION Section */}
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                DRIVER INFORMATION:
              </h2>
              
              {/* Driver #1 */}
              <div className="mb-6">
                <h3 className="text-black uppercase font-bold text-lg mb-4">
                  DRIVER #1
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="driver1.firstName"
                      value={formData.driver1.firstName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="driver1.lastName"
                      value={formData.driver1.lastName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="driver1.dateOfBirth"
                      value={formData.driver1.dateOfBirth}
                      onChange={handleChange}
                      className="w-64 border-2 border-black bg-white px-3 py-3 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Driver #2 */}
              <div className="mb-6">
                <h3 className="text-black uppercase font-bold text-lg mb-4">
                  DRIVER #2
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="driver2.firstName"
                      value={formData.driver2.firstName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="driver2.lastName"
                      value={formData.driver2.lastName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="driver2.dateOfBirth"
                      value={formData.driver2.dateOfBirth}
                      onChange={handleChange}
                      className="w-64 border-2 border-black bg-white px-3 py-3 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Driver #3 */}
              <div className="mb-6">
                <h3 className="text-black uppercase font-bold text-lg mb-4">
                  DRIVER #3
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="driver3.firstName"
                      value={formData.driver3.firstName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="driver3.lastName"
                      value={formData.driver3.lastName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="driver3.dateOfBirth"
                      value={formData.driver3.dateOfBirth}
                      onChange={handleChange}
                      className="w-64 border-2 border-black bg-white px-3 py-3 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Driver #4 */}
              <div className="mb-6">
                <h3 className="text-black uppercase font-bold text-lg mb-4">
                  DRIVER #4
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="driver4.firstName"
                      value={formData.driver4.firstName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="driver4.lastName"
                      value={formData.driver4.lastName}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:border-black px-3 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-normal mb-2 text-black">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="driver4.dateOfBirth"
                      value={formData.driver4.dateOfBirth}
                      onChange={handleChange}
                      className="w-64 border-2 border-black bg-white px-3 py-3 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT INFORMATION Section */}
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-8">
                CONTACT INFORMATION
              </h2>

              {/* Row 1: Address Line 1 + Email */}
              <div className="flex gap-6 mb-6">
                <div>
                  <label className="block text-lg mb-2 text-black">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    className="w-[520px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2 text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[520px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Address Line 2 + Phone */}
              <div className="flex gap-6 mb-6">
                <div>
                  <label className="block text-lg mb-2 text-black">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    className="w-[520px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2 text-black">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-[520px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Town / City + State */}
              <div className="flex gap-6 mb-6">
                <div>
                  <label className="block text-lg mb-2 text-black">
                    Town/ City
                  </label>
                  <input
                    type="text"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleChange}
                    className="w-[180px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2 text-black">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-[180px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Zip Code */}
              <div>
                <label className="block text-lg mb-2 text-black">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-[180px] border-2 border-black bg-white px-3 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* TERMS AND CONDITIONS Section */}
            <div>
              <h2 className="text-black uppercase font-extrabold text-xl sm:text-2xl mb-4">
                TERMS AND CONDITIONS:
              </h2>
              <div className="border-2 text-black border-black bg-white p-4 max-h-64 overflow-y-auto mb-4">
                <div className="text-sm space-y-4">
                  <div>
                    <p className="font-semibold mb-2">1. Acceptance of Terms</p>
                    <p className="mb-2">
                      By accessing or using this website and/or participating in any events, rentals, or services offered by [Your Business Name], you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">2. Eligibility & Participation</p>
                    <p className="mb-2">
                      Participants must meet all eligibility requirements as specified for each event. All drivers must possess a valid driver's license and meet age requirements. The organization reserves the right to refuse participation to any individual who does not meet these requirements.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">3. Safety & Waiver</p>
                    <p className="mb-2">
                      All participants acknowledge the inherent risks associated with racing activities. By participating, you agree to release [Your Business Name] from any liability arising from injuries or damages that may occur during events.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">4. Registration & Payment</p>
                    <p className="mb-2">
                      Registration fees are non-refundable unless otherwise specified. All payments must be completed before the event date. Late registrations may be subject to additional fees.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">5. Event Modifications</p>
                    <p className="mb-2">
                      [Your Business Name] reserves the right to modify, postpone, or cancel events due to weather, safety concerns, or other circumstances beyond our control. Participants will be notified of any changes as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 border-2 border-black cursor-pointer"
                />
                <label htmlFor="termsAccepted" className="text-black text-lg font-normal cursor-pointer">
                  I have read, understood and accept the terms & conditions
                </label>
              </div>
            </div>

            {/* CONTINUE Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-[20%] bg-[#60A5FA] text-white uppercase font-extrabold text-xl sm:text-2xl py-4 px-6 hover:opacity-90 transition-opacity cursor-pointer"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>  
      
      <Footer />
    </div>
  );
}