import { TankTypes } from "./types"
import { DpsTypes } from "./types"
import { SupportTypes } from "./types"
import * as voiceLine from '../data/allVoicelines'

export const tankHeroes: TankTypes[] = [
  {
    name: "D.Va",
    image: "https://r2.fivemanage.com/pub/3nx3zphca3us.jpg",
    randomVoiceline: voiceLine.dva[Math.floor(Math.random() * voiceLine.dva.length)],
    abilities: ["Fusion Cannons", "Light Gun", "Defense Matrix", "Micro Missiles", "Boosters"],
    ult: "Self-Destruct"
  },
  {
    name: "Doomfist",
    image: "https://r2.fivemanage.com/pub/a59qg8qbldai.jpg",
    randomVoiceline: voiceLine.doomfist[Math.floor(Math.random() * voiceLine.doomfist.length)],
    abilities: ["Hand Cannon", "Rocket Punch", "Seismic Slam", "Power Block"],
    ult: "Meteor Strike"
  },
  {
    name: "Junker Queen",
    image: "https://r2.fivemanage.com/pub/aubvv61yj8uz.png",
    randomVoiceline: voiceLine.junkerQueen[Math.floor(Math.random() * voiceLine.junkerQueen.length)],
    abilities: ["Scattergun", "Jagged Blade", "Carnage", "Commanding Shout"],
    ult: "Rampage"
  },
  {
    name: "Orisa",
    image: "https://r2.fivemanage.com/pub/tpbonb3e9a94.jpg",
    randomVoiceline: voiceLine.orisa[Math.floor(Math.random() * voiceLine.orisa.length)],
    abilities: ["Augmented Fusion Driver", "Energy Javelin", "Javelin Spin", "Fortify"],
    ult: "Terra Surge"
  },
  {
    name: "Ramattra",
    image: "https://r2.fivemanage.com/images/pIwtSRIsDuKu.png",
    randomVoiceline: voiceLine.ramattra[Math.floor(Math.random() * voiceLine.ramattra.length)],
    abilities: ["Void Accelerator", "Nemesis Form", "Vortex of Gluttony", "Block"],
    ult: "Annihilation"
  },
  {
    name: "Reinhardt",
    image: "https://r2.fivemanage.com/images/0FVWUoWhqkrD.png",
    randomVoiceline: voiceLine.reinhardt[Math.floor(Math.random() * voiceLine.reinhardt.length)],
    abilities: ["Rocket Hammer", "Barrier Field", "Charge", "Fire Strike"],
    ult: "Earthshatter"
  },
  {
    name: "Roadhog",
    image: "https://r2.fivemanage.com/images/rpTg5Emjo1lr.png",
    randomVoiceline: voiceLine.roadhog[Math.floor(Math.random() * voiceLine.roadhog.length)],
    abilities: ["Scrap Gun", "Take a Breather", "Chain Hook"],
    ult: "Whole Hog"
  },
  {
    name: "Sigma",
    image: "https://r2.fivemanage.com/images/P5seIR5Eum0E.png",
    randomVoiceline: voiceLine.sigma[Math.floor(Math.random() * voiceLine.sigma.length)],
    abilities: ["Hyperspheres", "Kinetic Grasp", "Accretion", "Experimental Barrier"],
    ult: "Gravitic Flux"
  },
  {
    name: "Winston",
    image: "https://r2.fivemanage.com/pub/9m6jskjgxg1j.jpg",
    randomVoiceline: voiceLine.winston[Math.floor(Math.random() * voiceLine.winston.length)],
    abilities: ["Tesla Cannon", "Jump Pack", "Barrier Projector"],
    ult: "Primal Rage"
  },
  {
    name: "Wrecking Ball",
    image: "https://r2.fivemanage.com/images/xSTuF0XYqRMN.png",
    randomVoiceline: voiceLine.wreckingBall[Math.floor(Math.random() * voiceLine.wreckingBall.length)],
    abilities: ["Quad Cannons", "Grappling Claw", "Roll", "Adaptive Shield", "Piledriver"],
    ult: "Minefield"
  },
  {
    name: "Zarya",
    image: "https://r2.fivemanage.com/images/jjZpuiqHFSy6.png",
    randomVoiceline: voiceLine.zarya[Math.floor(Math.random() * voiceLine.zarya.length)],
    abilities: ["Particle Cannon", "Particle Barrier", "Projected Barrier"],
    ult: "Graviton Surge"
  },
  {
    name: "Mauga",
    image: "https://r2.fivemanage.com/images/ViK4qBT1NI1M.png",
    randomVoiceline: voiceLine.mauga[Math.floor(Math.random() * voiceLine.mauga.length)],
    abilities: ["Heavy Machine Gun", "Rampage", "Barrier Deploy"],
    ult: "Overload"
  }
];

export const dpsHeroes: DpsTypes[] = [
  {
    name: "Ashe",
    image: "https://r2.fivemanage.com/images/tM4l5djQqCkL.png",
    randomVoiceline: voiceLine.ashe[Math.floor(Math.random() * voiceLine.ashe.length)],
    abilities: ["The Viper", "Dynamite", "Coach Gun"],
    ult: "B.O.B."
  },
  {
    name: "Bastion",
    image: "https://r2.fivemanage.com/images/6lfI0w6xSJnE.png",
    randomVoiceline: voiceLine.bastion[Math.floor(Math.random() * voiceLine.bastion.length)],
    abilities: ["Configuration: Assault", "Configuration: Recon", "Reconfigure", "Self-Repair"],
    ult: "Artillery"
  },
  {
    name: "Cassidy",
    image: "https://r2.fivemanage.com/images/2dXJ5JLtbbbJ.png",
    randomVoiceline: voiceLine.cassidy[Math.floor(Math.random() * voiceLine.cassidy.length)],
    abilities: ["Peacekeeper", "Magnetic Grenade", "Combat Roll"],
    ult: "Deadeye"
  },
  {
    name: "Echo",
    image: "https://r2.fivemanage.com/images/AyAgUEpRg8El.png",
    randomVoiceline: voiceLine.echo[Math.floor(Math.random() * voiceLine.echo.length)],
    abilities: ["Tri-Shot", "Sticky Bombs", "Flight", "Focusing Beam"],
    ult: "Duplicate"
  },
  {
    name: "Genji",
    image: "https://r2.fivemanage.com/images/blYHdIVu1MdW.png",
    randomVoiceline: voiceLine.genji[Math.floor(Math.random() * voiceLine.genji.length)],
    abilities: ["Shuriken", "Deflect", "Swift Strike"],
    ult: "Dragonblade"
  },
  {
    name: "Hanzo",
    image: "https://r2.fivemanage.com/images/MannlouRHj5s.png",
    randomVoiceline: voiceLine.hanzo[Math.floor(Math.random() * voiceLine.hanzo.length)],
    abilities: ["Storm Bow", "Sonic Arrow", "Storm Arrows", "Lunge"],
    ult: "Dragonstrike"
  },
  {
    name: "Junkrat",
    image: "https://r2.fivemanage.com/images/Xbs5iiymR5Km.png",
    randomVoiceline: voiceLine.junkrat[Math.floor(Math.random() * voiceLine.junkrat.length)],
    abilities: ["Frag Launcher", "Concussion Mine", "Steel Trap"],
    ult: "RIP-Tire"
  },
  {
    name: "Mei",
    image: "https://r2.fivemanage.com/images/G2uWidDzHK66.png",
    randomVoiceline: voiceLine.mei[Math.floor(Math.random() * voiceLine.mei.length)],
    abilities: ["Endothermic Blaster", "Cryo-Freeze", "Ice Wall"],
    ult: "Blizzard"
  },
  {
    name: "Pharah",
    image: "https://r2.fivemanage.com/images/lciIKPXl4l8B.png",
    randomVoiceline: voiceLine.pharah[Math.floor(Math.random() * voiceLine.pharah.length)],
    abilities: ["Rocket Launcher", "Jump Jet", "Concussive Blast"],
    ult: "Barrage"
  },
  {
    name: "Reaper",
    image: "https://r2.fivemanage.com/images/v6bRHImLAh7Y.png",
    randomVoiceline: voiceLine.reaper[Math.floor(Math.random() * voiceLine.reaper.length)],
    abilities: ["Hellfire Shotguns", "Wraith Form", "Shadow Step"],
    ult: "Death Blossom"
  },
  {
    name: "Sojourn",
    image: "https://r2.fivemanage.com/images/z7TDctGCht7V.png",
    randomVoiceline: voiceLine.sojourn[Math.floor(Math.random() * voiceLine.sojourn.length)],
    abilities: ["Railgun", "Disruptor Shot", "Power Slide"],
    ult: "Overclock"
  },
  {
    name: "Soldier: 76",
    image: "https://r2.fivemanage.com/images/38tqNWe4FpV8.png",
    randomVoiceline: voiceLine.soldier76[Math.floor(Math.random() * voiceLine.soldier76.length)],
    abilities: ["Heavy Pulse Rifle", "Helix Rockets", "Sprint", "Biotic Field"],
    ult: "Tactical Visor"
  },
  {
    name: "Sombra",
    image: "https://r2.fivemanage.com/images/28WGdWZEPt2j.png",
    randomVoiceline: voiceLine.sombra[Math.floor(Math.random() * voiceLine.sombra.length)],
    abilities: ["Machine Pistol", "Hack", "Translocator", "Stealth"],
    ult: "EMP"
  },
  {
    name: "Symmetra",
    image: "https://r2.fivemanage.com/images/dHabz2WRtA7V.png",
    randomVoiceline: voiceLine.symmetra[Math.floor(Math.random() * voiceLine.symmetra.length)],
    abilities: ["Photon Projector", "Sentry Turret", "Teleporter"],
    ult: "Photon Barrier"
  },
  {
    name: "Torbjörn",
    image: "https://r2.fivemanage.com/images/rOR3hzdjxZsr.png",
    randomVoiceline: voiceLine.torbjorn[Math.floor(Math.random() * voiceLine.torbjorn.length)],
    abilities: ["Rivet Gun", "Forge Hammer", "Deploy Turret", "Overload"],
    ult: "Molten Core"
  },
  {
    name: "Tracer",
    image: "https://r2.fivemanage.com/images/D5Fdb07wyb7A.png",
    randomVoiceline: voiceLine.tracer[Math.floor(Math.random() * voiceLine.tracer.length)],
    abilities: ["Pulse Pistols", "Blink", "Recall"],
    ult: "Pulse Bomb"
  },
  {
    name: "Venture",
    image: "https://r2.fivemanage.com/images/pjS00bZkVmFq.png",
    randomVoiceline: voiceLine.venture[Math.floor(Math.random() * voiceLine.venture.length)],
    abilities: ["Tactical Visor", "Adaptive Reload"],
    ult: "Tactical Surge"
  },
  {
    name: "Widowmaker",
    image: "https://r2.fivemanage.com/images/S1eTLnuKpBQR.png",
    randomVoiceline: voiceLine.widowmaker[Math.floor(Math.random() * voiceLine.widowmaker.length)],
    abilities: ["Widow's Kiss", "Grappling Hook", "Venom Mine"],
    ult: "Infra-Sight"
  }
];

export const supportHeroes: SupportTypes[] = [
  {
    name: "Ana",
    image: "https://r2.fivemanage.com/images/IQe7Fwel6MC3.png",
    randomVoiceline: voiceLine.ana[Math.floor(Math.random() * voiceLine.ana.length)],
    abilities: ["Biotic Rifle", "Sleep Dart", "Biotic Grenade"],
    ult: "Nano Boost"
  },
  {
    name: "Baptiste",
    image: "https://r2.fivemanage.com/images/RCc54MvLA37G.png",
    randomVoiceline: voiceLine.baptiste[Math.floor(Math.random() * voiceLine.baptiste.length)],
    abilities: ["Biotic Launcher", "Regenerative Burst", "Immortality Field"],
    ult: "Amplification Matrix"
  },
  {
    name: "Brigitte",
    image: "https://r2.fivemanage.com/images/jCyptJbMq8OP.png",
    randomVoiceline: voiceLine.brigitte[Math.floor(Math.random() * voiceLine.brigitte.length)],
    abilities: ["Rocket Flail", "Repair Pack", "Whip Shot", "Barrier Shield"],
    ult: "Rally"
  },
  {
    name: "Illari",
    image: "https://r2.fivemanage.com/images/hK7wmVgmI03G.png",
    randomVoiceline: voiceLine.illari[Math.floor(Math.random() * voiceLine.illari.length)],
    abilities: ["Solar Rifle", "Healing Pylon", "Outburst"],
    ult: "Captive Sun"
  },
  {
    name: "Juno",
    image: "https://r2.fivemanage.com/images/VNJSsgDseTdx.png",
    randomVoiceline: voiceLine.juno[Math.floor(Math.random() * voiceLine.juno.length)],
    abilities: ["Medic Gauntlet", "Kinetic Barrier"],
    ult: "Kinetic Shield"
  },
  {
    name: "Kiriko",
    image: "https://r2.fivemanage.com/images/O5DYdOxew09Q.png",
    randomVoiceline: voiceLine.kiriko[Math.floor(Math.random() * voiceLine.kiriko.length)],
    abilities: ["Healing Ofuda", "Kunai", "Swift Step", "Protection Suzu"],
    ult: "Kitsune Rush"
  },
  {
    name: "Lifeweaver",
    image: "https://r2.fivemanage.com/images/B0d9Oyx3bzej.png",
    randomVoiceline: voiceLine.lifeweaver[Math.floor(Math.random() * voiceLine.lifeweaver.length)],
    abilities: ["Healing Blossom", "Thorn Volley", "Life Grip", "Rejuvenating Dash"],
    ult: "Tree of Life"
  },
  {
    name: "Lúcio",
    image: "https://r2.fivemanage.com/images/8m1eS85WnAhI.png",
    randomVoiceline: voiceLine.lucio[Math.floor(Math.random() * voiceLine.lucio.length)],
    abilities: ["Sonic Amplifier", "Crossfade", "Amp It Up", "Soundwave"],
    ult: "Sound Barrier"
  },
  {
    name: "Mercy",
    image: "https://r2.fivemanage.com/images/RkiLVJSIq6gX.png",
    randomVoiceline: voiceLine.mercy[Math.floor(Math.random() * voiceLine.mercy.length)],
    abilities: ["Caduceus Staff", "Caduceus Blaster", "Guardian Angel", "Resurrect"],
    ult: "Valkyrie"
  },
  {
    name: "Moira",
    image: "https://r2.fivemanage.com/images/dXaPfJ03NsOz.png",
    randomVoiceline: voiceLine.moira[Math.floor(Math.random() * voiceLine.moira.length)],
    abilities: ["Biotic Grasp", "Biotic Orb", "Fade"],
    ult: "Coalescence"
  },
  {
    name: "Zenyatta",
    image: "https://r2.fivemanage.com/images/XJhQOV163p9i.png",
    randomVoiceline: voiceLine.zenyatta[Math.floor(Math.random() * voiceLine.zenyatta.length)],
    abilities: ["Orb of Destruction", "Orb of Harmony", "Orb of Discord"],
    ult: "Transcendence"
  }
];
