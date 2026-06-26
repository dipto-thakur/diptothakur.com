import type { Project } from '@/types';

export const projects: Project[] = [
  {
      id: 'proj-1',
      slug: 'distributed-task-queue',
      logo: "https://ik.imagekit.io/xonqtzzvs/hhclogo.png",
            title: 'Distributed Task Queue',
    
      summary:
        'A resilient event-driven task processing platform built with Go and Redis Streams, reliably executing 50k+ background jobs daily with automatic retries, observability, and horizontal scalability.',
    
      description: `Legacy cron-based workflows were becoming increasingly unreliable as the platform scaled, leading to duplicate executions, missed jobs, and poor operational visibility.
    
    The objective was to replace those workflows with a distributed queue capable of reliable processing, fault tolerance, and horizontal scaling without introducing unnecessary operational complexity.
    
    The system was designed around Redis Streams consumer groups with stateless Go workers running on Kubernetes. Features such as retry policies, exponential backoff, dead-letter queues, idempotent processing, health monitoring, structured logging, and Prometheus metrics were built directly into the platform, allowing operators to understand system health in real time while minimizing production incidents.`,
    
      status: 'active',
    
      role: 'Lead Engineer',
    
      startDate: '2023-06-01',
    
      technologies: [
        'Go',
        'Redis Streams',
        'Docker',
        'Kubernetes',
        'Prometheus',
        'Grafana'
      ],
    
      categories: [
        'Backend',
        'Infrastructure'
      ],
    
      images: [
        {
          src: '',
          alt: 'Distributed task queue architecture',
          caption: 'System architecture'
        },
        {
          src: '',
          alt: 'Worker processing metrics dashboard',
          caption: 'Real-time monitoring'
        }
      ],
    
      externalLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/placeholder/task-queue',
          type: 'github'
        },
        {
          label: 'Live Demo',
          url: 'https://taskqueue-demo.vercel.app',
          type: 'live'
        }
      ],
    
      features: [
        'Distributed worker architecture',
        'Redis Streams consumer groups',
        'Automatic retries with exponential backoff',
        'Dead-letter queue support',
        'Horizontal auto scaling',
        'Real-time monitoring',
        'Structured logging',
        'Health checks',
        'Prometheus metrics',
        'Grafana dashboards',
        'Idempotent job processing',
        'Graceful worker shutdown'
      ],
    
      architecture: [
        'API Producer',
        'Redis Streams',
        'Consumer Groups',
        'Worker Pool',
        'Dead Letter Queue',
        'Prometheus',
        'Grafana'
      ],
    
      challenges: [
        'Guaranteeing reliable processing without distributed transactions.',
        'Preventing cascading failures during downstream service degradation.',
        'Scaling workers dynamically while maintaining predictable throughput.',
        'Providing meaningful operational visibility with minimal runtime overhead.'
      ],
    
      solutions: [
        'Implemented idempotency keys combined with Redis acknowledgements for reliable processing.',
        'Introduced adaptive concurrency and intelligent retry strategies.',
        'Containerized workers with Kubernetes Horizontal Pod Autoscaling.',
        'Collected application and infrastructure metrics using Prometheus with Grafana dashboards.'
      ],
    
      tradeOffs: [
        'Accepted at-least-once delivery in exchange for higher availability.',
        'Chose Redis Streams over Kafka to reduce infrastructure complexity.',
        'Used application-level idempotency instead of distributed transactions.'
      ],
    
      outcomes: [
        'Reduced p99 processing latency by over 90%.',
        'Eliminated missed scheduled jobs after production rollout.',
        'Maintained zero production downtime for over fourteen months.',
        'Reduced incident recovery time by approximately 75%.'
      ],
    
      metrics: [
        {
          value: '50k+',
          label: 'Jobs / Day'
        },
        {
          value: '380ms',
          label: 'P99 Latency'
        },
        {
          value: '99.99%',
          label: 'Availability'
        },
        {
          value: '14 Mo',
          label: 'Zero Downtime'
        }
      ],
    
      timeline: {
        duration: '4 Months',
        year: '2023'
      },
    
      lessonsLearned: [
        'Reliability should be designed before scalability.',
        'Observability is a product feature rather than an operational afterthought.',
        'Simple infrastructure with strong engineering practices often outperforms overly complex architectures.',
        'Idempotency significantly simplifies failure recovery in distributed systems.'
      ],
    
      nextSteps: [
        'Multi-region replication.',
        'Priority queues.',
        'Scheduled jobs.',
        'Workflow orchestration.',
        'Web dashboard for operators.'
      ],
    
      seoKeywords: [
        'Distributed Systems',
        'Go',
        'Redis Streams',
        'Kubernetes',
        'Prometheus',
        'Backend Engineering'
      ],
    
      featured: true,
  },
  {
    id: 'proj-2',
    slug: 'distributed-task-queue',
    logo: "https://ik.imagekit.io/xonqtzzvs/hhclogo.png",
    title: 'Distributed Task Queue',
  
    summary:
      'A resilient event-driven task processing platform built with Go and Redis Streams, reliably executing 50k+ background jobs daily with automatic retries, observability, and horizontal scalability.',
  
    description: `Legacy cron-based workflows were becoming increasingly unreliable as the platform scaled, leading to duplicate executions, missed jobs, and poor operational visibility.
  
  The objective was to replace those workflows with a distributed queue capable of reliable processing, fault tolerance, and horizontal scaling without introducing unnecessary operational complexity.
  
  The system was designed around Redis Streams consumer groups with stateless Go workers running on Kubernetes. Features such as retry policies, exponential backoff, dead-letter queues, idempotent processing, health monitoring, structured logging, and Prometheus metrics were built directly into the platform, allowing operators to understand system health in real time while minimizing production incidents.`,
  
    status: 'active',
  
    role: 'Lead Engineer',
  
    startDate: '2023-06-01',
  
    technologies: [
      'Go',
      'Redis Streams',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana'
    ],
  
    categories: [
      'Backend',
      'Infrastructure'
    ],
  
    images: [
      {
        src: '',
        alt: 'Distributed task queue architecture',
        caption: 'System architecture'
      },
      {
        src: '',
        alt: 'Worker processing metrics dashboard',
        caption: 'Real-time monitoring'
      }
    ],
  
    externalLinks: [
      {
        label: 'GitHub',
        url: 'https://github.com/placeholder/task-queue',
        type: 'github'
      },
      {
        label: 'Live Demo',
        url: 'https://taskqueue-demo.vercel.app',
        type: 'live'
      }
    ],
  
    features: [
      'Distributed worker architecture',
      'Redis Streams consumer groups',
      'Automatic retries with exponential backoff',
      'Dead-letter queue support',
      'Horizontal auto scaling',
      'Real-time monitoring',
      'Structured logging',
      'Health checks',
      'Prometheus metrics',
      'Grafana dashboards',
      'Idempotent job processing',
      'Graceful worker shutdown'
    ],
  
    architecture: [
      'API Producer',
      'Redis Streams',
      'Consumer Groups',
      'Worker Pool',
      'Dead Letter Queue',
      'Prometheus',
      'Grafana'
    ],
  
    challenges: [
      'Guaranteeing reliable processing without distributed transactions.',
      'Preventing cascading failures during downstream service degradation.',
      'Scaling workers dynamically while maintaining predictable throughput.',
      'Providing meaningful operational visibility with minimal runtime overhead.'
    ],
  
    solutions: [
      'Implemented idempotency keys combined with Redis acknowledgements for reliable processing.',
      'Introduced adaptive concurrency and intelligent retry strategies.',
      'Containerized workers with Kubernetes Horizontal Pod Autoscaling.',
      'Collected application and infrastructure metrics using Prometheus with Grafana dashboards.'
    ],
  
    tradeOffs: [
      'Accepted at-least-once delivery in exchange for higher availability.',
      'Chose Redis Streams over Kafka to reduce infrastructure complexity.',
      'Used application-level idempotency instead of distributed transactions.'
    ],
  
    outcomes: [
      'Reduced p99 processing latency by over 90%.',
      'Eliminated missed scheduled jobs after production rollout.',
      'Maintained zero production downtime for over fourteen months.',
      'Reduced incident recovery time by approximately 75%.'
    ],
  
    metrics: [
      {
        value: '50k+',
        label: 'Jobs / Day'
      },
      {
        value: '380ms',
        label: 'P99 Latency'
      },
      {
        value: '99.99%',
        label: 'Availability'
      },
      {
        value: '14 Mo',
        label: 'Zero Downtime'
      }
    ],
  
    timeline: {
      duration: '4 Months',
      year: '2023'
    },
  
    lessonsLearned: [
      'Reliability should be designed before scalability.',
      'Observability is a product feature rather than an operational afterthought.',
      'Simple infrastructure with strong engineering practices often outperforms overly complex architectures.',
      'Idempotency significantly simplifies failure recovery in distributed systems.'
    ],
  
    nextSteps: [
      'Multi-region replication.',
      'Priority queues.',
      'Scheduled jobs.',
      'Workflow orchestration.',
      'Web dashboard for operators.'
    ],
  
    seoKeywords: [
      'Distributed Systems',
      'Go',
      'Redis Streams',
      'Kubernetes',
      'Prometheus',
      'Backend Engineering'
    ],
  
    featured: true,
  },
  {
    id: 'proj-3',
    slug: 'distributed-task-queue',
    logo: "https://ik.imagekit.io/xonqtzzvs/hhclogo.png",
    title: 'Distributed Task Queue',
  
    summary:
      'A resilient event-driven task processing platform built with Go and Redis Streams, reliably executing 50k+ background jobs daily with automatic retries, observability, and horizontal scalability.',
  
    description: `Legacy cron-based workflows were becoming increasingly unreliable as the platform scaled, leading to duplicate executions, missed jobs, and poor operational visibility.
  
  The objective was to replace those workflows with a distributed queue capable of reliable processing, fault tolerance, and horizontal scaling without introducing unnecessary operational complexity.
  
  The system was designed around Redis Streams consumer groups with stateless Go workers running on Kubernetes. Features such as retry policies, exponential backoff, dead-letter queues, idempotent processing, health monitoring, structured logging, and Prometheus metrics were built directly into the platform, allowing operators to understand system health in real time while minimizing production incidents.`,
  
    status: 'active',
  
    role: 'Lead Engineer',
  
    startDate: '2023-06-01',
  
    technologies: [
      'Go',
      'Redis Streams',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana'
    ],
  
    categories: [
      'Backend',
      'Infrastructure'
    ],
  
    images: [
      {
        src: '',
        alt: 'Distributed task queue architecture',
        caption: 'System architecture'
      },
      {
        src: '',
        alt: 'Worker processing metrics dashboard',
        caption: 'Real-time monitoring'
      }
    ],
  
    externalLinks: [
      {
        label: 'GitHub',
        url: 'https://github.com/placeholder/task-queue',
        type: 'github'
      },
      {
        label: 'Live Demo',
        url: 'https://taskqueue-demo.vercel.app',
        type: 'live'
      }
    ],
  
    features: [
      'Distributed worker architecture',
      'Redis Streams consumer groups',
      'Automatic retries with exponential backoff',
      'Dead-letter queue support',
      'Horizontal auto scaling',
      'Real-time monitoring',
      'Structured logging',
      'Health checks',
      'Prometheus metrics',
      'Grafana dashboards',
      'Idempotent job processing',
      'Graceful worker shutdown'
    ],
  
    architecture: [
      'API Producer',
      'Redis Streams',
      'Consumer Groups',
      'Worker Pool',
      'Dead Letter Queue',
      'Prometheus',
      'Grafana'
    ],
  
    challenges: [
      'Guaranteeing reliable processing without distributed transactions.',
      'Preventing cascading failures during downstream service degradation.',
      'Scaling workers dynamically while maintaining predictable throughput.',
      'Providing meaningful operational visibility with minimal runtime overhead.'
    ],
  
    solutions: [
      'Implemented idempotency keys combined with Redis acknowledgements for reliable processing.',
      'Introduced adaptive concurrency and intelligent retry strategies.',
      'Containerized workers with Kubernetes Horizontal Pod Autoscaling.',
      'Collected application and infrastructure metrics using Prometheus with Grafana dashboards.'
    ],
  
    tradeOffs: [
      'Accepted at-least-once delivery in exchange for higher availability.',
      'Chose Redis Streams over Kafka to reduce infrastructure complexity.',
      'Used application-level idempotency instead of distributed transactions.'
    ],
  
    outcomes: [
      'Reduced p99 processing latency by over 90%.',
      'Eliminated missed scheduled jobs after production rollout.',
      'Maintained zero production downtime for over fourteen months.',
      'Reduced incident recovery time by approximately 75%.'
    ],
  
    metrics: [
      {
        value: '50k+',
        label: 'Jobs / Day'
      },
      {
        value: '380ms',
        label: 'P99 Latency'
      },
      {
        value: '99.99%',
        label: 'Availability'
      },
      {
        value: '14 Mo',
        label: 'Zero Downtime'
      }
    ],
  
    timeline: {
      duration: '4 Months',
      year: '2023'
    },
  
    lessonsLearned: [
      'Reliability should be designed before scalability.',
      'Observability is a product feature rather than an operational afterthought.',
      'Simple infrastructure with strong engineering practices often outperforms overly complex architectures.',
      'Idempotency significantly simplifies failure recovery in distributed systems.'
    ],
  
    nextSteps: [
      'Multi-region replication.',
      'Priority queues.',
      'Scheduled jobs.',
      'Workflow orchestration.',
      'Web dashboard for operators.'
    ],
  
    seoKeywords: [
      'Distributed Systems',
      'Go',
      'Redis Streams',
      'Kubernetes',
      'Prometheus',
      'Backend Engineering'
    ],
  
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
