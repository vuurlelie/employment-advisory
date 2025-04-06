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
    <section id="kapcsolat" className="bg-[#f9f9f9] py-16 px-4 shadow">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4a4032] text-center px-4 md:px-12 pb-12">
        Kapcsolat
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-16">
        {/* Left: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[{ icon: 'fas fa-phone', title: 'Telefon', content: 'Mobil: +36-30-123-4567' },
            {
              icon: 'fas fa-envelope',
              title: 'Email',
              content: (
                <a href="mailto:pelda@munkaugyitanacsado.com" className="text-blue-600 break-words">
                  pelda@munkaugyitanacsado.com
                </a>
              )
            },
            {
              icon: 'fab fa-facebook-f',
              title: 'Facebook',
              content: (
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Munkaügyi tanácsadó
                </a>
              )
            },
            {
              icon: 'fas fa-map-marker-alt',
              title: 'Cím',
              content: '2112 Veresegyház, Példa utca 10.'
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-6 shadow-md rounded-lg flex flex-col justify-center items-center text-center h-full"
            >
              <div className="text-4xl mb-4 text-[#f1e6dd]">
                <i className={card.icon}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#4a4032]">{card.title}</h3>
              <p className="text-[#4a4032]">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Right: Google Map */}
        <div className="w-full h-full shadow rounded overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86008.58404158364!2d19.222953727499235!3d47.65007014570404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741cdbff35efcaf%3A0xf9d707937bf6238e!2sVeresegyh%C3%A1z%2C%202112!5e0!3m2!1shu!2shu!4v1743936443888!5m2!1shu!2shu"
            width="100%"
            height="100%"
            style={{ minHeight: '400px', border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
