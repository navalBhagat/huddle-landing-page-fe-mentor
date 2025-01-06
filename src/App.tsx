import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;

const Header = () => {
  return (
    <header>
      <img src="/images/logo.svg" alt="Huddle platform logo" />
    </header>
  );
};

const Content = () => {
  return (
    <main>
      <img
        src="/images/illustration-mockups.svg"
        alt="Huddle platform illustrations"
      />
      <section>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button aria-label="Register for Huddle">Register</button>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Social media">
        <ul className="socials">
          <li>
            <a href="https://facebook.com" aria-label="Facebook">
              <i
                className="fa-brands fa-facebook-f fa-lg"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="fa-brands fa-twitter fa-lg" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
