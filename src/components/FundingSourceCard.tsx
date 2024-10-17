import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Banknote, DollarSign } from 'lucide-react';

interface FundingSource {
  id: number;
  name: string;
  type: string;
  amount: string;
}

interface FundingSourceCardProps {
  source: FundingSource;
}

const FundingSourceCard: React.FC<FundingSourceCardProps> = ({ source }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Banknote className="mr-2" />
          {source.name}
        </CardTitle>
        <CardDescription>{source.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold flex items-center">
          <DollarSign className="mr-1" />
          {source.amount}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

export default FundingSourceCard;