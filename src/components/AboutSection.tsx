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
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {siteConfig.teamMembers.map((member, idx) => (
          <Card key={idx} className={cn(cardBase, cardGlow, 'h-full flex flex-col items-center justify-between', 'hover:border-primary/20')}>
            <div className={cardGradient} />
            <CardHeader className="flex flex-col items-center w-full">
              <div className="relative w-24 h-24 rounded-full border-2 border-primary shadow-lg mb-2 overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized={member.avatar.includes('github')}
                />
              </div>
              <CardTitle className="text-xl font-semibold mt-2 text-center">{member.name}</CardTitle>
              <CardDescription className="mb-2 text-center">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center gap-2 w-full">
              <p className="text-sm text-muted-foreground font-medium text-center">{member.funFact}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {member.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="w-full">
              <span className="text-xs text-muted-foreground text-center w-full">
                Favorite snack: {member.favoriteSnack}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}