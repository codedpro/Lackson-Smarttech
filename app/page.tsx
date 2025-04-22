import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, Smartphone, Server, Code, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative IT Solutions for a Digital Future</h1>
              <p className="text-xl mb-8">
                Professional computer repair, maintenance, and IT services in Mzuzu, Malawi
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/First%20sample-FNjX2pYPFG8rslwzng1vR4MAqNbDGp.png"
                alt="Lackson Smarttech Logo"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions to meet all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Monitor className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Computer Repair</CardTitle>
                <CardDescription>Hardware and software troubleshooting and repair services</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We diagnose and fix all types of computer issues, from hardware failures to software problems.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Hardware Upgrades</CardTitle>
                <CardDescription>Boost your computer's performance with hardware upgrades</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Upgrade your RAM, storage, graphics card, and other components to improve performance.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Mobile Device Repair</CardTitle>
                <CardDescription>Smartphone and tablet repair services</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We fix screens, batteries, and other components for all major smartphone and tablet brands.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Network Setup</CardTitle>
                <CardDescription>Home and business network installation and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We set up secure and reliable networks for homes and businesses of all sizes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Software Solutions</CardTitle>
                <CardDescription>Custom software development and installation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We develop and install software solutions tailored to your specific needs.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>IT Security</CardTitle>
                <CardDescription>Protect your data and systems from threats</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We implement robust security measures to keep your digital assets safe from cyber threats.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need IT Support?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today for professional IT services in Mzuzu, Malawi
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
