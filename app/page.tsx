import Image from 'next/image';
import Link from 'next/link';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Asif
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a full-stack developer (Front-end bias). I currently `}
        <Link href="/work" className="">
          {`work`}
        </Link>{' '}
        {`as a junior full-stack developer at `}
        <Badge href="https://mybee.app" className="">
          <Image
            src="/mybee.png"
            width={20}
            height={10}
            alt="mybee logo"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          />{' '}
          Mybee Digital Inc
        </Badge>
        .
      </p>
      {/* <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}
    </section>
  );
}
