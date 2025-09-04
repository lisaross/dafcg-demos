export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  note: string;
  required: boolean;
}

export interface ChecklistSection {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export interface TimeEstimate {
  icon: string;
  text: string;
}

export interface ChecklistData {
  title: string;
  description: string;
  timeEstimates: TimeEstimate[];
  sections: ChecklistSection[];
  totalItems: number;
  minimumRequired: number;
  readyThreshold: number;
}

export const checklistData: ChecklistData = {
  title: "Survey Preparation Checklist",
  description: "Before starting the DAFCG Benchmarking Study survey, please gather these documents and information. This will make your experience much smoother!",
  timeEstimates: [
    { icon: "clock", text: "5 Min Prep" },
    { icon: "timer", text: "10 Min Survey" },
    { icon: "gift", text: "Valuable Report" }
  ],
  sections: [
    {
      id: "essential",
      title: "Essential Documents",
      icon: "file-text",
      items: [
        {
          id: "pl-statement",
          title: "2024 Profit & Loss Statement",
          description: "Your most recent P&L or revenue report showing total annual revenue and major expense categories",
          note: "If you don't have a formal P&L, a simple revenue summary works fine",
          required: true
        },
        {
          id: "employee-roster",
          title: "Employee Roster or Org Chart",
          description: "Current team structure showing partners, consultants, and support staff",
          note: "A simple headcount by role is sufficient",
          required: true
        },
        {
          id: "billing-rates",
          title: "Billing Rate Information",
          description: "Standard hourly rates for different consultant levels (Partner, Senior, Junior)",
          note: "Average or typical rates are fine - we need ranges, not exact figures",
          required: true
        }
      ]
    },
    {
      id: "helpful",
      title: "Helpful Information (if available)",
      icon: "trending-up",
      items: [
        {
          id: "client-list",
          title: "Client List with Project Values",
          description: "Recent client projects with approximate values (can anonymize client names)",
          note: "Helps us calculate average project size and client concentration",
          required: false
        },
        {
          id: "utilization-data",
          title: "Utilization or Time Tracking Data",
          description: "Recent utilization report or billable hours data",
          note: "If unavailable, we'll ask for your best estimate",
          required: false
        },
        {
          id: "sales-pipeline",
          title: "Sales Pipeline or CRM Data",
          description: "Information about win rates, sales cycle length, or proposal success",
          note: "Even rough estimates help build industry benchmarks",
          required: false
        }
      ]
    },
    {
      id: "reference",
      title: "Quick Reference Numbers",
      icon: "target",
      items: [
        {
          id: "business-metrics",
          title: "Key Business Metrics",
          description: "Have these approximate numbers ready: client retention rate, employee turnover, growth targets",
          note: "Best estimates are perfectly acceptable for these strategic metrics",
          required: false
        },
        {
          id: "contact-info",
          title: "Contact Information",
          description: "Primary contact details for follow-up and report delivery",
          note: "We'll send your personalized benchmarking report to this contact",
          required: true
        }
      ]
    }
  ],
  totalItems: 8,
  minimumRequired: 3,
  readyThreshold: 6
};