import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"


export const metadata = {
    title: "Nominate Speakers",
    alternates: {
        canonical: "https://tedxgeorge.com/speakers/nominate",
    },
    openGraph: {
		title: 'Nominate Speakers : TEDxGeorge',
    }
}


function Nominations(){
    // nominator
    // nominee

    // Please share a brief biography that includes information about this potential future TED speaker’s connection to their talk topic. 
    // What is the unique idea that they want to share in a TED talk? In a few sentences, please describe the core of the talk idea, and what makes the talk idea new. 
    // In one sentence, what is the key takeaway that you want the audience to know or feel after hearing this talk? 
    // Under which of the following categories would this person fall? 

    /***
     *  Adventure/Exploration Food/Agriculture Science/Medicine Architecture Law/Human Rights Social Sciences Art/Design/Literature Media/Entertainment Sports Business/Economics Music Technology Education Religion/Spirituality Other Environment
     */

    // Has this person spoken publicly before? If so, where?
    // Please provide links to online video or audio featuring the proposed speaker.
    // Please provide links to any articles or web pages about the speaker.
    // Do you know this person personally? - It’s okay if you do not.


    // What commitment do we make to our speakers?
    // The TEDxCapeTown speaker team works with selected speakers well in advance of the event date to help shape a presentation that will succeed on our stage — ensuring each talk embodies the ethos of  ‘Ideas Worth Spreading’. This support is provided through a series of facilitated workshops, as well as one-on-one coaching sessions.

    // What commitment is expected from speakers?
    // We are flexible and accommodating, but we do expect a high level of commitment from speakers. If you cannot commit to these requirements, we reserve the right to exclude you from the final speaker line-up.


    /**
     * Before submitting your nomination, please review how TED processes the personal information you provide to us:
        - We will evaluate your nomination and will share this information with staff members and third parties selected to review speaker nominations.
        - There is no deadline for nominating a speaker. If you've submitted a nomination, it will stay in our database to be considered for future conferences.
        - Due to volume, we are not able to respond personally to each suggestion, but someone from TED will be in touch if needed.
        - Your information will be processed in accordance with TED's privacy policy.
        - Please reach out to privacy@ted.com if you have any concerns with TED managing your data.
        
        By checking this box, I consent and agree to TED processing my information as defined above.
     */

    return(
        <>
             <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={Style.header}>
                        Speaking at TEDxGeorge
                    </h1>

                    <p className={clsx(Utils.fs_2, "fw-light")}>
                        Know Someone with an Idea Worth Spreading?
                    </p>

                    <p>
                        At TEDxGeorge, we seek bold thinkers, innovators, and storytellers who can inspire our audience with powerful ideas. If you know someone with a compelling perspective, a fresh insight, or a transformative idea, we invite you to nominate them as a TEDxGeorge speaker!                    
                    </p>

                    <p>Our stage is dedicated to ideas, not promotions—talks should challenge, inform, and inspire without pushing a personal, political, or commercial agenda. <em>Multiple nominations for the same person won't influence the speaker selection team in any way. We review every nomination that comes in, and it only takes one.</em></p>

                    <p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfm_rr2a49Dn2Iy5GckoiOfyjo5eXxEWSmtpV9Obkii4mG84w/viewform?usp=header" target="_blank" className="btn btn-danger fs-1 px-5">
                            Ready? Nominate Someone &nbsp;

                            <svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={40} fill="#ffffff"> 
                                <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                            </svg>
                        </a>
                    </p>
                </div>
            </section>


            <section className="container">
                <hr className={Utils.my_6} />

                <article className="text-center d-flex flex-column align-items-center">
                    <h3 className={Style.header}>
                        FAQ
                    </h3>

                    <p className="fs-1 w-75">
                        TEDxGeorge isn't a typical conference. Our audience has high expectations of the speakers; the TED speaker team works with speakers well in advance of the conference to help shape a presentation that will succeed on the TED stage. TED is the place to give the talk of your life.
                    </p>              
                </article>



                <article className={Style.faqBlock}>
                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>What is TEDxGeorge?</summary>
                        <p>TEDxGeorge is an independently organized TEDx event that brings together thought leaders, changemakers, and storytellers to share "ideas worth spreading." Our mission is to inspire and ignite conversations that drive innovation and positive impact.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>Who can apply to speak at TEDxGeorge?</summary>
                        <p>We welcome anyone with a compelling, original idea that challenges perspectives, sparks dialogue, or inspires action. Speakers can be from diverse fields, including science, technology, business, art, social impact, and more.</p>
                        <p>However, all talks must align with TED's strict content guidelines, meaning they must not be promotional, political, religious, or pseudoscientific.</p>
                    </details>


                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>What makes a great TEDx talk?</summary>
                        <p>A successful TEDx talk should be:</p>
                        <ul>
                            <li><strong>Idea-Driven</strong> - The focus is on the idea, not the speaker's personal brand or business.</li>
                            <li><strong>Concise & Impactful</strong> - TEDx talks are limited to 12 minutes.</li>
                            <li><strong>Well-Researched & Credible</strong> - Every talk must be fact-checked and rooted in verifiable information.</li>
                            <li><strong>Inspiring & Engaging</strong> - Storytelling is key. Great talks connect emotionally with the audience.</li>
                        </ul>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>What are the rules for speaking at TEDxGeorge?</summary>
                        <ol>
                            <li><strong>No Selling or Self-Promotion</strong> -
                            TEDx talks are about ideas, not individuals or companies. Speakers may not promote businesses, services, books, or organizations.</li>

                            <li><strong>No Political or Religious Agendas</strong> -
                            Talks must remain nonpartisan and secular. Content advocating for political ideologies, activism, or religious doctrines will not be accepted.</li>

                            <li><strong>No Misinformation or Pseudoscience</strong> -
                            Speakers must present credible, evidence-based ideas. Talks containing unverified claims, conspiracy theories, or misleading science will be rejected.</li>

                            <li><strong>Commitment to the Speaker Coaching Process</strong> -
                            All selected speakers must participate in mandatory coaching and rehearsals to refine their talk.</li>

                            <li><strong>Adherence to TEDxGeorge and TED's Content Standards</strong> -
                            Talks must comply with TED's Content and Copyright Guidelines and YouTube's misinformation policies. TEDxGeorge reserves the right to withhold or flag talks that violate these guidelines.</li>
                        </ol>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>Can I suggest myself as a speaker?</summary>
                        <p>Yes</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>Will it help if I submit multiple nominations, or have my friends nominate me several times?</summary>
                        <p>No. It really only takes one suggestion.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>What do you pay speakers?</summary>
                        <p>TEDxGeorge does not pay speakers. Benefits include pre-conference coaching and training, and special events for networking. We are committed to creating an experience that's tremendously fulfilling and beneficial on all sides.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>I want to speak at TED, but my usual talk runs 50 minutes. Can I get a longer time slot?</summary>
                        <p>We strictly enforce the clock for all speakers. TEDxGeorge is the place to condense your ideas into a compelling 15-minute talk that communicates your best ideas. We've found that a carefully prepared presentation of this length can have astonishing impact.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>Can I use slides or visuals?</summary>
                        <p>Yes, but visuals must be simple and complement the talk. Overloaded slides or complex animations are discouraged.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>What is the deadline to apply?</summary>
                        <p>We accept nominations all the time.</p>
                    </details>

                    <details className={Style.faq}>
                        <summary className={Style.faqSummary}>Can I apply if I've never spoken publicly before?</summary>
                        <p>Yes! While public speaking experience is a plus, it's not required. We value great ideas over polished delivery—our coaching process will help prepare you for the TEDx stage.</p>
                    </details>
                </article>


                <div className="row my-5 py-5">
                    <header className="col-lg-4 col-12">
                        <h4 className={Utils.fs_2}>
                            We believe ideas can come from anyone
                        </h4>
                    </header>

                    <article className="col-lg-8 col-12">
                        <p>
                            Ideas know no boundaries—they are not confined by geography, religion, politics, or culture. TEDxGeorge believes that ideas belong to everyone, regardless of skin-color, gender, identity, or social class. With a global perspective, we seek to source diverse ideas and ensure they are accessible to all. We know that powerful ideas, when shared with care, have the potential to unite different groups and build a collective vision for a better future.
                        </p>

                        <p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfm_rr2a49Dn2Iy5GckoiOfyjo5eXxEWSmtpV9Obkii4mG84w/viewform?usp=header" target="_blank" className="btn btn-danger fs-1 px-5">
                                Ready? Nominate Someone &nbsp;

                                <svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={40} fill="#ffffff"> 
                                    <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                                </svg>
                            </a>
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Nominations;