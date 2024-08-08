import Image from 'next/image';
import externalPageImage from '../../../public/telex-footer-logo.svg';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import instagramIcon from '../../../public/instagram-fill.svg';
import tiktokIcon from '../../../public/tiktok-fill.svg';
import facebookIcon from '../../../public/facebook-fill.svg';

const supportLinks = [
  {
    label: 'Help Center',
    href: '#',
  },
  {
    label: 'FAQ',
    href: '/',
  },
  {
    label: 'How Telex works',
    href: '/',
  },
  {
    label: 'Waiting list',
    href: '#',
  },
  {
    label: 'Pricing Experience',
    href: '/',
  },
  {
    label: 'Contact Us',
    href: '/',
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/' },
  { label: 'Terms and Condition', href: '#' },
];

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className="externalPageFooterBg px-6 py-10 flex flex-col gap-14 text-[#fafafa] sm:px-24 sm:py-12">
      <section className="flex flex-wrap-reverse justify-between gap-y-10 sm:gap-y-20 lg:gap-y-0 lg:flex-nowrap">
        <div className="hidden sm:block">
          <Image src={externalPageImage} alt="Telex logo" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">Support</h1>
          <article className="flex flex-col gap-4">
            {supportLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="text-lg hover:underline transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </article>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">Legal</h1>
          <article className="flex flex-col gap-4">
            {legalLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="text-lg hover:underline transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </article>
        </div>
        <form className="flex flex-col gap-4 w-full sm:w-fit">
          <h1 className="text-lg font-semibold leading-[49px] -tracking-[1px]">
            Sign Up For Newsletter
          </h1>
          <div className="flex justify-between items-center w-full h-14 p-2 self-stretch bg-white sm:rounded-2xl sm:w-[325px]">
            <input
              type="email"
              name="newsletter"
              placeholder="Johndoe@example.com"
              className={`${plusJakartaSans.className} w-52 h-full p-2 bg-transparent border-none placeholder:text-[#a0a0a0] text-black focus:outline-none`}
            />
            <button
              type="submit"
              className="px-4 py-2 h-full flex items-center justify-center rounded-[8px] externalPageFooterBg text-sm font-medium leading-5 hover:bg-[#4e2bad] transition-all"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center">
        <div className="flex gap-6">
          <Link href="/" className="hover:underline transition-all">
            <Image src={instagramIcon} alt="instagram icon" />
          </Link>
          <Link href="/" className="hover:underline transition-all">
            <Image src={tiktokIcon} alt="tiktok icon" />
          </Link>
          <Link href="/" className="hover:underline transition-all">
            <Image src={facebookIcon} alt="facebook icon" />
          </Link>
        </div>
        <aside className="flex items-center gap-[6px]">
          <Link
            href="/"
            className="text-sm font-medium hover:underline transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:underline transition-all"
          >
            Terms of Use
          </Link>
        </aside>
      </section>
    </footer>
  );
};
export default Footer;
