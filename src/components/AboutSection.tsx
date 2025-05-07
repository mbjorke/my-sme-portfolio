import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { cardBase, cardGradient, cardGlow } from "@/styles/card-decorations";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.teamMembers.map((member, idx) => (
          <Card key={idx} className={cn(cardBase, cardGlow, 'flex flex-col justify-between items-center h-full')}>
            <div className={cardGradient} />
            <CardHeader className="flex flex-col items-center w-full">
              <div className="overflow-hidden relative mb-2 w-24 h-24 rounded-full border-2 shadow-lg border-primary">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized={member.avatar.includes('github')}
                />
              </div>
              <CardTitle className="mt-2 text-xl font-semibold text-center">{member.name}</CardTitle>
              <CardDescription className="mb-2 text-center">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-2 items-center w-full">
              <p className="text-sm font-medium text-center text-muted-foreground">{member.funFact}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {member.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary-foreground"
                  >
                    {skill}
                  </span>
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