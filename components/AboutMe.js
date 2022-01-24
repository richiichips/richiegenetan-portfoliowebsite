import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on:{" "}
            <a
              className="bg-green-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            {/* <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div> */}
            {/* <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div> */}
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                className="h-20 w-15 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                className="h-20 w-20 mx-4 my-4"
              />
               <img
                src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
               <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://iconape.com/wp-content/png_logo_vector/git-icon.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
                className="h-20 w-30 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://opencollective-production.s3.us-west-1.amazonaws.com/e183fa70-7b5d-11eb-825b-978575575aa4.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true"
                className="h-20 w-30 mx-4 my-4"
              />
              <img
                src="https://tech.bridgesforenterprise.com/assets/img/jquery.png"
                className="h-20 w-30 mx-4 my-4"
              />
            </div>
            <br />
            <h1 className="bg-indigo-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Additional Tools
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png"
                className="h-20 w-30 mx-4 my-4"
              />
              <img
                src="https://iconape.com/wp-content/png_logo_vector/eclipse-2.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://www.freeiconspng.com/thumbs/c-logo-icon/dev-visual-c-plus-plus-logo-icon-11.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Notepad%2B%2B_Logo.svg/1200px-Notepad%2B%2B_Logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1200px-PyCharm_Icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1024px-Adobe_Illustrator_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1200px-Adobe_Dreamweaver_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2019/10/adobe-premiere-pro-logo-1-1.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Adobe_Media_Encoder_Icon.svg/1200px-Adobe_Media_Encoder_Icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2101px-Adobe_InDesign_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
