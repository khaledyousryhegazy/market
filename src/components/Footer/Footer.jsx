import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="text-capitalize">
              Get connected with us on social networks :
            </span>
          </div>

          <div>
            <a
              target="blank"
              href="https://www.facebook.com/khalid.usry"
              className="me-4 fs-4 text-reset"
            >
              <AiFillFacebook />
            </a>
            <a target="blank" href="/#" className="me-4 fs-4 text-reset">
              <AiFillGoogleSquare />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/khalid-yousry-a35b15234/"
              className="me-4 fs-4 text-reset"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/khaledyousry_21/"
              className="me-4 fs-4 text-reset"
            >
              <AiFillInstagram />
            </a>
            <a
              target="blank"
              href="https://github.com/khaledyousryhegazy"
              className="me-4 fs-4 text-reset"
            >
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Market</h6>
                <p>
                  In our market you can find anything you want food , drinks and
                  others also we make discounts all time for our customers ,
                  there is one important thing we care about a lot it's
                  "Customer satisfaction" .
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="/#" className="text-reset">
                    Vegetables
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    Meat
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    Drinks
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    Snacks
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/#" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <AiOutlineHome /> Kafr Eldwar , Egypt
                </p>
                <p>
                  <AiOutlineMail className="me-1" />
                  yousryk49@gmail.com
                </p>
                <p>
                  <AiOutlinePhone /> + 201280710181
                </p>
                <p>
                  <AiOutlinePhone /> + 201270233219
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2023 Copyright:
          <a
            target="blank"
            className="text-reset fw-bold"
            href="https://github.com/khaledyousryhegazy "
          >
            Khalid Yousry
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
