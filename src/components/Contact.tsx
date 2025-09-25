import { useState, useEffect } from 'react';
//import emailjs from '@emailjs/browser';
//import ReCAPTCHA from 'react-google-recaptcha';
import PrivacyModal from './PrivacyModal';

function useIsMobile(breakpoint = 640) {
const [isMobile, setIsMobile] = useState(
  typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
);

useEffect(() => {
  const onResize = () => setIsMobile(window.innerWidth < breakpoint);
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}, [breakpoint]);

return isMobile;
}
  

function Contact() {
  /*const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);*/
  const [showPrivacy, setShowPrivacy] = useState(false);

  const isMobile = useIsMobile(640);

  // reset form when scrolled out
  /*useEffect(() => {
    const resetFormIfLeaving = () => {
      const s = document.getElementById('kapcsolat')?.getBoundingClientRect();
      if (!s || s.top >= window.innerHeight || s.bottom <= 0) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
        setCaptchaValid(false);
        setAgreed(false);
        setErrors({ name: '', email: '', message: '' });
      }
    };
    window.addEventListener('scroll', resetFormIfLeaving);
    return () => window.removeEventListener('scroll', resetFormIfLeaving);
  }, []);

  const validate = () => {
    let valid = true;
    const newErr = { name: '', email: '', message: '' };
    if (!formData.name)      
    { 
      newErr.name = 'Név megadása kötelező!'; 
      valid = false 
    }
    
    if (!formData.email)     
    { 
      newErr.email = 'Email cím megadása kötelező!'; 
      valid = false 
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
    {
      newErr.email = 'Érvénytelen email formátum'; 
      valid = false 
    }
    
    if (!formData.message)   
    { 
      newErr.message = 'Üzenet megadása kötelező!'; 
      valid = false 
    }

    if (!captchaValid) {
      alert('Kérlek, igazold, hogy nem vagy robot!');
      valid = false;
    }

    if (!agreed) {
      alert('Kérlek, fogadd el az Adatvédelmi tájékoztatót!');
      valid = false;
    }
    setErrors(newErr);
    return valid;
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!validate()) 
      return;

    setLoading(true);
    emailjs
      .send()
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setAgreed(false);
        setCaptchaValid(false);
      })
      .catch((err) => console.error('Email sending error:', err))
      .finally(() => setLoading(false));
  };*/

  return (
    <section id="kapcsolat" className="bg-[#f9f9f9] py-12 px-4 shadow">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4a4032] text-center pb-12 drop-shadow-md">
        Kapcsolat
      </h2>

      <div className="max-w-7xl mx-auto sm:px-10 flex flex-col lg:flex-row gap-12 mb-16">
        {isMobile && (
          <div className="w-full order-2">
            <div className="text-[#4a4032] font-bold space-y-8">
              <div>
                <div className="flex items-center gap-3 text-[#4a4032] font-bold text-lg">
                  <i className="fab fa-facebook-square text-[#bfa76a] text-lg" aria-hidden></i>
                  <span>Facebook</span>
                </div>
                <div className="mt-2 shadow rounded overflow-hidden w-full max-w-[300px] border border-white">
                  <iframe
                    title="Facebook Page"
                    src={
                      "https://www.facebook.com/plugins/page.php?" +
                      "href=" + encodeURIComponent("https://www.facebook.com/profile.php?id=61574846083614") +
                      "&tabs=" +                      
                      "&width=300" +
                      "&height=130" +
                      "&small_header=false" +          
                      "&adapt_container_width=true" +
                      "&hide_cover=false" +
                      "&show_facepile=false"
                    }
                    width="300"
                    height="130"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
              </div>

              <div>
                <div className="flex items-center gap-3 text-[#4a4032] font-bold text-lg">
                  <i className="fas fa-shield-alt text-[#bfa76a] text-lg" aria-hidden></i>
                  <span>
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="text-left text-[#4a4032] mt-1 text-lg hover:underline focus:outline-none rounded"
                      aria-haspopup="dialog"
                      aria-controls="privacy-modal"
                    >
                      Adatvédelmi tájékoztató
                    </button>
                  </span>
                </div>
                
                <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
              </div>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#4a4032] font-bold text-lg">
                <i className="fab fa-facebook-square text-[#bfa76a] text-lg"></i>
                <span>Facebook</span>
              </div>
              <div className="mt-2 shadow rounded overflow-hidden w-[500px] border border-white">
                <iframe
                  title="Facebook Page"
                  src={
                    "https://www.facebook.com/plugins/page.php?" +
                    "href=" + encodeURIComponent("https://www.facebook.com/profile.php?id=61574846083614") +
                    "&tabs=" +
                    "&width=500" +
                    "&height=132" +
                    "&small_header=false" +
                    "&adapt_container_width=true" +
                    "&hide_cover=false" +
                    "&show_facepile=false"
                  }
                  width="500"
                  height="132"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-3 text-[#4a4032] font-bold text-lg">
                <i className="fas fa-shield-alt text-[#bfa76a] text-lg"></i>
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(true)}
                    className="text-left text-[#4a4032] text-lg hover:underline focus:outline-none rounded"
                  >
                    Adatvédelmi tájékoztató
                  </button>
              </div>
              <div className="text-[#f9f9f9] mt-1 text-lg">0</div>
              <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
            </div>
          </div>
        )}
        <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
          {[
            { icon: "fas fa-phone", label: "Telefon", value: "+36-30-160-14-89" },
            {
              icon: "fas fa-envelope",
              label: "Email",
              value: (
                <a href="mailto:info@hrhangolo.hu" className="text-blue-600 break-words">
                  info@hrhangolo.hu
                </a>
              ),
            },
            { icon: "fas fa-map-marker-alt", label: "Cím", value: "Online" },
          ].map((it, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 text-[#4a4032] font-bold text-lg">
                <i className={`${it.icon} text-[#bfa76a] text-lg`}></i>
                <span>{it.label}</span>
              </div>
              <div className="text-[#4a4032] mt-1 text-lg">{it.value}</div>
              <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
            </div>
          ))}
        </div>
      </div>


      {/* --- Message Form --- */}
      {/*<div className="max-w-4xl mx-auto sm:px-4">
        <h3 className="text-2xl font-semibold mb-6 text-[#4a4032] text-center md:text-left">
          Üzenetküldés
        </h3>
        {submitted && (
          <p className="text-green-600 mb-4 text-center md:text-left">
            Az üzenet sikeresen elküldve.
          </p>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name 
          <div>
            <input
              type="text" name="name" placeholder="Név"
              value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032]"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          {/* Email 
          <div>
            <input
              type="email" name="email" placeholder="Email cím"
              value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032]"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          {/* Message 
          <div className="md:col-span-2">
            <textarea
              name="message" placeholder="Üzenet"
              value={formData.message} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032] h-40"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Privacy checkbox 
          <div className="md:col-span-2 flex items-center space-x-2 mb-4">
            <input
              type="checkbox" id="privacy" checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 text-[#bfa76a] border-gray-300 rounded justify-center"
            />
            <div className="text-[#4a4032]">
              Elolvastam és elfogadom az{' '}
              <span
                className="text-[#bfa76a] hover:underline cursor-pointer"
                onClick={() => setShowPrivacy(true)}
              >
                Adatvédelmi tájékoztatót
              </span>
              .
            </div>
          </div>

          {/* reCAPTCHA 
          <div className="md:col-span-2 flex justify-center">
            <ReCAPTCHA
              sitekey=""
              onChange={(v) => setCaptchaValid(!!v)}
              hl="hu"
            />
          </div>

          {/* Submit 
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              disabled={loading || !captchaValid || !agreed}
              className={`bg-[#6e5e4e] text-white px-6 py-2 rounded font-bold transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#bfa76a] ${
                (loading || !captchaValid || !agreed) ? 'opacity-50 cursor-not-allowed hover:bg-[#6e5e4e]' : 'hover:bg-[#bfa76a] '
              }`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z" className="opacity-75"/>
                </svg>
              ) : (
                'KÜLDÉS'
              )}
            </button>
          </div>
        </form>
      </div>*/}

      <PrivacyModal
        showPrivacy={showPrivacy}
        setShowPrivacy={setShowPrivacy}
      />
    </section>
  );
}

export default Contact;
