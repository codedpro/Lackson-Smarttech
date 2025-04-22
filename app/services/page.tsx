import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Monitor,
  Cpu,
  Smartphone,
  Server,
  Code,
  Shield,
  Wifi,
  Database,
  HardDrive,
  Printer,
  Clock,
  Users,
} from "lucide-react"

export default function Services() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions for all your technology needs
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
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Virus and malware removal</li>
                <li>Operating system installation and repair</li>
                <li>Hardware diagnostics and replacement</li>
                <li>Data recovery services</li>
                <li>System optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cpu className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Hardware Upgrades</CardTitle>
              <CardDescription>Boost your computer's performance with hardware upgrades</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>RAM upgrades</li>
                <li>Storage upgrades (HDD to SSD)</li>
                <li>Graphics card installation</li>
                <li>Processor upgrades</li>
                <li>Cooling system improvements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Mobile Device Repair</CardTitle>
              <CardDescription>Smartphone and tablet repair services</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Screen replacement</li>
                <li>Battery replacement</li>
                <li>Charging port repair</li>
                <li>Water damage recovery</li>
                <li>Software troubleshooting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Server className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Network Setup</CardTitle>
              <CardDescription>Home and business network installation and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Wired and wireless network setup</li>
                <li>Router configuration</li>
                <li>Network security implementation</li>
                <li>Network troubleshooting</li>
                <li>Network expansion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Software Solutions</CardTitle>
              <CardDescription>Custom software development and installation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Custom software development</li>
                <li>Software installation and configuration</li>
                <li>Software updates and maintenance</li>
                <li>Legacy software support</li>
                <li>Software training</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>IT Security</CardTitle>
              <CardDescription>Protect your data and systems from threats</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Antivirus and anti-malware installation</li>
                <li>Firewall setup and configuration</li>
                <li>Security audits</li>
                <li>Data encryption</li>
                <li>Security training</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wifi className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Internet Services</CardTitle>
              <CardDescription>Internet setup and troubleshooting</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Internet connection setup</li>
                <li>Wi-Fi optimization</li>
                <li>Bandwidth management</li>
                <li>Internet security</li>
                <li>Connection troubleshooting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Data backup, recovery, and management solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Data backup solutions</li>
                <li>Data recovery services</li>
                <li>Cloud storage setup</li>
                <li>Database management</li>
                <li>Data migration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HardDrive className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>System Maintenance</CardTitle>
              <CardDescription>Regular maintenance to keep your systems running smoothly</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Regular system checkups</li>
                <li>Software updates</li>
                <li>Hardware cleaning</li>
                <li>Performance optimization</li>
                <li>Preventive maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Printer className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Printer Services</CardTitle>
              <CardDescription>Printer setup, repair, and maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Printer installation and setup</li>
                <li>Printer repair</li>
                <li>Ink and toner replacement</li>
                <li>Network printer configuration</li>
                <li>Print quality optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>IT Consulting</CardTitle>
              <CardDescription>Expert advice on IT solutions and strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Technology assessment</li>
                <li>IT strategy development</li>
                <li>Cost optimization</li>
                <li>Technology recommendations</li>
                <li>Digital transformation guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>IT Training</CardTitle>
              <CardDescription>Training sessions for individuals and organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Basic computer skills training</li>
                <li>Software-specific training</li>
                <li>Cybersecurity awareness</li>
                <li>Productivity tool training</li>
                <li>Custom training programs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
