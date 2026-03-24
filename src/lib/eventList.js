import braveOnes from "@/public/brave-ones-event.jpg"
import shift from "@/public/2025-shift.png"
import agency from "@/public/tedxgeorge_salon_leadership_agency.jpg"
import education from "@/public/tedxgeorge_salon_deconlizing_edu_tech.jpg"
import collapse from "@/public/tedxgeorge_salon_building_collapse.jpg"
import tedNext from "@/public/TEDxGeorgeLive.png"
import affordableFood from "@/public/tedxgeorge_salon_affordable_food.png"
import potteryclass from "@/public/2025-salon-anthony-nobile.webp"
import bmwworkshop2025 from "@/public/bmw-george-event.webp"

export const eventsList = [
    {
        type: "TEDxGeorge",
        title: "Shift",
        src: shift.src,
        href: "/events/shift",
        slug: "shift",
    },
    {
        type: "TEDxGeorge Workshop",
        title: "Accelerating Collaboration: Bridging Ecosystem Divides in George",
        src: bmwworkshop2025.src,
        time: "5:30pm - 8pm",
        date: "2 October 2025",
        location: "BMW George, 1 Blueview Drive, Eden Meander, George",
        href: "/events/accelerating-collaboration-bridging-ecosystem-divides-in-george",
        slug: "accelerating-collaboration-bridging-ecosystem-divides-in-george",
        bookingLink: "https://forms.gle/2ymqRjNkb7gSTDLR8",
        text: `
            <p>Join us for a special FREE TEDxGeorge build-up event before our October main stage experience!</p>

            <p>This gathering will explore how disconnection across communities, sectors, and ideas limits progress — and uncover fresh ways to connect business, government, and education for collective impact.</p>

            <p>Hosted in the sleek and elegant BMW George Dealership at Eden Meander, this event offers an inspiring afternoon of bold ideas, meaningful networking, and engaging conversations designed to spark new partnerships.</p>

            <p>Register now and be part of shaping the future of collaboration in George!</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "Pottery Masterclass with Anthony Noble",
        src: potteryclass.src,
        time: "10am, 12:15pm, 2:30pm",
        date: "2 August 2025",
        location: "Perisos Pottery, Levallia",
        href: "/events/pottery-masterclass-anthony-noble",
        slug: "pottery-masterclass-anthony-noble",
        bookingLink: "https://www.quicket.co.za/events/326857-pottery-masterclass-with-anthony-noble-tedxgeorge-salon/#/schedules",
        text: `
            <p>As we build momentum towards our flagship TEDxGeorge event on 11 October 2025, we invite you to join us for a special TEDxGeorge Social experience - something soulful, grounding, and deeply human.</p>

            <p>On Saturday, 2 August, step into the quiet beauty of Perisos Pottery, a hidden sanctuary in Levallia led by the gentle hands and spirit of Anthony Noble - a former TEDxGeorge speaker. Located at 12 Grower Street, this space isn't just a pottery studio - it's a place of healing, stillness and quiet transformation.</p>

            <p>After waiting more than four decades to realise his dream, Anthony has created more than just a school - he has crafted a refuge. Perisos is where clay meets soul, where each piece formed is a meditation, a letting go, a shift. This TEDxGeorge Social is an invitation into that world.</p>

            <p>Through a guided session and short conversation with Anthony, you'll discover how working with clay becomes a spiritual practice - slowing down the mind, reconnecting with the body, and allowing space for presence. It's about more than making something beautiful with your hands - it's about remembering yourself in the process.</p>

            <p>This is not your usual event. It's personal. Reflective. Grounded.</p>

            <p>We'll be hosting three intimate sessions on the day:
            <ol>
            <li>10:00</li>
            <li>12:15</li>
            <li>14:30</li>
            </ol>
            </p>

            <p>Each session is limited to a small number of participants to preserve the stillness and allow for a deeper connection with the practice.</p>

            <p>Tickets are R100 and <a href="https://www.quicket.co.za/events/326857-pottery-masterclass-with-anthony-noble-tedxgeorge-salon/#/schedules" target="_blank" rel="noopener noreferrer">available now via Quicket</a></p>

            <p>As we SHIFT towards October, we invite you to pause with us. To reflect. To centre. And to remember that sometimes, the biggest shifts come from the simplest acts - like putting your hands in the earth and shaping something new.</p>

            <p>This is your moment to exhale. See you at Perisos!</p>
        `
    },
    
    {
        type: "TEDxGeorge Salon",
        title: "Discover the Joy of Good, Affordable Food!",
        src: affordableFood.src,
        time: "6pm - 9pm",
        date: "12 December 2025",
        location: "The Apprentice Restaurant",
        href: "/events/good-affordable-food",
        slug: "good-affordable-food",
        text: `
            <p>As we approach the festive season, it's easy to get caught up in indulgent habits that can leave us feeling sluggish and out of sync. But what if healthy eating didn't have to be difficult or expensive? This TEDxGeorge Salon event will show you how simple, affordable choices can transform your diet and boost your overall wellness.</p>
            <p>Join us for an evening packed with insights from two dynamic local panelists who are passionate about empowering communities to embrace healthier lifestyles. They'll share practical tips, bust myths about the cost of eating well, and show you how to create delicious, nutritious meals that work for your budget and your life.</p>
            <p>Through this interactive experience, you'll not only gain knowledge but also enjoy a food-tasting session to inspire you as you plan for the festive season ahead. Let's shift the narrative—healthy living is achievable, enjoyable, and the perfect way to energise yourself for the holidays and beyond.</p>
            <p>Kick off your December with a fresh perspective on wellness. Together, let's demystify healthy living and make it accessible to everyone!</p>
        `
    },
    {
        type: "TEDxGeorge Live",
        title: "TEDNext Global Livestream",
        src: tedNext.src,
        time: "3pm - 7pm",
        href: "/events/tednext-global-livestream",
        date: "24 October 2024",
        location: "Garden Route Innovation & Technology Hub",
        slug: "tednext-global-livestream",
        text: `
            <p>Join us for TEDxGeorge Live, where we'll be streaming the highly anticipated TEDNext 2024 event happening in Atlanta, GA, from October 22-24, 2024. TEDNext delves into "what's next" for individuals, communities, and the world, showcasing over 40 groundbreaking TED Talks, live performances, and immersive workshops.</p>
            <p>Hosted at the Garden Route Innovation & Technology Hub, this live stream event brings the global TED stage right to George. Engage with the world's most exciting ideas and connect with like-minded individuals as we explore the future of innovation, leadership, and global progress.</p>
            <p>Some of the key speakers at the upcoming TEDNext 2024 event include:<p>

            <ul class="mb-5">
                <li>Malcolm Gladwell - Bestselling author and renowned thinker, known for his insightful perspectives on human behavior and societal trends.</li>
                <li>Manoush Zomorodi - Acclaimed journalist and podcast host, exploring the intersection of technology and humanity.</li>
                <li>Jane McGonigal - A game designer and author, famous for her work on using gaming to solve real-world problems.</li>
            </ul>

            <p>Don't miss this unique opportunity to be part of the global TED community and join us for three days of inspiration, connection, and ideas worth spreading—right here in George!</p>
        
            <p><a href="mailto:rsvp@tedxgeorge.com?subject=TEDxGeorge Live RSVP">R.S.V.P. to secure your spot at TEDxGeorge Live</a> and be part of the TEDNext 2024 experience!</p>
        
            <hr class="my-5" />

            <h2 class="mb-5 display-1">
                Streaming Times
            </h2>
            
            <ul class="list-unstyled m-0">
                <li class="mt-5 mb-4">
                    <h3 class="display-3 mb-1">
                        October 23

                        <a href="https://conferences.ted.com/tednext2024/schedule#day-71113" target="_blank" class="display-6">
                            (Full Day Schedule &nearr;)
                        </a>
                    </h3>
                </li>
                <li>
                    <strong class="display-6">TED Theater Session 3: Work (5:45pm - 7:15pm CAT)</strong><br/>
                    <p>If change is the only constant in the modern workplace (and it sure seems like that's the case) then ... how do we thrive? This practical session offers wisdom and advice from business leaders and innovators who know how to stay one step ahead.</p>
                </li>
                
                
                <li class="mt-5 mb-4">
                    <h3 class="display-3 mb-1">
                        October 24

                        <a href="https://conferences.ted.com/tednext2024/schedule#day-71114" target="_blank" class="display-6">
                            (Full Day Schedule &nearr;)
                        </a>
                    </h3>
                </li>
                <li class="mb-4">
                    <strong class="display-6">TED Theater Session 5: Play (3pm - 4:30pm CAT)</strong><br/>
                    <p>Because play isn't a nice-to-have for a fulfilled life, it's a have-to-have. Whether we're talking digital innovation and invention or real world athletic mastery, this session will bring delight to life.</p>
                </li>
                <li>
                    <strong class="display-6">TED Theater Session 6: Grow (5:30pm - 7pm CAT)</strong><br/>
                    <p>We believe the right idea at the right time can bring people together to change the world — but only if minds are open and ready to keep learning. Come exemplify a growth mindset with a final session of TEDNext that will send you home ready to reach new heights.</p>
                </li>
            </ul>
        `
    },
    {
        type: "TEDxGeorge",
        title: "Brave Ones",
        src: braveOnes.src,
        href: "/events/brave-ones",
        slug: "brave-ones",
    },
    {
        type: "TEDxGeorge Salon",
        title: "Understanding The Value Of Self-Agency And Leadership In Africa",
        location: "George Museum",
        date: "8 August 2024",
        time: "6pm - 9pm",
        src: agency.src,
        href: "/events/the-value-of-self-agency-and-leadership-in-africa",
        slug: "the-value-of-self-agency-and-leadership-in-africa",
        text: `
            <p>Self-agency and leadership are pivotal for the continued development and empowerment of African nations. Self-agency, defined as the ability of individuals and communities to make independent choices and take action, is fundamental in fostering a sense of ownership and responsibility. In the African context, self-agency enables people to address local challenges with tailored solutions that resonate with their unique cultural, social, and economic circumstances. This grassroots approach to problem-solving can lead to more sustainable and effective outcomes, as individuals are more invested in the success of initiatives they have helped to create and implement. By empowering communities to take charge of their destinies, self-agency cultivates a resilient and innovative populace capable of driving significant change from within.</p>
            <p>At the upcoming TEDxGeorge Salon event, titled "The Value of Self-Agency and Leadership in Africa," we aim to delve into these themes and their critical importance to the continent's future. Our event will feature speakers and panelists who embody these principles, sharing their experiences and insights on how self-agency and leadership have shaped their journeys and contributed to their communities. Through engaging discussions and interactive sessions, attendees will explore how these values can be nurtured and amplified across Africa. This event is not just about highlighting success stories but also about inspiring actionable strategies that individuals and communities can adopt to foster self-agency and strong leadership. By bringing together thought leaders, activists, and community members, TEDxGeorge Salon seeks to ignite a collective movement towards sustainable and inclusive growth in Africa.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "How Modern Technology Decolonises University Education",
        date: "29 August 2024",
        location: "Nelson Mandela University, George Campus, Staff Lounge",
        time: "6pm - 9pm",
        src: education.src,
        href: "/events/modern-technology-decolonizes-university-education",
        slug: "modern-technology-decolonizes-university-education",
        text: `
            <p>The advent of modern technology is revolutionising university education, offering unprecedented opportunities to decolonise and democratise learning. Traditional educational models in many parts of the world, including Africa, have often been influenced by colonial legacies that emphasise Western perspectives and methodologies. Modern technology, however, provides tools to challenge and transform these paradigms. By leveraging digital platforms, online resources, and innovative teaching methods, universities can offer more inclusive and diverse curricula that reflect the rich cultural and intellectual heritage of African societies. This shift not only empowers students with a broader and more relevant education but also fosters a more critical and independent approach to learning, encouraging them to question and contribute to knowledge production actively.</p>
            <p>Our upcoming TEDxGeorge Salon event, titled "Modern Technology Decolonises University Education," will explore how these technological advancements are reshaping the educational landscape. The event will feature speakers and thought leaders who are at the forefront of integrating technology into university education to promote decolonisation. Attendees will hear about successful initiatives that have used digital tools to enhance access to education, diversify course content, and support collaborative learning environments. By highlighting these innovative approaches, TEDxGeorge Salon aims to inspire educators, policymakers, and students to embrace technology as a means to break free from outdated colonial frameworks and to build an educational system that is equitable, inclusive, and reflective of Africa's diverse identities and experiences.</p>
            <p>This event will serve as a platform for exchanging ideas, sharing best practices, and envisioning a future where technology empowers every student to reach their full potential.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "The George Building Collapse",
        location: "Regus",
        date: "26 September 2024",
        time: "6pm - 9pm",
        src: collapse.src,
        href: "/events/the-george-building-collapse",
        slug: "the-george-building-collapse",
        text: `
            <p>The George building collapse on May 6, 2024, was a devastating event that shook the community and highlighted critical issues in construction safety and regulatory oversight. The collapse occurred at the NEO Victoria apartment building, which was still under construction. Tragically, 34 construction workers lost their lives, and 16 others were injured. The rescue operation, which involved over 1,000 emergency responders, was a massive and complex effort that lasted nearly two weeks, concluding on May 17, 2024. The building's collapse prompted immediate investigations into the construction practices, with authorities scrutinizing the developers and contractors involved to determine whether safety standards were adhered to and to prevent such incidents in the future.</p>
            <p>Our upcoming TEDxGeorge Salon event, titled "The George Building Collapse," aims to explore the multifaceted impact of this tragedy and discuss ways to improve building safety and regulatory measures. The event will feature speakers who are experts in construction engineering, urban planning, and emergency response, as well as individuals who were directly affected by the collapse. By examining the causes and consequences of this disaster, the TEDxGeorge Salon seeks to foster a dialogue on preventing similar tragedies and enhancing resilience in our built environment. This event will not only honor the victims but also serve as a platform for learning and advocacy, driving forward the conversation on construction safety and community preparedness.</p>
        `
    },
    
]