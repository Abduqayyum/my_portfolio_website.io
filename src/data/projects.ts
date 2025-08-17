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
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
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
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
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
      "A deep learning pipeline that classifies gender from face images with 95% test accuracy. Built by fine‑tuning a ResNet backbone on ~20k open‑source images with strong augmentation and regularization for robust, real‑world performance.",
    longDescription:
      "Fine‑tuned ResNet-based facial attribute classifier trained on ~20k images. The training pipeline uses class balancing, label smoothing, heavy augmentation (lighting, pose, background), and careful validation to generalize across demographics and capture conditions.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    accuracy: "95%",
    dataset: "Open‑source gender-labeled face datasets (~20k images)",
    modelType: "ResNet (fine‑tuned)",
  },
  {
    id: 4,
    title: "Age Classification Model",
    description:
      "A deep learning model that predicts age groups from images. I fine‑tuned a VGG backbone on open‑source age‑labeled datasets to deliver accurate, stable predictions across lighting and pose variations.",
    longDescription:
      "Age-group classifier trained by fine‑tuning VGG with class-balanced sampling and calibration. Extensive augmentation and regularization improve generalization across demographics and imaging conditions.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: false,
    category: "Computer Vision",
    dataset: "Open‑source age‑labeled face datasets",
    modelType: "VGG (fine‑tuned)",
    accuracy: "decent accuracy on age groups",
  },
  {
    id: 5,
    title: "Uzbek License Plate Recognition",
    description:
      "Fine-tuned PaddleOCR English model specifically for Uzbek license plates. Improved character recognition accuracy to 94% by handling O/0 confusion.",
    longDescription:
      "OCR pipeline adapting PaddleOCR for Uzbek plates with custom post-processing to disambiguate similar characters (e.g., O vs 0).",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "PaddleOCR", "OpenCV", "OCR"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/Uzbek-License-Plate-Recognition-Model",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "OCR/NLP",
    accuracy: "94%",
  },
  // {
  //   id: 6,
  //   title: "License Plate Blurring System",
  //   description:
  //     "YOLO-based license plate detection system with 95% accuracy. Automatically detects and blurs license plates using OpenCV for privacy protection.",
  //   longDescription:
  //     "Detection + anonymization pipeline. YOLO detects plates; OpenCV applies region-specific blur to protect privacy in images and videos.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["Python", "YOLO", "OpenCV", "Computer Vision"],
  //   demoUrl: "",
  //   githubUrl: "#",
  //   hasLiveDemo: false,
  //   category: "Computer Vision",
  //   accuracy: "95%",
  // },
  {
    id: 7,
    title: "Active Liveness Detection",
    description:
      "AI-powered liveness detection using Mediapipe for facial landmarks and Random Forest for head movement detection. Ensures physical presence during authentication.",
    longDescription:
      "Active challenge-response liveness: Mediapipe tracks landmarks while a Random Forest verifies instructed head movements to prevent spoofing.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "Mediapipe", "Random Forest", "OpenCV"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/nIMXNp0Xb4c",
    accuracy: "98%",
    dataset: "Custom dataset with head movement instructions",
    modelType: "Mediapipe + Random Forest",
  },
  {
    id: 8,
    title: "Face Recognition System",
    description:
      "A robust face recognition pipeline using discriminative feature embeddings and a Nearest Neighbor decision rule with thresholding to reject unknown faces. Designed to adapt to different datasets and deployment needs.",
    longDescription:
      "I extract compact facial embeddings and match with a Nearest Neighbor classifier, using a tuned threshold to recognize only known identities and reject unknowns. The system is dataset‑agnostic and can be trained on multiple face datasets depending on requirements.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "scikit-learn", "OpenCV", "Machine Learning"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    accuracy: "96%",
    dataset: "Multiple face datasets (configurable per deployment)",
    modelType: "Feature embeddings + Nearest Neighbor",
  },
  {
    id: 9,
    title: "Violence Detection Model",
    description:
      "Fine-tuned Facebook TimeSformer transformer model for video violence detection. Achieved 97% accuracy using spatio-temporal features for video classification.",
    longDescription:
      "Video transformer (TimeSformer) fine-tuned on custom dataset to detect violence by modeling spatio-temporal cues.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "Transformers", "TimeSformer", "Video Analysis"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Video Analysis",
    demoVideo: true,
    videoUrl: "https://player.vimeo.com/video/1110664534",
    accuracy: "97%",
    dataset: "Custom violence-labeled video dataset",
    modelType: "TimeSformer (fine-tuned)",
  },
  {
    id: 10,
    title: "Real-time Crowd Detection",
    description:
      "Real-time crowd monitoring system with configurable thresholds. Tracks average people count over time periods and records crowd events when thresholds are exceeded.",
    longDescription:
      "Real-time detection and analytics for crowding; triggers events when average counts surpass thresholds.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "OpenCV", "YOLO", "Real-time Processing"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/d8nuUv0gHug",
    accuracy: "depends on YOLO model used",
    dataset: "COCO dataset",
    modelType: "YOLO (You Only Look Once)",
  },
  {
    id: 11,
    title: "Uzbek Speech-to-Text Model",
    description:
      "Custom STT model trained by fine-tuning Whisper Medium on 600+ hours of Uzbek audio dataset. Achieved high accuracy with excellent WER metrics for Uzbek language.",
    longDescription:
      "Advanced speech-to-text model specifically designed for the Uzbek language, built by fine-tuning OpenAI's Whisper Medium model on a comprehensive dataset of over 600 hours of Uzbek audio. The model demonstrates exceptional performance with a Word Error Rate (WER) of approximately 12% on unknown test data and a Character Error Rate (CER) of around 3%. This represents a significant advancement in Uzbek language processing capabilities, enabling accurate transcription across various speaking styles, accents, and audio qualities. The training process involved careful data curation, extensive audio preprocessing, and iterative fine-tuning to optimize performance for Uzbek phonetics and linguistic patterns.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "Whisper", "Transformers", "Audio Processing"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/uzbek-stt-model",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Speech/NLP",
    accuracy: "WER: 12%, CER: 3%",
    dataset: "600+ hours of Uzbek audio dataset",
    modelType: "Whisper Medium (fine-tuned)",
  },
  {
    id: 12,
    title: "Abandoned Object Detection",
    description:
      "YOLO-based real-time system that detects bags, backpacks, and other belongings. Immediately detects abandoned objects in real-time for security alerts.",
    longDescription:
      "YOLO detector trained to recognize carried items and trigger an alert when an item becomes unattended for a configured period.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "YOLO", "OpenCV", "Real-time Processing"],
    demoUrl: "",
    githubUrl: "#",
    hasLiveDemo: true,
    category: "Computer Vision",
    demoVideo: true,
    videoUrl: "https://www.youtube.com/embed/vHi8Sb2d6v4",
    accuracy: "90%",
    dataset: "Custom Luggage and Human images dataset",
    modelType: "YOLO (You Only Look Once)",
  },
  {
  id: 13,
  title: "Hifz Evaluator",
  description:
    "AI-powered Qur’an memorization evaluation tool that helps users test and improve their Hifz interactively.",
  longDescription:
    "This system displays a random Qur’an verse at the top of the screen. The user recites the next verse from memory and can check their accuracy by revealing the correct verse below. Users can also generate a new random verse to continue practice. The project uses MediaPipe for face and hand landmarks, along with OpenCV for frame preprocessing, enabling an interactive and intelligent Hifz evaluation experience.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "MediaPipe", "OpenCV", "Machine Learning"],
  demoUrl: "",
  githubUrl: "#",
  hasLiveDemo: true,
  category: "AI & Education",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/JMhSPKQMl_s",
  accuracy: "High accuracy in face & hand landmark detection",
  dataset: "Random Qur’an verses (no dataset required)",
  modelType: "MediaPipe + ML for verse evaluation",
}

];
