import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: { label: "Language" },
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        startup: "Startup",
        skills: "Skills",
        contact: "Contact",
      },
      hero: {
        hello: "Hello, I'm",
        role: "Data Scientist & Computer Vision Engineer",
        blurb:
          "I transform complex data into intelligent solutions. Specializing in machine learning, deep learning, and computer vision to solve real-world problems. Experience my models in action through interactive demonstrations.",
        ctaWork: "View My Work",
        ctaResume: "Download Resume",
      },
      about: {
        title: "About Me",
        p1:
          "I'm Abduqayum, a passionate Data Scientist working in the field of Computer Vision and Natural Language Processing. With more than 2 years of experience, I specialize in developing cutting-edge machine learning solutions and building intelligent systems.",
        p2:
          "Currently working at Smart Soft Development Company as a Data Scientist, I focus on transforming complex data into actionable insights through advanced CV and NLP techniques. I enjoy creating interactive demonstrations that showcase real-world AI applications.",
        badges: {
          years: "3+ Years Experience",
          projects: "Projects",
          specialty: "CV & NLP Specialist",
        },
      },
      startup: {
        title: "Startup",
        subtitle: "AI-Powered Order Management System | Restaurant Automation",
        badge: "Co-Founder",
        description:
          "I co-founded MizanPOS, a startup focused on helping restaurants digitize order workflows and daily operations. The platform is built to simplify front-of-house and back-office coordination while improving speed and service quality.",
        features: {
          f1: "Order management and workflow automation for restaurants",
          f2: "Operational visibility for staff and management",
          f3: "Designed for scalable, real-world business usage",
        },
        visit: "Visit MizanPOS",
      },
      projects: {
        title: "Featured Projects",
        filterAll: "All",
      },
      categories: {
        all: "All",
        computerVision: "Computer Vision",
        ocrNlp: "OCR/NLP",
        videoAnalysis: "Video Analysis",
        speechNlp: "Speech/NLP",
        aiEducation: "AI & Education",
      },
      projectList: {
        1: {
          title: "Uzbek Car Model Recognition",
          description: "Fine-tuned Facebook ViT model to recognize Uzbek car models (Jiguli, Labo, Lasetti, Matiz, Spark, Nexia, Nexia3, Damas, Cobalt, Bus). Achieved 98% accuracy on test data.",
          longDescription: "A ViT-based image classifier fine-tuned to detect common Uzbek car models with high precision. The pipeline includes curated datasets, extensive augmentation, and careful class balancing to reduce confusion between visually similar models.",
        },
        2: {
          title: "Vehicle Color Recognition",
          description: "Fine-tuned Facebook ViT model to recognize vehicle colors (black, blue, red, yellow, gray, white, green). Achieved 95% accuracy on test data.",
          longDescription: "Color classifier leveraging ViT embeddings to robustly infer vehicle color under varied lighting and viewpoints. Training included color jitter and histogram equalization for robustness.",
        },
        3: {
          title: "Gender Classification Model",
          description: "A deep learning pipeline that classifies gender from face images with 95% test accuracy. Built by fine‑tuning a ResNet backbone on ~20k open‑source images with strong augmentation and regularization for robust, real‑world performance.",
          longDescription: "Fine‑tuned ResNet-based facial attribute classifier trained on ~20k images. The training pipeline uses class balancing, label smoothing, heavy augmentation (lighting, pose, background), and careful validation to generalize across demographics and capture conditions.",
        },
        4: {
          title: "Age Classification Model",
          description: "A deep learning model that predicts age groups from images. I fine‑tuned a VGG backbone on open‑source age‑labeled datasets to deliver accurate, stable predictions across lighting and pose variations.",
          longDescription: "Age-group classifier trained by fine‑tuning VGG with class-balanced sampling and calibration. Extensive augmentation and regularization improve generalization across demographics and imaging conditions.",
        },
        5: {
          title: "Uzbek License Plate Recognition",
          description: "Fine-tuned PaddleOCR English model specifically for Uzbek license plates. Improved character recognition accuracy to 94% by handling O/0 confusion.",
          longDescription: "OCR pipeline adapting PaddleOCR for Uzbek plates with custom post-processing to disambiguate similar characters (e.g., O vs 0).",
        },
        7: {
          title: "Active Liveness Detection",
          description: "AI-powered liveness detection using Mediapipe for facial landmarks and Random Forest for head movement detection. Ensures physical presence during authentication.",
          longDescription: "Active challenge-response liveness: Mediapipe tracks landmarks while a Random Forest verifies instructed head movements to prevent spoofing.",
        },
        8: {
          title: "Face Recognition System",
          description: "A robust face recognition pipeline using discriminative feature embeddings and a Nearest Neighbor decision rule with thresholding to reject unknown faces. Designed to adapt to different datasets and deployment needs.",
          longDescription: "I extract compact facial embeddings and match with a Nearest Neighbor classifier, using a tuned threshold to recognize only known identities and reject unknowns. The system is dataset‑agnostic and can be trained on multiple face datasets depending on requirements.",
        },
        9: {
          title: "Violence Detection Model",
          description: "Fine-tuned Facebook TimeSformer transformer model for video violence detection. Achieved 97% accuracy using spatio-temporal features for video classification.",
          longDescription: "Video transformer (TimeSformer) fine-tuned on custom dataset to detect violence by modeling spatio-temporal cues.",
        },
        10: {
          title: "Real-time Crowd Detection",
          description: "Real-time crowd monitoring system with configurable thresholds. Tracks average people count over time periods and records crowd events when thresholds are exceeded.",
          longDescription: "Real-time detection and analytics for crowding; triggers events when average counts surpass thresholds.",
        },
        11: {
          title: "Uzbek Speech-to-Text Model",
          description: "Custom STT model trained by fine-tuning Whisper Medium on 600+ hours of Uzbek audio dataset. Achieved high accuracy with excellent WER metrics for Uzbek language.",
          longDescription: "Advanced speech-to-text model specifically designed for the Uzbek language, built by fine-tuning OpenAI's Whisper Medium model on a comprehensive dataset of over 600 hours of Uzbek audio. The model demonstrates exceptional performance with a Word Error Rate (WER) of approximately 12% on unknown test data and a Character Error Rate (CER) of around 3%. This represents a significant advancement in Uzbek language processing capabilities, enabling accurate transcription across various speaking styles, accents, and audio qualities. The training process involved careful data curation, extensive audio preprocessing, and iterative fine-tuning to optimize performance for Uzbek phonetics and linguistic patterns.",
        },
        12: {
          title: "Abandoned Object Detection",
          description: "YOLO-based real-time system that detects bags, backpacks, and other belongings. Immediately detects abandoned objects in real-time for security alerts.",
          longDescription: "YOLO detector trained to recognize carried items and trigger an alert when an item becomes unattended for a configured period.",
        },
        13: {
          title: "Hifz Evaluator",
          description: "AI-powered Qur'an memorization evaluation tool that helps users test and improve their Hifz interactively.",
          longDescription: "This system displays a random Qur'an verse at the top of the screen. The user recites the next verse from memory and can check their accuracy by revealing the correct verse below. Users can also generate a new random verse to continue practice. The project uses MediaPipe for face and hand landmarks, along with OpenCV for frame preprocessing, enabling an interactive and intelligent Hifz evaluation experience.",
        },
        14: {
          title: "Uzbek TTS Model",
          description: "Revolutionary text-to-speech model that brings natural emotions and breathing to Uzbek speech synthesis, trained on just 20 hours of audio data.",
          longDescription: "While most Uzbek TTS models produce robotic, emotionless speech that limits their effectiveness as AI agents, this breakthrough model delivers remarkably natural-sounding voice synthesis with authentic emotional expression and even subtle breathing patterns. Built using the advanced XTTS-v2 architecture and trained efficiently on only 20 hours of carefully curated Uzbek audio, the model demonstrates exceptional quality that rivals systems trained on hundreds of hours of data. The natural breathing sounds and emotional nuances make it perfect for creating engaging AI assistants and voice applications that truly connect with Uzbek speakers.",
        },
        15: {
          title: "Customer Action Recognition in Stores",
          description: "Video-based action recognition that detects in-store customer behaviors—taking items, walking, and standing—using a TimeSformer model for spatio-temporal understanding.",
          longDescription: "A video action recognition pipeline built with AI and deep learning to classify customer behaviors in store footage. Using a TimeSformer transformer architecture, the model learns spatio-temporal cues from video clips to recognize actions such as taking items, walking, and standing. This enables retailers to understand in-aisle engagement and movement patterns, supporting store analytics, layout optimization, and operational insights from surveillance or overhead camera feeds.",
        },
        16: {
          title: "AI-Powered Road Traffic Analysis",
          description: "Computer vision system for real-time road traffic analysis: vehicle detection, counting, flow estimation, and congestion monitoring from traffic camera feeds for smart city and traffic management.",
          longDescription: "An AI-powered pipeline that analyzes road traffic using computer vision. The system processes live or recorded traffic camera footage to detect and count vehicles, estimate traffic flow, and monitor congestion. Built for smart city applications and traffic management, it can support decisions on signal timing, incident detection, and infrastructure planning. Uses deep learning models for robust vehicle detection and tracking across varying lighting and weather conditions.",
        },
        17: {
          title: "Illegal Parking Detection (Plate + Zone + Time)",
          description: "Real-time system that tracks vehicles, detects license plates, recognizes Uzbek plate text, and flags illegal parking when a vehicle stays inside a defined no-parking zone longer than a time threshold.",
          longDescription: "An end-to-end illegal parking detection pipeline built for real-world surveillance cameras. Vehicles are detected and tracked across frames, while a custom YOLO plate detector localizes license plates. A dedicated Uzbek plate recognition model reads the plate text with high accuracy. Polygon zones define parking/no-parking areas, and a timer-based rule triggers an illegal parking event when a tracked vehicle remains in a restricted zone beyond the configured duration.",
        },
        18: {
          title: "Garbage Overflow & Litter Detection",
          description: "Custom YOLO model that detects garbage bins, overflowed containers, and trash on the ground to help prevent long-lasting overflow situations and improve city cleanliness operations.",
          longDescription: "A computer vision monitoring solution for waste management. The detector identifies bins/containers and recognizes two critical situations: (1) overflow, when trash exceeds the container capacity and spills out, and (2) litter, when garbage is lying on the floor near the bin. The goal is to automatically notify responsible teams so bins can be emptied quickly, reducing hygiene risks and keeping public areas clean.",
        },
      },
      projectCard: {
        tryDemo: "Try Demo",
        viewDetails: "View Details",
        liveDemo: "Live Demo",
      },
      projectPage: {
        notFoundTitle: "Project Not Found",
        backHome: "Back to Home",
        backPortfolio: "Back to Portfolio",
        stats: { accuracy: "Accuracy", dataset: "Dataset", modelType: "Model Type" },
        actions: { liveDemo: "Live Demo" },
        overview: "Project Overview",
        technologiesUsed: "Technologies Used:",
        demoVideo: "Demo Video",
        demoVideoSubtitle: "Watch how this model works in practice",
        demoImages: "Demonstration Images",
        demoImagesSubtitle: "Example frames showing detections and results",
        resultsTitle: "Model Performance Results",
        resultsCar: "Real vehicle model classification results with confidence scores",
        resultsGender: "Real gender classification results with confidence scores",
        resultsAge: "Real age detection results with confidence scores",
        resultsColor: "Real vehicle color classification results with confidence scores",
        audioExamples: "Audio Examples",
        audioExamplesSubtitle: "Listen to sample audio files and see how the model transcribes them",
        sample: "Sample",
        transcription: "Transcription:",
        browserNoAudio: "Your browser does not support the audio element.",
      },
      skills: {
        title: "Skills & Technologies",
        categories: {
          ml: "Machine Learning",
          cv: "Computer Vision",
          nlpSpeech: "NLP & Speech",
          dl: "Deep Learning",
          backend: "Backend & Databases",
          tools: "Data Science & Tools",
        },
        stats: {
          years: "Years Experience",
          projects: "Projects Completed",
          models: "Models Deployed",
          accuracy: "Avg Model Accuracy",
        },
      },
      contact: {
        title: "Get In Touch",
        connectTitle: "Let's Connect",
        blurb:
          "I'm always interested in discussing new opportunities, collaborations, or simply chatting about the latest in AI and machine learning. Feel free to reach out!",
        email: "Email",
        telegram: "Telegram",
        sendTitle: "Send Message",
        placeholders: {
          name: "Your Name",
          email: "Your Email",
          subject: "Subject",
          message: "Your Message",
        },
        send: "Send Message",
        toast: {
          sentTitle: "Message Sent!",
          sentDesc: "Thank you for your message. I'll get back to you soon.",
          errorTitle: "Error",
          errorDesc: "Failed to send message. Please try again later.",
        },
      },
      footer: {
        text: "© 2024 Abduqayum Portfolio. Built with React and Tailwind CSS.",
      },
      notFound: {
        title: "Oops! Page not found",
        back: "Return to Home",
      },
    },
  },
  ru: {
    translation: {
      language: { label: "Язык" },
      nav: {
        home: "Главная",
        about: "Обо мне",
        projects: "Проекты",
        startup: "Стартап",
        skills: "Навыки",
        contact: "Контакты",
      },
      hero: {
        hello: "Привет, я",
        role: "Data Scientist и инженер по компьютерному зрению",
        blurb:
          "Я превращаю сложные данные в интеллектуальные решения. Специализируюсь на машинном обучении, deep learning и компьютерном зрении для решения реальных задач. Посмотрите мои модели в действии через интерактивные демо.",
        ctaWork: "Посмотреть проекты",
        ctaResume: "Скачать резюме",
      },
      about: {
        title: "Обо мне",
        p1:
          "Я Абдуқайюм — Data Scientist, работаю в области Computer Vision и Natural Language Processing. Более 2 лет опыта: разрабатываю современные ML-решения и создаю интеллектуальные системы.",
        p2:
          "Сейчас я Data Scientist в Smart Soft Development Company: превращаю сложные данные в практические инсайты с помощью CV и NLP. Люблю делать интерактивные демонстрации реальных AI‑кейсов.",
        badges: {
          years: "3+ года опыта",
          projects: "Проектов",
          specialty: "CV и NLP",
        },
      },
      startup: {
        title: "Стартап",
        subtitle: "AI-система управления заказами | Автоматизация ресторанов",
        badge: "Сооснователь",
        description:
          "Я сооснователь MizanPOS — стартапа, который помогает ресторанам цифровизировать обработку заказов и ежедневные операционные процессы. Платформа упрощает взаимодействие между залом и внутренними процессами, повышая скорость обслуживания и качество сервиса.",
        features: {
          f1: "Управление заказами и автоматизация ресторанных процессов",
          f2: "Прозрачность операций для персонала и менеджмента",
          f3: "Решение, рассчитанное на масштабируемое применение в реальном бизнесе",
        },
        visit: "Перейти на MizanPOS",
      },
      projects: { title: "Избранные проекты", filterAll: "Все" },
      categories: {
        all: "Все",
        computerVision: "Компьютерное зрение",
        ocrNlp: "OCR/NLP",
        videoAnalysis: "Видео-анализ",
        speechNlp: "Речь/NLP",
        aiEducation: "ИИ и образование",
      },
      projectList: {
        1: {
          title: "Распознавание моделей узбекских автомобилей",
          description: "Дообученная модель Facebook ViT для распознавания узбекских моделей авто (Jiguli, Labo, Lasetti, Matiz, Spark, Nexia, Nexia3, Damas, Cobalt, Bus). Точность на тестовых данных — 98%.",
          longDescription: "Классификатор изображений на базе ViT, дообученный для точного определения распространенных узбекских моделей автомобилей. В пайплайн входят тщательно подготовленные датасеты, активные аугментации и балансировка классов для снижения ошибок между визуально похожими моделями.",
        },
        2: {
          title: "Распознавание цвета автомобиля",
          description: "Дообученная модель Facebook ViT для распознавания цветов автомобилей (черный, синий, красный, желтый, серый, белый, зеленый). Достигнута точность 95% на тесте.",
          longDescription: "Классификатор цвета на базе ViT-эмбеддингов, устойчивый к разному освещению и углу съемки. В обучении использовались color jitter и выравнивание гистограммы для повышения робастности.",
        },
        3: {
          title: "Модель классификации пола",
          description: "Пайплайн глубокого обучения, классифицирующий пол по изображениям лица с точностью 95% на тесте. Основан на дообучении ResNet на ~20k открытых изображений с сильной аугментацией и регуляризацией.",
          longDescription: "Классификатор лицевых признаков на базе дообученного ResNet, обученный на ~20k изображений. Пайплайн включает балансировку классов, label smoothing, интенсивные аугментации (свет, поза, фон) и аккуратную валидацию для хорошей обобщающей способности.",
        },
        4: {
          title: "Модель классификации возраста",
          description: "Модель глубокого обучения для предсказания возрастных групп по изображениям. Я дообучил backbone VGG на открытых датасетах с возрастными метками для стабильных предсказаний при разном освещении и позе.",
          longDescription: "Классификатор возрастных групп, обученный через fine-tuning VGG с балансировкой классов и калибровкой. Широкие аугментации и регуляризация улучшают качество на разных демографических и съемочных условиях.",
        },
        5: {
          title: "Распознавание узбекских номерных знаков",
          description: "Дообученная англоязычная модель PaddleOCR для узбекских номерных знаков. Точность распознавания символов повышена до 94% за счет обработки путаницы O/0.",
          longDescription: "OCR-пайплайн на базе PaddleOCR, адаптированный под узбекские номера, с постобработкой для различения похожих символов (например, O и 0).",
        },
        7: {
          title: "Активная проверка живости",
          description: "AI-система liveness detection с использованием MediaPipe для лицевых landmarks и Random Forest для анализа движений головы. Подтверждает физическое присутствие при аутентификации.",
          longDescription: "Активная challenge-response проверка: MediaPipe отслеживает landmarks, а Random Forest проверяет заданные движения головы, чтобы предотвратить spoofing-атаки.",
        },
        8: {
          title: "Система распознавания лиц",
          description: "Надежный пайплайн распознавания лиц на основе дискриминативных эмбеддингов и правила ближайшего соседа с порогом для отклонения неизвестных лиц. Гибко адаптируется под разные датасеты и задачи.",
          longDescription: "Система извлекает компактные лицевые эмбеддинги и сопоставляет их с помощью классификатора ближайшего соседа. Настроенный порог позволяет распознавать только известные личности и отклонять неизвестные. Решение не привязано к одному датасету и настраивается под deployment.",
        },
        9: {
          title: "Модель детекции насилия",
          description: "Дообученная трансформерная модель Facebook TimeSformer для детекции насилия в видео. Достигнута точность 97% за счет пространственно-временных признаков.",
          longDescription: "Видеотрансформер TimeSformer, дообученный на пользовательском датасете для обнаружения насилия на основе пространственно-временного контекста.",
        },
        10: {
          title: "Детекция толпы в реальном времени",
          description: "Система мониторинга толпы в реальном времени с настраиваемыми порогами. Отслеживает среднее количество людей за период и фиксирует события при превышении порога.",
          longDescription: "Система детекции и аналитики скопления людей в реальном времени; генерирует события, когда среднее число людей превышает заданные пороги.",
        },
        11: {
          title: "Узбекская модель Speech-to-Text",
          description: "Пользовательская STT-модель, обученная через fine-tuning Whisper Medium на 600+ часах узбекского аудио. Достигнута высокая точность и хорошие WER-метрики для узбекского языка.",
          longDescription: "Продвинутая модель преобразования речи в текст для узбекского языка, построенная на дообучении Whisper Medium от OpenAI на корпусе более 600 часов. На неизвестных тестовых данных показывает около 12% WER и 3% CER. Это заметно расширяет возможности обработки узбекской речи: модель стабильно работает на разных стилях речи, акцентах и качестве аудио.",
        },
        12: {
          title: "Детекция оставленных предметов",
          description: "YOLO-система в реальном времени для обнаружения сумок, рюкзаков и других предметов. Оперативно выявляет оставленные без присмотра объекты для задач безопасности.",
          longDescription: "Детектор YOLO обучен распознавать переносимые предметы и отправляет сигнал, когда предмет остается без владельца дольше заданного времени.",
        },
        13: {
          title: "Hifz Evaluator",
          description: "Инструмент на базе ИИ для оценки запоминания Корана, который помогает пользователям интерактивно проверять и улучшать хифз.",
          longDescription: "Система показывает случайный аят в верхней части экрана. Пользователь читает следующий аят по памяти и сверяет точность, открывая правильный вариант. Также можно генерировать новый случайный аят для продолжения практики. В проекте используются MediaPipe для landmarks лица и рук и OpenCV для препроцессинга кадров.",
        },
        14: {
          title: "Узбекская TTS-модель",
          description: "Технологичная модель синтеза речи, которая добавляет естественные эмоции и дыхание в узбекский TTS, обучена всего на 20 часах аудио.",
          longDescription: "В отличие от большинства узбекских TTS-моделей с роботизированной подачей, эта модель синтезирует заметно более естественную речь с эмоциональной окраской и мягкими дыхательными паузами. Построена на архитектуре XTTS-v2 и эффективно обучена на 20 часах тщательно отобранного узбекского аудио.",
        },
        15: {
          title: "Распознавание действий покупателей в магазине",
          description: "Система распознавания действий в видео, определяющая поведение покупателей в магазине (взятие товара, ходьба, стояние) с помощью модели TimeSformer и пространственно-временного анализа.",
          longDescription: "Пайплайн видео-аналитики на базе ИИ и deep learning для классификации поведения клиентов в торговом зале. Архитектура TimeSformer извлекает пространственно-временные паттерны из видеоклипов и распознает действия вроде взятия товара, ходьбы и стояния.",
        },
        16: {
          title: "AI-анализ дорожного трафика",
          description: "Система компьютерного зрения для анализа дорожного движения в реальном времени: детекция и подсчет транспорта, оценка потока и контроль загруженности по видеопотоку с камер.",
          longDescription: "AI-пайплайн для анализа дорожного трафика по live и архивному видеопотоку с камер. Система обнаруживает и считает транспорт, оценивает поток и фиксирует пробки. Решение подходит для задач умного города и управления дорожной инфраструктурой.",
        },
        17: {
          title: "Детекция незаконной парковки (номер + зона + время)",
          description: "Система в реальном времени: трекинг автомобилей, детекция номерных знаков, распознавание текста узбекских номеров и фиксация нарушения, если машина находится в запрещенной зоне дольше заданного времени.",
          longDescription: "Полный пайплайн для камер наблюдения: детекция и трекинг автомобилей по кадрам, пользовательский YOLO-детектор номерных знаков и отдельная модель распознавания узбекских номеров с высокой точностью. Полигональные зоны задают парковочные/запрещенные участки, а таймерное правило фиксирует незаконную парковку, когда автомобиль задерживается в запрещенной зоне сверх порога.",
        },
        18: {
          title: "Детекция переполнения контейнеров и мусора на земле",
          description: "Пользовательская YOLO-модель, которая распознает контейнеры, переполнение (overflow) и мусор на полу, чтобы вовремя реагировать и поддерживать чистоту.",
          longDescription: "Решение для мониторинга вывозa мусора: детектор находит контейнеры и выявляет два ключевых состояния — (1) overflow, когда мусор вываливается из контейнера, и (2) litter, когда мусор лежит на земле рядом. Цель — автоматически информировать ответственные службы, чтобы контейнеры вовремя очищались и переполнение не оставалось надолго.",
        },
      },
      projectCard: {
        tryDemo: "Демо",
        viewDetails: "Подробнее",
        liveDemo: "Онлайн-демо",
      },
      projectPage: {
        notFoundTitle: "Проект не найден",
        backHome: "На главную",
        backPortfolio: "Назад к портфолио",
        stats: { accuracy: "Точность", dataset: "Набор данных", modelType: "Тип модели" },
        actions: { liveDemo: "Онлайн-демо" },
        overview: "Обзор проекта",
        technologiesUsed: "Технологии:",
        demoVideo: "Демо-видео",
        demoVideoSubtitle: "Посмотрите, как модель работает на практике",
        demoImages: "Демонстрационные изображения",
        demoImagesSubtitle: "Примеры кадров с детекцией и результатами",
        resultsTitle: "Результаты модели",
        resultsCar: "Реальные результаты классификации моделей авто с вероятностями",
        resultsGender: "Реальные результаты классификации пола с вероятностями",
        resultsAge: "Реальные результаты определения возраста с вероятностями",
        resultsColor: "Реальные результаты распознавания цвета авто с вероятностями",
        audioExamples: "Аудио примеры",
        audioExamplesSubtitle: "Послушайте аудио и посмотрите расшифровку",
        sample: "Пример",
        transcription: "Транскрипция:",
        browserNoAudio: "Ваш браузер не поддерживает аудио.",
      },
      skills: {
        title: "Навыки и технологии",
        categories: {
          ml: "Машинное обучение",
          cv: "Компьютерное зрение",
          nlpSpeech: "NLP и речь",
          dl: "Глубокое обучение",
          backend: "Бэкенд и базы данных",
          tools: "Data Science и инструменты",
        },
        stats: {
          years: "Лет опыта",
          projects: "Проектов",
          models: "Моделей в проде",
          accuracy: "Средняя точность",
        },
      },
      contact: {
        title: "Связаться со мной",
        connectTitle: "Давайте на связи",
        blurb:
          "Я открыт к новым возможностям, сотрудничеству и обсуждению AI/ML. Напишите мне — буду рад!",
        email: "Email",
        telegram: "Telegram",
        sendTitle: "Отправить сообщение",
        placeholders: {
          name: "Ваше имя",
          email: "Ваш email",
          subject: "Тема",
          message: "Сообщение",
        },
        send: "Отправить",
        toast: {
          sentTitle: "Отправлено!",
          sentDesc: "Спасибо за сообщение. Я скоро отвечу.",
          errorTitle: "Ошибка",
          errorDesc: "Не удалось отправить. Попробуйте позже.",
        },
      },
      footer: {
        text: "© 2024 Портфолио Абдуқайюма. Сделано на React и Tailwind CSS.",
      },
      notFound: {
        title: "Страница не найдена",
        back: "Вернуться на главную",
      },
    },
  },
  uz: {
    translation: {
      language: { label: "Til" },
      nav: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        projects: "Loyihalar",
        startup: "Startap",
        skills: "Ko‘nikmalar",
        contact: "Aloqa",
      },
      hero: {
        hello: "Salom, men",
        role: "Data Scientist va Computer Vision muhandisi",
        blurb:
          "Men murakkab ma’lumotlarni aqlli yechimlarga aylantiraman. Machine Learning, Deep Learning va Computer Vision yo‘nalishlarida real muammolarni hal qilaman. Modellarni interaktiv demo orqali ko‘ring.",
        ctaWork: "Loyihalarni ko‘rish",
        ctaResume: "Rezyumeni yuklab olish",
      },
      about: {
        title: "Men haqimda",
        p1:
          "Men Abduqayum — Computer Vision va Natural Language Processing yo‘nalishida ishlaydigan Data Scientist. 3+ yillik tajribam bor, zamonaviy ML yechimlari va aqlli tizimlar yarataman.",
        p2:
          "Hozir Smart Soft Development Company’da Data Scientist sifatida CV va NLP yordamida murakkab ma’lumotlardan amaliy insightlar chiqaraman. Real AI ilovalarini ko‘rsatadigan interaktiv demolar yaratishni yoqtiraman.",
        badges: {
          years: "3+ yil tajriba",
          projects: "Loyiha",
          specialty: "CV & NLP",
        },
      },
      startup: {
        title: "Startap",
        subtitle: "AI asosidagi buyurtma boshqaruvi | Restoran avtomatlashtirish",
        badge: "Hamta'sischi",
        description:
          "Men MizanPOS startapining hamta'sischisiman. Bu loyiha restoranlarda buyurtma jarayonlari va kundalik operatsiyalarni raqamlashtirishga qaratilgan. Platforma front-of-house va ichki jarayonlar o'rtasidagi hamkorlikni soddalashtirib, xizmat tezligi va sifatini oshiradi.",
        features: {
          f1: "Restoranlar uchun buyurtma boshqaruvi va jarayonlarni avtomatlashtirish",
          f2: "Xodimlar va menejment uchun operatsion shaffoflik",
          f3: "Real biznesda kengaytiriladigan tarzda ishlashga moslangan",
        },
        visit: "MizanPOS saytiga o'tish",
      },
      projects: { title: "Tanlangan loyihalar", filterAll: "Barchasi" },
      categories: {
        all: "Barchasi",
        computerVision: "Kompyuter ko'rish",
        ocrNlp: "OCR/NLP",
        videoAnalysis: "Video tahlil",
        speechNlp: "Nutq/NLP",
        aiEducation: "AI va ta'lim",
      },
      projectList: {
        1: {
          title: "O'zbek avtomobil modellari aniqlash",
          description: "Facebook ViT modeli O'zbekistonda keng tarqalgan avtomobil modellari (Jiguli, Labo, Lasetti, Matiz, Spark, Nexia, Nexia3, Damas, Cobalt, Bus) uchun fine-tune qilindi. Test natijasi: 98% aniqlik.",
          longDescription: "ViT asosidagi tasvir klassifikatori mashhur o'zbek avtomobil modellarini yuqori aniqlikda aniqlash uchun moslashtirilgan. Pipeline tarkibida puxta tayyorlangan datasetlar, kengaytirilgan augmentatsiya va o'xshash modellar orasidagi xatolarni kamaytiruvchi sinf muvozanati mavjud.",
        },
        2: {
          title: "Avtomobil rangini aniqlash",
          description: "Facebook ViT modeli avtomobil ranglarini (qora, ko'k, qizil, sariq, kulrang, oq, yashil) aniqlash uchun fine-tune qilindi. Test aniqligi: 95%.",
          longDescription: "ViT embeddinglaridan foydalanuvchi rang klassifikatori turli yorug'lik va rakurslarda ham barqaror ishlaydi. Treningda color jitter va gistogramma tekislash usullari qo'llanib, modelning mustahkamligi oshirildi.",
        },
        3: {
          title: "Jinsni tasniflash modeli",
          description: "Yuz tasviridan jinsni tasniflaydigan deep learning pipeline. ResNet backbone ~20 ming ochiq ma'lumotli tasvirlarda fine-tune qilinib, testda 95% aniqlikka erishildi.",
          longDescription: "ResNet asosidagi yuz atributlari klassifikatori ~20 ming tasvirda o'qitilgan. Trening jarayonida sinf muvozanati, label smoothing, kuchli augmentatsiya (yorug'lik, poza, fon) va puxta validatsiya qo'llanib, real sharoitlarda umumlashuv yaxshilangan.",
        },
        4: {
          title: "Yosh guruhini tasniflash modeli",
          description: "Tasvirdan yosh guruhini bashorat qiluvchi deep learning model. VGG backbone ochiq yosh belgilangan datasetlarda fine-tune qilinib, turli yorug'lik va poza sharoitida barqaror natija beradi.",
          longDescription: "VGG asosidagi yosh-guruh klassifikatori sinf muvozanati va kalibratsiya bilan o'qitilgan. Keng augmentatsiya va regulyarizatsiya demografik hamda tasvirga olish sharoitlari bo'yicha umumlashuvni kuchaytiradi.",
        },
        5: {
          title: "O'zbek davlat raqamlarini tanish",
          description: "PaddleOCR'ning ingliz modeli O'zbek davlat raqamlari uchun moslashtirildi. O/0 chalkashligini bartaraf etish orqali belgi aniqligi 94% ga ko'tarildi.",
          longDescription: "O'zbek davlat raqamlari uchun PaddleOCR asosidagi OCR pipeline. O'xshash belgilarni (masalan, O va 0) ajratish uchun maxsus post-processing qoidalari qo'shilgan.",
        },
        7: {
          title: "Faol liveness aniqlash",
          description: "Mediapipe orqali yuz landmarklari va Random Forest orqali bosh harakatini tekshiradigan AI liveness tizimi. Autentifikatsiyada foydalanuvchining real mavjudligini tasdiqlaydi.",
          longDescription: "Faol challenge-response yondashuvi: Mediapipe landmarklarni kuzatadi, Random Forest esa berilgan bosh harakatlari to'g'ri bajarilganini tekshiradi. Bu spoofing urinishlarini kamaytiradi.",
        },
        8: {
          title: "Yuzni tanish tizimi",
          description: "Diskriminativ embeddinglar va nearest-neighbor qaror qoidasiga asoslangan ishonchli yuzni tanish pipeline. Threshold yordamida noma'lum yuzlar rad etiladi.",
          longDescription: "Tizim ixcham yuz embeddinglarini chiqaradi va nearest-neighbor klassifikatori orqali moslashtiradi. Sozlangan threshold faqat tanilgan shaxslarni qabul qilib, noma'lumlarni rad etadi. Turli dataset va deployment talablariga moslashadi.",
        },
        9: {
          title: "Zo'ravonlikni aniqlash modeli",
          description: "Facebook TimeSformer modeli videoda zo'ravonlikni aniqlash uchun fine-tune qilindi. Fazo-vaqt xususiyatlari asosida 97% aniqlikka erishildi.",
          longDescription: "TimeSformer videotransformeri custom datasetda o'qitilib, zo'ravonlik holatlarini fazo-vaqt konteksti orqali aniqlaydi.",
        },
        10: {
          title: "Real vaqtli olomonni aniqlash",
          description: "Sozlanadigan thresholdlarga ega real vaqtli olomon monitoring tizimi. Vaqt oralig'ida o'rtacha odam sonini hisoblaydi va threshold oshganda hodisani qayd etadi.",
          longDescription: "Real vaqtli deteksiya va crowd analytics yechimi; o'rtacha son belgilangan limitdan oshganda avtomatik trigger hodisa yaratadi.",
        },
        11: {
          title: "O'zbekcha Speech-to-Text modeli",
          description: "Whisper Medium modeli 600+ soatlik o'zbek audiosida fine-tune qilinib, o'zbek tili uchun yuqori aniqlik va kuchli WER natijalarini berdi.",
          longDescription: "O'zbek tili uchun maxsus speech-to-text model. Whisper Medium 600+ soat audio korpusida o'qitilgan. Noma'lum testlarda taxminan WER 12% va CER 3% ko'rsatkichiga erishilgan. Model turli nutq uslublari va audio sifati sharoitida barqaror transkripsiya beradi.",
        },
        12: {
          title: "Qoldirib ketilgan buyumni aniqlash",
          description: "YOLO asosidagi real vaqtli tizim sumka, ryukzak va boshqa buyumlarni aniqlaydi. Qoldirib ketilgan obyektlar xavfsizlik ogohlantirishlari uchun tezkor topiladi.",
          longDescription: "YOLO detektori ko'tarib yuriladigan buyumlarni tanib oladi va buyum ma'lum vaqt davomida egasisiz qolsa, signal beradi.",
        },
        13: {
          title: "Hifz baholagich",
          description: "Qur'on yodlash jarayonini interaktiv baholovchi AI vosita. Foydalanuvchiga hifzni sinash va yaxshilashda yordam beradi.",
          longDescription: "Tizim ekranning yuqori qismida tasodifiy oyatni ko'rsatadi. Foydalanuvchi keyingi oyatni yoddan o'qiydi va pastda to'g'ri javobni ochib tekshiradi. Shuningdek, yangi tasodifiy oyat yaratib mashqni davom ettirish mumkin.",
        },
        14: {
          title: "O'zbek TTS modeli",
          description: "Atigi 20 soat audio bilan o'qitilgan, o'zbekcha nutqqa tabiiy emotsiya va nafas elementlarini qo'sha oladigan zamonaviy text-to-speech model.",
          longDescription: "Ko'p o'zbek TTS modellari robotik chiqish beradi, ushbu model esa tabiiyroq talaffuz, emotsiya va nozik nafas effektlarini taqdim etadi. XTTS-v2 arxitekturasi asosida qurilgan va 20 soatlik puxta tayyorlangan o'zbek audiosi bilan samarali o'qitilgan.",
        },
        15: {
          title: "Do'konda mijoz harakatlarini aniqlash",
          description: "Video asosidagi action recognition yechimi do'kon ichidagi xatti-harakatlarni (buyum olish, yurish, turish) TimeSformer modeli orqali aniqlaydi.",
          longDescription: "Do'kon video oqimida mijoz harakatlarini klassifikatsiya qiluvchi AI pipeline. TimeSformer arxitekturasi videodan fazo-vaqt xususiyatlarini o'rganib, buyum olish, yurish va turish kabi harakatlarni aniqlaydi.",
        },
        16: {
          title: "AI yordamida yo'l harakati tahlili",
          description: "Real vaqtli yo'l harakati tahlili uchun computer vision tizimi: transportni aniqlash va sanash, oqimni baholash hamda tirbandlik monitoringi.",
          longDescription: "AI asosidagi pipeline yo'l kamerasi videolarini qayta ishlaydi: transport vositalarini aniqlaydi, sonini hisoblaydi, oqim va tirbandlik holatini tahlil qiladi. Yechim smart city va trafik boshqaruvi vazifalariga mos keladi.",
        },
        17: {
          title: "Noqonuniy to'xtashni aniqlash (raqam + zona + vaqt)",
          description: "Real vaqtli tizim: transportni kuzatadi, davlat raqamini aniqlaydi, o'zbek raqamlarini yuqori aniqlikda o'qiydi va mashina taqiqlangan zonada belgilangan vaqtdan ko'p tursa, noqonuniy to'xtash sifatida belgilaydi.",
          longDescription: "Kuzatuv kameralariga mos end-to-end pipeline: transport vositalari aniqlanadi va tracking qilinadi, custom YOLO raqam detektori raqamni lokalizatsiya qiladi, alohida o'zbek raqamini tanish modeli matnni yuqori aniqlikda o'qiydi. Polygon zonalar parking/no-parking hududlarini belgilaydi, time-threshold qoidasi esa mashina taqiqlangan zonada uzoq qolsa, hodisani avtomatik qayd etadi.",
        },
        18: {
          title: "Konteyner overflow va yerda yotgan chiqindini aniqlash",
          description: "Custom YOLO modeli konteynerlarni, to'lib-toshgan holatni (overflow) va yerda yotgan chiqindini aniqlab, uzoq vaqt qolib ketgan overflow holatlarini oldini olishga yordam beradi.",
          longDescription: "Chiqindi boshqaruvi uchun monitoring yechimi: detektor konteynerlarni topadi va 2 ta muhim holatni aniqlaydi — (1) overflow: chiqindi konteynerdan tashqariga toshib ketgan, (2) litter: konteyner yonida yerda yotgan chiqindi. Maqsad — mas'ul xodimlarni avtomatik xabardor qilish va konteynerlarni tezroq bo'shatish orqali tozalikni saqlash.",
        },
      },
      projectCard: {
        tryDemo: "Demo",
        viewDetails: "Batafsil",
        liveDemo: "Jonli demo",
      },
      projectPage: {
        notFoundTitle: "Loyiha topilmadi",
        backHome: "Bosh sahifaga",
        backPortfolio: "Portfolioga qaytish",
        stats: { accuracy: "Aniqlik", dataset: "Ma'lumotlar to'plami", modelType: "Model turi" },
        actions: { liveDemo: "Jonli demo" },
        overview: "Loyiha haqida",
        technologiesUsed: "Texnologiyalar:",
        demoVideo: "Demo video",
        demoVideoSubtitle: "Model amalda qanday ishlashini ko‘ring",
        demoImages: "Namuna rasmlar",
        demoImagesSubtitle: "Deteksiya va natijalarni ko‘rsatuvchi kadrlar",
        resultsTitle: "Model natijalari",
        resultsCar: "Avto modelini tasniflash natijalari (ishonchlilik bilan)",
        resultsGender: "Jinsni tasniflash natijalari (ishonchlilik bilan)",
        resultsAge: "Yoshni aniqlash natijalari (ishonchlilik bilan)",
        resultsColor: "Avto rangini aniqlash natijalari (ishonchlilik bilan)",
        audioExamples: "Audio misollar",
        audioExamplesSubtitle: "Audio namunalarni tinglang va transkripsiyani ko‘ring",
        sample: "Namuna",
        transcription: "Transkripsiya:",
        browserNoAudio: "Brauzeringiz audio elementini qo‘llab-quvvatlamaydi.",
      },
      skills: {
        title: "Ko‘nikmalar va texnologiyalar",
        categories: {
          ml: "Mashinali o'rganish",
          cv: "Kompyuter ko'rish",
          nlpSpeech: "NLP va nutq",
          dl: "Chuqur o'rganish",
          backend: "Bekend va ma'lumotlar bazasi",
          tools: "Data Science va vositalar",
        },
        stats: {
          years: "Yil tajriba",
          projects: "Loyihalar",
          models: "Deploy qilingan modellar",
          accuracy: "O‘rtacha aniqlik",
        },
      },
      contact: {
        title: "Bog‘lanish",
        connectTitle: "Aloqada bo‘laylik",
        blurb:
          "Yangi imkoniyatlar, hamkorlik yoki AI/ML haqida suhbat uchun doim ochiqman. Bemalol yozing!",
        email: "Email",
        telegram: "Telegram",
        sendTitle: "Xabar yuborish",
        placeholders: {
          name: "Ismingiz",
          email: "Email",
          subject: "Mavzu",
          message: "Xabaringiz",
        },
        send: "Yuborish",
        toast: {
          sentTitle: "Yuborildi!",
          sentDesc: "Xabaringiz uchun rahmat. Tez orada javob beraman.",
          errorTitle: "Xatolik",
          errorDesc: "Yuborib bo‘lmadi. Keyinroq urinib ko‘ring.",
        },
      },
      footer: {
        text: "© 2024 Abduqayum portfoliosi. React va Tailwind CSS’da qurilgan.",
      },
      notFound: {
        title: "Sahifa topilmadi",
        back: "Bosh sahifaga qaytish",
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "uz"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;

