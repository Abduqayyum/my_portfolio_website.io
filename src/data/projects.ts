// Centralized projects data shared across pages
export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  hasLiveDemo: boolean;
  category: string;
  accuracy?: string;
  dataset?: string;
  modelType?: string;
  demoVideo?: boolean;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Uzbek Car Model Recognition",
    description:
      "Fine-tuned Facebook ViT model to recognize Uzbek car models (Jiguli, Labo, Lasetti, Matiz, Spark, Nexia, Nexia3, Damas, Cobalt, Bus). Achieved 98% accuracy on test data.",
    longDescription:
      "A ViT-based image classifier fine-tuned to detect common Uzbek car models with high precision. The pipeline includes curated datasets, extensive augmentation, and careful class balancing to reduce confusion between visually similar models.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "ViT", "Transformers", "PyTorch"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/Uzbek-Car-Model-Recognition",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    accuracy: "98%",
    dataset: "Custom Uzbek car models dataset",
    modelType: "ViT (Vision Transformer)",
  },
  {
    id: 2,
    title: "Vehicle Color Recognition",
    description:
      "Fine-tuned Facebook ViT model to recognize vehicle colors (black, blue, red, yellow, gray, white, green). Achieved 95% accuracy on test data.",
    longDescription:
      "Color classifier leveraging ViT embeddings to robustly infer vehicle color under varied lighting and viewpoints. Training included color jitter and histogram equalization for robustness.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "ViT", "Transformers", "PyTorch"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/Vehicle-Color-Recognition-Model",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    accuracy: "95%",
    dataset: "Custom color-labeled vehicle dataset",
    modelType: "ViT (Vision Transformer)",
  },
  {
    id: 3,
    title: "Gender Classification Model",
    description:
      "Deep learning model trained on 20,000 images for gender classification. Accurately classifies individuals as male or female with 95% accuracy.",
    longDescription:
      "CNN-based facial attribute classifier trained on 20k images with strong regularization and augmentation to generalize across lighting, pose, and background.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    accuracy: "95%",
  },
  {
    id: 4,
    title: "Age Classification Model",
    description:
      "Advanced deep learning model that classifies individuals into various age groups based on image data using state-of-the-art architectures.",
    longDescription:
      "Deep CNN/transformer hybrid for age group estimation with class-balanced loss and calibration for stable predictions.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
  },
  {
    id: 5,
    title: "Uzbek License Plate Recognition",
    description:
      "Fine-tuned PaddleOCR English model specifically for Uzbek license plates. Improved character recognition accuracy to 94% by handling O/0 confusion.",
    longDescription:
      "OCR pipeline adapting PaddleOCR for Uzbek plates with custom post-processing to disambiguate similar characters (e.g., O vs 0).",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "PaddleOCR", "OpenCV", "OCR"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/Uzbek-License-Plate-Recognition-Model",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "OCR/NLP",
    accuracy: "94%",
  },
  {
    id: 6,
    title: "License Plate Blurring System",
    description:
      "YOLO-based license plate detection system with 95% accuracy. Automatically detects and blurs license plates using OpenCV for privacy protection.",
    longDescription:
      "Detection + anonymization pipeline. YOLO detects plates; OpenCV applies region-specific blur to protect privacy in images and videos.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    accuracy: "95%",
  },
  {
    id: 7,
    title: "Active Liveness Detection",
    description:
      "AI-powered liveness detection using Mediapipe for facial landmarks and Random Forest for head movement detection. Ensures physical presence during authentication.",
    longDescription:
      "Active challenge-response liveness: Mediapipe tracks landmarks while a Random Forest verifies instructed head movements to prevent spoofing.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Mediapipe", "Random Forest", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 8,
    title: "Face Recognition System",
    description:
      "Robust face recognition using unique facial feature extraction and NearestNeighbor algorithm. Achieved 96% accuracy with unknown face detection capability.",
    longDescription:
      "Feature extraction + nearest neighbor with thresholding to recognize known identities while rejecting unknowns.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "scikit-learn", "OpenCV", "Machine Learning"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    accuracy: "96%",
  },
  {
    id: 9,
    title: "Violence Detection Model",
    description:
      "Fine-tuned Facebook TimeSformer transformer model for video violence detection. Achieved 97% accuracy using spatio-temporal features for video classification.",
    longDescription:
      "Video transformer (TimeSformer) fine-tuned on custom dataset to detect violence by modeling spatio-temporal cues.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Transformers", "TimeSformer", "Video Analysis"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Video Analysis",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    accuracy: "97%",
  },
  {
    id: 10,
    title: "Real-time Crowd Detection",
    description:
      "Real-time crowd monitoring system with configurable thresholds. Tracks average people count over time periods and records crowd events when thresholds are exceeded.",
    longDescription:
      "Real-time detection and analytics for crowding; triggers events when average counts surpass thresholds.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "OpenCV", "YOLO", "Real-time Processing"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 11,
    title: "Uzbek Speech-to-Text Model",
    description:
      "Custom STT model trained by fine-tuning Whisper Medium on 600+ hours of Uzbek audio dataset. Achieved high accuracy with excellent WER metrics for Uzbek language.",
    longDescription:
      "Whisper Medium fine-tuned on >600h Uzbek audio. Ongoing improvements to push WER lower for best-in-class Uzbek STT.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Whisper", "Transformers", "Audio Processing"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Speech/NLP",
  },
  {
    id: 12,
    title: "Abandoned Object Detection",
    description:
      "YOLO-based real-time system that detects bags, backpacks, and other belongings. Immediately detects abandoned objects in real-time for security alerts.",
    longDescription:
      "YOLO detector trained to recognize carried items and trigger an alert when an item becomes unattended for a configured period.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "YOLO", "OpenCV", "Real-time Processing"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
