import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase, type WaitlistEntry } from "@/lib/supabase";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

export const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamSize: "",
    challenges: "",
    betaTesting: ""
  });

  const totalSteps = 4;

  const resetDialog = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setFormData({
      fullName: "",
      email: "",
      teamSize: "",
      challenges: "",
      betaTesting: ""
    });
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset dialog when it's closed
      resetDialog();
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.fullName.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.teamSize !== "";
      case 3:
        return formData.challenges.trim() !== "";
      case 4:
        return formData.betaTesting !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid(currentStep) || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const waitlistData: Omit<WaitlistEntry, 'id' | 'created_at'> = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        team_size: formData.teamSize,
        challenges: formData.challenges.trim(),
        beta_testing: formData.betaTesting,
      };

      const { error } = await supabase
        .from('waitlist')
        .insert([waitlistData]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComplete = () => {
    setOpen(false);
    resetDialog();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (submitError) {
      setSubmitError(null);
    }
  };

  const renderProgressDots = () => {
    return (
      <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i < currentStep ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Let's start with the basics</h2>
        <p className="text-muted-foreground">We'll use this to personalize your experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="Your name"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          What best describes your current situation? <span className="text-red-500">*</span>
        </h2>
        <p className="text-muted-foreground">This helps us understand your specific needs</p>
      </div>
      
      <RadioGroup
        value={formData.teamSize}
        onValueChange={(value) => handleInputChange("teamSize", value)}
        className="space-y-4"
        required
      >
        {[
          { value: "1-5", label: "Mortgage team: 1-5 people" },
          { value: "6-15", label: "Mortgage team: 6-15 people" },
          { value: "16-25", label: "Mortgage team: 16-25 people" },
          { value: "26+", label: "Mortgage team: 26+ people" }
        ].map((option) => (
          <div key={option.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-base font-medium cursor-pointer flex-1">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          What are the top 3 challenges you are hoping Skyla agent would solve for you? <span className="text-red-500">*</span>
        </h2>
        <p className="text-muted-foreground">Tell us about your email management and client communication pain points</p>
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder="e.g., Spending hours on repetitive responses, missing important emails, inconsistent follow-ups..."
          value={formData.challenges}
          onChange={(e) => handleInputChange("challenges", e.target.value)}
          className="min-h-[120px] resize-none"
          required
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Interested in beta testing? <span className="text-red-500">*</span>
        </h2>
        <p className="text-muted-foreground">Help us perfect the platform before launch</p>
      </div>
      
      <RadioGroup
        value={formData.betaTesting}
        onValueChange={(value) => handleInputChange("betaTesting", value)}
        className="space-y-4"
        required
      >
        {[
          { value: "absolutely", label: "Absolutely! I want early access and to provide feedback" },
          { value: "possibly", label: "Possibly, depending on timing and features" },
          { value: "wait", label: "I'd prefer to wait for the full release" }
        ].map((option) => (
          <div key={option.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-base font-medium cursor-pointer flex-1">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  const renderSubmittedState = () => (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">You're all set!</h2>
        <p className="text-muted-foreground">Thank you for joining the waitlist. We'll be in touch soon with updates on Skyla's launch.</p>
      </div>
      
      <div className="p-6 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          We'll use your information to keep you updated on our progress and ensure Skyla meets your specific needs when it launches.
        </p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    if (isSubmitted) {
      return renderSubmittedState();
    }
    
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] p-0">
        <DialogTitle className="sr-only">Join Waitlist - Secure Your Spot</DialogTitle>
        <DialogDescription className="sr-only">Join the Skyla waitlist to get early access</DialogDescription>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Secure Your Spot</h1>
            <p className="text-muted-foreground">
              Help us build the perfect solution for you. This takes just 2 minutes and helps us prioritize features that matter most.
            </p>
          </div>

          {!isSubmitted && renderProgressDots()}
          
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {!isSubmitted ? (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {currentStep > 1 && (
                  <Button 
                    variant="ghost" 
                    onClick={handleBack}
                    className="flex items-center space-x-2"
                    disabled={isSubmitting}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back</span>
                  </Button>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  {currentStep} of {totalSteps}
                </span>
                
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={handleNext}
                    disabled={!isStepValid(currentStep)}
                    className="flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={!isStepValid(currentStep) || isSubmitting}
                    className="flex items-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button 
                onClick={handleComplete}
                className="flex items-center space-x-2"
              >
                <span>Complete</span>
              </Button>
            </div>
          )}
          
          {/* Progress bar at bottom */}
          {!isSubmitted && (
            <div className="mt-6">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Error message */}
          {submitError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};