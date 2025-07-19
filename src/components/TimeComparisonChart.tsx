import { Clock, TrendingUp, DollarSign } from "lucide-react";

interface ProgressBarProps {
  label: string;
  hours: number;
  maxHours: number;
  variant: "current" | "automated";
}

const ProgressBar = ({ label, hours, maxHours, variant }: ProgressBarProps) => {
  const percentage = (hours / maxHours) * 100;
  const barColor = variant === "current" ? "bg-red-500" : "bg-green-500";
  const bgColor = variant === "current" ? "bg-red-100" : "bg-green-100";
  
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex-1 mr-6">
        <div className="text-body-sm text-foreground mb-2">{label}</div>
        <div className={`w-full h-3 ${bgColor} rounded-full overflow-hidden`}>
          <div 
            className={`h-full ${barColor} rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="text-body-sm font-semibold text-foreground min-w-[4rem] text-right">
        {hours} hours/week
      </div>
    </div>
  );
};

export const TimeComparisonChart = () => {
  const currentProcessData = [
    { label: "Document sorting & verification", hours: 5 },
    { label: "Admin work & file management", hours: 3 },
    { label: "Follow-up emails & communication", hours: 6 },
  ];

  const automatedProcessData = [
    { label: "Document processing (review only)", hours: 2 },
    { label: "Admin work (significantly reduced)", hours: 1 },
    { label: "Follow-up emails (automated)", hours: 3 },
  ];

  const currentTotal = currentProcessData.reduce((sum, item) => sum + item.hours, 0);
  const automatedTotal = automatedProcessData.reduce((sum, item) => sum + item.hours, 0);
  const hoursSaved = currentTotal - automatedTotal;
  const percentageReduced = Math.round((hoursSaved / currentTotal) * 100);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-display-lg text-foreground mb-6">
          Reclaim Your Week
        </h2>
        <p className="text-body-lg text-muted-foreground">
          See how Skyla transforms your weekly workflow from chaos to control
        </p>
      </div>

      <div className="space-y-12">
        {/* Current State */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-red-600 mr-3" />
            <h3 className="text-display-sm text-red-700 font-semibold">
              Manual Process (Current State)
            </h3>
          </div>
          
          <div className="space-y-4 mb-6">
            {currentProcessData.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                hours={item.hours}
                maxHours={6}
                variant="current"
              />
            ))}
          </div>
          
          <div className="border-t border-red-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-body-lg font-semibold text-red-700">Total Admin Time:</span>
              <span className="text-display-sm font-bold text-red-700">{currentTotal} hours/week</span>
            </div>
          </div>
        </div>

        {/* Automated State */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-display-sm text-green-700 font-semibold">
              With Skyla (Automated)
            </h3>
          </div>
          
          <div className="space-y-4 mb-6">
            {automatedProcessData.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                hours={item.hours}
                maxHours={6}
                variant="automated"
              />
            ))}
          </div>
          
          <div className="border-t border-green-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-body-lg font-semibold text-green-700">Total Admin Time:</span>
              <span className="text-display-sm font-bold text-green-700">{automatedTotal} hours/week</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="gradient-hero rounded-2xl p-8 text-primary-foreground">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-display-xl font-bold">{hoursSaved} Hours</div>
              <div className="text-body-md opacity-90">Saved Per Week</div>
            </div>
            <div className="space-y-2">
              <div className="text-display-xl font-bold">$120k</div>
              <div className="text-body-md opacity-90">Annual Opportunity Cost</div>
            </div>
            <div className="space-y-2">
              <div className="text-display-xl font-bold">{percentageReduced}%</div>
              <div className="text-body-md opacity-90">Admin Work Eliminated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};