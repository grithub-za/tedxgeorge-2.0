import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals/global.scss'
import { Inter } from "next/font/google";
import hero from "@/public/hero-shift.jpg"
import { Analytics } from "@vercel/analytics/react"
import clsx from 'clsx';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import WidgetBar from '@/components/feedback/WidgetBar';
import GlobalModal from '@/components/feedback/Modal/GlobalModal';

const inter = Inter({ 
	subsets: ["latin"],
	variable: '--font-inter',
});


export const metadata = {
	metadataBase: "https://tedxgeorge.com",
	title: {
		template: '%s : TEDxGeorge',
		default: 'TEDxGeorge',
	},
	alternates: {
		canonical: 'https://tedxgeorge.com',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	appleWebApp: {
		title: 'TEDxGeorge',
		statusBarStyle: 'black-translucent',
		startupImage: [
		  '/assets/icons/apple-touch-startup-image-768x1004.jpg',
		  {
			url: '/assets/icons/apple-touch-startup-image-1536x2008.png',
			media: '(device-width: 768px) and (device-height: 1024px)',
		  },
		],
	},
	openGraph: {
		title: 'TEDxGeorge',
		url: "https://tedxgeorge.com",
		siteName: 'TEDxGeorge',
		locale: 'en_US',
		type: 'website',
		images: [
            {
                url: hero.src,
                width: 400,
                height: 400,
            },
        ],
	},
	description: "A licensed TEDx event dedicated to the George community, independently curated to ignite conversations that inspire insightful and thought-provoking engagement and change.",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link href="/favicon.ico" rel="shortcut icon" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#333333" />
			</head>

			<GlobalContextProvider>
				<body className={clsx(inter.variable)}>
					<div id="wrapper" className='wrapper'>
						{children}
					</div>

					<WidgetBar />
					<GlobalModal />
				</body>
			</GlobalContextProvider>

			<Analytics />
		</html>
	);
}
