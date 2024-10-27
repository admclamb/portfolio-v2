import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Contribution } from "@/config/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

type ContributionCardProps = {
  contribution: Contribution;
  number?: number;
  className?: string;
};

const ContributionCard = ({
  contribution,
  number,
  className,
}: ContributionCardProps) => {
  return (
    <Card className="relative w-72 p-5">
      <motion.h3 className="text-lg font-bold tracking-tight">
        {contribution.company}
      </motion.h3>
      <motion.p className="text-muted-foreground mt-5">
        {contribution.description}
      </motion.p>
      <motion.a
        href={contribution.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "link" }), "mt-6 pl-0")}
      >
        Go To Link <ExternalLink />
      </motion.a>
    </Card>
  );
};

export default ContributionCard;