import { useEffect } from "react";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className=" mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <section
            className="space-y-6"
            data-aos="fade-left" 
          >
            <header>
              <h3 className="text-gray-400">Got a project in mind?</h3>
              <h2 className="text-3xl font-bold text-white">Reserve a Call</h2>
            </header>

            <ul className="space-y-4">
              {[
                "An in-depth session to understand your needs",
                "Learn which plan is right for your team",
                "Get onboarding help",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <p className="text-gray-400">Technical support or some query?</p>
              <a
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-2"
                aria-label="Contact support"
              >
                Contact support →
              </a>
            </div>
          </section>

          {/* Right Section */}
          <article
            className="rounded-2xl p-6 border form-container"
            style={{ borderColor: "rgba(228, 131, 131, 0.3)" }}
            data-aos="fade-right" // Fade in from right
          >
            <h3 className="text-xl font-semibold text-white mb-6">Tell us about yourself.</h3>
            <form className="space-y-4" aria-labelledby="contact-form">
              <div className="space-y-2">
                <label htmlFor="full-name" className="text-sm text-gray-400">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  className="w-full bg-red-900/50 border border-red-800/30 rounded-lg p-2 text-white placeholder:text-sm"
                  placeholder="TAHA HAIDER"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="work-email" className="text-sm text-gray-400">Work Email</label>
                <input
                  id="work-email"
                  type="email"
                  className="w-full bg-red-900/50 border border-red-800/30 rounded-lg p-2 text-white placeholder:text-sm"
                  placeholder="Syed.Saha@Redtilt.Team"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company-size" className="text-sm text-gray-400">Company Size</label>
                <select
                  id="company-size"
                  className="w-full bg-red-900/50 border border-red-800/30 rounded-lg p-2 text-white placeholder:text-sm"
                  required
                >
                  <option>1-20</option>
                  <option>21-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="help-description" className="text-sm text-gray-400">How Can We Help?</label>
                <textarea
                  id="help-description"
                  className="w-full bg-red-900/50 border border-red-800/30 rounded-lg p-2 text-white h-20 placeholder:text-sm"
                  placeholder="I Am Interested in Redtilt For My Team. I Would Like To Learn More About it....."
                  required
                />
              </div>

              <footer className="flex justify-between flex-wrap ">
                <p className="text-gray-500">
                  You Can Also Email Us At <br /> Apac@Redtilt.Team
                </p>
                <button
                  type="submit"
                  className="px-5 bg-red-800 hover:bg-red-600 text-white rounded-lg p-2 transition-colors md:mt-2"
                  aria-label="Send message"
                >
                  Send message
                </button>
              </footer>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contact;
