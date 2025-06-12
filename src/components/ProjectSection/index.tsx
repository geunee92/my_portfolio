"use client";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mockProjects } from "@/mocks/projects";
import {
  Section,
  Title,
  SlideWrapper,
  Thumbnail,
  ProjectTitle,
} from "./index.styles";
import { ProjectModal } from "./ProjectModal";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  skills: string[];
  siteUrl: string;
  githubUrl: string;
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section>
      <Title>My Project</Title>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={1.1}
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
            <ProjectTitle>{project.title}</ProjectTitle>

            <SlideWrapper onClick={() => setSelectedProject(project)}>
              <Thumbnail src={project.image} alt={project.title} />
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}
