import React from 'react';

import { Badge } from './ui/badge';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="overflow-hidden px-2 text-xs whitespace-nowrap md:text-sm"
      title={skill}
    >
      {skill}
    </Badge>
  );
}
