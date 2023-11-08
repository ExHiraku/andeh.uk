interface ProjectTag {
  label: string;
  color: string;
}

export interface FeaturedProject {
  label: string;
  description: string;
  liveDemo?: string;
  sourceUrl?: string;
  displayImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  tags?: ProjectTag[];
}
