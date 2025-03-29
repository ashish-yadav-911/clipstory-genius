
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  icon: React.ReactNode;
  className?: string;
}

const StatsCard = ({ title, value, change, icon, className }: StatsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {change && (
              <div className="flex items-center mt-2">
                {change.trend === 'up' && (
                  <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                )}
                {change.trend === 'down' && (
                  <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
                )}
                <span className={cn(
                  "text-xs",
                  change.trend === 'up' && "text-green-500",
                  change.trend === 'down' && "text-red-500",
                  change.trend === 'neutral' && "text-muted-foreground"
                )}>
                  {change.value}% from last month
                </span>
              </div>
            )}
          </div>
          
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
