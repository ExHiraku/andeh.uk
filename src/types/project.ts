interface ProjectTag {
  label: string;
  color: string;
}

export interface Project {
  label: string;
  description: string;
  liveDemo?: string;
  sourceUrl?: string;
  displayImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  tags?: ProjectTag[];
}
