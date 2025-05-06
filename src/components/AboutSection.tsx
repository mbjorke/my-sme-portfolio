import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/enhanced-carousel";
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
      <div className="max-w-6xl mx-auto">
        <Carousel 
          opts={{
            loop: true,
            dragFree: true,
            containScroll: 'trimSnaps'
          }}
          autoPlay={true}
          autoPlayInterval={5000}
          showControls={true}
          showDots={true}
          className="w-full px-8"
        >
          <CarouselContent>
            {siteConfig.teamMembers.map((member, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col items-center justify-between rounded-2xl shadow-lg border border-border transition-all hover:shadow-xl hover:border-primary/20">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-2 border-primary shadow-lg mb-2 object-cover hover:scale-105 transition-transform"
                    />
                    <CardTitle className="text-xl font-semibold mt-2 text-center">{member.name}</CardTitle>
                    <CardDescription className="mb-2 text-center">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center gap-2">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}