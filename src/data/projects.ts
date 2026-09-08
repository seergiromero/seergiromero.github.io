export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  links: {
    demo?: {
      label: string;
      url: string;
    }[];
    repository?: string;
    post?: string;
  };
  image?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'follow-me-for-mir',
    title: 'Follow Me for MiR',
    tagline: 'Person following for an autonomous mobile robot',
    description:
      "Final degree project awarded 10/10 at Mobile Industrial Robots (MiR). A real-time system that lets an autonomous mobile robot follow a selected person, combining AI person detection, pose estimation, tracking and re-identification with real-time communication between a NUC8 PC and the robot to transmit the person's distance coordinates.",
    technologies: [
      'Computer Vision',
      'Person Detection',
      'Pose Estimation',
      'Tracking',
      'Re-identification',
      'Real-time Communication',
      'NUC8',
    ],
    links: {
      demo: [
        {
          label: 'Re-identification demo',
          url: 'https://youtu.be/rv9lCoufiYA',
        },
        {
          label: 'Follow demo & control UI',
          url: 'https://youtu.be/5t-xc7r6l0A',
        },
      ],
      post: 'https://www.linkedin.com/posts/sergi-romero-valderas_im-thrilled-to-share-that-the-past-july-activity-7278497217051570177-5Zux',
    },
    image: '/images/follow-me.png',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'frontier-exploration',
    title: 'Frontier & Entropy-Based Exploration for SLAM Mapping',
    tagline: 'Autonomous mapping of unknown environments',
    description:
      "Master's practicum (Robotics and Automatic Control, Perception and Cognition in Robotic Exploration). An autonomous exploration stack for a mobile robot in an unknown environment: SLAM builds the map online, a custom RRT*-based exploration node samples next-best-view candidates scored with Shannon-entropy information gain and a structure-aware reward, and Nav2 executes the chosen goals. Includes a tuned frontier-based baseline (explore_lite) for comparison.",
    technologies: [
      'ROS 2 (Jazzy)',
      'Nav2',
      'Gazebo',
      'SLAM',
      'C++',
      'RRT*',
      'Frontier-based exploration',
      'Entropy-based information gain',
    ],
    links: {
      demo: [
        {
          label: 'Baseline demo (explore_lite)',
          url: 'https://github.com/user-attachments/assets/b8501510-474f-4c1b-b20c-6d29f9695f2a',
        },
        {
          label: 'Custom demo (entropy_explorer)',
          url: 'https://github.com/user-attachments/assets/57e1d1e4-61d1-4579-8ce0-f46f52691abe',
        },
      ],
      repository: 'https://github.com/seergiromero/Frontier-exploration',
    },
    image: '/images/frontier_exploration.png',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'ur-ros-chess',
    title: 'UR Chess Robot',
    tagline: 'A UR3 cobot that plays chess against a human',
    description:
      "Master's final project for the ROS course. A human plays a full chess match against a UR3 robot (or the robot against itself) over ROS 2. The board state is tracked from a RealSense camera through ArUco markers, and a pick-and-place action pipeline drives the arm — including special moves such as captures and castling, with a terminal interface acting as game master.",
    technologies: [
      'ROS 2',
      'UR3',
      'Gazebo',
      'RViz',
      'RealSense',
      'ArUco markers',
      'Inverse kinematics',
      'C++',
    ],
    links: {
      demo: [
        {
          label: 'Final work README',
          url: 'https://github.com/seergiromero/UR-ROS-Project/blob/main/final_work/README.md',
        },
      ],
      repository: 'https://github.com/seergiromero/UR-ROS-Project',
    },
    image: '/images/ur-chess-gazebo.jpeg',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'dental-implant-classification',
    title: 'Automatic Classification of Dental Implants',
    tagline: 'CNN-based dental implant brand classification from X-ray images',
    description:
      "Master's project focused on the automatic classification of dental implant brands from X-ray images using a Convolutional Neural Network (CNN). The system classifies six implant brands—Neodent, Straumann, Bicon, Biomet 3i, Zimmer, and BioHorizons—using image preprocessing, domain-specific data augmentation and a custom three-block CNN architecture. The model was evaluated using 5-fold cross-validation and Grad-CAM to interpret the visual features driving its predictions.",
    technologies: [
      'Deep Learning',
      'Computer Vision',
      'CNN',
      'Medical Imaging',
      'TensorFlow',
      'Keras',
      'Data Augmentation',
      '5-Fold Cross-Validation',
      'Grad-CAM',
    ],
    links: {
      post: 'https://drive.google.com/file/d/1E2OQ-_lp2L56OEDjZ_96_42-Him4oofg/view',
    },
    image: '/images/cnn.png',
    status: 'completed',
    featured: false,
  },
  {
    slug: 'rids-ros2-intrusion-detection',
    title: 'RIDS - ROS 2 Network Intrusion Detection System',
    tagline: 'Detecting rogue nodes on ROS 2/DDS discovery traffic',
    description:
      "A passive intrusion-detection research prototype for ROS 2/DDS networks. RIDS observes RTPS discovery traffic, reconstructs the communication graph of a mobile-robot system, and compares it with a trusted baseline to identify rogue participants, unexpected endpoints, and unauthorized use of security-sensitive topics such as /cmd_vel. Detection runs through deterministic rules with severity-aware, deduplicated alerts in JSONL. Includes an end-to-end TurtleBot3/Nav2 simulation demonstration and 196 tests.",
    technologies: [
      'ROS 2 (Jazzy)',
      'DDS/RTPS',
      'Python',
      'Scapy',
      'NetworkX',
      'Nav2',
      'Gazebo',
      'Network Security',
      'JSONL',
    ],
    links: {
      demo: [
        {
          label: 'RTPS discovery graph view',
          url: 'https://github.com/seergiromero/ROS2-Intrusion-Detection/blob/main/docs/pictures/graph.png',
        },
        {
          label: 'End-to-end demo',
          url: 'https://github.com/seergiromero/ROS2-Intrusion-Detection/blob/main/docs/pictures/cmd.png',
        },
      ],
      repository: 'https://github.com/seergiromero/ROS2-Intrusion-Detection',
    },
    image: '/images/rids-cmd.png',
    status: 'completed',
    featured: false,
  },
];