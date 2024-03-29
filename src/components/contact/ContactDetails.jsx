import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-2 md:px-6">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm"
        >
          Just a friendly reminder that the information provided here is for
          business purposes only. If you have any questions, feel free to chat
          with me directly on my social media. I appreciate your understanding
          in using this responsibly.
        </motion.p>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-medium text-2xl text-amber-500 dark:text-amber-300 mt-5 mb-5"
        >
          <Reveal width="100%">Contact details</Reveal>
        </motion.h2>

        {/* Address table */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-x-auto rounded-xl  shadow-lg shadow-gray-400/50 dark:shadow-black/30  mb-5"
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-neutral-100 dark:bg-neutral-900 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-amber-600 dark:text-amber-500"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-amber-600 dark:text-amber-500"
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-[#101111]/30">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Address
                </th>
                <td className="px-6 py-4">Pune, Maharashtra, India</td>
              </tr>
              <tr className="bg-neutral-100 dark:bg-neutral-900">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email
                </th>
                <td className="px-6 py-4">
                  <a
                    href="mailto:mukul.dharashivkar99@gmail.com"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800 flex items-center"
                  >
                    mukul.dharashivkar99@gmail.com{" "}
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm mb-5"
        >
          If you need any further information, such as my phone number, please
          do not hesitate to send me an email first.
        </motion.p>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-medium text-2xl text-amber-500 dark:text-amber-300 mt-5 mb-5"
        >
          <Reveal width="100%">Important Links</Reveal>
        </motion.h2>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm mb-5"
        >
          Leaving some important links to my Socials here, feel free to contact
          me on any of them.
        </motion.p>

        {/* Address table */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-x-auto rounded-xl  shadow-lg shadow-gray-400/50 dark:shadow-black/30  mb-8"
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-neutral-100 dark:bg-neutral-900 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-amber-600 dark:text-amber-500"
                >
                  Social Media
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-amber-600 dark:text-amber-500"
                >
                  Profile URL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-[#101111]/30">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Linkedin
                </th>
                <td className="px-6 py-4">
                  <a
                    href="https://www.linkedin.com/in/themukuldharashivkar"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800  flex items-center"
                  >
                    linkedin.com/in/themukuldharashivkar
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>

              <tr className="bg-neutral-100 dark:bg-neutral-900">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Github
                </th>
                <td className="px-6 py-4">
                  <a
                    href="https://www.github.com/themukuldharashivkar"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800  flex items-center"
                  >
                    github.com/themukuldharashivkar
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>

              <tr className="bg-white dark:bg-[#101111]/30">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Twitter
                </th>
                <td className="px-6 py-4">
                  <a
                    href="https://www.twitter.com/themukul_99"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800 flex items-center"
                  >
                    twitter.com/themukul_99
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ContactDetails;
