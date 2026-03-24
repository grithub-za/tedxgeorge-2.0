import Image from "next/image";
import hero from "@/public/shift-hero-tedx.webp"
import mobileHero from "@/public/shift-concept-design.png"
import Header from "@/components/nav/Header";
import Utils from "@/styles/globals/utils.module.scss"
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Footer from "@/components/nav/Footer";
import { MainEvent } from "@/components/JSONld";
import { eventsList } from "@/lib/eventList";
import EventItem from "@/components/events/EventItem";
import Style from "./home.module.scss"
import useSpeakerTalks from "@/custom_hooks/useSpeakerTalks";
import TalkCard from "@/components/speakers/TalkCard";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";

export const dynamic = 'force-static'


function Home() {
	const { talks } = useSpeakerTalks({ limit: 6, sort: "first_name" })

	return (
		<>
			<Header />

			<section className={Style.hero}>
				<MuxPlayer 
					loop
					muted
					autoplay
					streamType="on-demand"
					playbackRate={0.75}
					playbackId="MLF1qE1ZHbGaZvTCa5NzCAVRlKPh3JCvRinWg01RN5jU"
					style={{ 
						opacity: 0.5, 
						width: "100%", 
						height: "auto",
						aspectRatio: "16/9",
					}}
				/>

				{/* <picture>
					<source srcSet={hero.src} type="image/jpeg" media="(min-width: 600px)"/>
					<source srcSet={mobileHero.src} type="image/jpeg" media="(max-width: 600px)" />

					<Image 
						src={hero.src} 
						alt="TEDxGeorge Brave Ones" 
						layout="responsive"
						width={1920}
						height={1080}
						priority={true}
					/>
				</picture> */}
			</section>


			<main className="container px-4">
				<section className="container py-5">
					<h3 className={Style.header}>
						Events

						<Link href="/events" className={Style.headerLink} title="View all events">
							All events &nbsp;

							<svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={20} fill="#ffffff"> 
								<path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
							</svg>
						</Link>
					</h3>

					<div className="row">
						{eventsList.map((event, index) => {
							if( index > 3 ) return
							return(
								<EventItem 
									key={event.slug} 
									event={event} 
								/>
							)
						})}
					</div>
				</section>

				<section className="container py-5">
					<h3 className={Style.header}>
						Latest Talks
						<Link href="/speakers/talks" className={Style.headerLink} title="View all talks">
							All talks &nbsp;

							<svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={20} fill="#ffffff"> 
								<path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
							</svg>
						</Link>
					</h3>

					<article className="container mb-5">                
						<div className="row mt-4">
							{talks.map((talk) => {
								return (
									<TalkCard 
										key={talk?.title} 
										{...{ talk }} 
									/>
								)
							})}
						</div>
            		</article>
				</section>



				


				<section className="row my-5 py-5">
					<aside className="col col-lg-4">
						<h1 className={Utils.fs_2}>
							About <br/><Image src={logo} alt="TEDxGeorge Logo" width={350} />
						</h1>

						{/* <hr className="mb-5 w-50" />

						<p>
							<strong>Date:</strong> October 5, 2024<br />
							<strong>Venue:</strong> George Arts Theater<br />
							<strong>Time:</strong> 9am - 4pm
						</p>

						<p>
							<Link href="/tickets" className="btn btn-danger fs-1 px-5">
								Purchase Tickets
							</Link>
						</p> */}
					</aside>

					<article className="col col-lg-8">
						<h2 className={Utils.fs_2}>
							What is TEDx?
						</h2>
						<p>In the spirit of ideas worth spreading, TED has created a program called <a href="https://www.ted.com/tedx" target="_blank" rel="nofollow">TEDx</a>. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxGeorge, where x = independently organized TED event. At our TEDxGeorge event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>					
					</article>
				</section>
			</main>

			<Footer />

			<MainEvent />
			
		</>
	);
}


export default Home;
