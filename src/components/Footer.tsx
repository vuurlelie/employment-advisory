function Footer() {
  return (
    <>
      <div className="relative overflow-hidden">
        <span className="square square-flipped square-1"></span>
        <span className="square square-flipped square-2"></span>

        <footer className="relative">
          <div className="container container-footer text-center">
            <p className="text-lg text-[#4a4032]">
              © 2025 Sike Enikő – Minden jog fenntartva.
            </p>

            <p className="mt-2 text-md text-[#bfa76a]">
              Készítette: {' '}
              <a
                href="https://www.facebook.com/profile.php?id=100012648488859"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bfa76a] hover:text-[#bfa76a] hover:underline text-md"
              >
                Rácz Krisztina
              </a>
            </p>

            <div className="mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574846083614"
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