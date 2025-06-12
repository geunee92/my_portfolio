"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Section,
  Title,
  SlideWrapper,
  Thumbnail,
  ProjectTitle,
} from "./index.styles";

const mockProjects = [
  {
    id: 1,
    title: "Nba 15달러 라인업",
    image: "/assets/nba-project.webp",
  },
  {
    id: 2,
    title: "포트폴리오",
    image: "/assets/portfolio-project.webp",
  },
  {
    id: 3,
    title: "love trip",
    image: "/assets/love-trip-project.webp",
  },
];

export default function ProjectSection() {
  return (
    <Section>
      <Title>나의 프로젝트</Title>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.05}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 1.8,
          },
        }}
      >
        {mockProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <SlideWrapper>
              <Thumbnail src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
