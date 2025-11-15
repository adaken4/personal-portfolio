import { LuMail, LuLinkedin, LuGithub } from "react-icons/lu";
import ContactMethod from "./ContactMethod";
import ResponseTimeBox from "./ResponseTimeBox";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h3>
        <div className="space-y-4">
          <ContactMethod
            href="mailto:adakennedy6@gmail.com"
            icon={<LuMail className="text-white" size={24} />}
            title="Email"
            description="adakennedy6@gmail.com"
          />

          <ContactMethod
            href="https://www.linkedin.com/in/kennedy-ada-606655184/"
            icon={<LuLinkedin className="text-white" size={24} />}
            title="LinkedIn"
            description="linkedin.com/in/kennedy-ada-606655184"
            isExternal
          />

          <ContactMethod
            href="https://github.com/adaken4"
            icon={<LuGithub className="text-white" size={24} />}
            title="GitHub"
            description="github.com/adaken4"
            isExternal
          />
        </div>
      </div>

      <ResponseTimeBox />
    </div>
  );
}
