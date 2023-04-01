import PlatinumWhatsApp from "../assets/tests/platinumWhatsApp.svg";
import GoldWhatsApp from "../assets/tests/goldWhatsApp.svg";
import SilverWhatsApp from "../assets/tests/silverWhatsApp.svg";
import CopperWhatsApp from "../assets/tests/copperWhatsApp.svg";

import PlatinumInternet from "../assets/tests/platinumInternet.svg";
import GoldInternet from "../assets/tests/goldInternet.svg";
import SilverInternet from "../assets/tests/silverInternet.svg";
import CopperInternet from "../assets/tests/copperInternet.svg";

import PlatinumSeguranca from "../assets/tests/platinumSeguranca.svg";
import GoldSeguranca from "../assets/tests/goldSeguranca.svg";
import SilverSeguranca from "../assets/tests/silverSeguranca.svg";
import CopperSeguranca from "../assets/tests/copperSeguranca.svg";

import TestFailed from "../assets/tests/testFailed.svg";

type TestsType = {
  platinumWhatsApp: string;
  goldWhatsApp: string;
  silverWhatsApp: string;
  copperWhatsApp: string;
  platinumInternet: string;
  goldInternet: string;
  silverInternet: string;
  copperInternet: string;
  platinumSeguranca: string;
  goldSeguranca: string;
  silverSeguranca: string;
  copperSeguranca: string;
  testFailed: string;
};

export const tests: TestsType = {
  platinumWhatsApp: PlatinumWhatsApp,
  goldWhatsApp: GoldWhatsApp,
  silverWhatsApp: SilverWhatsApp,
  copperWhatsApp: CopperWhatsApp,
  platinumInternet: PlatinumInternet,
  goldInternet: GoldInternet,
  silverInternet: SilverInternet,
  copperInternet: CopperInternet,
  platinumSeguranca: PlatinumSeguranca,
  goldSeguranca: GoldSeguranca,
  silverSeguranca: SilverSeguranca,
  copperSeguranca: CopperSeguranca,
  testFailed: TestFailed,
};
