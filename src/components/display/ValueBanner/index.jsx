import Link from 'next/link';
import Style from './ValueBanner.module.scss'
import { IconVerified } from '@/icons/IconVerified';
import { IconTruck } from '@/icons/IconTruck';
import { IconAssurance } from '@/icons/IconAssurance';


export default function ValueBanner(){
    return (
        <ul className={Style.block}>
            <li className={Style.item}>
                <Link
                    href={"/c/verified-suppliers"}
                    title='Learn more our verified vendors'
                    className={Style.link}
                >
                    <IconVerified className={Style.icon} width="45" height="45" />

                    <h6 className={Style.text}>
                        <span className={Style.hide}>Trusted</span> Verified Vendors
                    </h6>

                    <small className={Style.sub}>
                            Learn about our verification process &rsaquo;
                        </small>
                </Link>
            </li>

            <li className={Style.item}>
                <Link 
                    href="/l/purchase-assurance" 
                    title="Learn how we keep your transactions secure" 
                    className={Style.link}
                >
                    {/* <IconLock className={Style.icon} width="45" height="45" /> */}
                    <IconAssurance className={Style.icon} width="45" height="45"/>

                    <h6 className={Style.text}>
                        Pay Securely  <span className={Style.hide}>With Confidence</span>
                    </h6>

                    <small className={Style.sub}>
                        How we keep your transactions safe &rsaquo;
                    </small>
                </Link>
            </li>

            <li className={Style.item}>
                <Link 
                    href="/c/shipping" 
                    title='Learn about free shipping' 
                    className={Style.link}
                >
                    <IconTruck className={Style.icon} width="45" height="45" />

                    <h6 className={Style.text}>
                        FREE <span className={Style.hide}>Same Day</span> Shipping <span className={Style.hide}>Available</span>
                    </h6>

                    <small className={Style.sub}>
                        Within the Garden Route District. How this works &rsaquo;
                    </small>
                </Link>
            </li>
		</ul>
    );
}