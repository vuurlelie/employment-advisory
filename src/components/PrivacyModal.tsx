// PrivacyModal.tsx
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyModalProps {
  showPrivacy: boolean;
  setShowPrivacy: (value: boolean) => void;
}

const PrivacyModal: FC<PrivacyModalProps> = ({ showPrivacy, setShowPrivacy }) => {
  return (
    <AnimatePresence>
      {showPrivacy && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg p-6 relative flex flex-col"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 border-b">
                <h2 className="text-xl font-bold mb-4">
                Adatvédelmi tájékoztató – HR Hangoló
                </h2>
                {/* Close button */}
                <button
                className="font-bold text-2xl pl-2 mb-4 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPrivacy(false)}
                >
                ×
                </button>

                
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 prose max-w-none space-y-4 mb-2">
              <p>Hatályos: 2025. május 5-től</p>
              <p>
                A jelen adatvédelmi tájékoztató célja, hogy átlátható módon ismertesse,
                hogyan kezeljük a HR Hangoló weboldal (www.hrhangolo.hu) látogatói
                által megadott vagy technikailag keletkező személyes adatokat. Az
                adatkezelés során kiemelt figyelmet fordítunk az Ön adatainak védelmére,
                és az adatkezelést a vonatkozó hatályos jogszabályoknak – különösen az
                EU 2016/679 (GDPR) – megfelelően végezzük.
              </p>

              <h3 className="font-bold pt-4 pb-2">1. Az adatkezelő adatai</h3>
              <p>Név: Sike Enikő egyéni vállalkozó (HR Hangoló)</p>
              <p>Székhely: 2112 Veresegyház, Wesselényi Miklós u. 38.</p>
              <p>Nyilvántartási száma: 60395917</p>
              <p>Adószáma: 91025184-1-33</p>
              <p>
                E-mail:{' '}
                <a
                  href="mailto:info@hrhangolo.hu"
                  className="text-[#bfa76a] hover:underline"
                >
                  info@hrhangolo.hu
                </a>
              </p>
              <p>Telefonszám: +36 30 160 14 89</p>

              <h3 className="font-bold pt-4 pb-2">2. A kezelt adatok köre</h3>
              <p>
                A kapcsolatfelvételi űrlapon keresztül az alábbi adatokat kezeljük:
              </p>
              <ul className="list-disc ml-6">
                <li>Név</li>
                <li>Email cím</li>
                <li>Az üzenet tartalma</li>
              </ul>

              <h3 className="font-bold pt-4 pb-2">3. Az adatkezelés célja</h3>
              <p>A beérkező üzenetek megválaszolása, kapcsolattartás.</p>

              <h3 className="font-bold pt-4 pb-2">4. Az adatkezelés jogalapja</h3>
              <p>
                Az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
              </p>

              <h3 className="font-bold pt-4 pb-2">5. Az adatok tárolásának időtartama</h3>
              <p>
                A beérkezett üzeneteket legfeljebb 6 hónapig tároljuk, majd töröljük.
              </p>

              <h3 className="font-bold pt-4 pb-2">6. Adattovábbítás, adatfeldolgozók</h3>
              <p>
                A megadott személyes adatok harmadik félnek nem kerülnek továbbításra
                reklám vagy egyéb üzleti célból. Az alábbi szolgáltatók mint
                adatfeldolgozók közreműködhetnek:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Tárhely- és e-mail szolgáltató:{' '}
                  <a
                    href="https://tarhely.eu"
                    target="_blank"
                    rel="noopener"
                    className="text-[#bfa76a] hover:text-[#bfa76a] hover:underline"
                  >
                    Tárhely.Eu Kft.
                  </a>
                </li>
                <li>
                  Tranzakciós e-mail rendszer:{' '}
                  <a
                    href="https://www.emailjs.com"
                    target="_blank"
                    rel="noopener"
                    className="text-[#bfa76a] hover:text-[#bfa76a] hover:underline"
                  >
                    EmailJS
                  </a>
                </li>
                <li>
                  ReCaptcha szolgáltató:{' '}
                  <a
                    href="https://www.google.com/recaptcha"
                    target="_blank"
                    rel="noopener"
                    className="text-[#bfa76a] hover:text-[#bfa76a] hover:underline"
                  >
                    Google LLC
                  </a>
                </li>
              </ul>

              <h3 className="font-bold pt-4 pb-2">7. Az érintettek jogai</h3>
              <p className="mb-2">
                Önt az alábbi jogok illetik meg a személyes adatai kezelésével
                kapcsolatban:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Hozzáférés joga: tájékoztatást kérhet az adatkezelésről és az Önről
                  tárolt adatokról
                </li>
                <li>
                  Helyesbítés joga: pontatlan adatainak módosítását kérheti
                </li>
                <li>
                  Törlés joga („elfeledtetés joga”): kérheti adatainak törlését, ha
                  már nincs szükség rájuk
                </li>
                <li>Adatkezelés korlátozásának joga</li>
                <li>Adathordozhatóság joga</li>
                <li>Tiltakozás az adatkezelés ellen</li>
                <li>
                  Panasztétel joga a felügyeleti hatóságnál:
                  <ul className="list-circle ml-6 mt-2 space-y-1">
                    <li>
                      Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
                    </li>
                    <li>Cím: 1055 Budapest, Falk Miksa utca 9–11.</li>
                    <li>
                      Web:{' '}
                      <a
                        href="https://www.naih.hu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#bfa76a] hover:underline"
                      >
                        naih.hu
                      </a>
                    </li>
                    <li>
                      E-mail:{' '}
                      <a
                        href="mailto:ugyfelszolgalat@naih.hu"
                        className="text-[#bfa76a] hover:underline"
                      >
                        ugyfelszolgalat@naih.hu
                      </a>
                    </li>
                    <li>Telefon: +36 (1) 391-1400</li>
                  </ul>
                </li>
              </ul>

              <h3 className="font-bold pt-4 pb-2">8. Kapcsolat</h3>
              <p>
                Amennyiben bármilyen kérdése van az adatkezeléssel kapcsolatban,
                kérjük, lépjen kapcsolatba velünk a fenti elérhetőségeken.
              </p>
            </div>

            {/* Right-aligned Rendben button */}
            <div className="mt-auto flex justify-end">
              <button
                className="bg-[#bfa76a] hover:bg-[#d4af37] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a]"
                onClick={() => setShowPrivacy(false)}
              >
                Rendben
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
