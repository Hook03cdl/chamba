import { ImageProps } from "@/lib/interfaces/interface";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySlider({ images }: { images: ImageProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(typeof images);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      {Object.keys(images).length > 0 && (
        <div className="gallery-slider flex flex-row">
          <button onClick={handlePrev}>
            <ChevronLeft size={64} />
          </button>
          <Image
            src={images[currentIndex].path}
            alt={images[currentIndex].alt}
            width={500}
            height={300}
          />
          <button onClick={handleNext}>
            <ChevronRight size={64} />
          </button>
        </div>
      )}
    </div>
  );
}