import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Footer = () => {
    return (
      <div className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
        <div className="w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          <div>
            <h6 className="font-bold uppercase pt-2">Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Data</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase pt-2">Support</h6>
            <ul>
              <li className="py-1">Pricing</li>
              <li className="py-1">Documention</li>
              <li className="py-1">Guides</li>
              <li className="py-1">APi status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase pt-2">Company</h6>
            <ul>
              <li className="py-1">About</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Pres</li>
              <li className="py-1">Partners</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase pt-2">Legal</h6>
            <ul>
              <li className="py-1">Claims</li>
              <li className="py-1">Privacy</li>
              <li className="py-1">Terms</li>
              <li className="py-1">Policies</li>
              <li className="py-1">Conditions</li>
            </ul>
          </div>
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="uppercase font-bold">Subscribe to our newslatter</p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row" action="#">
              <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex w-[1240px] m-auto justify-between items-center sm:flex-row text-center text-gray-500">
          <p>2022 Workflow, LLC. All right reserved</p>
          <div className="flex justify-between sm:max-w-[300px] pt-4 text-2xl">
            <FacebookIcon className="mx-2" />
            <InstagramIcon className="mx-2" />
            <GitHubIcon className="mx-2" />
            <ConnectWithoutContactIcon className="mx-2" />
            <TwitterIcon className="mx-2"/>
          </div>
        </div>
      </div>
    );
}

export default Footer;
