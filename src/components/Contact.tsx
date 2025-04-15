import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resetFormIfLeaving = () => {
      const contactSection = document.getElementById('kapcsolat');
      const rect = contactSection?.getBoundingClientRect();
      const inView = rect && rect.top < window.innerHeight && rect.bottom > 0;

      if (!inView) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
        setCaptchaValid(false);
        setErrors({ name: '', email: '', message: '' });
      }
    };

    window.addEventListener('scroll', resetFormIfLeaving);
    return () => window.removeEventListener('scroll', resetFormIfLeaving);
  }, []);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Név megadása kötelező!';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email cím megadása kötelező!';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Érvénytelen email formátum';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Üzenet megadása kötelező!';
      valid = false;
    }
    if (!captchaValid) {
      alert('Kérlek, igazold, hogy nem vagy robot!');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      emailjs
        .send('service_sg4nupd', 'template_9eojvsg', formData, 'h7IHyO1EJR6Rtg0lX')
        .then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error: any) => {
          console.error('Email sending error:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  return (
    <section id="kapcsolat" className="bg-[#f9f9f9] py-12 px-4 shadow">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4a4032] text-center px-4 md:px-12 pb-12 drop-shadow-md">
        Kapcsolat
      </h2>
      <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row gap-12 mb-16">
        {/* Left: Facebook Embed (order-2 on small, order-1 on large) */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="space-y-6 text-[#4a4032] font-bold">
            <div className="flex items-center gap-3">
              <i className="fab fa-facebook-f text-[#bfa76a] text-lg"></i>
              <span>Facebook</span>
            </div>
            <div className="shadow border:white p-1 rounded overflow-hidden w-fit">
              <iframe
                title="Facebook Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61574846083614&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="340"
                height="130"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            </div>
            {/* Divider for consistency on small screens */}
            <div className="block lg:hidden pt-4">
              <hr className="border-t border-[#bfa76a] opacity-30" />
            </div>
          </div>
        </div>


        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
          {[
            {
              icon: 'fas fa-phone',
              label: 'Telefon',
              value: '+36-30-160-14-89',
            },
            {
              icon: 'fas fa-envelope',
              label: 'Email',
              value: (
                <a
                  href="mailto:kriszti169@gmail.com"
                  className="text-blue-600 break-words"
                >
                  info@hrhangolo.hu
                </a>
              ),
            },
            {
              icon: 'fas fa-map-marker-alt',
              label: 'Cím',
              value: 'Online',
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 text-[#4a4032] font-bold">
                <i className={`${item.icon} text-[#bfa76a] text-lg`}></i>
                <span>{item.label}</span>
              </div>
              <div className="text-[#4a4032] mt-1">{item.value}</div>
                <hr className="mt-3 border-t border-[#bfa76a] opacity-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Message form */}
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-[#4a4032] text-center md:text-left">
          Üzenetküldés
        </h3>
        {submitted && (
          <p className="text-green-600 mb-4 text-center md:text-left">
            Az üzenet sikeresen elküldve.
          </p>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Név"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032]"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email cím"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032]"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Üzenet"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded text-[#4a4032] h-40"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="md:col-span-2 flex justify-center">
            <ReCAPTCHA
              sitekey="6LePlAYrAAAAAB2BOiJlEs6SNlPuPTahLlePF2C9"
              onChange={handleCaptchaChange}
              hl="hu"
            />
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#6e5e4e] hover:bg-[#bfa76a] text-white px-6 py-2 rounded font-bold transition flex items-center gap-2 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                  ></path>
                </svg>
              ) : (
                'KÜLDÉS'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
