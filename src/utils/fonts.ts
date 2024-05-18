import { Jockey_One, Passion_One, PT_Sans } from "next/font/google";

const passion_one = Passion_One({ weight: ["400", "700", "900"], subsets: ["latin"] });
const pt_sans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const jockey_one = Jockey_One({ weight: "400", subsets: ["latin"] });

export {
    passion_one,
    pt_sans,
    jockey_one
}