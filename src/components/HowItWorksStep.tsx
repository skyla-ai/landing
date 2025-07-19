
interface HowItWorksStepProps {
  step: string;
  title: string;
  description: string;
  isReversed: boolean;
  imageSrc?: string;
}

export const HowItWorksStep = ({ step, title, description, isReversed, imageSrc }: HowItWorksStepProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold text-lg mb-6">
          {step}
        </div>
        <h3 className="text-display-md text-foreground mb-4">
          {title}
        </h3>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1">
        {imageSrc ? (
          <div className="w-full rounded-2xl overflow-hidden shadow-soft border border-card-border">
            <img 
              src={imageSrc} 
              alt={`Step ${step}: ${title}`}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-background-soft rounded-2xl border border-card-border flex items-center justify-center shadow-soft">
            <span className="text-body-sm text-muted-foreground">Visual placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
};
