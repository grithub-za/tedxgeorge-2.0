import { IconAffirmPay } from "components/icons";
import Link from 'next/link';

import Style from '../PayButtons.module.scss'

function AffirmBtn({ href }){
    return (
        <Link href={href} className={Style.affirm}>
            <IconAffirmPay className={Style.affirmBtnLogo} />
        </Link>
    );
}

export default AffirmBtn;