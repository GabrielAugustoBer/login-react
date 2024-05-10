import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import checkoutLaptop from "../assets/checkoutLaptop.svg";
import checkoutLaptop2 from "../assets/checkoutLaptop2.svg";
import noTempo from "../assets/noTempo.svg";
import Autoplay from "embla-carousel-autoplay"

export function SignIn() {
    return(
        <main className="h-screen flex w-full"> 
            <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
            <Carousel className="w-full max-w-lg"  plugins={[Autoplay({delay: 3200,}),
      ]}> 
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={checkoutLaptop2} alt="Finalizando pedido 2" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex aspect-square  rounded p-8">
                            <img src={noTempo} alt="Entrega de encomenda" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={checkoutLaptop} alt="Finalizando pedido" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            </div>

            <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
               <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-semi-bold tracking-tighter">
                        Entre com sua conta
                    </CardTitle>
                    <CardDescription>
                        Utilize seu e-mail ou o Github para entrar
                    </CardDescription>  
                </CardHeader>
                <CardContent>
                    <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email"placeholder="exemplo@email.com" type="email" required / >
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password"placeholder="Insira sua senha" type="password" required / >
                    </div>
                    <Button className="mt-6 w-full">Entrar</Button>

                    <div className="flex items-center gap-6 mt-4">
                        <Separator />
                            <span className="text-xs text-muted-foreground">Ou</span>
                        <Separator />
                    </div>
                    <Button variant="outline" className="mt-4 w-full"><GitHubLogoIcon className="mr-2"/>Entrar com o Github</Button>
                </CardContent>
                <CardFooter>
                    <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com nossos <span className="text-primary cursor-pointer no-underline hover:underline">Termos de Uso</span> e com a <span className="text-primary cursor-pointer no-underline hover:underline">Política de Privacidade</span>.</p>
                </CardFooter>
               </Card>
            </section>
        </main>
    )
}