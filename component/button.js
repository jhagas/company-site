import Link from "next/link";

export default function Buttoncomp(props) {
  return (
    <Link href={props.href} passHref>
      <a className="sm:mt-10 mt-4 z-10 transition hover:bg-gray3 font-work font-semibold sm:text-lg text-sm text-blue bg-white border-2 border-blue w-fit shadow-md py-2 px-4 rounded-md">
        {props.text}
      </a>
    </Link>
  );
}
