import Link from 'next/link';
import styles from './Chat.module.css';

export default function Chat() {
  return (
    <section className={styles.chat}>
        <div className="container">
          <div className={styles.wrapper}>
            <h6>Chat Us!</h6>
            <Link href="https://wa.me/+6281317566970">
              <a>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEhUlEQVRoQ+1Z21EbQRCcPf3YElXgCCwisIgAEYHlCCwiQERgiAA5AkQEFhFYRGApAuQIEFUIf3Hj3nuU9vb2daezXbh0VS7DPXa3t3t6ZhZBr/wSr3z9tAPwrxncMfDfMMDMB89Ex0TxgEl0Qe0BwPUygEsmWuLeCs+mLaK7t0IsmwC/tYR+Mfdj4jMsZlBxQXOAGe8JcVPxu8LrtQFg4d0X4msM0N9mAfh2GZE4BSOzOuPUAvDMfMbEY8OEC9yftSiaymdviOZCiJVkSf4OGfXA1gCTQmr6xZOOaJ1WBVEZwJpfronEsDgR30QUXYTqOo2XeAQJjbCAfWWseZvEiQQdCqQSgDXHP5TAlHNgx8UQOp6HTqi+J2UIRiSTH/P7YGnVIXEYCiIYQHnn+QaUa0zUgUEESYINvqrDRBCAJ+ahQMBudom/7onWqN5yzV/pcyBigmLCCyCj+X4zbXM7r0MpMyE+dYRIDMF2eQFAOhME7edsgAWCrK/rEyATV4HrLEK1a1uQNt+yI6LD2gBAaw/SkYGbXPDrE92vi7GxPTvSodbEMmsn7gSTOIVJYBPNl5MBdTfgDnd7Iuqrw5R1SwSG3jXAwgVY/5LNNQcLR7UAPHH8kNU0lt0v2SoaDHHeFsKU5FxKKDxL8wQ/KMwf2nKMlQFVPtj9R+y+LM4KF/ICHpUur25DkGBsGbxJfnBtihUA5KPQaNa2BQCBcq85+EBojnSLMY3FooOBlzGQyypThtIlkhYAFS9IbKbXNb6g8y08f55Vud+T2Q3xl7/nALBZnMl95ACGIF5gp/IeIHStxvf0/GNjdSsAcmbIaIn/3mc7VamO8SFUJfrHAKhUZyBmCPgT3+JCnv8VAKmU1HhJYATVMS4QqoRsLii/d7hQmI3liygHNE/aFJ3rSQ27+g0AV+gfLl39w9ZBHGKj6g5myWeGex+U+4V20VCST2xAtrZRTdtByckCQuJBA8+wXGEswWG9R3pTpDZPLmt2JhzIYrVp+fyl7UZOeky4QxY2XSgVGiklUovclNIIpErusmZG5kzaxcRiHVcpdxTlS87c4mRATya2hOZaXZbspHTU2Mg/WWDMgRrM+py+zO6tWbQGw1qT+HxdLgws4tQuzorCCGVyudtKXSo9JHOVEPl8lQAgEBvvhVXgmnSMJby+UQEAYtkPd+WHdSTkY2YT+MWDA+x/0KlHpRhookw2AUImv1ItNkQ6QRJyJZP0bJSOcdL8s+65puV81XhwYGPS0xNvygnZEzBF94LiPioQ/EtllV1TuMVl6Ald6jQxel79iJJu0VMPq/TUPgCmltEla/wdgNEKRnMwswRDj/Jl/Lwf4+8FcKA+pCIdRgWfjFfXIKwA9DLZsuoF7pv8PTR2E6sEE6NQ9oJdqFwiJ59iwTxFATbLdZ82/8lJszw2V0+afSBu4WrjuvHjDeKsmBJpERbN2iglfNpMy4e4BzAyRuQFcPLPSrSUv+CQbCbl5Tsu9CFXn7sk1A09768yYdPvehNZ0xM2Pd4OQNM7WnW8HQNVd6zp938D7oJuT+LP0MMAAAAASUVORK5CYII=" alt="whatsapp" />
              </a>
            </Link>
          </div>
        </div>
    </section>
  );
}
