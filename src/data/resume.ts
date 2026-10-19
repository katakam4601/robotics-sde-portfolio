export const resumeData = {
  name: "KATAKAM SAIKUMAR",
  role: "Robotics Software Engineer",
  contact: {
    phone: "+1 (857) 437-2422",
    email: "saikatakam57@gmail.com",
    github: "https://github.com/katakam4601",
    linkedin: "https://www.linkedin.com/in/sai-kumar-katakam-821552209/",
    location: "United States (Open to Relocate)",
    resumePdf: "/assets/resume.pdf",
  },
  summary:
    "Robotics Software Engineer with around 4 years of experience building autonomy, perception, and robot learning systems in C++ and Python. Delivered ROS2 navigation stacks, RL locomotion and VLA manipulation policies in Isaac Sim and Isaac Lab, and TensorRT-optimized perception on Jetson. Background in embedded control (CAN Bus, FreeRTOS, ARM Cortex) and IEC 61508-aligned CI/CD, with a focus on sim-to-real transfer and edge deployment.",

  // Exact metrics directly quoted from the Work Experience section in the resume
  metricsFromExperience: [
    { value: "4,096", label: "Parallel GPU Environments", context: "Isaac Lab RL Locomotion Training (NVIDIA)" },
    { value: "19 ms", label: "Perception Latency", context: "TensorRT on Jetson Orin @ 30 FPS (NVIDIA)" },
    { value: "89%", label: "Sim-to-Real Success", context: "Legged-Robot Locomotion Policy (NVIDIA)" },
    { value: "< 1%", label: "DDS Message Loss", context: "ROS2 Nav2 Stack, 35% Lower Drift (NVIDIA)" },
    { value: "99.9%", label: "CAN Message Delivery", context: "FreeRTOS tasks on ARM Cortex-M (KPIT)" },
    { value: "94%", label: "Obstacle Detection Recall", context: "LiDAR & Camera Sensor Fusion (KPIT)" },
  ],

  // Exact skills listed in the SKILLS section of the resume
  skills: {
    "Programming Languages": ["C++", "Python", "CUDA", "MATLAB"],
    "Robotics Frameworks": ["ROS2", "Nav2", "MoveIt2", "ros2_control", "BehaviorTree.CPP", "Micro-ROS", "DDS/QoS tuning"],
    "Autonomy & Motion Planning": ["SLAM (LiDAR & Visual)", "MPC", "RRT*", "OMPL", "Multi-Robot Coordination"],
    "Embodied AI & Robot Learning": ["Vision-Language-Action (VLA) Models", "Imitation Learning & Diffusion Policies", "RL for Locomotion & Whole-Body Control", "LLM-Based Task Planning"],
    "Perception & AI": ["PyTorch", "OpenCV", "YOLO", "Sensor Fusion", "3D Mapping", "Visual-Inertial Odometry"],
    "Simulation & Sim-to-Real": ["Isaac Sim", "Isaac Lab", "Gazebo", "HIL/SIL Testing"],
    "Embedded & Control": ["Embedded Linux", "FreeRTOS", "ARM Cortex", "Motor Control", "CAN Bus", "EtherCAT"],
    "Deployment & Infrastructure": ["Docker", "GitHub Actions", "GitLab CI/CD", "ONNX Runtime", "TensorRT", "Edge AI Deployment"],
    "Safety & Standards": ["ISO 10218", "ISO/TS 15066", "IEC 61508"],
  },

  // Exact work experience from WORK EXPERIENCE section of the resume
  experience: [
    {
      role: "Robotics Software Engineer",
      company: "NVIDIA",
      location: "United States",
      duration: "September 2025 - Present",
      bullets: [
        "Trained reinforcement learning locomotion policies in Isaac Lab across 4,096 parallel GPU environments with domain randomization, raising legged-robot sim-to-real success from 58% to 89% and cutting iteration time from 3 days to 9 hours.",
        "Optimized PyTorch YOLO and visual-inertial odometry models with TensorRT and ONNX Runtime for Jetson Orin, reducing end-to-end perception latency from 48 ms to 19 ms (60%) and enabling 30 FPS onboard inference.",
        "Engineered a ROS2 autonomous navigation stack using Nav2, LiDAR and visual SLAM, and 3D mapping, tuning DDS QoS profiles to cut message loss from 7% to under 1% and lowering localization drift by 35% in multi-room tests.",
        "Fine-tuned Vision-Language-Action and diffusion policy models on 1,200+ teleoperated demonstrations in Isaac Sim, integrating with MoveIt2 and ros2_control to improve manipulation task from 62% to 84% across pick-and-place scenarios.",
        "Automated software-in-the-loop and hardware-in-the-loop regression testing with Docker, GitHub Actions, and Isaac Sim, shortening release validation and catching 40+ integration defects before deployment.",
      ],
      tags: ["Isaac Lab", "Isaac Sim", "TensorRT", "Jetson Orin", "ROS2", "Nav2", "MoveIt2", "ros2_control", "VLA Models", "Docker", "HIL/SIL"],
    },
    {
      role: "Associate Robotics Software Engineer",
      company: "KPIT Technologies",
      location: "India",
      duration: "March 2022 – August 2024",
      bullets: [
        "Developed a C++ Model Predictive Control (MPC) path-tracking controller for an autonomous vehicle platform, validated in MATLAB, cutting lateral tracking error from 0.45 m to 0.18 m at speeds up to 30 km/h.",
        "Implemented CAN Bus communication and FreeRTOS tasks on ARM Cortex-M controllers for motor control and sensor data, achieving zero dropped frames over 100+ hours of bench testing and a 99.9% on-time message delivery rate.",
        "Built a LiDAR and camera sensor fusion pipeline with OpenCV and 3D mapping, improving obstacle detection recall from 81% to 94% and reducing false positives by 28% across 50+ recorded drive scenarios.",
        "Designed RRT* motion planners with OMPL and tested them in Gazebo, cutting planning time by 40% and reaching a 96% collision-free success rate spanning 500 simulated scenarios.",
        "Integrated Micro-ROS on embedded controllers with an Embedded Linux gateway, reducing boot-to-ready time from 45 s to 18 s and cutting custom firmware code by 30%.",
        "Established a GitLab CI/CD pipeline with automated static analysis and unit tests aligned to IEC 61508 safety requirements, covering 85% of safety-critical modules and catching defects before integration throughout 20+ releases.",
      ],
      tags: ["C++", "MPC", "FreeRTOS", "ARM Cortex-M", "CAN Bus", "LiDAR", "Sensor Fusion", "RRT*", "OMPL", "Gazebo", "Micro-ROS", "IEC 61508"],
    },
  ],

  // Exact projects strictly from the PROJECTS section of the resume
  projects: [
    {
      title: "Agentic Data Science Copilot",
      tech: ["Python", "Llama 3", "LangGraph", "LangChain", "SQL", "Pandas", "DuckDB", "PostgreSQL", "Gradio"],
      bullets: [
        "Designed an agentic data-analysis copilot using Llama 3 and LangGraph to translate natural-language questions into SQL and Python workflows, coordinating schema discovery, query generation, validation, execution, and visualization.",
        "Configured tool calling, structured outputs, conversation memory, human-approval checkpoints, and evaluation for SQL correctness, task completion, and response quality to improve reliability of generated analytics.",
      ],
    },
    {
      title: "Multimodal Document Intelligence",
      tech: ["Python", "Llama 3", "Hugging Face", "LayoutLMv3", "OCR", "OpenCV", "PyMuPDF", "Streamlit"],
      bullets: [
        "Created a multimodal document-intelligence pipeline using OCR, LayoutLMv3, OpenCV, and transformer models to classify scanned forms and extract structured fields from invoices and business documents.",
        "Validated low-confidence extractions using confidence scoring, validation rules, and human-in-the-loop review, measuring field-level precision, recall, and F1-score across varied document layouts.",
      ],
    },
  ],

  // Exact education from EDUCATION section of the resume
  education: [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Information Systems",
      location: "Boston, MA",
    },
  ],
};
