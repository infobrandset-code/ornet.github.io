import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollVideoExpand({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  // ✅ Capture actual pixel dimensions at render time.
  // Framer Motion can only interpolate between same-unit values.
  // Mixing "360px" and "100dvw" makes FM unable to tween — it snaps or breaks.
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const scrollHeight = vw > 640 ? 3 : 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // All values are now plain pixels — FM can interpolate correctly
  const width = useTransform(progress, [0, 0.2], [460, vw]);
  const height = useTransform(progress, [0, 0.2], [640, vh]);
  const right = useTransform(progress, [0, 0.2], [160, 0]);
  const borderRadius = useTransform(progress, [0, 1], [20, 0]);
  // const boxShadow = useTransform(
  //   progress,
  //   [0, 0.6],
  //   ["0 30px 80px rgba(0,0,0,0.65)", "0 0px 0px rgba(0,0,0,0)"],
  // );

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: `${scrollHeight * 100}dvh`,
      }}
    >
      <div className="sticky top-0 w-full h-screen flex max-sm:flex-col items-center max-sm:justify-center sm:justify-end overflow-hidden">
        {children && <div className="absolute inset-0 z-30">{children}</div>}
        <motion.div
          className="shadow-xl shadow-[#9FE870]/30"
          style={{
            position: "relative",
            overflow: "hidden",
            right,
            width,
            height,
            borderRadius,
            zIndex: "20",
            willChange: "width, height, border-radius, box-shadow",
          }}
        >
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="block w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-[calc(50%-100px)] left-[calc(50%-100px)] w-full h-screen rounded-4xl z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full border-6 border-[#9FE870]/30 rounded-4xl" />
          <motion.div
            className="w-full h-full z-10"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 70%, #9FE870 85%, transparent 100%)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <div className="absolute top-2 left-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-[#121414] rounded-4xl" />
        </div>
        <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-full h-screen rounded-4xl z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full border-6 border-6 border-[#FB923C]/30 rounded-4xl" />
          <motion.div
            className="w-full h-full z-10"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 70%, #FB923C 85%, transparent 100%)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <div className="absolute top-2 left-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-[#121414] rounded-4xl" />
        </div>
        <div className="absolute top-[calc(50%)] left-[calc(50%)] w-full h-screen rounded-4xl z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full border-6 border-[#9FE870]/30 rounded-4xl" />
          <motion.div
            className="w-full h-full z-10"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 70%, #9FE870 85%, transparent 100%)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <div className="absolute top-2 left-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-[#121414] rounded-4xl" />
        </div>
      </div>
    </section>
  );
}
