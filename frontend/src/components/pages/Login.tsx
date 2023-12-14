import { Link } from "react-router-dom";
import PageBanner from "../sections/PageBanner";
import { banner2 } from "../utils/helper";

const Login = () => {
  return (
    <>
      <PageBanner
        title="LOGIN"
        imgSrc={banner2}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloribus eligendi asperiores."
      />
      <main>
        <div className="container">
          <div className="flex items-start justify-between">
            <section className="w-[50%]">
              <h2 className="mb-8 text-4xl">Login</h2>

              <form>
                <div className="form-control">
                  <label htmlFor="email" className="mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    autoFocus
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="password" className="mb-2 text-sm">
                    Password *
                  </label>
                  <input type="password" id="password" className="form-input" />
                </div>

                <a href="#!">Forgot your password?</a>
                <a href="#!" className="btn-submit">
                  Submit
                </a>
              </form>
            </section>
            <section className="w-[40%]">
              <h2 className="mb-8 text-4xl">New Customer</h2>
              <p>
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our emails.
              </p>
              <Link to="/register" className="btn-link">
                CREATE ACCOUNT
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
