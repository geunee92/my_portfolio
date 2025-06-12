"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Styled from "./index.styles";

const phrases = ["Problem Solver", "Experience Shaper"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image
          src="/assets/hero.webp"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
        />
      </Styled.ImageWrapper>

      <Styled.TextWrapper>
        <Styled.Heading>JO HYUNG GEUN</Styled.Heading>

        <Styled.Line />

        <Styled.Sub>
          <Styled.AnimateWord>
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </Styled.AnimateWord>
        </Styled.Sub>

        <Styled.Button href="/project">More About Me</Styled.Button>
      </Styled.TextWrapper>
    </Styled.Container>
  );
}
