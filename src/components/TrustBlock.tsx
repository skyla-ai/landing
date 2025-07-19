
import { Card, CardContent } from "@/components/ui/card";

interface TrustBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TrustBlock = ({ icon, title, description }: TrustBlockProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-300 hover:border-gray-300">
      <CardContent className="p-8">
        <div className="mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
