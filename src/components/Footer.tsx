function Footer() {
  return (
    <>
      {/* Background decoration with skewed gradient squares */}
      <div className="relative overflow-hidden">
        <span className="square square-flipped square-1"></span>
        <span className="square square-flipped square-2"></span>

        {/* Footer content */}
        <footer className="relative">
          <div className="container container-footer text-center">
            {/* Copyright text */}
            <p className="text-md text-[#4a4032]">
              © 2025 Sike Enikő – Minden jog fenntartva.
            </p>

            {/* Site creator info */}
            <p className="mt-2 text-sm text-[#bfa76a]">
              Készítette: {' '}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bfa76a] hover:text-[#bfa76a] hover:underline text-md"
              >
                Rácz Krisztina
              </a>
            </p>

            {/* Facebook icon */}
            <div className="mt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4032] hover:text-[#bfa76a] text-md"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;