import React from 'react';
import {
  StickerBigBow,
  StickerStrawberry,
  StickerPencil,
  StickerCrayon,
  StickerMarker,
  StickerBookmark,
  StickerNotebook,
  StickerBigStar,
  StickerShootingStar,
  StickerFlowerCluster,
  StickerButterfly,
  StickerPaperAirplane,
  StickerPalette,
  StickerRuler,
  StickerPostageStamp,
  StickerWashiStrip,
  StickerSunCloud,
  StickerSmileyBadge,
} from './ScrapbookStickers.tsx';
import {
  DoodleStar,
  DoodleSparkle,
  DoodleHeart,
  DoodlePixelHeart,
  DoodleFlower,
  DoodleSmiley,
  DoodleArrow,
  DoodleSquiggle,
  DoodleLightning,
  DoodleBow,
  DoodleCherries,
  DoodlePencil,
  DoodlePaperclip,
  DoodleNote,
  DoodleUnderline,
} from './ScrapbookDoodles.tsx';

// ============================================================================
// 1. HERO SECTION FRAME DECORATIONS
// Personality: Statement oversized bow, big happy star, sun/cloud, yellow pencil,
// fluttering butterflies, and sweet heart stickers along all 4 borders.
// ============================================================================
export const HeroFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Oversized Bow sitting right over top border */}
    <div className="absolute -top-7 sm:-top-9 left-6 sm:left-12">
      <StickerBigBow size={84} rotate={-7} color="#FFC4D6" knotColor="#E84A65" />
    </div>
    {/* Top-Center-Left: Mini Washi Tape & Sparkle */}
    <div className="absolute -top-4 sm:-top-5 left-1/4 hidden sm:block">
      <StickerWashiStrip size={72} rotate={-2} pattern="dots" color="#FFF0A8" />
    </div>
    {/* Top-Center: Hand-drawn Note Tag */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="sneha's studio sketchbook 🍒" bg="#FFF0A8" rotate={1} />
    </div>
    {/* Top-Center-Right: Daisy Cluster */}
    <div className="absolute -top-6 right-1/4 hidden lg:block">
      <StickerFlowerCluster size={54} rotate={8} />
    </div>
    {/* Top-Right: Chunky Star with Happy Face */}
    <div className="absolute -top-7 sm:-top-8 right-6 sm:right-12">
      <StickerBigStar size={64} rotate={12} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Sun & Cloud Sticker overlapping bottom bracket */}
    <div className="absolute -bottom-7 sm:-bottom-8 left-8 sm:left-14">
      <StickerSunCloud size={68} rotate={-4} />
    </div>
    {/* Bottom-Center-Left: Sparkles & Tiny Heart */}
    <div className="absolute -bottom-4 left-1/3 hidden sm:flex items-center gap-1.5">
      <DoodleSparkle size={20} color="#E84A65" />
      <DoodleHeart size={22} color="#FFC4D6" rotate={10} />
    </div>
    {/* Bottom-Center: Wavy Underline Ribbon */}
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleUnderline width={110} color="#E84A65" />
    </div>
    {/* Bottom-Center-Right: Cute Crayon */}
    <div className="absolute -bottom-5 sm:-bottom-6 right-1/4 hidden sm:block">
      <StickerCrayon size={60} rotate={-14} color="#E84A65" wrapperColor="#BDE7FF" />
    </div>
    {/* Bottom-Right: Juicy Strawberry */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerStrawberry size={52} rotate={10} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Dangling Scalloped Bookmark */}
    <div className="absolute top-24 sm:top-28 -left-5 sm:-left-6 md:-left-8 hidden sm:block">
      <StickerBookmark size={42} rotate={-3} bg="#FFC4D6" badgeText="★" />
    </div>
    {/* Mid-Left: Yellow Wooden Pencil */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9">
      <StickerPencil size={68} rotate={42} color="#FFF0A8" />
    </div>
    {/* Lower-Left: Retro Pixel Heart & Squiggle */}
    <div className="absolute bottom-20 sm:bottom-28 -left-4 sm:-left-5 md:-left-6 hidden sm:flex flex-col items-center gap-1">
      <DoodlePixelHeart size={22} rotate={-6} />
      <DoodleSquiggle size={32} color="#E84A65" variant="wave" rotate={90} />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Fluttering Butterfly */}
    <div className="absolute top-20 sm:top-24 -right-4 sm:-right-6 md:-right-7">
      <StickerButterfly size={50} rotate={14} colorA="#FFC4D6" colorB="#BDE7FF" />
    </div>
    {/* Mid-Right: Scalloped Postage Stamp with Cherry */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-7 hidden sm:block">
      <StickerPostageStamp size={46} rotate={-8} icon="cherry" />
    </div>
    {/* Lower-Right: Smiley Badge */}
    <div className="absolute bottom-16 sm:bottom-24 -right-4 sm:-right-6 md:-right-7">
      <StickerSmileyBadge size={44} rotate={8} bg="#FFF0A8" />
    </div>
  </div>
);

// ============================================================================
// 2. PROJECTS SECTION FRAME DECORATIONS
// Personality: Shooting star, paperclips, strawberries, desk ruler, palette,
// "shipped!" stickers, sketch arrows, and creative design tools.
// ============================================================================
export const ProjectsFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Shooting Star with Rainbow Trails */}
    <div className="absolute -top-7 sm:-top-9 left-6 sm:left-12">
      <StickerShootingStar size={78} rotate={-10} />
    </div>
    {/* Top-Center-Left: Cute Paperclip */}
    <div className="absolute -top-4 left-1/4 hidden sm:block">
      <DoodlePaperclip size={28} rotate={15} />
    </div>
    {/* Top-Center: Striped Washi Tape */}
    <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 hidden md:block">
      <StickerWashiStrip size={84} rotate={2} pattern="stripes" color="#FFC4D6" />
    </div>
    {/* Top-Center-Right: Handwritten Sticker */}
    <div className="absolute -top-4 right-1/4 hidden sm:block">
      <DoodleNote text="tested & shipped! 🚀" bg="#FFF0A8" rotate={-2} />
    </div>
    {/* Top-Right: Juicy Strawberry Sticker */}
    <div className="absolute -top-7 sm:-top-8 right-6 sm:right-12">
      <StickerStrawberry size={56} rotate={9} />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Mini Desk Ruler */}
    <div className="absolute -bottom-5 sm:-bottom-6 left-8 sm:left-14 hidden sm:block">
      <StickerRuler size={80} rotate={-6} />
    </div>
    {/* Bottom-Center-Left: Daisy Cluster */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-1/3">
      <StickerFlowerCluster size={56} rotate={-6} />
    </div>
    {/* Bottom-Center: Hand-drawn Sketch Arrow pointing forward */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleArrow size={42} color="#E84A65" direction="right" rotate={-4} />
    </div>
    {/* Bottom-Center-Right: Twin Cherries */}
    <div className="absolute -bottom-6 sm:-bottom-7 right-1/3 hidden sm:block">
      <DoodleCherries size={36} rotate={-8} />
    </div>
    {/* Bottom-Right: Chunky Star */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerBigStar size={60} rotate={-14} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Artist Palette */}
    <div className="absolute top-24 sm:top-28 -left-5 sm:-left-7 md:-left-8">
      <StickerPalette size={54} rotate={-12} />
    </div>
    {/* Mid-Left: Chisel Marker */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9 hidden sm:block">
      <StickerMarker size={64} rotate={-22} capColor="#BDE7FF" bodyColor="#FFFDF9" />
    </div>
    {/* Lower-Left: Retro Smiley Badge */}
    <div className="absolute bottom-28 sm:bottom-36 -left-4 sm:-left-5 md:-left-7">
      <StickerSmileyBadge size={44} rotate={-8} bg="#FFC4D6" />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Oversized Bow */}
    <div className="absolute top-20 sm:top-24 -right-5 sm:-right-7 md:-right-8">
      <StickerBigBow size={74} rotate={8} color="#FFF0A8" knotColor="#E84A65" />
    </div>
    {/* Mid-Right: Folded Paper Airplane */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-8 hidden sm:block">
      <StickerPaperAirplane size={58} rotate={14} />
    </div>
    {/* Lower-Right: Long Bookmark ribbon */}
    <div className="absolute bottom-24 sm:bottom-32 -right-4 sm:-right-6 md:-right-7">
      <StickerBookmark size={40} rotate={4} bg="#BDE7FF" badgeText="♥" />
    </div>
  </div>
);

// ============================================================================
// 3. SKILLS SECTION FRAME DECORATIONS (THE SNEHA SKILL UNIVERSE 🍒)
// Personality: Colorful crayons, markers, yellow pencils, rulers, creative tools,
// pixel stars, washi tapes, and curiosity notes.
// ============================================================================
export const SkillsFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Chunky Yellow Pencil */}
    <div className="absolute -top-6 sm:-top-8 left-6 sm:left-12">
      <StickerPencil size={72} rotate={35} color="#FFF0A8" />
    </div>
    {/* Top-Center-Left: Gingham Washi Strip */}
    <div className="absolute -top-4 sm:-top-5 left-1/4 hidden sm:block">
      <StickerWashiStrip size={78} rotate={-3} pattern="stripes" color="#FFF0A8" />
    </div>
    {/* Top-Center: Hand-drawn Note Tag */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="curious brain at work 🧠✨" bg="#FFC4D6" rotate={-1} />
    </div>
    {/* Top-Center-Right: Sky Blue Marker */}
    <div className="absolute -top-5 right-1/4 hidden sm:block">
      <StickerMarker size={60} rotate={14} capColor="#BDE7FF" />
    </div>
    {/* Top-Right: Oversized Ribbon Bow */}
    <div className="absolute -top-7 sm:-top-9 right-6 sm:right-12">
      <StickerBigBow size={82} rotate={6} color="#FFC4D6" knotColor="#E84A65" />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Colorful Wax Crayon */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-8 sm:left-14">
      <StickerCrayon size={64} rotate={-20} color="#E84A65" wrapperColor="#FFF0A8" />
    </div>
    {/* Bottom-Center-Left: Postage Stamp with Star */}
    <div className="absolute -bottom-6 left-1/3 hidden sm:block">
      <StickerPostageStamp size={44} rotate={-5} icon="star" color="#FFFDF9" />
    </div>
    {/* Bottom-Center: Daisy Cluster */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2">
      <StickerFlowerCluster size={58} rotate={4} />
    </div>
    {/* Bottom-Center-Right: Paperclip */}
    <div className="absolute -bottom-4 right-1/3 hidden sm:block">
      <DoodlePaperclip size={26} rotate={-15} />
    </div>
    {/* Bottom-Right: Big Star with smile */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerBigStar size={62} rotate={10} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Desk Ruler */}
    <div className="absolute top-28 sm:top-36 -left-6 sm:-left-7 md:-left-9">
      <StickerRuler size={82} rotate={72} />
    </div>
    {/* Mid-Left: Open Notebook */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-6 md:-left-8 hidden sm:block">
      <StickerNotebook size={54} rotate={-8} />
    </div>
    {/* Lower-Left: Fluttering Butterfly */}
    <div className="absolute bottom-28 sm:bottom-36 -left-4 sm:-left-6 md:-left-7">
      <StickerButterfly size={48} rotate={-16} colorA="#FFF0A8" colorB="#FFC4D6" />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Artist Palette */}
    <div className="absolute top-24 sm:top-32 -right-5 sm:-right-7 md:-right-8">
      <StickerPalette size={56} rotate={16} />
    </div>
    {/* Mid-Right: Ribbon Bookmark */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 md:-right-7 hidden sm:block">
      <StickerBookmark size={42} rotate={2} bg="#FFF0A8" badgeText="★" />
    </div>
    {/* Lower-Right: Strawberry Sticker */}
    <div className="absolute bottom-24 sm:bottom-32 -right-5 sm:-right-6 md:-right-8">
      <StickerStrawberry size={52} rotate={-10} />
    </div>
  </div>
);

// ============================================================================
// 4. CERTIFICATES & HONORS SECTION FRAME DECORATIONS
// Personality: Celebratory award stars, ribbons, bows, medals, postage stamps,
// daisies, and "verified receipts" seals along all 4 sides.
// ============================================================================
export const CertificatesFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Celebratory Big Bow */}
    <div className="absolute -top-7 sm:-top-9 left-6 sm:left-12">
      <StickerBigBow size={82} rotate={-8} color="#FFF0A8" knotColor="#E84A65" />
    </div>
    {/* Top-Center-Left: Postage Stamp */}
    <div className="absolute -top-5 left-1/4 hidden sm:block">
      <StickerPostageStamp size={46} rotate={4} icon="star" />
    </div>
    {/* Top-Center: Gold Note Tag */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="100% verified receipts 🏅" bg="#FFF0A8" rotate={1} />
    </div>
    {/* Top-Center-Right: Dotted Washi Strip */}
    <div className="absolute -top-4 sm:-top-5 right-1/4 hidden sm:block">
      <StickerWashiStrip size={76} rotate={-2} pattern="dots" color="#FFC4D6" />
    </div>
    {/* Top-Right: Big Star with smile */}
    <div className="absolute -top-7 sm:-top-8 right-6 sm:right-12">
      <StickerBigStar size={64} rotate={14} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Daisy Cluster */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-8 sm:left-14">
      <StickerFlowerCluster size={58} rotate={-8} />
    </div>
    {/* Bottom-Center-Left: Twin Cherries */}
    <div className="absolute -bottom-6 left-1/3 hidden sm:block">
      <DoodleCherries size={36} rotate={6} />
    </div>
    {/* Bottom-Center: Underline Ribbon */}
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleUnderline width={100} color="#E84A65" />
    </div>
    {/* Bottom-Center-Right: Strawberry */}
    <div className="absolute -bottom-6 sm:-bottom-7 right-1/3 hidden sm:block">
      <StickerStrawberry size={50} rotate={-8} />
    </div>
    {/* Bottom-Right: Paper Airplane */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerPaperAirplane size={58} rotate={16} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Dangling Bookmark Ribbon */}
    <div className="absolute top-28 sm:top-36 -left-5 sm:-left-6 md:-left-8">
      <StickerBookmark size={44} rotate={-4} bg="#FFC4D6" badgeText="★" />
    </div>
    {/* Mid-Left: Shooting Star */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9 hidden sm:block">
      <StickerShootingStar size={70} rotate={-45} />
    </div>
    {/* Lower-Left: Retro Smiley Badge */}
    <div className="absolute bottom-24 sm:bottom-32 -left-4 sm:-left-5 md:-left-7">
      <StickerSmileyBadge size={44} rotate={6} bg="#FFF0A8" />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Chisel Marker */}
    <div className="absolute top-24 sm:top-32 -right-5 sm:-right-7 md:-right-8">
      <StickerMarker size={64} rotate={20} capColor="#FFC4D6" />
    </div>
    {/* Mid-Right: Butterfly Sticker */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-7 hidden sm:block">
      <StickerButterfly size={50} rotate={10} colorA="#BDE7FF" colorB="#FFF0A8" />
    </div>
    {/* Lower-Right: Yellow Pencil */}
    <div className="absolute bottom-24 sm:bottom-32 -right-5 sm:-right-6 md:-right-8">
      <StickerPencil size={68} rotate={-38} color="#FFF0A8" />
    </div>
  </div>
);

// ============================================================================
// 5. LITTLE MILESTONES (SIDE QUEST MAP) SECTION FRAME DECORATIONS
// Personality: Paper airplanes, compass trails, flags, mountains, boots,
// star clusters, clouds, and journey milestones along all 4 sides.
// ============================================================================
export const MilestonesFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Paper Airplane soaring out */}
    <div className="absolute -top-7 sm:-top-8 left-6 sm:left-12">
      <StickerPaperAirplane size={62} rotate={-14} />
    </div>
    {/* Top-Center-Left: Cloud & Sun */}
    <div className="absolute -top-6 left-1/4 hidden sm:block">
      <StickerSunCloud size={62} rotate={2} />
    </div>
    {/* Top-Center: Quest Map Note */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="the journey continues 🗺️🧭" bg="#FFF0A8" rotate={-1} />
    </div>
    {/* Top-Center-Right: Postage Stamp with Heart */}
    <div className="absolute -top-5 right-1/4 hidden sm:block">
      <StickerPostageStamp size={44} rotate={6} icon="heart" />
    </div>
    {/* Top-Right: Big Star with smile */}
    <div className="absolute -top-7 sm:-top-8 right-6 sm:right-12">
      <StickerBigStar size={62} rotate={12} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Desk Ruler */}
    <div className="absolute -bottom-5 sm:-bottom-6 left-8 sm:left-14 hidden sm:block">
      <StickerRuler size={78} rotate={-8} />
    </div>
    {/* Bottom-Center-Left: Daisy Cluster */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-1/3">
      <StickerFlowerCluster size={56} rotate={6} />
    </div>
    {/* Bottom-Center: Dotted Trail & Arrow */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleArrow size={40} color="#E84A65" direction="curve" rotate={-5} />
    </div>
    {/* Bottom-Center-Right: Crayon */}
    <div className="absolute -bottom-5 sm:-bottom-6 right-1/3 hidden sm:block">
      <StickerCrayon size={60} rotate={16} color="#BDE7FF" wrapperColor="#FFC4D6" />
    </div>
    {/* Bottom-Right: Juicy Strawberry */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerStrawberry size={52} rotate={8} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Long Bookmark Ribbon */}
    <div className="absolute top-28 sm:top-36 -left-5 sm:-left-6 md:-left-8">
      <StickerBookmark size={42} rotate={-3} bg="#BDE7FF" badgeText="✦" />
    </div>
    {/* Mid-Left: Yellow Pencil */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9 hidden sm:block">
      <StickerPencil size={66} rotate={45} color="#FFF0A8" />
    </div>
    {/* Lower-Left: Smiley Badge */}
    <div className="absolute bottom-24 sm:bottom-32 -left-4 sm:-left-5 md:-left-7">
      <StickerSmileyBadge size={44} rotate={-8} bg="#FFC4D6" />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Oversized Bow */}
    <div className="absolute top-24 sm:top-32 -right-5 sm:-right-7 md:-right-8">
      <StickerBigBow size={74} rotate={10} color="#FFC4D6" knotColor="#E84A65" />
    </div>
    {/* Mid-Right: Fluttering Butterfly */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-7 hidden sm:block">
      <StickerButterfly size={48} rotate={-10} colorA="#FFC4D6" colorB="#BDE7FF" />
    </div>
    {/* Lower-Right: Open Notebook */}
    <div className="absolute bottom-24 sm:bottom-32 -right-5 sm:-right-6 md:-right-8">
      <StickerNotebook size={52} rotate={8} />
    </div>
  </div>
);

// ============================================================================
// 6. ABOUT SECTION FRAME DECORATIONS (SOME LORE & CLASSROOM JOURNAL)
// Personality: Open sketchbook, pushed pushpins, daisies, bookmarks, coffee cup,
// pencils, smiley stickers, and handwritten notes along all 4 borders.
// ============================================================================
export const AboutFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Open Notebook / Diary */}
    <div className="absolute -top-6 sm:-top-8 left-6 sm:left-12">
      <StickerNotebook size={60} rotate={-6} />
    </div>
    {/* Top-Center-Left: Washi Strip */}
    <div className="absolute -top-4 sm:-top-5 left-1/4 hidden sm:block">
      <StickerWashiStrip size={74} rotate={2} pattern="stripes" color="#FFF0A8" />
    </div>
    {/* Top-Center: Note Tag */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="lore & coffee confessions ☕ ♡" bg="#FFF0A8" rotate={1} />
    </div>
    {/* Top-Center-Right: Daisy Cluster */}
    <div className="absolute -top-6 right-1/4 hidden sm:block">
      <StickerFlowerCluster size={54} rotate={-4} />
    </div>
    {/* Top-Right: Oversized Pink Bow */}
    <div className="absolute -top-7 sm:-top-9 right-6 sm:right-12">
      <StickerBigBow size={82} rotate={8} color="#FFC4D6" knotColor="#E84A65" />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Sun and Cloud */}
    <div className="absolute -bottom-7 sm:-bottom-8 left-8 sm:left-14">
      <StickerSunCloud size={64} rotate={-5} />
    </div>
    {/* Bottom-Center-Left: Postage Stamp */}
    <div className="absolute -bottom-6 left-1/3 hidden sm:block">
      <StickerPostageStamp size={44} rotate={4} icon="heart" />
    </div>
    {/* Bottom-Center: Underline Squiggle */}
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleUnderline width={110} color="#E84A65" />
    </div>
    {/* Bottom-Center-Right: Crayon */}
    <div className="absolute -bottom-5 sm:-bottom-6 right-1/3 hidden sm:block">
      <StickerCrayon size={60} rotate={-12} color="#E84A65" wrapperColor="#BDE7FF" />
    </div>
    {/* Bottom-Right: Chunky Star with Happy Face */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerBigStar size={60} rotate={-10} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Dangling Scalloped Bookmark */}
    <div className="absolute top-28 sm:top-36 -left-5 sm:-left-6 md:-left-8">
      <StickerBookmark size={44} rotate={-2} bg="#FFF0A8" badgeText="♥" />
    </div>
    {/* Mid-Left: Yellow Wooden Pencil */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9 hidden sm:block">
      <StickerPencil size={68} rotate={40} color="#FFF0A8" />
    </div>
    {/* Lower-Left: Strawberry Sticker */}
    <div className="absolute bottom-24 sm:bottom-32 -left-4 sm:-left-6 md:-left-7">
      <StickerStrawberry size={50} rotate={12} />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Fluttering Butterfly */}
    <div className="absolute top-24 sm:top-32 -right-4 sm:-right-6 md:-right-7">
      <StickerButterfly size={50} rotate={14} colorA="#FFC4D6" colorB="#BDE7FF" />
    </div>
    {/* Mid-Right: Chisel Marker */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-7 md:-right-8 hidden sm:block">
      <StickerMarker size={62} rotate={-18} capColor="#BDE7FF" />
    </div>
    {/* Lower-Right: Smiley Badge */}
    <div className="absolute bottom-24 sm:bottom-32 -right-4 sm:-right-6 md:-right-7">
      <StickerSmileyBadge size={44} rotate={8} bg="#FFF0A8" />
    </div>
  </div>
);

// ============================================================================
// 7. CONTACT SECTION FRAME DECORATIONS ("OKAY, YOUR TURN.")
// Personality: Vintage airmail stickers, oversized statement bows, strawberries,
// postage stamps, love hearts, pencils, and stationery accents along all 4 sides.
// ============================================================================
export const ContactFrameDecorations: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-20">
    {/* --- TOP BORDER --- */}
    {/* Top-Left: Oversized Bow */}
    <div className="absolute -top-7 sm:-top-9 left-6 sm:left-12">
      <StickerBigBow size={84} rotate={-7} color="#FFC4D6" knotColor="#E84A65" />
    </div>
    {/* Top-Center-Left: Airmail Stamp */}
    <div className="absolute -top-5 left-1/4 hidden sm:block">
      <StickerPostageStamp size={46} rotate={5} icon="cherry" />
    </div>
    {/* Top-Center: Stationery Note */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleNote text="open to chat & collaborate 💌" bg="#FFF0A8" rotate={-1} />
    </div>
    {/* Top-Center-Right: Gingham Washi Tape */}
    <div className="absolute -top-4 sm:-top-5 right-1/4 hidden sm:block">
      <StickerWashiStrip size={78} rotate={3} pattern="stripes" color="#FFF0A8" />
    </div>
    {/* Top-Right: Big Star with smile */}
    <div className="absolute -top-7 sm:-top-8 right-6 sm:right-12">
      <StickerBigStar size={64} rotate={12} color="#FFF0A8" hasFace={true} />
    </div>

    {/* --- BOTTOM BORDER --- */}
    {/* Bottom-Left: Daisy Cluster */}
    <div className="absolute -bottom-6 sm:-bottom-7 left-8 sm:left-14">
      <StickerFlowerCluster size={58} rotate={-6} />
    </div>
    {/* Bottom-Center-Left: Twin Cherries */}
    <div className="absolute -bottom-6 left-1/3 hidden sm:block">
      <DoodleCherries size={36} rotate={-4} />
    </div>
    {/* Bottom-Center: Wavy Underline */}
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:block">
      <DoodleUnderline width={110} color="#E84A65" />
    </div>
    {/* Bottom-Center-Right: Crayon */}
    <div className="absolute -bottom-5 sm:-bottom-6 right-1/3 hidden sm:block">
      <StickerCrayon size={60} rotate={14} color="#E84A65" wrapperColor="#FFF0A8" />
    </div>
    {/* Bottom-Right: Juicy Strawberry */}
    <div className="absolute -bottom-7 sm:-bottom-8 right-8 sm:right-14">
      <StickerStrawberry size={54} rotate={8} />
    </div>

    {/* --- LEFT BORDER --- */}
    {/* Upper-Left: Dangling Bookmark Ribbon */}
    <div className="absolute top-28 sm:top-36 -left-5 sm:-left-6 md:-left-8">
      <StickerBookmark size={44} rotate={-4} bg="#FFC4D6" badgeText="♥" />
    </div>
    {/* Mid-Left: Yellow Wooden Pencil */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 md:-left-9 hidden sm:block">
      <StickerPencil size={68} rotate={42} color="#FFF0A8" />
    </div>
    {/* Lower-Left: Smiley Badge */}
    <div className="absolute bottom-24 sm:bottom-32 -left-4 sm:-left-5 md:-left-7">
      <StickerSmileyBadge size={44} rotate={6} bg="#FFF0A8" />
    </div>

    {/* --- RIGHT BORDER --- */}
    {/* Upper-Right: Paper Airplane */}
    <div className="absolute top-24 sm:top-32 -right-5 sm:-right-7 md:-right-8">
      <StickerPaperAirplane size={58} rotate={14} />
    </div>
    {/* Mid-Right: Fluttering Butterfly */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-7 hidden sm:block">
      <StickerButterfly size={50} rotate={-10} colorA="#FFC4D6" colorB="#BDE7FF" />
    </div>
    {/* Lower-Right: Postage Stamp with Star */}
    <div className="absolute bottom-24 sm:bottom-32 -right-5 sm:-right-6 md:-right-8">
      <StickerPostageStamp size={46} rotate={-6} icon="star" />
    </div>
  </div>
);
