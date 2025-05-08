import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import { cardBase, cardGradient, cardHover } from '@/styles/card-decorations';
import { Badge } from './ui/badge';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.teamMembers.map((member, idx) => (
          <Card
            key={idx}
            className={cn(cardBase, cardHover, 'flex flex-col justify-between items-center h-full')}
          >
            <div className={cardGradient} />
            <CardHeader className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center mb-2">
                <div className="overflow-hidden relative w-24 h-24 rounded-full border-2 shadow-lg border-primary">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    unoptimized={member.avatar.includes('github')}
                  />
                </div>
                {member.social && (
                  <div className="flex gap-3 mt-3">
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        target="_blank"
                        className="transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        className="transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Linkedin size={20} />
                      </Link>
                    )}
                    {member.social.instagram && (
                      <Link
                        href={member.social.instagram}
                        target="_blank"
                        className="transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Instagram size={20} />
                      </Link>
                    )}
                    {member.social.bluesky && (
                      <Link
                        href={member.social.bluesky}
                        target="_blank"
                        className="transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <span className="text-sm">𝕏</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <CardTitle className="mt-2 text-xl font-semibold text-center">
                {member.name}
              </CardTitle>
              <CardDescription className="mb-2 text-center">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-2 items-center w-full">
              <p className="text-sm font-medium text-muted-foreground">{member.funFact}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {member.skills?.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="w-full">
              <span className="w-full text-xs text-center text-muted-foreground">
                Favorite snack: {member.favoriteSnack}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
