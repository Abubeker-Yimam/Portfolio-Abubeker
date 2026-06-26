'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.placeholder}>
        <span className={styles.placeholderText}>📷 Add project image</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={styles.image}
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setFailed(true)}
    />
  );
}
