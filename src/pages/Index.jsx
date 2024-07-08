import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { gsap } from "gsap";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    gsap.from(".animate-header", { duration: 1, y: -50, opacity: 0, stagger: 0.2 });
    gsap.from(".animate-section-title", { duration: 1, x: -50, opacity: 0, stagger: 0.2 });
    gsap.from(".animate-card", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2 });
  }, []);

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white animate-background">
        <h1 className="text-5xl font-bold animate-header">NFT Project</h1>
        <p className="mt-4 text-xl animate-header">Discover the future of digital assets</p>
        <Button className="mt-8 animate-header">Join Now</Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-section-title">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-section-title">Roadmap</h2>
        <div className="space-y-4">
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Q1 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Milestone description for Q1 2023.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Q2 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Milestone description for Q2 2023.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Q3 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Milestone description for Q3 2023.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-section-title">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-card">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
              <p>CEO</p>
            </CardHeader>
            <CardContent>
              <p>Short bio of John Doe.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
              <p>CTO</p>
            </CardHeader>
            <CardContent>
              <p>Short bio of Jane Smith.</p>
            </CardContent>
          </Card>
          <Card className="animate-card">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Mike Johnson</CardTitle>
              <p>Lead Developer</p>
            </CardHeader>
            <CardContent>
              <p>Short bio of Mike Johnson.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-section-title">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
          <div>
            <Input placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Input placeholder="Subject" {...register("subject", { required: true })} />
            {errors.subject && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Textarea placeholder="Message" {...register("message", { required: true })} />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <Button type="submit" className="animate-card">Submit</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white animate-background">
        <p>Follow us on social media</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white">Twitter</a>
          <a href="#" className="text-white">Facebook</a>
          <a href="#" className="text-white">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;