
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-sm bg-white">
      <CardContent className="p-8">
        <Quote className="h-8 w-8 text-gray-300 mb-6" />
        <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
          "{quote}"
        </blockquote>
        <footer className="text-sm font-medium text-gray-500">
          — {author}
        </footer>
      </CardContent>
    </Card>
  );
};
