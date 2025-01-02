import { createRouter, createWebHistory } from "vue-router";
import ViewValorant from "../views/ViewValorant.vue";
import ViewValorant_100T from "../views/ViewValorant_100T.vue";
import Boostio from "../views/ViewBoostio.vue";
import Cry from "../views/ViewCry.vue";
import Eeiu from "../views/ViewEeiu.vue";
import Asuna from "../views/ViewAsuna.vue";
import Bang from "../views/ViewBang.vue";
import Valorant_c9 from "../views/ViewValorant_c9.vue";
import Runi from "../views/ViewRuni.vue";
import OXY from "../views/ViewOXY.vue";
import Moose from "../views/ViewMoose.vue";
import Xeppaa from "../views/ViewXeppaa.vue";
import Vanity from "../views/ViewVanity.vue";
import LEV from "../views/ViewValorant_LEV.vue";
import Aspas from "../views/ViewAspas.vue";
import KiNgg from "../views/ViewKiNgg.vue";
import tex from "../views/ViewTex.vue";
import C0M from "../views/ViewC0M.vue";
import Mazino from "../views/ViewMazino.vue";
import FNC from "../views/ViewValorant_FNC.vue";
import boaster from "../views/ViewBoaster.vue";
import derke from "../views/ViewDerke.vue";
import chronicle from "../views/ViewChronicle.vue";
import hiro from "../views/ViewHiro.vue";
import alfajer from "../views/ViewAlfajer.vue";
import GEN from "../views/ViewValorant_GEN.vue";
import meteor from "../views/ViewMeteor.vue";
import texture from "../views/ViewTexture.vue";
import munchkin from "../views/ViewMunchkin.vue";
import lakia from "../views/ViewLakia.vue";
import karon from "../views/ViewKaron.vue";
import EDG from "../views/ViewValorant_EDG.vue";
import zmjjkk from "../views/ViewZmjjkk.vue";
import nobody from "../views/ViewNobody.vue";
import smoggy from "../views/ViewSmoggy.vue";
import CHICHOO from "../views/ViewCHICHOO.vue";
import haodong from "../views/ViewHaodong.vue";

const routes = [
  {
    path: "/",
    name: "valorant",
    component: ViewValorant,
  },
  {
    path: "/100T",
    name: "valorant_100T",
    component: ViewValorant_100T,
  },
  {
    path: "/Asuna",
    name: "Asuna",
    component: Asuna,
  },
  {
    path: "/boostio",
    name: "Boostio",
    component: Boostio,
  },
  {
    path: "/eeiu",
    name: "Eeiu",
    component: Eeiu,
  },
  {
    path: "/cryocells",
    name: "Cry",
    component: Cry,
  },
  {
    path: "/bang",
    name: "Bang",
    component: Bang,
  },
  {
    path: "/c9",
    name: "Valorant_c9",
    component: Valorant_c9,
  },
  {
    path: "/OXY",
    name: "OXY",
    component: OXY,
  },
  {
    path: "/moose",
    name: "Moose",
    component: Moose,
  },
  {
    path: "/runi",
    name: "Runi",
    component: Runi,
  },
  {
    path: "/Xeppaa",
    name: "Xeppaa",
    component: Xeppaa,
  },
  {
    path: "/Vanity",
    name: "Vanity",
    component: Vanity,
  },
  {
    path: "/LEV",
    name: "LEV",
    component: LEV,
  },
  {
    path: "/aspas",
    name: "aspas",
    component: Aspas,
  },
  {
    path: "/kiNgg",
    name: "KiNgg",
    component: KiNgg,
  },
  {
    path: "/tex",
    name: "tex",
    component: tex,
  },
  {
    path: "/COM",
    name: "C0M",
    component: C0M,
  },
  {
    path: "/mazino",
    name: "Mazino",
    component: Mazino,
  },
  {
    path: "/FNC",
    name: "FNC",
    component: FNC,
  },
  {
    path: "/boaster",
    name: "boaster",
    component: boaster,
  },
  {
    path: "/derke",
    name: "derke",
    component: derke,
  },
  {
    path: "/chronicle",
    name: "chronicle",
    component: chronicle,
  },
  {
    path: "/hiro",
    name: "hiro",
    component: hiro,
  },
  {
    path: "/alfajer",
    name: "alfajer",
    component: alfajer,
  },
  {
    path: "/GEN",
    name: "GEN",
    component: GEN,
  },
  {
    path: "/meteor",
    name: "meteor",
    component: meteor,
  },
  {
    path: "/texture",
    name: "texture",
    component: texture,
  },
  {
    path: "/munchkin",
    name: "munchkin",
    component: munchkin,
  },
  {
    path: "/lakia",
    name: "lakia",
    component: lakia,
  },
  {
    path: "/karon",
    name: "karon",
    component: karon,
  },
  {
    path: "/EDG",
    name: "EDG",
    component: EDG,
  },
  {
    path: "/haodong",
    name: "hadoong",
    component: haodong,
  },
  {
    path: "/zmjjkk",
    name: "zmjjkk",
    component: zmjjkk,
  },
  {
    path: "/smoggy",
    name: "smoggy",
    component: smoggy,
  },
  {
    path: "/CHICHOO",
    name: "CHICHOO",
    component: CHICHOO,
  },
  {
    path: "/nobody",
    name: "nobody",
    component: nobody,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
