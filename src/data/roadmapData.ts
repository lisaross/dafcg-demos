export interface ProjectMeta {
  timeline: string;
  target: string;
  deliverable: string;
  team: string;
}

export interface Phase {
  title: string;
  activities: string[];
  metric: string;
  status: 'completed' | 'active' | 'future';
  span: 1 | 2 | 3 | 4 | 5;
  isEmpty?: boolean;
}

export interface Pillar {
  number: number;
  name: string;
  owner: string;
  phases: Phase[];
}

export interface Milestone {
  date: string;
  description: string;
}

export interface RoadmapData {
  projectMeta: ProjectMeta;
  months: string[];
  pillars: Pillar[];
  milestones: Milestone[];
}

export const roadmapData: RoadmapData = {
  projectMeta: {
    timeline: "Aug - Dec 2025",
    target: "~100 Participants",
    deliverable: "Industry Report",
    team: "Mack (~20hrs) + Lisa"
  },
  months: ["AUG (17-31)", "SEP", "OCT", "NOV", "DEC"],
  pillars: [
    {
      number: 1,
      name: "ACQUISITION",
      owner: "Lead: Mack",
      phases: [
        {
          title: "Infrastructure & Test",
          activities: [
            "Set up Active Campaign",
            "Deploy landing page", 
            "Test with ~205 prospects"
          ],
          metric: "~205 test",
          status: "active",
          span: 1
        },
        {
          title: "Scale Outreach",
          activities: [
            "Add ~500 new prospects",
            "LinkedIn campaigns",
            "Email sequences",
            "Partner channels"
          ],
          metric: "~+500",
          status: "future",
          span: 1
        },
        {
          title: "Full Scale Operations",
          activities: [
            "Add ~800+ prospects",
            "Referral programs",
            "Speaking engagements",
            "Close remaining participants"
          ],
          metric: "~1,500+ total",
          status: "future",
          span: 2
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        }
      ]
    },
    {
      number: 2,
      name: "GATHERING",
      owner: "Lead: Mack + Lisa",
      phases: [
        {
          title: "Setup Survey Tool",
          activities: [
            "Create survey flow",
            "Test data collection",
            "Consent forms"
          ],
          metric: "Survey ready",
          status: "active",
          span: 1
        },
        {
          title: "Active Data Collection",
          activities: [
            "Participant onboarding",
            "File submissions",
            "Follow-ups and support",
            "Data quality checks"
          ],
          metric: "~100 firms",
          status: "future",
          span: 3
        },
        {
          title: "Final Collection",
          activities: [
            "Last submissions",
            "Data validation",
            "Thank participants"
          ],
          metric: "Closed",
          status: "future",
          span: 1
        }
      ]
    },
    {
      number: 3,
      name: "PROCESSING",
      owner: "Lead: Lisa",
      phases: [
        {
          title: "Infrastructure Build",
          activities: [
            "Setup data warehouse pipeline",
            "Cloud storage buckets",
            "Extraction scripts",
            "Test with friendlies"
          ],
          metric: "Data warehouse",
          status: "active",
          span: 2
        },
        {
          title: "Production Processing",
          activities: [
            "Process incoming files",
            "Data normalization",
            "Quality assurance",
            "Build comparability framework"
          ],
          metric: "Automated",
          status: "future",
          span: 2
        },
        {
          title: "Finalize Data",
          activities: [
            "Final validation",
            "Lock dataset",
            "Prepare for analysis"
          ],
          metric: "Complete",
          status: "future",
          span: 1
        }
      ]
    },
    {
      number: 4,
      name: "ANALYSIS",
      owner: "Lead: Mack",
      phases: [
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "Deep Analysis",
          activities: [
            "Statistical analysis",
            "Industry benchmarks",
            "Pattern identification",
            "Case studies",
            "Key insights extraction"
          ],
          metric: "Insights",
          status: "future",
          span: 2
        }
      ]
    },
    {
      number: 5,
      name: "REPORTING",
      owner: "Lead: Mack",
      phases: [
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "",
          activities: [],
          metric: "",
          status: "future",
          span: 1,
          isEmpty: true
        },
        {
          title: "Report Creation",
          activities: [
            "Write full report",
            "Create visualizations",
            "Executive summary",
            "Distribution"
          ],
          metric: "Dec 31",
          status: "future",
          span: 1
        }
      ]
    }
  ],
  milestones: [
    { date: "Aug 18", description: "Mack Returns" },
    { date: "Aug 25", description: "Infrastructure Ready" },
    { date: "Aug 31", description: "Test Complete (~10-15)" },
    { date: "Sep 15", description: "~30 Participants" },
    { date: "Sep 30", description: "~60 Participants" },
    { date: "Oct 31", description: "~100 Participants" },
    { date: "Nov 30", description: "Analysis Complete" },
    { date: "Dec 31", description: "Report Delivered" }
  ]
};