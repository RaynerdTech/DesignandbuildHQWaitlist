import React, { useState } from 'react';

export default function WaitlistPage() {
  // --- CONFIGURATION ---
  // Replace 'YOUR_FORM_ID' with your actual Formspree ID (e.g., https://formspree.io/f/mqkvpown)
  const FORMSPREE_URL = "https://formspree.io/f/xzddgqnl"; 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '' // Added company name
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ firstName: '', lastName: '', email: '', companyName: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: "Something went wrong. Please try again." });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Desktop/Tablet Glow SVGs */}
      <div className="hidden md:block">
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '530px', height: '454.663px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="630" height="444" viewBox="0 0 630 444" fill="none" className="w-full h-full">
            <defs>
              <filter id="filter0_f_desktop1" x="-0.000152588" y="-276.83" width="795.336" height="720.324" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="66.0848" result="effect1_foregroundBlur_129_144"/>
              </filter>
              <linearGradient id="paint0_linear_desktop1" x1="397.471" y1="-144" x2="397.471" y2="310.663" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4BA26C"/>
                <stop offset="0.5" stopColor="#2D9053"/>
                <stop offset="1" stopColor="#107E3A"/>
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_desktop1)">
              <path d="M662.471 166.183C661.584 165.301 657.508 155.204 648.29 121.871C639.073 88.538 627.905 57.7181 623.474 46.4748C615.202 30.161 594.581 -5.50893 578.273 -17.6782C561.966 -29.8474 506.484 -61.5491 480.782 -75.8788C455.375 -89.7676 403.852 -119.794 401.016 -128.788L382.404 -142.677L132.471 -144L194.511 -112.254L275.163 -85.138C290.821 -80.2879 324.972 -69.0005 336.317 -62.6514C350.497 -54.7149 380.631 -41.4875 398.357 -9.08032C412.538 16.8454 431.445 54.6317 439.126 70.2842L476.35 157.585C478.123 160.231 481.845 168.961 482.554 182.717C483.263 196.474 482.85 223.281 482.554 234.966C480.782 248.193 472.096 280.203 451.534 302.425C430.972 324.647 574.137 296.694 648.29 279.939L662.471 166.183Z" fill="url(#paint0_linear_desktop1)" stroke="black" strokeWidth="1.3217"/>
            </g>
          </svg>
        </div>

        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: '110px', height: '394.167px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="204" height="546" viewBox="0 0 204 546" fill="none" className="w-full h-full">
            <defs>
              <filter id="filter0_f_desktop2" x="-55.7998" y="-3.05176e-05" width="259.593" height="545.051" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="26.9417" result="effect1_foregroundBlur_129_143"/>
              </filter>
              <linearGradient id="paint0_linear_desktop2" x1="74" y1="76.4664" x2="74" y2="470.633" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4BA26C"/>
                <stop offset="0.5" stopColor="#2D9053"/>
                <stop offset="1" stopColor="#107E3A"/>
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_desktop2)">
              <path d="M129 470.633L79.5575 76.4664C62.6934 102.144 27.5854 160.302 22.0662 187.513C15.1672 221.528 22.0662 266.547 22.0662 269.548C22.0662 272.549 56.561 345.58 55.4111 351.583C54.2613 357.585 120.951 424.614 100.254 430.616L129 470.633Z" fill="url(#paint0_linear_desktop2)" stroke="black" strokeWidth="1.83333"/>
            </g>
          </svg>
        </div>

        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-100 pointer-events-none" style={{ width: '282.446px', height: '192px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="581" height="348" viewBox="0 0 581 348" fill="none" className="w-full h-full">
            <defs>
              <filter id="filter0_f_desktop3" x="0.000167847" y="-7.62939e-05" width="580.126" height="489.679" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="54.4198" result="effect1_foregroundBlur_129_142"/>
              </filter>
              <linearGradient id="paint0_linear_desktop3" x1="290.063" y1="148.84" x2="290.063" y2="340.84" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4BA26C"/>
                <stop offset="0.5" stopColor="#2D9053"/>
                <stop offset="1" stopColor="#107E3A"/>
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_desktop3)">
              <path d="M397.17 169.468C296.251 264.674 198.559 312.807 162.327 324.972L148.84 335.286L159.154 336.873L239.286 340.84L271.022 328.145C280.278 320.212 301.012 302.281 309.898 294.03C318.784 285.778 341.633 256.211 351.947 242.459C351.947 234.208 390.03 195.121 409.071 176.608C411.61 170.261 424.939 155.451 431.286 148.84L424.939 153.6L397.17 169.468Z" fill="url(#paint0_linear_desktop3)"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Mobile Glow SVGs */}
      <div className="md:hidden">
        {/* Top Right Glow Mobile */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '530px', height: '454.663px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="363" height="589" viewBox="0 0 363 589" fill="none" className="w-full h-full">
            <defs>
              <filter id="filter0_f_mobile1" x="9.15527e-05" y="-131.83" width="795.336" height="720.324" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="66.0848" result="effect1_foregroundBlur_110_921"/>
              </filter>
              <linearGradient id="paint0_linear_mobile1" x1="397.471" y1="1" x2="397.471" y2="455.663" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4BA26C"/>
                <stop offset="0.5" stopColor="#2D9053"/>
                <stop offset="1" stopColor="#107E3A"/>
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_mobile1)">
              <path d="M662.471 311.183C661.584 310.301 657.508 300.204 648.29 266.871C639.073 233.538 627.905 202.718 623.474 191.475C615.202 175.161 594.581 139.491 578.273 127.322C561.966 115.153 506.484 83.4509 480.782 69.1212C455.375 55.2324 403.852 25.2062 401.016 16.2115L382.404 2.32274L132.471 1L194.511 32.7458L275.163 59.862C290.821 64.7121 324.972 75.9995 336.317 82.3486C350.497 90.2851 380.631 103.512 398.357 135.92C412.538 161.845 431.445 199.632 439.126 215.284L476.35 302.585C478.123 305.231 481.845 313.961 482.554 327.717C483.263 341.474 482.85 368.281 482.554 379.966C480.782 393.193 472.096 425.203 451.534 447.425C430.972 469.647 574.137 441.694 648.29 424.939L662.471 311.183Z" fill="url(#paint0_linear_mobile1)" stroke="black" strokeWidth="1.3217"/>
            </g>
          </svg>
        </div>

        {/* Bottom Left Glow Mobile */}
        <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: '110px', height: '394.167px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="127" height="449" viewBox="0 0 127 449" fill="none" className="w-full h-full">
            <defs>
              <filter id="filter0_f_mobile2" x="-132.8" y="0" width="259.593" height="545.051" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="36.9417" result="effect1_foregroundBlur_136_463"/>
              </filter>
              <linearGradient id="paint0_linear_mobile2" x1="-3" y1="76.4665" x2="-3" y2="470.633" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4BA26C"/>
                <stop offset="0.5" stopColor="#2D9053"/>
                <stop offset="1" stopColor="#107E3A"/>
              </linearGradient>
            </defs>
            <g filter="url(#filter0_f_mobile2)">
              <path d="M52 470.633L2.5575 76.4665C-14.3066 102.144 -49.4146 160.302 -54.9338 187.513C-61.8328 221.528 -54.9338 266.547 -54.9338 269.548C-54.9338 272.549 -20.439 345.58 -21.5889 351.583C-22.7387 357.585 43.9512 424.614 23.2544 430.616L52 470.633Z" fill="url(#paint0_linear_mobile2)" stroke="black" strokeWidth="1.83333"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8 md:py-12">
        {/* Logo */}
        <img
  src="/logo.png"
  alt="DesignandBuildHQ logo"
  className="w-[180px] h-auto"
/>

       
        {/* Main Content Container */}
        <div className="w-full max-w-182.5 md:max-w-4xl flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-white text-center font-abhaya font-extrabold text-[36px] tracking-[8px] leading-[48px] md:leading-[64px] mb-4">
            WELCOME TO THE HQ
          </h1>

          {/* Partner Description Section */}
          <div className="max-w-2xl mx-auto mb-6 px-4">
            <p className="text-white/80 font-sf text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[0.5px]">
              Design & Build HQ partners with UK and EU companies to build dedicated product and long-term engineering teams that prioritise quality, continuity, and sustainable growth.
            </p>
          </div>

          {/* Subheading */}
          <p className="text-white text-center font-sf text-[14px] font-normal leading-[24px] tracking-[2px]  md:mb-12 max-w-md mx-auto px-8">
            Join the waitlist and get a 30% discount when our site is live
          </p>

          {/* Form */}
          <div className="w-full md:w-[743px] md:px-22 md:py-6 md:bg-black">
            <h2 className="text-white text-center font-abhaya text-[16px] font-[800] leading-[25px] tracking-[3.125px] mb-6 md:mb-8 mt-8 md:mt-0">
              JOIN WAITLIST
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Desktop/Tablet: Two columns for names */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-6">
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white text-[#414941] text-[12px] px-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-3 md:py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white text-[#414941] text-[12px] px-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-3 md:py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                  />
                </div>
              </div>

              {/* Mobile: Stacked name inputs */}
              <div className="md:hidden space-y-6 px-4">
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white text-[#414941] text-[12px] px-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white text-[#414941] text-[12px] px-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                  />
                </div>
              </div>

              {/* Optional Company Name - Matches Email Style */}
              <div className="relative px-4 md:px-0">
                <label className="absolute -top-2 left-7 md:left-3 bg-white text-[#414941] text-[12px] px-1">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                />
              </div>

              {/* Email */}
              <div className="relative px-4 md:px-0">
                <label className="absolute -top-2 left-7 md:left-3 bg-white text-[#414941] text-[12px] px-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border border-[#727970] text-white placeholder-white placeholder:text-[16px] placeholder:tracking-[0.5px] px-4 py-4 text-sm rounded-[4px] transition-all duration-200 outline-none hover:border-[#727970]/30 focus:border-3 focus:border-[#0D622C]"
                />
              </div>

              {/* Status Messages */}
              {status.submitted && <p className="text-green-500 font-semibold">Thanks for joining our waitlist!</p>}
              {status.error && <p className="text-red-500 font-semibold">{status.error}</p>}

              {/* Terms Text */}
              <p className="text-white font-roboto font-normal md:mt-[-16px] mt-[-8px] text-[12px] leading-[16px] tracking-[0.4px] md:text-[14px] md:leading-[20px] md:tracking-[0.25px] text-left px-4 md:px-0 md:ml-[8px]">
                By {window.innerWidth < 768 ? 'submitting' : 'clicking on submit'}, you agree to our Terms of {window.innerWidth < 768 ? 'Service' : 'service'} and {window.innerWidth < 768 ? 'Privacy Policy' : 'privacy policy'}
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="md:w-auto md:px-8 px-12 bg-[#0D622C] hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-4 rounded-full text-[14px] md:text-[16px] transition-colors duration-200 mt-6"
              >
                {status.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Footer - Mobile Only */}
          <div className="mt-auto pt-14 pb-8">
            <p className="text-white w-full text-right font-roboto text-[12px] font-normal tracking-[0.6px] leading-normal">
              © 2025 D&BHQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}