import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { siteConfig } from "@/config/siteConfig";
  
  export function AboutSection() {
    return (
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="max-w-3xl mx-auto">
          <Carousel>
            <CarouselContent>
              {siteConfig.teamMembers.map((member, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full flex flex-col items-center justify-between rounded-2xl shadow-lg border border-border transition-transform hover:scale-105">
                    <CardHeader className="flex flex-col items-center">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-20 h-20 rounded-full border-2 border-primary shadow mb-2 object-cover"
                      />
                      <CardTitle className="text-xl font-semibold mt-2">{member.name}</CardTitle>
                      <CardDescription className="mb-2">{member.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-2">
                      <p className="text-sm text-accent font-medium text-center">{member.funFact}</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.skills?.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <span className="text-xs text-muted-foreground">
                        Favorite snack: {member.favoriteSnack}
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    );
  }