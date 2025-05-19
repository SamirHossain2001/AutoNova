import React from "react";

const Footer = () => {
  return (
    <div className="mt-25 bg-base-200 ">
      <footer className="container mx-auto  footer sm:footer-horizontal text-base-content p-10">
        <nav>
          <h6 className="footer-title">Home</h6>
          <a className="link link-hover">Listing</a>
          <a className="link link-hover">Auction</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Shop</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Reviews</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title font-bold">AutoNova</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
