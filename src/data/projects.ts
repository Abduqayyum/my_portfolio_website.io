// Centralized projects data shared across pages
export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
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
    category: "Computer Vision",
    dataset: "Open‑source age‑labeled face datasets",
    modelType: "VGG (fine‑tuned)",
    accuracy: "decent accuracy on age groups",
  },
  {
    id: 5,
    title: "Uzbek License Plate Recognition",
    description:
      "Fine-tuned TrOCR model on a custom dataset of ~16k Uzbek license plate images. Achieved 96% training and 93% validation accuracy, recognizing both 8- and 9-character Uzbek plate formats.",
    longDescription:
      "An OCR pipeline built by fine-tuning TrOCR (Transformer-based OCR) on a custom dataset of approximately 16,000 Uzbek license plate images. The model reached 96% accuracy on training data and 93% on validation data, and is able to correctly read both 8-character and 9-character Uzbek license plate formats, handling the variety of plate layouts used across the country.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "TrOCR", "Transformers", "PyTorch", "OCR"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/Uzbek-License-Plate-Recognition-Model",
    category: "OCR/NLP",
    accuracy: "96% (training), 93% (validation)",
    dataset: "Custom Uzbek license plate dataset (~16k images)",
    modelType: "TrOCR (fine-tuned)"
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
      "Custom STT model trained by fine-tuning Whisper Medium on 780+ hours of Uzbek audio, with added call-center augmentation for robust performance on real-world telephone audio.",
    longDescription:
      "Advanced speech-to-text model specifically designed for the Uzbek language, built by fine-tuning OpenAI's Whisper Medium model on ~780 hours of Uzbek audio (audiobooks, podcasts, and tech talks). To make the model practical for real-world telephone and call-center use, ~50% of training clips were augmented to simulate telephone narrowband audio (8 kHz codec, 300-3400 Hz band), background noise, light reverb, and gain variation. Anti-hallucination training with synthetic non-speech segments (empty labels) was also used to prevent the model from generating spurious text during silence. The model achieves strong WER results across benchmarks: 7.88% on FeruzaSpeech, 13.37% on Common Voice 17.0 (Uzbek), and 14.40% on FLEURS (Uzbek), making it well-suited for customer service, call-center, and general Uzbek transcription applications.",
    image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
    technologies: ["Python", "Whisper", "Transformers", "Audio Processing"],
    demoUrl: "https://huggingface.co/spaces/Abduqayum/uzbek-stt-model",
    category: "Speech/NLP",
    accuracy: "WER: 7.88% (FeruzaSpeech), 13.37% (Common Voice), 14.40% (FLEURS)",
    dataset: "780+ hours of Uzbek audio (audiobooks, podcasts, tech talks) + call-center augmentation",
    modelType: "Whisper Medium (fine-tuned, call-center optimized)",
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
  category: "AI & Education",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/JMhSPKQMl_s",
  accuracy: "High accuracy in face & hand landmark detection",
  dataset: "Random Qur’an verses (no dataset required)",
  modelType: "MediaPipe + ML for verse evaluation",
},
{
  id: 14,
  title: "Uzbek TTS Model",
  description:
    "Revolutionary text-to-speech model that brings natural emotions and breathing to Uzbek speech synthesis, trained on just 20 hours of audio data.",
  longDescription:
    "While most Uzbek TTS models produce robotic, emotionless speech that limits their effectiveness as AI agents, this breakthrough model delivers remarkably natural-sounding voice synthesis with authentic emotional expression and even subtle breathing patterns. Built using the advanced XTTS-v2 architecture and trained efficiently on only 20 hours of carefully curated Uzbek audio, the model demonstrates exceptional quality that rivals systems trained on hundreds of hours of data. The natural breathing sounds and emotional nuances make it perfect for creating engaging AI assistants and voice applications that truly connect with Uzbek speakers.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "XTTS-v2", "TTS", "Audio Processing", "Deep Learning"],
  demoUrl: "",
  category: "Speech/NLP",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/T81CbYjXwTg",
  accuracy: "Excellent quality with natural emotions and breathing",
  dataset: "20 hours of curated Uzbek audio",
  modelType: "XTTS-v2 (Coqui TTS)",
},
{
  id: 15,
  title: "Customer Action Recognition in Stores",
  description:
    "Video-based action recognition that detects in-store customer behaviors—taking items, walking, and standing—using a TimeSformer model for spatio-temporal understanding.",
  longDescription:
    "A video action recognition pipeline built with AI and deep learning to classify customer behaviors in store footage. Using a TimeSformer transformer architecture, the model learns spatio-temporal cues from video clips to recognize actions such as taking items, walking, and standing. This enables retailers to understand in-aisle engagement and movement patterns, supporting store analytics, layout optimization, and operational insights from surveillance or overhead camera feeds.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "TimeSformer", "Transformers", "Video Analysis"],
  demoUrl: "https://www.youtube.com/watch?v=ZCVQq2x2c_Q",
  category: "Video Analysis",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/ZCVQq2x2c_Q",
  accuracy: "High accuracy on in-store action classes",
  dataset: "Retail/store action video dataset",
  modelType: "TimeSformer (video transformer)",
},
{
  id: 16,
  title: "AI-Powered Road Traffic Analysis",
  description:
    "Computer vision system for real-time road traffic analysis: vehicle detection, counting, flow estimation, and congestion monitoring from traffic camera feeds for smart city and traffic management.",
  longDescription:
    "An AI-powered pipeline that analyzes road traffic using computer vision. The system processes live or recorded traffic camera footage to detect and count vehicles, estimate traffic flow, and monitor congestion. Built for smart city applications and traffic management, it can support decisions on signal timing, incident detection, and infrastructure planning. Uses deep learning models for robust vehicle detection and tracking across varying lighting and weather conditions.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
  demoUrl: "https://www.youtube.com/watch?v=F-DLN9_4gkA",
  category: "Computer Vision",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/F-DLN9_4gkA",
  accuracy: "High accuracy on vehicle detection and counting",
  dataset: "Traffic camera footage / vehicle detection datasets",
  modelType: "Deep learning (object detection & tracking)",
},
{
  id: 17,
  title: "Illegal Parking Detection (Plate + Zone + Time)",
  description:
    "Real-time system that tracks vehicles, detects license plates, recognizes Uzbek plate text, and flags illegal parking when a vehicle stays inside a defined no-parking zone longer than a time threshold.",
  longDescription:
    "An end-to-end illegal parking detection pipeline built for real-world surveillance cameras. Vehicles are detected and tracked across frames, while a custom YOLO plate detector localizes license plates. A dedicated Uzbek plate recognition model reads the plate text with high accuracy. Polygon zones define parking/no-parking areas, and a timer-based rule triggers an illegal parking event when a tracked vehicle remains in a restricted zone beyond the configured duration.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "YOLO", "OpenCV", "Object Tracking", "OCR"],
  demoUrl: "https://www.youtube.com/watch?v=DpFsWbK1154",
  category: "Computer Vision",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/DpFsWbK1154",
  accuracy: "High accuracy (custom plate detector + Uzbek plate OCR)",
  dataset: "Custom vehicle & Uzbek license plate dataset",
  modelType: "YOLO (plate detection) + tracking + OCR",
},
{
  id: 18,
  title: "Garbage Overflow & Litter Detection",
  description:
    "Custom YOLO model that detects garbage bins, overflowed containers, and trash on the ground to help prevent long-lasting overflow situations and improve city cleanliness operations.",
  longDescription:
    "A computer vision monitoring solution for waste management. The detector identifies bins/containers and recognizes two critical situations: (1) overflow, when trash exceeds the container capacity and spills out, and (2) litter, when garbage is lying on the floor near the bin. The goal is to automatically notify responsible teams so bins can be emptied quickly, reducing hygiene risks and keeping public areas clean. The model was trained as a custom YOLO detector and achieved solid real-world performance.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "YOLO", "OpenCV", "Real-time Monitoring"],
  demoUrl: "",
  category: "Computer Vision",
  accuracy: "Decent accuracy (custom YOLO detector)",
  dataset: "Custom garbage bin / overflow / litter dataset",
  modelType: "YOLO (custom object detector)",
},
{
  id: 19,
  title: "AI Sidewalk Violation Detection System",
  description:
    "Real-time YOLO-based system that tracks vehicles and pedestrians to detect vehicles that fail to yield to pedestrians in sidewalks or waiting zones, flagging violators and recognizing their license plates.",
  longDescription:
    "A computer vision pipeline that uses YOLO for object detection and multi-object tracking to monitor both vehicle and pedestrian movement in real time. When a pedestrian is present in a sidewalk or designated waiting zone and a vehicle fails to yield, the vehicle is flagged as a violator. Once flagged, the vehicle's license plate is detected and passed to a separate recognition service for plate number extraction, enabling automated enforcement and traffic safety monitoring.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "YOLO", "OpenCV", "Object Tracking", "OCR"],
  demoUrl: "https://www.youtube.com/watch?v=Tn9oRujQZIk",
  category: "Computer Vision",
  demoVideo: true,
  videoUrl: "https://www.youtube.com/embed/Tn9oRujQZIk",
  accuracy: "Real-time detection and tracking of vehicle yield violations",
  dataset: "Custom vehicle & pedestrian tracking dataset",
  modelType: "YOLO (detection + tracking) + plate OCR",
},
{
  id: 20,
  title: "AI Audio Translator",
  description:
    "Speech translation pipeline that transcribes audio using a custom fine-tuned Uzbek Whisper model or the default Whisper model for other languages, then translates the transcript into the target language using an LLM.",
  longDescription:
    "An end-to-end audio translation system combining speech-to-text and LLM-based translation. For Uzbek audio, the pipeline uses the custom fine-tuned Uzbek Whisper model for accurate transcription; for all other languages, it falls back to the default OpenAI Whisper model. The resulting transcript is then passed to an LLM, which translates it into the desired target language, producing natural, context-aware translations rather than literal word-for-word conversions.",
  image: "/lovable-uploads/dd9ddeec-f92e-4646-bc5e-42b18f5249e1.png",
  technologies: ["Python", "Whisper", "LLM", "Transformers", "Audio Processing"],
  demoUrl: "",
  category: "Speech/NLP",
  accuracy: "Uses fine-tuned Uzbek STT for Uzbek, default Whisper for other languages",
  modelType: "Whisper (custom Uzbek + default) + LLM translation",
}

];
