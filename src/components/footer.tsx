import Image from "next/image";
import gdscCentered from "public/images/gdsc-long.png";
import fb from "public/images/fb.svg";
import linkedIn from "public/images/linkedIn.svg";
import mail from "public/images/mail.svg";
import web from "public/images/web.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-6 px-4 md:px-12">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:items-start md:justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="text-2xl">
            <span className="text-red">Keep in </span>
            <span className="text-blue">touch</span>{" "}
            <span className="text-yellow">with</span>{" "}
            <span className="text-green">us!</span>
          </div>
          <div className="flex gap-6 mt-2">
            <Link href={"https://www.facebook.com/GDSCUSePObrero"} target="_blank">
                <Image src={fb} height={30} alt="Facebook Link" />
            </Link>
            <Link href={"https://linkedin.com/company/gdscusepobrero"} target="_blank">
                <Image src={linkedIn} height={30} alt="LinkedIn Link" />
            </Link>
            <Link href={"mailto:gdsc@usep.edu.ph"} target="_blank">
                <Image src={mail} height={30} alt="Mail Link" />
            </Link>
            <Link href={"https://gdsc.community.dev/university-of-southeastern-philippines"} target="_blank">
                <Image src={web} height={30} alt="Bevy Link" />
            </Link>
          </div>
        </div>
        <Image
          src={gdscCentered}
          width={300}
          alt="GDSC Logo"
          className="mt-2"
        />
      </div>
      <div className="mt-6 md:mt-12 text-sm text-center">
        © 2023 GDSC USeP Obrero. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
